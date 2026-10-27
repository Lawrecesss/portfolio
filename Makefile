# Portfolio — dev + container + Cloud Run workflow.
# Override any variable inline, e.g.  make deploy REGION=us-central1 TAG=v2

SHELL := /bin/bash

# ---- config -----------------------------------------------------------------
PROJECT_ID ?= $(shell gcloud config get-value project 2>/dev/null)
REGION     ?= asia-southeast1
SERVICE    ?= portfolio
AR_REPO    ?= containers
TAG        ?= $(shell git rev-parse --short HEAD 2>/dev/null || echo latest)
PLATFORM   ?= linux/amd64
PORT       ?= 8080

IMAGE      := $(REGION)-docker.pkg.dev/$(PROJECT_ID)/$(AR_REPO)/$(SERVICE)
LOCAL_TAG  := $(SERVICE):dev
CONTAINER  := $(SERVICE)-local

.DEFAULT_GOAL := help

# ---- dev --------------------------------------------------------------------
## install: install node dependencies from the lockfile
install: node_modules

node_modules: package-lock.json package.json
	npm ci
	@touch node_modules

## dev: run the Next.js dev server with hot reload (http://localhost:3000)
dev: node_modules
	npm run dev

## build: production build (standalone output)
build: node_modules
	npm run build

## start: serve the production build locally
start: build
	npm run start

## lint: run eslint
lint: node_modules
	npm run lint

## typecheck: type-check without emitting files
typecheck: node_modules
	npx tsc --noEmit

## clean: remove build output and dependencies
clean:
	rm -rf .next out node_modules

# ---- container --------------------------------------------------------------
## docker-build: build the container image locally
docker-build:
	docker build -t $(LOCAL_TAG) .

## docker-run: run the image locally (PORT, default 8080) as Cloud Run would
docker-run: docker-build
	docker rm -f $(CONTAINER) 2>/dev/null || true
	docker run --rm -d --name $(CONTAINER) -p $(PORT):$(PORT) -e PORT=$(PORT) $(LOCAL_TAG)
	@echo "serving on http://localhost:$(PORT)"

## docker-logs: tail logs from the local container
docker-logs:
	docker logs -f $(CONTAINER)

## docker-stop: stop the local container
docker-stop:
	docker rm -f $(CONTAINER) 2>/dev/null || true

## docker-sh: open a shell inside the local container
docker-sh:
	docker exec -it $(CONTAINER) sh

## smoke: build, run, hit /api/healthz, then tear down
smoke: docker-run
	@for i in $$(seq 1 30); do \
		curl -fsS http://localhost:$(PORT)/api/healthz && break || sleep 1; \
	done; echo
	@curl -fsS -o /dev/null -w 'GET / -> %{http_code}\n' http://localhost:$(PORT)/
	@$(MAKE) --no-print-directory docker-stop

# ---- google cloud -----------------------------------------------------------
## gcp-setup: enable required APIs and create the Artifact Registry repo (once)
gcp-setup: guard-project
	gcloud services enable run.googleapis.com artifactregistry.googleapis.com \
		cloudbuild.googleapis.com --project $(PROJECT_ID)
	gcloud artifacts repositories describe $(AR_REPO) --location $(REGION) \
		--project $(PROJECT_ID) >/dev/null 2>&1 \
		|| gcloud artifacts repositories create $(AR_REPO) --repository-format docker \
		   --location $(REGION) --project $(PROJECT_ID) \
		   --description "Container images"
	gcloud auth configure-docker $(REGION)-docker.pkg.dev --quiet

## push: build for linux/amd64 and push to Artifact Registry
push: guard-project
	docker build --platform $(PLATFORM) -t $(IMAGE):$(TAG) -t $(IMAGE):latest .
	docker push $(IMAGE):$(TAG)
	docker push $(IMAGE):latest

## deploy: push the image, then roll it out to Cloud Run
deploy: push
	gcloud run deploy $(SERVICE) \
		--image $(IMAGE):$(TAG) \
		--region $(REGION) \
		--project $(PROJECT_ID) \
		--platform managed \
		--allow-unauthenticated \
		--port 8080 \
		--cpu 1 \
		--memory 512Mi \
		--min-instances 0 \
		--max-instances 3
	@$(MAKE) --no-print-directory url

## deploy-cloudbuild: let Cloud Build build the image (no local docker needed)
deploy-cloudbuild: guard-project
	gcloud run deploy $(SERVICE) \
		--source . \
		--region $(REGION) \
		--project $(PROJECT_ID) \
		--allow-unauthenticated \
		--port 8080
	@$(MAKE) --no-print-directory url

## url: print the deployed service URL
url: guard-project
	@gcloud run services describe $(SERVICE) --region $(REGION) \
		--project $(PROJECT_ID) --format 'value(status.url)'

## cloud-logs: tail Cloud Run logs
cloud-logs: guard-project
	gcloud beta run services logs tail $(SERVICE) --region $(REGION) --project $(PROJECT_ID)

guard-project:
	@test -n "$(PROJECT_ID)" || { \
		echo "PROJECT_ID is empty. Run 'gcloud config set project <id>' or 'make deploy PROJECT_ID=<id>'."; \
		exit 1; }

# ---- meta -------------------------------------------------------------------
## help: list available targets
help:
	@echo "Targets:"
	@grep -hE '^## ' $(MAKEFILE_LIST) | sed -e 's/## //' \
		| awk -F': ' '{printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'
	@echo
	@echo "Config: PROJECT_ID=$(PROJECT_ID) REGION=$(REGION) SERVICE=$(SERVICE) TAG=$(TAG)"

.PHONY: install dev build start lint typecheck clean \
        docker-build docker-run docker-logs docker-stop docker-sh smoke \
        gcp-setup push deploy deploy-cloudbuild url cloud-logs guard-project help

# Portfolio

Personal portfolio site — [Next.js](https://nextjs.org/) 14 (App Router), Tailwind, packaged as a
single container for [Cloud Run](https://cloud.google.com/run).

## Quick start

```bash
make install   # npm ci
make dev       # dev server on http://localhost:3000
make help      # list every target
```

## Local development

| Target           | What it does                                      |
| ---------------- | ------------------------------------------------- |
| `make dev`       | Next.js dev server with hot reload (port 3000)     |
| `make build`     | Production build (`output: "standalone"`)          |
| `make start`     | Serve the production build locally                 |
| `make lint`      | ESLint                                             |
| `make typecheck` | `tsc --noEmit`                                     |
| `make clean`     | Remove `.next`, `out`, `node_modules`              |

## Container

The `Dockerfile` is a three-stage build (`deps` → `builder` → `runner`). The runner stage copies
only `.next/standalone`, `.next/static` and `public`, runs as a non-root `nextjs` user, and starts
`node server.js`. Image is ~227MB.

```bash
make docker-build   # build portfolio:dev
make docker-run     # run it on :8080, same contract as Cloud Run
make docker-logs    # tail container logs
make smoke          # build, run, probe /api/healthz and /, tear down
make docker-stop
```

The server binds `0.0.0.0` and reads `PORT` (default `8080`), which is what Cloud Run injects.
`GET /api/healthz` returns `{"status":"ok", ...}` and backs the Docker `HEALTHCHECK`.

## Deploying to Cloud Run

One-time setup — enables the APIs, creates the Artifact Registry repo, and configures Docker auth:

```bash
gcloud auth login
gcloud config set project <your-project-id>
make gcp-setup
```

Then, for each deploy:

```bash
make deploy          # build for linux/amd64, push to Artifact Registry, roll out
make url             # print the service URL
make cloud-logs      # tail Cloud Run logs
```

No local Docker? Let Cloud Build do the build instead:

```bash
make deploy-cloudbuild
```

### Configuration

Every variable is overridable on the command line:

| Variable     | Default                              |
| ------------ | ------------------------------------ |
| `PROJECT_ID` | current `gcloud config` project      |
| `REGION`     | `asia-southeast1`                    |
| `SERVICE`    | `portfolio`                          |
| `AR_REPO`    | `containers`                         |
| `TAG`        | short git SHA                        |
| `PORT`       | `8080`                               |

```bash
make deploy REGION=us-central1 TAG=v1.2.0
```

The service deploys with 1 CPU / 512Mi, scaling 0→3 instances, and `--allow-unauthenticated` so
it is publicly reachable.

### Custom domain

Map a domain once the service is live:

```bash
gcloud beta run domain-mappings create --service portfolio \
  --domain lhshein.dev --region asia-southeast1
```

Then add the DNS records it prints at your registrar.

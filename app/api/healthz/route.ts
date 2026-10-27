import { NextResponse } from "next/server";

// Liveness/readiness probe for the container (and the Docker HEALTHCHECK).
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "portfolio",
    uptime: Math.round(process.uptime()),
  });
}

import { NextRequest } from "next/server";
import { tmdbServer } from "@/lib/tmdb";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> },
) {
  const { path } = await context.params;

  const endpoint = path.join("/");

  const searchParams = req.nextUrl.searchParams;

  const query: Record<string, string> = {};

  searchParams.forEach((value, key) => {
    query[key] = value;
  });

  const res = await tmdbServer.get(`/${endpoint}`, {
    params: query,
  });

  return Response.json(res.data);
}

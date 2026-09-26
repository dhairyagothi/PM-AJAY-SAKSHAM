import startServer from "../dist/server/server.js";

export default async function handler(request) {
  const requestUrl = new URL(request.url);
  const originalPath = requestUrl.searchParams.get("__vercel_path");

  if (originalPath) {
    requestUrl.searchParams.delete("__vercel_path");
    requestUrl.pathname = originalPath;
  }

  return startServer.fetch(new Request(requestUrl, request), process.env, {});
}

import { users } from "./data";

const headers = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "Content-Type",
};

const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    // respond with text/html
    if (path === "/") return new Response("Welcome to Bun!");

    // GET /api/users
    if (path === "/api/users") {
      return new Response(JSON.stringify(users), { headers });
    }

    // 404s
    return new Response("Page not found", { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);

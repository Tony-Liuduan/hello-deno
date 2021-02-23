import { serve } from "https://deno.land/std@0.62.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}

// deno run --allow-net --reload 02.httpServer.ts
// --reload 是第一次执行时缓存模块用的

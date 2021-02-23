const hostname = "127.0.0.1";
const port = 8081;
const listener = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`);
for await (const conn of listener) {
  Deno.copy(conn, conn);
}

// deno run --allow-net 06.tcp.ts
// nc 127.0.0.1 8081 连接 tcp
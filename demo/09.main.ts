// import.meta.url 就是当前 main.ts 所在路径
const worker = new Worker(new URL("09.worker.ts", import.meta.url).href, {
    type: "module",
});

worker.onmessage = (e: MessageEvent) => {
    console.log(`Main: Received msg from deno worker - ${e.data}`);
};

worker.postMessage("Hello Deno");

// deno run --allow-read 09.main.ts
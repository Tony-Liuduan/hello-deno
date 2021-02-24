self.onmessage = (e: MessageEvent) => {
    console.log(`Worker: Received from main - ${e.data}`);
    self.postMessage("Hello Semlinker");
};

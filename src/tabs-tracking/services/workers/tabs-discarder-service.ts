self.onmessage = (e: MessageEvent<string>) => {
    console.log(e.data);
}

postMessage("loaded");

export default {};
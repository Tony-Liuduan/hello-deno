let myBlobParts = ["<html><h2>Hello Semlinker</h2></html>"];
let myBlob = new Blob(myBlobParts, {
    type: "text/html",
    ending: "transparent",
});

console.log(myBlob.size + " bytes size");  // 37
console.log(myBlob.type + " is the type"); // text/html
console.log(await myBlob.slice().text() === myBlobParts[0]); // true
console.log(myBlob.slice() !== myBlob); // true


// blobParts：它是一个由 ArrayBuffer，ArrayBufferView，Blob，DOMString 等对象构成的数组。DOMStrings 会被编码为 UTF-8。options：一个可选的对象，包含以下两个属性：
// type —— 默认值为 ""，它代表了将会被放入到 blob 中的数组内容的 MIME 类型。endings —— 默认值为 "transparent"，用于指定包含行结束符 \n 的字符串如何被写入。 它是以下两个值中的一个： "native"，代表行结束符会被更改为适合宿主操作系统文件系统的换行符，或者 "transparent"，代表会保持 blob 中保存的结束符不变。

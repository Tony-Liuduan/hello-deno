const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  // 内核到用户空间再到内核的必要拷贝，这里的 copy() 函数不会产生额外的昂贵操作，从文件中读到的数据会原样写入标准输出流。这反映了 Deno I/O 流的通用设计目标
  await Deno.copy(file, Deno.stdout);
  file.close();
}

// deno run --allow-read 05.cat.ts ../README.md
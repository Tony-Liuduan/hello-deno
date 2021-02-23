# hello-deno

1. 内置了 V8 引擎，用来解释 JavaScript
2. 内置了 tsc 引擎，解释 TypeScript
3. 它使用 Rust (not node C++) 语言开发，由于 Rust 原生支持 WebAssembly，所以它也能直接运行 WebAssembly
4. 它的异步操作不使用 libuv 这个库，而是使用 Rust 语言的 Tokio 库，来实现事件循环（event loop）

## 权限
--allow-read：打开读权限，可以指定可读的目录，比如--allow-read=/temp。
--allow-write：打开写权限。
--allow-net=google.com：允许网络通信，可以指定可请求的域，比如--allow-net=google.com。
--allow-env：允许读取环境变量。

## 引用
1. https://juejin.cn/post/6854573220432248839
2. http://www.ruanyifeng.com/blog/2020/01/deno-intro.html

De（Destroy）no(Node)

```
brew install deno
deno --version
    # deno 1.2.3
    # v8 8.6.334
    # typescript 3.9.2
deno upgrade
# deno upgrade --version 1.0.1
deno run https://deno.land/std/examples/welcome.ts
deno > Deno
```

## deno vs node

1. 模块
    node - commonjs / esm `require("./deepCopy.js")`
    deno - esm `import { deepCopy } from "./deepCopy.js";`
         - 1. 必须指定扩展名, Deno 的所有模块都要通过入口脚本加载，不能通过模块名加载，所以必须带有脚本后缀名
         - 2. import url 可直接引用线上资源, 无需下载到本地
         - 3. 不支持 `import foo from "foo.ts";`
2. 模块引用方式
    node - require('fs')
    deno - 方法都在 Deno 全局对象上 `Deno.readFileSync("./data.txt");` 不需要 require('fs')
3. 包管理
    node - npm
    deno - 原生支持
         - 不支持多版本管理
4. 包发布
    node - npmjs.com
    deno - 任何地址
5. 启动入口
    node - package.json 配置
    deno - url 直接引入
6. ts
    node - 需借助第三方支持
    deno - 默认支持
         - 它的内部会根据文件后缀名判断，如果是.ts后缀名，就先调用 TS 编译器，将其编译成 JavaScript；如果是.js后缀名，就直接传入 V8 引擎运行。
7. 异步操作
    node - callback / koa-async await
    deno - 默认 promise `const data = await Deno.readFile("./data.txt");`
8. 打包格式化
    node - webpack gulp babel eslint
    deno - 原生支持
         - deno -h
         - deno lint
         - deno bundle ./src/index.ts ./dist/index.js (自带 tree sharking)
         - deno fmt
9. 安全
    node - 无安全限制
    deno - 默认安全
         - `deno run -A xxx` 解除默认安全限制
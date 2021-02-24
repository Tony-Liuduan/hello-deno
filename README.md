# hello-deno

1. 内置了 V8 引擎，用来解释 JavaScript
2. 内置了 tsc 引擎，解释 TypeScript
3. 它使用 Rust (not node C++) 语言开发，由于 Rust 原生支持 WebAssembly，所以它也能直接运行 WebAssembly
4. 它的异步操作不使用 libuv 这个库，而是使用 Rust 语言的 Tokio 库，来实现事件循环（event loop）

## 权限
--allow-env ：允许访问环境变量；
--allow-net=google.com ：允许网络访问, 可以指定可请求的域，比如--allow-net=google.com；
--allow-read=<allow-read> ：允许文件系统读取权限；
--allow-write=<allow-write> ：允许文件系统写入访问, 您可以指定一系列用逗号分隔的目录或文件，来提供文件系统白名单；
--allow-run ：允许运行子进程, 允许运行子进程。请注意，子进程不在沙箱中运行，因此没有与 deno 进程相同的安全限制，请谨慎使用
--allow-plugin ：允许加载插件；
--allow-all ：允许所有权限(与-A相同)。

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
deno info
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
         - 使用 await 关键字而不需要将其封装到异步函数中, Deno 在其内部实现了顶层的 await 支持
8. 打包格式化
    node - webpack gulp babel eslint
    deno - 原生支持
         - deno -h
         - deno lint
         - deno bundle ./src/index.ts ./dist/index.js (自带 tree sharking)
         - deno fmt app.ts (内置 Prettier 工具相关库)
9. 安全
    node - 无安全限制
         - 没有什么可以阻止 Node.js 程序获取你系统上的 SSH 密钥或其他任何东西
    deno - 默认安全
         - `deno run -A xxx` 解除默认安全限制


## 问题
1. 版本管理 ??
2. 事件循环 ??
3. 如果写了 allow-read 还安全吗? 
    可以指定文件读写, 白名单机制
4. Rust 相对 c++ 带来了什么好处 ??
    - WebAssembly
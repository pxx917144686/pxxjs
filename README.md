# pxxjs

![Logo](assets/images/icons/icon-128x128.png)


## 默认情况下**Unreadable** 选项处于禁用状态;
来源于 [JS Nice](http://www.jsnice.org/). 
需要安装油猴脚本 [xx_helper.user.js](https://github.com/pxx917144686/xx/raw/refs/heads/main/userscript/xx_helper.user.js) 


## 功能

- 本地执行.
- 源代码美化器/语法高亮器.
- 模糊处理的 代码 可读性.
- 反混淆:
  - **Eval**, 例如 Packer、WiseLoop
  - **Array**, 例如 Javascript Obfuscator、Free JS Obfuscator
  - **URL 编码**, 例如 bookmarklet
  - [_Number](https://jsfiddle.net/ps5anL99/embedded/result,js,html,css/) 
  - [Packer](http://dean.edwards.name/packer/)
  - [Javascript Obfuscator](https://javascriptobfuscator.com/Javascript-Obfuscator.aspx)
  - [Free JS Obfuscator](http://www.freejsobfuscator.com/)
  - [Obfuscator.IO](https://obfuscator.io/) 
  - [My Obfuscate](http://myobfuscate.com/)
  - [JSFuck](https://github.com/aemkei/jsfuck)
  - [JJencode](http://utf-8.jp/public/jjencode.html)
  - [AAencode](http://utf-8.jp/public/aaencode.html)
  - [WiseLoop](http://wiseloop.com/demo/php-javascript-obfuscator)



## 本地执行

### 安装

    git clone https://github.com/pxx917144686/xx.git
    cd xx

安装 **Bundler**:

    gem install bundler

安装 **Jekyll** 和其他 [依赖](https://pages.github.com/versions/) :

    bundle install

修复 EventMachine C 扩展在 Windows 10 上未加载的问题:

    gem uninstall eventmachine
    gem install eventmachine --platform ruby

Install Workbox CLI:

    npm install workbox-cli --global

### 执行 安装

    npm start

或者，使用:

    npm run watch

浏览器中打开 <http://localhost:4000/xx/>

### Build

    npm run build





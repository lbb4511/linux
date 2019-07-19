# IntelliJ IDE

## 设置

JetBrains 的设置在旗下的 IDE 中是通用的，所以配置是可以随时导入导出的。

进入设置的方式为: `File->Settings`。

### 界面设置

- 设置行号: `show line numbers`
- 设置 softwrap: `soft Wraps`
- 设置工程和文件编码
- 设置换行模式
- 设置 index 空格数

### keymaps

- 设置 emacs 移动光标方式
- 设置基本的编辑方式
- 设置快捷打开文件方式
- 设置快捷访问功能方式
- 设置浏览器标签切换方式
- 设置格式化代码方式

### 配置文件

`idea.exe.vmoptions`

### 快捷键修改

1. ctrl + alt + left/right

   在 idea 中，ctrl + alt + left/right 用于在光标在文件的上一个未知/下一个位置之间跳转，非常方便。

   但是默认 linux mint 是将这个快捷键分配给了工作区的上一个工作区/下一个工作区，直接冲突了。

   修改方式，"系统设置" --> "键盘" --> "快捷键" --> "工作区"。

   > 注: 我一般喜欢设置为 `ctrl + shift + left/right`

1. ctrl + alt + L

   在 idea 中这个快捷键用来格式化代码，默认 linux mint 是将这个快捷键分配给了锁定屏幕。

   修改方式，"系统设置" --> "键盘" --> "快捷键" --> "系统" --> "锁定屏幕"。

   > 注: 我一般喜欢设置为 `ctrl + alt + delete`，默认 linux mint 中这个快捷键是给注销用的，考虑到注销极少使用，所以分配给锁屏，顺便和 windows 下的使用习惯保持一致。

### 工作区

默认工作区的几个快捷键都是 `ctrl + alt + (left|right|up|down)` ，上面为了避免和 IntelliJ Idea 冲突，我们修改了 ctrl + alt + left/right，为了保持一致，其他几个快捷键也相应修改过来。这样连续使用时，左手按住 ctrl + shift, 右手按 上下左右就可以关联到 4 个不同的快捷键，比较方便。

修改方式，"系统设置" --> "键盘" --> "快捷键" --> "常规":

- "切换 缩放" 修改为 `Shift+Ctrl+Down`
- "切换 展览" 修改为 `Shift+Ctrl+U`

## 软件

### IntelliJ IDEA

- Java

### AppCode

- OBJECTIVE-C
- SWIFT
- C++

### CLion

- C
- C++

### DataGrip

- sql

### GoLand

- go

### PhpStorm

- php

### PyCharm

- Python

### Rider

- .NET

### RubyMine

- Ruby

### WebStorm

- Web
  - Angular
  - React
  - Vue.js
- Mobile
  - Ionic
  - Cordova
  - React Native
- Server
  - Node.js
  - Meteor
- Desktop
  - Electron

## 参考资料

- [快捷键 PDF:WebStorm_ReferenceCard](http://www.jetbrains.com/webstorm/documentation/WebStorm_ReferenceCard.pdf)

# SublimeText

[**官网**](https://www.sublimetext.com)

## 简介

选择一个好的编辑器，可以极大的提高你的开发效率。我使用过 Vim、Emacs 和 SublimeText。个人还是比较推荐现代化的 sublimeText 编辑器配合 vim,emacs 的操作方式。

更多内容，可以查看官方推荐的非官方文档->[文档地址](http://docs.sublimetext.info/en/latest/index.html)。

## 特色功能

- ctrl+p，搜索。这个搜索可以左侧的 Folders 里所以文件，而且是模糊搜索，不需要完整的文件名。配合#, @, :可以搜索变量，函数，行数。
- 多行编辑。按住 ctrl 加左击，可以出现多个光标位置。
- 多重选择， ctrl+d 可以多重选择，结合光标键，可以批量修改。
- 多屏编辑，alt+shift+数字键。
- Projects，通过 View->Side Bar->show Side Bar 左侧文件结构管理。
- snippet, 不同格式的文件，可以设置不同的 snippet,就是简写，通过 tab 扩展成相应的内容。
- 各种插件支持
- 正则表达式搜索,比如我要删除所有的空行，可以使用`^[\s]*\n`来选择所有空行。可以使用`(?<=<h2>).+(?=</h2>)`来匹配 h2 标签内的内容。
- ctrl+shift+p，功能菜单。只有你想不到，没有做不到的事情。

## 下载安装

ST3 虽然没有提供稳定版本，但是相比 ST2，速度提升还是很明显的。缺点就是插件不够完善，以及插件的编写全部采用 Python3.x 版本。这里给出 ST3[下载地址](http://www.sublimetext.com/3)。

个人最喜欢的一点新特性是：新增了跳转到函数定义处功能，在大菜单 Goto 中可以查看到。

首次使用，建议先打开侧栏，方便管理文件结构。打开方式:`View->Side Bar->Show Side Bar`。

## 安装插件

Package Control 插件是一个方便 Sublime text 管理插件的插件，但因为 Sublime Text 3 更新了 Python 的函数，API 不同了，导致基于 Python 开发的插件很多都不能工作，Package Control 原来的安装方法都失效了。

网上有 2 种使用 Git 的安装方法，感觉太麻烦了。此处将 wbond 网站的 ST3 Package Control 简便安装方法翻译转至此处，方便大家查阅。

从菜单 View - Show Console 或者 ctrl + ~ 快捷键，调出 console。将以下 Python 代码粘贴进去并 enter 执行，不出意外即完成安装。

Package Control 主文件下载地址：[Package Control](https://sublime.wbond.net/installation#st3) | [github](https://github.com/wbond/sublime_package_control)。以下提供 ST3 和 ST2 的安装代码：

- Sublime Text2

```
import urllib2,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
```

- Sublime Text3

```
import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

- 手动安装：
  可能由于各种原因，无法使用代码安装，那可以通过以下步骤手动安装 Package Control：
  1.  点击 Preferences > Browse Packages 菜单
  2.  进入打开的目录的上层目录，然后再进入 Installed Packages/目录
  3.  下载 [Package Control.sublime-package](https://sublime.wbond.net/Package%20Control.sublime-package) 并复制到 Installed Packages/目录
  4.  重启 Sublime Text。

## 配置修改

配置包括 Preferences->Settings-Default 和 Key Bindings-Default。

修改配置文件时，以上两个默认文件最好不要修改，自行讲需要设置的参数写入到 Settings-User 和 Key Bindings-User 里，它们会自动覆盖 Default 相同属性。

### 备份配置

配置文件的路径，点击 Preferences->Browse Packages 打开目录，找到 User 目录，这里的文件就是自己的配置文件，最好备份，方便下次替换。

### 已安装的插件

```
{
    "in_process_packages":
    [
    ],
    "installed_dependencies":
    [
        "0_package_control_loader",
        "bz2"
    ],
    "installed_packages":
    [
        "AlignTab",
        "All Autocomplete",
        "AutoFileName",
        "BracketHighlighter",
        "CSScomb",
        "DocBlockr",
        "EditorConfig",
        "Emmet",
        "Git",
        "HTML-CSS-JS Prettify",
        "JSHint Gutter",
        "LiveStyle",
        "Markdown Preview",
        "Modific",
        "Package Control",
        "SideBarEnhancements",
        "Sublimerge Pro",
        "Terminal",
        "Theme - Phoenix"
    ]
}
```

## 插件列表

`Ctrl+Shift+P`打开命令面板输入命令 pcip 回车选择你需要的插件安装吧

- 中文插件[ChineseLocalization](https://github.com/rexdf/Chinese-Localization) 有简体中文繁体中文和日文
- [Git](https://github.com/kemayo/sublime-text-git) 插件集成了 git 的常用功能，使用之前需要安装 git 并写入环境变量中。
- 终端插件 Terminal
- [Emmet](https://github.com/sergeche/emmet-sublime) 是一个前端开发的利器，其前身是 Zen Coding。它让编写 HTML 代码变得简单。Emmet 的基本用法是：输入简写形式，然后按 Tab 键。
- [SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements) 是一款很实用的右键菜单增强插件，有以 diff 形式显示未保存的修改、在文件管理器中显示该文件、复制文件路径、在侧边栏中定位该文件等功能，也有基础的诸如新建文件/目录，编辑，打开/运行，显示，在选择中/上级目录/项目中查找，剪切，复制，粘贴，重命名，删除，刷新等常见功能。
- [SublimeCodeIntel](https://github.com/SublimeCodeIntel/SublimeCodeIntel) 是一个代码提示、补全插件，支持 JavaScript、Mason、XBL、XUL、RHTML、SCSS、Python、HTML、Ruby、Python3、XML、Sass、XSLT、Django、HTML5、Perl、CSS、Twig、Less、Smarty、Node.js、Tcl、TemplateToolkit 和 PHP 等语言，是 Sublime Text 自带代码提示功能的很好扩展。它还有一个功能就是跳转到变量、函数定义的地方，十分方便。
- [MarkDown Editing](https://github.com/SublimeText-Markdown/MarkdownEditing)通过适当的颜色高亮和其它功能来更好地完成这些任务。
- [FileDiffs](https://github.com/colinta/SublimeFileDiffs)允许你看到 SublimeText 中两个不同文件的差异。你可以比较的对象可以是从剪贴板中复制的数据，或工程中的文件，当前打开的文件等。
- [Diffy](https://github.com/zsong/diffy)开 2 个窗口，分别打开需要比较的文件。已经打开 4 个窗口时，要把 2 个文件拉到上面 2 个窗口。

```
Windows/linux下:
开启对比: CTRL(Super)+K, CTRL(Super)+D
取消对比: CTRL(Super)+K, CTRL(Super)+C
```

- [`OmniMarkupPreviwer`](https://github.com/timonwong/OmniMarkupPreviewer)：实时在浏览器中预，而 MarkdownPreview 是需要手动生成的和 F5 的。览如果双屏的话，应该具有不错的体验。快捷键如下：

```
Ctrl+Alt+O: Preview Markup in Browser.
Ctrl+Alt+X: Export Markup as HTML.
Ctrl+Alt+C: Copy Markup as HTML.
```

- [`SublimeTextTrans`](https://github.com/vhanla/SublimeTextTrans)半透明
- [`Terminal`]()控制台
- AlignTab 变量竖向对齐工具。
- All Autocomplete 代码补全插件。
- EditorConfig 代码编码规范。
- MultiEditUtils 增强了 SublimeText 内置的“multi-cursor”和“multi-selection”功能。

## 论坛

- [Sublime 的一些插件](https://github.com/sublimehq/Packages)
- [Sublime 中文论坛](http://sublimetext.iaixue.com)

## 设置

- 点击 Preferences->Sttings 打开设置

  ```py
  {
      "hot_exit": false,
      "color_scheme": "Packages/User/theme/Peacock (SL).tmTheme",
      "caret_style": "phase",
      "font_size": 14, // 字体大小14
      "font_face": "汉仪颜楷W", // 字体 "Microsoft YaHei Mono"，"Monaco"
      "default_line_ending": "unix", //unix风格换行符
      "rulers": [80], //宽度指导线

      "highlight_modified_tabs": true,
      "show_encoding": true,

      "word_wrap":false, // 自动换行
      "highlight_line": true, // 当前行高亮
      "highlight_modified_tabs": true, // 高亮未保存文件
      "show_encoding": true, //显示当前文件的编码
      "scroll_past_end": true, //不滚动过头
      "save_on_focus_lost": false, // 窗口失焦立即保存文件

      "auto_find_in_selection": true, // 开启选中范围内搜索
      "draw_minimap_border": true,     // 右侧代码预览时给所在区域加上边框

      // 显示制表符和空格
      "draw_white_space":"all",
      "tab_size": 4, //Tab转换
      "translate_tabs_to_spaces": false, //Tab转换使能
      // Tab缩进（制表符缩进） 改为 4个空格
      "translate_tabs_to_spaces": true,

      "update_check": false, // 关闭自动更新
      "show_full_path": true, //显示全路径
      "bold_folder_labels": true, //侧边栏文件夹文件加粗以区别于文件
      "trim_trailing_white_space_on_save": true, // 自动移除行尾多余空格
      "ensure_newline_at_eof_on_save": true, //文件末尾自动保留一个空行

      //库函数提示
      "enable_signatures_tooltip": true,
      "merge_signatures_and_doc":true,

      "ignored_packages"://Vim设置
      [
          "Vintage"
      ],
      "theme": "Adaptive.sublime-theme", // Adaptive.sublime-theme，Phoenix Dark.sublime-theme
      // 屏蔽文件
      "file_exclude_patterns": ["*.sublime-project","*.sublime-workspace"],
      "original_color_scheme": "Packages/User/theme/Peacock (SL).tmTheme",
      "phoenix_color_green": true,
      "phoenix_dirty_bottom_bar_red": true,
      "phoenix_eighties": true,
      "phoenix_highlight_current_tab": true,
      "phoenix_sidebar_tree_large": true,
      "phoenix_solid_current_tab": true,
      "phoenix_tabs_medium": true,
      "rulers":
      [
          80,
          100,
          120
      ],
      "soda_folder_icons": false,
      "tab_size": 4,
      "translate_tabs_to_spaces": true,
      "word_separators": "./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?",
      "word_wrap": true,
      "wrap_width": 0
  }
  ```

- Windows 下强烈推荐使用`yaheiconsolashybrid`字体。
- Mac 下选择的是`Monaco`字体。

## 项目管理

1. 打开一个文件夹：

   ![打开一个文件夹](../img/2.png)

2. 项目另存为：

   ![项目另存为](../img/3.png)

3. 设置快捷键

   ```py
   [
       { "keys": ["ctrl+alt+p"], "command": "prompt_select_workspace" }
   ]
   ```

## Golang 开发环境

- 用 Sublime 开发 golang 的环境很简单，需要安装一个代码格式化`goimports`包
  ```
  go get golang.org/x/tools/cmd/goimports
  ```
- 但是在一些(1.5 版以前的)插件和项目中好像还是掉的这里可以拷贝一份或者建个软链接 preferences->package settings->gosublime->setting-user 中添加如下内容

  ```
  {
      "fmt_cmd": ["goimports"],
      "env": {
          "GOPATH": "D://work//go-work",
          "GOROOT": "C://Go"
      },
      "font_size": 12,
      "highlight_line": true,
      "highlight_modified_tabs": true,
      "ignored_packages":
      [
          "Vintage"
      ],
      "soda_classic_tabs": true,
      "soda_folder_icons": true,
      "tab_size": 4,
      "translate_tabs_to_spaces": true,
      "update_check": false,
      "word_wrap": true
  }
  ```

- sublime-build

  ```
  {
      "working_dir": "$file_path",
      "cmd": ["go", "build", "$file_name"],
      "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
      "selector": "source.go",
      "variants": [{
          "name": "Run",
          "shell_cmd": "go run \"$file_name\""
      }]
  }
  ```

- go get github.com/nsf/gocode
- go get github.com/slene/margo

## PlainTasks

怎样使用[PlainTasks](https://github.com/aziz/PlainTasks)

转载[SublimeText 插件 - PlainTasks 使用方法](http://blog.csdn.net/etimechen/article/details/50730150)

### 项目

- 项目标题是在任何地方使用分号结束的一行文本(使用分号结束才有颜色,并且用`⌘+R`或在 Windows 下用`Ctrl+R`能通过项目标题快速定位)
- 项目可以嵌套
- 项目可以代码折叠(需要编辑器支持)

### 任务

- 新增任务:
  - `⌘+enter`(Windows 用`Ctrl+enter`)新增一个任务;
  - `⌘+i`(Windows 用`Ctrl+i`)也可以新增一个任务;
  - 如果你在一个新行里用 PlainTasks 创建一个新任务,这个新任务将创建在本行上;
  - 如果你在已经存在任务的行里创建新任务,这个任务将加在当前任务的下面;
  - 如果你在已经存在文本的行里创建新任务,它将把文本转换为任务.
- 完成任务:
  - `⌘+D`(Windows 用`Ctrl+D`)将光标所在行的任务标记为完成;
  - 再按`⌘+D`(Windows 用`Ctrl+D`)它将退为未完成;
  - `Ctrl+C`(Windows 用`alt+C`)将任务标记为取消;
  - 同样,再按`Ctrl+C`(Windows 用`alt+C`)它将退为未完成;
  - 完成的任务不能标记为取消,需要先改为未完成再改成取消;
  - 取消的任务可以标记为完成.

### 标签：

- 用@符号就可以定义一个标签,例如:@tag

### 网址:

- `⌘+shift+U`(Windows 用`Ctrl+shift+U`)通过浏览器打开当前光标所在的网址

### 文件链接:

- 你可以用圆点加斜杠(或者反斜杠)加文件名的形式创建一个文件链接,例如: .\filename\ 或者 ./another filename/
  它只支持一行一个文件链接,文件名可以是相对路径或者绝对路径
- 如果跳转到指定链接文件的行号和列数,在文件名后用分号表示,例如: .\filename:11:8
  上面例子表示链接到 filename 文件的第 11 行第 8 列
- 在 SublimeText 3,你可以用 > 来指定链接文件里的符号,例如: .\filename>symbol
- 在 SublimeText 2,你可以用双引号来指定链接文件里的文本,例如: .\filename"any text"
- `Ctrl+O`(Windows 用`alt+O`)在 SublimeText 里打开链接文件
- SublimeText 3 的链接可以指向目录,打开指向目录的链接将会把此目录加入到侧边栏的工程里,例如: .\..\PlainTasks\
- 其它创建文件链接的语法格式:
  ![](../../img/sub.png)
  _注:path 为文件路径_

### 归档:

- `⌘+shift+A`(Windows 用`Ctrl+shift+A`)归档状态为”完成”的任务.
  它会将所有完成的任务放到文件的底下的”Archive”项目里.归档项目用水平分隔线和其它项目分隔开来.
- `⌘+shift+O`(Windows 用`Ctrl+shift+O`)将以 Org-Mode 形式归档.
  它将删除光标后的整个归档列表,并将归档列表加入到单独的归档文件中,例如: filename.TODO → filename_archive.TODO

### 创建新的任务文档:

> 提示:输入--再按 tab 键可以生成任务列表的分割线,像这样的: — ✄ ———————–

- 打开 Command Palette (Mac 用 ⌘+shift+P,Windows 用 Ctrl+shift+P)
- 输入 task,选择 Tasks: New document 项

### 优先级:

- 输入 c, 再按 tab 键,它会变成这样 @critical(红色背景)
- 输入 h, 再按 tab 键,它会变成这样 @high(橙色背景)
- 输入 l, 再按 tab 键,它会变成这样 @low(黑色背景)
- 输入 t, 再按 tab 键,它会变成这样 @today(黄色背景)
  _c,h,l,t 不可与其他字符连续,需要用空格隔开,否则不起作用_

### 时间跟踪:

- 输入 s, 按两下 tab 键,它将生成一个任务开始时间,这个日期时间为当前日期时间;当任务标记为完成或取消时,PlainTasks 会计算任务所花时间并显示到归档任务里.
- 输入 tg, 按两下 tab 键,它将生成一个任务开关时间,你可以暂停或恢复到任务开始,时间会改为重新开始任务时的时间.首先,你要开始任务,然后通过标记 toggle 暂停任务,下一次 toggle 时恢复任务.
- 输入 cr, 按两下 tab 键,它将生成一个任务的创建时间,用 ⌘+shift+enter(Windows 用 Ctrl+shift+enter)创建一个新任务自动附加创建时间标签
- 输入 d, 按一下 tab 键,它将生成一个任务的超期时间@due(),如果你再按一下 tab 键,它就插入当前日期时间,和@due( 0)一样的意思.你可以输入短日期,然后按 tab 键自动生成默认格式.短日期要是这样的格式: @due(年-月-日 小时:分钟) .不能用连续的字符格式,例如:20160913,但是可以用这种格式: 年.月.日
- 年,月,分钟,小时可以省略为以下形式:
  - @due(1) → 下个月的第一天
  - @due(5) → 本月第五天(如果今天就是第五天就为下个月的第五天)
  - @due(2-3) → 今年的 2 月 3 日(如果今天就是…同上,你懂的)
  - @due(31 23:) → 当月或下个月第 31 天 23 时,分钟为当前时间的分钟,要确保当月有 31 号才行
  - @due(16.1.1 1:1) → 2016 年 1 月 1 日 1 点 1 分, @due(16-01-01 01:01)
- 用一两个特殊符号来表示相对的时间周期,格式: +[+][number][DdWw][h:m] ,number 的设置和字母 d 或字母 w 一样的,用来表示天或周
  - @due(+) → 明天,和 @due( +1) 或者 @due( +1d) 一样
  - @due(+w) = @due( +7)
  - @due(+3w) = @due( +21d)
  - @due(++) → 如果任务有 @created(date),那么就根据创建任务的日期加 1 天,否则就和 @due(+) 一样
  - @due(+2:) = @due( +2.) → 当前的时间加两个小时
  - @due(+:555) = @due( +.555) → 当前的时间加 555 分钟
  - @due(+2 12:) = @due( +2 12.) → 当前的日期时间加 2 天 12 小时
- Ctrl+space(Linux 用 alt+/) 显示标签列表

### 文件类型支持:

PlainTasks 能自动识别以下文件类型:

- TODO
- \*.todo
- \*.todolist
- \*.taskpaper
- \*.tasks

### 你可以定制这些:

- 新增和完成任务
- 支持的文件类型列表
- 快捷键
- 任务的日期格式
- 颜色主题
- 外观
- 文件类型的图标
- 其它
  想知道更多的定制方法,请访问[PlainTasks 的 Readme.md](https://github.com/aziz/PlainTasks/blob/master/Readme.md)

### 有用的编辑器工具:

- 用 ⌘+control+up/down (Windows 用 Ctrl+shift+up/down)上下移动任务.
- 用 ⌘+R (Windows 用 Ctrl+R)查看项目列表并可在项目之间快速跳转
- F6 开启或关闭拼写检查

## Sublime Text 3 快捷键

### 常用

- Ctrl+Shift+P：打开命令面板
- Ctrl+P：搜索项目中的文件
- Ctrl+G：跳转到第几行
- Ctrl+W：关闭当前打开文件
- Ctrl+Shift+W：关闭所有打开文件
- Ctrl+Shift+V：粘贴并格式化
- Ctrl+D：选择单词，重复可增加选择下一个相同的单词
- Ctrl+L：选择行，重复可依次增加选择下一行
- Ctrl+Shift+L：选择多行
- Ctrl+Shift+Enter：在当前行前插入新行
- Ctrl+X：删除当前行
- Ctrl+M：跳转到对应括号
- Ctrl+U：软撤销，撤销光标位置
- Ctrl+J：选择标签内容
- Ctrl+F：查找内容
- Ctrl+Shift+F：查找并替换
- Ctrl+H：替换
- Ctrl+R：前往 method
- Ctrl+N：新建窗口
- Ctrl+K+B：开关侧栏
- Ctrl+Shift+M：选中当前括号内容，重复可选着括号本身
- Ctrl+F2：设置/删除标记
- Ctrl+/：注释当前行
- Ctrl+Shift+/：当前位置插入注释
- Ctrl+Alt+/：块注释，并 Focus 到首行，写注释说明用的
- Ctrl+Shift+A：选择当前标签前后，修改标签用的
- F11：全屏
- Shift+F11：全屏免打扰模式，只编辑当前文件
- Alt+F3：选择所有相同的词
- Alt+.：闭合标签
- Alt+Shift+数字：分屏显示
- Alt+数字：切换打开第 N 个文件

### 鼠标

- 按 Shift+右键拖动：光标多不，用来更改或插入列内容
- 鼠标的前进后退键可切换 Tab 文件
- 按 Ctrl，依次点击或选取，可需要编辑的多个位置
- 按 Ctrl+Shift+上下键，可替换行

### 选择

- Ctrl+D 选中光标所占的文本，继续操作则会选中下一个相同的文本。
- Alt+F3 选中文本按下快捷键，即可一次性选择全部的相同文本进行同时编辑。举个栗子：快速选中并更改所有相同的变量名、函数名等。
- Ctrl+L 选中整行，继续操作则继续选择下一行，效果和 Shift+↓ 效果一样。
- Ctrl+Shift+L 先选中多行，再按下快捷键，会在每行行尾插入光标，即可同时编辑这些行。
- Ctrl+Shift+M 选择括号内的内容（继续选择父括号）。举个栗子：快速选中删除函数中的代码，重写函数体代码或重写括号内里的内容。
- Ctrl+M 光标移动至括号内结束或开始的位置。
- Ctrl+Enter 在下一行插入新行。举个栗子：即使光标不在行尾，也能快速向下插入一行。
- Ctrl+Shift+Enter 在上一行插入新行。举个栗子：即使光标不在行首，也能快速向上插入一行。
- Ctrl+Shift+[ 选中代码，按下快捷键，折叠代码。
- Ctrl+Shift+] 选中代码，按下快捷键，展开代码。
- Ctrl+K+0 展开所有折叠代码。
- Ctrl+← 向左单位性地移动光标，快速移动光标。
- Ctrl+→ 向右单位性地移动光标，快速移动光标。
- shift+↑ 向上选中多行。
- shift+↓ 向下选中多行。
- Shift+← 向左选中文本。
- Shift+→ 向右选中文本。
- Ctrl+Shift+← 向左单位性地选中文本。
- Ctrl+Shift+→ 向右单位性地选中文本。
- Ctrl+Shift+↑ 将光标所在行和上一行代码互换（将光标所在行插入到上一行之前）。
- Ctrl+Shift+↓ 将光标所在行和下一行代码互换（将光标所在行插入到下一行之后）。
- Ctrl+Alt+↑ 向上添加多行光标，可同时编辑多行。
- Ctrl+Alt+↓ 向下添加多行光标，可同时编辑多行。

### 编辑类

- Ctrl+J 合并选中的多行代码为一行。举个栗子：将多行格式的 CSS 属性合并为一行。
- Ctrl+Shift+D 复制光标所在整行，插入到下一行。
- Tab 向右缩进。
- Shift+Tab 向左缩进。
- Ctrl+K+K 从光标处开始删除代码至行尾。
- Ctrl+Shift+K 删除整行。
- Ctrl+/ 注释单行。
- Ctrl+Shift+/ 注释多行。
- Ctrl+K+U 转换大写。
- Ctrl+K+L 转换小写。
- Ctrl+Z 撤销。
- Ctrl+Y 恢复撤销。
- Ctrl+U 软撤销，感觉和 Gtrl+Z 一样。
- Ctrl+F2 设置书签
- Ctrl+T 左右字母互换。
- F6 单词检测拼写

### 搜索类

- Ctrl+F 打开底部搜索框，查找关键字。
- Ctrl+shift+F 在文件夹内查找，与普通编辑器不同的地方是 sublime 允许添加多个文件夹进行查找，略高端，未研究。
- Ctrl+P 打开搜索框。举个栗子：1、输入当前项目中的文件名，快速搜索文件，2、输入@和关键字，查找文件中函数名，3、输入：和数字，跳转到文件中该行代码，4、输入#和关键字，查找变量名。
- Ctrl+G 打开搜索框，自动带：，输入数字跳转到该行代码。举个栗子：在页面代码比较长的文件中快速定位。
- Ctrl+R 打开搜索框，自动带@，输入关键字，查找文件中的函数名。举个栗子：在函数较多的页面快速查找某个函数。
- Ctrl+： 打开搜索框，自动带#，输入关键字，查找文件中的变量名、属性名等。
- Ctrl+Shift+P 打开命令框。场景栗子：打开命名框，输入关键字，调用 sublime text 或插件的功能，例如使用 package 安装插件。
- Esc 退出光标多行选择，退出搜索框，命令框等。

### 显示类

- Ctrl+Tab 按文件浏览过的顺序，切换当前窗口的标签页。
- Ctrl+PageDown 向左切换当前窗口的标签页。
- Ctrl+PageUp 向右切换当前窗口的标签页。
- Alt+Shift+1 窗口分屏，恢复默认 1 屏（非小键盘的数字）
- Alt+Shift+2 左右分屏-2 列
- Alt+Shift+3 左右分屏-3 列
- Alt+Shift+4 左右分屏-4 列
- Alt+Shift+5 等分 4 屏
- Alt+Shift+8 垂直分屏-2 屏
- Alt+Shift+9 垂直分屏-3 屏
- Ctrl+K+B 开启/关闭侧边栏。

## 参考文档

- [sublimeText 官网](http://www.sublimetext.com/)
- [非官方手册](http://docs.sublimetext.info/en/latest)
- [Package Control](https://sublime.wbond.net/installation#Simple)

# Github

- 图形化工具[GitHub for Desktop](https://desktop.github.com/)
  _[参考教程](http://www.ihref.com/read-16514.html)_

本秘籍收录了一些 Git 和 Github 非常酷同时又少有人知的功能。灵感来自于[Zach Holman](https://github.com/holman)在 2012 年 Aloha Ruby Conference 和 2013 年 WDCNZ 上所做的演讲：[Git and GitHub Secrets](http://www.confreaks.com/videos/1229-aloharuby2012-git-and-github-secrets)([slides](https://speakerdeck.com/holman/git-and-github-secrets))和[More Git and GitHub Secrets](https://vimeo.com/72955426)([slides](https://speakerdeck.com/holman/more-git-and-github-secrets))。

_Read this in other languages: [English](README.md), [한국어](README.ko.md), [日本語](README.ja.md), [简体中文](README.zh-cn.md)._

## GitHub

### 忽略空白字符变化

在任意 diff 页面的 URL 后加上`?w=1`，可以去掉那些只是空白字符的变化，使你能更专注于代码的变化。

![Diff without whitespace](https://camo.githubusercontent.com/797184940defadec00393e6559b835358a863eeb/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f626c6f672f323031312f736563726574732f776869746573706163652e706e67)

[_详见 GitHub secrets._](https://github.com/blog/967-github-secrets)

### 调整 Tab 字符所代表的空格数

在 diff 或者 file 页面的 URL 后面加上`?ts=4`，这样当显示 tab 字符的长度时就会是 4 个空格的长度，不再是默认的 8 个空格。`ts`后面的数字还可以根据你个人的偏好进行修改。不过，这个小诀窍在 Gists 页面和 raw file 页面不起作用。

下面是我们在 Go 语言的 source file 页面 URL 后加`?ts=4`[前](https://github.com/pengwynn/flint/blob/master/flint/flint.go)的例子：

![Before, tab space example](http://i.imgur.com/GIT1Fr0.png)

然后是我们添加`?ts=4`[后](https://github.com/pengwynn/flint/blob/master/flint/flint.go?ts=4)的例子：

![After, tab space example](http://i.imgur.com/70FL4H9.png)

### 查看某个用户的 Commit 历史

查看某个用户的所有提交历史，只需在 commits 页面 URL 后加上`?author=username`。

```
https://github.com/rails/rails/commits/master?author=dhh
```

![DHH commit history](http://i.imgur.com/mDWwuaY.png)

[_深入了解提交视图之间的区别_](https://help.github.com/articles/differences-between-commit-views)

### 克隆某个仓库

当我们克隆某一资源时，可以不要那个`.git`后缀。

```bash
$ git clone https://github.com/tiimgreen/github-cheat-sheet
```

[_更多对 Git `clone` 命令的介绍._](http://git-scm.com/docs/git-clone)

###分支 ####将某个分支与其他所有分支进行对比

当你点击某个仓库的分支（Branches）选项卡时

```
https://github.com/{user}/{repo}/branches
```

你会看到一个包含所有未合并的分支的列表。

你可以在这里查看比较（Compare）页面或点击删除某个分支。

![Compare branches not merged into master in jquery/jquery repo - https://github.com/jquery/jquery/branches](http://i.imgur.com/gKWPe8a.png)

有的时候我们需要将多个分支与一个非主分支（master）进行对比，此时可以通过在 URL 后加入要比较的分支名来实现：

```
https://github.com/{user}/{repo}/branches/{branch}
```

![Compare branches not merged into `1.x-master` in jquery/jquery repo - https://github.com/jquery/jquery/branches/1.x-master](http://i.imgur.com/jpc6Urb.png)

可以在 URL 后加上`?merged=1`来查看已经合并了的分支。

![Compare branches merged in to `1.x-master` in jquery/jquery repo - https://github.com/jquery/jquery/branches/1.x-master?merged=1](http://i.imgur.com/KmYyCVh.png)

你可以使用这个界面来替代命令行直接删除分支。

#### 比较分支

如果我们想要比较两个分支，可以像下面一样修改 URL：

```
https://github.com/user/repo/compare/{range}
```

其中`{range} = master...4-1-stable`

例如：

```
https://github.com/rails/rails/compare/master...4-1-stable
```

![Rails branch compare example](http://i.imgur.com/0Z52X5Y.png)

`{range}`还可以使用下面的形式:

```
https://github.com/rails/rails/compare/master@{1.day.ago}...master
https://github.com/rails/rails/compare/master@{2014-10-04}...master
```

_日期格式 `YYYY-DD-MM`_

![Another compare example](http://i.imgur.com/5dtzESz.png)

...这样你就能查看 master 分支上一段时间或者指定日期内的改动。

[_了解更多关于比较跨时间段的提交记录._](https://help.github.com/articles/comparing-commits-across-time)

#### 比较不同派生库的分支

想要对派生仓库（Forked Repository）之间的分支进行比较，可以像下面这样修改 URL 实现：

```
https://github.com/user/repo/compare/{foreign-user}:{branch}...{own-branch}
```

例如：

```
https://github.com/rails/rails/compare/byroot:master...master
```

![Forked branch compare](http://i.imgur.com/Q1W6qcB.png)

### Gists

[Gists](https://gist.github.com/) 给我们提供了一种不需要创建一个完整的仓库，使小段代码也可以工作的简单方式。

![Gist](http://i.imgur.com/VkKI1LC.png?1)

Gist 的 URL 后加上`.pibb`，可以得到更适合嵌入到其他网站的 HTML 版本。

Gists 还可以像任何标准仓库一样被克隆。

```bash
$ git clone https://gist.github.com/tiimgreen/10545817
```

![Gists](http://i.imgur.com/BcFzabp.png)

这意味着你可以像 Github 仓库一样修改和更新 Gists :

```bash
$ git commit
$ Username for 'https://gist.github.com':
$ Password for 'https://tiimgreen@gist.github.com':
```

[_进一步了解如何创建 gists._](https://help.github.com/articles/creating-gists)

### Git.io

[Git.io](http://git.io)是 Github 的短网址服务。

![Git.io](http://i.imgur.com/6JUfbcG.png?1)

你可以通过 Curl 命令以普通 HTTP 协议使用它：

```bash
$ curl -i http://git.io -F "url=https://github.com/..."
HTTP/1.1 201 Created
Location: http://git.io/abc123

$ curl -i http://git.io/abc123
HTTP/1.1 302 Found
Location: https://github.com/...
```

[_进一步了解 Git.io._](https://github.com/blog/985-git-io-github-url-shortener)

### 键盘快捷键

在仓库主页上提供了快捷键方便快速导航。

- 按 `t` 键会打开一个文件浏览器。
- 按 `w` 键会打开分支选择菜单。
- 按 `s` 键会激活顶端的命令栏 (Command Bar)。
- 按 `l` 键编辑 Issue 列表页的标签。
- **查看文件内容时**（如：`https://github.com/tiimgreen/github-cheat-sheet/blob/master/README.md`），按 `y` 键将会冻结这个页面，这样就算代码被修改了也不会影响你当前看到的。

按`?`查看当前页面支持的快捷键列表：

![Keyboard shortcuts](http://i.imgur.com/y5ZfNEm.png)

[_进一步了解如何使用 Command Bar._](https://help.github.com/articles/using-the-command-bar)

### 整行高亮

在代码文件地址后加上`#L52`或者单击行号 52 都会将第 52 行代码高亮显示。

多行高亮也可以，比如用`#L53-L60`选择范围，或者按住 `shift`键，然后再点击选择的两行。

```
https://github.com/rails/rails/blob/master/activemodel/lib/active_model.rb#L53-L60
```

![整行高亮](http://i.imgur.com/8AhjrCz.png)

### 用 commit 信息关闭 Issue

如果某个提交修复了一个 Issue，当提交到 master 分支时，提交信息里可以使用`fix/fixes/fixed`, `close/closes/closed` 或者 `resolve/resolves/resolved`等关键词，后面再跟上 Issue 号，这样就会关闭这个 Issue。

```bash
$ git commit -m "Fix screwup, fixes #12"
```

这将会关闭 Issue #12，并且在 Issue 讨论列表里关联引用这次提交。

![Closing Repo](http://i.imgur.com/Uh1gZdx.png)

[_进一步了解通过提交信息关闭 Issue._](https://help.github.com/articles/closing-issues-via-commit-messages)

### 链接其他仓库的 Issue

如果你想引用到同一个仓库中的一个 Issue，只需使用井号 `#` 加上 Issue 号，这样就会自动创建到此 Issue 的链接。

要链接到其他仓库的 Issue，就使用`user_name/repo_name#ISSUE_NUMBER`的方式，例如`tiimgreen/toc#12`。

![Cross-Link Issues](https://camo.githubusercontent.com/447e39ab8d96b553cadc8d31799100190df230a8/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f626c6f672f323031312f736563726574732f7265666572656e6365732e706e67)

### 设置 CI 对每条 Pull Request 都进行构建

如果配置正确，[Travis CI](https://travis-ci.org/)会为每个你收到的 Pull Request 执行构建，就像每次提交也会触发构建一样。想了解更多关于 Travis CI 的信息，请看 [Travis CI 入门](http://docs.travis-ci.com/user/getting-started/)。

[![Travis CI status](https://cloud.githubusercontent.com/assets/1687642/2700187/3a88838c-c410-11e3-9a46-e65e2a0458cd.png)](https://github.com/octokit/octokit.rb/pull/452)

[_进一步了解 Commit status API._](https://github.com/blog/1227-commit-status-api)

### Markdown 文件高亮语法

例如，可以像下面这样在你的 Markdown 文件里为 Ruby 代码添加语法高亮：

    ```ruby
    require 'tabbit'
    table = Tabbit.new('Name', 'Email')
    table.add_row('Tim Green', 'tiimgreen@gmail.com')
    puts table.to_s
    ```

效果像下面这样：

```ruby
require 'tabbit'
table = Tabbit.new('Name', 'Email')
table.add_row('Tim Green', 'tiimgreen@gmail.com')
puts table.to_s
```

Github 使用 [Linguist](https://github.com/github/linguist) 做语言识别和语法高亮。你可以仔细阅读 [languages YAML file](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)，了解有哪些可用的关键字。

[_进一步了解 GitHub Flavored Markdown._](https://help.github.com/articles/github-flavored-markdown)

### 表情符

可以在 Pull Requests, Issues, 提交消息, Markdown 文件里加入表情符。使用方法`:name_of_emoji:`

```
:smile:
```

将输出一个笑脸：

:smile:

Github 支持的完整表情符号列表详见[emoji-cheat-sheet.com](http://www.emoji-cheat-sheet.com/) 或 [scotch-io/All-Github-Emoji-Icons](https://github.com/scotch-io/All-Github-Emoji-Icons)。

Github 上使用最多的 5 个表情符号是：

1. :shipit: - `:shipit:`
2. :sparkles: - `:sparkles:`
3. :-1: - `:-1:`
4. :+1: - `:+1:`
5. :clap: - `:clap:`

### 静态与动态图片

注释和 README 等文件里也可以使用图片和 GIF 动画：

```
![Alt Text](http://www.sheawong.com/wp-content/uploads/2013/08/keephatin.gif)
```

仓库中的原始图片可以被直接调用：

```
![Alt Text](https://github.com/(user)/(repo)/raw/master/path/to/image.gif)
```

![Peter don't care](http://www.sheawong.com/wp-content/uploads/2013/08/keephatin.gif)

所有图片都缓存在 Github，不用担心你的站点不能访问时就看不到图片了。

#### 在 GitHub Wiki 中嵌入图片

有多种方法可以在 Wiki 页面里嵌入图片。既可以像上一条里那样使用标准的 Markdown 语法，也可以像下面这样指定图片的高度或宽度：

```markdown
[[ http://www.sheawong.com/wp-content/uploads/2013/08/keephatin.gif | height = 100px ]]
```

结果：

![Just a screenshot](http://i.imgur.com/J5bMf7S.png)

### 快速引用

在主题评论中引用之前某个人所说的，只需选中文本，然后按 `r`键，想要的就会以引用的形式复制到你的输入框里。

![Quick Quote](https://f.cloud.github.com/assets/296432/124483/b0fa6204-6ef0-11e2-83c3-256c37fa7abc.gif)

[_进一步了解快速引用._](https://github.com/blog/1399-quick-quotes)

### 快速添加许可证

创建一个仓库时，Github 会为你提供一个预置的软件许可列表：

![License](http://i.imgur.com/Chqj4Fg.png)

对于已有的仓库，可以通过 web 界面创建文件来添加软件许可。输入`LICENSE`作为文件名后，同样可以从预置的列表中选择一个作为模板。

![License](http://i.imgur.com/fTjQict.png)

这个技巧也适用于 `.gitignore` 文件。

[_进一步了解 open source licensing._](https://help.github.com/articles/open-source-licensing)

### 任务列表

Issues 和 Pull requests 里可以添加复选框，语法如下（注意空白符）：

```
- [ ] Be awesome
- [ ] Prepare dinner
  - [ ] Research recipe
  - [ ] Buy ingredients
  - [ ] Cook recipe
- [ ] Sleep
```

![Task List](http://i.imgur.com/jJBXhsY.png)

当项目被选中时，它对应的 Markdown 源码也被更新了：

```
- [x] Be awesome
- [ ] Prepare dinner
  - [x] Research recipe
  - [x] Buy ingredients
  - [ ] Cook recipe
- [ ] Sleep
```

[_进一步了解任务列表._](https://help.github.com/articles/writing-on-github#task-lists)

####Markdown 文件中的任务列表

在完全适配 Markdown 语法的文件中可以使用以下语法加入一个**只读**的任务列表

```
- [ ] Mercury
- [x] Venus
- [x] Earth
  - [x] Moon
- [x] Mars
  - [ ] Deimos
  - [ ] Phobos
```

- [ ] Mercury
- [x] Venus
- [x] Earth
  - [x] Moon
- [x] Mars
  - [ ] Deimos
  - [ ] Phobos

[_进一步了解 Markdown 文件中的任务列表_](https://github.com/blog/1825-task-lists-in-all-markdown-documents)

### 相对链接

Markdown 文件里链接到内部内容时推荐使用相对链接。

```markdown
[Link to a header](#awesome-section)
[Link to a file](docs/readme)
```

绝对链接会在 URL 改变时（例如重命名仓库、用户名改变，建立分支项目）被更新。使用相对链接能够保证你的文档不受此影响。

[_进一步了解相对链接._](https://help.github.com/articles/relative-links-in-readmes)

### GitHub Pages 的元数据与插件支持

在 Jekyll 页面和文章里，仓库信息可在 `site.github` 命名空间下找到，也可以显示出来，例如，使用 `{{ site.github.project_title }}`显示项目标题。

Jemoji 和 jekyll-mentions 插件为你的 Jekyll 文章和页面增加了[emoji](#emojis)和[@mentions](https://github.com/blog/821)功能。

[_了解更多 GitHub Pages 的元数据和插件支持._](https://github.com/blog/1797-repository-metadata-and-plugin-support-for-github-pages)

### 查看 YAML 格式的元数据

许多博客站点，比如基于[Jekyll](http://jekyllrb.com/)的[GitHub Pages](http://pages.github.com/)，都依赖于一些文章头部的 YAML 格式的元数据。Github 会将其渲染成一个水平表格，方便阅读。

![YAML metadata](https://camo.githubusercontent.com/47245aa16728e242f74a9a324ce0d24c0b916075/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f36343035302f313232383236372f65303439643063362d323761302d313165332d396464382d6131636432323539393334342e706e67)

[_进一步了解 在文档里查看 YAML 元数据._](https://github.com/blog/1647-viewing-yaml-metadata-in-your-documents)

### 渲染表格数据

GitHub 支持将 `.csv` (逗号分隔)和`.tsv` (制表符分隔)格式的文件渲染成表格数据。

![Tabular data](https://camo.githubusercontent.com/1b6dd0157ffb45d9939abf14233a0cb13b3b4dfe/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3238323735392f3937363436322f33323038336463652d303638642d313165332d393262322d3566323863313061353035392e706e67)

[_进一步了解渲染表格数据._](https://github.com/blog/1601-see-your-csvs)

### 撤销 Pull Request

可以通过 Pull Request 中的 Revert 按钮来撤销一个已合并的 Pull Request 中的 commit。按下按钮后会自动生成一个进行逆向操作的 Pull Request。

![Revert button](https://camo.githubusercontent.com/0d3350caf2bb1cba53123ffeafc00ca702b1b164/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f68656c702f70756c6c5f72657175657374732f7265766572742d70756c6c2d726571756573742d6c696e6b2e706e67)

[\*进一步了解“撤销”按钮](https://github.com/blog/1857-introducing-the-revert-button)

### Diffs

#### 可渲染文档的 Diffs

提交和 Pull Requests 里包含有 Github 支持的可渲染文档（比如 Markdown）会提供*source* 和 _rendered_ 两个视图功能。

![Source / Rendered view](https://github-images.s3.amazonaws.com/help/repository/rendered_prose_diff.png)

点击 "rendered" 按钮，看看改动在渲染后的显示效果。当你添加、删除或修改文本时，渲染纯文本视图非常方便。

![Rendered Prose Diffs](https://f.cloud.github.com/assets/17715/2003056/3997edb4-862b-11e3-90be-5e9586edecd7.png)

[_进一步了解渲染纯文本视图 Diffs._](https://github.com/blog/1784-rendered-prose-diffs)

#### 可变化地图

当你在 GitHub 上查看一个包含地理数据的提交或 pull request 时，Github 将以可视化的方式对比版本之间的差异。

[![Diffable Maps](https://f.cloud.github.com/assets/282759/2090660/63f2e45a-8e97-11e3-9d8b-d4c8078b004e.gif)](https://github.com/benbalter/congressional-districts/commit/2233c76ca5bb059582d796f053775d8859198ec5)

[_进一步了解可比较地图._](https://github.com/blog/1772-diffable-more-customizable-maps)

#### 在 diff 中折叠与扩展代码

你可以通过点击 diff 边栏里的 _unfold_ 按钮来多显示几行上下文。你可以一直点击 _unfold_ 按钮直到显示了文件的全部内容。这个功能在所有 GitHub 产生的 diff 界面都可以使用。

![Expanding Context in Diffs](https://f.cloud.github.com/assets/22635/1610539/863c1f64-5584-11e3-82bf-151b406a272f.gif)

[_进一步了解扩展 Diff 上下文._](https://github.com/blog/1705-expanding-context-in-diffs)

#### 查看 Pull Request 的 diff 和 patch

在 Pull Request 的 URL 后面加上 `.diff` 或 `.patch` 的扩展名就可以得到它的 diff 或 patch 文件，例如：

```
https://github.com/tiimgreen/github-cheat-sheet/pull/15
https://github.com/tiimgreen/github-cheat-sheet/pull/15.diff
https://github.com/tiimgreen/github-cheat-sheet/pull/15.patch
```

`.diff` 扩展会使用普通文本格式显示如下内容：

```
diff --git a/README.md b/README.md
index 88fcf69..8614873 100644
--- a/README.md
+++ b/README.md
@@ -28,6 +28,7 @@ All the hidden and not hidden features of Git and GitHub. This cheat sheet was i
 - [Merged Branches](#merged-branches)
 - [Quick Licensing](#quick-licensing)
 - [TODO Lists](#todo-lists)
+- [Relative Links](#relative-links)
 - [.gitconfig Recommendations](#gitconfig-recommendations)
     - [Aliases](#aliases)
     - [Auto-correct](#auto-correct)
@@ -381,6 +382,19 @@ When they are clicked, they will be updated in the pure Markdown:
 - [ ] Sleep

(...)
```

#### 渲染图像发生的变动

GitHub 可以显示包括 PNG、JPG、GIF、PSD 在内的多种图片格式并提供了几种方式来比较这些格式的图片文件版本间的不同。

[![Diffable PSD](https://cloud.githubusercontent.com/assets/2546/3165594/55f2798a-eb56-11e3-92e7-b79ad791a697.gif)](https://github.com/blog/1845-psd-viewing-diffing)

[_查看更多关于渲染图像变动的内容_](https://help.github.com/articles/rendering-and-diffing-images)

### Hub

[Hub](https://github.com/github/hub)是一个对 Git 进行了封装的命令行工具，可以帮助你更方便的使用 Github。

这使得你可以像下面这样进行克隆：

```bash
$ hub clone tiimgreen/toc
```

[_查看更多 Hub 提供的超酷命令._](https://github.com/github/hub#commands)

### 贡献者指南

在你的仓库的根目录添加一个名为 `CONTRIBUTING` 的文件后，贡献者在新建 Issue 或 Pull Request 时会看到这个文件的链接。

![Contributing Guidelines](https://camo.githubusercontent.com/71995d6b0e620a9ef1ded00a04498241c69dd1bf/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f736b697463682f6973737565732d32303132303931332d3136323533392e6a7067)

[_进一步了解贡献者指南._](https://github.com/blog/1184-contributing-guidelines)

### GitHub 资源

| Title            | Link                          |
| ---------------- | ----------------------------- |
| GitHub Explore   | https://github.com/explore    |
| GitHub Blog      | https://github.com/blog       |
| GitHub Help      | https://help.github.com/      |
| GitHub Training  | http://training.github.com/   |
| GitHub Developer | https://developer.github.com/ |

#### GitHub 讨论

| Title                                           | Link                                        |
| ----------------------------------------------- | ------------------------------------------- |
| How GitHub Uses GitHub to Build GitHub          | https://www.youtube.com/watch?v=qyz3jkOBbQY |
| Introduction to Git with Scott Chacon of GitHub | https://www.youtube.com/watch?v=ZDR433b0HJY |
| How GitHub No Longer Works                      | https://www.youtube.com/watch?v=gXD1ITW7iZI |
| Git and GitHub Secrets                          | https://www.youtube.com/watch?v=Foz9yvMkvlA |
| More Git and GitHub Secrets                     | https://www.youtube.com/watch?v=p50xsL-iVgU |

## Git

### 前一个分支

快速检出上一个分支：

```bash
$ git checkout -
# Switched to branch 'master'

$ git checkout -
# Switched to branch 'next'

$ git checkout -
# Switched to branch 'master'
```

[_进一步了解 Git 分支._](http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)

### Stripspace 命令

Git Stripspace 命令可以:

- 去掉行尾空白符
- 多个空行压缩成一行
- 必要时在文件末尾增加一个空行

使用此命令时必须传入一个文件，像这样：

```bash
$ git stripspace < README.md
```

[_进一步了解 Git `stripspace` 命令._](http://git-scm.com/docs/git-stripspace)

### 检出 Pull Requests

Pull Request 是一种 GitHub 上可以通过以下多种方式在本地被检索的特别分支：

检索某个分支并临时储存在本地的`FETCH_HEAD`中以便快速查看更改(diff)以及合并(merge)：

```bash
$ git fetch origin refs/pull/[PR-Number]/head
```

通过 refspec 获取所有的 Pull Request 为本地分支：

```bash
$ git fetch origin '+refs/pull/*/head:refs/remotes/origin/pr/*'
```

或在仓库的`.git/config`中加入下列设置来自动获取远程仓库中的 Pull Request

```
[remote "origin"]
    fetch = +refs/heads/*:refs/remotes/origin/*
    url = git@github.com:tiimgreen/github-cheat-sheet.git
```

```
[remote "origin"]
    fetch = +refs/heads/*:refs/remotes/origin/*
    url = git@github.com:tiimgreen/github-cheat-sheet.git
    fetch = +refs/pull/*/head:refs/remotes/origin/pr/*
```

对基于派生库的 Pull Request，可以通过先`checkout`代表此 Pull Request 的远端分支再由此分支建立一个本地分支：

```bash
$ git checkout pr/42 pr-42
```

操作多个仓库的时候，可以在 Git 中设置获取 Pull Request 的全局选项。

```
 git config --global --add remote.origin.fetch "+refs/pull/*/head:refs/remotes/origin/pr/*"
```

此时可以在任意仓库中使用以下命令：

```
 git fetch origin
```

```
git checkout pr/42
```

[_进一步了解如何检出 pull request 到本地._](https://help.github.com/articles/checking-out-pull-requests-locally)

### 提交空改动 :trollface:

可以使用`--allow-empty`选项强制创建一个没有任何改动的提交：

```bash
$ git commit -m "Big-ass commit" --allow-empty
```

这样做在如下几种情况下是有意义的：

- 标记新的工作或一个新功能的开始。
- 记录对项目的跟代码无关的改动。
- 跟使用你仓库的其他人交流。
- 作为仓库的第一次提交，因为第一次提交后不能被 rebase： `git commit -m "init repo" --allow-empty`.

### 更直观的 Git Status

在命令行输入如下命令:

```bash
$ git status
```

可以看到:

![git status](http://i.imgur.com/o3PEHAA.png)

加上`-sb`选项:

```bash
$ git status -sb
```

这会得到:

![git status -sb](http://i.imgur.com/xNI1bT0.png)

[_进一步了解 Git `status` 命令._](http://git-scm.com/docs/git-status)

### 更直观的 Git Log

输入如下命令:

```bash
$ git log --all --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
```

可以看到:

![git log --all --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative](http://i.imgur.com/R2z8l7c.png)

这要归功于[Palesz](http://stackoverflow.com/users/88355/palesz)在 stackoverflow 的回答。

_这个命令可以被用作别名，详细做法见[这里](https://github.com/tiimgreen/github-cheat-sheet#aliases)。_

[_进一步了解 Git `log` 命令._](http://git-scm.com/docs/git-log)

### Git 查询

Git 查询运行你在之前的所有提交信息里进行搜索，找到其中和搜索条件相匹配的最近的一条。

```bash
$ git show :/query
```

这里 `query` （区别大小写）是你想要搜索的词语， 这条命令会找到包含这个词语的最后那个提交并显示变动详情。

```bash
$ git show :/typo
```

![git show :/query](http://i.imgur.com/icaGiNt.png)

- 按 `q` 键退出命令。\*

### 合并分支

输入命令:

```bash
$ git branch --merged
```

这会显示所有已经合并到你当前分支的分支列表。

相反地：

```bash
$ git branch --no-merged
```

会显示所有还没有合并到你当前分支的分支列表。

[_进一步了解 Git `branch` 命令._](http://git-scm.com/docs/git-branch)

### 使用网页查看本地仓库

使用 Git 的 `instaweb` 可以立即在 `gitweb`中浏览你的工作仓库。这个命令是个简单的脚本，配置了`gitweb`和用来浏览本地仓库的 Web 服务器。_（译者注：默认需要 lighttpd 支持）_

```bash
$ git instaweb
```

执行后打开：

![Git instaweb](http://i.imgur.com/Dxekmqc.png)

[_进一步了解 Git `instaweb` 命令._](http://git-scm.com/docs/git-instaweb)

### Git 配置

所有 Git 配置都保存在你的`.gitconfig` 文件中。

#### Git 命令自定义别名

别名用来帮助你定义自己的 git 命令。比如你可以定义 `git a` 来运行 `git add --all`。

要添加一个别名， 一种方法是打开 `~/.gitconfig` 文件并添加如下内容：

```
[alias]
  co = checkout
  cm = commit
  p = push
  # Show verbose output about tags, branches or remotes
  tags = tag -l
  branches = branch -a
  remotes = remote -v
```

...或者在命令行里键入：

```bash
$ git config --global alias.new_alias git_function
```

例如：

```bash
$ git config --global alias.cm commit
```

指向多个命令的别名可以用引号来定义：

```bash
$ git config --global alias.ac 'add -A . && commit'
```

下面列出了一些有用的别名：

| 别名 Alias     | 命令 Command                                                                                                                                 | 如何设置 What to Type                                                                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `git cm`       | `git commit`                                                                                                                                 | `git config --global alias.cm commit`                                                                                                                                   |
| `git co`       | `git checkout`                                                                                                                               | `git config --global alias.co checkout`                                                                                                                                 |
| `git ac`       | `git add . -A` `git commit`                                                                                                                  | `git config --global alias.ac '!git add -A && git commit'`                                                                                                              |
| `git st`       | `git status -sb`                                                                                                                             | `git config --global alias.st 'status -sb'`                                                                                                                             |
| `git tags`     | `git tag -l`                                                                                                                                 | `git config --global alias.tags 'tag -l'`                                                                                                                               |
| `git branches` | `git branch -a`                                                                                                                              | `git config --global alias.branches 'branch -a'`                                                                                                                        |
| `git remotes`  | `git remote -v`                                                                                                                              | `git config --global alias.remotes 'remote -v'`                                                                                                                         |
| `git lg`       | `git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --` | `git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"` |

#### 自动更正

如果键入 `git comit` 你会看到如下输出：

```bash
$ git comit -m "Message"
# git: 'comit' is not a git command. See 'git --help'.

# Did you mean this?
#   commit
```

为了在键入 `comit` 调用 `commit`命令，只需启用自动纠错功能：

```bash
$ git config --global help.autocorrect 1
```

现在你就会看到：

```bash
$ git comit -m "Message"
# WARNING: You called a Git command named 'comit', which does not exist.
# Continuing under the assumption that you meant 'commit'
# in 0.1 seconds automatically...
```

#### 带颜色输出

要在你的 Git 命令输出里加上颜色的话，可以用如下命令：

```bash
$ git config --global color.ui 1
```

[_进一步了解 Git `config` 命令._](http://git-scm.com/docs/git-config)

### Git 资源

| Title                                     | Link                                                    |
| ----------------------------------------- | ------------------------------------------------------- |
| Official Git Site                         | http://git-scm.com/                                     |
| Official Git Video Tutorials              | http://git-scm.com/videos                               |
| Code School Try Git                       | http://try.github.com/                                  |
| Introductory Reference & Tutorial for Git | http://gitref.org/                                      |
| Official Git Tutorial                     | http://git-scm.com/docs/gittutorial                     |
| Everyday Git                              | http://git-scm.com/docs/everyday                        |
| Git Immersion                             | http://gitimmersion.com/                                |
| Ry's Git Tutorial                         | http://rypress.com/tutorials/git/index.html             |
| Git for Designer                          | http://hoth.entp.com/output/git_for_designers.html      |
| Git for Computer Scientists               | http://eagain.net/articles/git-for-computer-scientists/ |
| Git Magic                                 | http://www-cs-students.stanford.edu/~blynn/gitmagic/    |

#### Git 参考书籍

| Title                               | Link                                                                              |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| Pragmatic Version Control Using Git | http://www.pragprog.com/titles/tsgit/pragmatic-version-control-using-git          |
| Pro Git                             | http://git-scm.com/book                                                           |
| Git Internals Peepcode              | http://peepcode.com/products/git-internals-pdf                                    |
| Git in the Trenches                 | http://cbx33.github.com/gitt/                                                     |
| Version Control with Git            | http://www.amazon.com/Version-Control-Git-collaborative-development/dp/1449316387 |
| Pragmatic Guide to Git              | http://www.pragprog.com/titles/pg_git/pragmatic-guide-to-git                      |
| Git: Version Control for Everyone   | http://www.packtpub.com/git-version-control-for-everyone/book                     |

# which

我们经常在 linux 要查找某个文件，但不知道放在哪里了，可以使用下面的一些命令来搜索：

- _which_ 查看可执行文件的位置。
- _whereis_ 查看文件的位置。
- _locate_ 配合数据库查看文件位置。
- _find_ 实际搜寻硬盘查询文件名称。

which 命令的作用是，在 PATH 变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。也就是说，使用 which 命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。

## 命令格式

`which [可执行文件名称]`

## 命令功能

which 指令会在 PATH 变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。

## 命令参数

- -n 　指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名。
- -p 　与-n 参数相同，但此处的包括了文件的路径。
- -w 　指定输出时栏位的宽度。
- -V 　显示版本信息

## 使用实例

### 1. 查找文件、显示命令路径

命令：`which lsmod`
输出：

```sh
lbb@local:~$ which pwd
/bin/pwd
lbb@local:~$ which adduser
/usr/sbin/adduser
lbb@local:~$
```

说明：
which 是根据使用者所配置的 PATH 变量内的目录去搜寻可运行档的！所以，不同的 PATH 配置内容所找到的命令当然不一样的！

### 2. 用 which 去找出 which

命令：`which which`
输出：

```sh
lbb@local:~$ which which
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
/usr/bin/which
lbb@local:~$
```

说明：
其中一个是 alias 这就是所谓的『命令别名』，意思是输入 which 会等於后面接的那串命令！

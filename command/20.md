# find 之 exec

find 是我们很常用的一个 Linux 命令，但是我们一般查找出来的并不仅仅是看看而已，还会有进一步的操作，这个时候 exec 的作用就显现出来了。

## 命令功能

exec 解释：

-exec 参数后面跟的是 command 命令，它的终止是以;为结束标志的，所以这句命令后面的分号是不可缺少的，考虑到各个系统中分号会有不同的意义，所以前面加反斜杠。

{} 花括号代表前面 find 查找出来的文件名。

使用 find 时，只要把想要的操作写在一个文件里，就可以用 exec 来配合 find 查找，很方便的。在有些操作系统中只允许-exec 选项执行诸如 l s 或 ls -l 这样的命令。大多数用户使用这一选项是为了查找旧文件并删除它们。建议在真正执行 rm 命令删除文件之前，最好先用 ls 命令看一下，确认它们是所要删除的文件。 exec 选项后面跟随着所要执行的命令或脚本，然后是一对儿{ }，一个空格和一个\，最后是一个分号。为了使用 exec 选项，必须要同时使用 print 选项。如果验证一下 find 命令，会发现该命令只输出从当前路径起的相对路径及文件名。

## 使用实例

### 1. ls -l 命令放在 find 命令的-exec 选项中

命令：

`find . -type f -exec ls -l {} \;`

```sh
lbb@local:~$ find . -type f -exec ls -l {} \;
-rw------- 1 lbb lbb 882 Feb 27 04:32 ./.bash_history
-rw-r--r-- 1 lbb lbb 220 Feb 23 15:36 ./.bash_logout
-rw-r--r-- 1 lbb lbb 3771 Feb 23 15:36 ./.bashrc
-rw-r--r-- 1 lbb lbb 807 Feb 23 15:36 ./.profile
-rw------- 1 lbb lbb 7 Feb 27 04:28 ./.python_history
-rw-r--r-- 1 lbb lbb 0 Feb 23 15:37 ./.sudo_as_admin_successful
-rw------- 1 lbb lbb 2287 Feb 27 03:04 ./.viminfo
-rw-rw-rw- 1 lbb lbb 169 Feb 27 02:20 ./.wget-hsts
lbb@local:~$
```

说明：

上面的例子中，find 命令匹配到了当前目录下的所有普通文件，并在-exec 选项中使用 ls -l 命令将它们列出。

### 实例 2. 在目录中查找更改时间在 n 日以前的文件并删除它们

命令：

`find . -type f -mtime +14 -exec rm {} \;`

说明：

在 shell 中用任何方式删除文件之前，应当先查看相应的文件，一定要小心！当使用诸如 mv 或 rm 命令时，可以使用-exec 选项的安全模式。它将在对每个匹配到的文件进行操作之前提示你。

### 3. 在目录中查找更改时间在 n 日以前的文件并删除它们，在删除之前先给出提示

命令：

`find . -name "*.log" -mtime +5 -ok rm {} \;`

说明：

在上面的例子中， find 命令在当前目录中查找所有文件名以.log 结尾、更改时间在 5 日以上的文件，并删除它们，只不过在删除之前先给出提示。 按 y 键删除文件，按 n 键不删除。

### 4. -exec 中使用 grep 命令

命令：

`find /etc -name "passwd*" -exec grep "root" {} \;`

```sh
lbb@local:~$ find /etc -name "passwd*" -exec grep "root" {} \;
root:x:0:0:root:/root:/bin/bash
root:x:0:0:root:/root:/bin/bash
find: ‘/etc/polkit-1/localauthority’: Permission denied
find: ‘/etc/ssl/private’: Permission denied
lbb@local:~$
```

说明：

任何形式的命令都可以在-exec 选项中使用。 在上面的例子中我们使用 grep 命令。find 命令首先匹配所有文件名为“ passwd\*”的文件，例如 passwd、passwd.old、passwd.bak，然后执行 grep 命令看看在这些文件中是否存在一个 root 用户。

### 5. 查找文件移动到指定目录

命令：

`find . -name "*.log" -exec mv {} .. \;`

### 6. 用 exec 选项执行 cp 命令

命令：

`find . -name "*.log" -exec cp {} test3 \;`

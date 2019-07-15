# find 概览

Linux 下 find 命令在目录结构中搜索文件，并执行指定的操作。Linux 下 find 命令提供了相当多的查找条件，功能很强大。由于 find 具有强大的功能，所以它的选项也很多，其中大部分选项都值得我们花时间来了解一下。即使系统中含有网络文件系统( NFS)，find 命令在该文件系统中同样有效，只你具有相应的权限。 在运行一个非常消耗资源的 find 命令时，很多人都倾向于把它放在后台执行，因为遍历一个大的文件系统可能会花费很长的时间(这里是指 30G 字节以上的文件系统)。

## 命令格式

`find pathname -options [-print -exec -ok ...]`

## 命令功能

用于在文件树种查找文件，并作出相应的处理

## 命令参数

- pathname: find 命令所查找的目录路径。例如用.来表示当前目录，用/来表示系统根目录。
- -print： find 命令将匹配的文件输出到标准输出。
- -exec： find 命令对匹配的文件执行该参数所给出的 shell 命令。相应命令的形式为'command' { } \;，注意{ }和\；之间的空格。
- -ok： 和-exec 的作用相同，只不过以一种更为安全的模式来执行该参数所给出的 shell 命令，在执行每一个命令之前，都会给出提示，让用户来确定是否执行。

## 命令选项

- -name 按照文件名查找文件。
- -perm 按照文件权限来查找文件。
- -prune 使用这一选项可以使 find 命令不在当前指定的目录中查找，如果同时使用-depth 选项，那么-prune 将被 find 命令忽略。
- -user 按照文件属主来查找文件。
- -group 按照文件所属的组来查找文件。
- -mtime -n +n 按照文件的更改时间来查找文件， - n 表示文件更改时间距现在 n 天以内，+ n 表示文件更改时间距现在 n 天以前。find 命令还有-atime 和-ctime 选项，但它们都和-m time 选项。
- -nogroup 查找无有效所属组的文件，即该文件所属的组在/etc/groups 中不存在。
- -nouser 查找无有效属主的文件，即该文件的属主在/etc/passwd 中不存在。
- -newer file1 ! file2 查找更改时间比文件 file1 新但比文件 file2 旧的文件。
- -type 查找某一类型的文件，诸如：
  - b - 块设备文件。
  - d - 目录。
  - c - 字符设备文件。
  - p - 管道文件。
  - l - 符号链接文件。
  - f - 普通文件。
- -size n：[c] 查找文件长度为 n 块的文件，带有 c 时表示文件长度以字节计。-depth：在查找文件时，首先查找当前目录中的文件，然后再在其子目录中查找。
- -fstype：查找位于某一类型文件系统中的文件，这些文件系统类型通常可以在配置文件/etc/fstab 中找到，该配置文件中包含了本系统中有关文件系统的信息。
- -mount：在查找文件时不跨越文件系统 mount 点。
- -follow：如果 find 命令遇到符号链接文件，就跟踪至链接所指向的文件。
- -cpio：对匹配的文件使用 cpio 命令，将这些文件备份到磁带设备中。
- 另外,下面三个的区别:
  - -amin n 查找系统中最后 N 分钟访问的文件
  - -atime n 查找系统中最后 n\*24 小时访问的文件
  - -cmin n 查找系统中最后 N 分钟被改变文件状态的文件
  - -ctime n 查找系统中最后 n\*24 小时被改变文件状态的文件
  - -mmin n 查找系统中最后 N 分钟被改变文件数据的文件
  - -mtime n 查找系统中最后 n\*24 小时被改变文件数据的文件

## 使用实例

### 1. 查找指定时间内修改过的文件

命令：

`find -atime -2`

```sh
lbb@local:~$ find -atime -2
./.local
./.local/lib
./.local/lib/python3.7
./.local/lib/python3.7/site-packages
./.python_history
./.viminfo
./.wget-hsts
lbb@local:~$
```

说明：

超找 48 小时内修改过的文件

### 实例 2. 根据关键字查找

命令：

`find . -name "*file"`

```sh
lbb@local:~$ find . -name "*file"
./.profile
lbb@local:~$
```

说明：

在当前目录查找 以 file 结尾的文件。 ". "代表当前目录

### 3. 按照目录或文件的权限来查找文件

命令：

`find /usr/local/ -perm 777`

```sh
lbb@local:~$ find /usr/local/ -perm 777
/usr/local/man
lbb@local:~$
```

说明：

查找/usr/local/目录下 权限为 777 的文件

### 4. 按类型查找

命令：

`find /var -type f -name "*.log"`

```sh
lbb@local:~$ find /var -type f -name "*.log"
find: ‘/var/cache/apt/archives/partial’: Permission denied
find: ‘/var/cache/ldconfig’: Permission denied
find: ‘/var/lib/apt/lists/partial’: Permission denied
find: ‘/var/lib/polkit-1’: Permission denied
find: ‘/var/lib/update-notifier/package-data-downloads/partial’: Permission denied
/var/log/alternatives.log
/var/log/apt/history.log
/var/log/apt/term.log
/var/log/dpkg.log
find: ‘/var/spool/cron/atjobs’: Permission denied
find: ‘/var/spool/cron/atspool’: Permission denied
find: ‘/var/spool/cron/crontabs’: Permission denied
find: ‘/var/spool/rsyslog’: Permission denied
lbb@local:~$
```

说明：

查找当目录，以.log 结尾的普通文件

### 5. 查找当前所有目录并排序

命令：

`find . -type d | sort`

```sh
lbb@local:~$ find . -type d | sort
.
./.local
./.local/lib
./.local/lib/python3.7
./.local/lib/python3.7/site-packages
lbb@local:~$
```

### 6. 按大小查找文件

命令：

`find . -size +1000c -print`

```sh
lbb@local:~$ find . -size +1000c -print
./.bashrc
./.viminfo
lbb@local:~$
```

说明：

查找当前目录大于 1K 的文件

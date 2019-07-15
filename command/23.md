# Linux 下打包压缩和解压解包

## tar

- 打包 `tar cvf xxx.tar xxx/`
- 解包 `tar xvf xxx.tar`

```bash
tar –xvf file.tar             //解压 tar 包
tar -xzvf file.tar.gz         //解压 tar.gz
tar -xjvf file.tar.bz2        //解压 tar.bz2
tar –xZvf file.tar.Z          //解压 tar.Z
unrar e file.rar              //解压 rar
unzip file.zip                //解压 zip
```

1. .tar 用 `tar –xvf` 解压
2. .gz 用 `gzip -d` 或者 `gunzip` 解压
3. .tar.gz 和.tgz 用 `tar –xzf` 解压
4. .bz2 用 `bzip2 -d` 或者用 `bunzip2` 解压
5. .tar.bz2 用 `tar –xjf` 解压
6. .Z 用 `uncompress` 解压
7. .tar.Z 用 `tar –xZf` 解压
8. .rar 用 `unrar e` 解压
9. .zip 用 `unzip` 解压

## xz

xz 压缩最新压缩率之王，可能很多人都很陌生。

- xz 压缩文件方法或命令`xz -z file.tar`
  如果要保留被压缩的文件加上参数 -k ，如果要设置压缩率加入参数 -0 到 -9 调节压缩率。如果不设置，默认压缩等级是 6.
- xz 解压文件方法或命令`xz -d file.tar.xz`
  同样使用 -k 参数来保留被解压缩的文件。

## gzip

gzip 是个使用广泛的压缩程序，文件经它压缩过后，其名称后面会多出".gz"的扩展名。

```bash
gzip *            //压缩目录下的所有文件
gzip -dv *        //解压文件，并列出详细信息
gzip -l *         // 显示压缩文件的信息
```

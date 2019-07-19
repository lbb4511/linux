# Nginx

## Nginx 说明

- Nginx 是一个很强大的高性能 Web 和反向代理服务器，常被我们用作负载均衡服务器，也可以作为邮件代理服务器
- Nginx WIKI：<https://zh.wikipedia.org/zh/Nginx>
- Nginx 百科：<http://baike.baidu.com/item/nginx>
- Nginx 官网：<http://nginx.org/en/>
- Nginx 官网下载：<http://nginx.org/en/download.html>
  - 源码包方式下载：<http://nginx.org/en/download.html>，注意该页面的：`Stable version`，这个表示稳定版本，2016-03-22 最新版本是：`nginx-1.8.1`，这是一个 **tar.gz** 的文件链接。
  - 构建包方式下载：<http://nginx.org/en/linux_packages.html#stable>
- Nginx 文档：
  - 优先：<https://www.nginx.com/resources/wiki/>
  - 次要：<http://nginx.org/en/docs/>
- Nginx 模块地址：<https://www.nginx.com/resources/wiki/modules/>

## 来自网络上的一个好介绍

- 来源：<https://help.aliyun.com/knowledge_detail/6703521.html?spm=5176.788314854.2.2.CdMGlB>

> - 传统上基于进程或线程模型架构的 Web 服务通过每进程或每线程处理并发连接请求，这势必会在网络和 I/O 操作时产生阻塞，其另一个必然结果则是对内存或 CPU 的利用率低下。生成一个新的进程/线程需要事先备好其运行时环境，这包括为其分配堆内存和栈内存，以及为其创建新的执行上下文等。这些操作都需要占用 CPU，而且过多的进程/线程还会带来线程抖动或频繁的上下文切换，系统性能也会由此进一步下降。
> - 在设计的最初阶段，Nginx 的主要着眼点就是其高性能以及对物理计算资源的高密度利用，因此其采用了不同的架构模型。受启发于多种操作系统设计中基于“事件”的高级处理机制，nginx 采用了模块化、事件驱动、异步、单线程及非阻塞的架构，并大量采用了多路复用及事件通知机制。在 Nginx 中，连接请求由为数不多的几个仅包含一个线程的进程 Worker 以高效的回环(run-loop)机制进行处理，而每个 Worker 可以并行处理数千个的并发连接及请求。
> - 如果负载以 CPU 密集型应用为主，如 SSL 或压缩应用，则 Worker 数应与 CPU 数相同；如果负载以 IO 密集型为主，如响应大量内容给客户端，则 Worker 数应该为 CPU 个数的 1.5 或 2 倍。
> - Nginx 会按需同时运行多个进程：一个主进程(Master)和几个工作进程(Worker)，配置了缓存时还会有缓存加载器进程(Cache Loader)和缓存管理器进程(Cache Manager)等。所有进程均是仅含有一个线程，并主要通过“共享内存”的机制实现进程间通信。主进程以 root 用户身份运行，而 Worker、Cache Loader 和 Cache manager 均应以非特权用户身份运行。
> - 主进程主要完成如下工作：

    - 1.读取并验正配置信息；
    - 2.创建、绑定及关闭套接字；
    - 3.启动、终止及维护worker进程的个数；
    - 4.无须中止服务而重新配置工作特性；
    - 5.控制非中断式程序升级，启用新的二进制程序并在需要时回滚至老版本；
    - 6.重新打开日志文件，实现日志滚动；
    - 7.编译嵌入式perl脚本；

> - Worker 进程主要完成的任务包括：

    - 1.接收、传入并处理来自客户端的连接；
    - 2.提供反向代理及过滤功能；
    - 3.nginx任何能完成的其它任务；

> - Cache Loader 进程主要完成的任务包括：

    - 1.检查缓存存储中的缓存对象；
    - 2.使用缓存元数据建立内存数据库；

> - Cache Manager 进程的主要任务：

    - 1.缓存的失效及过期检验；

## Nginx 的 Docker 部署

- 预设好目录，在宿主机上创建下面目录：`mkdir -p /data/nginx/html /data/nginx/conf.d /data/nginx/logs /data/nginx/conf`
- 先准备好你的 nginx.conf 文件，存放在宿主机的：/data/nginx/conf 目录下，等下需要映射。
- 下载镜像：`docker pull nginx:1.12.2`
- 运行容器：`docker run --name cas-nginx -p 80:80 -v /data/nginx/html:/usr/share/nginx/html:ro -v /data/nginx/conf.d:/etc/nginx/conf.d -v /data/nginx/logs:/var/log/nginx -v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf:ro -d nginx:1.12.2`
- 重新加载配置（目前测试无效，只能重启服务）：`docker exec -it cas-nginx nginx -s reload`
- 停止服务：`docker exec -it cas-nginx nginx -s stop` 或者：`docker stop cas-nginx`
- 重新启动服务：`docker restart cas-nginx`

## Nginx 源码编译安装

- 官网下载最新稳定版本 **1.8.1**，大小：814K
- 官网安装说明：<https://www.nginx.com/resources/wiki/start/topics/tutorials/install/>
- 源码编译配置参数说明：
  - <https://www.nginx.com/resources/wiki/start/topics/tutorials/installoptions/>
  - <http://nginx.org/en/docs/configure.html>
- 开始安装：

  - 安装依赖包：`yum install -y gcc gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel`
  - 预设几个文件夹，方便等下安装的时候有些文件可以进行存放：
    - `mkdir -p /usr/local/nginx /var/log/nginx /var/temp/nginx /var/lock/nginx`
  - 下载源码包：`wget http://nginx.org/download/nginx-1.8.1.tar.gz`
  - 解压：`tar zxvf nginx-1.8.1.tar.gz`
  - 进入解压后目录：`cd nginx-1.8.1/`
  - 编译配置：

  ```ini
  ./configure \
  --prefix=/usr/local/nginx \
  --pid-path=/var/local/nginx/nginx.pid \
  --lock-path=/var/lock/nginx/nginx.lock \
  --error-log-path=/var/log/nginx/error.log \
  --http-log-path=/var/log/nginx/access.log \
  --with-http_gzip_static_module \
  --http-client-body-temp-path=/var/temp/nginx/client \
  --http-proxy-temp-path=/var/temp/nginx/proxy \
  --http-fastcgi-temp-path=/var/temp/nginx/fastcgi \
  --http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
  --with-http_ssl_module \
  --http-scgi-temp-path=/var/temp/nginx/scgi
  ```

  - 编译：`make`
  - 安装：`make install`

- 启动 Nginx

  - 先检查是否在 /usr/local 目录下生成了 Nginx 等相关文件：`cd /usr/local/nginx;ll`，正常的效果应该是显示这样的：

  ```nginx
  drwxr-xr-x. 2 root root 4096 3月  22 16:21 conf
  drwxr-xr-x. 2 root root 4096 3月  22 16:21 html
  drwxr-xr-x. 2 root root 4096 3月  22 16:21 sbin
  ```

  - 停止防火墙：`service iptables stop`
    - 或是把 80 端口加入到的排除列表：
    - `sudo iptables -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT`
    - `sudo service iptables save`
    - `sudo service iptables restart`
  - 启动：`/usr/local/nginx/sbin/nginx`，启动完成 shell 是不会有输出的
  - 检查 时候有 Nginx 进程：`ps aux | grep nginx`，正常是显示 3 个结果出来
  - 检查 Nginx 是否启动并监听了 80 端口：`netstat -ntulp | grep 80`
  - 访问：`192.168.1.114`，如果能看到：`Welcome to nginx!`，即可表示安装成功
  - 检查 Nginx 启用的配置文件是哪个：`/usr/local/nginx/sbin/nginx -t`
  - 刷新 Nginx 配置后重启：`/usr/local/nginx/sbin/nginx -s reload`
  - 停止 Nginx：`/usr/local/nginx/sbin/nginx -s stop`
  - 如果访问不了，或是出现其他信息看下错误立即：`vim /var/log/nginx/error.log`

## 把 Nginx 添加到系统服务中

- 新建文件：`vim /etc/init.d/nginx`
- 添加如下内容：

```nginx
#!/bin/bash


#nginx执行程序路径需要修改
nginxd=/usr/local/nginx/sbin/nginx

# nginx配置文件路径需要修改
nginx_config=/usr/local/nginx/conf/nginx.conf

# pid 地址需要修改
nginx_pid=/var/local/nginx/nginx.pid


RETVAL=0
prog="nginx"

# Source function library.
. /etc/rc.d/init.d/functions
# Source networking configuration.
. /etc/sysconfig/network
# Check that networking is up.
[ ${NETWORKING} = "no" ] && exit 0
[ -x $nginxd ] || exit 0

# Start nginx daemons functions.
start() {
if [ -e $nginx_pid ];then
   echo "nginx already running...."
   exit 1
fi

echo -n $"Starting $prog: "
daemon $nginxd -c ${nginx_config}
RETVAL=$?
echo
[ $RETVAL = 0 ] && touch /var/lock/subsys/nginx
return $RETVAL
}

# Stop nginx daemons functions.
# pid 地址需要修改
stop() {
	echo -n $"Stopping $prog: "
	killproc $nginxd
	RETVAL=$?
	echo
	[ $RETVAL = 0 ] && rm -f /var/lock/subsys/nginx /var/local/nginx/nginx.pid
}

# reload nginx service functions.
reload() {
	echo -n $"Reloading $prog: "
	#kill -HUP `cat ${nginx_pid}`
	killproc $nginxd -HUP
	RETVAL=$?
	echo
}

# See how we were called.
case "$1" in
	start)
		start
		;;
	stop)
		stop
		;;
	reload)
		reload
		;;
	restart)
		stop
		start
		;;
	status)
		status $prog
		RETVAL=$?
		;;
	*)

	echo $"Usage: $prog {start|stop|restart|reload|status|help}"
	exit 1

esac
exit $RETVAL
```

- 修改权限：`chmod 755 /etc/init.d/nginx`
- 启动服务：`service nginx start`
- 停止服务：`service nginx stop`
- 重启服务：`service nginx restart`

## Nginx 全局变量

- \$arg_PARAMETER #这个变量包含 GET 请求中，如果有变量 PARAMETER 时的值。
- \$args #这个变量等于请求行中(GET 请求)的参数，例如 foo=123&bar=blahblah;
- \$binary_remote_addr #二进制的客户地址。
- \$body_bytes_sent #响应时送出的 body 字节数数量。即使连接中断，这个数据也是精确的。
- \$content_length #请求头中的 Content-length 字段。
- \$content_type #请求头中的 Content-Type 字段。
- \$cookie_COOKIE #cookie COOKIE 变量的值
- \$document_root #当前请求在 root 指令中指定的值。
- $document_uri #与$uri 相同。
- \$host #请求主机头字段，否则为服务器名称。
- \$hostname #Set to the machine’s hostname as returned by gethostname
- \$http_HEADER
- $is_args #如果有$args 参数，这个变量等于”?”，否则等于”"，空值。
- \$http_user_agent #客户端 agent 信息
- \$http_cookie #客户端 cookie 信息
- \$limit_rate #这个变量可以限制连接速率。
- $query_string #与$args 相同。
- \$request_body_file #客户端请求主体信息的临时文件名。
- \$request_method #客户端请求的动作，通常为 GET 或 POST。
- \$remote_addr #客户端的 IP 地址。
- \$remote_port #客户端的端口。
- \$remote_user #已经经过 Auth Basic Module 验证的用户名。
- \$request_completion #如果请求结束，设置为 OK. 当请求未结束或如果该请求不是请求链串的最后一个时，为空(Empty)。
- \$request_method #GET 或 POST
- \$request_filename #当前请求的文件路径，由 root 或 alias 指令与 URI 请求生成。
- \$request_uri #包含请求参数的原始 URI，不包含主机名，如：”/foo/bar.php?arg=baz”。不能修改。
- \$scheme #HTTP 方法（如 http，https）。
- \$server_protocol #请求使用的协议，通常是 HTTP/1.0 或 HTTP/1.1。
- \$server_addr #服务器地址，在完成一次系统调用后可以确定这个值。
- \$server_name #服务器名称。
- \$server_port #请求到达服务器的端口号。
- $uri #不带请求参数的当前URI，$uri 不包含主机名，如”/foo/bar.html”。该值有可能和\$request_uri 不一致。
- \$request_uri 是浏览器发过来的值。该值是 rewrite 后的值。例如做了 internal redirects 后。

## Nginx 配置

- Nginx 默认配置文件：`vim /usr/local/nginx/conf/nginx.conf`

### Nginx 在 1.8.1 版本下的默认配置（去掉注释）

```nginx
user root;#我这里习惯使用 root，所以这里需要这样设置。如果你有为你的 nginx 专门配置一个用户，这里需要改为你的用户
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

### HTTP 服务，虚拟主机

- 停止防火墙：`service iptables stop`，防止出现特别干扰
- 编辑默认的配置文件：`vim /usr/local/nginx/conf/nginx.conf`
- 设置两个虚拟主机（通过**端口**来区分开）

```nginx
user root;#我这里习惯使用 root，所以这里需要这样设置。如果你有为你的 nginx 专门配置一个用户，这里需要改为你的用户
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    # 一个 server 代表一个虚拟主机
    server {
        listen       80;
        server_name  localhost;

        location / {
            # 虚拟机根目录是 /usr/local/nginx/html 目录
            root   html;
            # 虚拟机首页是 /usr/local/nginx/html 目录下这两个文件
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        # 第二个虚拟机的端口是 90，服务地址还是本地
        listen       90;
        server_name  localhost;

        location / {
            root   html90;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

- 设置两个虚拟主机（通过**域名**来区分开）

```nginx
user root;#我这里习惯使用 root，所以这里需要这样设置。如果你有为你的 nginx 专门配置一个用户，这里需要改为你的用户
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    # 一个 server 代表一个虚拟主机
    server {
        listen       80;
        # 两个虚拟主机都使用 80 端口，设置不同域名
        server_name  code.youmeek.com;

        location / {
            # 虚拟机根目录是 /usr/local/nginx/html 目录
            root   html;
            # 虚拟机首页是 /usr/local/nginx/html 目录下这两个文件
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        listen       80;
        # 两个虚拟主机都使用 80 端口，设置不同域名
        server_name  i.youmeek.com;

        location / {
            root   html-i;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

### 反向代理和负载均衡

- 最精简的环境：一台虚拟机
  - 1 个 JDK
  - 1 个 Nginx
  - 2 个 Tomcat
- Nginx 配置：

```nginx
user root;#我这里习惯使用 root，所以这里需要这样设置。如果你有为你的 nginx 专门配置一个用户，这里需要改为你的用户
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    # 自己定义的两个 tomcat 请求地址和端口
    # 也就是当浏览器请求：tomcat.youmeek.com 的时候从下面这两个 tomcat 中去找一个进行转发
    upstream tomcatCluster {
        server 192.168.1.114:8080;
        server 192.168.1.114:8081;

        # 添加 weight 字段可以表示权重，值越高权重越大，默认值是 1，最大值官网没说，一般如果设置也就设置 3,5,7 这样的数
        # 官网：https://www.nginx.com/resources/admin-guide/load-balancer/#weight
        # server 192.168.1.114:8080 weight=2;
        # server 192.168.1.114:8081 weight=1;
    }

    server {
        listen       80;
        server_name  tomcat.youmeek.com;

        location / {
            proxy_pass   http://tomcatCluster;
            index  index.html index.htm;
        }
    }
}
```

### 配置 HTTPS 服务（SSL 证书配置）

- 免费申请 SSL 证书渠道 - 教程：<https://www.wn789.com/4394.html> - SSL For Free：<https://www.sslforfree.com> - 配置要点其实就是下面该图：
- ![免费申请 SSL 证书渠道](images/Nginx-SSL-a-1.jpg)
- 一般你会下载下面两个文件：`certificate.crt`，`private.key`
- 如果你需要把 crt 和 key 的证书转换成 keystore（如果你有这个需求的话）
- 从 key 和 crt 生成 pkcs12 格式的 keystore，生成过程会让人你输入密码，这个密码下面会用到，我这里假设输入 123456 - `openssl pkcs12 -export -in certificate.crt -inkey private.key -out youmeek.p12 -name youmeek -CAfile certificate.crt -caname -chain` - `keytool -importkeystore -v -srckeystore youmeek.p12 -srcstoretype pkcs12 -srcstorepass 123456 -destkeystore youmeek.keystore -deststoretype jks -deststorepass 123456`
- 修改 nginx 配置文件，增加对 HTTPS 支持（下面的配置是基于默认安装 nginx 后的配置）
- `vim /usr/local/nginx/conf/nginx.conf`

```
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    # 如果访问 http 也直接跳转到 https
    server {
        listen       80;
        server_name sso.youmeek.com;
        return 301 https://$server_name$request_uri;
    }

    # crt 和 key 文件的存放位置根据你自己存放位置进行修改
    server {
        listen       443;
        server_name  sso.youmeek.com;
        ssl  on;
        ssl_certificate     /opt/ssl/certificate.crt;
        ssl_certificate_key /opt/ssl/private.key;
        location / {
            root   html;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}

```

## Nginx 配置文件常用配置积累

### location 配置

```nginx
= 开头表示精确匹配
^~ 开头表示uri以某个常规字符串开头，不是正则匹配
~ 开头表示区分大小写的正则匹配;
~* 开头表示不区分大小写的正则匹配
/ 通用匹配, 如果没有其它匹配,任何请求都会匹配到

location / {

}

location /user {

}

location = /user {

}

location /user/ {

}

location ^~ /user/ {

}

location /user/youmeek {

}

location ~ /user/youmeek {

}

location ~ ^(/cas/|/casclient1/|/casclient2/|/casclient3/) {

}

location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|ico|woff|woff2|ttf|eot|txt)$ {

}

location ~ .*$ {

}
```

### HTTP 服务，绑定多个域名

- <https://www.ttlsa.com/nginx/use-nginx-proxy/>

### 安装第三方模块

### 生成规格图

### 启用 Gzip 压缩

### 防盗链

- <https://help.aliyun.com/knowledge_detail/5974693.html?spm=5176.788314853.2.18.s4z1ra>

### Nginx 禁止特定用户代理（User Agents）访问，静止指定 IP 访问

- <https://www.ttlsa.com/nginx/how-to-block-user-agents-using-nginx/>
- <https://help.aliyun.com/knowledge_detail/5974693.html?spm=5176.788314853.2.18.s4z1ra>
- <>
- <>
- <>

### Nginx 缓存

### Nginx 自动分割日志文件

### Nginx 处理跨域请求

### 安全相预防

在配置文件中设置自定义缓存以限制缓冲区溢出攻击的可能性
client_body_buffer_size 1K;
client_header_buffer_size 1k;
client_max_body_size 1k;
large_client_header_buffers 2 1k;

7. 将 timeout 设低来防止 DOS 攻击
   所有这些声明都可以放到主配置文件中。
   client_body_timeout 10;
   client_header_timeout 10;
   keepalive_timeout 5 5;
   send_timeout 10;

8) 限制用户连接数来预防 DOS 攻击
   limit_zone slimits \$binary_remote_addr 5m;
   limit_conn slimits 5;

## 使用 logrotate 做 nginx 日志轮询分割

- 前提： - 我 nginx 的成功日志路径：/var/log/nginx/access.log - 我 nginx 的错误日志路径：/var/log/nginx/error.log - pid 路径：/var/local/nginx/nginx.pid

- 一般情况 CentOS 是装有：logrotate，你可以检查下：`rpm -ql logrotate`，如果有相应结果，则表示你也装了。
- logrotate 配置文件一般在： - 全局配置：/etc/logrotate.conf 通用配置文件，可以定义全局默认使用的选项。 - 自定义配置，放在这个目录下的都算是：/etc/logrotate.d/

- 针对 nginx 创建自定义的配置文件：`vim /etc/logrotate.d/nginx`
- 文件内容如下：

```ini

/var/log/nginx/access.log /var/log/nginx/error.log {
	create 644 root root
	notifempty
	daily
	rotate 15
	missingok
	dateext
	sharedscripts
	postrotate
	    if [ -f /var/local/nginx/nginx.pid ]; then
	        kill -USR1 `cat /var/local/nginx/nginx.pid`
	    fi
	endscript
}

```

- /var/log/nginx/access.log /var/log/nginx/error.log：多个文件用空格隔开，也可以用匹配符：/var/log/nginx/\*.log
- notifempty：如果是空文件的话，不转储
- create 644 root root：create mode owner group 转储文件，使用指定的文件模式创建新的日志文件
- 调用频率，有：daily，weekly，monthly 可选
- rotate 15：一次将存储 15 个归档日志。对于第 16 个归档，时间最久的归档将被删除。
- sharedscripts：所有的日志文件都轮转完毕后统一执行一次脚本
- missingok：如果日志文件丢失，不报错继续执行下一个
- dateext：文件后缀是日期格式,也就是切割后文件是:xxx.log-20131216.gz 这样,如果注释掉,切割出来是按数字递增,即前面说的 xxx.log-1 这种格式
- postrotate：执行命令的开始标志
- endscripthttp:执行命令的结束标志
- if 判断的意思不是中止 Nginx 的进程，而是传递给它信号重新生成日志，如果 nginx 没启动不做操作
- 更多参数可以看：<http://www.cnblogs.com/zengkefu/p/5498324.html>

* 手动执行测试：`/usr/sbin/logrotate -vf /etc/logrotate.d/nginx`
* 参数：‘-f’选项来强制 logrotate 轮循日志文件，‘-v’参数提供了详细的输出。
* 验证是否手动执行成功，查看 cron 的日志即可：`grep logrotate /var/log/cron`
* 设置 crontab 定时任务：`vim /etc/crontab`，添加下面内容：

```ini
//每天02点10分执行一次
10 02 * * *  /usr/sbin/logrotate -f /etc/logrotate.d/nginx
```

## Nginx + Keepalived 高可用

- 高可用 HA（High Availability），简单讲就是：我某个应用挂了，自动有另外应用起来接着扛着，致使整个服务对外来看是没有中断过的。这里的重点就是不中断，致使公司整个业务能不断进行中，把影响减到最小，赚得更多。
- 因为要不中断，所以我们就需要用到了 Keepalived。Keepalived 一般不会单独使用，基本都是跟负载均衡软件（LVS、HAProxy、Nginx）一起工作来达到集群的高可用效果。
- Keepalived 有双主、主备方案
- 常用词： - 心跳：Master 会主动给 Backup 发送心跳检测包以及对外的网络功能，而 Backup 负责接收 Master 的心跳检测包，随时准备接管主机。为什么叫心跳不知道，但是挺形象的，心跳同步。 - 选举：Keepalived 配置的时候可以指定各台主机优先级，Master 挂了，各台 Backup 要选举出一个新的 Master。
- Keepalived - 官网：<http://www.keepalived.org/> - 官网下载：<http://www.keepalived.org/download.html> - 官网文档：<http://www.keepalived.org/documentation.html>

### 搭建

- 软件版本： - Nginx：**1.8.1** - Keepalived：**1.2.20** - JDK：**8u72** - Tomcat：**8.0.32**
- 部署环境（下文中以第几台来代表这些主机）： - 虚拟 IP（VIP）：192.168.1.50 - 第一台主机：Nginx 1 + Keepalived 1 == 192.168.1.120（Master） - 第二台主机：Nginx 2 + Keepalived 2 == 192.168.1.121（Backup） - 第三台主机：Tomcat 1 == 192.168.1.122（Web 1） - 第四台主机：Tomcat 2 == 192.168.1.123（Web 2）
- 所有机子进行时间校准：[NTP（Network Time Protocol）介绍](NTP.md)
- 第三、第四台主机部署： - JDK 的安装：[JDK 安装](JDK-Install.md) - Tomcat 的安装：[Tomcat 安装和配置、优化](Tomcat-Install-And-Settings.md)
- 第一、二台主机部署（两台部署内容一样）： - Nginx 的安装：[Nginx 安装和配置](./) - 添加虚拟 IP： - 复制一个网卡信息：`sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0` - 编辑配置文件：`sudo vim /etc/sysconfig/network-scripts/ifcfg-eth0:0` - 修改内容为如下信息：
  `nginx DEVICE=eth0:0 >>> 这个需要修改 TYPE=Ethernet UUID=8ddbb256-caab-4ddf-8e9a-6527b4ac5a26 ONBOOT=yes NM_CONTROLLED=yes BOOTPROTO=none IPADDR=192.168.1.50 >>> 这个需要修改 PREFIX=24 GATEWAY=192.168.1.1 DNS1=101.226.4.6 DEFROUTE=yes IPV4_FAILURE_FATAL=yes IPV6INIT=no NAME="System eth0:0" >>> 这个需要修改 HWADDR=00:0c:29:f4:17:db LAST_CONNECT=1460213205` - 重启网卡服务：`service network restart` - 如果你要绑定更多虚拟 IP，则多复制几个网卡配置出来，命名如下：ifcfg-eth0:0，ifcfg-eth0:1，ifcfg-eth0:2 ...... - Keepalived 开始安装 - 安装依赖：`sudo yum install -y gcc openssl-devel popt-devel` - 解压包：`cd /opt/setups/ ; tar zxvf keepalived-1.2.20.tar.gz` - 编译：`cd /opt/setups/keepalived-1.2.20 ; ./configure --prefix=/usr/program/keepalived` - 编译安装：`make && make install` - Keepalived 设置服务和随机启动 - 复制配置文件到启动脚本目录：`cp /usr/program/keepalived/etc/rc.d/init.d/keepalived /etc/init.d/keepalived` - 增加权限：`chmod +x /etc/init.d/keepalived` - 编辑配置文件：`vim /etc/init.d/keepalived`
  `nginx 把 15 行的：. /etc/sysconfig/keepalived，改为： . /usr/program/keepalived/etc/sysconfig/keepalived（注意：前面有一个点和空格需要注意）` - 添加环境变量：`vim /etc/profile`
  `nginx # Keepalived 配置 KEEPALIVED_HOME=/usr/program/keepalived PATH=$PATH:$KEEPALIVED_HOME/sbin export KEEPALIVED_HOME export PATH` - 刷新环境变量：`source /etc/profile` - 检测环境变量：`keepalived -v` - `ln -s /usr/program/keepalived/sbin/keepalived /usr/sbin/` - `vim /usr/program/keepalived/etc/sysconfig/keepalived`
  `nginx 把 14 行的：KEEPALIVED_OPTIONS="-D"，改为： KEEPALIVED_OPTIONS="-D -f /usr/program/keepalived/etc/keepalived/keepalived.conf"` - 加入随机启动：`chkconfig keepalived on`
- 第一、二台主机配置（两台在 Keepalived 配置上稍微有不一样）： - 健康监测脚本（我个人放在：/opt/bash 目录下）：[nginx_check.sh](Keepalived-Settings/nginx_check.sh) - 健康监测脚本添加执行权限：`chmod 755 /opt/bash/nginx_check.sh` - 运行监测脚本，看下是否有问题：`sh /opt/bash/nginx_check.sh`，如果没有报错，则表示改脚本没有问题 - 这个脚本很重要，如果脚本没法用，在启用 Keepalived 的时候可能会报：`Keepalived_vrrp[5684]: pid 5959 exited with status 1` - nginx 配置（两台一样配置）：
  ``` nginx
  worker_processes 1;
  events {
  worker_connections 1024;
  }
  http {
  include mime.types;
  default_type application/octet-stream;
        sendfile        on;
        keepalive_timeout  65;

        # （重点）
        upstream tomcatCluster {
            server 192.168.1.122:8080 weight=1;
            server 192.168.1.123:8080 weight=1;
        }

        # （重点）
        server {
            listen       80;
            server_name  192.168.1.50;

            location / {
                proxy_pass   http://tomcatCluster;
                index  index.html index.htm;
            }
        }
  }
  ``` - Keepalived 配置文件编辑（第一、二台配置稍微不同，不同点具体看下面重点说明） - 编辑：`vim /usr/program/keepalived/etc/keepalived/keepalived.conf`

```nginx
! Configuration File for keepalived

# 全局配置
global_defs {
    # 邮箱通知配置，keepalived 在发生切换时需要发送 email 到的对象，一行一个
    notification_email {
        #acassen@firewall.loc
        #failover@firewall.loc
        #sysadmin@firewall.loc
    }
    # 指定发件人
    #notification_email_from Alexandre.Cassen@firewall.loc
    # 指定smtp服务器地址
    #smtp_server 192.168.200.1
    # 指定smtp连接超时时间，单位秒
    #smtp_connect_timeout 30

    router_id LVS_DEVEL
    vrrp_skip_check_adv_addr
    vrrp_strict
}

# （重点）脚本监控实现
vrrp_script check_nginx {
    # 运行脚本
    script "/opt/bash/nginx_check.sh"
    # 时间间隔，2秒
    interval 2
    # 权重
    weight 2
}


vrrp_instance VI_1 {
    # （重点）Backup 机子这里是设置为：BACKUP
    state MASTER
    interface eth0
    virtual_router_id 51
    # （重点）Backup 机子要小于当前 Master 设置的 100，建议设置为 99
    priority 100
    # Master 与 Backup 负载均衡器之间同步检查的时间间隔，单位是秒
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }

    # （重点）配置虚拟 IP 地址，如果有多个则一行一个
    virtual_ipaddress {
        192.168.1.50
    }

    # （重点）脚本监控调用
    track_script {
        check_nginx
    }
}
```

### 启动各自服务

- 四台机子都停掉防火墙：`service iptables stop`
- 先启动两台 Tomcat：`sh /usr/program/tomcat8/bin/startup.sh ; tail -200f /usr/program/tomcat8/logs/catalina.out` - 检查两台 Tomcat 是否可以单独访问，最好给首页加上不同标识，好方便等下确认是否有负载 - `http://192.168.1.122:8080` - `http://192.168.1.123:8080`
- 启动两台 Nginx 服务：`/usr/local/nginx/sbin/nginx`
- 启动两台 Keepalived 服务：`service keepalived start`
- 查看 Master 和 Backup 两台主机的对应日志：`tail -f /var/log/messages`

### 高可用测试

- 模拟 Keepalived 挂掉 - 关闭 Master 主机的 Keepalived，查看 Master 和 Backup 两台主机的对应日志：`tail -f /var/log/messages` - 关闭服务：`service keepalived stop` - 如果第二台机接管了，则表示成功 - 重新开启 Master 主机的 Keepalived，查看 Master 和 Backup 两台主机的对应日志：`tail -f /var/log/messages` - 重启服务：`service keepalived restart` - 如果第一台机重新接管了，则表示成功
- 模拟 Nginx 挂掉 - 关闭 Master 主机的 Nginx，查看 Master 和 Backup 两台主机的对应日志：`tail -f /var/log/messages` - 关闭服务：`/usr/local/nginx/sbin/nginx -s stop` - 如果第二台机接管了，则表示成功 - 重新开启 Master 主机的 Nginx，查看 Master 和 Backup 两台主机的对应日志：`tail -f /var/log/messages` - 重启 Nginx 服务：`/usr/local/nginx/sbin/nginx -s reload` - 重启 Keepalived 服务：`service keepalived restart` - 如果第一台机重新接管了，则表示成功
- 可以优化的地方，改为双主热备，监控脚本上带有自启动相关细节，后续再进行。
- 日志中常用的几句话解释： - `Entering to MASTER STATE`，变成 Master 状态 - `Netlink reflector reports IP 192.168.1.50 added`，一般变为 Master 状态，都要重新加入虚拟 IP，一般叫法叫做：虚拟 IP 重新漂移到 Master 机子上 - `Entering BACKUP STATE`，变成 Backup 状态 - `Netlink reflector reports IP 192.168.1.50 removed`，一般变为 Backup 状态，都要移出虚拟 IP，一般叫法叫做：虚拟 IP 重新漂移到 Master 机子上 - `VRRP_Script(check_nginx) succeeded`，监控脚本执行成功

## 杂七杂八

- [nginx 实现简体繁体字互转以及中文转拼音](https://www.ttlsa.com/nginx/nginx-modules-ngx_set_cconv/)
- [nginx 记录分析网站响应慢的请求(ngx_http_log_request_speed)](https://www.ttlsa.com/nginx/nginx-modules-ngx_http_log_request_speed/)
- [nginx 空白图片(empty_gif 模块)](https://www.ttlsa.com/nginx/nginx-modules-empty_gif/)

## 资料

- <https://help.aliyun.com/knowledge_detail/5974693.html?spm=5176.788314853.2.18.s4z1ra>
- <http://www.ydcss.com/archives/466>
- <http://blog.sae.sina.com.cn/archives/2107>
- <http://www.nginx.cn/273.html>
- <http://xutaibao.blog.51cto.com/7482722/1669123>
- <https://m.oschina.net/blog/301710>
- <http://blog.csdn.net/u010028869/article/details/50612571>
- <http://blog.csdn.net/wanglei_storage/article/details/51175418>

# Jboss

## 安装

安装 jboss 很简单，它不需要安装，直接解压到一个目录下即可

## 部署应用

部署应用跟 apache 一样，jboss 也有一个部署目录，那就是 jboss/server 目录，其中有三个目录：all，default，minimal，代表了 jboss 提供的三种部署方式，all 表示 jboss 提供的服务全部打开，default 表示默认的 jboss 服务，minimal 表示只打开最基本的。这里面可以增加自己的部署，我们只使用 default。
进入 default 目录后，有以下几个目录：

- conf：一些配置文件
- data：保存的数据，比如有状态会话 bean
- deploy：部署目录，所有的应用都部署在这里面，相当于 apache 的 htdocs
- lib：部署的应用程序需要使用到的其它库(jar)
- log：jboss 的日志
- tmp：部署应用是产生的临时文件
- work:工作目录，所部署的应用（一些 jar 压缩文件）会被解压在这里

要部署我们的应用，还需要把 jboss/docs/examples/jca/mysql-ds.xml 拷贝到 jboss/server/default/deploy 目录下，并做如下修改：

```xml
< connection-url>jdbc:mysql://你要连接的数据库的ip:3306/数据库名?zeroDateTimeBehavior=convertToNull< /connection-url>
< driver-class>com.mysql.jdbc.Driver< /driver-class>
< user-name>用户名< /user-name>
< password>密码< /password>
```

## 启动 Jboss

\$JBOSS-HOME/server/下有 3 个目录，all/default/minimal，它们是表示 3 种配置，全部的配置、默认配置、最小配置，我们在启动 JBOSS 服务时，可以指定

- `run –c all` 表示是启动 all 配置(将会加载所有服务)；
- `run` 表示是以默认配置启动;
- `run –c mimimal` 表示是启动 mimimal 配置。

这三者所加载的服务数量不同，具体区别可查阅 JBOSS 相关文档，你还可以自己定义一个配置，如 test，属于高手去为了性能上的考虑了，那这份文档对你的帮助不会太大了。

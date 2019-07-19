# Linux 运维

## 服务器

一个管理资源并为用户提供服务的计算机软件，通常分为文件服务器（能使用户在其它计算机访问文件），数据库服务器和应用程序服务器。

### 文件服务器/网络存储设备

文件服务器是一种器件，它的功能就是向服务器提供文件。它加强了存储器的功能，简化了网络数据的管理。它一则改善了系统的性能，提高了数据的可用性，二则减少了管理的复杂程度，降低了运营费用。

### 数据库服务器

- Oracle
- MySQL
- Microsoft SQL Server
- PostgreSQL
- MongoDB
- Redis
- MariaDB

### 邮件服务器

- SMTP
- POP3/IMAP
- CardDAV
- CalDAV
- Microsoft Exchange

### FTP 服务器

- Filezilla Server
- Windows Server

### 域名服务器

### 应用程序服务器

应用程序服务器(简称应用服务器)，我们先看一下微软对它的定义："我们把应用程序服务器定义为“作为服务器执行共享业务应用程序的底层的系统软件”。 就像文件服务器为很多用户提供文件一样，应用程序服务器让多个用户可以同时使用应用程序（通常是客户创建的应用程序）"

- WebLogic
- JBoss
- GlassFish

### Web 服务器

Web 服务器的基本功能就是提供 Web 信息浏览服务。它只需支持 HTTP 协议、HTML 文档格式及 URL。与客户端的网络浏览器配合。因为 Web 服务器主要支持的协议就是 HTTP，所以通常情况下 HTTP 服务器和 WEB 服务器是相等的(有没有支持除 HTTP 之外的协议的 web 服务器，作者没有考证过)，说的是一回事。

通俗的讲，Web 服务器传送(serves)页面使浏览器可以浏览，然而应用程序服务器提供的是客户端应用程序可以调用(call)的方法(methods)。确切一点，你可以说:Web 服务器专门处理 HTTP 请求(request)，但是应用程序服务器是通过很多协议来为应用程序提供(serves)商业逻辑(business logic)。

以 Java EE 为例，Web 服务器主要是处理静态页面处理和作为 Servlet 容器，解释和执行 servlet/JSP，而应用服务器是运行业务逻辑的，主要是 EJB、 JNDI 和 JMX API 等 J2EE API 方面的，还包含事务处理、数据库连接等功能，所以在企业级应用中，应用服务器提供的功能比 WEB 服务器强大的多。

以这样的定义，IIS、Apache、Tomcat 都可以属于 Web 服务器，Weblogic、WebSphere 都属于应用服务器。

### 网页服务器

- Apache HTTP Server
  在 Web 服务器中，Apache 是纯粹的 Web 服务器，经常与 Tomcat 配对使用。它对 HTML 页面具有强大的解释能力，但是不能解释嵌入页面内的服务器端脚本代码（JSP/Servlet）。
- Tomcat
  早期的 Tomcat 是一个嵌入 Apache 内的 JSP/Servlet 解释引擎 Apache+Tomcat 就相当于 IIS+ASP。后来的 Tomcat 已不再嵌入 Apache 内，Tomcat 进程独立于 Apache 进程运行。 而且，Tomcat 已经是一个独立的 Servlet 和 JSP 容器，业务逻辑层代码和界面交互层代码可以分离了。因此，有人把 Tomcat 叫做轻量级应用服务器。
- Internet Information Services
  微软早期的 IIS，就是一个纯粹的 Web 服务器。后来，它嵌入了 ASP 引擎，可以解释 VBScript 和 JScript 服务器端代码了，这时，它就可以兼作应用服务器。当然，它与 J2EE 应用服务器根本无法相比，但是，从功能上说，从原理上说，它勉强可以称之为应用服务器。确切地说，它是兼有一点应用服务器功能的 Web 服务器。

综上：Apache 是纯粹的网页服务器，而 Tomcat 和 IIS 因为具有了解释执行服务器端代码的能力，可以称作为轻量级应用服务器或带有服务器功能的 Web 服务器。Weblogic、WebSphere 因为能提供强大的 J2EE 功能，毫无疑问是绝对的应用服务器。对于处于中间位置的 Tomcat，它可以配合纯 Web 服务器 Apache 一起使用，也可以作为应用服务器的辅助与应用服务器一起部署

- lighttpd
- Nginx

### 关于 WEB 服务器、应用程序服务器的更详细区别可以参考下面这篇文章

通俗的讲，Web 服务器传送(serves)页面使浏览器可以浏览，然而应用程序服务器提供的是客户端应用程序可以调用(call)的方法(methods)。确切一点，你可以说:Web 服务器专门处理 HTTP 请求(request)，但是应用程序服务器是通过很多协议来为应用程序提供(serves)商业逻辑 (business logic)。

下面让我们来细细道来:

#### Web 服务器(Web Server)

Web 服务器可以解析(handles)HTTP 协议。当 Web 服务器接收到一个 HTTP 请求(request)，会返回一个 HTTP 响应 (response)，例如送回一个 HTML 页面。为了处理一个请求(request)，Web 服务器可以响应(response)一个静态页面或图片，进行页面跳转(redirect)，或者把动态响应(dynamic response)的产生委托(delegate)给一些其它的程序例如 CGI 脚本，JSP(JavaServer Pages)脚本，servlets，ASP(Active Server Pages)脚本，服务器端(server-side)JavaScript，或者一些其它的服务器端(server-side)技术。无论它们(译者注:脚本)的目的如何，这些服务器端(server-side)的程序通常产生一个 HTML 的响应(response)来让浏览器可以浏览。

要知道，Web 服务器的代理模型(delegation model)非常简单。当一个请求(request)被送到 Web 服务器里来时，它只单纯的把请求(request)传递给可以很好的处理请求 (request)的程序(译者注:服务器端脚本)。Web 服务器仅仅提供一个可以执行服务器端(server-side)程序和返回(程序所产生的)响应(response)的环境，而不会超出职能范围。服务器端(server-side)程序通常具有事务处理(transaction processing)，数据库连接(database connectivity)和消息(messaging)等功能。

虽然 Web 服务器不支持事务处理或数据库连接池，但它可以配置(employ)各种策略(strategies)来实现容错性(fault tolerance)和可扩展性(scalability)，例如负载平衡(load balancing)，缓冲(caching)。集群特征(clustering—features)经常被误认为仅仅是应用程序服务器专有的特征。

#### 应用程序服务器(The Application Server)

根据我们的定义，作为应用程序服务器，它通过各种协议，可以包括 HTTP，把商业逻辑暴露给(expose)客户端应用程序。Web 服务器主要是处理向浏览器发送 HTML 以供浏览，而应用程序服务器提供访问商业逻辑的途径以供客户端应用程序使用。应用程序使用此商业逻辑就象你调用对象的一个方法 (或过程语言中的一个函数)一样。

应用程序服务器的客户端(包含有图形用户界面(GUI)的)可能会运行在一台 PC、一个 Web 服务器或者甚至是其它的应用程序服务器上。在应用程序服务器与其客户端之间来回穿梭(traveling)的信息不仅仅局限于简单的显示标记。相反，这种信息就是程序逻辑(program logic)。正是由于这种逻辑取得了(takes)数据和方法调用(calls)的形式而不是静态 HTML，所以客户端才可以随心所欲的使用这种被暴露的商业逻辑。

在大多数情形下，应用程序服务器是通过组件 (component) 的应用程序接口(API)把商业逻辑暴露(expose)(给客户端应用程序)的，例如基于 J2EE(Java 2 Platform, Enterprise Edition)应用程序服务器的 EJB(Enterprise JavaBean)组件模型。此外，应用程序服务器可以管理自己的资源，例如看大门的工作(gate-keeping duties)包括安全(security)，事务处理(transaction processing)，资源池(resource pooling)，和消息(messaging)。就象 Web 服务器一样，应用程序服务器配置了多种可扩展(scalability)和容错(fault tolerance)技术。

##### 一个例子

设想一个在线商店(网站)提供实时定价(real-time pricing)和有效性(availability)信息。这个站点(site)很可能会提供一个表单(form)让你来选择产品。当你提交查询 (query)后，网站会进行查找(lookup)并把结果内嵌在 HTML 页面中返回。网站可以有很多种方式来实现这种功能。我要介绍一个不使用应用程序服务器 的情景和一个使用应用程序服务器的情景。观察一下这两中情景的不同会有助于你了解应用程序服务器的功能。

###### 情景 1: 不带应用程序服务器的 Web 服务器

在此种情景下，一个 Web 服务器独立提供在线商店的功能。Web 服务器获得你的请求(request)，然后发送给服务器端(server- side)可以处理请求(request)的程序。此程序从数据库或文本文件(flat file，译者注:flat file 是指没有特殊格式的非二进制的文件，如 properties 和 XML 文件等)中查找定价信息。一旦找到，服务器端(server-side)程序把结果信息表示成(formulate)HTML 形式，最后 Web 服务器把会它发送到你的 Web 浏览器。

简而言之，Web 服务器只是简单的通过响应(response)HTML 页面来处理 HTTP 请求(request)。

###### 情景 2:带应用程序服务器的 Web 服务器

情景 2 和情景 1 相同的是 Web 服务器还是把响应(response)的产生委托(delegates)给脚本(译者注:服务器端 (server-side)程序)。然而，你可以把查找定价的商业逻辑(business logic)放到应用程序服务器上。由于这种变化，此脚本只是简单的调用应用程序服务器的查找服务(lookup service)，而不是已经知道如何查找数据然后表示为(formulate)一个响应(response)。这时当该脚本程序产生 HTML 响应(response)时就可以使用该服务的返回结果了。

在此情景中，应用程序服务器提供(serves)了用于查询产品的定价信息的商业逻辑。(服务器的)这种功能(functionality)没有指出有关显示和客户端如何使用此信息的细节，相反客户端和应用程序服务器只是来回传送数据。当有客户端调用应用程序服务器的查找服务(lookup service)时，此服务只是简单的查找并返回结果给客户端。

通过从响应产生(response-generating)HTML 的代码中分离出来，在应用程序之中该定价(查找)逻辑的可重用性更强了。其他的客户端，例如收款机，也可以调用同样的服务(service)来作为一个店员给客户结帐。相反，在情景 1 中的定价查找服务是不可重用的因为信息内嵌在 HTML 页中了。

总而言之，在情景 2 的模型中，在 Web 服务器通过回应 HTML 页面来处理 HTTP 请求(request)，而应用程序服务器则是通过处理定价和有效性(availability)请求(request)来提供应用程序逻辑的。

### 警告(Caveats)

现在，XML Web Services 已经使应用程序服务器和 Web 服务器的界线混淆了。通过传送一个 XML 有效载荷(payload)给服务器，Web 服务器现在可以处理数据和响应(response)的能力与以前的应用程序服务器同样多了。

另外，现在大多数应用程序服务器也包含了 Web 服务器，这就意味着可以把 Web 服务器当作是应用程序服务器的一个子集(subset)。虽然应用程序服务器包含了 Web 服务器的功能，但是开发者很少把应用程序服务器部署(deploy)成这种功能(capacity)(译者注:这种功能是指既有应用程序服务器的功能又有 Web 服务器的功能)。相反，如果需要，他们通常会把 Web 服务器独立配置，和应用程序服务器一前一后。这种功能的分离有助于提高性能(简单的 Web 请求(request)就不会影响应用程序服务器了)，分开配置(专门的 Web 服务器，集群(clustering)等等)，而且给最佳产品的选取留有余地。

### 代理服务器

- Squid cache

### 游戏服务器

### 其他

- Windows 互联网名称服务 WINS

> WEB 服务器、应用程序服务器、HTTP 服务器有何区别？IIS、Apache、Tomcat、Weblogic、WebSphere 都各属于哪种服务器。

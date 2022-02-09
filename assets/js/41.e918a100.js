(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{620:function(_,v,t){_.exports=t.p+"assets/img/c5df0592cc8aef91ba961f7fab5a4a0b.c5df0592.png"},621:function(_,v,t){_.exports=t.p+"assets/img/3e94fbd78ed043e88c443f6416f99dc1.3e94fbd7.png"},622:function(_,v,t){_.exports=t.p+"assets/img/4c6832cdce34133c9ed89237fb9d5059.4c6832cd.png"},623:function(_,v,t){_.exports=t.p+"assets/img/41318c867fda8a536d0e3db6f9987030.41318c86.png"},769:function(_,v,t){"use strict";t.r(v);var e=t(13),i=Object(e.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"_01-nginx-高性能的-web-服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-nginx-高性能的-web-服务器"}},[_._v("#")]),_._v(" 01 | Nginx：高性能的 Web 服务器")]),_._v(" "),e("p",[_._v("经过前面几大模块的学习，你已经完全掌握了 HTTP 的所有知识，那么接下来请收拾一下行囊，整理一下装备，跟我一起去探索 HTTP 之外的广阔天地。")]),_._v(" "),e("p",[_._v("现在的互联网非常发达，用户越来越多，网速越来越快，HTTPS 的安全加密、HTTP/2 的多路复用等特性都对 Web 服务器提出了非常高的要求。一个好的 Web 服务器必须要具备稳定、快速、易扩展、易维护等特性，才能够让网站立于不败之地。")]),_._v(" "),e("p",[_._v("那么，在搭建网站的时候，应该选择什么样的服务器软件呢？")]),_._v(" "),e("p",[_._v("在开头的几讲里我也提到过，Web 服务器就那么几款，目前市面上主流的只有两个：Apache 和 Nginx，两者合计占据了近 90% 的市场份额。")]),_._v(" "),e("p",[_._v("今天我要说的就是其中的 Nginx，它是 Web 服务器的“后起之秀”，虽然比 Apache 小了 10 岁，但增长速度十分迅猛，已经达到了与 Apache 平起平坐的地位，而在 Top Million 网站中更是超过了 Apache，拥有超过 50% 的用户（"),e("a",{attrs:{href:"https://w3techs.com/technologies/cross/web_server/ranking",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考数据"),e("OutboundLink")],1),_._v("）。")]),_._v(" "),e("p",[e("img",{attrs:{src:t(620),alt:"img"}})]),_._v(" "),e("p",[_._v("在这里必须要说一下 Nginx 的正确发音，它应该读成 "),e("code",[_._v("Engine X")]),_._v(" ，但我个人感觉 X 念起来太拗口，还是比较倾向于读做 "),e("code",[_._v("Engine ks")]),_._v(" ，这也与 UNIX、Linux 的发音一致。")]),_._v(" "),e("p",[_._v("作为一个 Web 服务器，Nginx 的功能非常完善，完美支持 HTTP/1、HTTPS 和 HTTP/2，而且还在不断进步。当前的主线版本已经发展到了 1.17，正在进行 HTTP/3 的研发，或许一年之后就能在 Nginx 上跑 HTTP/3 了。")]),_._v(" "),e("p",[_._v("Nginx 也是我个人的主要研究领域，我也写过相关的书，按理来说今天的课程应该是“手拿把攥”，但真正动笔的时候还是有些犹豫的：很多要点都已经在书里写过了，这次的专栏如果再重复相同的内容就不免有“骗稿费”的嫌疑，应该有些“不一样的东西”。")]),_._v(" "),e("p",[_._v("所以我决定抛开书本，换个角度，结合 HTTP 协议来讲 Nginx，带你窥视一下 HTTP 处理的内幕，看看 Web 服务器的工作原理。")]),_._v(" "),e("h2",{attrs:{id:"进程池"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程池"}},[_._v("#")]),_._v(" 进程池")]),_._v(" "),e("p",[_._v("你也许听说过，Nginx 是个轻量级的 Web 服务器，那么这个所谓的 "),e("strong",[_._v("轻量级")]),_._v(" 是什么意思呢？")]),_._v(" "),e("p",[_._v("轻量级是相对于重量级而言的。重量级就是指服务器进程很重，占用很多资源，当处理 HTTP 请求时会消耗大量的 CPU 和内存，受到这些资源的限制很难提高性能。")]),_._v(" "),e("p",[_._v("而 Nginx 作为轻量级的服务器，它的 CPU、内存占用都非常少，同样的资源配置下就能够为更多的用户提供服务，其奥秘在于它独特的工作模式。")]),_._v(" "),e("p",[e("img",{attrs:{src:t(621),alt:"img"}})]),_._v(" "),e("p",[_._v("在 Nginx 之前，Web 服务器的工作模式大多是 "),e("code",[_._v("Per-Process")]),_._v(" 或者 "),e("code",[_._v("Per-Thread")]),_._v(" ，对每一个请求使用单独的进程或者线程处理。这就存在创建进程或线程的成本，还会有进程、线程 "),e("strong",[_._v("上下文切换")]),_._v(" 的额外开销。如果请求数量很多，CPU 就会在多个进程、线程之间切换时疲于奔命，平白地浪费了计算时间。")]),_._v(" "),e("p",[_._v("Nginx 则完全不同，一反惯例地没有使用多线程，而是使用了 "),e("strong",[_._v("进程池 + 单线程")]),_._v(" 的工作模式。")]),_._v(" "),e("p",[_._v("Nginx 在启动的时候会预先创建好固定数量的 worker 进程，在之后的运行过程中不会再 fork 出新进程，这就是进程池，而且可以自动把进程 「绑定」到独立的 CPU 上，这样就完全消除了进程创建和切换的成本，能够充分利用多核 CPU 的计算能力。")]),_._v(" "),e("p",[_._v("在进程池之上，还有一个 master 进程，专门用来管理进程池。它的作用有点像是 supervisor（一个用 Python 编写的进程管理工具），用来监控进程，自动恢复发生异常的 worker，保持进程池的稳定和服务能力。")]),_._v(" "),e("p",[_._v("不过 master 进程完全是 Nginx 自行用 C 语言实现的，这就摆脱了外部的依赖，简化了 Nginx 的部署和配置。")]),_._v(" "),e("h2",{attrs:{id:"i-o-多路复用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-o-多路复用"}},[_._v("#")]),_._v(" I/O 多路复用")]),_._v(" "),e("p",[_._v("如果你用 Java、C 等语言写过程序，一定很熟悉 "),e("strong",[_._v("多线程")]),_._v(" 的概念，使用多线程能够很容易实现并发处理。")]),_._v(" "),e("p",[_._v("但多线程也有一些缺点，除了刚才说到的 「上下文切换」成本，还有编程模型复杂、数据竞争、同步等问题，写出正确、快速的多线程程序并不是一件容易的事情。")]),_._v(" "),e("p",[_._v("所以 Nginx 就选择了单线程的方式，带来的好处就是开发简单，没有互斥锁的成本，减少系统消耗。")]),_._v(" "),e("p",[_._v("那么，疑问也就产生了：为什么单线程的 Nginx，处理能力却能够超越其他多线程的服务器呢？")]),_._v(" "),e("p",[_._v("这要归功于 Nginx 利用了 Linux 内核里的一件神兵利器，"),e("strong",[_._v("I/O 多路复用接口")]),_._v(" ，大名鼎鼎的 epoll。")]),_._v(" "),e("p",[_._v("多路复用这个词我们已经在之前的 HTTP/2、HTTP/3 里遇到过好几次，如果你理解了那里的多路复用，那么面对 Nginx 的 epoll 多路复用也就好办了。")]),_._v(" "),e("p",[_._v("Web 服务器从根本上来说是 "),e("code",[_._v("I/O 密集型")]),_._v(" 而不是 "),e("code",[_._v("CPU 密集型")]),_._v(" ，处理能力的关键在于网络收发而不是 CPU 计算（这里暂时不考虑 HTTPS 的加解密），而网络 I/O 会因为各式各样的原因不得不等待，比如数据还没到达、对端没有响应、缓冲区满发不出去等等。")]),_._v(" "),e("p",[_._v("这种情形就有点像是 HTTP 里的队头阻塞。对于一般的单线程来说 CPU 就会停下来，造成浪费。而多线程的解决思路有点类似并发连接，虽然有的线程可能阻塞，但由于多个线程并行，总体上看阻塞的情况就不会太严重了。")]),_._v(" "),e("p",[_._v("Nginx 里使用的 epoll，就好像是 HTTP/2 里的多路复用技术，它把多个 HTTP 请求处理打散成碎片，都复用到一个单线程里，不按照先来后到的顺序处理，而是只当连接上真正可读、可写的时候才处理，如果可能发生阻塞就立刻切换出去，处理其他的请求。")]),_._v(" "),e("p",[_._v("通过这种方式，Nginx 就完全消除了 I/O 阻塞，把 CPU 利用得满满当当，又因为网络收发并不会消耗太多 CPU 计算能力，也不需要切换进程、线程，所以整体的 CPU 负载是相当低的。")]),_._v(" "),e("p",[_._v("这里我画了一张 Nginx I/O 多路复用 的示意图，你可以看到，它的形式与 HTTP/2 的流非常相似，每个请求处理单独来看是分散、阻塞的，但因为都复用到了一个线程里，所以资源的利用率非常高。")]),_._v(" "),e("p",[e("img",{attrs:{src:t(622),alt:"img"}})]),_._v(" "),e("p",[_._v("epoll 还有一个特点，大量的连接管理工作都是在操作系统内核里做的，这就减轻了应用程序的负担，所以 Nginx 可以为每个连接只分配很小的内存维护状态，即使有几万、几十万的并发连接也只会消耗几百 M 内存，而其他的 Web 服务器这个时候早就 Memory not enough 了。")]),_._v(" "),e("h2",{attrs:{id:"多阶段处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多阶段处理"}},[_._v("#")]),_._v(" 多阶段处理")]),_._v(" "),e("p",[_._v("有了「进程池和」、「I/O 多路复用」，Nginx 是如何处理 HTTP 请求的呢？")]),_._v(" "),e("p",[_._v("Nginx 在内部也采用的是 "),e("strong",[_._v("化整为零")]),_._v(" 的思路，把整个 Web 服务器分解成了多个功能模块，就好像是乐高积木，可以在配置文件里任意拼接搭建，从而实现了高度的灵活性和扩展性。")]),_._v(" "),e("p",[_._v("Nginx 的 HTTP 处理有四大类模块：")]),_._v(" "),e("ol",[e("li",[_._v("handler 模块：直接处理 HTTP 请求；")]),_._v(" "),e("li",[_._v("filter 模块：不直接处理请求，而是加工过滤响应报文；")]),_._v(" "),e("li",[_._v("upstream 模块：实现反向代理功能，转发请求到其他服务器；")]),_._v(" "),e("li",[_._v("balance 模块：实现反向代理时的负载均衡算法。")])]),_._v(" "),e("p",[_._v("因为 upstream 模块和 balance 模块实现的是代理功能，Nginx 作为中间人，运行机制比较复杂，所以我今天只讲 handler 模块和 filter 模块。")]),_._v(" "),e("p",[_._v("不知道你有没有了解过设计模式这方面的知识，其中有一个非常有用的模式叫做 "),e("strong",[_._v("职责链")]),_._v(" 。它就好像是工厂里的流水线，原料从一头流入，线上有许多工人会进行各种加工处理，最后从另一头出来的就是完整的产品。")]),_._v(" "),e("p",[_._v("Nginx 里的 handler 模块和 filter 模块就是按照职责链模式设计和组织的，HTTP 请求报文就是原材料，各种模块就是工厂里的工人，走完模块构成的流水线，出来的就是处理完成的响应报文。")]),_._v(" "),e("p",[_._v("下面的这张图显示了 Nginx 的流水线，在 Nginx 里的术语叫 "),e("strong",[_._v("阶段式处理（Phases）")]),_._v("，一共有 11 个阶段，每个阶段里又有许多各司其职的模块。")]),_._v(" "),e("p",[e("img",{attrs:{src:t(623),alt:"img"}})]),_._v(" "),e("p",[_._v("我简单列几个与我们的课程相关的模块吧：")]),_._v(" "),e("ul",[e("li",[_._v("charset 模块实现了字符集编码转换；（"),e("RouterLink",{attrs:{to:"/http-protocol/04/01.html"}},[_._v("海纳百川：HTTP的实体数据")]),_._v("）")],1),_._v(" "),e("li",[_._v("chunked 模块实现了响应数据的分块传输；（"),e("RouterLink",{attrs:{to:"/http-protocol/04/02.html"}},[_._v("HTTP 传输大文件的方法")]),_._v("）")],1),_._v(" "),e("li",[_._v("range 模块实现了范围请求，只返回数据的一部分；（"),e("RouterLink",{attrs:{to:"/http-protocol/04/02.html"}},[_._v("HTTP 传输大文件的方法")]),_._v("）")],1),_._v(" "),e("li",[_._v("rewrite 模块实现了重定向和跳转，还可以使用内置变量自定义跳转的 URI；（"),e("RouterLink",{attrs:{to:"/http-protocol/04/04.html"}},[_._v("HTTP 的重定向和跳转")]),_._v("）")],1),_._v(" "),e("li",[_._v("not_modified 模块检查头字段 "),e("code",[_._v("if-Modified-Since")]),_._v(" 和 "),e("code",[_._v("If-None-Match")]),_._v(" ，处理条件请求；（"),e("RouterLink",{attrs:{to:"/http-protocol/04/06.html"}},[_._v("HTTP 的缓存控制")]),_._v("）")],1),_._v(" "),e("li",[_._v("realip 模块处理 "),e("code",[_._v("X-Real-IP")]),_._v("、"),e("code",[_._v("X-Forwarded-For")]),_._v(" 等字段，获取客户端的真实 IP 地址；（"),e("RouterLink",{attrs:{to:"/http-protocol/04/07.html"}},[_._v("HTTP 的代理服务")]),_._v("）")],1),_._v(" "),e("li",[_._v("ssl 模块实现了 SSL/TLS 协议支持，读取磁盘上的证书和私钥，实现 TLS 握手和 SNI、ALPN 等扩展功能；（"),e("RouterLink",{attrs:{to:"/http-protocol/05/"}},[_._v("安全篇")]),_._v("）")],1),_._v(" "),e("li",[_._v("http_v2 模块实现了完整的 HTTP/2 协议。（"),e("RouterLink",{attrs:{to:"/http-protocol/06/"}},[_._v("飞翔篇")]),_._v("）")],1)]),_._v(" "),e("p",[_._v("在这张图里，你还可以看到 limit_conn、limit_req、access、log 等其他模块，它们实现的是限流限速、访问控制、日志等功能，不在 HTTP 协议规定之内，但对于运行在现实世界的 Web 服务器却是必备的。")]),_._v(" "),e("p",[_._v("如果你有 C 语言基础，感兴趣的话可以下载 Nginx 的源码，在代码级别仔细看看 HTTP 的处理过程。")]),_._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),e("ol",[e("li",[_._v("Nginx 是一个高性能的 Web 服务器，它非常的轻量级，消耗的 CPU、内存很少；")]),_._v(" "),e("li",[_._v("Nginx 采用 "),e("code",[_._v("master/workers")]),_._v(" 进程池架构，不使用多线程，消除了进程、线程切换的成本；")]),_._v(" "),e("li",[_._v("Nginx 基于 epoll 实现了 "),e("code",[_._v("I/O 多路复用")]),_._v(" ，不会阻塞，所以性能很高；")]),_._v(" "),e("li",[_._v("Nginx 使用了职责链模式，多个模块分工合作，自由组合，以流水线的方式处理 HTTP 请求。")])]),_._v(" "),e("h2",{attrs:{id:"课下作业"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#课下作业"}},[_._v("#")]),_._v(" 课下作业")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("你是怎么理解进程、线程上下文切换时的成本的，为什么 Nginx 要尽量避免？")]),_._v(" "),e("p",[_._v("一个线程的时间片没用完，系统调用就被系统调度切换出去，浪费了剩余的时间片，nginx 通过 epoll 和注册回调，和非阻塞 io 自己在用户态主动切换上下文，充分利用了系统分配给进程或者线程的时间片，所以对系统资源利用很充分")])]),_._v(" "),e("li",[e("p",[_._v("试着自己描述一下 Nginx 用进程、epoll、模块流水线处理 HTTP 请求的过程。")])])]),_._v(" "),e("h2",{attrs:{id:"拓展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[_._v("#")]),_._v(" 拓展阅读")]),_._v(" "),e("ul",[e("li",[_._v("也有不少的人把 Nginx 读成 "),e("code",[_._v("NGks")]),_._v("，这就错得太多了。")]),_._v(" "),e("li",[_._v("Nginx 自 1.7.11 开始引入了「多线程」，但只是作为辅助手段，卸载阳塞的磁盘 I/O 操作，主\n要的 HTTP 请求处理使用的还是单线程里的 epoll")]),_._v(" "),e("li",[_._v("如何让Web服务器能够高效地处理 10K 以上的并发请求( Concurrent 10K )，这就是著名的 C10K 问题，当然它早已经被 epo/kqueue 等解决了，现在的新问题是 C10M")]),_._v(" "),e("li",[_._v("Nginx 的 PRECONTENT 阶段在 1.13.3 之前叫 TRY FILES，仅供 Nginx 内部使用，用户不可介入")]),_._v(" "),e("li",[_._v("正文里的流水线图没有画出 filter  模块所在的位置，它其实是在 CONTENT 阶段的末尾，专门过滤响应数据")])])])}),[],!1,null,null,null);v.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{597:function(s,t,a){s.exports=a.p+"assets/img/8fe2cbd57410299a1a36d7eb105ea896.8fe2cbd5.png"},598:function(s,t,a){s.exports=a.p+"assets/img/d8fd32a4d044f2078b3a260e4478c5bc.d8fd32a4.png"},599:function(s,t,a){s.exports=a.p+"assets/img/83c9f0ecad361ba8ef8f3b73d6872f1a.83c9f0ec.png"},600:function(s,t,a){s.exports=a.p+"assets/img/fdf1a6916c3ac22b6fb7628de3d7ddd1.fdf1a691.png"},764:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_01-时代之风-http-2-特性概览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01-时代之风-http-2-特性概览"}},[s._v("#")]),s._v(" 01 | 时代之风：HTTP/2 特性概览")]),s._v(" "),n("p",[s._v("在 "),n("RouterLink",{attrs:{to:"/http-protocol/03/07.html"}},[s._v("HTTP有哪些优点？又有哪些缺点？")]),s._v(" 中，我们看到 HTTP 有两个主要的缺点："),n("strong",[s._v("安全不足和性能不高")])],1),s._v(" "),n("p",[s._v("刚结束的安全篇里的 HTTPS，通过引入 SSL/TLS 在安全上达到了「极致」，但在性能提升方面却是乏善可陈，只优化了握手加密的环节，对于整体的数据传输没有提出更好的改进方案，还只能依赖于「长连接」这种「落后」的技术")]),s._v(" "),n("p",[s._v("所以，在 HTTPS 逐渐成熟之后，HTTP 就向着性能方面开始发力，走出了另一条进化的道路。")]),s._v(" "),n("p",[s._v("在 HTTP 历史中你也看到了，「秦失其鹿，天下共逐之」，Google 率先发明了 SPDY 协议，并应用于自家的浏览器 Chrome，打响了 HTTP 性能优化的「第一枪」")]),s._v(" "),n("p",[s._v("随后互联网标准化组织 IETF 以 SPDY 为基础，综合其他多方的意见，终于推出了 HTTP/1 的继任者，也就是今天的主角 "),n("code",[s._v("HTTP/2")]),s._v(" ，在性能方面有了一个大的飞跃。")]),s._v(" "),n("h2",{attrs:{id:"为什么不是-http-2-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是-http-2-0"}},[s._v("#")]),s._v(" 为什么不是 HTTP/2.0")]),s._v(" "),n("p",[s._v("你一定很想知道，为什么 HTTP/2 不像之前的 "),n("code",[s._v("1.0")]),s._v("、"),n("code",[s._v("1.1")]),s._v(" 那样叫 "),n("code",[s._v("2.0")]),s._v(" 呢？")]),s._v(" "),n("p",[s._v("这个也是很多初次接触 HTTP/2 的人问的最多的一个问题，对此 HTTP/2 工作组特别给出了解释。")]),s._v(" "),n("p",[s._v("他们认为以前的 "),n("code",[s._v("1.0")]),s._v("、"),n("code",[s._v("1.1")]),s._v(" 造成了很多的混乱和误解，让人在实际的使用中难以区分差异，所以就决定 HTTP 协议不再使用小版本号（minor version），只使用大版本号（major version），从今往后 HTTP 协议不会出现 HTTP/2.0、2.1，只会有 "),n("code",[s._v("HTTP/2")]),s._v("、"),n("code",[s._v("HTTP/3")]),s._v(" ……")]),s._v(" "),n("p",[s._v("这样就可以明确无误地辨别出协议版本的「跃进程度」，让协议在一段较长的时期内保持稳定，每当发布新版本的 HTTP 协议都会有本质的不同，绝不会有零敲碎打的小改良。")]),s._v(" "),n("h2",{attrs:{id:"兼容-http-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#兼容-http-1"}},[s._v("#")]),s._v(" 兼容 HTTP/1")]),s._v(" "),n("p",[s._v("由于 HTTPS 已经在安全方面做的非常好了，所以 HTTP/2 的唯一目标就是改进性能。")]),s._v(" "),n("p",[s._v("但它不仅背负着众多的期待，同时还背负着 HTTP/1 庞大的历史包袱，所以协议的修改必须小心谨慎，兼容性是首要考虑的目标，否则就会破坏互联网上无数现有的资产，这方面 TLS 已经有了先例（为了兼容 TLS1.2 不得不进行伪装）。")]),s._v(" "),n("p",[s._v("那么，HTTP/2 是怎么做的呢？")]),s._v(" "),n("p",[s._v("因为必须要保持功能上的兼容，所以 HTTP/2 把 HTTP 分解成了 "),n("strong",[s._v("语义")]),s._v(" 和 "),n("strong",[s._v("语法")]),s._v(" 两个部分，语义层不做改动，与 HTTP/1 完全一致（即 RFC7231）。比如请求方法、URI、状态码、头字段等概念都保留不变，这样就消除了再学习的成本，基于 HTTP 的上层应用也不需要做任何修改，可以无缝转换到 HTTP/2。")]),s._v(" "),n("p",[s._v("特别要说的是，与 HTTPS 不同，HTTP/2 没有在 URI 里引入新的协议名，仍然用 "),n("code",[s._v("http")]),s._v(" 表示明文协议，用 "),n("code",[s._v("https")]),s._v(" 表示加密协议。")]),s._v(" "),n("p",[s._v("这是一个非常了不起的决定，可以让浏览器或者服务器去自动升级或降级协议，免去了选择的麻烦，让用户在上网的时候都意识不到协议的切换，实现平滑过渡。")]),s._v(" "),n("p",[s._v("在语义保持稳定之后，HTTP/2 在语法层做了天翻地覆的改造，"),n("strong",[s._v("完全变更了 HTTP 报文的传输格式")])]),s._v(" "),n("h2",{attrs:{id:"头部压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#头部压缩"}},[s._v("#")]),s._v(" 头部压缩")]),s._v(" "),n("p",[s._v("首先，HTTP/2 对报文的头部做了一个大手术。")]),s._v(" "),n("p",[s._v("通过进阶篇的学习你应该知道，HTTP/1 里可以用头字段 "),n("code",[s._v("Content-Encoding")]),s._v(" 指定 Body 的编码方式，比如用 gzip 压缩来节约带宽，但报文的另一个组成部分—— "),n("strong",[s._v("Header 却被无视了，没有针对它的优化手段")]),s._v(" 。")]),s._v(" "),n("p",[s._v("由于报文 Header 一般会携带 "),n("code",[s._v("User Agent")]),s._v("、"),n("code",[s._v("Cookie")]),s._v("、"),n("code",[s._v("Accept")]),s._v("、"),n("code",[s._v("Server")]),s._v(" 等许多固定的头字段，多达几百字节甚至上千字节，但 Body 却经常只有几十字节（比如 GET 请求、204/301/304 响应），成了不折不扣的大头儿子。更要命的是，成千上万的请求响应报文里有很多字段值都是重复的，非常浪费，长尾效应导致大量带宽消耗在了这些冗余度极高的数据上。")]),s._v(" "),n("p",[s._v("所以，HTTP/2 把 "),n("strong",[s._v("头部压缩")]),s._v(" 作为性能改进的一个重点，优化的方式你也肯定能想到，还是 "),n("strong",[s._v("压缩")]),s._v(" 。")]),s._v(" "),n("p",[s._v("不过 HTTP/2 并没有使用传统的压缩算法，而是开发了专门的 "),n("strong",[s._v("HPACK")]),s._v(" 算法，在客户端和服务器两端建立「字典」，用索引号表示重复的字符串，还釆用哈夫曼编码来压缩整数和字符串，可以达到 50%~90% 的高压缩率。")]),s._v(" "),n("h2",{attrs:{id:"二进制格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二进制格式"}},[s._v("#")]),s._v(" 二进制格式")]),s._v(" "),n("p",[s._v("你可能已经很习惯于 HTTP/1 里纯文本形式的报文了，它的优点是 "),n("strong",[s._v("一目了然")]),s._v(" ，用最简单的工具就可以开发调试，非常方便。")]),s._v(" "),n("p",[s._v("但 HTTP/2 在这方面没有妥协，决定改变延续了十多年的现状，不再使用肉眼可见的 ASCII 码，而是向下层的 TCP/IP 协议靠拢，全面采用二进制格式。")]),s._v(" "),n("p",[s._v("这样虽然对人不友好，但却大大方便了计算机的解析。原来使用纯文本的时候容易出现多义性，比如大小写、空白字符、回车换行、多字少字等等，程序在处理时必须用复杂的状态机，效率低，还麻烦。")]),s._v(" "),n("p",[s._v("而二进制里只有 0 和 1 ，可以严格规定字段大小、顺序、标志位等格式，对就是对，错就是错，解析起来没有歧义，实现简单，而且体积小、速度快，做到内部提效。")]),s._v(" "),n("p",[s._v("以二进制格式为基础，HTTP/2 就开始了大刀阔斧的改革。")]),s._v(" "),n("p",[s._v("它把 TCP 协议的部分特性挪到了应用层，把原来的 "),n("code",[s._v("Header+Body")]),s._v(" 的消息打散为数个小片的 "),n("strong",[s._v("二进制「帧」")]),s._v("（Frame），用 "),n("code",[s._v("HEADERS")]),s._v(" 帧存放头数据、"),n("code",[s._v("DATA")]),s._v(" 帧存放实体数据。")]),s._v(" "),n("p",[s._v("这种做法有点像是 "),n("code",[s._v("Chunked")]),s._v(" 分块编码的方式（参见 "),n("RouterLink",{attrs:{to:"/http-protocol/04/01.html"}},[s._v("把大象装进冰箱：HTTP 传输大文件的方法")]),s._v("），也是化整为零的思路，但 HTTP/2 数据分帧后 "),n("code",[s._v("Header+Body")]),s._v(" 的报文结构就完全消失了，协议看到的只是一个个的碎片。")],1),s._v(" "),n("p",[n("img",{attrs:{src:a(597),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"虚拟的「流」"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#虚拟的「流」"}},[s._v("#")]),s._v(" 虚拟的「流」")]),s._v(" "),n("p",[s._v("消息的「碎片」到达目的地后应该怎么组装起来呢？")]),s._v(" "),n("p",[s._v("HTTP/2 为此定义了一个 "),n("strong",[s._v("流")]),s._v("（Stream）的概念，"),n("strong",[s._v("它是二进制帧的双向传输序列")]),s._v(" ，同一个消息往返的帧会分配一个唯一的流 ID。你可以想象把它成是一个虚拟的「数据流」，在里面流动的是一串有先后顺序的数据帧，这些数据帧按照次序组装起来就是 HTTP/1 里的请求报文和响应报文。")]),s._v(" "),n("p",[s._v("因为流是虚拟的，实际上并不存在，所以 HTTP/2 就可以在一个 TCP 连接上用 "),n("strong",[s._v("流")]),s._v(" 同时发送多个「碎片化」的消息，这就是常说的 "),n("strong",[s._v("多路复用")]),s._v("（ Multiplexing）——多个往返通信都复用一个连接来处理。")]),s._v(" "),n("p",[s._v("在流的层面上看，消息是一些有序的帧序列，而在连接的层面上看，消息却是乱序收发的帧。多个请求 / 响应之间没有了顺序关系，不需要排队等待，也就不会再出现队头阻塞问题，降低了延迟，大幅度提高了连接的利用率。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(598),alt:"img"}})]),s._v(" "),n("p",[s._v("为了更好地利用连接，加大吞吐量，HTTP/2 还添加了一些控制帧来管理虚拟的流，实现了优先级和流量控制，这些特性也和 TCP 协议非常相似。")]),s._v(" "),n("p",[s._v("HTTP/2 还在一定程度上改变了传统的请求 - 应答工作模式，服务器不再是完全被动地响应请求，也可以新建流主动向客户端发送消息。比如，在浏览器刚请求 HTML 的时候就提前把可能会用到的 JS、CSS 文件发给客户端，减少等待的延迟，这被称为 "),n("strong",[s._v("服务器推送")]),s._v("（Server Push，也叫 Cache Push）。")]),s._v(" "),n("h2",{attrs:{id:"强化安全"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#强化安全"}},[s._v("#")]),s._v(" 强化安全")]),s._v(" "),n("p",[s._v("出于兼容的考虑，HTTP/2 延续了 HTTP/1 的明文特点，可以像以前一样使用明文传输数据，不强制使用加密通信，不过格式还是二进制，只是不需要解密。")]),s._v(" "),n("p",[s._v("但由于 HTTPS 已经是大势所趋，而且主流的浏览器 Chrome、Firefox 等都公开宣布只支持加密的 HTTP/2，所以事实上的 HTTP/2 是加密的。也就是说，互联网上通常所能见到的 HTTP/2 都是使用 "),n("code",[s._v("https")]),s._v(" 协议名，跑在 TLS 上面。")]),s._v(" "),n("p",[s._v("为了区分加密和明文这两个不同的版本，HTTP/2 协议定义了两个字符串标识符："),n("code",[s._v("h2")]),s._v(" 表示加密的 HTTP/2，"),n("code",[s._v("h2c")]),s._v(" 表示明文的 HTTP/2，多出的那个字母 "),n("code",[s._v("c")]),s._v(" 的意思是 "),n("code",[s._v("clear text")]),s._v(" 。")]),s._v(" "),n("p",[s._v("在 HTTP/2 标准制定的时候（2015 年）已经发现了很多 SSL/TLS 的弱点，而新的 TLS1.3 还未发布，所以加密版本的 HTTP/2 在安全方面做了强化，要求下层的通信协议必须是 TLS1.2 以上，还要支持前向安全和 SNI，并且把几百个弱密码套件列入了黑名单，比如 DES、RC4、CBC、SHA-1 都不能在 HTTP/2 里使用，相当于底层用的是 "),n("code",[s._v("TLS1.25")]),s._v(" 。")]),s._v(" "),n("h2",{attrs:{id:"协议栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#协议栈"}},[s._v("#")]),s._v(" 协议栈")]),s._v(" "),n("p",[s._v("下面的这张图对比了 HTTP/1、HTTPS 和 HTTP/2 的协议栈，你可以清晰地看到，HTTP/2 是建立在 "),n("code",[s._v("HPack")]),s._v("、"),n("code",[s._v("Stream")]),s._v("、"),n("code",[s._v("TLS1.2")]),s._v(" 基础之上的，比 HTTP/1、HTTPS 复杂了一些。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(599),alt:"img"}})]),s._v(" "),n("p",[s._v("虽然 HTTP/2 的底层实现很复杂，但它的语义还是简单的 HTTP/1，之前学习的知识不会过时，仍然能够用得上。")]),s._v(" "),n("p",[s._v("我们的实验环境在新的域名 "),n("code",[s._v("www.metroid.net")]),s._v(" 上启用了 HTTP/2 协议，你可以把之前进阶篇、安全篇的测试用例都走一遍，再用 Wireshark 抓一下包，实际看看 HTTP/2 的效果和对老协议的兼容性（例如 "),n("code",[s._v("http://www.metroid.net/11-1")]),s._v(" ）。")]),s._v(" "),n("p",[s._v("来看下 http2 是如何配置的")]),s._v(" "),n("div",{staticClass:"language-lua line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-lua"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Copyright")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" by chrono\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" http www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("metroid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" redirect to https\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("server")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("metroid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("rewrite "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("$host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v("$request_uri permanent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("$host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v("$request_uri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("    rewrite "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("$host$"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" permanent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" http2 www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("metroid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("server")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v(" ssl http2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" 可以看到，只是在这里使用两天 http2 其他的还是一样\n\n    server_name  www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("metroid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("server_name  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    access_log  logs"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("http2_access"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n                main buffer"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k flush"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    allow "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    deny all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    default_type text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" rsa2048 cert\n    ssl_certificate             ssl"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("metroid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_certificate_key         ssl"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("metroid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" ecdsa p"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v(" cert\n    ssl_certificate             ssl"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("metroid_ecc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_certificate_key         ssl"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("metroid_ecc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    ssl_session_timeout         1m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    ssl_session_tickets         off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("ssl_session_ticket_key      ssl"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ticket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    ssl_prefer_server_ciphers   on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_protocols TLSv1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" TLSv1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    include http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("servers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("locations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("inc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" redirect to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$server_port !"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("$host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v("$request_uri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world by http2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index  index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br")])]),n("p",[s._v("在今天这节课专用的 URI "),n("code",[s._v("/30-1")]),s._v(" 里，你还可以看到服务器输出了 HTTP 的版本号 "),n("code",[s._v("2")]),s._v(" 和标识符 "),n("code",[s._v("h2")]),s._v(" ，表示这是加密的 HTTP/2，如果改用 "),n("code",[s._v("https://www.chrono.com/30-1")]),s._v(" 访问就会是 "),n("code",[s._v("1.1")]),s._v(" 和空。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("https://www.metroid.net:8443/30-1\nhttps://www.chrono.com/30-1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:a(600),alt:"img"}})]),s._v(" "),n("p",[s._v("你可能还会注意到 URI 里的一个小变化，端口使用的是 "),n("code",[s._v("8443")]),s._v(" 而不是  "),n("code",[s._v("443")]),s._v(" 。这是因为 443 端口已经被 "),n("code",[s._v("www.chrono.com")]),s._v(" 的 HTTPS 协议占用，Nginx 不允许在同一个端口上根据域名选择性开启 HTTP/2，所以就不得不改用了 "),n("code",[s._v("8443")]),s._v(" 。")]),s._v(" "),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),n("p",[s._v("今天我简略介绍了 HTTP/2 的一些重要特性，比较偏重理论，下一次我会用 Wireshark 抓包，具体讲解 HTTP/2 的头部压缩、二进制帧和流等特性。")]),s._v(" "),n("ol",[n("li",[s._v("HTTP 协议取消了小版本号，所以 HTTP/2 的正式名字不是 2.0；")]),s._v(" "),n("li",[s._v("HTTP/2 在语义上兼容 HTTP/1，保留了请求方法、URI 等传统概念；")]),s._v(" "),n("li",[s._v("HTTP/2 使用 "),n("code",[s._v("HPACK")]),s._v(" 算法压缩头部信息，消除冗余数据节约带宽；")]),s._v(" "),n("li",[s._v("HTTP/2 的消息不再是 "),n("code",[s._v("Header+Body")]),s._v(" 的形式，而是分散为多个二进制帧；")]),s._v(" "),n("li",[s._v("HTTP/2 使用虚拟的流传输消息，解决了困扰多年的队头阻塞问题，同时实现了多路复用，提高连接的利用率；")]),s._v(" "),n("li",[s._v("HTTP/2 也增强了安全性，要求至少是 TLS1.2，而且禁用了很多不安全的密码套件。")])]),s._v(" "),n("h2",{attrs:{id:"课下作业"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#课下作业"}},[s._v("#")]),s._v(" 课下作业")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("你觉得明文形式的 HTTP/2（h2c）有什么好处，应该如何使用呢？")]),s._v(" "),n("p",[s._v("笔者：感觉没有太大好处吧，header 和 body 都序列化成 byte 了")])]),s._v(" "),n("li",[n("p",[s._v("你觉得应该怎样理解 HTTP/2 里的流，为什么它是虚拟的？")]),s._v(" "),n("p",[s._v("笔者：header 和 body 都用 Frame 封装投递，同一个消息使用逻辑 id 来区分，按照 id 聚合出一个消息，那么就可以乱序发送，笔者想不明白的是，接收方如何接受呢？需要等待吗？乱序？")])]),s._v(" "),n("li",[n("p",[s._v("你能对比一下 HTTP/2 与 HTTP/1、HTTPS 的相同点和不同点吗？")]),s._v(" "),n("p",[s._v("在语义上是相同的，报文格式发生了变化、请求头也可以被压缩、服务器还可以主动推送")])])]),s._v(" "),n("h2",{attrs:{id:"拓展阅读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[s._v("#")]),s._v(" 拓展阅读")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("在早期还有一个 "),n("code",[s._v("HTTP-NG")]),s._v(" (HttpNext Generation) 项目，最终失败了")])]),s._v(" "),n("li",[n("p",[s._v("HTTP/2 的前身 SPDY 在压缩头部时使用了 gzip，但发现会受到 CRME 攻击，所以开发了专用的压缩算法 HPACK")])]),s._v(" "),n("li",[n("p",[s._v("HTTP/2 里的流可以实现 HTTP/1 里的管道（pipeline）功能，而且综合性能更好，所以「管道」在 HTTP/2 里就被废弃了")])]),s._v(" "),n("li",[n("p",[s._v("如果你写过 Linux 程序，用过 epol，就应该知道 epo 也是一种多路复用，不过它是 "),n("code",[s._v("I/O Multiplexing")])])]),s._v(" "),n("li",[n("p",[s._v("HTTP/2 要求必须实现的密码套件是 "),n("code",[s._v("TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256")]),s._v(" ，比 TLS12 默认的 "),n("code",[s._v("TLS_RSA_WITH_AES_128_CBC_SHA")]),s._v(" 的安全强度高了很多")])]),s._v(" "),n("li",[n("p",[s._v("实验环境的 "),n("code",[s._v("www.metroid.net")]),s._v(" 启用了 RSA 和 ECC 双证书，在浏览器里可以看到实际连接时用的会是 ECC 书。另外，这个域名还用到了重定向跳转技术，使用 301 跳转，把 "),n("code",[s._v("80/443")]),s._v(" 端口的请求重定向到 HTTP/2 的 8443")]),s._v(" "),n("div",{staticClass:"language-lua line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-lua"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("server")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v(" ssl http2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" redirect to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$server_port !"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("$host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v("$request_uri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
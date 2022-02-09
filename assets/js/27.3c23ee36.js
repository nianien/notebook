(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{633:function(e,v,_){e.exports=_.p+"assets/img/ee6685c7d3c673b95e46d582828eee28.ee6685c7.png"},634:function(e,v,_){e.exports=_.p+"assets/img/29d33e972dda5a27aa4773eea896a8c4.29d33e97.png"},635:function(e,v,_){e.exports=_.p+"assets/img/c91ee4815097f5f9059ab798bb841594.c91ee481.png"},636:function(e,v,_){e.exports=_.p+"assets/img/8f007bb0e403b6cc28493565f709c997.8f007bb0.png"},637:function(e,v,_){e.exports=_.p+"assets/img/84e9fa337f2b4c2c9f14760feb41c903.84e9fa33.png"},773:function(e,v,_){"use strict";_.r(v);var t=_(13),c=Object(t.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_05-websocket-沙盒里的-tcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_05-websocket-沙盒里的-tcp"}},[e._v("#")]),e._v(" 05 | WebSocket：沙盒里的 TCP")]),e._v(" "),t("p",[e._v("在之前讲 TCP/IP 协议栈的时候，我说过有 "),t("code",[e._v("TCP Socket")]),e._v(" ，它实际上是一种功能接口，通过这些接口就可以使用 TCP/IP 协议栈在传输层收发数据。")]),e._v(" "),t("p",[e._v("那么，你知道还有一种东西叫 "),t("code",[e._v("WebSocket")]),e._v(" 吗？")]),e._v(" "),t("p",[e._v("单从名字上看，Web 指的是 HTTP，Socket 是套接字调用，那么这两个连起来又是什么意思呢？")]),e._v(" "),t("p",[e._v("所谓望文生义，大概你也能猜出来，WebSocket 就是运行在 Web，也就是 HTTP 上的 Socket 通信规范，提供与 TCP Socket 类似的功能，使用它就可以像 TCP Socket 一样调用下层协议栈，任意地收发数据。")]),e._v(" "),t("p",[t("img",{attrs:{src:_(633),alt:"img"}})]),e._v(" "),t("p",[e._v("更准确地说，"),t("code",[e._v("WebSocket")]),e._v(" 是一种基于 TCP 的轻量级网络通信协议，在地位上是与 HTTP 平级的。")]),e._v(" "),t("h2",{attrs:{id:"为什么要有-websocket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-websocket"}},[e._v("#")]),e._v(" 为什么要有 WebSocket")]),e._v(" "),t("p",[e._v("不过，已经有了被广泛应用的 HTTP 协议，为什么要再出一个 WebSocket 呢？它有哪些好处呢？")]),e._v(" "),t("p",[e._v("其实 WebSocket 与 HTTP/2 一样，都是为了解决 HTTP 某方面的缺陷而诞生的。HTTP/2 针对的是“队头阻塞”，而 WebSocket 针对的是“请求 - 应答”通信模式。")]),e._v(" "),t("p",[e._v("那么，请求 - 应答有什么不好的地方呢？")]),e._v(" "),t("p",[e._v("请求 - 应答是一种 "),t("strong",[e._v("半双工")]),e._v(" 的通信模式，虽然可以双向收发数据，但同一时刻只能一个方向上有动作，传输效率低。更关键的一点，它是一种“被动”通信模式，服务器只能“被动”响应客户端的请求，无法主动向客户端发送数据。")]),e._v(" "),t("p",[e._v("虽然后来的 HTTP/2、HTTP/3 新增了 Stream、Server Push 等特性，但“请求 - 应答”依然是主要的工作方式。这就导致 HTTP 难以应用在动态页面、即时消息、网络游戏等要求 "),t("strong",[e._v("实时通信")]),e._v(" 的领域。")]),e._v(" "),t("p",[e._v("在 WebSocket 出现之前，在浏览器环境里用 JavaScript 开发实时 Web 应用很麻烦。因为浏览器是一个受限的沙盒，不能用 TCP，只有 HTTP 协议可用，所以就出现了很多变通的技术，"),t("strong",[e._v("轮询")]),e._v("（polling）就是比较常用的的一种。")]),e._v(" "),t("p",[e._v("简单地说，轮询就是不停地向服务器发送 HTTP 请求，问有没有数据，有数据的话服务器就用响应报文回应。如果轮询的频率比较高，那么就可以近似地实现“实时通信”的效果。")]),e._v(" "),t("p",[e._v("但轮询的缺点也很明显，反复发送无效查询请求耗费了大量的带宽和 CPU 资源，非常不经济。")]),e._v(" "),t("p",[e._v("所以，为了克服 HTTP 请求 - 应答模式的缺点，WebSocket 就应运而生了。它原来是 HTML5 的一部分，后来自立门户，形成了一个单独的标准，RFC 文档编号是 6455。")]),e._v(" "),t("h2",{attrs:{id:"websocket-的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket-的特点"}},[e._v("#")]),e._v(" WebSocket 的特点")]),e._v(" "),t("p",[e._v("WebSocket 是一个真正 "),t("strong",[e._v("全双工")]),e._v(" 的通信协议，与 TCP 一样，客户端和服务器都可以随时向对方发送数据，而不用像 HTTP 你拍一，我拍一那么客套。于是，服务器就可以变得更加主动了。一旦后台有新的数据，就可以立即推送”给客户端，不需要客户端轮询，实时通信的效率也就提高了。")]),e._v(" "),t("p",[e._v("WebSocket 采用了二进制帧结构，语法、语义与 HTTP 完全不兼容，但因为它的主要运行环境是浏览器，为了便于推广和应用，就不得不“搭便车”，在使用习惯上尽量向 HTTP 靠拢，这就是它名字里“Web”的含义。")]),e._v(" "),t("p",[e._v("服务发现方面，WebSocket 没有使用 TCP 的 "),t("code",[e._v("IP 地址 + 端口号")]),e._v(" ，而是延用了 HTTP 的 URI 格式，但开头的协议名不是 "),t("code",[e._v("http")]),e._v(" ，引入的是两个新的名字： "),t("strong",[e._v("ws")]),e._v(" 和 "),t("strong",[e._v("wss")]),e._v(" ，分别表示明文和加密的 WebSocket 协议。")]),e._v(" "),t("p",[e._v("WebSocket 的默认端口也选择了 80 和 443，因为现在互联网上的防火墙屏蔽了绝大多数的端口，只对 HTTP 的 80、443 端口放行，所以 WebSocket 就可以伪装成 HTTP 协议，比较容易地穿透防火墙，与服务器建立连接。具体是怎么伪装的，我稍后再讲。")]),e._v(" "),t("p",[e._v("下面我举几个 WebSocket 服务的例子，你看看，是不是和 HTTP 几乎一模一样：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ws://www.chrono.com\nws://www.chrono.com:8080/srv\nwss://www.chrono.com:445/im?user_id=xxx\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("要注意的一点是，WebSocket 的名字容易让人产生误解，虽然大多数情况下我们会在浏览器里调用 API 来使用 WebSocket，但它不是一个调用接口的集合，而是一个通信协议，所以我觉得把它理解成 "),t("strong",[e._v("TCP over Web")]),e._v(" 会更恰当一些。")]),e._v(" "),t("h2",{attrs:{id:"websocket-的帧结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket-的帧结构"}},[e._v("#")]),e._v(" WebSocket 的帧结构")]),e._v(" "),t("p",[e._v("刚才说了，WebSocket 用的也是二进制帧，有之前 HTTP/2、HTTP/3 的经验，相信你这次也能很快掌握 WebSocket 的报文结构。")]),e._v(" "),t("p",[e._v("不过 WebSocket 和 HTTP/2 的关注点不同，WebSocket 更 "),t("strong",[e._v("侧重于实时通信")]),e._v(" ，而 HTTP/2 更侧重于提高传输效率，所以两者的帧结构也有很大的区别。")]),e._v(" "),t("p",[e._v("WebSocket 虽然有帧，但却没有像 HTTP/2 那样定义流，也就不存在多路复用、优先级、等复杂的特性，而它自身就是全双工的，也就不需要服务器推送。所以综合起来，WebSocket 的帧学习起来会简单一些。")]),e._v(" "),t("p",[e._v("下图就是 WebSocket 的帧结构定义，长度不固定，最少 2 个字节，最多 14 字节，看着好像很复杂，实际非常简单。")]),e._v(" "),t("p",[t("img",{attrs:{src:_(634),alt:"img"}})]),e._v(" "),t("p",[e._v("开头的两个字节是必须的，也是最关键的。")]),e._v(" "),t("p",[e._v("第一个字节的第一位 "),t("strong",[e._v("FIN")]),e._v(" 是消息结束的标志位，相当于 HTTP/2 里的 "),t("code",[e._v("END_STREAM")]),e._v("，表示数据发送完毕。一个消息可以拆成多个帧，接收方看到 "),t("code",[e._v("FIN")]),e._v(" 后，就可以把前面的帧拼起来，组成完整的消息。")]),e._v(" "),t("p",[t("code",[e._v("FIN")]),e._v(" 后面的三个位是保留位，目前没有任何意义，但必须是 0。")]),e._v(" "),t("p",[e._v("第一个字节的后 4 位很重要，叫 "),t("strong",[e._v("Opcode")]),e._v(" ，操作码，其实就是帧类型，比如 1 表示帧内容是纯文本，2 表示帧内容是二进制数据，8 是关闭连接，9 和 10 分别是连接保活的 PING 和 PONG。")]),e._v(" "),t("p",[e._v("第二个字节第一位是掩码标志位 "),t("strong",[e._v("MASK")]),e._v(" ，表示帧内容是否使用异或操作（xor）做简单的加密。目前的 WebSocket 标准规定，客户端发送数据必须使用掩码，而服务器发送则必须不使用掩码。")]),e._v(" "),t("p",[e._v("第二个字节后 7 位是 "),t("strong",[e._v("Payload len")]),e._v(" ，表示帧内容的长度。它是另一种变长编码，最少 7 位，最多是 7+64 位，也就是额外增加 8 个字节，所以一个 WebSocket 帧最大是 2^64。")]),e._v(" "),t("p",[e._v("长度字段后面是 "),t("strong",[e._v("Masking-key")]),e._v(" ，掩码密钥，它是由上面的标志位 "),t("code",[e._v("MASK")]),e._v(" 决定的，如果使用掩码就是 4 个字节的随机数，否则就不存在。")]),e._v(" "),t("p",[e._v("这么分析下来，其实 WebSocket 的帧头就四个部分："),t("strong",[e._v("结束标志位 + 操作码 + 帧长度 + 掩码")]),e._v("，只是使用了变长编码的小花招，不像 HTTP/2 定长报文头那么简单明了。")]),e._v(" "),t("p",[e._v("我们的实验环境利用 OpenResty 的“lua-resty-websocket”库，实现了一个简单的 WebSocket 通信，你可以访问 URI "),t("code",[e._v("/38-1")]),e._v(" ，它会连接后端的 WebSocket 服务 "),t("code",[e._v("ws://127.0.0.1/38-0")]),e._v(" ，用 Wireshark 抓包就可以看到 WebSocket 的整个通信过程。")]),e._v(" "),t("p",[e._v("下面的截图是其中的一个文本帧，因为它是客户端发出的，所以需要掩码，报文头就在两个字节之外多了四个字节的 "),t("code",[e._v("Masking-key")]),e._v(" ，总共是 6 个字节。")]),e._v(" "),t("p",[t("img",{attrs:{src:_(635),alt:"img"}})]),e._v(" "),t("p",[e._v("而报文内容经过掩码，不是直接可见的明文，但掩码的安全强度几乎是零，用 "),t("code",[e._v("Masking-key")]),e._v(" 简单地异或一下就可以转换出明文。")]),e._v(" "),t("h2",{attrs:{id:"websocket-的握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket-的握手"}},[e._v("#")]),e._v(" WebSocket 的握手")]),e._v(" "),t("p",[e._v("和 TCP、TLS 一样，WebSocket 也要有一个握手过程，然后才能正式收发数据。")]),e._v(" "),t("p",[e._v("这里它还是搭上了 HTTP 的便车，利用了 HTTP 本身的 "),t("strong",[e._v("协议升级")]),e._v(" 特性，伪装成 HTTP，这样就能绕过浏览器沙盒、网络防火墙等等限制，这也是 WebSocket 与 HTTP 的另一个重要关联点。")]),e._v(" "),t("p",[e._v("WebSocket 的握手是一个标准的 HTTP GET 请求，但要带上两个协议升级的专用头字段：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Connection: Upgrade")]),e._v("，表示要求协议升级；")]),e._v(" "),t("li",[t("code",[e._v("Upgrade: websocket")]),e._v("，表示要升级成 WebSocket 协议。")])]),e._v(" "),t("p",[e._v("另外，为了防止普通的 HTTP 消息被意外识别成 WebSocket，握手消息还增加了两个额外的认证用头字段（所谓的挑战，Challenge）：")]),e._v(" "),t("ul",[t("li",[e._v("Sec-WebSocket-Key：一个 Base64 编码的 16 字节随机数，作为简单的认证密钥；")]),e._v(" "),t("li",[e._v("Sec-WebSocket-Version：协议的版本号，当前必须是 13。")])]),e._v(" "),t("p",[t("img",{attrs:{src:_(636),alt:"img"}})]),e._v(" "),t("p",[e._v("服务器收到 HTTP 请求报文，看到上面的四个字段，就知道这不是一个普通的 GET 请求，而是 WebSocket 的升级请求，于是就不走普通的 HTTP 处理流程，而是构造一个特殊的 "),t("code",[e._v("101 Switching Protocols")]),e._v(" 响应报文，通知客户端，接下来就不用 HTTP 了，全改用 WebSocket 协议通信。（有点像 TLS 的 "),t("code",[e._v("Change Cipher Spec")]),e._v(" ）")]),e._v(" "),t("p",[e._v("WebSocket 的握手响应报文也是有特殊格式的，要用字段 "),t("code",[e._v("Sec-WebSocket-Accept")]),e._v(" 验证客户端请求报文，同样也是为了防止误连接。")]),e._v(" "),t("p",[e._v("具体的做法是把请求头里 "),t("code",[e._v("Sec-WebSocket-Key")]),e._v(" 的值，加上一个专用的 UUID "),t("code",[e._v("258EAFA5-E914-47DA-95CA-C5AB0DC85B11")]),e._v(" ，再计算 SHA-1 摘要。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("encode_base64(\n  sha1( \n    Sec-WebSocket-Key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11' ))\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("客户端收到响应报文，就可以用同样的算法，比对值是否相等，如果相等，就说明返回的报文确实是刚才握手时连接的服务器，认证成功。")]),e._v(" "),t("p",[e._v("握手完成，后续传输的数据就不再是 HTTP 报文，而是 WebSocket 格式的二进制帧了。")]),e._v(" "),t("p",[t("img",{attrs:{src:_(637),alt:"img"}})]),e._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),t("p",[e._v("浏览器是一个沙盒环境，有很多的限制，不允许建立 TCP 连接收发数据，而有了 WebSocket，我们就可以在浏览器里与服务器直接建立 TCP 连接，获得更多的自由。")]),e._v(" "),t("p",[e._v("不过自由也是有代价的，WebSocket 虽然是在应用层，但使用方式却与 TCP Socket 差不多，过于原始，用户必须自己管理连接、缓存、状态，开发上比 HTTP 复杂的多，所以是否要在项目中引入 WebSocket 必须慎重考虑。")]),e._v(" "),t("ol",[t("li",[e._v("HTTP 的请求 - 应答模式不适合开发实时通信应用，效率低，难以实现动态页面，所以出现了 WebSocket；")]),e._v(" "),t("li",[e._v("WebSocket 是一个全双工的通信协议，相当于对 TCP 做了一层薄薄的包装，让它运行在浏览器环境里；")]),e._v(" "),t("li",[e._v("WebSocket 使用兼容 HTTP 的 URI 来发现服务，但定义了新的协议名 "),t("code",[e._v("ws")]),e._v(" 和 "),t("code",[e._v("wss")]),e._v(" ，端口号也沿用了 80 和 443；")]),e._v(" "),t("li",[e._v("WebSocket 使用二进制帧，结构比较简单，特殊的地方是有个“掩码”操作，客户端发数据必须掩码，服务器则不用；")]),e._v(" "),t("li",[e._v("WebSocket 利用 HTTP 协议实现连接握手，发送 GET 请求要求协议升级，握手过程中有个非常简单的认证机制，目的是防止误连接。")])]),e._v(" "),t("h2",{attrs:{id:"课下作业"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#课下作业"}},[e._v("#")]),e._v(" 课下作业")]),e._v(" "),t("ol",[t("li",[e._v("WebSocket 与 HTTP/2 有很多相似点，比如都可以从 HTTP/1 升级，都采用二进制帧结构，你能比较一下这两个协议吗？")]),e._v(" "),t("li",[e._v("试着自己解释一下 WebSocket 里的”Web“和”Socket“的含义。")]),e._v(" "),t("li",[e._v("结合自己的实际工作，你觉得 WebSocket 适合用在哪些场景里？")])]),e._v(" "),t("h2",{attrs:{id:"拓展阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[e._v("#")]),e._v(" 拓展阅读")]),e._v(" "),t("ul",[t("li",[e._v("WebSocket 标准诞生于 2011 年，比 HTTP/2 要大上四岁")]),e._v(" "),t("li",[e._v("最早 WebSocket 只能从 HTTP/11 升级，因为 HTTP/2 取消了 "),t("code",[e._v("Connection")]),e._v(" 头字段和协议升级机制，不能跑在 HTTP/2 上，所以就有草案提议扩展 HTTP/2 支持 WebSocket，后来形成了 RFC844")]),e._v(" "),t("li",[e._v("虽然 WebSocket 完全借用了 HTTP 的 URI 形式，但也有一点小小的不兼容：不支持 URI 后面的 "),t("code",[e._v("#")]),e._v(" 片段标识，"),t("code",[e._v("#")]),e._v(" 必须被编码为 "),t("code",[e._v("%23")])]),e._v(" "),t("li",[e._v("WebSocket 强制要求客户端发送数据必须使用掩码，这是为了提供最基本的安全防护，让每次发送的消息都是随机、不可预测的，抵御 "),t("strong",[e._v("缓存中毒")]),e._v(" 攻击。但如果运行在 SSL/TLS 上，采用加密通信，那么掩码就没有必要了")]),e._v(" "),t("li",[e._v("Web Socket 协议里的 PNG、PONG 帧对于保持长连接很重要，可以让链路上总有数据在传输，防止被服务器、路由、网关认为是 "),t("strong",[e._v("无效连接")]),e._v(" 而意外关闭")])])])}),[],!1,null,null,null);v.default=c.exports}}]);
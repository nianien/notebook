(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{540:function(t,a,s){t.exports=s.p+"assets/img/a1968821f214df4a3ae16c9b30f99a5b.a1968821.png"},541:function(t,a,s){t.exports=s.p+"assets/img/image-20210308184306725.08d5579c.png"},542:function(t,a,s){t.exports=s.p+"assets/img/8a67535620ab9c7764560363f83982b2.8a675356.png"},543:function(t,a,s){t.exports=s.p+"assets/img/image-20210308185222487.ef506844.png"},544:function(t,a,s){t.exports=s.p+"assets/img/f2a12669e997ea6dc0f2228bcaf65a06.f2a12669.png"},545:function(t,a,s){t.exports=s.p+"assets/img/b239d0804be630ce182e24ea9e4ab237.b239d080.png"},546:function(t,a,s){t.exports=s.p+"assets/img/image-20210308193039343.944b5349.png"},547:function(t,a,s){t.exports=s.p+"assets/img/image-20210308193305833.46880c8d.png"},548:function(t,a,s){t.exports=s.p+"assets/img/image-20210308193846660.f066fc53.png"},549:function(t,a,s){t.exports=s.p+"assets/img/image-20210309092029949.887ece29.png"},550:function(t,a,s){t.exports=s.p+"assets/img/image-20210309092106572.cf781d62.png"},551:function(t,a,s){t.exports=s.p+"assets/img/image-20210309092631983.73a89254.png"},552:function(t,a,s){t.exports=s.p+"assets/img/image-20210309095056568.62e6b343.png"},752:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_06-生鲜速递-http-的缓存控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_06-生鲜速递-http-的缓存控制"}},[t._v("#")]),t._v(" 06 | 生鲜速递：HTTP 的缓存控制")]),t._v(" "),e("p",[t._v("缓存（Cache）是计算机领域里的一个重要概念，是优化系统性能的利器。")]),t._v(" "),e("p",[t._v("由于链路漫长，网络时延不可控，浏览器使用 HTTP 获取资源的成本较高。所以，非常有必要把来之不易的数据缓存起来，下次再请求的时候尽可能地 "),e("strong",[t._v("复用")]),t._v(" 。这样，就可以 "),e("strong",[t._v("避免多次请求 - 应答的通信成本，节约网络带宽")]),t._v("  ，也可以加快响应速度。")]),t._v(" "),e("p",[t._v("试想一下，如果有几十 K 甚至几十 M 的数据，不是从网络而是从本地磁盘获取，那将是多么大的一笔节省，免去多少等待的时间。")]),t._v(" "),e("p",[t._v("实际上，HTTP 传输的每一个环节基本上都会有缓存，非常复杂。")]),t._v(" "),e("p",[t._v("基于 「请求 - 应答」模式的特点，可以大致分为 "),e("strong",[t._v("客户端缓存")]),t._v(" 和 "),e("strong",[t._v("服务器端缓存")]),t._v(" ，因为服务器端缓存经常与代理服务「混搭」在一起，所以今天我先讲客户端——也就是 **浏览器的缓存 ** 。")]),t._v(" "),e("h2",{attrs:{id:"服务器的缓存控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器的缓存控制"}},[t._v("#")]),t._v(" 服务器的缓存控制")]),t._v(" "),e("p",[t._v("为了更好地说明缓存的运行机制，下面我用「生鲜速递」作为比喻，看看缓存是如何工作的。")]),t._v(" "),e("p",[t._v("夏天到了，天气很热。你想吃西瓜消暑，于是打开冰箱，但很不巧，冰箱是空的。不过没事，现在物流很发达，给生鲜超市打个电话，不一会儿，就给你送来一个 8 斤的沙瓤大西瓜，上面还贴着标签：「"),e("strong",[t._v("保鲜期 5 天")]),t._v("」。好了，你把它放进冰箱，想吃的时候随时拿出来。")]),t._v(" "),e("p",[t._v("在这个场景里：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("生鲜超市：就是 Web 服务器")])]),t._v(" "),e("li",[e("p",[t._v("你：就是浏览器")])]),t._v(" "),e("li",[e("p",[t._v("冰箱：就是浏览器内部的缓存")])])]),t._v(" "),e("p",[t._v("整个流程翻译成 HTTP 就是：")]),t._v(" "),e("ol",[e("li",[t._v("浏览器发现缓存无数据，于是发送请求，向服务器获取资源；")]),t._v(" "),e("li",[t._v("服务器响应请求，返回资源，同时标记资源的有效期；")]),t._v(" "),e("li",[t._v("浏览器缓存资源，等待下次重用。")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(540),alt:"img"}})]),t._v(" "),e("p",[t._v("你可以访问实验环境的 "),e("code",[t._v("http://www.chrono.com/20-1")]),t._v(" 看看具体的请求应答过程")]),t._v(" "),e("p",[e("img",{attrs:{src:s(541),alt:"image-20210308184306725"}})]),t._v(" "),e("p",[t._v("服务器标记资源有效期使用的头字段是 "),e("strong",[t._v("Cache-Control")]),t._v(" ，里面的值 "),e("strong",[t._v("max-age=30")]),t._v(" 就是资源的有效时间，相当于告诉浏览器，「这个页面只能缓存 30 秒，之后就算是过期，不能用。」")]),t._v(" "),e("p",[t._v("你可能要问了，让浏览器直接缓存数据就好了，为什么要加个有效期呢？")]),t._v(" "),e("p",[t._v("这是因为网络上的数据随时都在变化，不能保证它稍后的一段时间还是原来的样子。就像生鲜超市给你快递的西瓜，只有 5 天的保鲜期，过了这个期限最好还是别吃，不然可能会闹肚子。")]),t._v(" "),e("p",[e("code",[t._v("Cache-Control")]),t._v(" 字段里的 "),e("code",[t._v("max-age")]),t._v(" 和上一讲里 Cookie 有点像，都是标记资源的有效期。")]),t._v(" "),e("p",[t._v("但我必须提醒你注意，这里的 max-age 是 "),e("strong",[t._v("生存时间")]),t._v(" （又叫 新鲜度、缓存寿命，类似 TTL，Time-To-Live），时间的计算起点是响应报文的创建时刻（ "),e("strong",[t._v("即 Date 字段，也就是离开服务器的时刻")]),t._v(" ），而不是客户端收到报文的时刻，也就是说包含了在链路传输过程中所有节点所停留的时间。")]),t._v(" "),e("p",[t._v("比如，服务器设定 "),e("code",[t._v("max-age=5")]),t._v("，但因为网络质量很糟糕，等浏览器收到响应报文已经过去了 4 秒，那么这个资源在客户端就最多能够再存 1 秒钟，之后就会失效。")]),t._v(" "),e("p",[e("code",[t._v("max-age")]),t._v(" 是 HTTP 缓存控制最常用的属性，此外在响应报文里还可以用其他的属性来更精确地指示浏览器应该如何使用缓存：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("no_store")]),t._v(" ："),e("strong",[t._v("不允许缓存")]),t._v(" ，用于某些变化非常频繁的数据，例如秒杀页面；")]),t._v(" "),e("li",[e("code",[t._v("no_cache")]),t._v(" ：它的字面含义容易与 no_store 搞混，实际的意思并不是不允许缓存，而是 "),e("strong",[t._v("可以缓存")]),t._v(" ，但在使用之前必须要去服务器验证是否过期，是否有最新的版本；")]),t._v(" "),e("li",[e("code",[t._v("must-revalidate")]),t._v(" ：又是一个和 no_cache 相似的词，它的意思是 "),e("strong",[t._v("如果缓存不过期就可以继续使用")]),t._v(" ，"),e("strong",[t._v("但过期了如果还想用就必须去服务器验证")]),t._v(" 。")])]),t._v(" "),e("p",[t._v("听的有点糊涂吧。没关系，我拿生鲜速递来举例说明一下：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("no_store")]),t._v("：买来的西瓜不允许放进冰箱，要么立刻吃，要么立刻扔掉；")]),t._v(" "),e("li",[e("code",[t._v("no_cache")]),t._v("：可以放进冰箱，但吃之前必须问超市有没有更新鲜的，有就吃超市里的；")]),t._v(" "),e("li",[e("code",[t._v("must-revalidate")]),t._v("：可以放进冰箱，保鲜期内可以吃，过期了就要问超市让不让吃。")])]),t._v(" "),e("p",[t._v("你看，这超市管的还真多啊，西瓜到了家里怎么吃还得听他。不过没办法，在 HTTP 协议里服务器就是这样的霸气。")]),t._v(" "),e("p",[t._v("我把服务器的缓存控制策略画了一个流程图，对照着它你就可以在今后的后台开发里明确 "),e("code",[t._v("Cache-Control")]),t._v(" 的用法了。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(542),alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"客户端的缓存控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端的缓存控制"}},[t._v("#")]),t._v(" 客户端的缓存控制")]),t._v(" "),e("p",[t._v("现在冰箱里已经有了 "),e("strong",[t._v("缓存")]),t._v(" 的西瓜，是不是就可以直接开吃了呢？")]),t._v(" "),e("p",[t._v("你可以在 Chrome 里点几次「刷新」按钮，估计你会失望，页面上的 ID 一直在变，根本不是缓存的结果，明明说缓存 30 秒，怎么就不起作用呢？")]),t._v(" "),e("p",[t._v("其实不止服务器可以发 "),e("code",[t._v("Cache-Control")]),t._v(" 头，浏览器也可以发 "),e("code",[t._v("Cache-Control")]),t._v(" ，也就是说请求 - 应答的双方都可以用这个字段进行缓存控制，互相协商缓存的使用策略。")]),t._v(" "),e("p",[t._v("当你点 「刷新」按钮的时候，浏览器会在请求头里加一个 "),e("strong",[t._v("Cache-Control: max-age=0")]),t._v(" 。因为 max-age 是 "),e("strong",[t._v("生存时间")]),t._v(" ，"),e("code",[t._v("max-age=0")]),t._v("  的意思就是「我要一个最最新鲜的西瓜」，而本地缓存里的数据至少保存了几秒钟，所以浏览器就不会使用缓存，而是向服务器发请求。服务器看到 max-age=0，也就会用一个最新生成的报文回应浏览器。")]),t._v(" "),e("p",[t._v("Ctrl+F5 的「强制刷新」又是什么样的呢？")]),t._v(" "),e("p",[t._v("它其实是发了一个 "),e("strong",[t._v("Cache-Control: no-cache")]),t._v(" ，含义和 "),e("code",[t._v("max-age=0")]),t._v(" 基本一样，就看后台的服务器怎么理解，通常两者的效果是相同的。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(543),alt:"image-20210308185222487"}})]),t._v(" "),e("p",[t._v("那么，浏览器的缓存究竟什么时候才能生效呢？")]),t._v(" "),e("p",[t._v("别着急，试着点一下浏览器的「前进」、「后退」按钮，再看开发者工具，你就会惊喜地发现 "),e("code",[t._v("from disk cache")]),t._v(" 的字样，意思是没有发送网络请求，而是读取的磁盘上的缓存。")]),t._v(" "),e("p",[t._v("另外，使用重定向的话，也可以发现使用了缓存")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 前面讲解重定向功能\nhttp://www.chrono.com/18-1?dst=20-1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:s(544),alt:"img"}})]),t._v(" "),e("p",[t._v("这几个操作与刷新有什么区别呢？")]),t._v(" "),e("p",[t._v("其实也很简单，在前进、后退、跳转这些重定向动作中浏览器不会「夹带私货」，只用最基本的请求头，没有 "),e("code",[t._v("Cache-Control")]),t._v(" ，所以就会检查缓存，直接利用之前的资源，不再进行网络通信。")]),t._v(" "),e("p",[t._v("这个过程你也可以用 Wireshark 抓包，看看是否真的没有向服务器发请求。")]),t._v(" "),e("p",[e("code",[t._v("/20-1")]),t._v(" 的后端代码中也仅仅只写了一个 "),e("code",[t._v("Cache-Control: max-age=0")])]),t._v(" "),e("h2",{attrs:{id:"条件请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#条件请求"}},[t._v("#")]),t._v(" 条件请求")]),t._v(" "),e("p",[t._v("浏览器用 "),e("code",[t._v("Cache-Control")]),t._v(" 做缓存控制只能是刷新数据，不能很好地利用缓存数据，又因为缓存会失效，使用前还必须要去服务器验证是否是最新版。")]),t._v(" "),e("p",[t._v("那么该怎么做呢？")]),t._v(" "),e("p",[t._v("浏览器可以用两个连续的请求组成 "),e("strong",[t._v("验证动作")]),t._v(" ：")]),t._v(" "),e("ol",[e("li",[t._v("先是一个 HEAD，获取资源的修改时间等元信息，然后与缓存数据比较，如果没有改动就使用缓存，节省网络流量")]),t._v(" "),e("li",[t._v("否则就再发一个 GET 请求，获取最新的版本。")])]),t._v(" "),e("p",[t._v("但这样的两个请求网络成本太高了（获取元信息），所以 HTTP 协议就定义了一系列  "),e("strong",[t._v("If")]),t._v("  开头的  "),e("strong",[t._v("条件请求")]),t._v(" 字段，专门用来检查验证资源是否过期，"),e("strong",[t._v("把两个请求才能完成的工作合并在一个请求里做")]),t._v(" 。而且，"),e("strong",[t._v("验证的责任也交给服务器")]),t._v(" （不获取元数据自己校验了），浏览器只需坐享其成。")]),t._v(" "),e("p",[t._v("条件请求一共有 5 个头字段：")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("if-Modified-Since")]),t._v("：和 "),e("code",[t._v("Last-modified")]),t._v(" 比较")]),t._v(" "),e("p",[t._v("和 Last-modified  对比，是否已经修改了")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("If-None-Match")]),t._v(" ：和 ETag 比较")]),t._v(" "),e("p",[t._v("和 ETag 比较是否不匹配")])]),t._v(" "),e("li",[e("p",[t._v("If-Unmodified-Since")]),t._v(" "),e("p",[t._v("和 Last-modified  对比，是否已未修改")])]),t._v(" "),e("li",[e("p",[t._v("If-Match")]),t._v(" "),e("p",[t._v("和 ETag 比较是否匹配")])]),t._v(" "),e("li",[e("p",[t._v("If-Range")])])]),t._v(" "),e("p",[t._v("我们最常用的是 "),e("strong",[t._v("if-Modified-Since")]),t._v(" 和 "),e("strong",[t._v("If-None-Match")]),t._v(" 这两个。需要第一次的响应报文预先提供 "),e("strong",[t._v("Last-modified")]),t._v(" 和 "),e("strong",[t._v("ETag")]),t._v(" ，然后第二次请求时就可以带上缓存里的原值，验证资源是否是最新的。")]),t._v(" "),e("p",[t._v("如果资源没有变，服务器就回应一个 "),e("strong",[t._v("304 Not Modified")]),t._v(" ，表示缓存依然有效，浏览器就可以更新一下有效期，然后放心大胆地使用缓存了。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(545),alt:"img"}})]),t._v(" "),e("p",[e("code",[t._v("Last-modified")]),t._v(" 很好理解，就是文件的最后修改时间。ETag 是什么呢？")]),t._v(" "),e("p",[t._v("ETag 是 "),e("strong",[t._v("实体标签（Entity Tag）")]),t._v(" 的缩写，"),e("strong",[t._v("是资源的一个唯一标识")]),t._v(" ，主要是用来解决修改时间无法准确区分文件变化的问题。")]),t._v(" "),e("p",[t._v("比如，一个文件在一秒内修改了多次，但因为修改时间是秒级，所以这一秒内的新版本无法区分。")]),t._v(" "),e("p",[t._v("再比如，一个文件定期更新，但有时会是同样的内容，实际上没有变化，用修改时间就会误以为发生了变化，传送给浏览器就会浪费带宽。")]),t._v(" "),e("p",[t._v("使用 ETag 就可以精确地识别资源的变动情况，让浏览器能够更有效地利用缓存。")]),t._v(" "),e("p",[e("strong",[t._v("ETag 还有 强、弱 之分")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("强 ETag 要求资源在字节级别必须完全相符")]),t._v(" ，"),e("strong",[t._v("弱 ETag 在值前有个 "),e("code",[t._v("W/")]),t._v(" 标记")]),t._v(" ，只要求资源在语义上没有变化，但内部可能会有部分发生了改变（例如 HTML 里的标签顺序调整，或者多了几个空格）。")]),t._v(" "),e("p",[t._v("还是拿生鲜速递做比喻最容易理解：")]),t._v(" "),e("p",[t._v("你打电话给超市，「我这个西瓜是 3 天前买的，还有最新的吗？」。超市看了一下库存，说：「没有啊，我这里都是 3 天前的。」于是你就知道了，再让超市送货也没用，还是吃冰箱里的西瓜吧。这就是 "),e("strong",[t._v("if-Modified-Since")]),t._v(" 和 "),e("strong",[t._v("Last-modified")]),t._v(" 。")]),t._v(" "),e("p",[t._v("但你还是想要最新的，就又打电话：「有不是沙瓤的西瓜吗？」，超市告诉你都是沙瓤的（Match），于是你还是只能吃冰箱里的沙瓤西瓜。这就是 "),e("strong",[t._v("If-None-Match")]),t._v(" 和 "),e("strong",[t._v("弱 ETag")]),t._v(" 。")]),t._v(" "),e("p",[t._v("第三次打电话，你说「有不是 8 斤的沙瓤西瓜吗？」，这回超市给了你满意的答复：「有个 10 斤的沙瓤西瓜」。于是，你就扔掉了冰箱里的存货，让超市重新送了一个新的大西瓜。这就是 "),e("strong",[t._v("If-None-Match")]),t._v(" 和 "),e("strong",[t._v("强 ETag")]),t._v(" 。")]),t._v(" "),e("p",[t._v("再来看看实验环境的 URI  "),e("code",[t._v("/20-2")]),t._v(" 。它为资源增加了 ETag 字段，刷新页面时浏览器就会同时发送缓存控制头 "),e("code",[t._v("max-age=0")]),t._v(" 和条件请求头 "),e("code",[t._v("If-None-Match")]),t._v(" ，如果缓存有效服务器就会返回 304：")]),t._v(" "),e("p",[t._v("首次请求：请求头中没有 Cache-Control ，本地没有缓存")]),t._v(" "),e("p",[e("img",{attrs:{src:s(546),alt:"image-20210308193039343"}})]),t._v(" "),e("p",[t._v("未超过 10 秒刷新页面：")]),t._v(" "),e("ul",[e("li",[t._v("请求头："),e("code",[t._v("Cache-Control: max-age=0")]),t._v("  和 "),e("code",[t._v('If-None-Match: "60460b2b-24"')])]),t._v(" "),e("li",[t._v("响应式："),e("code",[t._v("Cache-Control: max-age=10, must-revalidate")]),t._v(" 和 "),e("code",[t._v('ETag: "60460b2b-24"')])])]),t._v(" "),e("p",[t._v("含义是：服务器响应时，给了 must-revalidate（不过期可以使用，过期了要用就要去服务器验证），但是这里的操作是浏览器 "),e("strong",[t._v("刷新")]),t._v("，所以会直接去服务器验证，携带上了 "),e("code",[t._v('If-None-Match: "60460b2b-24"')]),t._v("，注意看这个请求的响应，因为没有过期，所以返回的 ETag 是一样的")]),t._v(" "),e("p",[e("img",{attrs:{src:s(547),alt:"image-20210308193305833"}})]),t._v(" "),e("p",[t._v("超过 10 秒刷新页面：")]),t._v(" "),e("ul",[e("li",[t._v("请求头："),e("code",[t._v("Cache-Control: max-age=0")]),t._v("  和 "),e("code",[t._v('If-None-Match: "60460b2b-24"')])]),t._v(" "),e("li",[t._v("响应式："),e("code",[t._v("Cache-Control: max-age=10, must-revalidate")]),t._v(" 和 "),e("code",[t._v('ETag: "60460c94-24"')])])]),t._v(" "),e("p",[t._v("注意：响应的 ETag 已经变了，表示资源发生了改变，并且响应也是 200 而不是 304")]),t._v(" "),e("p",[e("img",{attrs:{src:s(548),alt:"image-20210308193846660"}})]),t._v(" "),e("p",[t._v("这里笔者唯一不能理解的是后端的这个代码")]),t._v(" "),e("div",{staticClass:"language-lua line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-lua"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Copyright (C) 2019 by chrono")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" misc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ngx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("misc\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" key "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ngx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("var"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http_host "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" time "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" misc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 申请了一块缓存，放入内存中，有效期为 30 秒")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" time "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    time "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ngx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    misc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- seconds")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP Conditional Request \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ID is "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),t._v(" string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('--"Now is " .. ngx.http_time(time)')]),t._v("\n\nngx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("header"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Length'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("#")]),t._v("str\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--ngx.header['Content-Type'] = 'text/plain'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--ngx.header['Cache-Control'] = 'public, max-age=10'")]),t._v("\nngx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("header"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cache-Control'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'max-age=10, must-revalidate'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--ngx.header['Last-Modified'] = ngx.http_time(time)")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- see ngx_http_set_etag() in ngx_http_core_module.c")]),t._v("\nngx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("header"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ETag'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"%x-%x\"'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("#")]),t._v("str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- checked by ngx_http_not_modified_filter_module")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--local http_time = ngx.var.http_if_modified_since")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('--if time == ngx.parse_http_time(http_time or "") then')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--    ngx.exit(304)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--end")]),t._v("\n\nngx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br")])]),e("p",[t._v("看到它的逻辑是：")]),t._v(" "),e("ol",[e("li",[t._v("生成了一个时间，放入了内存中")]),t._v(" "),e("li",[t._v("从 时间中构造一个 ETag")]),t._v(" "),e("li",[t._v("返回数据内容")])]),t._v(" "),e("p",[t._v("这里笔者测试一直刷新，测试出来的结果，它的代码是有问题的，每次都返回了内容（30 秒后，内容会变化，因为服务器端缓存的内容为 30 秒）。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(549),alt:"image-20210309092029949"}})]),t._v(" "),e("p",[t._v("但是通过抓包显示状态为 304 的包，并没有内容被返回，所以就不清楚到底是 nginx 做了处理？还是程序做的处理？")]),t._v(" "),e("p",[e("img",{attrs:{src:s(550),alt:"image-20210309092106572"}})]),t._v(" "),e("p",[t._v("笔者记忆中，在使用 "),e("a",{attrs:{href:"https://zq99299.github.io/note-combat/spring/#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("spring etag 的时候"),e("OutboundLink")],1),t._v("，明确的表示，需要我们自己判断 Etag 是否改变，正确的伪代码应该如下所示")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取资源的 ETag")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以使用一条数据的版本号来做 etag")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" etagParam "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ETag"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" etag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getEtag\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("etag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" etagParam"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),t._v("\n    response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("etag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" etag\n    response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cache-Control'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'max-age=10'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则返回新的内容")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("大致意思是：")]),t._v(" "),e("ol",[e("li",[t._v("获取文件内容，计算 etag")]),t._v(" "),e("li",[t._v("判定传递过来需要我们验证的 etag 是否有变更，如果有，则返回新的内容和 etag 相关头")]),t._v(" "),e("li",[t._v("如果没有变更，直接返回，不用返回数据")]),t._v(" "),e("li",[e("code",[t._v("'Cache-Control','max-age=10'")]),t._v("：不是使用浏览器刷新等功能直接导致该地址加载的话，将会遵守在 10 秒内不会发起请求（一个页面里面有 这个 "),e("code",[t._v("'Cache-Control','max-age=10'")]),t._v(" 的图片，直接按 F5 刷新当前页面，这个图片是不会使用 "),e("code",[t._v("'Cache-Control','max-age=0'")]),t._v(" 去服务器拉取数据的）")])]),t._v(" "),e("p",[e("strong",[t._v("有一个比较容易混淆的是 304 状态码和 200 状态码：")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("200 (from memory cache)")]),t._v("：这个表示没有向服务器发起请求，使用的是浏览器本地的缓存数据")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("304 Not Modified")]),t._v("：这个是表示向服务器发起了请求，但是服务器响应该文件没有变化，没有传回数据内容，使用浏览器的缓存")]),t._v(" "),e("p",[e("img",{attrs:{src:s(551),alt:"image-20210309092631983"}})])])]),t._v(" "),e("p",[t._v("上图是单独在浏览器地址栏中访问该图片，浏览器使用了  "),e("code",[t._v("'Cache-Control','max-age=10'")]),t._v(" ，去服务端请求了，服务器验证 ETag 发现并没有变化，则响应 304，并不会响应数据，这个图才是正确的响应方式。 也就是说 "),e("code",[t._v("Cache-Control:max-age=10")]),t._v(" 只是控制 「资源有效时间」，但是不会删除缓存，百度上有一个说明个人是和现在遇到的情况符合「通常，浏览器不会删除过期的缓存条目，除非它们在浏览器缓存已满时为新内容回收空间。 使用 no-store，no-cache 允许显式删除缓存条目。」")]),t._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),e("p",[t._v("今天我们学习了 HTTP 的缓存控制和条件请求，用好它们可以减少响应时间、节约网络流量，一起小结一下今天的内容吧：")]),t._v(" "),e("ol",[e("li",[t._v("缓存是优化系统性能的重要手段，HTTP 传输的每一个环节中都可以有缓存；")]),t._v(" "),e("li",[t._v("服务器使用 "),e("code",[t._v("Cache-Control")]),t._v(" 设置缓存策略，常用的是 "),e("code",[t._v("max-age")]),t._v(" ，表示资源的有效期；")]),t._v(" "),e("li",[t._v("浏览器收到数据就会存入缓存，如果没过期就可以直接使用，过期就要去服务器验证是否仍然可用；")]),t._v(" "),e("li",[t._v("验证资源是否失效需要使用「条件请求」，常用的是 "),e("code",[t._v("if-Modified-Since")]),t._v(" 和 "),e("code",[t._v("If-None-Match")]),t._v(" ，"),e("strong",[t._v("收到 304 就可以复用缓存里的资源")]),t._v(" ；")]),t._v(" "),e("li",[t._v("验证资源是否被修改的条件有两个："),e("code",[t._v("Last-modified")]),t._v(" 和 "),e("code",[t._v("ETag")]),t._v(" ，需要服务器预先在响应报文里设置，搭配条件请求使用；")]),t._v(" "),e("li",[t._v("浏览器也可以发送 "),e("code",[t._v("Cache-Control")]),t._v(" 字段，使用 "),e("code",[t._v("max-age=0")]),t._v(" 或 "),e("code",[t._v("no_cache")]),t._v(" 刷新数据。")])]),t._v(" "),e("p",[t._v("HTTP 缓存看上去很复杂，但基本原理说白了就是一句话：没有消息就是好消息，没有请求的请求，才是最快的请求。")]),t._v(" "),e("h2",{attrs:{id:"课下作业"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#课下作业"}},[t._v("#")]),t._v(" 课下作业")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Cache 和 Cookie 都是服务器发给客户端并存储的数据，你能比较一下两者的异同吗？")]),t._v(" "),e("p",[t._v("相同点：都会保存数据在浏览器端")]),t._v(" "),e("p",[t._v("不同点：")]),t._v(" "),e("p",[t._v("携带数据到服务端：")]),t._v(" "),e("ul",[e("li",[t._v("Cookie 存储的数据，在路径匹配的情况下，匹配的请求都会携带所有的 cookie 到服务端")]),t._v(" "),e("li",[t._v("Cache 针对不同的请求，进行缓存，只有访问和资源匹配的链接，才会触发缓存相关的检测和重用")])]),t._v(" "),e("p",[t._v("数据的获取：")]),t._v(" "),e("ul",[e("li",[t._v("Cookie 可以通过脚本获取（无 HttpOnly），也可以在浏览器中看到有哪些 cookie")]),t._v(" "),e("li",[t._v("Cache 无法查看到相关列表，只能通过对应访问触发")])]),t._v(" "),e("p",[t._v("用途不同：")]),t._v(" "),e("ul",[e("li",[t._v("Cookie：用于身份识别")]),t._v(" "),e("li",[t._v("Cache：用于节省带宽和加快响应速度")])]),t._v(" "),e("p",[t._v("有效时间的计算：")]),t._v(" "),e("ul",[e("li",[t._v("Cookie：max-age 是从浏览器拿到响应报文时开始计算")]),t._v(" "),e("li",[t._v("Cache：max-age 是从响应报文的生成时间（Date 字段）开始计算的")])])]),t._v(" "),e("li",[e("p",[t._v("即使有 "),e("code",[t._v("Last-modified")]),t._v(" 和 "),e("code",[t._v("ETag")]),t._v(" ，强制刷新（Ctrl+F5）也能够从服务器获取最新数据（返回 200 而不是 304），请你在实验环境里试一下，观察请求头和响应头，解释原因。")]),t._v(" "),e("p",[t._v("强制刷新会增加 "),e("code",[t._v("Cache-Control: no-cache")]),t._v(" 请求头来告知服务器，我需要最新的数据，但是请求头时不会携带 ETag，那么服务器端其实没有对比 ETag 的数据，就按正常的数据返回了")]),t._v(" "),e("p",[e("img",{attrs:{src:s(552),alt:"image-20210309095056568"}})])])]),t._v(" "),e("h2",{attrs:{id:"拓展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("较早版本的 Chrome(66 之前) 可以使用 URL "),e("code",[t._v("chrome://cache")]),t._v(" 检查本地缓存，但因为存在安全隐患，现在已经不能使用了")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("no-cache")]),t._v(" 属性可以理解为 "),e("code",[t._v("max-age=0,must-revalidate")])]),t._v(" "),e("p",[e("strong",[t._v("如果缓存不过期就可以继续使用")]),t._v(" ，"),e("strong",[t._v("但过期了如果还想用就必须去服务器验证")]),t._v(" 。设置为 0 ，则表示过期，需要去服务器验证")])]),t._v(" "),e("li",[e("p",[t._v("除了 "),e("code",[t._v("Cache-Control")]),t._v("，服务器也可以用 "),e("code",[t._v("Expires")]),t._v(" 字段来标记资源的有效期，它的形式和 Cookie 的差不多，同样属于 "),e("strong",[t._v("过时")]),t._v(" 的属性，优先级低于 "),e("code",[t._v("Cache-Control")]),t._v(" 。还有一个历史遗留字段 "),e("code",[t._v("Pragma: no-cache")]),t._v(" ，它相当于 "),e("code",[t._v("Cache-Control: no-cache")]),t._v("，除非为了兼容 HTTP/1.0 否则不建议使用")])]),t._v(" "),e("li",[e("p",[t._v("如果响应报文里提供了 "),e("code",[t._v("Last-modified")]),t._v("，但是没有 "),e("code",[t._v("Cache-Control")]),t._v(" 或 "),e("code",[t._v("Expires")]),t._v(" ，浏览器会使用 "),e("strong",[t._v("启发（Heuristic）算法")]),t._v(" 计算一个缓存时间，在 RFC 里的建议是 "),e("code",[t._v("(Date - Last-modified) * 10%")])])]),t._v(" "),e("li",[e("p",[t._v("每个 Web 服务器对 ETag 的计算方式都不一样，只要保证数据变化后值不一样就好，但复制的计算会增加服务器的负担。 Nginx 的算法是 "),e("code",[t._v("修改时间 + 长度")]),t._v("，实际上和 "),e("code",[t._v("Last-modified")]),t._v(" 基本等价")])]),t._v(" "),e("li",[e("p",[t._v("强 etag 和 etag 的的区别？")])])]),t._v(" "),e("p",[t._v("只是计算 etag 的方式不一样，流程是一样的")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("no-cache 每次使用前都需要去浏览器问一下有没有过期，这不也是一次请求吗？那不和没有缓存一个意思吗")]),t._v(" "),e("p",[t._v("笔者前面特别强调过，304 和 "),e("code",[t._v("200 (from memory cache)")]),t._v(" 的含义。")])]),t._v(" "),e("li",[e("p",[t._v("如果响应头里什么缓存字段都没有，客户端对缓存是采取什么策略呢？")]),t._v(" "),e("p",[t._v("按照规范是无法缓存")])]),t._v(" "),e("li",[e("p",[t._v("在 pwa 应用中，使用浏览器的「刷新」功能，从表现上看 max-age 并未设置为 0 ，这个笔者也不清楚是怎么回事")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
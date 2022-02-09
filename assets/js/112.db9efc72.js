(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{800:function(s,n,t){"use strict";t.r(n);var a=t(13),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nginx-性能监控与调优"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-性能监控与调优"}},[s._v("#")]),s._v(" Nginx 性能监控与调优")]),s._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/monitor-tuning/05/01.html"}},[s._v("ngx_http_stub_status 监控链接信息")])],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/monitor-tuning/05/02.html"}},[s._v("ngxtop 监控请求信息")])],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/monitor-tuning/05/03.html"}},[s._v("nginx-rrd 图形化监控")])],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/monitor-tuning/05/04.html"}},[s._v("nginx 调优")])],1)]),s._v(" "),t("h1",{attrs:{id:"nginx-简单安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-简单安装"}},[s._v("#")]),s._v(" nginx 简单安装")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://nginx.org/en/docs/install.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方有说明"),t("OutboundLink")],1),s._v("，笔者是 "),t("a",{attrs:{href:"https://www.cnblogs.com/yy136/p/12690225.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("mac 安装可以参考这篇文章"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("安装完成之后，配置文件 "),t("code",[s._v("nginx.conf")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#user  nobody;  # 运行 nginx 的用户")]),s._v("\nworker_processes  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log  notice;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log  info;")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pid        logs/nginx.pid;")]),s._v("\n\n\nevents "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    worker_connections  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每一个 worker 进程可以处理 1024 个链接")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\nhttp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    include       mime.types"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 里面包含了很多的 type")]),s._v("\n    default_type  application/octet-stream"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里设置了一个默认的 type")]),s._v("\n\n\t  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出 access_log 日志文件的内容格式")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#                  '$status $body_bytes_sent \"$http_referer\" '")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#                  \'"$http_user_agent" "$http_x_forwarded_for"\';')]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log  logs/access.log  main;")]),s._v("\n\n    sendfile        on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tcp_nopush     on;")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#keepalive_timeout  0;")]),s._v("\n    keepalive_timeout  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#gzip  on;")]),s._v("\n\n    server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#charset koi8-r;")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log  logs/host.access.log  main;")]),s._v("\n\n        location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            index  index.html index.htm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page  404              /404.html;")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redirect server error pages to the static page /50x.html")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n        error_page   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  /50x.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ \\.php$ {")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    proxy_pass   http://127.0.0.1;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ \\.php$ {")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    root           html;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_pass   127.0.0.1:9000;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_index  index.php;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    include        fastcgi_params;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deny access to .htaccess files, if Apache's document root")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# concurs with nginx's one")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ /\\.ht {")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    deny  all;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# another virtual host using mix of IP-, name-, and port-based configuration")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server {")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       8000;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       somename:8080;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    server_name  somename  alias  another.alias;")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    location / {")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        root   html;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        index  index.html index.htm;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    }")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HTTPS server")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server {")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       443 ssl;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    server_name  localhost;")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_certificate      cert.pem;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_certificate_key  cert.key;")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_session_cache    shared:SSL:1m;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_session_timeout  5m;")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_ciphers  HIGH:!aNULL:!MD5;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_prefer_server_ciphers  on;")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    location / {")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        root   html;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        index  index.html index.htm;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    }")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br"),t("span",{staticClass:"line-number"},[s._v("99")]),t("br"),t("span",{staticClass:"line-number"},[s._v("100")]),t("br"),t("span",{staticClass:"line-number"},[s._v("101")]),t("br"),t("span",{staticClass:"line-number"},[s._v("102")]),t("br"),t("span",{staticClass:"line-number"},[s._v("103")]),t("br"),t("span",{staticClass:"line-number"},[s._v("104")]),t("br"),t("span",{staticClass:"line-number"},[s._v("105")]),t("br"),t("span",{staticClass:"line-number"},[s._v("106")]),t("br"),t("span",{staticClass:"line-number"},[s._v("107")]),t("br"),t("span",{staticClass:"line-number"},[s._v("108")]),t("br"),t("span",{staticClass:"line-number"},[s._v("109")]),t("br"),t("span",{staticClass:"line-number"},[s._v("110")]),t("br"),t("span",{staticClass:"line-number"},[s._v("111")]),t("br"),t("span",{staticClass:"line-number"},[s._v("112")]),t("br"),t("span",{staticClass:"line-number"},[s._v("113")]),t("br"),t("span",{staticClass:"line-number"},[s._v("114")]),t("br"),t("span",{staticClass:"line-number"},[s._v("115")]),t("br"),t("span",{staticClass:"line-number"},[s._v("116")]),t("br"),t("span",{staticClass:"line-number"},[s._v("117")]),t("br"),t("span",{staticClass:"line-number"},[s._v("118")]),t("br"),t("span",{staticClass:"line-number"},[s._v("119")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);
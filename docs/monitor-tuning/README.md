# JAVA 生产环境下性能监控与调优详解

## 必备推荐
> [配套练习项目](https://github.com/zq99299/monitor-tuning.git)

- [JAVA 平台，标准版故障排除指南](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/index.html)

  里面列出了很多场景下的故障如何排除，比如死锁，内存溢出等

## 目录导航

- [为什么要学习这课程？](./00.md)
- [基于 JDK 命令行工具的监控](./01/)

  - [JVM 参数类型](./01/01.md)
  - [查看运行时 JVM 参数](./01/02.md)
  - [查看 JVM 统计信息](./01/03.md)
  - [jmap + MAT 实战内存溢出](./01/04.md)
  - [jstack 实战死循环与死锁](./01/05.md)
- [基于 JVisualVM 的可视化监控](./02/)
  
  - [监控本地 JAVA 进程](./02/01.md)
  - [监控远程 JAVA 进程](./02/02.md)

- [基于 Btrace 的监控调试](./03/)
  
    - [Btrace 安装使用入门](./03/01.md)
    - [Btrace 使用详解](./03/02.md)

- [Tomcat 性能监控与调优](./04/)

  - [Tomcat 远程 debug](./04/01.md)
  - [Tomcat-manager 监控 Tomcat](./04/02.md)
  - [psi-probe 监控 Tomcat](./04/03.md)
  - [Tomcat 调优](./04/04.md)

- [Nginx 性能监控与调优](./05/)

  - [ngx_http_stub_status 监控链接信息](./05/01.md)
  - [ngxtop 监控请求信息](./05/02.md)
  - [nginx-rrd 图形化监控](./05/03.md)
  - [nginx 调优](./05/04.md)

- [JVM 层 GC 调优](./06/)

  - [JVM 内存结构：基于 JDK 1.8](./06/01.md)
  - [垃圾回收算法](./06/02.md)
  - [垃圾收集器](./06/03.md)
  - [GC 日志格式与可视化日志分析工具](./06/04.md)
  - [Tomcat 的 GC 调优实战](./06/05.md)

- [Java 代码层优化](./07/)

  - [JVM 字节码指令与 javap](./07/01.md)
  - [字节码指令简单介绍](./07/02.md)
  - [常用代码优化方法](./07/03.md)
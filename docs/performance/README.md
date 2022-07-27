# Application 性能优化

## Linux 底层优化

### CPU￼

进程和 CPU 原理
- 进程、线程与协程
- CPU 调度
- 中断系统
- CPU 缓存
- NUMA

性能指标
- 平均复杂
- CPU 使用率：用户 CPU, 系统CPU，iowait, 软中断，硬中断，窃取 CPU，客户 CPU.
- 上下文切换：自愿切换，非自愿切换
- CPU 缓存命中率

性能剖析
- top/htop/ps
- vmstat
- mpstat
- pidstat
- strace
- perf
- execsnoop
- proc 文件系统

调优方法
- CPU 绑定 affinity
- 进程 CPU 资源限制
- 进程优先级调整
- 中断负载均衡
- CPU 缓存
- NUMA 优化


### 内存

内存原理
- 地址空间
- 虚拟内存
- 内存分配与回收
- 缓存与缓冲区
- swap

性能指标
- 系统内存使用
- 进程内存使用
- 缓存与缓冲区命中率

性能剖析
- free
- top
- sar
- vmstat
- cachestat
- cachetop
- memleak
- proc 文件系统

调优方法
- 利用缓存与缓冲区
- 减少 SWAP 使用
- 减少动态内存分配
- 优化 NUMA
- 限制进程内存资源
- HugePage 


### 网络

网络原理
- 网络配置
- TCP/IP 协议
- 网络收据收发
- 高级路由
- 网络 QOS
- 网络防火墙

性能指标
- 吞吐量：BPS, QPS, PPS
- 延迟
- 丢包
- TCP 重传

性能剖析
- ethtool
- sar
- ping
- netstat/ss
- ifstat
- ifconfig
- tcpdump
- iptables
- traceroute
- ipcontrack
- perf


调优方法
- 网卡调优：MTU， 队列长度，链路聚合
- 协议调优：HTTP, TCP, overlay
- 资源控制：QoS
- 内核调优：NAT 优化，功能卸载，负载均衡，DPDK




### 磁盘IO￼
磁盘原理
- 磁盘管理
- 磁盘内型，RAID 选型
- 磁盘接口
- 磁盘 I/O 栈

性能指标
- 使用率
- IOPS
- 吞吐量
- IO Wait

性能剖析
- dstat
- sar
- iostat
- pidstat
- iotop
- iolatency
- blktrace
- fio
- perf


调优方法
- 系统调用
- I/O 资源控制, 写对齐
- 充分利用缓存
- RAID
- I/O 隔离


### 文件系统

文件原理：
- 虚拟文件系统
- 文件系统 IO 栈
- 文件系统缓
- 文件系统种类

性能指标：
- 容量
- IOPS
- 缓存命中率


性能剖析
- df
- strace
- vmstat
- sar
- perf
- proc 文件系统

调优方法
- 文件系统内型
- 利用文件系统缓存
- I/O 隔离



### Linux 内核优化

内核原理
- 内核态
- 模型

性能指标

性能剖析
- BPF
- perf
- proc 文件系统

调优方法
- 内核参数





## 应用层优化

### 应用程序

性能指标
- 吞吐量
- 响应时间
- 资源使用率

性能剖析
- USE 方法：使用率，饱和度，初五
- 进程剖析：进程状态，资源使用率，I/O 剖析， 系统调用，热点函数，动态追踪
- APM

调优方法
- 逻辑优化
- 编程语言
- 算法调优
- 非阻塞 I/O
- 利用缓存与缓冲区
- 异步处理与并发
- 垃圾回收



### 架构设计

空间换时间
- 缓存
- 缓冲区
- 冗余数据

时间换空间：
- 压缩编码
- 页面交换

并行处理
- 多线程
- 多进程
- 协程
- 分布式

异步处理
- 异步 I/O
- 消息队列
- 事件通知

￼


### 性能监控

时间序列分析
- 历史趋势分析
- 性能模型构建
- 未来趋势预测


服务调用追踪
- 服务调用流程跟踪
- 服务调用性能分析
- 服务调用链拓扑展示


数据可视化
- 趋势图
- 散点图
- 热图
- 饼图

告警通知
- 阈值选择
- 动态阈值
- 报警策略
- 通知渠道



### 性能测试

明确需求
- 系统资源需求
- 应用程序需求

环境假设
- 合理的假设
- 生产环境模拟
- 生产负载模拟

性能测试
- 基准测试
- 负载测试
- 压力测试


结果分析
- 应用程序瓶颈
- 数据库瓶颈
- 系统资源瓶颈


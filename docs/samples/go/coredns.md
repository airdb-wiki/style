# CoreDNS 开发

## 插件开发
参考： https://github.com/coredns/rrl

## 集成插件

1. 将插件放置在 `coredns/plugin/` 目录下
2. 将指令添加到 `core/dnsserver/zdirectives.go`  Directives 数组中
3. 增加插件到 `plugin.cfg` 

core/plugin/zplugin.go

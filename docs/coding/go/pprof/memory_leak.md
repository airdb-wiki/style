---
sidebar: auto
---

[go pprof与线上事故：一次成功的定位与失败的复现](https://mp.weixin.qq.com/s/4Vn1Rq82wOFiLdEmjXU0fw)

# Memory Leaking Scenarios 

## Gin pprof

```bash
import "github.com/gin-contrib/pprof"
pprof.Register(router)
```


## Case Sets

Case1: https://github.com/golang/go/issues/25484

yes, the way used by strings.Builder, is a more efficient way.

```
func ByteSlice2String(bs []byte) string {
	return *(*string)(unsafe.Pointer(&bs))
}
```

For reference, [this is the source referred to](https://golang.org/src/strings/builder.go#L45)

https://www.openmymind.net/Go-Slices-And-The-Case-Of-The-Missing-Memory/

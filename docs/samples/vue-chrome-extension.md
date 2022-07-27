# Chrome 插件制作

### 创建项目

```bash
vue create --preset kocal/vue-web-extension my-extension
cd my-extension
npm run serve
```

### 载入

chrome 浏览器输入 [chrome://extensions](chrome://extensions), 加载插件选择 `my-extension/dist` 目录。
加载成功即可生效。

### 参考

https://developer.chrome.com/docs/extensions/reference/commands/

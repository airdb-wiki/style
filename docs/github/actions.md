# Github Actions

Github Actions 是一套基于 github 的自动化执行框架，可以自定义各种 workflow 及工具来满足 CI, CD 相关的各种需求。


## 创建一个容器的 action

Github Demo: [airdb actions](https://github.com/airdb/actions)

Refer: https://help.github.com/en/actions/creating-actions/creating-a-docker-container-action

主体思路：

通过执行 docker run 命令实现 actions 操作。


Workflow: 
1. action.yml 中配置, 启用自定义的 action , 增加 input 变量作为 docker run 参数
2. 调用自定义的 action , 从 env 中获取 GITHUB_EVENT_PATH,  读取 event.json 全部内容
3. 代码中进行自定义操作
4. 设置输出, 如 echo "::set-output name=time::$time"


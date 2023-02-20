# Github Actions

Github Actions 是一套基于 github 的自动化执行框架，可以自定义各种 workflow 及工具来满足 CI, CD 相关的各种需求。

## 创建一个容器的 action

Github Demo: [airdb actions](https://github.com/airdb/actions)

Refer: <https://help.github.com/en/actions/creating-actions/creating-a-docker-container-action>

主体思路：

通过执行 docker run 命令实现 actions 操作。

Workflow:

1. action.yml 中配置, 启用自定义的 action , 增加 input 变量作为 docker run 参数
2. 调用自定义的 action , 从 env 中获取 GITHUB_EVENT_PATH,  读取 event.json 全部内容
3. 代码中进行自定义操作
4. 设置输出, 如 echo "::set-output name=time::$time"

<CodeGroup>
  <CodeGroupItem title="Nodejs" active>

```yaml
name: Deploy Docs

on: [push]

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Build Docs
        env:
          NODE_OPTIONS: --max_old_space_size=4096
        run: |
          make build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUBBOTTOKEN }}
          publish_branch: gh-pages
          publish_dir: ./docs/.vuepress/dist
```

  </CodeGroupItem>

  <CodeGroupItem title="Golang">

```yaml
name: Go
on: [push]
jobs:

  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Set up Go
        uses: actions/setup-go@v2
        with:
          stable: 'true'
          go-version: 1.18
        id: go

      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Lint
        run: |
          make lint

      - name: Test
        run: make test

      - name: Build
        run: make Build
```

  </CodeGroupItem>

</CodeGroup>

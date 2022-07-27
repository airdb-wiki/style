# Github 技巧

## Gitlab 或 Github Fork 后如何同步源的新更新内容？

### 给 fork 配置远程库

- 查看远程状态
`
git remote -v
`

- 确定一个将被同步给 fork 远程的上游仓库
`
git remote add upstream https://github.com/bfenetworks/bfe
`

- 再次查看状态确认是否配置成功。
`
git remote -v
`

### 同步 fork

- 从上游仓库 fetch 分支和提交点，提交给本地 master，并会被存储在一个本地分支 upstream/master

```
git fetch upstream
```

- 切换到本地主分支(如果不在的话)

`
git checkout develop
`

- 把 upstream/master 分支合并到本地 master 上，这样就完成了同步，并且不会丢掉本地修改的内容。

`
git merge upstream/develop
`

- 如果想更新到 GitHub 的 fork 上，直接

`
git push origin develop
`




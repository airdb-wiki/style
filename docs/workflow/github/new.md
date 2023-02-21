# 开发指南

## 新功能开发

每次开发新的功能，都应该从主分支 (main) 分支创建一个新的分支来进行开发。

具体操作：

```bash
# 1. 切回main 分支
git check main

# 2. 创建新的分支
git checkout -b dean/feat-1

# 3. 提交新的分支
git push
```

## 开发过程中

开发过程中，经常出现协同问题，其他人会在你的开发周期中，提交并合并代码。

同步最新代码到开发分支

```bash
# 1. 切换至 main 分支
git checkout main

# 2. 合并主仓库代码
git rebase upstream/main

# 3. 切换到开发分支
git checkout dean/feat-1
```

## 开发完成

提交 PR 时，需要检查是否有多次 debug commits 等情形，如果有，则请使用 git rebase 合并 commit 保持代码 git log 干净。

```bash
# 合并最近 3 次的 commit
git rebase -i HEAD~3 
```

具体操作，可参考 [使用 git rebase 合并多次commit](https://juejin.cn/post/6844903600976576519)

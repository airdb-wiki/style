# Git and Github

# Git and Github 使用

## Git Command:


将本地分支推送到远程主干分支

```bash
git push origin dev:main
```

1. Maintain a repo without permission

```bash
git remote add upstream https://github.com/bfenetworks/bfe.git
git fetch upstream
git checkout develop

git merge upstream/develop

git rebase upstream/develop

Refer: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork
```


2. git config setting
```bash
git config --global core.hooksPath .github/hooks
git config --global core.excludefile .gitignore_global
git config --global url.'ssh://git@github.com'.insteadOf https://github.com
```

3. Github Commit. For Close Github Issue, commit message should as follow:

```bash
close #x
closes #x
closed #x
fix #x
fixes #x
fixed #x
resolve #x
resolves #x
resolved #x
add new quick sort algorithm, fixes #4, resolve #6, closed #12
```


```bash
git submodule update --init -f  vendor/github.com/mholt/caddy
git remote add ups https://github.com/airdb/b
git push -u ups local_branch:master -f
```

4. Github Command Line
```bash
brew install github/gh/gh
gh --repo bbhj/lbs issue status
gh --repo bbhj/lbs issue view 1
```

5. Delete branch or tag
```bash
git branch -D dev
git push origin --delete dev

git tag -d v1.0
git push --delete origin v1.0
```

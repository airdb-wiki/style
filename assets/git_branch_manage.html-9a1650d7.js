import{_ as n,M as a,p as s,q as d,R as e,t as i,N as r,a1 as o}from"./framework-5866ffd3.js";const t="/style/images/git_branch.png",v={},u=e("h1",{id:"git-分支的约束和管理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-分支的约束和管理","aria-hidden":"true"},"#"),i(" Git 分支的约束和管理")],-1),c={href:"https://dxyoo7.github.io/2016/09/22/git-branch-manage/",target:"_blank",rel:"noopener noreferrer"},m=o('<h2 id="一、分支说明" tabindex="-1"><a class="header-anchor" href="#一、分支说明" aria-hidden="true">#</a> 一、分支说明</h2><ul><li>main</li></ul><blockquote><ul><li>主分支，用作生产分支，里面的代码是准备部署到生产环境的。 main 永远处于稳定状态，这个分支代码可以随时用来部署。</li><li>main 不提交代码，只合并代码。</li><li>合并代码到 main 的操作，由项目对应的集成管理员专人负责。</li><li>各分支要定期将 main 代码合并进来，避免后续分支合并到 main 时容易产生冲突，以减轻集成管理员的合并负担。</li><li>发版之前，要打 tag 。</li></ul></blockquote><ul><li>develop</li></ul><blockquote><ul><li>从哪个分支分离开来： main</li><li>可以合并到哪个分支上：release</li></ul></blockquote><p>Develop（开发）分支，包含了项目最新的功能和代码，所有开发都在 develop 上进行。一般情况下小的修改直接在这个分支上提交代码。</p><ul><li>release</li></ul><blockquote><ul><li>从哪个分支分离开来：develop</li><li>必须要合并到哪个分支上：develop 与 main</li><li>分支的命名规范：release-*</li></ul></blockquote><p>Release （发行）分支，是为发行正式的生产版本做准备。当开发的差不多了，准备发行就可以创建一个发行分支，在这个分支上可以做一些小的 bug 修复，准备发行的元数据，比如版本号，发行日期之类的。这时候，develop 分支可以继续接收新的提交，为下一个发行做准备。</p><ul><li>feat</li></ul><blockquote><ul><li>从哪个分支分离开来：develop</li><li>必须要合并到哪个分支上：develop</li><li>分支的命名规范：除了 main ，develop，release-，或者 hotfix- 以外的名字都可以</li></ul></blockquote><p>Feature（功能） 分支，有时候也叫 Topic 分支。在这种分支上去开发新的功能。当开发功能的时候，这个功能属于哪个目标发行还不知道。功能如果一直在开发，对应的这个功能分支就可以一直存在，不过到最后还是要合并到 develop 分支上，或者如果不想要开发的这个功能了，可以直接扔掉它。 Feature 分支一般只在开发者的 repo 里，而不是在 origin 上。</p><ul><li>hotfix</li></ul><blockquote><ul><li>从哪个分支分离开来： main</li><li>必须要合并到哪个分支上：develop 与 main</li><li>分支的命名规范：hotfix-*</li></ul></blockquote><p>当在生产版本上遇到 bug，你需要立即修复的时候，可以创建一个 Hotfix 分支，这个分支可以基于生产环境使用的对应的在 main 分支上的 tag 来创建。</p><ul><li>fix/bugfix</li></ul><blockquote><ul><li>从哪个分支分离开来： main</li><li>必须要合并到哪个分支上：develop 与 main</li><li>分支的命名规范：hotfix-*</li></ul></blockquote><p>等同于hotfix，只是紧急性没有hotfix那么急迫。</p><p>如下图所示： <img src="'+t+`" alt="branch"></p><h2 id="二、分支开发" tabindex="-1"><a class="header-anchor" href="#二、分支开发" aria-hidden="true">#</a> 二、分支开发</h2><p>新版本开始：每个人从最新develop上checkout一个本地分支做开发； 本阶段：禁止直接在develop上开发； 如预期需要协助，可以几个人协同一个远端分支开发；一般会在远端创建version-develop分支</p><blockquote><ul><li>开发周期：一个版本的迭代周期，我们分成3个里程碑(v1, v2, v3);</li><li>v1版本：开发完成，会merge各自分支到develop；此时develop才进入下一个开发周期； 同时发布v1包给测试； v1的Bug，大家可以选择在develop上直接修改，或者继续在各自的本地分支上修改；</li><li>v2、v3版本：建议还是在各自的本地分支上继续开发； 完成feature后，同样merge回develop；</li></ul></blockquote><h2 id="三、分支操作参考" tabindex="-1"><a class="header-anchor" href="#三、分支操作参考" aria-hidden="true">#</a> 三、分支操作参考</h2><ul><li>main</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;"># 合并release分支
git checkout main 
git pull origin main  --rebase
git merge  --no-ff  release
git tag V1.0
git push origin main 


# 或者合并hotfix分支
git checkout main 
git pull origin main  --rebase
git merge  --no-ff  release
git tag V1.1
git push origin main 
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>develop</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;"># 创建develop分支(第一次)
git checkout main 
git pull origin main  --rebase
git checkout -b develop
git push origin develop


# 合并一般的feature分支（推送到远程的feature分支）
git checkout develop
git pull origin develop --rebase
git merge  --no-ff  feature
git push origin develop


# 合并较小的feature分支（不推送到远程的feature分支）
# 1)获取最新develpo分支内容
git checkout develop
git pull origin develop --rebase
# 2）回合develop
git checkout feature
git rebase develop
# 3）merge feature
git merge  --no-ff  feature
git push origin develop
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>release</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;"># 从develop切出realse分支
git checkout -b release

# 合并develop分支
git pull origin release --rebase
git merge  --no-ff  develop
git push origin develop
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>feature</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;"># 从develop切出feature分支
1) #拉取最新develop分支代码
git checkout develop
git pull origin develop  --rebase
2）#切出新的feature分支
git checkout -b feature
3) #合并到develop(merge)
git checkout develop
git pull origin develop  --rebase
git merge --no-ff feature
git push origin develop

3) #合并到develop(rebase)
git checkout develop
git pull origin develop  --rebase
git checkout feature
git rebase develop
# 如果有冲突，修改好后，执行以下（千万不要执行git commit XX）
|| git add .
|| git rebase --continue
git checkout develop
git merge --no-ff feature
git push origin develop
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>hotfix</li></ul><h1 id="从-main-切出hotfix分支" tabindex="-1"><a class="header-anchor" href="#从-main-切出hotfix分支" aria-hidden="true">#</a> 从 main 切出hotfix分支</h1><p>git checkout main git pull origin main --rebase git checkout -b hotfix</p><h1 id="main-合并分支hotfix" tabindex="-1"><a class="header-anchor" href="#main-合并分支hotfix" aria-hidden="true">#</a> main 合并分支hotfix</h1><p>git checkout main git pull origin main --rebase git merge --no-ff hotfix git tag V1.1 git push origin main</p><h1 id="develop合并分支hotfix" tabindex="-1"><a class="header-anchor" href="#develop合并分支hotfix" aria-hidden="true">#</a> develop合并分支hotfix</h1><p>git checkout develop git pull origin develop --rebase git merge --no-ff hotfix git push origin develop</p><ul><li>bugfix</li></ul><p>同 hotfix，但不一定是从 main 分支切出.</p>`,40);function p(b,g){const l=a("ExternalLinkIcon");return s(),d("div",null,[u,e("p",null,[i("来源："),e("a",c,[i("dxyoo7"),r(l)])]),m])}const f=n(v,[["render",p],["__file","git_branch_manage.html.vue"]]);export{f as default};

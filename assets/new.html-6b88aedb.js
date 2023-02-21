import{_ as e,M as i,p as l,q as c,R as s,t as n,N as r,a1 as d}from"./framework-5866ffd3.js";const p={},t=d(`<h1 id="开发指南" tabindex="-1"><a class="header-anchor" href="#开发指南" aria-hidden="true">#</a> 开发指南</h1><h2 id="新功能开发" tabindex="-1"><a class="header-anchor" href="#新功能开发" aria-hidden="true">#</a> 新功能开发</h2><p>每次开发新的功能，都应该从主分支 (main) 分支创建一个新的分支来进行开发。</p><p>具体操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 1. 切回main 分支</span></span>
<span class="line"><span style="color:#D4D4D4;">git check main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 2. 创建新的分支</span></span>
<span class="line"><span style="color:#D4D4D4;">git checkout -b dean/feat-1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 3. 提交新的分支</span></span>
<span class="line"><span style="color:#D4D4D4;">git push</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发过程中" tabindex="-1"><a class="header-anchor" href="#开发过程中" aria-hidden="true">#</a> 开发过程中</h2><p>开发过程中，经常出现协同问题，其他人会在你的开发周期中，提交并合并代码。</p><p>同步最新代码到开发分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 1. 切换至 main 分支</span></span>
<span class="line"><span style="color:#D4D4D4;">git checkout main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 2. 合并主仓库代码</span></span>
<span class="line"><span style="color:#D4D4D4;">git rebase upstream/main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 3. 切换到开发分支</span></span>
<span class="line"><span style="color:#D4D4D4;">git checkout dean/feat-1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发完成" tabindex="-1"><a class="header-anchor" href="#开发完成" aria-hidden="true">#</a> 开发完成</h2><p>提交 PR 时，需要检查是否有多次 debug commits 等情形，如果有，则请使用 git rebase 合并 commit 保持代码 git log 干净。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 合并最近 3 次的 commit</span></span>
<span class="line"><span style="color:#D4D4D4;">git rebase -i HEAD~3 </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o={href:"https://juejin.cn/post/6844903600976576519",target:"_blank",rel:"noopener noreferrer"};function v(m,u){const a=i("ExternalLinkIcon");return l(),c("div",null,[t,s("p",null,[n("具体操作，可参考 "),s("a",o,[n("使用 git rebase 合并多次commit"),r(a)])])])}const b=e(p,[["render",v],["__file","new.html.vue"]]);export{b as default};

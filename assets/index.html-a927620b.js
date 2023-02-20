import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const l={},i=e(`<h1 id="git-and-github" tabindex="-1"><a class="header-anchor" href="#git-and-github" aria-hidden="true">#</a> Git and Github</h1><h1 id="git-and-github-使用" tabindex="-1"><a class="header-anchor" href="#git-and-github-使用" aria-hidden="true">#</a> Git and Github 使用</h1><h2 id="git-command" tabindex="-1"><a class="header-anchor" href="#git-command" aria-hidden="true">#</a> Git Command:</h2><p>将本地分支推送到远程主干分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git push origin dev:main</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>Maintain a repo without permission</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git remote add upstream https://github.com/bfenetworks/bfe.git</span></span>
<span class="line"><span style="color:#D4D4D4;">git fetch upstream</span></span>
<span class="line"><span style="color:#D4D4D4;">git checkout develop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">git merge upstream/develop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">git rebase upstream/develop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Refer: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>git config setting</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git config --global core.hooksPath .github/hooks</span></span>
<span class="line"><span style="color:#D4D4D4;">git config --global core.excludefile .gitignore_global</span></span>
<span class="line"><span style="color:#D4D4D4;">git config --global url.</span><span style="color:#CE9178;">&#39;ssh://git@github.com&#39;</span><span style="color:#D4D4D4;">.insteadOf https://github.com</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Github Commit. For Close Github Issue, commit message should as follow:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">close </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">closes </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">closed </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">fix </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">fixes </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">fixed </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">resolve </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">resolves </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">resolved </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">add new quick sort algorithm, fixes </span><span style="color:#6A9955;">#4, resolve #6, closed #12</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git submodule update --init -f  vendor/github.com/mholt/caddy</span></span>
<span class="line"><span style="color:#D4D4D4;">git remote add ups https://github.com/airdb/b</span></span>
<span class="line"><span style="color:#D4D4D4;">git push -u ups local_branch:master -f</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Github Command Line</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">brew install github/gh/gh</span></span>
<span class="line"><span style="color:#D4D4D4;">gh --repo bbhj/lbs issue status</span></span>
<span class="line"><span style="color:#D4D4D4;">gh --repo bbhj/lbs issue view 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Delete branch or tag</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git branch -D dev</span></span>
<span class="line"><span style="color:#D4D4D4;">git push origin --delete dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">git tag -d v1.0</span></span>
<span class="line"><span style="color:#D4D4D4;">git push --delete origin v1.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[i];function o(p,d){return n(),a("div",null,c)}const t=s(l,[["render",o],["__file","index.html.vue"]]);export{t as default};

import{_ as n,M as a,p as d,q as r,R as e,t as s,N as t,a1 as u}from"./framework-5866ffd3.js";const c={},l=e("h1",{id:"github-issue-的用法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-issue-的用法","aria-hidden":"true"},"#"),s(" Github Issue 的用法")],-1),o=e("hr",null,null,-1),h={href:"http://xichen.pub/2018/01/31/2018-01-31-github-issue-usage/",target:"_blank",rel:"noopener noreferrer"},p=u(`<h3 id="issues-的属性" tabindex="-1"><a class="header-anchor" href="#issues-的属性" aria-hidden="true">#</a> Issues 的属性</h3><p>GitHub 中每一个仓库都会有对应的一个issues的功能，issues 中可以新建多个 issue，每一个 issue 就像一篇文章，有标题和内容，还有评论。另外，每个issue都有唯一的编号 <code>#n</code>。 issue 可以设置: Opened 和 Closed 两种状态。</p><p>issue 还可以有额外的属性：</p><pre><code>\`Labels\`，标签。包括 \`bug\`、\`invalid\` 等，可以自定义。表示 issue 的类型，解决的方式。

\`Milestone\`，里程碑。通常用来做版本管理，v0.1、v1.0 之类的，也可以是任意自定义字符串。一个里程碑对应的所有 issue 都被关闭后，这个里程碑会被自动认为已经达成。

\`Assignee\`，责任人。指定这个 issue 由谁负责来解决。
</code></pre><h4 id="个人如何利用issues的功能" tabindex="-1"><a class="header-anchor" href="#个人如何利用issues的功能" aria-hidden="true">#</a> 个人如何利用issues的功能？</h4><p>GitHub 的 issue 功能，对个人而言，就如同 TODO list。</p><p>可以把所有想要在下一步完成的工作，如feature 添加、bug 修复等，都写成一个个的 issue ，放在上面。既可以作为提醒，也可以统一管理。 另外，每一次 commit 都可以选择性的与某个 issue 关联。比如在 message 中添加 <code>#n</code>，就可以与第 n 个 issue 进行关联。 commit message title, #1 这个提交会作为一个 comment ，出现在编号为1的 issue 记录中。 如果添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">fix #n
fixes #n
fixed #n
close #n
closes #n
closed #n
resolve #x
resolves #x
resolved #x
add new quick sort algorithm, fixes #4, resolve #6, closed #12
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>充分利用这些功能，让每一个 commit 的意义更加明确，可以起到了良好的过程管理作用，使得这个Git库的项目进度更加显然。而且，这也是项目后期，写文档的绝佳素材。</p><h3 id="团队如何利用issues的功能" tabindex="-1"><a class="header-anchor" href="#团队如何利用issues的功能" aria-hidden="true">#</a> 团队如何利用issues的功能？</h3><p>对团队而言，这就是一个协作系统。</p><p>其实，GitHub 的 issues，就是一个轻量级协作系统。它的 comment 支持GitHub Flavored Markdown，可以进行内容丰富的交流。</p><p>Git 本身就是分布式的代码版本控制软件，是为了程序员的协作而设计的。而 issues 的 Assignee 功能，就是这个在线协作系统的核心，足以让一群线上的开发者，一起完成一个软件项目。</p><h3 id="作为一个路人如何给别人的项目提bug" tabindex="-1"><a class="header-anchor" href="#作为一个路人如何给别人的项目提bug" aria-hidden="true">#</a> 作为一个路人如何给别人的项目提bug？</h3><p>用 issues 给别人的项目提 bug。</p><p>Tips: Github Project 可以转化为 issues.</p>`,16);function b(v,m){const i=a("ExternalLinkIcon");return d(),r("div",null,[l,o,e("p",null,[e("a",h,[s("Reference"),t(i)])]),p])}const x=n(c,[["render",b],["__file","issue.html.vue"]]);export{x as default};

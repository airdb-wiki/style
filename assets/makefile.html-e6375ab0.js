import{_ as s,p as n,q as a,a1 as l}from"./framework-5866ffd3.js";const e={},p=l(`<h1 id="makefile" tabindex="-1"><a class="header-anchor" href="#makefile" aria-hidden="true">#</a> Makefile</h1><h2 id="command-line-arguments" tabindex="-1"><a class="header-anchor" href="#command-line-arguments" aria-hidden="true">#</a> Command line arguments</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">myos = </span><span style="color:#CE9178;">$(word 1, </span><span style="color:#9CDCFE;">$@</span><span style="color:#CE9178;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">ifndef </span><span style="color:#9CDCFE;">$myos</span></span>
<span class="line"><span style="color:#D4D4D4;">        myos = </span><span style="color:#CE9178;">&quot;$(shell uname </span><span style="color:#D4D4D4;">|</span><span style="color:#CE9178;"> tr A-Z a-z)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">endif</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="go-makefile" tabindex="-1"><a class="header-anchor" href="#go-makefile" aria-hidden="true">#</a> Go Makefile</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">-include .env</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">VERSION := </span><span style="color:#CE9178;">$(shell git describe --tags)</span></span>
<span class="line"><span style="color:#D4D4D4;">BUILD := </span><span style="color:#CE9178;">$(shell git rev-parse --short HEAD)</span></span>
<span class="line"><span style="color:#D4D4D4;">PROJECTNAME := </span><span style="color:#CE9178;">$(shell basename &quot;$(PWD)&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Go related variables.</span></span>
<span class="line"><span style="color:#D4D4D4;">GOBASE := </span><span style="color:#CE9178;">$(shell pwd)</span></span>
<span class="line"><span style="color:#D4D4D4;">GOPATH := </span><span style="color:#CE9178;">$(GOBASE)</span><span style="color:#D4D4D4;">/vendor:</span><span style="color:#CE9178;">$(GOBASE)</span></span>
<span class="line"><span style="color:#D4D4D4;">GOBIN := </span><span style="color:#CE9178;">$(GOBASE)</span><span style="color:#D4D4D4;">/bin</span></span>
<span class="line"><span style="color:#D4D4D4;">GOFILES := </span><span style="color:#CE9178;">$(wildcard </span><span style="color:#D4D4D4;">*</span><span style="color:#CE9178;">.go)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Use linker flags to provide version/build settings</span></span>
<span class="line"><span style="color:#D4D4D4;">LDFLAGS=-ldflags </span><span style="color:#CE9178;">&quot;-X=main.Version=$(VERSION) -X=main.Build=$(BUILD)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Redirect error output to a file, so we can show it in development mode.</span></span>
<span class="line"><span style="color:#D4D4D4;">STDERR := /tmp/.</span><span style="color:#CE9178;">$(PROJECTNAME)</span><span style="color:#D4D4D4;">-stderr.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># PID file will keep the process id of the server</span></span>
<span class="line"><span style="color:#D4D4D4;">PID := /tmp/.</span><span style="color:#CE9178;">$(PROJECTNAME)</span><span style="color:#D4D4D4;">.pid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Make is verbose in Linux. Make it silent.</span></span>
<span class="line"><span style="color:#D4D4D4;">MAKEFLAGS += --silent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## install: Install missing dependencies. Runs \`go get\` internally. e.g; make install get=github.com/foo/bar</span></span>
<span class="line"><span style="color:#D4D4D4;">install: go-get</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## start: Start in development mode. Auto-starts when code changes.</span></span>
<span class="line"><span style="color:#D4D4D4;">start:</span></span>
<span class="line"><span style="color:#D4D4D4;">	@bash -c </span><span style="color:#CE9178;">&quot;trap &#39;make stop&#39; EXIT; $(MAKE) clean compile start-server watch run=&#39;make clean compile start-server&#39;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## stop: Stop development mode.</span></span>
<span class="line"><span style="color:#D4D4D4;">stop: stop-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">start-server: stop-server</span></span>
<span class="line"><span style="color:#D4D4D4;">	@echo </span><span style="color:#CE9178;">&quot;  &gt;  $(PROJECTNAME) is available at $(ADDR)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">	@-</span><span style="color:#CE9178;">$(GOBIN)</span><span style="color:#D4D4D4;">/</span><span style="color:#CE9178;">$(PROJECTNAME)</span><span style="color:#D4D4D4;"> 2&gt;&amp;1 &amp; </span><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$$</span><span style="color:#D4D4D4;">! &gt; </span><span style="color:#CE9178;">$(PID)</span></span>
<span class="line"><span style="color:#D4D4D4;">	@cat </span><span style="color:#CE9178;">$(PID)</span><span style="color:#D4D4D4;"> | sed </span><span style="color:#CE9178;">&quot;/^/s/^/  \\&gt;  PID: /&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">stop-server:</span></span>
<span class="line"><span style="color:#D4D4D4;">	@-touch </span><span style="color:#CE9178;">$(PID)</span></span>
<span class="line"><span style="color:#D4D4D4;">	@-kill </span><span style="color:#CE9178;">\`cat $(PID)\`</span><span style="color:#D4D4D4;"> 2&gt; /dev/null || </span><span style="color:#DCDCAA;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">	@-rm </span><span style="color:#CE9178;">$(PID)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## watch: Run given command when code changes. e.g; make watch run=&quot;echo &#39;hey&#39;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">watch:</span></span>
<span class="line"><span style="color:#D4D4D4;">	@GOPATH=</span><span style="color:#CE9178;">$(GOPATH)</span><span style="color:#D4D4D4;"> GOBIN=</span><span style="color:#CE9178;">$(GOBIN)</span><span style="color:#D4D4D4;"> yolo -i </span><span style="color:#DCDCAA;">.</span><span style="color:#D4D4D4;"> -e vendor -e bin -c </span><span style="color:#CE9178;">&quot;$(run)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">restart-server: stop-server start-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## compile: Compile the binary.</span></span>
<span class="line"><span style="color:#D4D4D4;">compile:</span></span>
<span class="line"><span style="color:#D4D4D4;">	@-touch </span><span style="color:#CE9178;">$(STDERR)</span></span>
<span class="line"><span style="color:#D4D4D4;">	@-rm </span><span style="color:#CE9178;">$(STDERR)</span></span>
<span class="line"><span style="color:#D4D4D4;">	@-</span><span style="color:#CE9178;">$(MAKE)</span><span style="color:#D4D4D4;"> -s go-compile 2&gt; </span><span style="color:#CE9178;">$(STDERR)</span></span>
<span class="line"><span style="color:#D4D4D4;">	@cat </span><span style="color:#CE9178;">$(STDERR)</span><span style="color:#D4D4D4;"> | sed -e </span><span style="color:#CE9178;">&#39;1s/.*/\\nError:\\n/&#39;</span><span style="color:#D4D4D4;">  | sed </span><span style="color:#CE9178;">&#39;s/make\\[.*/ /&#39;</span><span style="color:#D4D4D4;"> | sed </span><span style="color:#CE9178;">&quot;/^/s/^/     /&quot;</span><span style="color:#D4D4D4;"> 1&gt;&amp;2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## exec: Run given command, wrapped with custom GOPATH. e.g; make exec run=&quot;go test ./...&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">exec:</span></span>
<span class="line"><span style="color:#D4D4D4;">	@GOPATH=</span><span style="color:#CE9178;">$(GOPATH)</span><span style="color:#D4D4D4;"> GOBIN=</span><span style="color:#CE9178;">$(GOBIN)</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">$(run)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## clean: Clean build files. Runs \`go clean\` internally.</span></span>
<span class="line"><span style="color:#D4D4D4;">clean:</span></span>
<span class="line"><span style="color:#D4D4D4;">	@-rm </span><span style="color:#CE9178;">$(GOBIN)</span><span style="color:#D4D4D4;">/</span><span style="color:#CE9178;">$(PROJECTNAME)</span><span style="color:#D4D4D4;"> 2&gt; /dev/null</span></span>
<span class="line"><span style="color:#D4D4D4;">	@-</span><span style="color:#CE9178;">$(MAKE)</span><span style="color:#D4D4D4;"> go-clean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">go-compile: go-get go-build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">go-build:</span></span>
<span class="line"><span style="color:#D4D4D4;">	@echo </span><span style="color:#CE9178;">&quot;  &gt;  Building binary...&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">	@GOPATH=</span><span style="color:#CE9178;">$(GOPATH)</span><span style="color:#D4D4D4;"> GOBIN=</span><span style="color:#CE9178;">$(GOBIN)</span><span style="color:#D4D4D4;"> go build </span><span style="color:#CE9178;">$(LDFLAGS)</span><span style="color:#D4D4D4;"> -o </span><span style="color:#CE9178;">$(GOBIN)</span><span style="color:#D4D4D4;">/</span><span style="color:#CE9178;">$(PROJECTNAME)</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">$(GOFILES)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">go-generate:</span></span>
<span class="line"><span style="color:#D4D4D4;">	@echo </span><span style="color:#CE9178;">&quot;  &gt;  Generating dependency files...&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">	@GOPATH=</span><span style="color:#CE9178;">$(GOPATH)</span><span style="color:#D4D4D4;"> GOBIN=</span><span style="color:#CE9178;">$(GOBIN)</span><span style="color:#D4D4D4;"> go generate </span><span style="color:#CE9178;">$(generate)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">go-get:</span></span>
<span class="line"><span style="color:#D4D4D4;">	@echo </span><span style="color:#CE9178;">&quot;  &gt;  Checking if there is any missing dependencies...&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">	@GOPATH=</span><span style="color:#CE9178;">$(GOPATH)</span><span style="color:#D4D4D4;"> GOBIN=</span><span style="color:#CE9178;">$(GOBIN)</span><span style="color:#D4D4D4;"> go get </span><span style="color:#CE9178;">$(get)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">go-install:</span></span>
<span class="line"><span style="color:#D4D4D4;">	@GOPATH=</span><span style="color:#CE9178;">$(GOPATH)</span><span style="color:#D4D4D4;"> GOBIN=</span><span style="color:#CE9178;">$(GOBIN)</span><span style="color:#D4D4D4;"> go install </span><span style="color:#CE9178;">$(GOFILES)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">go-clean:</span></span>
<span class="line"><span style="color:#D4D4D4;">	@echo </span><span style="color:#CE9178;">&quot;  &gt;  Cleaning build cache&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">	@GOPATH=</span><span style="color:#CE9178;">$(GOPATH)</span><span style="color:#D4D4D4;"> GOBIN=</span><span style="color:#CE9178;">$(GOBIN)</span><span style="color:#D4D4D4;"> go clean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">.PHONY: </span><span style="color:#DCDCAA;">help</span></span>
<span class="line"><span style="color:#D4D4D4;">all: </span><span style="color:#DCDCAA;">help</span></span>
<span class="line"><span style="color:#D4D4D4;">help: Makefile</span></span>
<span class="line"><span style="color:#D4D4D4;">	@echo</span></span>
<span class="line"><span style="color:#D4D4D4;">	@echo </span><span style="color:#CE9178;">&quot; Choose a command run in &quot;$(PROJECTNAME)&quot;:&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">	@echo</span></span>
<span class="line"><span style="color:#D4D4D4;">	@sed -n </span><span style="color:#CE9178;">&#39;s/^##//p&#39;</span><span style="color:#D4D4D4;"> $&lt; | column -t -s </span><span style="color:#CE9178;">&#39;:&#39;</span><span style="color:#D4D4D4;"> |  sed -e </span><span style="color:#CE9178;">&#39;s/^/ /&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">	@echo</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function i(c,r){return n(),a("div",null,o)}const D=s(e,[["render",i],["__file","makefile.html.vue"]]);export{D as default};

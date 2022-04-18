(function(_ds){var window=this;var fM=function(){return(0,_ds.Q)('<button class="devsite-book-nav-toggle" aria-haspopup="menu"><span class="material-icons devsite-book-nav-toggle-icon"></span></button>')},gM=function(){return(0,_ds.Q)('<div class="devsite-book-nav-blur"></div>')},hM=function(a){var b=a.Do;a='<span class="devsite-nav-filter-match-count"> (<mark>';b=_ds.nx(new _ds.jx("{NUMBER_OF_MATCHING_DESCENDANTS,plural,=1{{XXX_1} match}other{{XXX_2} matches}}"),{NUMBER_OF_MATCHING_DESCENDANTS:b,XXX_1:_ds.S(_ds.eE(1)),XXX_2:_ds.S(_ds.eE(b))});
return(0,_ds.Q)(a+b+"</mark>)</span>")};var iM="onpointerover"in window?"pointerover":"mouseover",jM=function(a){const b=0<a.querySelectorAll(".devsite-nav-item").length,c=document.querySelector("#devsite-hamburger-menu");c&&(b?c.removeAttribute("visually-hidden"):_ds.D(a,"visually-hidden","",c))},rM=function(a){a.eventHandler.listen(a,"click",b=>void kM(a,b));a.eventHandler.listen(a,"keypress",b=>{13===b.keyCode&&kM(a,b)});a.eventHandler.listen(a,[iM,"focusin"],b=>void lM(a,b));a.eventHandler.listen(document.body,"devsite-sitemask-hidden",
()=>{a.v&&(mM(a,"_book")?a.removeAttribute("top-level-nav"):_ds.D(a,"top-level-nav",""))});a.eventHandler.listen(document.body,"devsite-page-loaded",()=>void a.M.va());a.eventHandler.listen(a,"devsite-content-updated",()=>{a.M.va()});a.eventHandler.listen(a,"scroll",()=>{_ds.D(a,"user-scrolled","")});a.eventHandler.listen(a.h,"click",()=>{nM(a)});a.j&&(a.eventHandler.listen(a.j,"keyup",()=>void a.N.va()),a.eventHandler.listen(a.j,"focus",()=>void oM(a,"focus")));a.F&&a.eventHandler.listen(a.F,"click",
()=>{a.j&&(a.j.value="",a.j.focus());let b;null==(b=a.F)||b.classList.add("hidden");pM(a);qM(a);oM(a,"click")})},tM=function(a,b=a,c=!0){b=Array.from(b.querySelectorAll(".devsite-nav-title"));a.G=new Set(b);if(!_ds.F().hash&&c)sM(a,a.G);else{c=new _ds.yE;for(const d of a.G)_ds.xE(c,d)}},uM=async function(a){const b=await _ds.u();for(const c of a.G)b.unregisterIntersectionForElement(c)},kM=function(a,b){if(!b.defaultPrevented){var c=b.target;"devsite-close-nav"===c.getAttribute("id")&&(b.preventDefault(),
b.stopPropagation(),a.scrollTop=0,a.hasAttribute("top-level-nav")?a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0})):_ds.D(a,"top-level-nav",""));if(c.hasAttribute("menu")){var d=c.getAttribute("menu");d&&mM(a,d)&&(b.preventDefault(),b.stopPropagation(),a.scrollTop=0,a.removeAttribute("top-level-nav"))}var e=c.closest(".devsite-expandable-nav");if(e&&(d=c.closest(".devsite-nav-title, .devsite-nav-toggle"))){let f=b.target,g,h;if(!(null==(g=f)?0:null==(h=g.closest(".devsite-nav-title"))?
0:h.hasAttribute("href"))){for(b="click"===b.type||"touchend"===b.type;f&&f!==e;){if(f.classList.contains("devsite-nav-title-no-path")&&b){f.blur();break}f=f.parentNode}e.querySelector(".devsite-nav-section")&&(b=e.classList.toggle("expanded"),(e=e.querySelector(".devsite-nav-title"))&&_ds.D(a,"aria-expanded",`${b}`,e))}if(d.matches(".devsite-nav-toggle"))return}c.closest(".devsite-nav-title-no-path")||(a.v&&(d=a.v.querySelector("[menu=_book]"))&&d.contains(c)&&a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",
{bubbles:!0})),(c=c.closest("a.devsite-nav-title"))&&!c.classList.contains("devsite-nav-has-children")&&a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0})))}},lM=function(a,b){b.defaultPrevented||(b=_ds.Yh(b.target,c=>c instanceof HTMLAnchorElement&&c.hasAttribute("href")||c===a,!0),b!==a&&_ds.yc(b,_ds.Lc(_ds.Ri(b.href).href)))},nM=async function(a){var b=document.documentElement.scrollHeight-document.documentElement.clientHeight;const c=b?document.documentElement.scrollTop/b:0;
_ds.lk(a.eventHandler,a,_ds.Xe,()=>{a.removeAttribute("animatable");a.background.removeAttribute("animatable");a.C.removeAttribute("animatable")});_ds.D(a,"animatable","");b=_ds.Bc(a.o`animatable`);b(a.background,"animatable","");b(a.C,"animatable","");a.hasAttribute("collapsed")?(_ds.D(a,"aria-expanded","true",a.h),_ds.D(a,"aria-label","Hide side navigation",a.h),_ds.D(a,"data-title","Hide side navigation",a.h),a.removeAttribute("collapsed"),vM(a,"Expanded book nav")):(a.h.removeAttribute("aria-expanded"),
_ds.D(a,"aria-label","Show side navigation",a.h),_ds.D(a,"data-title","Show side navigation",a.h),_ds.D(a,"collapsed",""),vM(a,"Collapsed book nav"));await _ds.Yi();b=document.documentElement.scrollHeight-document.documentElement.clientHeight;document.documentElement.scrollTop=Math.round(c*b)},oM=function(a,b){a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",action:b,label:"focus"===b?"devsite-book-nav-filter input":"devsite-book-nav-filter filter-clear-button"},
bubbles:!0}))},wM=function(a){a.K=Array.from(a.querySelectorAll(".devsite-mobile-nav-bottom .devsite-nav-list[menu=_book] .devsite-nav-item:not(.devsite-nav-heading)"))},yM=function(a){const b=_ds.F().searchParams.get("nf");a.j&&b&&(a.j.value=b,xM(a))},xM=function(a){if(a.K.length){pM(a);qM(a);var b,c,d=null==(b=a.j)?void 0:null==(c=b.value)?void 0:c.trim().toLowerCase();if(d){var e;null==(e=a.F)||e.classList.remove("hidden");for(const g of a.K){c=g.querySelectorAll(".devsite-nav-text");b=g.classList.contains("devsite-nav-expandable");
var f=e=!1;a=0;let h,k;if(d&&b&&(null==(h=g.querySelector(".devsite-nav-text"))?0:null==(k=h.textContent)?0:k.toLowerCase().includes(d)))f=e=!0;else for(const l of c){let m;d&&(null==(m=l.textContent)?0:m.toLowerCase().includes(d))&&(e=!0,++a)}if(!0===e){g.classList.remove("hidden");if(f){c=Array.from(g.querySelectorAll(".devsite-nav-item"));for(const l of c){l.classList.remove("hidden");let m;d&&(null==(m=l.textContent)?0:m.toLowerCase().includes(d))&&++a}}c=void 0;(f=g.querySelector(".devsite-nav-text"))&&
(e=null==(c=f.textContent)?void 0:c.replace(new RegExp(`(${d})`,"ig"),"<mark>$1</mark>"))&&_ds.zc(f,_ds.yg.h(e))}b&&0<a&&(b=g.querySelector(".devsite-nav-text"))&&(a=_ds.N(hM,{Do:a}),b.appendChild(a))}}else null==(f=a.F)||f.classList.add("hidden")}},pM=function(a){for(const b of a.K){let c;b.classList.toggle("hidden",!(null==(c=a.j)||!c.value))}},qM=function(a){if(a.querySelector("mark")){var b=[...a.querySelectorAll(".devsite-nav-text > .devsite-nav-filter-match-count")];for(const c of b)c.remove();
a=[...a.querySelectorAll(".devsite-nav-text > mark")];for(const c of a){a=c.parentElement;let d;b=null==(d=a)?void 0:d.textContent;a&&b&&_ds.zc(a,_ds.yg.h(b))}}},sM=async function(a,b){if(a.D){var c=await _ds.u(),d=new _ds.yE,e=f=>{f=f.target;_ds.xE(d,f);a.G.delete(f);c.unregisterIntersectionForElement(f)};for(const f of b)try{c.registerIntersectionForElement(f,e)}catch(g){e({target:f})}}},mM=function(a,b){let c=!1;if(a.v)for(const d of a.v.querySelectorAll("[menu]"))d.getAttribute("menu")===b?(d.removeAttribute("hidden"),
c=!0):_ds.D(a,"hidden","",d);return c},zM=function(a,b=a){b||(b=a);for(const c of b.querySelectorAll(".devsite-nav-active"))c.classList.remove("devsite-nav-active");a=_ds.dj(_ds.F().pathname);a=`[href="${_ds.Ri(a).href}"], [href="${a}"],
        [alt-paths~="${a}"]`;for(const c of b.querySelectorAll(a))c.classList.add("devsite-nav-active")},AM=function(a,b=a){b||(b=a);if(a=b.querySelector(".devsite-mobile-nav-bottom"))for(a=a.querySelector(".devsite-nav-active");a&&a.parentElement&&a.parentElement!==b;)a.matches(".devsite-expandable-nav:not(.expanded)")&&a.classList.add("expanded"),a=a.parentElement},CM=async function(a){a.D&&(a.removeAttribute("user-scrolled"),await _ds.Yi(),await BM(a),await a.T,await _ds.u(),await _ds.Yi(),await BM(a))},
BM=async function(a){if(a.D&&a.v){await _ds.u();var b=a.v.querySelector(".devsite-nav-active");b&&(a.hasAttribute("user-scrolled")||await DM(a,b))}},DM=async function(a,b){if(a.D){var c=a.hasAttribute("user-scrolled");a.scrollTop=_ds.Bk(b,a,!0).y;await _ds.Yi();c&&_ds.D(a,"user-scrolled","")}},vM=function(a,b){a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",action:"click",label:b},bubbles:!0}))},EM=class extends _ds.E{constructor(){super();
this.D=!1;this.F=this.j=this.H=this.v=null;this.K=[];this.eventHandler=new _ds.G;this.R=()=>{};this.G=new Set;this.J=this.L=!1;this.background=document.createElement("div");this.background.classList.add("devsite-book-nav-bg");this.h=_ds.N(fM);this.C=_ds.N(gM);this.T=new Promise(a=>{this.R=a});this.M=new _ds.hk(()=>{this.D&&jM(this)},20);this.N=new _ds.hk(()=>{xM(this)},20)}static get observedAttributes(){return["collapsed","fixed","hidden"]}async connectedCallback(){this.D=!0;_ds.Gg(this,this.o`animatable`,
this.o`aria-expanded`,this.o`aria-label`,this.o`collapsed`,this.o`data-title`,this.o`fixed`,this.o`has-book-nav`,this.o`hidden`,this.o`top-level-nav`,this.o`user-scrolled`,this.o`visually-hidden`);this.parentNode&&this.parentNode.insertBefore(this.background,this);this.hasAttribute("hidden")&&(_ds.D(this,"hidden","",this.h),_ds.D(this,"hidden","",this.C));const a=await _ds.u();if(this.L=a.hasFlagAccess(150)){let b;null==(b=this.parentElement)||b.insertBefore(this.h,this.nextSibling);_ds.D(this,"aria-label",
"Hide side navigation",this.h);_ds.D(this,"data-title","Hide side navigation",this.h);_ds.D(this,"aria-expanded","true",this.h);let c;null==(c=this.parentElement)||c.insertBefore(this.C,this.nextSibling)}if(this.J=a.hasFlagAccess(155))if(this.H=this.querySelector(".devsite-book-nav-filter"))this.j=this.H.querySelector("input[type=text]"),this.F=this.H.querySelector(".filter-clear-button"),wM(this),yM(this);jM(this);rM(this);await this.init();tM(this)}disconnectedCallback(){this.D=!1;_ds.I(this.eventHandler);
uM(this);this.G.clear();var a=document.querySelector("#devsite-hamburger-menu");a&&_ds.D(this,"visually-hidden","",a);a=[this.background,this.h,this.C];for(const b of a)b&&_ds.Ih(b);this.removeAttribute("animatable");this.background.removeAttribute("animatable");this.C.removeAttribute("animatable");this.C.style.removeProperty("--devsite-js-book-nav-scrollbar-width")}attributeChangedCallback(a){"hidden"===a&&this.dispatchEvent(new CustomEvent(this.hasAttribute("hidden")?"devsite-element-hidden":"devsite-element-visible",
{bubbles:!0}));if("hidden"===a||"collapsed"===a){var b=document.querySelector(".devsite-main-content");b&&(this.hasAttribute("collapsed")||this.hasAttribute("hidden")?b.removeAttribute("has-book-nav"):_ds.D(this,"has-book-nav","",b))}if("fixed"===a||"hidden"===a||"collapsed"===a){b=this.hasAttribute(a);const c=[this.background,this.h,this.C];for(const d of c)d&&(b?_ds.D(this,a,"",d):d.removeAttribute(a))}"fixed"===a&&this.R()}async init(a=!0){if(this.D){this.C.style.setProperty("--devsite-js-book-nav-scrollbar-width",
`${this.offsetWidth-this.clientWidth}px`);this.v=this.querySelector(".devsite-mobile-nav-bottom");_ds.D(this,"top-level-nav","");this.v&&this.v.querySelector("[menu=_book]")&&this.removeAttribute("top-level-nav");0===this.children.length&&_ds.D(this,"hidden","");if(this.background)for(const b of["hidden","fixed","animatable"])this.hasAttribute(b)&&_ds.D(this,b,"",this.background);!this.hasAttribute("hidden")&&a?(zM(this),AM(this),await CM(this)):(await _ds.Yi(),await BM(this))}}async bb(a){a?(a=a.querySelector("nav")||
null,zM(this,a),AM(this,a),a&&(await uM(this),this.G.clear(),tM(this,a,!1)),_ds.Jg(this,this.querySelector("nav"),a)):_ds.Gh(this);if(this.J&&(wM(this),this.j)){this.j.value="";let b;null==(b=this.F)||b.classList.add("hidden");yM(this)}await _ds.Yi();await this.init(!1)}};EM.prototype.updateContent=EM.prototype.bb;EM.prototype.attributeChangedCallback=EM.prototype.attributeChangedCallback;EM.prototype.disconnectedCallback=EM.prototype.disconnectedCallback;EM.prototype.connectedCallback=EM.prototype.connectedCallback;try{window.customElements.define("devsite-book-nav",EM)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteBookNav",a)};})(_ds_www);
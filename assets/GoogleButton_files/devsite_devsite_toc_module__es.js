(function(_ds){var window=this;var A_=function(a){var b=a.Bp,c=a.Vb,d=a.Vm;a=a.Yn;let e;e='<ul class="devsite-nav-list"><li class="devsite-nav-item devsite-nav-heading devsite-toc-toggle" role="heading" aria-level="2"><span class="devsite-nav-title"><span class="devsite-nav-text">On this page</span></span>';c&&(e=e+'<button type="button" title="'+_ds.lB("Mostrar/ocultar contenido"),e+='" class="devsite-nav-show-all button-transparent material-icons"></button>');e+="</li>";const f=b.length;for(let h=0;h<f;h++){var g=b[h];e+='<li class="devsite-nav-item"'+
(c&&g.index<a?" visible":"")+'><a href="#'+_ds.T(g.id)+'" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="'+(c?"Embedded nav":"Right nav")+'" data-value="'+_ds.T(h)+'" track-type="navigation" track-name="'+(c?"embeddedNav":"rightNav")+'" track-metadata-position="'+_ds.T(h)+'" track-metadata-link-destination="#'+_ds.T(g.id)+'"><span class="devsite-nav-text" tooltip>'+_ds.S(g.text)+"</span></a>";if(_ds.aB(g.children).length){e+='<ul class="devsite-nav-list">';
g=g.children;const k=g.length;for(let l=0;l<k;l++){const m=g[l];e+='<li class="devsite-nav-item"'+(c&&m.index<a?" visible":"")+'><a href="#'+_ds.T(m.id)+'" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="'+(c?"Embedded nav":"Right nav")+'" data-value="'+_ds.T(h)+"."+_ds.T(l)+'" track-type="navigation" track-name="'+(c?"embeddedNav":"rightNav")+'" track-metadata-position="'+_ds.T(h)+"."+_ds.T(l)+'" track-metadata-link-destination="#'+
_ds.T(m.id)+'"><span class="devsite-nav-text" tooltip>'+_ds.S(m.text)+"</span></a></li>"}e+="</ul>"}e+="</li>"}d&&(e=c?e+'<li class="devsite-nav-item devsite-apix-link"><a href="#try-it" class="devsite-nav-title"><span class="devsite-nav-text" tooltip>Probar</span></a></li>':e+'<button type="button" class="devsite-show-apix button-primary">Probar</button>');c&&(e=e+'<li class="devsite-toc-toggle"><button type="button" class="button-flat devsite-nav-more-items material-icons" track-type="navigation" track-name="embeddedNavExpand" title="'+
_ds.lB("Mostrar/ocultar contenido"),e+='"></button></li>');return(0,_ds.Q)(e+"</ul>")};var C_=function(a){if(!a.hasAttribute("disabled")){var b=document.querySelector("devsite-content .devsite-article-body");b?(a.Vb?a.classList.add("devsite-toc-embedded"):a.classList.add("devsite-toc"),B_(a,b),a.F=!0):a.Ka()}},E_=async function(a){await D_(a);if(a.h){var b=`#${a.h.id}`,c=encodeURI(b);b=a.G.get(b)||a.G.get(c);a.v!==b&&(a.v&&a.v.classList.remove("devsite-nav-active"),b&&(b.classList.add("devsite-nav-active"),a.v=b))}},F_=function(a){a.Vb||a.eventHandler.listen(document.body,"devsite-content-updated devsite-element-hidden devsite-element-visible devsite-page-loaded devsite-sticky-resize devsite-sticky-scroll".split(" "),
()=>{a.M.va()});a.eventHandler.listen(document.body,"devsite-content-updated",()=>{C_(a)})},G_=async function(a){if("IntersectionObserver"in _ds.Bh()){a.C&&a.C.disconnect();var b=document.querySelector("devsite-header");let c=152;b&&(await window.customElements.whenDefined("devsite-header"),(b=Number(b.getAttribute("top-row--height"))+Number(b.getAttribute("bottom-row--height")))&&(c=b));a.C=new IntersectionObserver(d=>{for(const e of d)e.isIntersecting?a.D.add(e.target):a.D.delete(e.target);a.M.va()},
{rootMargin:`${c}px 0px 0px 0px`,threshold:[0,1]})}a.J.h()},D_=async function(a){let b=0;var c=document.querySelector("devsite-header");c&&(await window.customElements.whenDefined("devsite-header"),b=c.C());c=a.j.findIndex(e=>a.D.has(e)&&e.getBoundingClientRect().top>=b);const d=a.j[c];if(d){const e=await H_();d.getBoundingClientRect().top-b>e&&0<c?a.h=a.j[c-1]:a.h=d}else a.h&&a.h.getBoundingClientRect().top>window.innerHeight&&(c=a.j.indexOf(a.h),0<c&&(a.h=a.j[c-1]))},B_=function(a,b){const c=[];
let d=!1,e="";switch(a.getAttribute("depth")){case "1":e="h2:not(.hide-from-toc):not(#contents):not(#table-of-contents)";break;default:e="h2:not(.hide-from-toc):not(#contents):not(#table-of-contents), h3:not(.hide-from-toc):not(#contents):not(#table-of-contents)"}a.j=[...b.querySelectorAll(e)].filter(f=>f.id&&f.dataset.text).filter(f=>I_(f));for(const [f,g]of a.j.entries())b=g,b={id:b.id,level:b.tagName.toLowerCase(),text:b.dataset.text,children:[],index:f},"h2"===b.level?(c.push(b),d=!0):d?c[c.length-
1].children.push(b):c.push(b);_ds.Xa(a.H,c,a.K.bind(a))&&a.F||(c.length?(J_(a,c),a.show(),a.Vb||K_(a)):a.Ka(),a.H=c)},I_=function(a){return _ds.ij.find(b=>!!_ds.Zh(a,null,b,6))||_ds.Zh(a,"devsite-selector",null,6)||_ds.Zh(a,null,"devsite-dialog",3)?!1:!0},J_=function(a,b){const c=_ds.N(A_,{Bp:b,Vb:a.Vb,Vm:!!document.body.querySelector("devsite-apix, .devsite-apix"),Yn:8>b.length?8:5});b=c.querySelectorAll("a.devsite-nav-title");for(const d of b){b=d;const e=b.hash,f=encodeURI(b.hash);a.G.set(e,b);
a.G.set(f,b)}_ds.Gh(a);a.Vb&&_ds.D(a,"hidden","",c);a.appendChild(c);if(a.Vb){if(8<a.getElementsByClassName("devsite-nav-item").length){for(const d of a.querySelectorAll(".devsite-nav-show-all, .devsite-nav-more-items"))a.eventHandler.listen(d,"click",()=>{a.hasAttribute("expanded")?a.removeAttribute("expanded"):_ds.D(a,"expanded","")});_ds.D(a,"expandable","")}else a.removeAttribute("expandable");setTimeout(()=>{c.removeAttribute("hidden")},0)}},K_=async function(a){await a.J.promise;if(a.C){a.C.disconnect();
a.D.clear();a.v&&a.v.classList.remove("devsite-nav-active");a.v=null;for(const b of a.j)a.C.observe(b)}},H_=async function(){let a=0,b=0;const c=document.querySelector("devsite-header");c&&(await window.customElements.whenDefined("devsite-header"),a=c.C(),b=c.J());return Math.max(b-a,Math.floor((window.innerHeight-a)/5))},L_=class extends _ds.E{constructor(){super();this.eventHandler=new _ds.G;this.J=new _ds.nk;this.D=new Set;this.G=new Map;this.R=new _ds.hk(()=>void C_(this),16);this.M=new _ds.hk(()=>
void E_(this),33);this.h=this.v=null;this.j=[];this.F=!1;this.C=null;this.Vb=!1;this.H=[];_ds.Gg(this,(0,_ds.t)`disabled`,(0,_ds.t)`has-sidebar`,(0,_ds.t)`hidden`,(0,_ds.t)`expandable`,(0,_ds.t)`expanded`,(0,_ds.t)`visible`)}static get observedAttributes(){return["max-height","offset"]}connectedCallback(){this.Vb=this.hasAttribute("devsite-toc-embedded");C_(this);F_(this)}disconnectedCallback(){this.Ka();this.F=!1;_ds.I(this.eventHandler)}Mf(a){a=a&&"false"===a.toLowerCase();this.H=[];_ds.Gh(this);
a?(_ds.D(this,"disabled",""),this.Ka()):(this.removeAttribute("disabled"),this.show(),this.R.va())}Ka(){_ds.Gh(this);this.dispatchEvent(new CustomEvent("devsite-element-hidden",{bubbles:!0}));this.removeAttribute("visible");_ds.D(this,"hidden","");if(!this.Vb){const a=document.querySelector(".devsite-main-content");a&&a.removeAttribute("has-sidebar")}}show(){this.dispatchEvent(new CustomEvent("devsite-element-visible",{bubbles:!0}));this.removeAttribute("hidden");_ds.D(this,"visible","");if(!this.Vb){const a=
document.querySelector(".devsite-main-content");a&&_ds.D(this,"has-sidebar","",a);G_(this)}}K(a,b){let c=!0;if(a.children.length||b.children.length)c=_ds.Xa(a.children,b.children,this.K.bind(this));return c&&a.id===b.id&&a.text===b.text}};L_.prototype.renderUpdatedContent=L_.prototype.Mf;L_.prototype.disconnectedCallback=L_.prototype.disconnectedCallback;L_.prototype.connectedCallback=L_.prototype.connectedCallback;try{window.customElements.define("devsite-toc",L_)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteToc",a)};})(_ds_www);
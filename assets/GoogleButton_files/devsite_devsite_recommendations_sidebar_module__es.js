(function(_ds){var window=this;var TW=function(a){var b=a.Za,c=a.oh;a='<div class="devsite-recommendations-sidebar-heading" role="heading" aria-level="2"><a href="#recommendations-link" class="devsite-nav-title devsite-recommendations-sidebar-heading-link" data-category="Site-Wide Custom Events" data-label="devsite-recommendation side-nav title" data-action="click" data-tooltip="'+_ds.lB("See content recommendations");a+='"><svg class="devsite-recommendations-sidebar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d=\'M12.5,8.5L10,3L7.5,8.5L2,11l5.5,2.5L10,19l2.5-5.5L18,11L12.5,8.5z M18,13l-1.25,2.75L14,17l2.75,1.25L18,21l1.25-2.75 L22,17l-2.75-1.25L18,13z\'/></svg><span class="devsite-nav-text devsite-nav-title">'+
_ds.S(c)+'</span></a></div><ul class="devsite-nav-list">';c=b.length;for(let d=0;d<c;d++)a+=SW(b[d]);return(0,_ds.Q)(a+"</ul>")},SW=function(a){let b="";const c=[a.getTitle(),_ds.x(a,3),_ds.x(a,4)];b+='<li role="option" class="devsite-nav-item"><a href="'+_ds.T(_ds.Y(a.getUrl()+"?"+_ds.x(a,8)))+'" class="devsite-nav-title devsite-recommendations-sidebar-title" data-category="Site-Wide Custom Events" data-label="devsite-recommendation side-nav link" data-action="click"><span class="devsite-nav-text" tooltip="">'+
_ds.S(c.filter(d=>0<(""+_ds.aB(d)).length)[0])+'</span></a><div class="significatio-card-meta">Updated <span class="significatio-date" date="'+_ds.T(_ds.xe(a,_ds.BA,7).getSeconds())+'"></span></div></li>';return(0,_ds.Q)(b)};var UW=function(a){a.eventHandler.listen(a,"click",b=>{b.target.classList.contains("devsite-nav-title")&&(b=b.target,a.j&&a.j.classList.remove("devsite-nav-active"),b.classList.add("devsite-nav-active"),a.j=b)});a.eventHandler.listen(document,"devsite-on-recommendations",b=>{b=b.Y;if(null==b?0:b.detail)if(b=b.detail,3===_ds.re(b,5,0)){a.render(b);a.h.h();if(b=null==b?void 0:_ds.eI(b)){for(const c of b)if(b=_ds.xe(c,_ds.gq,10))b={targetPage:c.getUrl(),targetRank:_ds.Ee(b,2),targetType:_ds.re(b,3,0),
targetIdenticalDescriptions:_ds.Ee(b,4),targetTitleWords:_ds.Ee(b,5),targetDescriptionWords:_ds.Ee(b,6),experiment:_ds.x(b,7)},b={category:"Site-Wide Custom Events",action:"recommended-right-nav",label:c.getUrl(),additionalParams:{recommendations:b}},a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:b,bubbles:!0}));a.v.h()}else a.v.o("empty");a.classList.add("recommendations-rendered")}else a.h.h()});a.eventHandler.listen(document.body,"devsite-recommendations-disconnected",
()=>{_ds.Gh(a);a.classList.remove("recommendations-rendered")})},VW=class extends _ds.E{constructor(a){super();this.timeZone=a;this.eventHandler=new _ds.G(this);this.h=new _ds.nk;this.loaded=this.h.promise;this.v=new _ds.nk;this.j=null}connectedCallback(){UW(this)}disconnectedCallback(){_ds.I(this.eventHandler);this.h.o("Disconnected")}render(a){if(this.isConnected){_ds.M(this,TW,{Za:_ds.eI(a),oh:_ds.x(a,6)});a=Array.from(this.querySelectorAll(".significatio-date"));for(const b of a){a=b.getAttribute("date");
try{b.textContent=(new Date(1E3*Number(a))).toLocaleDateString("default",{month:"short",year:"numeric",day:"numeric",timeZone:this.timeZone})}catch(c){}}}}};try{window.customElements.define("devsite-recommendations-sidebar",VW)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteRecommendationsSidebar",a)};})(_ds_www);

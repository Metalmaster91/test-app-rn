(function(_ds){var window=this;var LY=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="loading" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Cargando</div><div class="devsite-snackbar-action"><devsite-spinner single-color="#ffffff"></devsite-spinner></div></div></div>')},MY=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="signin-state-changed" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Your signed in state has changed.</div><button class="devsite-snackbar-action devsite-snackbar-action--reload">Reload</button><button class="devsite-snackbar-action devsite-snackbar-action--dismiss">S\u00ed</button></div></div>')},
NY=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="refresh" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Hay una nueva versi\u00f3n disponible</div><button class="devsite-snackbar-action">Actualizar</button></div></div>')},OY=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Algo no va bien. Int\u00e9ntalo de nuevo.</div><button class="devsite-snackbar-action">Reintentar</button></div></div>')},
PY=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="copied-to-clipboard" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Copiado en el portapapeles</div></div></div>')},QY=function(a){a=a||{};a=a.Sj;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Google usa cookies para ofrecer sus servicios, personalizar los anuncios y analizar el tr\u00e1fico. Puedes ajustar tus controles de privacidad cuando quieras en los <a href="//myaccount.google.com/intro/data-and-personalization">ajustes de Google</a>.</div><a href="'+
((a?_ds.T(_ds.Y(a)):"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.Q)(a+'M\u00e1s informaci\u00f3n</a><button class="devsite-snackbar-action">S\u00ed</button></div></div>')},RY=function(a){a=a||{};a=a.Sj;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Este sitio web usa cookies de Google para ofrecer sus servicios y analizar el tr\u00e1fico.</div><a href="'+
((a?_ds.T(_ds.Y(a)):"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.Q)(a+'M\u00e1s informaci\u00f3n</a><button class="devsite-snackbar-action">S\u00ed</button></div></div>')},SY=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="support-attachment-error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Tipo de archivo no admitido.</div><button class="devsite-snackbar-action">S\u00ed</button></div></div>')},
TY=function(a){var b=a.message,c=a.link,d=a.Vn;a='<div class="devsite-snackbar-snack" type="'+_ds.T(a.sp)+'" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+_ds.S(b)+'</div><button class="devsite-snackbar-action">';a=a+'No, gracias</button><a href="'+(_ds.T(_ds.Y(c))+'" class="devsite-snackbar-link button" target="_blank">');a=d?a+_ds.S(d):a+"S\u00ed";return(0,_ds.Q)(a+"</a></div></div>")},UY=function(a){var b=a.wk,c=a.link,d=a.xc,e=a.op;a='<div class="devsite-snackbar-snack" type="custom" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+
_ds.S(a.message)+"</div>";e&&(a+='<button class="devsite-snackbar-action">S\u00ed</button>');a+=(_ds.cB(c)&&_ds.cB(b)?'<a href="'+_ds.T(_ds.Y(c))+'"'+(d?' target="_blank"':"")+' class="devsite-snackbar-link button">'+_ds.S(b)+"</a>":"")+"</div></div>";return(0,_ds.Q)(a)};var XY=function(a,b,c=null,d=!1){b&&(_ds.nf(b,_ds.Xe,()=>{_ds.Ih(b);a.v=null;if(c)VY(a,c,d);else{const e=a.h.length?a.h.shift():null;null!==e&&WY(a,e)}}),b.removeAttribute("show"))},YY=function(a,b,c=!1){a.appendChild(b);window.requestAnimationFrame(()=>{VY(a,b,c)})},ZY=function(a){XY(a,a.querySelector('*[type^="cookie-notification"]'))},$Y=function(a){XY(a,a.querySelector('*[type^="support-attachment-error"]'))},aZ=function(a){XY(a,a.querySelector('*[type^="signin-state-changed"]'))},WY=function(a,
b){switch(b){case "loading":a.showLoading();break;case "refresh":bZ(a);break;case "error":cZ(a);break;case "copied-to-clipboard":var c=_ds.N(PY);YY(a,c,!0);break;case "cookie-notification":dZ(a);break;case "support-attachment-error":eZ(a);break;case "signin-state-changed":fZ(a)}if(null==b?0:b.startsWith("notification-")){c=a.getAttribute(`${b}-message`);const d=a.getAttribute(`${b}-link`),e=a.getAttribute(`${b}-link-txt`);gZ(a,b,c,d,e,a.hasAttribute(`${b}-store-key`))}},bZ=function(a){const b=_ds.N(NY);
_ds.of(b.querySelector(".devsite-snackbar-action"),"click",()=>{_ds.Bh().location.reload()});YY(a,b)},cZ=function(a){const b=_ds.N(OY);_ds.of(b.querySelector(".devsite-snackbar-action"),"click",()=>{_ds.Bh().location.reload()});YY(a,b)},dZ=function(a){if(a.j.get("devsite-eu-cookie")){var b=a.h.length?a.h.shift():null;null!==b&&WY(a,b)}else{b=RY;if(a.hasAttribute("data-cookie-notice"))switch(Number(a.getAttribute("data-cookie-notice"))){case 2:b=QY;break;default:b=RY}if(a.hasAttribute("data-cookie-policy")){const c=
a.getAttribute("data-cookie-policy");b=_ds.N(b,{Sj:c})}else b=_ds.N(b);_ds.nf(b.querySelector(".devsite-snackbar-action"),"click",()=>{a.j.set("devsite-eu-cookie","1");ZY(a)});YY(a,b)}},eZ=function(a){const b=_ds.N(SY);YY(a,b);_ds.nf(b.querySelector(".devsite-snackbar-action"),"click",()=>{$Y(a)})},fZ=function(a){aZ(a);const b=_ds.N(MY);YY(a,b,!1);_ds.of(b.querySelector(".devsite-snackbar-action--reload"),"click",async()=>{await (await _ds.u()).reload();aZ(a)});_ds.of(b.querySelector(".devsite-snackbar-action--dismiss"),
"click",async()=>{await (await _ds.u()).reload();aZ(a)})},VY=function(a,b,c=!1){window.clearTimeout(a.D);a.v?XY(a,a.v,b,c):(a.v=b,window.requestAnimationFrame(()=>{b.setAttribute("show","")}),c&&(a.D=window.setTimeout(()=>{a.removeAttribute("type");XY(a,b)},5E3)))},gZ=function(a,b,c,d,e,f){if(c&&d){const g="devsite-notification"+d;if(!f||!a.j.get(g)){b=_ds.N(TY,{sp:b,message:c,link:d,Vn:e});YY(a,b);const h=new _ds.G(b);h.listen(b,"click",k=>{k.stopPropagation();if(k.target.classList.contains("devsite-snackbar-link")||
k.target.classList.contains("devsite-snackbar-action"))f&&a.j.set(g,"1"),a.C(),_ds.I(h)})}}},hZ=class extends _ds.E{constructor(){super();this.h=[];this.D=-1;this.v=null;this.eventHandler=new _ds.G(this);this.j=new _ds.Rl}static get observedAttributes(){return["type"]}connectedCallback(){this.eventHandler.listen(document.body,"devsite-show-custom-snackbar-msg",this.G);this.eventHandler.listen(document.body,"devsite-show-notification-snackbar-msg",this.F);this.eventHandler.listen(document.body,"devsite-hide-notification-snackbar-msg",
this.C)}disconnectedCallback(){_ds.I(this.eventHandler)}G(a){this.setAttribute("type","custom");var b;if(a=null==(b=a.Y)?void 0:b.detail){b=!!a.showClose;var c=!0;a.href&&(c=(new URL(a.href)).origin!==document.location.origin);var d=_ds.N(UY,{message:a.msg,wk:a.linkText,link:a.href,xc:c,op:b});b&&_ds.nf(d.querySelector(".devsite-snackbar-action"),"click",()=>{XY(this,d)});YY(this,d,!b)}}attributeChangedCallback(a,b,c){if("type"===a){switch(b){case "loading":this.hideLoading();break;case "refresh":XY(this,
this.querySelector('*[type^="refresh"]'));break;case "error":XY(this,this.querySelector('*[type^="error"]'));break;case "copied-to-clipboard":XY(this,this.querySelector('*[type^="copied-to-clipboard"]'));break;case "cookie-notification":ZY(this);break;case "support-attachment-error":$Y(this);break;case "signin-state-changed":aZ(this);break;case "custom":XY(this,this.querySelector('*[type^="custom"]'))}null!=b&&b.startsWith("notification-")&&this.C();if(c){let d;if(null==(d=c)?0:d.includes(",")){let e;
this.h=null==(e=c)?void 0:e.split(",");c=`${this.h.shift()}`}WY(this,c)}}}showLoading(){if(!this.querySelector('*[type^="loading"]')){var a=_ds.N(LY);YY(this,a)}}hideLoading(){XY(this,this.querySelector('*[type^="loading"]'))}F(a){let b;(a=null==(b=a.Y)?void 0:b.detail)&&gZ(this,"notification-custom",a.msg,a.href,a.wk,!0)}C(){XY(this,this.querySelector('*[type^="notification"]'))}};hZ.prototype.attributeChangedCallback=hZ.prototype.attributeChangedCallback;hZ.prototype.disconnectedCallback=hZ.prototype.disconnectedCallback;
hZ.prototype.connectedCallback=hZ.prototype.connectedCallback;try{window.customElements.define("devsite-snackbar",hZ)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteSnackBar",a)};})(_ds_www);
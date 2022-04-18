(function(_ds){var window=this;var FM=function(){return(0,_ds.Q)('<input type="checkbox" class="bookmark-checkbox">')},GM=function(a){var b=a.isSignedIn;a=a.qb;let c='<devsite-dialog class="devsite-bookmark-dialog" id="devsite-bookmark-dialog"><div class="devsite-dialog-contents">';a&&(c+='<h3 class="no-link">',c=(b?c+"Create a Google Developer Profile to bookmark":c+"Sign in to bookmark")+"</h3>");c+="<p>";c=(b?a?c+"Save your frequently visited pages with a Google Developer Profile.":c+'This account is not eligible for Developer Profiles. <a href="https://developers.google.com/profile/help#i%E2%80%99m_unable_to_create_a_profile_with_my_g_suite_account_why_is_that" target="_blank">Learn more</a>':
c+"You need to be signed in to save your frequently visited pages with a Google Developer Profile.")+"</p>";b&&a&&(c+="<p>Create your Google Developer Profile.</p>");c+='</div><div class="devsite-dialog-buttons">';c=b?a?c+'<button class="button-primary create-profile">Crear perfil':c+'<button class="button-primary change-account">Cambiar de cuenta':c+'<button class="button button-primary sign-in-button">Iniciar sesi\u00f3n';return(0,_ds.Q)(c+'</button><button class="button devsite-dialog-close">Ignorar</button></div></devsite-dialog>')},
HM=function(a){var b=a.pb;a='<devsite-dialog class="devsite-bookmark-dialog" id="devsite-bookmark-create-profile-dialog"><div class="create-profile-spinner"><devsite-spinner size="48"></devsite-spinner></div><div class="devsite-dialog-contents"><h3 class="no-link">Would you like to receive emails regarding new features, events, badges, content, and research opportunities?</h3><input type="checkbox" id="devsite-bookmark-create-profile-email-opt-in"><label for="devsite-bookmark-create-profile-email-opt-in">Yes, sign me up for Google Developer emails.</label><p class="account-note">';
b='By creating a Developer Profile, you agree to the <a href="'+(_ds.T(_ds.Y(b))+'">Content Policy</a>. Google\'s <a href="https://policies.google.com/terms">Terms of Service</a> and <a href="https://policies.google.com/privacy">Privacy Policy</a> apply to your use of this service. The name on your Google Account will be used in your Google Developer Profile. It may appear where you contribute and can be changed at any time.');a=a+b+'</p></div><div class="devsite-dialog-buttons"><button class="button-primary create-profile">Create Profile';
a+='</button><button class="button devsite-dialog-close">';a+="Ignorar";a+="</button></div></devsite-dialog>";return(0,_ds.Q)(a)},IM=function(a){a='<devsite-dialog class="devsite-bookmark-dialog" id="devsite-bookmark-error-dialog"><div class="devsite-dialog-contents"><h3 class="no-link">Something went wrong</h3><p>'+(_ds.S(a.error)+'</p></div><div class="devsite-dialog-buttons"><button class="button devsite-dialog-close">');return(0,_ds.Q)(a+"Ignorar</button></div></devsite-dialog>")};var KM=async function(a){var b=new _ds.li(_ds.F().href);if(_ds.Ei(b.h,"bookmark"))await JM(a),b.h.remove("bookmark"),_ds.Li(b.toString(),!0,!1);else if(await (await _ds.u()).isSignedIn()){var c=await a.W();if(null!=c&&c.profileId){b=_ds.F().href;try{b=await _ds.Xn(b)}catch(e){}c=(null==c?void 0:c.profileId)||"";var d=new _ds.Np;try{let e;"SAVED"===(null==(e=await d.getPath({path:b,profileId:c}))?void 0:e.saveStatus)&&a.setAttribute("saved","")}catch(e){}}}},LM=function(a){if(a.C){var b=(a.C.checked=
a.v)?"Remove bookmark":"Add bookmark";a.setAttribute("data-title",b);var c;null==(c=a.C)||c.setAttribute("aria-label",b)}},MM=function(a){a.eventHandler.listen(a,"change",()=>{JM(a)})},JM=async function(a){a.toggleAttribute("saved");if(a.v){var b=await _ds.Qn("/saved-pages",void 0,void 0,!1,!0);NM(a,"Page saved.","View Saved Pages",b)}else NM(a,"Page unsaved.");b=await (await _ds.u()).isSignedIn();let c=!0;b&&(c=await a.qb());if(c){const d=await a.W();if(d){await OM(a,d);return}}a.G=PM(a,b,c);a.G.setAttribute("open",
"")},NM=function(a,b,c,d){a.dispatchEvent(new CustomEvent("devsite-show-custom-snackbar-msg",{detail:{msg:b,linkText:c,href:null==d?void 0:d.href,showClose:!1},bubbles:!0}))},OM=async function(a,b){if(null==b||!b.profileId)return null;var c=a.v?"SAVED":"UNSAVED";let d=_ds.F().href;try{d=await _ds.Xn(d)}catch(g){}const e=new _ds.Np;let f=null;try{f=await e.we({path:d,status:c,profileId:b.profileId})}catch(g){a.j=QM(a,"There was an issue saving the page."),a.j.setAttribute("open",""),a.toggleAttribute("saved")}a.dispatchEvent(new CustomEvent("devsite-analytics-observation",
{detail:{category:"Site-Wide Custom Events",action:a.v?"Saving Page to Profile":"Removing Saved Page from Profile",label:"Saving Widget"},bubbles:!0}));c=document.querySelector("devsite-user#devsite-user");b=await _ds.Qn("/saved-pages",null==b?void 0:b.profileId,null==b?void 0:b.vanityId,!1,!0);a.v&&!window.sessionStorage.getItem("devsite_bookmark_popout_shown")&&(await (null==c?void 0:c.Ce("view-bookmarked-pages",b)),window.sessionStorage.setItem("devsite_bookmark_popout_shown","true"));return f},
PM=function(a,b,c){b&&c&&RM(a,"Callout Profile intro");let d=document.body.querySelector("#devsite-bookmark-dialog");d||(d=_ds.N(GM,{isSignedIn:b,qb:c}),document.body.appendChild(d),(b=d.querySelector(".create-profile"))&&a.eventHandler.listen(b,"click",async()=>{let e;null==(e=d)||e.removeAttribute("open");a.h=await SM(a);a.h.setAttribute("open","")}),(b=d.querySelector(".sign-in-button"))&&a.eventHandler.listen(b,"click",async e=>{e.preventDefault();e.stopPropagation();e=new _ds.li(_ds.F().href);
e.h.add("bookmark",!0);_ds.Li(e.toString(),!0,!1);await (await _ds.u()).signIn()}),(b=d.querySelector(".change-account"))&&a.eventHandler.listen(b,"click",async e=>{e.preventDefault();e.stopPropagation();e=new _ds.li(_ds.F().href);e.h.add("bookmark",!0);_ds.Li(e.toString(),!0,!1);await (await _ds.u()).changeAccount()}),(b=d.querySelector(".devsite-dialog-close"))&&a.eventHandler.listen(b,"click",()=>{a.toggleAttribute("saved");RM(a,"Callout Profile dismissed")}));return d},RM=function(a,b,c){b=Object.assign({},
{category:"Site-Wide Custom Events",action:b,label:"Saving Widget Callout"},c||{});a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:b,bubbles:!0}))},SM=async function(a){RM(a,"Callout Profile displayed");var b=document.body.querySelector("#devsite-bookmark-create-profile-dialog");if(!b){b=(await _ds.On()).href;b=_ds.N(HM,{pb:b});document.body.appendChild(b);var c=b.querySelector(".create-profile");c&&a.eventHandler.listen(c,"click",()=>{a.createProfile()});(c=b.querySelector(".devsite-dialog-close"))&&
a.eventHandler.listen(c,"click",()=>{a.toggleAttribute("saved");RM(a,"Callout Profile dismissed")})}return b},QM=function(a,b){RM(a,"Callout Profile error",{label:"Saving Widget Callout Error"});a=document.body.querySelector("#devsite-bookmark-error-dialog");a||(a=_ds.N(IM,{error:b}),document.body.appendChild(a));return a},TM=class extends _ds.E{constructor(){super(["devsite-snackbar","devsite-dialog"]);this.eventHandler=new _ds.G;this.j=this.h=this.G=this.C=this.D=null;this.v=!1}static get observedAttributes(){return["saved"]}async connectedCallback(){const a=
document.body.querySelector(".devsite-page-title,.devsite-playlist-title,.devsite-quiz-title,[layout=docs] .devsite-article h1:first-of-type");if(a)if(a&&this.previousElementSibling!==a){let c;null==(c=a.parentElement)||c.insertBefore(this,a.nextSibling)}else{this.classList.add("show");await KM(this);_ds.M(this,FM);this.D=document.body.querySelector(".devsite-article");var b;null==(b=this.D)||b.setAttribute("has-bookmark","");this.C=this.querySelector(".bookmark-checkbox");LM(this);MM(this)}else this.remove()}disconnectedCallback(){_ds.I(this.eventHandler);
_ds.Ih(this.G);_ds.Ih(this.h);_ds.Ih(this.j);this.C=null;let a;null==(a=this.D)||a.removeAttribute("has-bookmark")}attributeChangedCallback(a,b,c){"saved"===a&&(this.v=null!==c,LM(this))}async createProfile(){var a=await _ds.pF.getName();if(a){var b,c=null==(b=this.h)?void 0:b.querySelector("#devsite-bookmark-create-profile-email-opt-in");b=!(!c||!c.checked);var d;null==(d=this.h)||d.classList.add("loading");c=new _ds.Jw;d=null;try{await _ds.Gw(c,a,b,!0);let f;null==(f=this.h)||f.removeAttribute("open");
d=await this.W();a=null;d&&(a=await OM(this,d));RM(this,"Callout Profile created",a&&"SAVED"===a.saveStatus?{mv:"1",Su:a.type||"UNDEFINED_TYPE"}:void 0)}catch(f){let g;null==(g=this.h)||g.removeAttribute("open");this.j=QM(this,`${f}`);this.j.setAttribute("open","");this.toggleAttribute("saved")}var e;null==(e=this.h)||e.classList.remove("loading")}else null==(c=this.h)||c.removeAttribute("open"),this.j=QM(this,"There was an issue getting your account information."),this.j.setAttribute("open",""),
this.toggleAttribute("saved")}async qb(){if(!await (await _ds.u()).isSignedIn())return!1;const a=new _ds.yw;let b=null;try{b=await a.Ta()}catch(e){}let c,d;return"ELIGIBILITY_ELIGIBLE"===(null==(c=b)?void 0:null==(d=c.createProfile)?void 0:d.status)}async W(){if(!await this.qb())return null;const a=new _ds.Jw;let b=null;try{b=await a.W()}catch(c){}return b}};try{window.customElements.define("devsite-bookmark",TM)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteBookmark",a)};})(_ds_www);
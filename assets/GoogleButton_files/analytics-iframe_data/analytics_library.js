(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k=this||self,p=function(a){return a};var aa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var q={},r=null;var t="undefined"!==typeof Uint8Array;const u="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function v(a,c){Object.isFrozen(a)||(u?a[u]|=c:void 0!==a.m?a.m|=c:Object.defineProperties(a,{m:{value:c,configurable:!0,writable:!0,enumerable:!1}}))}function w(a){let c;u?c=a[u]:c=a.m;return null==c?0:c}function x(a){v(a,1);return a}function y(a){return Array.isArray(a)?!!(w(a)&2):!1}function z(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");v(a,2)};function A(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let B;var C=Object.freeze(x([])),D=function(a){if(y(a.h))throw Error("Cannot mutate an immutable Message");},E="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function ba(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};function ca(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&t&&null!=a&&a instanceof Uint8Array){var c;void 0===c&&(c=0);if(!r){r={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=d.concat(b[e].split(""));q[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===r[h]&&(r[h]=g)}}}c=q[c];d=Array(Math.floor(a.length/3));b=c[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=
a[f],m=a[f+1];h=a[f+2];g=c[l>>2];l=c[(l&3)<<4|m>>4];m=c[(m&15)<<2|h>>6];h=c[h&63];d[e++]=""+g+l+m+h}g=0;h=b;switch(a.length-f){case 2:g=a[f+1],h=c[(g&15)<<2]||b;case 1:a=a[f],d[e]=""+c[a>>2]+c[(a&3)<<4|g>>4]+h+b}return d.join("")}}return a};function da(a,c=ea){return fa(a,c)}function ha(a,c){if(null!=a){if(Array.isArray(a))a=fa(a,c);else if(A(a)){const d={};for(let b in a)d[b]=ha(a[b],c);a=d}else a=c(a);return a}}function fa(a,c){const d=a.slice();for(let b=0;b<d.length;b++)d[b]=ha(d[b],c);Array.isArray(a)&&w(a)&1&&x(d);return d}function ia(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=ca(a);return Array.isArray(a)?da(a,ia):a}function ea(a){return t&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a};var F=function(a,c,d=!1){return-1===c?null:c>=a.l?a.i?a.i[c]:void 0:d&&a.i&&(d=a.i[c],null!=d)?d:a.h[c+a.j]},G=function(a,c,d,b=!1,e=!1){e||D(a);c<a.l&&!b?a.h[c+a.j]=d:(a.i||(a.i=a.h[a.l+a.j]={}))[c]=d;return a},H=function(a,c){a=F(a,c);a=null==a?a:!!a;return null==a?!1:a},ja=function(a,c,d=!1){G(a,c,void 0,!1,d)};function ka(a,c,d,b){D(a);d!==b?G(a,c,d):ja(a,c);return a}function I(a,c,d){return J(a,c)===d?d:-1}
var J=function(a,c){let d=0;for(let b=0;b<c.length;b++){const e=c[b];null!=F(a,e)&&(0!==d&&ja(a,d,!0),d=e)}return d},K=function(a,c,d){if(-1===d)return null;a.g||(a.g={});const b=a.g[d];if(b)return b;let e=F(a,d,!1);if(null==e)return b;c=new c(e);y(a.h)&&z(c.h);return a.g[d]=c},ma=function(a,c){var d=la;a.g||(a.g={});var b=y(a.h),e=a.g[c];if(!e){e=F(a,c,!1);null==e&&(e=C);if(y(a.h))z(e),Object.freeze(e);else if(e===C||y(e))e=x(e.slice()),G(a,c,e,!1);var f=e;e=[];b=b||y(f);for(let g=0;g<f.length;g++)e[g]=
new d(f[g]),b&&z(e[g].h);b&&(z(e),Object.freeze(e));a.g[c]=e}return e},L=function(a,c){a=F(a,c);return null==a?0:a},M=function(a,c){a=F(a,c);return null==a?"":a};var na=class{constructor(a,c,d){a||(a=N);N=null;var b=this.constructor.i;a||(a=b?[b]:[]);this.j=(b?0:-1)-(this.constructor.g||0);this.g=void 0;this.h=a;a:{b=this.h.length;a=b-1;if(b&&(b=this.h[a],A(b))){this.l=a-this.j;this.i=b;break a}void 0!==c&&-1<c?(this.l=Math.max(c,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(d)for(c=0;c<d.length;c++)if(a=d[c],a<this.l)a+=this.j,(b=this.h[a])?Array.isArray(b)&&x(b):this.h[a]=C;else{b=this.i||(this.i=this.h[this.l+this.j]={});let e=b[a];e?Array.isArray(e)&&
x(e):b[a]=C}}toJSON(){const a=this.h;return B?a:da(a,ia)}};na.prototype.toString=function(){return this.h.toString()};function oa(a,c){return ca(c)}let N;var pa=class extends na{};E&&Object.defineProperties(pa,{[Symbol.hasInstance]:ba(()=>{throw Error("Cannot perform instanceof checks for MutableMessage");})});class O extends pa{}E&&Object.defineProperties(O,{[Symbol.hasInstance]:ba(Object[Symbol.hasInstance])});var la=class extends O{constructor(a){super(a)}},P=[2,3,4];var qa=class extends O{constructor(a){super(a)}};var Q=class extends O{constructor(a){super(a)}};var ta=class extends O{constructor(a){super(a,-1,sa)}},sa=[6];var ua=class extends O{constructor(){super(void 0)}};var va=class extends O{constructor(){super(void 0)}},wa=[2];var ya=class extends O{constructor(a){super(a,-1,xa)}},xa=[2];var za=class extends O{constructor(a){super(a)}};var Aa=class extends O{constructor(a){super(a)}};var Ba=class extends O{constructor(a){super(a)}};var Ca=class extends O{constructor(a){super(a)}},R=[2,3,4,5,6,7];var S;var T=function(a,c){this.i=a===Da&&c||"";this.g=Ea},Ea={},Da={};var U=class{constructor(a,c){this.g=c===Fa?a:""}};U.prototype.toString=function(){return this.g+""};var Fa={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var V=function(){this.g=document||{cookie:""}};
V.prototype.set=function(a,c,d){let b,e,f,g=!1,h;"object"===typeof d&&(h=d.u,g=d.v||!1,f=d.domain||void 0,e=d.path||void 0,b=d.s);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(c))throw Error('Invalid cookie value "'+c+'"');void 0===b&&(b=-1);this.g.cookie=a+"="+c+(f?";domain="+f:"")+(e?";path="+e:"")+(0>b?"":0==b?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*b)).toUTCString())+(g?";secure":"")+(null!=h?";samesite="+h:"")};
V.prototype.get=function(a,c){const d=a+"=",b=(this.g.cookie||"").split(";");for(let e=0,f;e<b.length;e++){f=aa(b[e]);if(0==f.lastIndexOf(d,0))return f.slice(d.length);if(f==a)return""}return c};class W{constructor(){this.i=new V;this.g="";this.j=a=>{a:{let n;try{var c=a.data;if(null==c||""==c)n=new Ca;else{var d=JSON.parse(c);if(!Array.isArray(d)){var b=typeof d;throw Error("Expected to deserialize an Array but got "+("object"!=b?b:d?Array.isArray(d)?"array":b:"null")+": "+d);}N=d;var e=new Ca(d);N=null;n=e}}catch(ra){break a}if(4===J(n,R)){b=K(n,ta,I(n,R,4));var f=ma(b,6),g;f.length&&(g=Ga(f));f={event:M(b,1)||void 0,category:M(b,2)||void 0,action:M(b,3)||void 0,label:M(b,4)||void 0,value:L(b,
5)||void 0,nonInteraction:H(b,13)?"True":"False",additionalParams:g||void 0};if(null!=F(b,12)){var h=K(b,Q,12);f.recommendations={targetPage:M(h,1),targetType:L(h,2),targetRank:L(h,3),targetIdenticalDescriptions:L(h,4),targetTitleWords:L(h,5),targetDescriptionWords:L(h,6),experiment:M(h,7)}}else f.recommendations={targetPage:void 0,targetType:void 0,targetRank:void 0,targetIdenticalDescriptions:void 0,targetTitleWords:void 0,targetDescriptionWords:void 0};h=K(b,qa,11);if(null!=F(b,11)&&null!==h){b=
Ha(h);for(var l of Object.keys(b))f[l]=b[l]}window.dataLayer.push(f)}else if(3===J(n,R)){b=K(n,ya,I(n,R,3));f=ma(b,2);var m;f.length&&(m=Ga(f));f={event:"trackPageview",pageName:M(b,1),additionalParams:m||void 0,nonInteraction:H(b,3)||void 0,ratingsCount:L(b,4)||void 0,ratingsValue:L(b,5)||void 0};l=K(b,qa,6);if(null!=F(b,6)&&null!==l){b=Ha(l);for(h of Object.keys(b))f[h]=b[h]}window.dataLayer.push(f)}else if(7===J(n,R))b=K(n,za,I(n,R,7)),window.dataLayer.push({parentContext:{referrer:M(b,2)||"",
_ga_devsiteCookie:M(b,1)||""}});else if(6===J(n,R))b=K(n,Aa,I(n,R,6)),f=this.g,l=K(b,Q,9)||new Q,window.dataLayer.push({hostContext:{internalUser:M(b,1)||void 0,pageType:M(b,8)||void 0,projectName:M(b,6)||void 0,signedIn:M(b,2)||void 0,tenant:M(b,5)||void 0,thirdPartyCookieAccepted:f.length?"True":"False"},language:{machineTranslated:M(b,7)||void 0,requested:M(b,3)||void 0,served:M(b,4)||void 0},recommendations:{sourcePage:M(l,1),sourceType:L(l,2),sourceRank:L(l,3),sourceIdenticalDescriptions:L(l,
4),sourceTitleWords:L(l,5),sourceDescriptionWords:L(l,6),experiment:M(l,7)}});else if(5===J(n,R))b=K(n,Ba,I(n,R,5)),window.dataLayer.push({originalUrlParameters:{dclid:M(b,1)||void 0,gclid:M(b,2)||void 0,utmCampaign:M(b,3)||void 0,utmContent:M(b,4)||void 0,utmMedium:M(b,5)||void 0,utmSource:M(b,6)||void 0,utmTerm:M(b,7)||void 0}});else if(2===J(n,R)){window.dataLayer=window.dataLayer||[];window.dataLayer.push({"gtm.start":(new Date).getTime(),event:"gtm.js"});l=document.getElementsByTagName("script")[0];
h=document.createElement("script");h.async=!0;g=new T(Da,"//www.googletagmanager.com/gtm.js?id=GTM-PBZPJDG");g=g instanceof T&&g.constructor===T&&g.g===Ea?g.i:"type_error:Const";if(void 0===S)if(m=null,(d=k.trustedTypes)&&d.createPolicy){try{m=d.createPolicy("goog#html",{createHTML:p,createScript:p,createScriptURL:p})}catch(ra){k.console&&k.console.error(ra.message)}S=m}else S=m;g=(m=S)?m.createScriptURL(g):g;m=new U(g,Fa);g=h;g.src=m instanceof U&&m.constructor===U?m.g:"type_error:TrustedResourceUrl";
(b=(m=null==(f=(b=(g.ownerDocument&&g.ownerDocument.defaultView||window).document).querySelector)?void 0:f.call(b,"script[nonce]"))?m.nonce||m.getAttribute("nonce")||"":"")&&g.setAttribute("nonce",b);l.parentNode.insertBefore(h,l)}}};window.addEventListener("message",this.j)}o(a){this.g=this.i.get("_ga_devsite")||"";var c=new ua;a=ka(c,1,a,!1);var d=ka(a,2,this.g,"");a=new va;D(a);a.g||(a.g={});c=d?d.h:d;a.g[2]=d;D(a);(d=J(a,wa))&&2!==d&&null!=c&&(a.g&&d in a.g&&(a.g[d]=void 0),G(a,d));a=G(a,2,c);
if(window.parent!==window){c=window.parent;d=c.postMessage;a:{B=!0;try{var b=JSON.stringify(a.toJSON(),oa);break a}finally{B=!1}b=void 0}d.call(c,b,"*")}}}W.prototype.notifyIframeReady=W.prototype.o;function Ga(a){const c={};for(const d of a){a=M(d,1);let b;M(d,I(d,P,2))?b=M(d,I(d,P,2)):L(d,I(d,P,3))?b=L(d,I(d,P,3)):4===J(d,P)&&(b=H(d,I(d,P,4))?"True":"False");c[a]=b}return c}
function Ha(a){const c={};if(!a)return c;c.practitionerType=M(a,1)||"Property not set";c.profileCreationMethod=M(a,4)||"Property not set";c.profileBadgeEmailOptIn=H(a,5)?"True":"False";c.profileFeedbackEmailOptIn=H(a,2)?"True":"False";c.profileNewsletterEmailOptIn=H(a,3)?"True":"False";c.hasProfile=H(a,6)?"True":"False";c.profileHasLocation=H(a,7)?"True":"False";c.profileIsPublic=H(a,8)?"True":"False";c.profileHasPronoun=H(a,9)?"True":"False";c.profileHasJobTitle=H(a,10)?"True":"False";c.profileSocialLinks=
M(a,11)||"Property not set";return c}var Ia=W,X=["AnalyticsLibrary"],Y=k;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Ia?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Ia;}).call(this);

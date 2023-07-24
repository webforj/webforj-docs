"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8592],{8417:(e,t,r)=>{r.d(t,{Z:()=>ae});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,c=String.fromCharCode,i=Object.assign;function s(e){return e.trim()}function o(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function d(e){return e.length}function p(e){return e.length}function h(e,t){return t.push(e),e}var v=1,m=1,y=0,g=0,b=0,w="";function k(e,t,r,n,a,c,i){return{value:e,root:t,parent:r,type:n,props:a,children:c,line:v,column:m,length:i,return:""}}function x(e,t){return i(k("",null,null,"",null,null,0),e,{length:-e.length},t)}function O(){return b=g>0?l(w,--g):0,m--,10===b&&(m=1,v--),b}function C(){return b=g<y?l(w,g++):0,m++,10===b&&(m=1,v++),b}function E(){return l(w,g)}function $(){return g}function A(e,t){return f(w,e,t)}function S(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _(e){return v=m=1,y=d(w=e),g=0,[]}function j(e){return w="",e}function P(e){return s(A(g-1,M(91===e?e+2:40===e?e+1:e)))}function T(e){for(;(b=E())&&b<33;)C();return S(e)>2||S(b)>3?"":" "}function N(e,t){for(;--t&&C()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return A(e,$()+(t<6&&32==E()&&32==C()))}function M(e){for(;C();)switch(b){case e:return g;case 34:case 39:34!==e&&39!==e&&M(b);break;case 40:41===e&&M(e);break;case 92:C()}return g}function z(e,t){for(;C()&&e+b!==57&&(e+b!==84||47!==E()););return"/*"+A(t,g-1)+"*"+c(47===e?e:C())}function R(e){for(;!S(E());)C();return A(e,g)}var I="-ms-",D="-moz-",G="-webkit-",L="comm",Z="rule",F="decl",W="@keyframes";function q(e,t){for(var r="",n=p(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function H(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case F:return e.return=e.return||e.value;case L:return"";case W:return e.return=e.value+"{"+q(e.children,n)+"}";case Z:e.value=e.props.join(",")}return d(r=q(e.children,n))?e.return=e.value+"{"+r+"}":""}function B(e){return j(U("",null,null,null,[""],e=_(e),0,[0],e))}function U(e,t,r,n,a,i,s,f,p){for(var v=0,m=0,y=s,g=0,b=0,w=0,k=1,x=1,A=1,S=0,_="",j=a,M=i,I=n,D=_;x;)switch(w=S,S=C()){case 40:if(108!=w&&58==l(D,y-1)){-1!=u(D+=o(P(S),"&","&\f"),"&\f")&&(A=-1);break}case 34:case 39:case 91:D+=P(S);break;case 9:case 10:case 13:case 32:D+=T(w);break;case 92:D+=N($()-1,7);continue;case 47:switch(E()){case 42:case 47:h(Y(z(C(),$()),t,r),p);break;default:D+="/"}break;case 123*k:f[v++]=d(D)*A;case 125*k:case 59:case 0:switch(S){case 0:case 125:x=0;case 59+m:-1==A&&(D=o(D,/\f/g,"")),b>0&&d(D)-y&&h(b>32?J(D+";",n,r,y-1):J(o(D," ","")+";",n,r,y-2),p);break;case 59:D+=";";default:if(h(I=X(D,t,r,v,m,a,f,_,j=[],M=[],y),i),123===S)if(0===m)U(D,t,I,I,j,i,y,f,M);else switch(99===g&&110===l(D,3)?100:g){case 100:case 108:case 109:case 115:U(e,I,I,n&&h(X(e,I,I,0,0,a,f,_,a,j=[],y),M),a,M,y,f,n?j:M);break;default:U(D,I,I,I,[""],M,0,f,M)}}v=m=b=0,k=A=1,_=D="",y=s;break;case 58:y=1+d(D),b=w;default:if(k<1)if(123==S)--k;else if(125==S&&0==k++&&125==O())continue;switch(D+=c(S),S*k){case 38:A=m>0?1:(D+="\f",-1);break;case 44:f[v++]=(d(D)-1)*A,A=1;break;case 64:45===E()&&(D+=P(C())),g=E(),m=y=d(_=D+=R($())),S++;break;case 45:45===w&&2==d(D)&&(k=0)}}return i}function X(e,t,r,n,c,i,u,l,d,h,v){for(var m=c-1,y=0===c?i:[""],g=p(y),b=0,w=0,x=0;b<n;++b)for(var O=0,C=f(e,m+1,m=a(w=u[b])),E=e;O<g;++O)(E=s(w>0?y[O]+" "+C:o(C,/&\f/g,y[O])))&&(d[x++]=E);return k(e,t,r,0===c?Z:l,d,h,v)}function Y(e,t,r){return k(e,t,r,L,c(b),f(e,2,-2),0)}function J(e,t,r,n){return k(e,t,r,F,f(e,0,n),f(e,n+1,-1),n)}var K=function(e,t,r){for(var n=0,a=0;n=a,a=E(),38===n&&12===a&&(t[r]=1),!S(a);)C();return A(e,g)},Q=function(e,t){return j(function(e,t){var r=-1,n=44;do{switch(S(n)){case 0:38===n&&12===E()&&(t[r]=1),e[r]+=K(g-1,t,r);break;case 2:e[r]+=P(n);break;case 4:if(44===n){e[++r]=58===E()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=c(n)}}while(n=C());return e}(_(e),t))},V=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||V.get(r))&&!n){V.set(e,!0);for(var a=[],c=Q(t,a),i=r.props,s=0,o=0;s<c.length;s++)for(var u=0;u<i.length;u++,o++)e.props[o]=a[s]?c[s].replace(/&\f/g,i[u]):i[u]+" "+c[s]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function re(e,t){switch(function(e,t){return 45^l(e,0)?(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3):0}(e,t)){case 5103:return"-webkit-print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+D+e+I+e+e;case 6828:case 4268:return G+e+I+e+e;case 6165:return G+e+I+"flex-"+e+e;case 5187:return G+e+o(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return G+e+I+"flex-item-"+o(e,/flex-|-self/,"")+e;case 4675:return G+e+I+"flex-line-pack"+o(e,/align-content|flex-|-self/,"")+e;case 5548:return G+e+I+o(e,"shrink","negative")+e;case 5292:return G+e+I+o(e,"basis","preferred-size")+e;case 6060:return"-webkit-box-"+o(e,"-grow","")+G+e+I+o(e,"grow","positive")+e;case 4554:return G+o(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return o(o(o(e,/(zoom-|grab)/,"-webkit-$1"),/(image-set)/,"-webkit-$1"),e,"")+e;case 5495:case 3959:return o(e,/(image-set\([^]*)/,"-webkit-$1$`$1");case 4968:return o(o(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4095:case 3583:case 4068:case 2532:return o(e,/(.+)-inline(.+)/,"-webkit-$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return o(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?re(o(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return o(e,":",":-webkit-")+e;case 101:return o(e,/(.+:)([^;!]+)(;|!.+)?/,"$1-webkit-"+(45===l(e,14)?"inline-":"")+"box$3$1"+"-webkit-$2$3$1"+"-ms-$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return G+e+I+o(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+I+o(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+I+o(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return G+e+I+e+e}return e}var ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case F:e.return=re(e.value,e.length);break;case W:return q([x(e,{value:o(e.value,"@","@-webkit-")})],n);case Z:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return q([x(e,{props:[o(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return q([x(e,{props:[o(t,/:(plac\w+)/,":-webkit-input-$1")]}),x(e,{props:[o(t,/:(plac\w+)/,":-moz-$1")]}),x(e,{props:[o(t,/:(plac\w+)/,"-ms-input-$1")]})],n)}return""}))}}],ae=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||ne;var c,i,s={},o=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)s[t[r]]=!0;o.push(e)}));var u,l,f,d,h=[H,(d=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],v=(l=[ee,te].concat(a,h),f=p(l),function(e,t,r,n){for(var a="",c=0;c<f;c++)a+=l[c](e,t,r,n)||"";return a});i=function(e,t,r,n){u=r,q(B(e?e+"{"+t.styles+"}":t.styles),v),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new n({key:t,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:i};return m.sheet.hydrate(o),m}},5042:(e,t,r)=>{function n(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,{Z:()=>n})},5260:(e,t,r)=>{r.d(t,{E:()=>v,T:()=>f,c:()=>p,h:()=>o,w:()=>l});var n=r(7294),a=r(8417),c=r(444),i=r(8137),s=r(7278),o={}.hasOwnProperty,u=n.createContext("undefined"!=typeof HTMLElement?(0,a.Z)({key:"css"}):null);u.Provider;var l=function(e){return(0,n.forwardRef)((function(t,r){var a=(0,n.useContext)(u);return e(t,a,r)}))};var f=n.createContext({});var d="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",p=function(e,t){var r={};for(var n in t)o.call(t,n)&&(r[n]=t[n]);return r[d]=e,r},h=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,c.hC)(t,r,n),(0,s.L)((function(){return(0,c.My)(t,r,n)})),null};var v=l((function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var s=e[d],u=[a],l="";"string"==typeof e.className?l=(0,c.fp)(t.registered,u,e.className):null!=e.className&&(l=e.className+" ");var p=(0,i.O)(u,void 0,n.useContext(f));l+=t.key+"-"+p.name;var v={};for(var m in e)o.call(e,m)&&"css"!==m&&m!==d&&(v[m]=e[m]);return v.ref=r,v.className=l,n.createElement(n.Fragment,null,n.createElement(h,{cache:t,serialized:p,isStringTag:"string"==typeof s}),n.createElement(s,v))}))},917:(e,t,r)=>{r.d(t,{F4:()=>o,iv:()=>s,tZ:()=>i});var n=r(5260),a=r(7294),c=(r(7278),r(8137)),i=(r(8417),r(8679),function(e,t){var r=arguments;if(null==t||!n.h.call(t,"css"))return a.createElement.apply(void 0,r);var c=r.length,i=new Array(c);i[0]=n.E,i[1]=(0,n.c)(e,t);for(var s=2;s<c;s++)i[s]=r[s];return a.createElement.apply(null,i)});function s(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,c.O)(t)}var o=function(){var e=s.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},8137:(e,t,r)=>{r.d(t,{O:()=>h});var n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a=r(5042),c=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s=function(e){return 45===e.charCodeAt(1)},o=function(e){return null!=e&&"boolean"!=typeof e},u=(0,a.Z)((function(e){return s(e)?e:e.replace(c,"-$&").toLowerCase()})),l=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(i,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===n[e]||s(e)||"number"!=typeof t||0===t?t:t+"px"};function f(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=f(e,t,r[a])+";";else for(var c in r){var i=r[c];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=c+"{"+t[i]+"}":o(i)&&(n+=u(c)+":"+l(c,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=f(e,t,i);switch(c){case"animation":case"animationName":n+=u(c)+":"+s+";";break;default:n+=c+"{"+s+"}"}}else for(var d=0;d<i.length;d++)o(i[d])&&(n+=u(c)+":"+l(c,i[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=d,c=r(e);return d=a,f(e,t,c)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var d,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var h=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";d=void 0;var c=e[0];null==c||void 0===c.raw?(n=!1,a+=f(r,t,c)):a+=c[0];for(var i=1;i<e.length;i++)a+=f(r,t,e[i]),n&&(a+=c[i]);p.lastIndex=0;for(var s,o="";null!==(s=p.exec(a));)o+="-"+s[1];var u=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+o;return{name:u,styles:a,next:d}}},7278:(e,t,r)=>{var n;r.d(t,{L:()=>i});var a=r(7294),c=!!(n||(n=r.t(a,2))).useInsertionEffect&&(n||(n=r.t(a,2))).useInsertionEffect,i=c||function(e){return e()};c||a.useLayoutEffect},444:(e,t,r)=>{r.d(t,{My:()=>c,fp:()=>n,hC:()=>a});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var a=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},c=function(e,t,r){a(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var c=t;do{e.insert(t===c?"."+n:"",c,e.sheet,!0),c=c.next}while(void 0!==c)}}},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=a,h=d["".concat(o,".").concat(p)]||d[p]||f[p]||c;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
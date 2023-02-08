"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2863],{2863:(e,t,r)=>{r.d(t,{iv:()=>Pe,tZ:()=>Ne});var n=r(7294),a=r.t(n,2);var s=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),c=Math.abs,i=String.fromCharCode,o=Object.assign;function u(e){return e.trim()}function l(e,t,r){return e.replace(t,r)}function f(e,t){return e.indexOf(t)}function d(e,t){return 0|e.charCodeAt(t)}function h(e,t,r){return e.slice(t,r)}function p(e){return e.length}function v(e){return e.length}function m(e,t){return t.push(e),e}var g=1,y=1,b=0,w=0,k=0,x="";function C(e,t,r,n,a,s,c){return{value:e,root:t,parent:r,type:n,props:a,children:s,line:g,column:y,length:c,return:""}}function $(e,t){return o(C("",null,null,"",null,null,0),e,{length:-e.length},t)}function A(){return k=w>0?d(x,--w):0,y--,10===k&&(y=1,g--),k}function S(){return k=w<b?d(x,w++):0,y++,10===k&&(y=1,g++),k}function E(){return d(x,w)}function _(){return w}function O(e,t){return h(x,e,t)}function N(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(e){return g=y=1,b=p(x=e),w=0,[]}function T(e){return x="",e}function j(e){return u(O(w-1,R(91===e?e+2:40===e?e+1:e)))}function z(e){for(;(k=E())&&k<33;)S();return N(e)>2||N(k)>3?"":" "}function I(e,t){for(;--t&&S()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return O(e,_()+(t<6&&32==E()&&32==S()))}function R(e){for(;S();)switch(k){case e:return w;case 34:case 39:34!==e&&39!==e&&R(k);break;case 40:41===e&&R(e);break;case 92:S()}return w}function G(e,t){for(;S()&&e+k!==57&&(e+k!==84||47!==E()););return"/*"+O(t,w-1)+"*"+i(47===e?e:S())}function M(e){for(;!N(E());)S();return O(e,w)}var L="-ms-",W="-moz-",D="-webkit-",F="comm",q="rule",H="decl",Z="@keyframes";function B(e,t){for(var r="",n=v(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function U(e,t,r,n){switch(e.type){case"@import":case H:return e.return=e.return||e.value;case F:return"";case Z:return e.return=e.value+"{"+B(e.children,n)+"}";case q:e.value=e.props.join(",")}return p(r=B(e.children,n))?e.return=e.value+"{"+r+"}":""}function Y(e,t){switch(function(e,t){return(((t<<2^d(e,0))<<2^d(e,1))<<2^d(e,2))<<2^d(e,3)}(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+W+e+L+e+e;case 6828:case 4268:return D+e+L+e+e;case 6165:return D+e+L+"flex-"+e+e;case 5187:return D+e+l(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return D+e+L+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return D+e+L+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+L+l(e,"shrink","negative")+e;case 5292:return D+e+L+l(e,"basis","preferred-size")+e;case 6060:return D+"box-"+l(e,"-grow","")+D+e+L+l(e,"grow","positive")+e;case 4554:return D+l(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(e)-1-t>6)switch(d(e,t+1)){case 109:if(45!==d(e,t+4))break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+W+(108==d(e,t+3)?"$3":"$2-$3"))+e;case 115:return~f(e,"stretch")?Y(l(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==d(e,t+1))break;case 6444:switch(d(e,p(e)-3-(~f(e,"!important")&&10))){case 107:return l(e,":",":"+D)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(45===d(e,14)?"inline-":"")+"box$3$1"+D+"$2$3$1"+L+"$2box$3")+e}break;case 5936:switch(d(e,t+11)){case 114:return D+e+L+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+L+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+L+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+L+e+e}return e}function J(e){return T(K("",null,null,null,[""],e=P(e),0,[0],e))}function K(e,t,r,n,a,s,c,o,u){for(var d=0,h=0,v=c,g=0,y=0,b=0,w=1,k=1,x=1,C=0,$="",O=a,N=s,P=n,T=$;k;)switch(b=C,C=S()){case 40:if(108!=b&&58==T.charCodeAt(v-1)){-1!=f(T+=l(j(C),"&","&\f"),"&\f")&&(x=-1);break}case 34:case 39:case 91:T+=j(C);break;case 9:case 10:case 13:case 32:T+=z(b);break;case 92:T+=I(_()-1,7);continue;case 47:switch(E()){case 42:case 47:m(V(G(S(),_()),t,r),u);break;default:T+="/"}break;case 123*w:o[d++]=p(T)*x;case 125*w:case 59:case 0:switch(C){case 0:case 125:k=0;case 59+h:y>0&&p(T)-v&&m(y>32?X(T+";",n,r,v-1):X(l(T," ","")+";",n,r,v-2),u);break;case 59:T+=";";default:if(m(P=Q(T,t,r,d,h,a,o,$,O=[],N=[],v),s),123===C)if(0===h)K(T,t,P,P,O,s,v,o,N);else switch(g){case 100:case 109:case 115:K(e,P,P,n&&m(Q(e,P,P,0,0,a,o,$,a,O=[],v),N),a,N,v,o,n?O:N);break;default:K(T,P,P,P,[""],N,0,o,N)}}d=h=y=0,w=x=1,$=T="",v=c;break;case 58:v=1+p(T),y=b;default:if(w<1)if(123==C)--w;else if(125==C&&0==w++&&125==A())continue;switch(T+=i(C),C*w){case 38:x=h>0?1:(T+="\f",-1);break;case 44:o[d++]=(p(T)-1)*x,x=1;break;case 64:45===E()&&(T+=j(S())),g=E(),h=v=p($=T+=M(_())),C++;break;case 45:45===b&&2==p(T)&&(w=0)}}return s}function Q(e,t,r,n,a,s,i,o,f,d,p){for(var m=a-1,g=0===a?s:[""],y=v(g),b=0,w=0,k=0;b<n;++b)for(var x=0,$=h(e,m+1,m=c(w=i[b])),A=e;x<y;++x)(A=u(w>0?g[x]+" "+$:l($,/&\f/g,g[x])))&&(f[k++]=A);return C(e,t,r,0===a?q:o,f,d,p)}function V(e,t,r){return C(e,t,r,F,i(k),h(e,2,-2),0)}function X(e,t,r,n){return C(e,t,r,H,h(e,0,n),h(e,n+1,-1),n)}var ee=function(e,t,r){for(var n=0,a=0;n=a,a=E(),38===n&&12===a&&(t[r]=1),!N(a);)S();return O(e,w)},te=function(e,t){return T(function(e,t){var r=-1,n=44;do{switch(N(n)){case 0:38===n&&12===E()&&(t[r]=1),e[r]+=ee(w-1,t,r);break;case 2:e[r]+=j(n);break;case 4:if(44===n){e[++r]=58===E()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=i(n)}}while(n=S());return e}(P(e),t))},re=new WeakMap,ne=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||re.get(r))&&!n){re.set(e,!0);for(var a=[],s=te(t,a),c=r.props,i=0,o=0;i<s.length;i++)for(var u=0;u<c.length;u++,o++)e.props[o]=a[i]?s[i].replace(/&\f/g,c[u]):c[u]+" "+s[i]}}},ae=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},se=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case H:e.return=Y(e.value,e.length);break;case Z:return B([$(e,{value:l(e.value,"@","@"+D)})],n);case q:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return B([$(e,{props:[l(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return B([$(e,{props:[l(t,/:(plac\w+)/,":-webkit-input-$1")]}),$(e,{props:[l(t,/:(plac\w+)/,":-moz-$1")]}),$(e,{props:[l(t,/:(plac\w+)/,L+"input-$1")]})],n)}return""}))}}];const ce=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||se;var a,c,i={},o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)i[t[r]]=!0;o.push(e)}));var u,l,f,d,h=[U,(d=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],p=(l=[ne,ae].concat(n,h),f=v(l),function(e,t,r,n){for(var a="",s=0;s<f;s++)a+=l[s](e,t,r,n)||"";return a});c=function(e,t,r,n){u=r,B(J(e?e+"{"+t.styles+"}":t.styles),p),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new s({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:c};return m.sheet.hydrate(o),m};var ie=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)};const oe=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)};const ue={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var le=/[A-Z]|^ms/g,fe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,de=function(e){return 45===e.charCodeAt(1)},he=function(e){return null!=e&&"boolean"!=typeof e},pe=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return de(e)?e:e.replace(le,"-$&").toLowerCase()})),ve=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(fe,(function(e,t,r){return ge={name:t,styles:r,next:ge},t}))}return 1===ue[e]||de(e)||"number"!=typeof t||0===t?t:t+"px"};function me(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return ge={name:r.name,styles:r.styles,next:ge},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)ge={name:n.name,styles:n.styles,next:ge},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=me(e,t,r[a])+";";else for(var s in r){var c=r[s];if("object"!=typeof c)null!=t&&void 0!==t[c]?n+=s+"{"+t[c]+"}":he(c)&&(n+=pe(s)+":"+ve(s,c)+";");else if(!Array.isArray(c)||"string"!=typeof c[0]||null!=t&&void 0!==t[c[0]]){var i=me(e,t,c);switch(s){case"animation":case"animationName":n+=pe(s)+":"+i+";";break;default:n+=s+"{"+i+"}"}}else for(var o=0;o<c.length;o++)he(c[o])&&(n+=pe(s)+":"+ve(s,c[o])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=ge,s=r(e);return ge=a,me(e,t,s)}}if(null==t)return r;var c=t[r];return void 0!==c?c:r}var ge,ye=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var be=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";ge=void 0;var s=e[0];null==s||void 0===s.raw?(n=!1,a+=me(r,t,s)):a+=s[0];for(var c=1;c<e.length;c++)a+=me(r,t,e[c]),n&&(a+=s[c]);ye.lastIndex=0;for(var i,o="";null!==(i=ye.exec(a));)o+="-"+i[1];return{name:oe(a)+o,styles:a,next:ge}},we=!!a.useInsertionEffect&&a.useInsertionEffect,ke=we||function(e){return e()},xe=(we||n.useLayoutEffect,{}.hasOwnProperty),Ce=(0,n.createContext)("undefined"!=typeof HTMLElement?ce({key:"css"}):null);Ce.Provider;var $e=function(e){return(0,n.forwardRef)((function(t,r){var a=(0,n.useContext)(Ce);return e(t,a,r)}))},Ae=(0,n.createContext)({});var Se="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ee=function(e,t){var r={};for(var n in t)xe.call(t,n)&&(r[n]=t[n]);return r[Se]=e,r},_e=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;ie(t,r,n);ke((function(){return function(e,t,r){ie(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,r,n)}));return null},Oe=$e((function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var s=e[Se],c=[a],i="";"string"==typeof e.className?i=function(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}(t.registered,c,e.className):null!=e.className&&(i=e.className+" ");var o=be(c,void 0,(0,n.useContext)(Ae));i+=t.key+"-"+o.name;var u={};for(var l in e)xe.call(e,l)&&"css"!==l&&l!==Se&&(u[l]=e[l]);return u.ref=r,u.className=i,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(_e,{cache:t,serialized:o,isStringTag:"string"==typeof s}),(0,n.createElement)(s,u))}));r(8679);var Ne=function(e,t){var r=arguments;if(null==t||!xe.call(t,"css"))return n.createElement.apply(void 0,r);var a=r.length,s=new Array(a);s[0]=Oe,s[1]=Ee(e,t);for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)};function Pe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return be(t)}}}]);
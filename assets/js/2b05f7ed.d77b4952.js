"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,s=g["".concat(c,".").concat(d)]||g[d]||u[d]||i;return n?a.createElement(s,l(l({ref:t},h),{},{components:n})):a.createElement(s,l({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:190},l="Text Highlightable",o={unversionedId:"interfaces/text-highlightable",id:"interfaces/text-highlightable",title:"Text Highlightable",description:"Description",source:"@site/docs/interfaces/text-highlightable.md",sourceDirName:"interfaces",slug:"/interfaces/text-highlightable",permalink:"/docs/interfaces/text-highlightable",draft:!1,tags:[],version:"current",sidebarPosition:190,frontMatter:{sidebar_position:190},sidebar:"tutorialSidebar",previous:{title:"Text Alignable",permalink:"/docs/interfaces/text-alignable"}},c={},p=[{value:"Description",id:"description",level:3},{value:"At a Glance",id:"at-a-glance",level:3}],h={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"text-highlightable"},"Text Highlightable"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"A control implements the TextHighlightable interface if the text on the control is able to be highlighted. Possible values include the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Highlight Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Highlight.HIGHLIGHT_NONE"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Highlight.HIGHLIGHT_KEY"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Highlight.HIGHLIGHT_MOUSE"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Highlight.HIGHLIGHT_KEY_MOUSE"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Highlight.HIGHLIGHT_FOCUS"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Highlight.HIGHLIGHT_FOCUS_OR_KEY"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Highlight.HIGHLIGHT_FOCUS_OR_MOUSE"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Highlight.HIGHLIGHT_ALL")))))))),(0,r.kt)("h3",{id:"at-a-glance"},"At a Glance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Methods"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Highlight getHighlightOnFocus()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"TextHighlightable setHighlightOnFocus(Highlight highlight)")))))))))}u.isMDXComponent=!0}}]);
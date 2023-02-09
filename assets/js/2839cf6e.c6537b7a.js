"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[4678],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=u(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1591:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:100},l="Radio Button",i={unversionedId:"controls/radio-button",id:"controls/radio-button",title:"Radio Button",description:"At a Glance",source:"@site/docs/controls/radio-button.md",sourceDirName:"controls",slug:"/controls/radio-button",permalink:"/docs/controls/radio-button",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Progress Bar",permalink:"/docs/controls/progress-bar"},next:{title:"Slider",permalink:"/docs/controls/slider"}},p={},u=[{value:"At a Glance",id:"at-a-glance",level:3}],c={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"radio-button"},"Radio Button"),(0,r.kt)("h3",{id:"at-a-glance"},"At a Glance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parent Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Interfaces"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"AbstractDwcControl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},"HasReadOnly")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},"HasFocus")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},"HasTabTraversal"))))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Methods"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Integer getButtonID()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"HorizontalTextPosition getHorizontalTextPosition()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean isSelected()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"RadioButton setExpanse(Expanse expanse)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"RadioButton setHorizontalTextPosition(HorizontalTextPosition position)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"RadioButton setSelected(boolean selected)")))))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Events"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"RadioButton onChange(Consumer<RadioButtonCheckEvent> callback)")))))))))}d.isMDXComponent=!0}}]);
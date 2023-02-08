"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:50},o="Label",i={unversionedId:"controls/label",id:"controls/label",title:"Label",description:"At a Glance",source:"@site/docs/controls/label.md",sourceDirName:"controls",slug:"/controls/label",permalink:"/docs/controls/label",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"HTML Container",permalink:"/docs/controls/html-container"},next:{title:"List Box",permalink:"/docs/controls/list-box"}},c={},s=[{value:"At a Glance",id:"at-a-glance",level:3},{value:"Label Text",id:"label-text",level:3},{value:"Text Alignment",id:"text-alignment",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"label"},"Label"),(0,r.kt)("h3",{id:"at-a-glance"},"At a Glance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parent Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Interfaces"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"AbstractDwcControl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},"HasTextAlignment")))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Methods"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Label(String text)")))))),(0,r.kt)("h3",{id:"label-text"},"Label Text"),(0,r.kt)("p",null,"The label's text can be set either at creation using the parameterized constructor, or by utilizing the inherited ",(0,r.kt)("inlineCode",{parentName:"p"},"setText()")," method. "),(0,r.kt)("p",null,"In addition to using the label as static text, it can also be used as an HTML tag within your code. Simply set the label's text to the desired HTML tag with the various attributes, class names, etc, and\nthe label will be replaced with the desired HTML element."),(0,r.kt)("iframe",{loading:"lazy",src:"http://localhost:8888/webapp/dwcj_control_demos?class=org.dwcj.control_demos.labeldemos.LabelDemo",style:{width:"100%",height:"250px"}}),(0,r.kt)("br",null),(0,r.kt)("p",null,"To achieve the above results, execute code similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Label l1 = new Label("This is a Label component, which renders as static text on a webpage");\nLabel l2 = new Label("Below is an example of an HTML ordered list rendered purely using a Label control: ");\nLabel l3 = new Label("<html><ol><li>My First Item</li><li>My Second Item</li><li>My Third Item</li></ol><html>");\n')),(0,r.kt)("h3",{id:"text-alignment"},"Text Alignment"),(0,r.kt)("p",null,"Label text can also be aligned using the inherited alignment functionality provided with the ",(0,r.kt)("a",{parentName:"p",href:"#"},"HasTextAlignment")," interface."),(0,r.kt)("iframe",{loading:"lazy",src:"http://localhost:8888/webapp/dwcj_control_demos?class=org.dwcj.control_demos.labeldemos.LabelAlignment",style:{width:"100%",height:"400px"}}),(0,r.kt)("br",null))}d.isMDXComponent=!0}}]);
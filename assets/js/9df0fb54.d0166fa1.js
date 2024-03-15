"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1368],{3284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=r(5893),n=r(1151),s=r(9469),o=r(7796),i=r(3273);const l={sidebar_position:140,title:"TextArea",pagination_next:"styling/styling_intro"},c=void 0,d={id:"components/text-area",title:"TextArea",description:"Labeling",source:"@site/docs/components/text-area.md",sourceDirName:"components",slug:"/components/text-area",permalink:"/docs/components/text-area",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/text-area.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{sidebar_position:140,title:"TextArea",pagination_next:"styling/styling_intro"},sidebar:"documentationSidebar",previous:{title:"TabbedPane",permalink:"/docs/components/tabbedpane"},next:{title:"Styling",permalink:"/docs/styling/styling_intro"}},u={},p=[{value:"Labeling",id:"labeling",level:3},{value:"Placeholder",id:"placeholder",level:3},{value:"Spellcheck",id:"spellcheck",level:3},{value:"Expanses",id:"expanses",level:3},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{type:"engine",location:"org/dwcj/component/textarea/TextArea",top:"true"}),"\n",(0,a.jsx)(t.h3,{id:"labeling",children:"Labeling"}),"\n",(0,a.jsxs)(t.p,{children:["The text area component can be easily labeled without the needing to create an extra label component using the ",(0,a.jsx)(t.code,{children:"setAttribute()"})," method and passing the desired label as a string, as shown below: ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.textareademos.TextAreaLabel",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/textareademos/TextAreaLabel.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/textarea/Label.txt",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/textareastyles/text_area_styles.css",javaHighlight:"{15}",height:"125px"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"placeholder",children:"Placeholder"}),"\n",(0,a.jsxs)(t.p,{children:["It is also possible to set placeholder text within the component to better help users understand what type of input is expected. Similar to a label, this can be accomplished using the ",(0,a.jsx)(t.code,{children:"setAttribute()"})," method: ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.textareademos.TextAreaPlaceholder",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/textareademos/TextAreaPlaceholder.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/textarea/Placeholder.txt",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/textareastyles/text_area_styles.css",javaHighlight:"{16}",height:"125px"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"spellcheck",children:"Spellcheck"}),"\n",(0,a.jsxs)(t.p,{children:["The text area can also be configured with spellchecking to help the user improve their input. Use the ",(0,a.jsx)(t.code,{children:"setAttribute()"})," method to do this:"]}),"\n",(0,a.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.textareademos.TextAreaSpellcheck",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/textareademos/TextAreaSpellcheck.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/textarea/Spellcheck.txt",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/textareastyles/text_area_styles.css",javaHighlight:"{16}",height:"125px"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"expanses",children:"Expanses"}),"\n",(0,a.jsxs)(t.p,{children:["Webforj's text area comes with 5 expanses for quick styling without the use of CSS. Expanses are supported by use of a built-in enum class.\r\nBelow are the various expanses supported for the text area component: ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.textareademos.TextAreaExpanse",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/textareademos/TextAreaExpanse.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/textarea/Expanse.txt",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/textareastyles/text_area_styles.css",javaHighlight:"{19,23,27,31,35}",height:"200px"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"Text Area Expanses"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(t.code,{children:"TextArea.Expanse.XSMALL"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.code,{children:"TextArea.Expanse.SMALL"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.code,{children:"TextArea.Expanse.MEDIUM"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.code,{children:"TextArea.Expanse.LARGE"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.code,{children:"TextArea.Expanse.XLARGE"})})]})})})})]}),"\n",(0,a.jsx)(t.h2,{id:"parts-and-css-properties",children:"Parts and CSS Properties"}),"\n",(0,a.jsx)(o.Z,{tag:r(7099).Kx})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},6031:(e,t,r)=>{var a=r(4836);t.Z=void 0;var n=a(r(4938)),s=r(5893),o=(0,n.default)((0,s.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=o},2610:(e,t,r)=>{var a=r(4836);t.Z=void 0;var n=a(r(4938)),s=r(5893),o=(0,n.default)((0,s.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=o},5162:(e,t,r)=>{r.d(t,{Z:()=>o});r(7294);var a=r(6010);const n={tabItem:"tabItem_Ymn6"};var s=r(5893);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,o),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>j});var a=r(7294),n=r(6010),s=r(2466),o=r(6550),i=r(469),l=r(1980),c=r(7392),d=r(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:r,groupId:n}),[b,A]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),x=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),A(e)}),[u,A,s]),tabValues:s}}var A=r(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function v(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),n=i[r].value;n!==a&&(c(t),o(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,n.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function f(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(f,{...e,...t})]})}function j(e){const t=(0,A.Z)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(t))}},9469:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(7294),n=r(917),s=r(4866),o=r(5162),i=r(4673),l=r(1750),c=r(1974),d=r(7762),u=r(2143),p=r(2949),h=r(2610),m=r(5944);function b(e){let{collapse:t,setCollapse:r}=e;const a=n.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,s=n.iv`
    /* position: absolute;
    right: 0; */
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    background-color: transparent;
    margin-right: 5px;
    margin-bottom: -50px !important;
  `,o=n.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:a,children:(0,m.tZ)("button",{css:s,onClick:()=>{r(!t)},children:t?(0,m.tZ)("img",{css:o,src:d.Z,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:o,src:c.Z,className:"icon-tabler-arrow-bar-down"})})})}function A(e){let{url:t}=e;const r=n.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    justify-self: flex-end;
    margin-top: -5px;
    margin-bottom: -20px;
    background-color: transparent;
    margin-right: 12px;
  `,a=n.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,m.tZ)("button",{css:r,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:a,src:u.Z})})}function x(e){let{path:t,javaC:r,javaE:c,cssURL:d,javaHighlight:u,height:x,frame:g,tabs:v}=e;const[f,w]=(0,a.useState)(""),[j,y]=(0,a.useState)(""),[Z,S]=(0,a.useState)(""),[D,B]=(0,a.useState)(!(!r||!c)),[k,C]=(0,a.useState)(!1),[E,L]=(0,a.useState)({}),[M,T]=(0,a.useState)(!1),[V,H]=(0,a.useState)(0),[N,z]=(0,a.useState)(0),[X,O]=(0,a.useState)(25),[F,G]=(0,a.useState)(25),[J,Y]=(0,a.useState)(0),[P,I]=(0,a.useState)(!1),R=(0,a.useRef)(null),W=(0,a.useRef)(null);(0,a.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{y(e);const t=new URL(c).pathname.split("/"),r=t[t.length-1];L((e=>({...e,javaFile:r})))})),r&&fetch(r).then((e=>e.text())).then((e=>{w(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{S(e);const t=new URL(d).pathname.split("/"),r=t[t.length-1];L((e=>({...e,cssFile:r})))})),Y(R.current?R.current.offsetWidth:0)}),[]);const U=()=>{T(!1)},q=e=>{if(M){const t=e.clientX-V;N+t>J/3&&(R.current.style.width=`${N+t}px`,W.current.style.right=(X-t<25?25:X-t)+"px",G(X-t<25?25:X-t))}},K=n.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==g?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,Q=n.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,_=n.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${x||"100%"};
    pointer-events: ${M?"none":"auto"};
  `,$=n.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${k&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ee=n.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,te=n.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==g?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      /* border: none; */
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==g?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
    }

    summary {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before {
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary);
      }
    }
    .margin-top--md {
      margin-top: 0px !important;
    }
    ul {
      margin: -4px 0px !important;
    }
  `,re=n.iv`
    /* :first-child{
      margin-left: 1em;
    } */
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ae=n.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.BX)("div",{css:K,onMouseUp:U,onMouseLeave:U,onMouseMove:q,children:["hidden"!=g?(0,m.BX)("div",{onMouseEnter:()=>{C(!0)},onMouseLeave:()=>C(!1),css:Q,children:[(0,m.tZ)("iframe",{onMouseUp:U,loading:"lazy",src:t+"&__theme__="+(0,p.I)().colorMode,css:_,ref:R,onMouseMove:q}),(0,m.tZ)("div",{css:$,ref:W,children:(0,m.tZ)(A,{url:t})}),(0,m.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),T(!0),H(e.clientX),z(R.current?R.current.offsetWidth:0),O(F)},children:(0,m.tZ)(h.Z,{})})]}):null,(0,m.BX)(i.Z,{css:te,summary:(0,m.tZ)("summary",{onClick:()=>I(!P),children:P?"Hide Code":"Show Code"}),children:[r&&c?(0,m.tZ)(b,{collapse:D,setCollapse:B}):null,d?(0,m.BX)(s.Z,{css:re,children:[(0,m.tZ)(o.Z,{value:v?v[0]:"Java",label:v?v[0]:E.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ae,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?f:j})}),(0,m.tZ)(o.Z,{value:v?v[1]:"CSS",label:v?v[1]:E.cssFile,children:(0,m.tZ)(l.Z,{css:ae,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:Z})})]}):(0,m.tZ)(s.Z,{css:re,children:(0,m.tZ)(o.Z,{value:v?v[0]:"Java",label:v?v[0]:E.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ae,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?f:j})})})]})]})}},3273:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7294),n=r(917),s=r(8230),o=r(4387),i=r(6031);var l=r(5944);function c(e){let{type:t,location:r,top:c,children:d,code:u,suffix:p}=e;const[h,m]=(0,a.useState)("");(0,a.useEffect)((()=>{p||(p=""),m("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+r+".html"+p)}),[]);const b=n.iv`
    display: inline;

    ${c&&n.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,A=n.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)(s.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(o.Z,{css:A,label:"Java API",component:"a",href:h,icon:(0,l.tZ)(i.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("a",{href:h,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:h,target:"_blank",children:d})})})]})}},1415:(e,t,r)=>{r.d(t,{Z:()=>s});r(7294);var a=r(8397),n=r(5893);function s(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.Z,{...e})})}},7762:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png"},1974:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},2143:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},7099:e=>{e.exports=JSON.parse('{"LN":"dwc-app-layout","zx":"dwc-button","Kx":"dwc-textarea","XZ":"dwc-checkbox","gN":"dwc-field","iR":"dwc-slider","wb":"dwc-listbox","Z":"dwc-choicebox","Ct":"dwc-combobox","ko":"dwc-progressbar","EU":"dwc-radio","ib":"dwc-tabbed-pane","dy":"dwc-drawer","Vq":"dwc-dialog","JO":"dwc-icon"}')}}]);
"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7198],{5570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=t(5893),i=t(1151),o=t(6957),a=(t(7796),t(4904),t(3273)),s=t(2665);const l={sidebar_position:1,title:"Table"},c=void 0,d={id:"addons/table/table",title:"Table",description:"The Table class is a versatile component designed for presenting tabular information in a structured and easily understandable manner. Optimized for handling large datasets with high performance, this component offers advanced visualization and a comprehensive suite of events for dynamic user engagement.",source:"@site/docs/addons/table/table.md",sourceDirName:"addons/table",slug:"/addons/table/",permalink:"/docs/addons/table/",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/addons/table/table.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Table"},sidebar:"documentationSidebar",previous:{title:"Addons",permalink:"/docs/category/addons"},next:{title:"Columns",permalink:"/docs/addons/table/table_columns"}},u={},h=[{value:"Column Configuration",id:"column-configuration",level:2},{value:"Rich Content and Client-Side Rendering",id:"rich-content-and-client-side-rendering",level:2},{value:"Lodash Renderers",id:"lodash-renderers",level:3},{value:"Available Renderers",id:"available-renderers",level:3},{value:"Selection",id:"selection",level:2},{value:"Virtual Scrolling",id:"virtual-scrolling",level:2},{value:"Editing and refreshing",id:"editing-and-refreshing",level:2},{value:"Filtering",id:"filtering",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,r.jsx)(s.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-table",clickable:!1,iconName:"code"}),"\n",(0,r.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/button/Button",top:"true"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Table"})," class is a versatile component designed for presenting tabular information in a structured and easily understandable manner. Optimized for handling large datasets with high performance, this component offers advanced visualization and a comprehensive suite of events for dynamic user engagement."]}),"\n",(0,r.jsx)(n.p,{children:"The example below demonstrates a simple table suitable for simply displaying data without much user interaction. Many other behaviors can be enabled to enhance the user experience, which will be outlined in subsequent sections."}),"\n",(0,r.jsx)(o.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=addondemos.tabledemos.TableBasic",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/TableBasic.java",height:"600px"}),"\n",(0,r.jsx)(n.h2,{id:"column-configuration",children:"Column Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["To render the ",(0,r.jsx)(n.code,{children:"Table"})," above, use the ",(0,r.jsx)(n.code,{children:"addColumn()"})," method to delineate which columns the ",(0,r.jsx)(n.code,{children:"Table"})," should have, as well as providing data to the ",(0,r.jsx)(n.code,{children:"Table"})," using the ",(0,r.jsx)(n.code,{children:"setRepository()"})," method."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on the ",(0,r.jsx)(n.code,{children:"Column"}),", see ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/addons/table/table_columns",children:"this article"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"rich-content-and-client-side-rendering",children:"Rich Content and Client-Side Rendering"}),"\n",(0,r.jsx)(n.p,{children:"Tables in DWCj are also configurable using the following tools to display rich content within cells. This includes various multimedia elements, interactive components, or formatted data within the table cells."}),"\n",(0,r.jsxs)(n.p,{children:["These elements are rendered client-side, meaning the process of generating and displaying rich content is done directly in the browser, using JavaScript only when needed, increasing performance of applications using the ",(0,r.jsx)(n.code,{children:"Table"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"lodash-renderers",children:"Lodash Renderers"}),"\n",(0,r.jsxs)(n.p,{children:["Renderers offer a powerful mechanism for customizing the way data is displayed within a ",(0,r.jsx)(n.code,{children:"Table"}),". The primary class, ",(0,r.jsx)(n.code,{children:"Renderer"}),", is designed to be extended to create custom renderers based on lodash templates, enabling dynamic and interactive content rendering."]}),"\n",(0,r.jsx)(n.p,{children:"Lodash templates enable the insertion of JavaScript logic directly into HTML, making them highly effective for rendering complex cell data in a table. This approach allows for the dynamic generation of HTML based on cell data, facilitating rich and interactive table cell content."}),"\n",(0,r.jsx)(n.h3,{id:"available-renderers",children:"Available Renderers"}),"\n",(0,r.jsxs)(n.p,{children:["While custom renderers can be created, there are multiple pre-configured renderers available for use within a ",(0,r.jsx)(n.code,{children:"Table"}),". The following are available for developers to use out of the box without the need to create a custom renderer:"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ButtonRenderer"})," - Renderer for a DWCj button."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NativeButtonRenderer"})," - Renderer for a native HTML button."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ElementRenderer"})," - The base class for all renderers which render an HTML tag ",(0,r.jsx)(n.strong,{children:"with"})," content."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"VoidElementRenderer"})," - The base class for all renderers which render a void element, or an HTML tag ",(0,r.jsx)(n.strong,{children:"without"})," content."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"IconRenderer"})," - Renderer for an icon - ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/components/dwc-icon",children:"see this"})})," article for more information on icons."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Renderers currently come with a ",(0,r.jsx)(n.code,{children:"RendererClickEvent"})," available for use by developers, and allow for custom events to be written as well should they be needed."]}),"\n",(0,r.jsxs)(n.p,{children:["Below is an example of a ",(0,r.jsx)(n.code,{children:"Table"})," that uses renderers to display rich content:"]}),"\n",(0,r.jsx)(o.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=addondemos.tabledemos.TableRichContent",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/TableRichContent.java",height:"600px"}),"\n",(0,r.jsx)(n.h2,{id:"selection",children:"Selection"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Table"})," component provides various selection capabilities. There are methods for selecting a single item, multiple items, or programmatically managing selections. See ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/addons/table/table_selection",children:"this section"})})," for a more detailed walkthrough of selection configuration."]}),"\n",(0,r.jsx)(n.h2,{id:"virtual-scrolling",children:"Virtual Scrolling"}),"\n",(0,r.jsx)(n.h2,{id:"editing-and-refreshing",children:"Editing and refreshing"}),"\n",(0,r.jsx)(n.h2,{id:"filtering",children:"Filtering"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},6031:(e,n,t)=>{var r=t(4836);n.Z=void 0;var i=r(t(4938)),o=t(5893),a=(0,i.default)((0,o.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");n.Z=a},2610:(e,n,t)=>{var r=t(4836);n.Z=void 0;var i=r(t(4938)),o=t(5893),a=(0,i.default)((0,o.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");n.Z=a},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(6010);const i={tabItem:"tabItem_Ymn6"};var o=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7294),i=t(6010),o=t(2466),a=t(6550),s=t(469),l=t(1980),c=t(7392),d=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:t,groupId:i}),[g,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,d.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),b=(()=>{const e=c??g;return m({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var v=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=t(5893);function f(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=s[t].value;i!==r&&(c(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,A.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function x(e){const n=g(e);return(0,A.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,A.jsx)(f,{...e,...n}),(0,A.jsx)(w,{...e,...n})]})}function k(e){const n=(0,v.Z)();return(0,A.jsx)(x,{...e,children:u(e.children)},String(n))}},6957:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(7294),i=t(917),o=t(4866),a=t(5162),s=t(4673),l=t(1750);const c="data:image/png;base64,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",d=t.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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";var h=t(2949),m=t(2610),p=t(5944);function g(e){let{collapse:n,setCollapse:t}=e;const r=i.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
    `,o=i.iv`
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
  `,a=i.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,p.tZ)("div",{css:r,children:(0,p.tZ)("button",{css:o,onClick:()=>{t(!n)},children:n?(0,p.tZ)("img",{css:a,src:d,className:"icon-tabler-arrow-bar-up"}):(0,p.tZ)("img",{css:a,src:c,className:"icon-tabler-arrow-bar-down"})})})}function v(e){let{url:n}=e;const t=i.iv`
      position: relative;
      cursor: pointer;
      z-index: 10;
      height: 35px;
      width: 35px;
      border: none;
      background-color: none;
      justify-self: flex-end;
      margin-top: -5px;
      margin-bottom: -20px;
      background-color: transparent;

      
    `,r=i.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten;
        opacity: 0.5;
      }
    `;return(0,p.tZ)("button",{css:t,onClick:()=>{window.open(n,"_blank")},children:(0,p.tZ)("img",{css:r,src:u})})}function b(e){let{path:n,javaC:t,javaE:c,cssURL:d,javaHighlight:u,height:b,frame:A,tabs:f}=e;const[w,x]=(0,r.useState)(""),[k,j]=(0,r.useState)(""),[y,E]=(0,r.useState)(""),[D,Z]=(0,r.useState)(!(!t||!c)),[B,C]=(0,r.useState)(!1),[S,T]=(0,r.useState)({}),[L,M]=(0,r.useState)(!1),[O,z]=(0,r.useState)(0),[V,H]=(0,r.useState)(0),[F,N]=(0,r.useState)(25),[X,R]=(0,r.useState)(25),[J,G]=(0,r.useState)(0),[Y,I]=(0,r.useState)(!1),W=(0,r.useRef)(null),q=(0,r.useRef)(null);(0,r.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const n=new URL(c).pathname.split("/"),t=n[n.length-1];T((e=>({...e,javaFile:t})))})),t&&fetch(t).then((e=>e.text())).then((e=>{x(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{E(e);const n=new URL(d).pathname.split("/"),t=n[n.length-1];T((e=>({...e,cssFile:t})))})),G(W.current?W.current.offsetWidth:0)}),[]);const P=()=>{M(!1)},U=e=>{if(L){const n=e.clientX-O;V+n>J/3&&(W.current.style.width=`${V+n}px`,q.current.style.right=(F-n<25?25:F-n)+"px",R(F-n<25?25:F-n))}},K=i.iv`
		display: flex;
    flex-direction: column;
		width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==A?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
    `,Q=i.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,_=i.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${b||"100%"};
    pointer-events: ${L?"none":"auto"};
  `,$=i.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${B&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ee=i.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ne=i.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==A?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div{
      /* border: none; */
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type{
      border: ${"hidden"==A?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
    }

    summary{
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before{
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary)
      }
    }
    .margin-top--md{
      margin-top: 0px !important;
    }
    ul{
      margin: -4px 0px!important;
    }
    `,te=i.iv`
    /* :first-child{
      margin-left: 1em;
    } */
    li[aria-selected="true"]{
      border-color: var(--ifm-color-primary);
    }
    
    .tabs__item{
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,re=i.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,p.BX)("div",{css:K,onMouseUp:P,onMouseLeave:P,onMouseMove:U,children:["hidden"!=A?(0,p.BX)("div",{onMouseEnter:()=>{C(!0)},onMouseLeave:()=>C(!1),css:Q,children:[(0,p.tZ)("iframe",{onMouseUp:P,loading:"lazy",src:n+"&__theme__="+(0,h.I)().colorMode,css:_,ref:W,onMouseMove:U}),(0,p.tZ)("div",{css:$,ref:q,children:(0,p.tZ)(v,{url:n})}),(0,p.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),M(!0),z(e.clientX),H(W.current?W.current.offsetWidth:0),N(X)},children:(0,p.tZ)(m.Z,{})})]}):null,(0,p.BX)(s.Z,{css:ne,summary:(0,p.tZ)("summary",{onClick:()=>I(!Y),children:Y?"Hide Code":"Show Code"}),children:[t&&c?(0,p.tZ)(g,{collapse:D,setCollapse:Z}):null,d?(0,p.BX)(o.Z,{css:te,children:[(0,p.tZ)(a.Z,{value:f?f[0]:"Java",label:f?f[0]:S.javaFile,default:!0,children:(0,p.tZ)(l.Z,{css:re,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?w:k})}),(0,p.tZ)(a.Z,{value:f?f[1]:"CSS",label:f?f[1]:S.cssFile,children:(0,p.tZ)(l.Z,{css:re,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:y})})]}):(0,p.tZ)(o.Z,{css:te,children:(0,p.tZ)(a.Z,{value:f?f[0]:"Java",label:f?f[0]:S.javaFile,default:!0,children:(0,p.tZ)(l.Z,{css:re,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?w:k})})})]})]})}},4904:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(917),i=t(3273),o=t(5944);function a(e){let{base:n,events:t}=e;const a=r.iv`
    text-align: center;
  `;return(0,o.BX)("table",{children:[(0,o.tZ)("thead",{children:(0,o.BX)("tr",{children:[(0,o.tZ)("th",{children:"Event"}),(0,o.tZ)("th",{children:"Description"})]})}),n&&Object.entries({blur:{name:"BlurEvent",description:"An event that is triggered when a component loses focus.",link:"org/dwcj/component/event/BlurEvent"},focus:{name:"FocusEvent",description:"An event that is triggered when a component gains focus, opposite of a blur event.",link:"org/dwcj/component/event/FocusEvent"},mouseEnter:{name:"MouseEnterEvent",description:"An event that is triggered when the mouse cursor enters the boundaries of a component.",link:"org/dwcj/component/event/MouseEnterEvent"},mouseExit:{name:"MouseExitEvent",description:"An event that is triggered when the mouse cursor exits the boundaries of a component.",link:"org/dwcj/component/event/MouseExitEvent"},rightMouseDown:{name:"RightMouseDownEvent",description:"An event that is triggered when the user presses the right mouse button while the cursor is over a component.",link:"org/dwcj/component/event/RightMouseDownEvent"}}).map((e=>{let[n,t]=e;return(0,o.BX)("tr",{children:[(0,o.tZ)("td",{css:a,children:(0,o.tZ)(i.Z,{type:"engine",location:t.link,code:"true",children:t.name})}),(0,o.tZ)("td",{children:t.description})]},n)})),t&&Object.entries({buttonClick:{name:"ButtonClickEvent",description:"An event that is triggered when a user interacts with a button by clicking or tapping on it.",link:"org/dwcj/component/button/event/ButtonClickEvent"},check:{name:"CheckEvent",description:"An event that is triggered when the state of a component changes and becomes checked. It occurs when the user interacts with a checkbox element by clicking or tapping on it, causing the checkbox to transition from an unchecked state to a checked state.",link:"org/dwcj/component/event/CheckEvent"},uncheck:{name:"UncheckEvent",description:"An event that is triggered when the state of a component changes and becomes unchecked.",link:"org/dwcj/component/event/UncheckEvent"},toggle:{name:"ToggleEvent",description:'A ToggleEvent fires a CheckBox or a similar UI element changes its state between "on" and "off" or "active" and "inactive."',link:"org/dwcj/component/event/UncheckEvent"},dialogOpen:{name:"DialogOpenEvent",description:"An event that is fired when the Dialog is opened.",link:"org/dwcj/component/dialog/event/DialogOpenEvent"},dialogClose:{name:"DialogCloseEvent",description:"An event that is fired when the Dialog is closed.",link:"org/dwcj/component/dialog/event/DialogCloseEvent"},drawerOpen:{name:"DrawerOpenEvent",description:"An event that is fired when the Drawer is opened.",link:"org/dwcj/component/drawer/event/DrawerOpenEvent"},drawerClose:{name:"DrawerCloseEvent",description:"An event that is fired when the Drawer is closed.",link:"org/dwcj/component/drawer/event/DrawerCloseEvent"},keypress:{name:"KeypressEvent",description:'An event that is triggered when one of "special keys" is pressed while the component has focus. These keys have specific codes, allowing for conditional logic to be implemented based on the key pressed.',link:"org/dwcj/component/event/KeypressEvent"},modify:{name:"ModifyEvent",description:"An event that is triggered when an is changed or modified. It typically occurs any time a user changes an aspect of the component, such as each time a letter is input or removed from an input component.",link:"org/dwcj/component/event/ModifyEvent"},listSelect:{name:"ListSelectEvent",description:"An event which is fired when the user selects an item from a list.",link:"org/dwcj/component/list/event/ListSelectEvent"},listOpen:{name:"ListOpenEvent",description:"An event which is fired when a list dropdown is opened.",link:"org/dwcj/component/list/event/ListOpenEvent"},listClose:{name:"ListCloseEvent",description:"An event which is fired when a list dropdown is closed.",link:"org/dwcj/component/list/event/ListCloseEvent"},listClick:{name:"ListClickEvent",description:"This event is triggered when the user clicks an item from a List-based component.",link:"org/dwcj/component/list/event/ListClickEvent"}}).filter((e=>{let[n]=e;return t.includes(n)})).map((e=>{let[n,t]=e;return(0,o.BX)("tr",{children:[(0,o.tZ)("td",{css:a,children:(0,o.tZ)(i.Z,{type:"engine",location:t.link,code:"true",children:t.name})}),(0,o.tZ)("td",{children:t.description})]},n)}))]})}},3273:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(7294),i=t(917),o=t(8230),a=t(4387),s=t(6031);var l=t(5944);function c(e){let{type:n,location:t,top:c,children:d,code:u,suffix:h}=e;const[m,p]=(0,r.useState)("");(0,r.useEffect)((()=>{h||(h=""),p("https://javadoc.io/doc/org.dwcj/dwcj-"+n+"/latest/"+t+".html"+h)}),[]);const g=i.iv`
    display: inline;

    ${c&&i.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,v=i.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)(o.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(a.Z,{css:v,label:"Java API",component:"a",href:m,icon:(0,l.tZ)(s.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)("a",{href:m,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:m,target:"_blank",children:d})})})]})}},1415:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var r=t(8397),i=t(5893);function o(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{...e})})}}}]);
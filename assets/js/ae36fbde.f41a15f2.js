"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[4220],{9813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(5893),o=r(1151),a=(r(9469),r(9358));const i={sidebar_position:3,title:"Sorting",slug:"sorting"},s=void 0,l={id:"addons/table/table_sorting",title:"Sorting",description:"Sorting enables users to organize data within a column in a specific order, enhancing data readability and analysis. This is useful when users need to quickly find the highest or lowest values in a particular column.",source:"@site/docs/addons/table/table_sorting.md",sourceDirName:"addons/table",slug:"/addons/table/sorting",permalink:"/docs/addons/table/sorting",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/addons/table/table_sorting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Sorting",slug:"sorting"},sidebar:"documentationSidebar",previous:{title:"Selection",permalink:"/docs/addons/table/selection"},next:{title:"Rendering",permalink:"/docs/addons/table/rendering"}},c={},d=[{value:"Sort Direction",id:"sort-direction",level:2},{value:"Client vs. Server-side Sorting",id:"client-vs-server-side-sorting",level:2},{value:"Client Sorting",id:"client-sorting",level:3},{value:"Server Sorting",id:"server-sorting",level:3},{value:"Comparators",id:"comparators",level:4}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Sorting enables users to organize data within a column in a specific order, enhancing data readability and analysis. This is useful when users need to quickly find the highest or lowest values in a particular column."}),"\n",(0,n.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=addondemos.tabledemos.TableSorting",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/TableSorting.java",urls:["https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/MusicRecord.java","https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/Service.java"],height:"600px"}),"\n",(0,n.jsxs)(t.p,{children:["By default, a column will not be set as sortable. To change this, you can use the ",(0,n.jsx)(t.code,{children:"setSortable(boolean sortable)"})," method."]}),"\n",(0,n.jsx)(t.h2,{id:"sort-direction",children:"Sort Direction"}),"\n",(0,n.jsx)(t.p,{children:"There are three available settings for the direction in which a column can be sorted:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"SortDirection.ASC"}),": Sorts the column in ascending order."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"SortDirection.DESC"}),": Sorts the column in descending order."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"SortDirection.NONE"}),": No sorting applied to the column."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When a column has sorting enabled, you will see a set of vertical arrow indicators appear at the top of the set column. These arrows allow the user to toggle between the different sorting directions."}),"\n",(0,n.jsxs)(t.p,{children:["When ascending order is selected, a ",(0,n.jsx)(t.code,{children:"^"})," will be displayed, whereas descending order will display a ",(0,n.jsx)(t.code,{children:"v"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"client-vs-server-side-sorting",children:"Client vs. Server-side Sorting"}),"\n",(0,n.jsxs)(t.p,{children:["Sorting of data plays can be broadly categorized into two main approaches: ",(0,n.jsx)(t.strong,{children:"Client Sorting"})," and ",(0,n.jsx)(t.strong,{children:"Server Sorting"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"client-sorting",children:"Client Sorting"}),"\n",(0,n.jsx)(t.p,{children:"Client sorting involves arranging and displaying data directly within the user interface of the client application. It's the sorting users interact with when they click on column headers, influencing the visual representation of data on the screen."}),"\n",(0,n.jsxs)(t.p,{children:["The developer has no direct control over client-side sorting, but rather is determined by the column ",(0,n.jsx)(t.a,{href:"#",children:(0,n.jsx)(t.code,{children:"Type"})})," provided in Java. The following types are currently supported:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"TEXT"}),"\n",(0,n.jsx)(t.li,{children:"NUMBER"}),"\n",(0,n.jsx)(t.li,{children:"BOOLEAN"}),"\n",(0,n.jsx)(t.li,{children:"DATE"}),"\n",(0,n.jsx)(t.li,{children:"DATETIME"}),"\n",(0,n.jsx)(t.li,{children:"TIME"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Client sorting does not work when only a portion of the data is available in the client."})}),"\n",(0,n.jsx)(t.h3,{id:"server-sorting",children:"Server Sorting"}),"\n",(0,n.jsx)(t.p,{children:"In contrast to client-side sorting, server sorting entails arranging and organizing data on the server before transmitting it to the client. This approach is particularly beneficial when dealing with large datasets that might be impractical to transfer entirely to the client."}),"\n",(0,n.jsx)(t.p,{children:"Developers have more control over the logic of server sorting. This allows for the implementation of complex sorting algorithms and optimizations, making it suitable for scenarios with extensive data. This then ensures that the client receives pre-sorted data, minimizing the need for extensive client-side processing."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Server sorting is a performance-oriented strategy for dealing with datasets that exceed the capabilities of efficient client-side processing, and is the default method used by the ",(0,n.jsx)(t.code,{children:"Table"}),"."]})}),"\n",(0,n.jsx)(t.h4,{id:"comparators",children:"Comparators"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Column"})," component allows developers to use Java ",(0,n.jsx)(t.code,{children:"Comparators"})," for dynamic and custom sorting. A ",(0,n.jsx)(t.code,{children:"Comparator"})," is a mechanism used to order two objects of the same class, even if that class is user-defined. This functionality provides developers with the flexibility to customize how data is sorted, providing higher control over the default sorting behavior based on natural ordering."]}),"\n",(0,n.jsxs)(t.p,{children:["To leverage ",(0,n.jsx)(t.code,{children:"Comparator"})," sorting in a ",(0,n.jsx)(t.code,{children:"Column"}),", you can use the ",(0,n.jsx)(t.code,{children:"setComparator()"})," method. This method allows you to define a custom ",(0,n.jsx)(t.code,{children:"Comparator"})," function that dictates the sorting logic."]}),"\n",(0,n.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=addondemos.tabledemos.TableColumnComparator",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/TableColumnComparator.java",urls:["https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/MusicRecord.java","https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/Service.java"],height:"600px"}),"\n",(0,n.jsxs)(t.p,{children:["In the above example, there is a specifies a custom comparator function which takes two elements (a and b), and defines the sorting order based on the parsed integer values of the ",(0,n.jsx)(t.code,{children:"Number"})," attribute."]}),"\n",(0,n.jsx)(t.p,{children:"Using Comparators for column sorting is particularly useful when handling non-numeric values. They are also useful for implementing complex sorting algorithms."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["By default, the ",(0,n.jsx)(t.code,{children:"Table"})," uses server side sorting, and sorts non-primitive values using the ",(0,n.jsx)(t.code,{children:"toString()"})," method of Object, converting them to their string values and then sorting them."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2610:(e,t,r)=>{var n=r(4836);t.Z=void 0;var o=n(r(4938)),a=r(5893),i=(0,o.default)((0,a.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=i},5162:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var n=r(6010);const o={tabItem:"tabItem_Ymn6"};var a=r(5893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),o=r(6010),a=r(2466),i=r(6550),s=r(469),l=r(1980),c=r(7392),d=r(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const o=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:r,groupId:o}),[g,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,d.Nk)(r);return[o,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),v=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(5893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),o=s[r].value;o!==n&&(c(t),i(o))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,o.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function A(e){let{lazy:t,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...e,...t}),(0,f.jsx)(A,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(t))}},9469:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),o=r(917),a=r(4866),i=r(5162),s=r(4673),l=r(1750),c=r(1974),d=r(7762),u=r(2143),h=r(2949),p=r(2610),m=r(5944);function g(e){let{collapse:t,setCollapse:r}=e;const n=o.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,a=o.iv`
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
  `,i=o.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:n,children:(0,m.tZ)("button",{css:a,onClick:()=>{r(!t)},children:t?(0,m.tZ)("img",{css:i,src:d.Z,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:i,src:c.Z,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const r=o.iv`
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
  `,n=o.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,m.tZ)("button",{css:r,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:n,src:u.Z})})}function v(e){let{path:t,javaC:r,javaE:c,cssURL:d,javaHighlight:u,height:v,frame:f,tabs:x}=e;const[A,w]=(0,n.useState)(""),[y,j]=(0,n.useState)(""),[S,Z]=(0,n.useState)(""),[D,B]=(0,n.useState)(!(!r||!c)),[k,C]=(0,n.useState)(!1),[E,L]=(0,n.useState)({}),[N,M]=(0,n.useState)(!1),[T,z]=(0,n.useState)(0),[X,F]=(0,n.useState)(0),[O,J]=(0,n.useState)(25),[H,V]=(0,n.useState)(25),[G,Y]=(0,n.useState)(0),[I,R]=(0,n.useState)(!1),W=(0,n.useRef)(null),U=(0,n.useRef)(null);(0,n.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const t=new URL(c).pathname.split("/"),r=t[t.length-1];L((e=>({...e,javaFile:r})))})),r&&fetch(r).then((e=>e.text())).then((e=>{w(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{Z(e);const t=new URL(d).pathname.split("/"),r=t[t.length-1];L((e=>({...e,cssFile:r})))})),Y(W.current?W.current.offsetWidth:0)}),[]);const q=()=>{M(!1)},P=e=>{if(N){const t=e.clientX-T;X+t>G/3&&(W.current.style.width=`${X+t}px`,U.current.style.right=(O-t<25?25:O-t)+"px",V(O-t<25?25:O-t))}},K=o.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==f?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,Q=o.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,_=o.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${v||"100%"};
    pointer-events: ${N?"none":"auto"};
  `,$=o.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${k&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ee=o.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,te=o.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==f?"none":"1px solid var(--ifm-toc-border-color)"};
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
      border: ${"hidden"==f?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,re=o.iv`
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
  `,ne=o.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.BX)("div",{css:K,onMouseUp:q,onMouseLeave:q,onMouseMove:P,children:["hidden"!=f?(0,m.BX)("div",{onMouseEnter:()=>{C(!0)},onMouseLeave:()=>C(!1),css:Q,children:[(0,m.tZ)("iframe",{onMouseUp:q,loading:"lazy",src:t+"&__theme__="+(0,h.I)().colorMode,css:_,ref:W,onMouseMove:P}),(0,m.tZ)("div",{css:$,ref:U,children:(0,m.tZ)(b,{url:t})}),(0,m.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),M(!0),z(e.clientX),F(W.current?W.current.offsetWidth:0),J(H)},children:(0,m.tZ)(p.Z,{})})]}):null,(0,m.BX)(s.Z,{css:te,summary:(0,m.tZ)("summary",{onClick:()=>R(!I),children:I?"Hide Code":"Show Code"}),children:[r&&c?(0,m.tZ)(g,{collapse:D,setCollapse:B}):null,d?(0,m.BX)(a.Z,{css:re,children:[(0,m.tZ)(i.Z,{value:x?x[0]:"Java",label:x?x[0]:E.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?A:y})}),(0,m.tZ)(i.Z,{value:x?x[1]:"CSS",label:x?x[1]:E.cssFile,children:(0,m.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:S})})]}):(0,m.tZ)(a.Z,{css:re,children:(0,m.tZ)(i.Z,{value:x?x[0]:"Java",label:x?x[0]:E.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?A:y})})})]})]})}},9358:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),o=r(917),a=r(4866),i=r(5162),s=r(4673),l=r(1750),c=r(1974),d=r(7762),u=r(2143),h=r(2949),p=r(2610),m=r(5944);function g(e){let{collapse:t,setCollapse:r}=e;const n=o.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,a=o.iv`
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
  `,i=o.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:n,children:(0,m.tZ)("button",{css:a,onClick:()=>{r(!t)},children:t?(0,m.tZ)("img",{css:i,src:d.Z,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:i,src:c.Z,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const r=o.iv`
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
  `,n=o.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,m.tZ)("button",{css:r,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:n,src:u.Z})})}function v(e){let{path:t,javaC:r,javaE:c,urls:d,cssURL:u,javaHighlight:v,height:f,frame:x,tabs:A}=e;const[w,y]=(0,n.useState)(""),[j,S]=(0,n.useState)(""),[Z,D]=(0,n.useState)({}),[B,k]=(0,n.useState)(""),[C,E]=(0,n.useState)(!(!r||!c)),[L,N]=(0,n.useState)(!1),[M,T]=(0,n.useState)({}),[z,X]=(0,n.useState)(!1),[F,O]=(0,n.useState)(0),[J,H]=(0,n.useState)(0),[V,G]=(0,n.useState)(25),[Y,I]=(0,n.useState)(25),[R,W]=(0,n.useState)(0),[U,q]=(0,n.useState)(!1),P=(0,n.useRef)(null),K=(0,n.useRef)(null);(0,n.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{S(e);const t=new URL(c).pathname.split("/"),r=t[t.length-1];T((e=>({...e,javaFile:r})))})),r&&fetch(r).then((e=>e.text())).then((e=>{y(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{k(e);const t=new URL(u).pathname.split("/"),r=t[t.length-1];T((e=>({...e,cssFile:r})))})),d.forEach((e=>{const t=new URL(e).pathname.split("/"),r=t[t.length-1];fetch(e).then((e=>e.text())).then((e=>{D((t=>({...t,[r]:{fileName:r,code:e}})))}))})),W(P.current?P.current.offsetWidth:0)}),[]);const Q=()=>{X(!1)},_=e=>{if(z){const t=e.clientX-F;J+t>R/3&&(P.current.style.width=`${J+t}px`,K.current.style.right=(V-t<25?25:V-t)+"px",I(V-t<25?25:V-t))}},$=o.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==x?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,ee=o.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,te=o.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${f||"100%"};
    pointer-events: ${z?"none":"auto"};
  `,re=o.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${L&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ne=o.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,oe=o.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==x?"none":"1px solid var(--ifm-toc-border-color)"};
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
      border: ${"hidden"==x?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,ae=o.iv`
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
  `,ie=o.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.BX)("div",{css:$,onMouseUp:Q,onMouseLeave:Q,onMouseMove:_,children:["hidden"!=x?(0,m.BX)("div",{onMouseEnter:()=>{N(!0)},onMouseLeave:()=>N(!1),css:ee,children:[(0,m.tZ)("iframe",{onMouseUp:Q,loading:"lazy",src:t+"&__theme__="+(0,h.I)().colorMode,css:te,ref:P,onMouseMove:_}),(0,m.tZ)("div",{css:re,ref:K,children:(0,m.tZ)(b,{url:t})}),(0,m.tZ)("div",{css:ne,onMouseDown:e=>{e.preventDefault(),X(!0),O(e.clientX),H(P.current?P.current.offsetWidth:0),G(Y)},children:(0,m.tZ)(p.Z,{})})]}):null,(0,m.BX)(s.Z,{css:oe,summary:(0,m.tZ)("summary",{onClick:()=>q(!U),children:U?"Hide Code":"Show Code"}),children:[r&&c?(0,m.tZ)(g,{collapse:C,setCollapse:E}):null,u?(0,m.BX)(a.Z,{css:ae,children:[(0,m.tZ)(i.Z,{value:A?A[0]:"Java",label:A?A[0]:M.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:v,children:C?w:j})}),Object.keys(Z).map(((e,t)=>(0,m.tZ)(i.Z,{value:e,label:e,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:v,children:Z[e].code})},t))),(0,m.tZ)(i.Z,{value:A?A[1]:"CSS",label:A?A[1]:M.cssFile,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:B})})]}):(0,m.BX)(a.Z,{css:ae,children:[(0,m.tZ)(i.Z,{value:A?A[0]:"Java",label:A?A[0]:M.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:v,children:C?w:j})}),Object.keys(Z).map(((e,t)=>(0,m.tZ)(i.Z,{value:e,label:e,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:v,children:Z[e].code})},t)))]})]})]})}},1415:(e,t,r)=>{r.d(t,{Z:()=>a});r(7294);var n=r(8397),o=r(5893);function a(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.Z,{...e})})}},7762:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png"},1974:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},2143:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);
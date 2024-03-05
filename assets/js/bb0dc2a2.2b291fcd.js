"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9969],{3489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(5893),s=n(1151),i=n(6957);const r={sidebar_position:3,title:"Selection"},l=void 0,a={id:"addons/table/table_selection",title:"Selection",description:"The Table component provides various selection capabilities. There are methods for selecting a single item, multiple items, or programmatically managing selections.",source:"@site/docs/addons/table/table_selection.md",sourceDirName:"addons/table",slug:"/addons/table/table_selection",permalink:"/docs/addons/table/table_selection",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/addons/table/table_selection.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Selection"},sidebar:"documentationSidebar",previous:{title:"Columns",permalink:"/docs/addons/table/table_columns"},next:{title:"Sorting",permalink:"/docs/addons/table/table_sorting"}},c={},d=[{value:"Selection Event",id:"selection-event",level:3},{value:"Selection Mode",id:"selection-mode",level:3},{value:"Checkbox Selection",id:"checkbox-selection",level:3},{value:"Programatic Selection",id:"programatic-selection",level:3},{value:"Select by Key",id:"select-by-key",level:4},{value:"Select by Index",id:"select-by-index",level:4},{value:"Selecting Entire Items",id:"selecting-entire-items",level:4}];function u(e){const t={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Table"})," component provides various selection capabilities. There are methods for selecting a single item, multiple items, or programmatically managing selections."]}),"\n",(0,o.jsx)(t.h3,{id:"selection-event",children:"Selection Event"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Table"})," component package emits several events related to row selection. These events capture  changes in the selection state of ",(0,o.jsx)(t.code,{children:"Table"})," rows. Below are the key selection events along with their descriptions:"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"TableItemSelectEvent"})," -  Emitted when a table item (row) is selected. This event provides information about the selected item, allowing developers to respond to individual row selections."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"TableItemDeselectEvent"})," - Emitted when a previously selected table item (row) is deselected. Developers can use this event to handle actions associated with row deselection."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"TableItemSelectionChange"})," - Emitted when the overall selection in the table changes. This event provides a consolidated view of the selected items, allowing developers to respond to changes in the table's selection state."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["In the example below, information about the selected row will be displayed via the ",(0,o.jsx)(t.code,{children:"onItemSelect()"})," method whenever a user selects a row:"]}),"\n",(0,o.jsx)(i.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=addondemos.tabledemos.TableSingleSelection",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/TableSingleSelection.java",height:"600px"}),"\n",(0,o.jsx)(t.h3,{id:"selection-mode",children:"Selection Mode"}),"\n",(0,o.jsx)(t.p,{children:"The selection mode in the table determines how items can be selected by the user. It provides options for configuring the behavior of item selection. The Table class provides a method to set the selection mode:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"setSelectionMode(SelectionMode selectionMode)"})}),"\n",(0,o.jsx)(t.p,{children:"Available SelectionMode options include:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"SINGLE"})," - (single selection)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"MULTI"})," - (multiple selection)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"NONE"})," - (no selection)."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"checkbox-selection",children:"Checkbox Selection"}),"\n",(0,o.jsxs)(t.p,{children:["Checkbox selection is enabled when the selection mode is ",(0,o.jsx)(t.code,{children:"MULTI"}),", and allows users to conveniently select one or more items using checkboxes associated with each row. This feature is particularly useful for scenarios where users need to perform bulk actions on selected items. The Table class provides methods to enable and customize checkbox selection."]}),"\n",(0,o.jsxs)(t.p,{children:["By using the ",(0,o.jsx)(t.code,{children:"setCheckboxSelection(boolean checkboxSelection)"})," method, checkboxes can be configured to be displayed next to each row, allowing users to select items. The program below shows multiple selection and checkbox selection enabled:"]}),"\n",(0,o.jsx)(i.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=addondemos.tabledemos.TableMultiSelection",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/TableMultiSelection.java",height:"600px"}),"\n",(0,o.jsx)(t.h3,{id:"programatic-selection",children:"Programatic Selection"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Table"})," component provides programmatic selection methods, allowing you to manipulate selected items either by their keys or by the entire items."]}),"\n",(0,o.jsx)(t.h4,{id:"select-by-key",children:"Select by Key"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"selectKey(Object... keys)"})," method enables you to programmatically select items using their keys. You can pass one or more keys to this method, and it will update the selection accordingly."]}),"\n",(0,o.jsx)(t.h4,{id:"select-by-index",children:"Select by Index"}),"\n",(0,o.jsxs)(t.p,{children:["Using the ",(0,o.jsx)(t.code,{children:"selectIndex(int... indices)"})," method allows you to pass one or more indices to the method and updates the selected items accordingly."]}),"\n",(0,o.jsx)(t.h4,{id:"selecting-entire-items",children:"Selecting Entire Items"}),"\n",(0,o.jsxs)(t.p,{children:["Finally, the ",(0,o.jsx)(t.code,{children:"select(T... items)"})," method allows you to programmatically select items by passing one or more items themselves to this method to update the selection accordingly."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},2610:(e,t,n)=>{var o=n(4836);t.Z=void 0;var s=o(n(4938)),i=n(5893),r=(0,s.default)((0,i.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=r},5162:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var o=n(6010);const s={tabItem:"tabItem_Ymn6"};var i=n(5893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,r),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(7294),s=n(6010),i=n(2466),r=n(6550),l=n(469),a=n(1980),c=n(7392),d=n(12);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:s}}=e;return{value:t,label:n,attributes:o,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[r,a]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:i}))),[c,u]=b({queryString:n,groupId:s}),[p,A]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Nk)(n);return[s,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),v=(()=>{const e=c??p;return m({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{v&&a(v)}),[v]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),A(e)}),[u,A,i]),tabValues:i}}var A=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function x(e){let{className:t,block:n,selectedValue:o,selectValue:r,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=a.indexOf(t),s=l[n].value;s!==o&&(c(t),r(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>a.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(f,{...e,...t})]})}function y(e){const t=(0,A.Z)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(7294),s=n(917),i=n(4866),r=n(5162),l=n(4673),a=n(1750);const c="data:image/png;base64,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",d=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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";var h=n(2949),m=n(2610),b=n(5944);function p(e){let{collapse:t,setCollapse:n}=e;const o=s.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,i=s.iv`
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
  `,r=s.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,b.tZ)("div",{css:o,children:(0,b.tZ)("button",{css:i,onClick:()=>{n(!t)},children:t?(0,b.tZ)("img",{css:r,src:d,className:"icon-tabler-arrow-bar-up"}):(0,b.tZ)("img",{css:r,src:c,className:"icon-tabler-arrow-bar-down"})})})}function A(e){let{url:t}=e;const n=s.iv`
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
  `,o=s.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,b.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,b.tZ)("img",{css:o,src:u})})}function v(e){let{path:t,javaC:n,javaE:c,cssURL:d,javaHighlight:u,height:v,frame:g,tabs:x}=e;const[f,w]=(0,o.useState)(""),[y,S]=(0,o.useState)(""),[k,j]=(0,o.useState)(""),[D,B]=(0,o.useState)(!(!n||!c)),[Z,E]=(0,o.useState)(!1),[C,T]=(0,o.useState)({}),[L,M]=(0,o.useState)(!1),[N,V]=(0,o.useState)(0),[z,F]=(0,o.useState)(0),[O,H]=(0,o.useState)(25),[X,I]=(0,o.useState)(25),[G,J]=(0,o.useState)(0),[Y,q]=(0,o.useState)(!1),P=(0,o.useRef)(null),W=(0,o.useRef)(null);(0,o.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{S(e);const t=new URL(c).pathname.split("/"),n=t[t.length-1];T((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{w(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{j(e);const t=new URL(d).pathname.split("/"),n=t[t.length-1];T((e=>({...e,cssFile:n})))})),J(P.current?P.current.offsetWidth:0)}),[]);const U=()=>{M(!1)},R=e=>{if(L){const t=e.clientX-N;z+t>G/3&&(P.current.style.width=`${z+t}px`,W.current.style.right=(O-t<25?25:O-t)+"px",I(O-t<25?25:O-t))}},K=s.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==g?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,Q=s.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,_=s.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${v||"100%"};
    pointer-events: ${L?"none":"auto"};
  `,$=s.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${Z&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ee=s.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,te=s.iv`
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
  `,ne=s.iv`
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
  `,oe=s.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,b.BX)("div",{css:K,onMouseUp:U,onMouseLeave:U,onMouseMove:R,children:["hidden"!=g?(0,b.BX)("div",{onMouseEnter:()=>{E(!0)},onMouseLeave:()=>E(!1),css:Q,children:[(0,b.tZ)("iframe",{onMouseUp:U,loading:"lazy",src:t+"&__theme__="+(0,h.I)().colorMode,css:_,ref:P,onMouseMove:R}),(0,b.tZ)("div",{css:$,ref:W,children:(0,b.tZ)(A,{url:t})}),(0,b.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),M(!0),V(e.clientX),F(P.current?P.current.offsetWidth:0),H(X)},children:(0,b.tZ)(m.Z,{})})]}):null,(0,b.BX)(l.Z,{css:te,summary:(0,b.tZ)("summary",{onClick:()=>q(!Y),children:Y?"Hide Code":"Show Code"}),children:[n&&c?(0,b.tZ)(p,{collapse:D,setCollapse:B}):null,d?(0,b.BX)(i.Z,{css:ne,children:[(0,b.tZ)(r.Z,{value:x?x[0]:"Java",label:x?x[0]:C.javaFile,default:!0,children:(0,b.tZ)(a.Z,{css:oe,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?f:y})}),(0,b.tZ)(r.Z,{value:x?x[1]:"CSS",label:x?x[1]:C.cssFile,children:(0,b.tZ)(a.Z,{css:oe,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:k})})]}):(0,b.tZ)(i.Z,{css:ne,children:(0,b.tZ)(r.Z,{value:x?x[0]:"Java",label:x?x[0]:C.javaFile,default:!0,children:(0,b.tZ)(a.Z,{css:oe,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?f:y})})})]})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var o=n(8397),s=n(5893);function i(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{...e})})}}}]);
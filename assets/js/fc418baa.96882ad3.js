"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[543],{5829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(5893),a=n(1151),r=n(9469);const o={sidebar_position:1,title:"Columns",slug:"columns"},l=void 0,s={id:"addons/table/table_columns",title:"Columns",description:"The Table class utilizes Column classes to handle the creation of data columns within it. This class has a wide range of functionality that allows a user to thoroughly customize what is displayed within each of the columns.",source:"@site/docs/addons/table/table_columns.md",sourceDirName:"addons/table",slug:"/addons/table/columns",permalink:"/docs/addons/table/columns",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/addons/table/table_columns.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Columns",slug:"columns"},sidebar:"documentationSidebar",previous:{title:"Table",permalink:"/docs/addons/table/"},next:{title:"Selection",permalink:"/docs/addons/table/selection"}},d={},c=[{value:"Factory Methods",id:"factory-methods",level:2},{value:"Value Providers",id:"value-providers",level:2},{value:"Pin Direction",id:"pin-direction",level:2},{value:"Alignment",id:"alignment",level:2},{value:"Visibility",id:"visibility",level:2},{value:"Navigable",id:"navigable",level:2},{value:"Label",id:"label",level:2},{value:"Minimum Width",id:"minimum-width",level:2}];function u(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Table"})," class utilizes ",(0,i.jsx)(t.code,{children:"Column"})," classes to handle the creation of data columns within it. This class has a wide range of functionality that allows a user to thoroughly customize what is displayed within each of the columns."]}),"\n",(0,i.jsx)(t.h2,{id:"factory-methods",children:"Factory Methods"}),"\n",(0,i.jsxs)(t.p,{children:["To add a ",(0,i.jsx)(t.code,{children:"Column"})," to a ",(0,i.jsx)(t.code,{children:"Table"}),", use one of the set of provided ",(0,i.jsx)(t.code,{children:"Table"})," factory methods:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"addColumn(Function<T, V> provider)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"addColumn(String id, Function<T, V> provider)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"addColumn(Renderer<T> renderer)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"addColumn(String id, Renderer<T> renderer)"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"value-providers",children:"Value Providers"}),"\n",(0,i.jsx)(t.p,{children:"Value Provider is a function responsible for translating raw data from the underlying dataset into a format suitable for display within a specific column. The function, defined by the user, takes an instance of the row data type (T) and returns the value to be showcased in the associated column for that particular row."}),"\n",(0,i.jsx)(t.p,{children:"To set a value provider on a column, use one of the above factory methods that accept a provider as an argument:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'    List<String> columnsList = Arrays.asList("athlete", "age", "country", "year", "sport", "gold", "silver", "bronze", "total");\r\n\r\n    for (String column : columnsList) {\r\n      table.addColumn(column, (JsonObject person) -> {\r\n        JsonElement element = person.get(column);\r\n        if (!element.isJsonNull()) {\r\n          return element.getAsString();\r\n        }\r\n        return "";\r\n      });\r\n    }\n'})}),"\n",(0,i.jsx)(t.p,{children:"In this example, a column will attempt to access data from a JSON object, rendering it only if the data is not null."}),"\n",(0,i.jsx)(t.h2,{id:"pin-direction",children:"Pin Direction"}),"\n",(0,i.jsx)(t.p,{children:'Column pinning is a feature that allows users to affix or "pin" a column to a specific side of the table, enhancing visibility and accessibility. This is useful when certain columns, such as identifiers or essential information, need to remain visible while scrolling horizontally through a table.'}),"\n",(0,i.jsx)(r.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=addondemos.tabledemos.TableColumnPinning",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/TableColumnPinning.java",height:"600px"}),"\n",(0,i.jsx)(t.p,{children:"There are three available directions for pinning a column:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"PinDirection.LEFT"}),": Pins the column to the left side."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"PinDirection.RIGHT"}),": Pins the column to the right side."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"PinDirection.AUTO"}),": Column appears based on the insertion order."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Pinning can be set programmatically, allowing users to change the pin direction based on user interactions or application logic."}),"\n",(0,i.jsx)(t.h2,{id:"alignment",children:"Alignment"}),"\n",(0,i.jsx)(t.p,{children:"Column alignment defines the horizontal positioning of data within a column. It influences how data values are displayed, providing a visual guide to users about the nature of the information."}),"\n",(0,i.jsx)(r.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=addondemos.tabledemos.TableColumnAlignment",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/TableColumnAlignment.java",height:"600px"}),"\n",(0,i.jsx)(t.p,{children:"The Table Component supports three primary alignment options:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Column.Alignment.LEFT"}),": Suitable for textual or descriptive data where maintaining a leftward flow is intuitive. Useful when emphasizing the starting point of the content."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Column.Alignment.CENTER"}),": Ideal for numerical or categorical data where a balanced presentation is desired. Creates a visually centered display."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Column.Alignment.RIGHT"}),": Commonly used for numerical data, especially when the magnitude or precision of numbers is significant. Aligns data towards the right for a natural reading flow."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In the above example, the final column for ",(0,i.jsx)(t.code,{children:"Cost"})," has been right-aligned to provide a more obvious visual distinction."]}),"\n",(0,i.jsx)(t.h2,{id:"visibility",children:"Visibility"}),"\n",(0,i.jsxs)(t.p,{children:["It is possible to set the visibility of a ",(0,i.jsx)(t.code,{children:"Column"}),", determining whether or not it will be shown within the table. This can be useful when, among other things, determining whether or not to display sensitive information."]}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"setHidden()"})," method, as shown below, to set this property on a ",(0,i.jsx)(t.code,{children:"Column"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'table.addColumn("Credit Card", Customer::getCreditCardNumber).setHidden(true);'})}),"\n",(0,i.jsx)(t.h2,{id:"navigable",children:"Navigable"}),"\n",(0,i.jsxs)(t.p,{children:["The navigable attribute determines whether users can interact with a column during navigation. Setting ",(0,i.jsx)(t.code,{children:"setSuppressNavigable()"})," to true restricts user interaction with the column, providing a read-only experience."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'table.addColumn("ReadOnly Column", Product::getDescription).setSuppressNavigable(true);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"label",children:"Label"}),"\n",(0,i.jsx)(t.p,{children:"The label of a column is its public-facing identifier, contributing to the clarity and understanding of displayed data. Use setLabel to set or modify the label associated with a column."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"By default, the label will be the same as the column ID"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'table.addColumn("Product ID", Product::getProductId).setLabel("ID");\n'})}),"\n",(0,i.jsx)(t.h2,{id:"minimum-width",children:"Minimum Width"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"setMinWidth()"})," method allows you to define the minimum width of a column, ensuring consistent and aesthetically pleasing layout."]}),"\n",(0,i.jsx)(t.p,{children:"If the minimum width is not provided, the table will calculate the minimum width based on the column content."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'table.addColumn("Price", Product::getPrice).setMinWidth(100.0);\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"The value passed represents the desired minimum width in pixels."})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},2610:(e,t,n)=>{var i=n(4836);t.Z=void 0;var a=i(n(4938)),r=n(5893),o=(0,a.default)((0,r.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=o},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var i=n(6010);const a={tabItem:"tabItem_Ymn6"};var r=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var i=n(7294),a=n(6010),r=n(2466),o=n(6550),l=n(469),s=n(1980),d=n(7392),c=n(12);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[o,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[d,u]=p({queryString:n,groupId:a}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),A=(()=>{const e=d??b;return m({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{A&&s(A)}),[A]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=n(2389);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function f(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==i&&(d(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>s.push(e),onKeyDown:u,onClick:c,...r,className:(0,a.Z)("tabs__item",A.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",A.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function y(e){const t=(0,g.Z)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(t))}},9469:(e,t,n)=>{n.d(t,{Z:()=>A});var i=n(7294),a=n(917),r=n(4866),o=n(5162),l=n(4673),s=n(1750),d=n(1974),c=n(7762),u=n(2143),h=n(2949),m=n(2610),p=n(5944);function b(e){let{collapse:t,setCollapse:n}=e;const i=a.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,r=a.iv`
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
  `,o=a.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,p.tZ)("div",{css:i,children:(0,p.tZ)("button",{css:r,onClick:()=>{n(!t)},children:t?(0,p.tZ)("img",{css:o,src:c.Z,className:"icon-tabler-arrow-bar-up"}):(0,p.tZ)("img",{css:o,src:d.Z,className:"icon-tabler-arrow-bar-down"})})})}function g(e){let{url:t}=e;const n=a.iv`
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
  `,i=a.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,p.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,p.tZ)("img",{css:i,src:u.Z})})}function A(e){let{path:t,javaC:n,javaE:d,cssURL:c,javaHighlight:u,height:A,frame:v,tabs:f}=e;const[x,w]=(0,i.useState)(""),[y,j]=(0,i.useState)(""),[C,D]=(0,i.useState)(""),[B,S]=(0,i.useState)(!(!n||!d)),[Z,k]=(0,i.useState)(!1),[T,E]=(0,i.useState)({}),[L,N]=(0,i.useState)(!1),[M,V]=(0,i.useState)(0),[z,F]=(0,i.useState)(0),[H,O]=(0,i.useState)(25),[P,X]=(0,i.useState)(25),[J,G]=(0,i.useState)(0),[I,Y]=(0,i.useState)(!1),W=(0,i.useRef)(null),R=(0,i.useRef)(null);(0,i.useEffect)((()=>{d&&fetch(d).then((e=>e.text())).then((e=>{j(e);const t=new URL(d).pathname.split("/"),n=t[t.length-1];E((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{w(e)})),c&&fetch(c).then((e=>e.text())).then((e=>{D(e);const t=new URL(c).pathname.split("/"),n=t[t.length-1];E((e=>({...e,cssFile:n})))})),G(W.current?W.current.offsetWidth:0)}),[]);const q=()=>{N(!1)},U=e=>{if(L){const t=e.clientX-M;z+t>J/3&&(W.current.style.width=`${z+t}px`,R.current.style.right=(H-t<25?25:H-t)+"px",X(H-t<25?25:H-t))}},K=a.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==v?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,Q=a.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,_=a.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${A||"100%"};
    pointer-events: ${L?"none":"auto"};
  `,$=a.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${Z&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ee=a.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,te=a.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==v?"none":"1px solid var(--ifm-toc-border-color)"};
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
      border: ${"hidden"==v?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,ne=a.iv`
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
  `,ie=a.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,p.BX)("div",{css:K,onMouseUp:q,onMouseLeave:q,onMouseMove:U,children:["hidden"!=v?(0,p.BX)("div",{onMouseEnter:()=>{k(!0)},onMouseLeave:()=>k(!1),css:Q,children:[(0,p.tZ)("iframe",{onMouseUp:q,loading:"lazy",src:t+"&__theme__="+(0,h.I)().colorMode,css:_,ref:W,onMouseMove:U}),(0,p.tZ)("div",{css:$,ref:R,children:(0,p.tZ)(g,{url:t})}),(0,p.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),N(!0),V(e.clientX),F(W.current?W.current.offsetWidth:0),O(P)},children:(0,p.tZ)(m.Z,{})})]}):null,(0,p.BX)(l.Z,{css:te,summary:(0,p.tZ)("summary",{onClick:()=>Y(!I),children:I?"Hide Code":"Show Code"}),children:[n&&d?(0,p.tZ)(b,{collapse:B,setCollapse:S}):null,c?(0,p.BX)(r.Z,{css:ne,children:[(0,p.tZ)(o.Z,{value:f?f[0]:"Java",label:f?f[0]:T.javaFile,default:!0,children:(0,p.tZ)(s.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:B?x:y})}),(0,p.tZ)(o.Z,{value:f?f[1]:"CSS",label:f?f[1]:T.cssFile,children:(0,p.tZ)(s.Z,{css:ie,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:C})})]}):(0,p.tZ)(r.Z,{css:ne,children:(0,p.tZ)(o.Z,{value:f?f[0]:"Java",label:f?f[0]:T.javaFile,default:!0,children:(0,p.tZ)(s.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:B?x:y})})})]})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var i=n(8397),a=n(5893);function r(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Z,{...e})})}},7762:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png"},1974:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},2143:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);
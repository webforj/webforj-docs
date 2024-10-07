"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7054],{532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(4848),i=n(8453),r=n(5943);const s={sidebar_position:1,title:"Columns",slug:"columns"},o=void 0,l={id:"components/table/table_columns",title:"Columns",description:"The Table class utilizes Column classes to handle the creation of data columns within it. This class has a wide range of functionality that allows a user to thoroughly customize what is displayed within each of the columns.",source:"@site/docs/components/table/table_columns.md",sourceDirName:"components/table",slug:"/components/table/columns",permalink:"/docs/components/table/columns",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/table/table_columns.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Columns",slug:"columns"},sidebar:"documentationSidebar",previous:{title:"Table",permalink:"/docs/components/table/"},next:{title:"Selection",permalink:"/docs/components/table/selection"}},c={},d=[{value:"Value Providers",id:"value-providers",level:2},{value:"Pin Direction",id:"pin-direction",level:2},{value:"Alignment",id:"alignment",level:2},{value:"Visibility",id:"visibility",level:2},{value:"Navigable",id:"navigable",level:2},{value:"Label",id:"label",level:2},{value:"Minimum Width",id:"minimum-width",level:2}];function u(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Table"})," class utilizes ",(0,a.jsx)(t.code,{children:"Column"})," classes to handle the creation of data columns within it. This class has a wide range of functionality that allows a user to thoroughly customize what is displayed within each of the columns.\nTo add a ",(0,a.jsx)(t.code,{children:"Column"})," to a ",(0,a.jsx)(t.code,{children:"Table"}),", use one of the ",(0,a.jsx)(t.code,{children:"addColumn"})," factory methods."]}),"\n",(0,a.jsx)(t.h2,{id:"value-providers",children:"Value Providers"}),"\n",(0,a.jsx)(t.p,{children:"A Value Provider is a function responsible for translating raw data from the underlying dataset into a format suitable for display within a specific column. The function, defined by the user, takes an instance of the row data type (T) and returns the value to be showcased in the associated column for that particular row."}),"\n",(0,a.jsxs)(t.p,{children:["To set a value provider on a column, use one of the ",(0,a.jsx)(t.code,{children:"addColumn"})," factory methods that accept a provider as an argument:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'    List<String> columnsList = Arrays.asList("athlete", "age", "country", "year", "sport", "gold", "silver", "bronze", "total");\n\n    for (String column : columnsList) {\n      table.addColumn(column, (JsonObject person) -> {\n        JsonElement element = person.get(column);\n        if (!element.isJsonNull()) {\n          return element.getAsString();\n        }\n        return "";\n      });\n    }\n'})}),"\n",(0,a.jsx)(t.p,{children:"In this example, a column will attempt to access data from a JSON object, rendering it only if the data is not null."}),"\n",(0,a.jsx)(t.h2,{id:"pin-direction",children:"Pin Direction"}),"\n",(0,a.jsx)(t.p,{children:'Column pinning is a feature that allows users to affix or "pin" a column to a specific side of the table, enhancing visibility and accessibility. This is useful when certain columns, such as identifiers or essential information, need to remain visible while scrolling horizontally through a table.'}),"\n",(0,a.jsx)(r.A,{path:"https://demo.webforj.com/webapp/controlsamples/tablecolumnpinning?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/TableColumnPinningView.java",urls:["https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/MusicRecord.java","https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/Service.java"],height:"600px"}),"\n",(0,a.jsx)(t.p,{children:"There are three available directions for pinning a column:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"PinDirection.LEFT"}),": Pins the column to the left side."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"PinDirection.RIGHT"}),": Pins the column to the right side."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"PinDirection.AUTO"}),": Column appears based on the insertion order."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Pinning can be set programmatically, allowing users to change the pin direction based on user interactions or application logic."}),"\n",(0,a.jsx)(t.h2,{id:"alignment",children:"Alignment"}),"\n",(0,a.jsx)(t.p,{children:"Column alignment defines the horizontal positioning of data within a column. It influences how data values are displayed, providing a visual guide to users about the nature of the information."}),"\n",(0,a.jsx)(r.A,{path:"https://demo.webforj.com/webapp/controlsamples/tablecolumnalignment?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/TableColumnAlignmentView.java",urls:["https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/MusicRecord.java","https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/Service.java"],height:"600px"}),"\n",(0,a.jsx)(t.p,{children:"The Table Component supports three primary alignment options:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Column.Alignment.LEFT"}),": Suitable for textual or descriptive data where maintaining a leftward flow is intuitive. Useful when emphasizing the starting point of the content."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Column.Alignment.CENTER"}),": Ideal for numerical or categorical data where a balanced presentation is desired. Creates a visually centered display."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Column.Alignment.RIGHT"}),": Commonly used for numerical data, especially when the magnitude or precision of numbers is significant. Aligns data towards the right for a natural reading flow."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In the above example, the final column for ",(0,a.jsx)(t.code,{children:"Cost"})," has been right-aligned to provide a more obvious visual distinction."]}),"\n",(0,a.jsx)(t.h2,{id:"visibility",children:"Visibility"}),"\n",(0,a.jsxs)(t.p,{children:["It is possible to set the visibility of a ",(0,a.jsx)(t.code,{children:"Column"}),", determining whether or not it will be shown within the table. This can be useful when, among other things, determining whether or not to display sensitive information."]}),"\n",(0,a.jsxs)(t.p,{children:["Use the ",(0,a.jsx)(t.code,{children:"setHidden()"})," method, as shown below, to set this property on a ",(0,a.jsx)(t.code,{children:"Column"}),":"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:'table.addColumn("Credit Card", Customer::getCreditCardNumber).setHidden(true);'})}),"\n",(0,a.jsx)(t.h2,{id:"navigable",children:"Navigable"}),"\n",(0,a.jsxs)(t.p,{children:["The navigable attribute determines whether users can interact with a column during navigation. Setting ",(0,a.jsx)(t.code,{children:"setSuppressNavigable()"})," to true restricts user interaction with the column, providing a read-only experience."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'table.addColumn("ReadOnly Column", Product::getDescription).setSuppressNavigable(true);\n'})}),"\n",(0,a.jsx)(t.h2,{id:"label",children:"Label"}),"\n",(0,a.jsx)(t.p,{children:"The label of a column is its public-facing identifier, contributing to the clarity and understanding of displayed data. Use setLabel to set or modify the label associated with a column."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"By default, the label will be the same as the column ID"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'table.addColumn("Product ID", Product::getProductId).setLabel("ID");\n'})}),"\n",(0,a.jsx)(t.h2,{id:"minimum-width",children:"Minimum Width"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"setMinWidth()"})," method allows you to define the minimum width of a column, ensuring consistent and aesthetically pleasing layout."]}),"\n",(0,a.jsx)(t.p,{children:"If the minimum width is not provided, the table will calculate the minimum width based on the column content."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'table.addColumn("Price", Product::getPrice).setMinWidth(100.0);\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"The value passed represents the desired minimum width in pixels."})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},2706:(e,t,n)=>{var a=n(4994);t.A=void 0;var i=a(n(2032)),r=n(4848),s=(0,i.default)((0,r.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.A=s},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(53);const i={tabItem:"tabItem_Ymn6"};var r=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(6540),i=n(53),r=n(3104),s=n(6347),o=n(205),l=n(7485),c=n(1682),d=n(9466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,u]=p({queryString:n,groupId:i}),[b,A]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,d.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),g=(()=>{const e=c??b;return m({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),A(e)}),[u,A,r]),tabValues:r}}var A=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==a&&(c(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(w,{...e,...t})]})}function j(e){const t=(0,A.A)();return(0,f.jsx)(x,{...e,children:u(e.children)},String(t))}},5943:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(6540),i=n(7437),r=n(5556),s=n.n(r),o=n(1470),l=n(9365),c=n(1622),d=n(1302);const u=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",m="data:image/png;base64,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";var p=n(5293),b=n(2706),A=n(2445);function g(e){let{collapse:t,setCollapse:n}=e;g.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const a=i.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,r=i.AH`
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
  `,o=i.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,A.Y)("div",{css:a,children:(0,A.Y)("button",{css:r,onClick:()=>{n(!t)},children:t?(0,A.Y)("img",{alt:"collapse_button",css:o,src:u,className:"icon-tabler-arrow-bar-up"}):(0,A.Y)("img",{css:o,src:h,className:"icon-tabler-arrow-bar-down"})})})}function f(e){let{url:t}=e;const n=i.AH`
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
  `,a=i.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,A.Y)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,A.Y)("img",{css:a,src:m})})}function v(e){let{path:t,javaC:n,javaE:r,urls:u,cssURL:h,javaHighlight:m,height:w,frame:x,tabs:j}=e;v.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[y,D]=(0,a.useState)(""),[C,B]=(0,a.useState)(""),[S,k]=(0,a.useState)({}),[E,L]=(0,a.useState)(""),[T,H]=(0,a.useState)(!(!n||!r)),[N,Y]=(0,a.useState)(!1),[M,V]=(0,a.useState)({}),[z,F]=(0,a.useState)(!1),[O,P]=(0,a.useState)(0),[G,J]=(0,a.useState)(0),[X,I]=(0,a.useState)(25),[R,W]=(0,a.useState)(25),[Z,q]=(0,a.useState)(0),[U,K]=(0,a.useState)(!1),Q=(0,a.useRef)(null),_=(0,a.useRef)(null);function $(e,t,n){return(0,A.Y)(d.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,a.useEffect)((()=>{r&&fetch(r).then((e=>e.text())).then((e=>{B(e);const t=new URL(r).pathname.split("/"),n=t[t.length-1];V((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{D(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{L(e);const t=new URL(h).pathname.split("/"),n=t[t.length-1];V((e=>({...e,cssFile:n})))})),u&&u.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),a=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){k((n=>({...n,[e]:{fileName:e,code:t}})))}(a,e)}))})),q(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{F(!1)},te=e=>{if(z){const t=e.clientX-O;G+t>Z/3&&(Q.current.style.width=`${G+t}px`,_.current.style.right=(X-t<25?25:X-t)+"px",W(X-t<25?25:X-t))}},ne=i.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ae=i.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ie=i.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${w||"100%"};
    pointer-events: ${z?"none":"auto"};
  `,re=i.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${N&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,se=i.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,oe=i.AH`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==x?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
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
  `,le=i.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=i.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,A.FD)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=x?(0,A.FD)("div",{onMouseEnter:()=>{Y(!0)},onMouseLeave:()=>Y(!1),css:ae,children:[(0,A.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,p.G)().colorMode,css:ie,ref:Q,onMouseMove:te}),(0,A.Y)("div",{css:re,ref:_,children:(0,A.Y)(f,{url:t})}),(0,A.Y)("div",{css:se,onMouseDown:e=>{e.preventDefault(),F(!0),P(e.clientX),J(Q.current?Q.current.offsetWidth:0),I(R)},children:(0,A.Y)(b.A,{})})]}):null,(0,A.FD)(c.A,{css:oe,summary:(0,A.Y)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[n&&r?(0,A.Y)(g,{collapse:T,setCollapse:H}):null,h?(0,A.FD)(o.A,{css:le,children:[(0,A.Y)(l.A,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,A.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:T?y:C})}),Object.keys(S).map(((e,t)=>(0,A.Y)(l.A,{value:e,label:e,children:$(S[e],ce,m)},"tab"+t))),(0,A.Y)(l.A,{value:j?j[1]:"CSS",label:j?j[1]:M.cssFile,children:(0,A.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:E})})]}):(0,A.FD)(o.A,{css:le,children:[(0,A.Y)(l.A,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,A.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:T?y:C})}),Object.keys(S).map(((e,t)=>(0,A.Y)(l.A,{value:e,label:e,children:$(S[e],ce,m)},"tab"+t)))]})]})]})}},6999:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(4718),i=n(4848);function r(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.A,{...e})})}}}]);
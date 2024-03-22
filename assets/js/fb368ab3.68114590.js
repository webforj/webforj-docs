"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8726],{4841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(5893),s=n(1151),i=n(6957);const l={sidebar_position:4,title:"Rendering",slug:"rendering"},a="Rich Content and Client-Side Rendering",o={id:"components/table/table_rendering",title:"Rendering",description:"Tables in webforj are also configurable using the following tools to display rich content within cells. This includes interactive components or formatted data within the table cells.",source:"@site/docs/components/table/table_rendering.md",sourceDirName:"components/table",slug:"/components/table/rendering",permalink:"/docs/components/table/rendering",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/table/table_rendering.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Rendering",slug:"rendering"},sidebar:"documentationSidebar",previous:{title:"Sorting",permalink:"/docs/components/table/sorting"},next:{title:"Large Data Sets",permalink:"/docs/components/table/data"}},d={},c=[{value:"Lodash Renderers",id:"lodash-renderers",level:2},{value:"Lodash Syntax",id:"lodash-syntax",level:3},{value:"Syntax overview for lodash templates:",id:"syntax-overview-for-lodash-templates",level:4},{value:"Examples using cell data:",id:"examples-using-cell-data",level:4},{value:"Available Renderers",id:"available-renderers",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"rich-content-and-client-side-rendering",children:"Rich Content and Client-Side Rendering"}),"\n",(0,r.jsx)(t.p,{children:"Tables in webforj are also configurable using the following tools to display rich content within cells. This includes interactive components or formatted data within the table cells."}),"\n",(0,r.jsxs)(t.p,{children:["These elements are rendered client-side, meaning the process of generating and displaying rich content is done directly in the browser, using JavaScript only when needed, increasing performance of applications using the ",(0,r.jsx)(t.code,{children:"Table"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"lodash-renderers",children:"Lodash Renderers"}),"\n",(0,r.jsxs)(t.p,{children:["Renderers offer a powerful mechanism for customizing the way data is displayed within a ",(0,r.jsx)(t.code,{children:"Table"}),". The primary class, ",(0,r.jsx)(t.code,{children:"Renderer"}),", is designed to be extended to create custom renderers based on lodash templates, enabling dynamic and interactive content rendering."]}),"\n",(0,r.jsxs)(t.p,{children:["Lodash templates enable the insertion of HTML directly into table cells, making them highly effective for rendering complex cell data in a ",(0,r.jsx)(t.code,{children:"Table"}),". This approach allows for the dynamic generation of HTML based on cell data, facilitating rich and interactive table cell content."]}),"\n",(0,r.jsx)(t.h3,{id:"lodash-syntax",children:"Lodash Syntax"}),"\n",(0,r.jsxs)(t.p,{children:["The following section outlines the basics of Lodash syntax. While this is not an exhaustive or comprehensive overview, it can be used to help start using Lodash within the ",(0,r.jsx)(t.code,{children:"Table"})," component."]}),"\n",(0,r.jsx)(t.h4,{id:"syntax-overview-for-lodash-templates",children:"Syntax overview for lodash templates:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<%= ... %>"})," - Interpolates values, inserting the JavaScript code's result into the template."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<% ... %>"})," - Executes JavaScript code, allowing loops, conditionals, and more."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<%- ... %>"})," - Escapes HTML content, ensuring interpolated data is safe from HTML injection attacks."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"examples-using-cell-data",children:"Examples using cell data:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"1. Simple value interpolation"}),": Directly display the cell's value."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"<%= cell.value %>"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"2. Conditional rendering"}),": Use JavaScript logic to conditionally render content."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"<% if (cell.value > 100) { %> 'High' <% } else { %> 'Normal' <% } %>"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"3. Combining data fields"}),": Render content using multiple data fields from the cell."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"<%= cell.row.getValue('firstName') + ' ' + cell.row.getValue('lastName') %>"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"4. Escaping HTML content"}),": Safely render user-generated content."]}),"\n",(0,r.jsx)(t.p,{children:"The renderer has access to detailed cell, row, and column properties in the client side:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"TableCell Properties:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"column"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TableColumn"})}),(0,r.jsx)(t.td,{children:"The associated column object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"first"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"Indicates if the cell is the first in the row."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The cell ID."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"index"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"int"})}),(0,r.jsx)(t.td,{children:"The cell's index within its row."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"Indicates if the cell is the last in the row."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"row"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TableRow"})}),(0,r.jsx)(t.td,{children:"The associated row object for the cell."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Object"})}),(0,r.jsx)(t.td,{children:"The raw value of the cell, directly from the data source."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"TableRow Properties:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cells"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TableCell[]"})}),(0,r.jsx)(t.td,{children:"The cells within the row."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Object"})}),(0,r.jsx)(t.td,{children:"The data provided by the application for the row."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"even"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"Indicates if the row is even-numbered (for styling purposes)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"first"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"Indicates if the row is the first in the table."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Unique ID for the row."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"index"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"int"})}),(0,r.jsx)(t.td,{children:"The row index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"Indicates if the row is the last in the table."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"odd"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:"Indicates if the row is odd-numbered (for styling purposes)."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"TableColumn Properties:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"align"}),(0,r.jsx)(t.td,{children:"ColumnAlignment"}),(0,r.jsx)(t.td,{children:"The alignment of the column (left, center, right)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"The field of the row object to get the cell's data from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"label"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"The name to render in the column header."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pinned"}),(0,r.jsx)(t.td,{children:"ColumnPinDirection"}),(0,r.jsx)(t.td,{children:"The pin direction of the column (left, right, auto)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sortable"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"If true, the column can be sorted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sort"}),(0,r.jsx)(t.td,{children:"SortDirection"}),(0,r.jsx)(t.td,{children:"The sort order of the column."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"ColumnType"}),(0,r.jsx)(t.td,{children:"The type of the column (text, number, boolean, etc.)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minWidth"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"The minimum width of the column in pixels."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"available-renderers",children:"Available Renderers"}),"\n",(0,r.jsxs)(t.p,{children:["While custom renderers can be created, there are multiple pre-configured renderers available for use within a ",(0,r.jsx)(t.code,{children:"Table"}),". The following are available for developers to use out of the box without the need to create a custom renderer:"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ButtonRenderer"})," - Renderer for a webforj button."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"NativeButtonRenderer"})," - Renderer for a native HTML button."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ElementRenderer"})," - The base class for all renderers which render an HTML tag ",(0,r.jsx)(t.strong,{children:"with"})," content."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"VoidElementRenderer"})," - The base class for all renderers which render a void element, or an HTML tag ",(0,r.jsx)(t.strong,{children:"without"})," content."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"IconRenderer"})," - Renderer for an icon - ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/docs/components/dwc-icon",children:"see this"})})," article for more information on icons."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Renderers allow for custom events to be written as well by extending any of the supported base renderer. Currently, renderers come with a ",(0,r.jsx)(t.code,{children:"RendererClickEvent"})," available for use by developers."]}),"\n",(0,r.jsxs)(t.p,{children:["Below is an example of a ",(0,r.jsx)(t.code,{children:"Table"})," that uses renderers to display rich content:"]}),"\n",(0,r.jsx)(i.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=addondemos.tabledemos.TableRichContent",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/TableRichContent.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/tablestyles/richcontent/styles.css",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/MusicRecord.java","https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/Service.java"],height:"600px"})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2610:(e,t,n)=>{var r=n(4836);t.Z=void 0;var s=r(n(4938)),i=n(5893),l=(0,s.default)((0,i.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=l},5162:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var r=n(6010);const s={tabItem:"tabItem_Ymn6"};var i=n(5893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),s=n(6010),i=n(2466),l=n(6550),a=n(469),o=n(1980),d=n(7392),c=n(12);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,h]=p({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),g=(()=>{const e=d??m;return x({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(5893);function f(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),s=a[n].value;s!==r&&(d(t),l(s))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:h,onClick:c,...i,className:(0,s.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function A(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(f,{...e,...t}),(0,j.jsx)(A,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7294),s=n(917),i=n(5697),l=n.n(i),a=n(4866),o=n(5162),d=n(4673),c=n(1750);const h=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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",x="data:image/png;base64,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";var p=n(2949),m=n(2610),b=n(5944);function g(e){let{collapse:t,setCollapse:n}=e;g.propTypes={collapse:l().bool.isRequired,setCollapse:l().func.isRequired};const r=s.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,i=s.iv`
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
  `,a=s.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,b.tZ)("div",{css:r,children:(0,b.tZ)("button",{css:i,onClick:()=>{n(!t)},children:t?(0,b.tZ)("img",{alt:"collapse_button",css:a,src:h,className:"icon-tabler-arrow-bar-up"}):(0,b.tZ)("img",{css:a,src:u,className:"icon-tabler-arrow-bar-down"})})})}function j(e){let{url:t}=e;const n=s.iv`
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
  `,r=s.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,b.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,b.tZ)("img",{css:r,src:x})})}function f(e){let{path:t,javaC:n,javaE:i,urls:h,cssURL:u,javaHighlight:x,height:A,frame:v,tabs:w}=e;f.propTypes={path:l().string.isRequired,javaC:l().string,javaE:l().string,urls:l().arrayOf(l().string),cssURL:l().string,javaHighlight:l().string,height:l().string,frame:l().string,tabs:l().arrayOf(l().string)};const[y,D]=(0,r.useState)(""),[S,B]=(0,r.useState)(""),[T,C]=(0,r.useState)({}),[k,Z]=(0,r.useState)(""),[L,E]=(0,r.useState)(!(!n||!i)),[M,R]=(0,r.useState)(!1),[H,N]=(0,r.useState)({}),[O,V]=(0,r.useState)(!1),[z,X]=(0,r.useState)(0),[F,G]=(0,r.useState)(0),[J,I]=(0,r.useState)(25),[Y,P]=(0,r.useState)(25),[q,W]=(0,r.useState)(0),[U,K]=(0,r.useState)(!1),Q=(0,r.useRef)(null),_=(0,r.useRef)(null);function $(e,t,n){return(0,b.tZ)(c.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,r.useEffect)((()=>{i&&fetch(i).then((e=>e.text())).then((e=>{B(e);const t=new URL(i).pathname.split("/"),n=t[t.length-1];N((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{D(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{Z(e);const t=new URL(u).pathname.split("/"),n=t[t.length-1];N((e=>({...e,cssFile:n})))})),h&&h.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),r=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){C((n=>({...n,[e]:{fileName:e,code:t}})))}(r,e)}))})),W(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{V(!1)},te=e=>{if(O){const t=e.clientX-z;F+t>q/3&&(Q.current.style.width=`${F+t}px`,_.current.style.right=(J-t<25?25:J-t)+"px",P(J-t<25?25:J-t))}},ne=s.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,re=s.iv`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,se=s.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${A||"100%"};
    pointer-events: ${O?"none":"auto"};
  `,ie=s.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${M&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,le=s.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ae=s.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==v?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
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
  `,oe=s.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,de=s.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,b.BX)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=v?(0,b.BX)("div",{onMouseEnter:()=>{R(!0)},onMouseLeave:()=>R(!1),css:re,children:[(0,b.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,p.I)().colorMode,css:se,ref:Q,onMouseMove:te}),(0,b.tZ)("div",{css:ie,ref:_,children:(0,b.tZ)(j,{url:t})}),(0,b.tZ)("div",{css:le,onMouseDown:e=>{e.preventDefault(),V(!0),X(e.clientX),G(Q.current?Q.current.offsetWidth:0),I(Y)},children:(0,b.tZ)(m.Z,{})})]}):null,(0,b.BX)(d.Z,{css:ae,summary:(0,b.tZ)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[n&&i?(0,b.tZ)(g,{collapse:L,setCollapse:E}):null,u?(0,b.BX)(a.Z,{css:oe,children:[(0,b.tZ)(o.Z,{value:w?w[0]:"Java",label:w?w[0]:H.javaFile,default:!0,children:(0,b.tZ)(c.Z,{css:de,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:x,children:L?y:S})}),Object.keys(T).map(((e,t)=>(0,b.tZ)(o.Z,{value:e,label:e,children:$(T[e],de,x)},"tab"+t))),(0,b.tZ)(o.Z,{value:w?w[1]:"CSS",label:w?w[1]:H.cssFile,children:(0,b.tZ)(c.Z,{css:de,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:k})})]}):(0,b.BX)(a.Z,{css:oe,children:[(0,b.tZ)(o.Z,{value:w?w[0]:"Java",label:w?w[0]:H.javaFile,default:!0,children:(0,b.tZ)(c.Z,{css:de,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:x,children:L?y:S})}),Object.keys(T).map(((e,t)=>(0,b.tZ)(o.Z,{value:e,label:e,children:$(T[e],de,x)},"tab"+t)))]})]})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var r=n(8397),s=n(5893);function i(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Z,{...e})})}}}]);
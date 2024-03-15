"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7476],{2881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=r(5893),i=r(1151),s=(r(9469),r(9358));const l={sidebar_position:4,title:"Rendering",slug:"rendering"},o="Rich Content and Client-Side Rendering",a={id:"addons/table/table_rendering",title:"Rendering",description:"Tables in webforj are also configurable using the following tools to display rich content within cells. This includes interactive components or formatted data within the table cells.",source:"@site/docs/addons/table/table_rendering.md",sourceDirName:"addons/table",slug:"/addons/table/rendering",permalink:"/docs/addons/table/rendering",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/addons/table/table_rendering.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Rendering",slug:"rendering"},sidebar:"documentationSidebar",previous:{title:"Sorting",permalink:"/docs/addons/table/sorting"},next:{title:"Large Data Sets",permalink:"/docs/addons/table/data"}},d={},c=[{value:"Lodash Renderers",id:"lodash-renderers",level:2},{value:"Lodash Syntax",id:"lodash-syntax",level:3},{value:"Syntax overview for lodash templates:",id:"syntax-overview-for-lodash-templates",level:4},{value:"Examples using cell data:",id:"examples-using-cell-data",level:4},{value:"Available Renderers",id:"available-renderers",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"rich-content-and-client-side-rendering",children:"Rich Content and Client-Side Rendering"}),"\n",(0,n.jsx)(t.p,{children:"Tables in webforj are also configurable using the following tools to display rich content within cells. This includes interactive components or formatted data within the table cells."}),"\n",(0,n.jsxs)(t.p,{children:["These elements are rendered client-side, meaning the process of generating and displaying rich content is done directly in the browser, using JavaScript only when needed, increasing performance of applications using the ",(0,n.jsx)(t.code,{children:"Table"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"lodash-renderers",children:"Lodash Renderers"}),"\n",(0,n.jsxs)(t.p,{children:["Renderers offer a powerful mechanism for customizing the way data is displayed within a ",(0,n.jsx)(t.code,{children:"Table"}),". The primary class, ",(0,n.jsx)(t.code,{children:"Renderer"}),", is designed to be extended to create custom renderers based on lodash templates, enabling dynamic and interactive content rendering."]}),"\n",(0,n.jsxs)(t.p,{children:["Lodash templates enable the insertion of HTML directly into table cells, making them highly effective for rendering complex cell data in a ",(0,n.jsx)(t.code,{children:"Table"}),". This approach allows for the dynamic generation of HTML based on cell data, facilitating rich and interactive table cell content."]}),"\n",(0,n.jsx)(t.h3,{id:"lodash-syntax",children:"Lodash Syntax"}),"\n",(0,n.jsxs)(t.p,{children:["The following section outlines the basics of Lodash syntax. While this is not an exhaustive or comprehensive overview, it can be used to help start using Lodash within the ",(0,n.jsx)(t.code,{children:"Table"})," component."]}),"\n",(0,n.jsx)(t.h4,{id:"syntax-overview-for-lodash-templates",children:"Syntax overview for lodash templates:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<%= ... %>"})," - Interpolates values, inserting the JavaScript code's result into the template."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<% ... %>"})," - Executes JavaScript code, allowing loops, conditionals, and more."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<%- ... %>"})," - Escapes HTML content, ensuring interpolated data is safe from HTML injection attacks."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"examples-using-cell-data",children:"Examples using cell data:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"1. Simple value interpolation"}),": Directly display the cell's value."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"<%= cell.value %>"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"2. Conditional rendering"}),": Use JavaScript logic to conditionally render content."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"<% if (cell.value > 100) { %> 'High' <% } else { %> 'Normal' <% } %>"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"3. Combining data fields"}),": Render content using multiple data fields from the cell."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"<%= cell.row.getValue('firstName') + ' ' + cell.row.getValue('lastName') %>"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"4. Escaping HTML content"}),": Safely render user-generated content."]}),"\n",(0,n.jsx)(t.p,{children:"The renderer has access to detailed cell, row, and column properties in the client side:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"TableCell Properties:"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"column"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TableColumn"})}),(0,n.jsx)(t.td,{children:"The associated column object."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"first"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{children:"Indicates if the cell is the first in the row."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The cell ID."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"int"})}),(0,n.jsx)(t.td,{children:"The cell's index within its row."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{children:"Indicates if the cell is the last in the row."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"row"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TableRow"})}),(0,n.jsx)(t.td,{children:"The associated row object for the cell."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Object"})}),(0,n.jsx)(t.td,{children:"The raw value of the cell, directly from the data source."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"TableRow Properties:"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cells"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TableCell[]"})}),(0,n.jsx)(t.td,{children:"The cells within the row."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Object"})}),(0,n.jsx)(t.td,{children:"The data provided by the application for the row."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"even"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{children:"Indicates if the row is even-numbered (for styling purposes)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"first"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{children:"Indicates if the row is the first in the table."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"Unique ID for the row."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"int"})}),(0,n.jsx)(t.td,{children:"The row index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{children:"Indicates if the row is the last in the table."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"odd"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{children:"Indicates if the row is odd-numbered (for styling purposes)."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"TableColumn Properties:"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"align"}),(0,n.jsx)(t.td,{children:"ColumnAlignment"}),(0,n.jsx)(t.td,{children:"The alignment of the column (left, center, right)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"The field of the row object to get the cell's data from."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"label"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"The name to render in the column header."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pinned"}),(0,n.jsx)(t.td,{children:"ColumnPinDirection"}),(0,n.jsx)(t.td,{children:"The pin direction of the column (left, right, auto)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sortable"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"If true, the column can be sorted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort"}),(0,n.jsx)(t.td,{children:"SortDirection"}),(0,n.jsx)(t.td,{children:"The sort order of the column."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type"}),(0,n.jsx)(t.td,{children:"ColumnType"}),(0,n.jsx)(t.td,{children:"The type of the column (text, number, boolean, etc.)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"minWidth"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"The minimum width of the column in pixels."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"available-renderers",children:"Available Renderers"}),"\n",(0,n.jsxs)(t.p,{children:["While custom renderers can be created, there are multiple pre-configured renderers available for use within a ",(0,n.jsx)(t.code,{children:"Table"}),". The following are available for developers to use out of the box without the need to create a custom renderer:"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ButtonRenderer"})," - Renderer for a webforj button."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"NativeButtonRenderer"})," - Renderer for a native HTML button."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ElementRenderer"})," - The base class for all renderers which render an HTML tag ",(0,n.jsx)(t.strong,{children:"with"})," content."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"VoidElementRenderer"})," - The base class for all renderers which render a void element, or an HTML tag ",(0,n.jsx)(t.strong,{children:"without"})," content."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"IconRenderer"})," - Renderer for an icon - ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/docs/components/dwc-icon",children:"see this"})})," article for more information on icons."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Renderers allow for custom events to be written as well by extending any of the supported base renderer. Currently, renderers come with a ",(0,n.jsx)(t.code,{children:"RendererClickEvent"})," available for use by developers."]}),"\n",(0,n.jsxs)(t.p,{children:["Below is an example of a ",(0,n.jsx)(t.code,{children:"Table"})," that uses renderers to display rich content:"]}),"\n",(0,n.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=addondemos.tabledemos.TableRichContent",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/TableRichContent.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/tablestyles/richcontent/styles.css",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/MusicRecord.java","https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/Service.java"],height:"600px"})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2610:(e,t,r)=>{var n=r(4836);t.Z=void 0;var i=n(r(4938)),s=r(5893),l=(0,i.default)((0,s.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=l},5162:(e,t,r)=>{r.d(t,{Z:()=>l});r(7294);var n=r(6010);const i={tabItem:"tabItem_Ymn6"};var s=r(5893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,l),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7294),i=r(6010),s=r(2466),l=r(6550),o=r(469),a=r(1980),d=r(7392),c=r(12);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}(r);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const i=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,s=u(e),[l,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,h]=x({queryString:r,groupId:i}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Nk)(r);return[i,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),g=(()=>{const e=d??m;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{g&&a(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),b(e)}),[h,b,s]),tabValues:s}}var b=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(5893);function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=a.indexOf(t),i=o[r].value;i!==n&&(d(t),l(i))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:h,onClick:c,...s,className:(0,i.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function A(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(j,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,f.jsx)(A,{...e,children:h(e.children)},String(t))}},9469:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),i=r(917),s=r(4866),l=r(5162),o=r(4673),a=r(1750),d=r(1974),c=r(7762),h=r(2143),u=r(2949),p=r(2610),x=r(5944);function m(e){let{collapse:t,setCollapse:r}=e;const n=i.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,s=i.iv`
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
  `,l=i.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,x.tZ)("div",{css:n,children:(0,x.tZ)("button",{css:s,onClick:()=>{r(!t)},children:t?(0,x.tZ)("img",{css:l,src:c.Z,className:"icon-tabler-arrow-bar-up"}):(0,x.tZ)("img",{css:l,src:d.Z,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const r=i.iv`
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
  `,n=i.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,x.tZ)("button",{css:r,onClick:()=>{window.open(t,"_blank")},children:(0,x.tZ)("img",{css:n,src:h.Z})})}function g(e){let{path:t,javaC:r,javaE:d,cssURL:c,javaHighlight:h,height:g,frame:f,tabs:v}=e;const[j,A]=(0,n.useState)(""),[w,y]=(0,n.useState)(""),[Z,S]=(0,n.useState)(""),[D,k]=(0,n.useState)(!(!r||!d)),[B,C]=(0,n.useState)(!1),[T,L]=(0,n.useState)({}),[E,M]=(0,n.useState)(!1),[N,R]=(0,n.useState)(0),[H,X]=(0,n.useState)(0),[z,F]=(0,n.useState)(25),[V,O]=(0,n.useState)(25),[J,G]=(0,n.useState)(0),[I,Y]=(0,n.useState)(!1),P=(0,n.useRef)(null),W=(0,n.useRef)(null);(0,n.useEffect)((()=>{d&&fetch(d).then((e=>e.text())).then((e=>{y(e);const t=new URL(d).pathname.split("/"),r=t[t.length-1];L((e=>({...e,javaFile:r})))})),r&&fetch(r).then((e=>e.text())).then((e=>{A(e)})),c&&fetch(c).then((e=>e.text())).then((e=>{S(e);const t=new URL(c).pathname.split("/"),r=t[t.length-1];L((e=>({...e,cssFile:r})))})),G(P.current?P.current.offsetWidth:0)}),[]);const U=()=>{M(!1)},q=e=>{if(E){const t=e.clientX-N;H+t>J/3&&(P.current.style.width=`${H+t}px`,W.current.style.right=(z-t<25?25:z-t)+"px",O(z-t<25?25:z-t))}},K=i.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==f?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
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
    height: ${g||"100%"};
    pointer-events: ${E?"none":"auto"};
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
  `,te=i.iv`
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
  `,re=i.iv`
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
  `,ne=i.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,x.BX)("div",{css:K,onMouseUp:U,onMouseLeave:U,onMouseMove:q,children:["hidden"!=f?(0,x.BX)("div",{onMouseEnter:()=>{C(!0)},onMouseLeave:()=>C(!1),css:Q,children:[(0,x.tZ)("iframe",{onMouseUp:U,loading:"lazy",src:t+"&__theme__="+(0,u.I)().colorMode,css:_,ref:P,onMouseMove:q}),(0,x.tZ)("div",{css:$,ref:W,children:(0,x.tZ)(b,{url:t})}),(0,x.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),M(!0),R(e.clientX),X(P.current?P.current.offsetWidth:0),F(V)},children:(0,x.tZ)(p.Z,{})})]}):null,(0,x.BX)(o.Z,{css:te,summary:(0,x.tZ)("summary",{onClick:()=>Y(!I),children:I?"Hide Code":"Show Code"}),children:[r&&d?(0,x.tZ)(m,{collapse:D,setCollapse:k}):null,c?(0,x.BX)(s.Z,{css:re,children:[(0,x.tZ)(l.Z,{value:v?v[0]:"Java",label:v?v[0]:T.javaFile,default:!0,children:(0,x.tZ)(a.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:D?j:w})}),(0,x.tZ)(l.Z,{value:v?v[1]:"CSS",label:v?v[1]:T.cssFile,children:(0,x.tZ)(a.Z,{css:ne,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:Z})})]}):(0,x.tZ)(s.Z,{css:re,children:(0,x.tZ)(l.Z,{value:v?v[0]:"Java",label:v?v[0]:T.javaFile,default:!0,children:(0,x.tZ)(a.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:D?j:w})})})]})]})}},9358:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),i=r(917),s=r(4866),l=r(5162),o=r(4673),a=r(1750),d=r(1974),c=r(7762),h=r(2143),u=r(2949),p=r(2610),x=r(5944);function m(e){let{collapse:t,setCollapse:r}=e;const n=i.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,s=i.iv`
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
  `,l=i.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,x.tZ)("div",{css:n,children:(0,x.tZ)("button",{css:s,onClick:()=>{r(!t)},children:t?(0,x.tZ)("img",{css:l,src:c.Z,className:"icon-tabler-arrow-bar-up"}):(0,x.tZ)("img",{css:l,src:d.Z,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const r=i.iv`
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
  `,n=i.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,x.tZ)("button",{css:r,onClick:()=>{window.open(t,"_blank")},children:(0,x.tZ)("img",{css:n,src:h.Z})})}function g(e){let{path:t,javaC:r,javaE:d,urls:c,cssURL:h,javaHighlight:g,height:f,frame:v,tabs:j}=e;const[A,w]=(0,n.useState)(""),[y,Z]=(0,n.useState)(""),[S,D]=(0,n.useState)({}),[k,B]=(0,n.useState)(""),[C,T]=(0,n.useState)(!(!r||!d)),[L,E]=(0,n.useState)(!1),[M,N]=(0,n.useState)({}),[R,H]=(0,n.useState)(!1),[X,z]=(0,n.useState)(0),[F,V]=(0,n.useState)(0),[O,J]=(0,n.useState)(25),[G,I]=(0,n.useState)(25),[Y,P]=(0,n.useState)(0),[W,U]=(0,n.useState)(!1),q=(0,n.useRef)(null),K=(0,n.useRef)(null);(0,n.useEffect)((()=>{d&&fetch(d).then((e=>e.text())).then((e=>{Z(e);const t=new URL(d).pathname.split("/"),r=t[t.length-1];N((e=>({...e,javaFile:r})))})),r&&fetch(r).then((e=>e.text())).then((e=>{w(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{B(e);const t=new URL(h).pathname.split("/"),r=t[t.length-1];N((e=>({...e,cssFile:r})))})),c.forEach((e=>{const t=new URL(e).pathname.split("/"),r=t[t.length-1];fetch(e).then((e=>e.text())).then((e=>{D((t=>({...t,[r]:{fileName:r,code:e}})))}))})),P(q.current?q.current.offsetWidth:0)}),[]);const Q=()=>{H(!1)},_=e=>{if(R){const t=e.clientX-X;F+t>Y/3&&(q.current.style.width=`${F+t}px`,K.current.style.right=(O-t<25?25:O-t)+"px",I(O-t<25?25:O-t))}},$=i.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==v?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,ee=i.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,te=i.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${f||"100%"};
    pointer-events: ${R?"none":"auto"};
  `,re=i.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${L&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ne=i.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ie=i.iv`
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
  `,se=i.iv`
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
  `,le=i.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,x.BX)("div",{css:$,onMouseUp:Q,onMouseLeave:Q,onMouseMove:_,children:["hidden"!=v?(0,x.BX)("div",{onMouseEnter:()=>{E(!0)},onMouseLeave:()=>E(!1),css:ee,children:[(0,x.tZ)("iframe",{onMouseUp:Q,loading:"lazy",src:t+"&__theme__="+(0,u.I)().colorMode,css:te,ref:q,onMouseMove:_}),(0,x.tZ)("div",{css:re,ref:K,children:(0,x.tZ)(b,{url:t})}),(0,x.tZ)("div",{css:ne,onMouseDown:e=>{e.preventDefault(),H(!0),z(e.clientX),V(q.current?q.current.offsetWidth:0),J(G)},children:(0,x.tZ)(p.Z,{})})]}):null,(0,x.BX)(o.Z,{css:ie,summary:(0,x.tZ)("summary",{onClick:()=>U(!W),children:W?"Hide Code":"Show Code"}),children:[r&&d?(0,x.tZ)(m,{collapse:C,setCollapse:T}):null,h?(0,x.BX)(s.Z,{css:se,children:[(0,x.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,x.tZ)(a.Z,{css:le,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:C?A:y})}),Object.keys(S).map(((e,t)=>(0,x.tZ)(l.Z,{value:e,label:e,children:(0,x.tZ)(a.Z,{css:le,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:S[e].code})},t))),(0,x.tZ)(l.Z,{value:j?j[1]:"CSS",label:j?j[1]:M.cssFile,children:(0,x.tZ)(a.Z,{css:le,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:k})})]}):(0,x.BX)(s.Z,{css:se,children:[(0,x.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,x.tZ)(a.Z,{css:le,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:C?A:y})}),Object.keys(S).map(((e,t)=>(0,x.tZ)(l.Z,{value:e,label:e,children:(0,x.tZ)(a.Z,{css:le,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:S[e].code})},t)))]})]})]})}},1415:(e,t,r)=>{r.d(t,{Z:()=>s});r(7294);var n=r(8397),i=r(5893);function s(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Z,{...e})})}},7762:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png"},1974:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},2143:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);
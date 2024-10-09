"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5560],{9271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(4848),s=t(8453);const i={sidebar_position:4,title:"Rendering",slug:"rendering"},d="Rich Content and Client-Side Rendering",l={id:"components/table/table_rendering",title:"Rendering",description:"Tables in webforj are also configurable using the following tools to display rich content within cells. This includes interactive components or formatted data within the table cells.",source:"@site/docs/components/table/table_rendering.md",sourceDirName:"components/table",slug:"/components/table/rendering",permalink:"/docs/components/table/rendering",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/table/table_rendering.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Rendering",slug:"rendering"},sidebar:"documentationSidebar",previous:{title:"Sorting",permalink:"/docs/components/table/sorting"},next:{title:"Large Data Sets",permalink:"/docs/components/table/data"}},c={},o=[{value:"Lodash Renderers",id:"lodash-renderers",level:2},{value:"Lodash Syntax",id:"lodash-syntax",level:3},{value:"Syntax overview for lodash templates:",id:"syntax-overview-for-lodash-templates",level:4},{value:"Examples using cell data:",id:"examples-using-cell-data",level:4},{value:"Available Renderers",id:"available-renderers",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{ComponentDemo:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ComponentDemo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"rich-content-and-client-side-rendering",children:"Rich Content and Client-Side Rendering"}),"\n",(0,r.jsx)(n.p,{children:"Tables in webforj are also configurable using the following tools to display rich content within cells. This includes interactive components or formatted data within the table cells."}),"\n",(0,r.jsxs)(n.p,{children:["These elements are rendered client-side, meaning the process of generating and displaying rich content is done directly in the browser, using JavaScript only when needed, increasing performance of applications using the ",(0,r.jsx)(n.code,{children:"Table"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"lodash-renderers",children:"Lodash Renderers"}),"\n",(0,r.jsxs)(n.p,{children:["Renderers offer a powerful mechanism for customizing the way data is displayed within a ",(0,r.jsx)(n.code,{children:"Table"}),". The primary class, ",(0,r.jsx)(n.code,{children:"Renderer"}),", is designed to be extended to create custom renderers based on lodash templates, enabling dynamic and interactive content rendering."]}),"\n",(0,r.jsxs)(n.p,{children:["Lodash templates enable the insertion of HTML directly into table cells, making them highly effective for rendering complex cell data in a ",(0,r.jsx)(n.code,{children:"Table"}),". This approach allows for the dynamic generation of HTML based on cell data, facilitating rich and interactive table cell content."]}),"\n",(0,r.jsx)(n.h3,{id:"lodash-syntax",children:"Lodash Syntax"}),"\n",(0,r.jsxs)(n.p,{children:["The following section outlines the basics of Lodash syntax. While this is not an exhaustive or comprehensive overview, it can be used to help start using Lodash within the ",(0,r.jsx)(n.code,{children:"Table"})," component."]}),"\n",(0,r.jsx)(n.h4,{id:"syntax-overview-for-lodash-templates",children:"Syntax overview for lodash templates:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<%= ... %>"})," - Interpolates values, inserting the JavaScript code's result into the template."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<% ... %>"})," - Executes JavaScript code, allowing loops, conditionals, and more."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<%- ... %>"})," - Escapes HTML content, ensuring interpolated data is safe from HTML injection attacks."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"examples-using-cell-data",children:"Examples using cell data:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"1. Simple value interpolation"}),": Directly display the cell's value."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"<%= cell.value %>"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"2. Conditional rendering"}),": Use JavaScript logic to conditionally render content."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"<% if (cell.value > 100) { %> 'High' <% } else { %> 'Normal' <% } %>"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"3. Combining data fields"}),": Render content using multiple data fields from the cell."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"<%= cell.row.getValue('firstName') + ' ' + cell.row.getValue('lastName') %>"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4. Escaping HTML content"}),": Safely render user-generated content."]}),"\n",(0,r.jsx)(n.p,{children:"The renderer has access to detailed cell, row, and column properties in the client side:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"TableCell Properties:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"column"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"TableColumn"})}),(0,r.jsx)(n.td,{children:"The associated column object."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"first"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Indicates if the cell is the first in the row."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"The cell ID."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"index"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int"})}),(0,r.jsx)(n.td,{children:"The cell's index within its row."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"last"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Indicates if the cell is the last in the row."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"row"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"TableRow"})}),(0,r.jsx)(n.td,{children:"The associated row object for the cell."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Object"})}),(0,r.jsx)(n.td,{children:"The raw value of the cell, directly from the data source."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"TableRow Properties:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cells"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"TableCell[]"})}),(0,r.jsx)(n.td,{children:"The cells within the row."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Object"})}),(0,r.jsx)(n.td,{children:"The data provided by the application for the row."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"even"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Indicates if the row is even-numbered (for styling purposes)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"first"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Indicates if the row is the first in the table."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"Unique ID for the row."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"index"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int"})}),(0,r.jsx)(n.td,{children:"The row index."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"last"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Indicates if the row is the last in the table."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"odd"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Indicates if the row is odd-numbered (for styling purposes)."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"TableColumn Properties:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"align"}),(0,r.jsx)(n.td,{children:"ColumnAlignment"}),(0,r.jsx)(n.td,{children:"The alignment of the column (left, center, right)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The field of the row object to get the cell's data from."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"label"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The name to render in the column header."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pinned"}),(0,r.jsx)(n.td,{children:"ColumnPinDirection"}),(0,r.jsx)(n.td,{children:"The pin direction of the column (left, right, auto)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sortable"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"If true, the column can be sorted."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sort"}),(0,r.jsx)(n.td,{children:"SortDirection"}),(0,r.jsx)(n.td,{children:"The sort order of the column."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"ColumnType"}),(0,r.jsx)(n.td,{children:"The type of the column (text, number, boolean, etc.)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"minWidth"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"The minimum width of the column in pixels."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"available-renderers",children:"Available Renderers"}),"\n",(0,r.jsxs)(n.p,{children:["While custom renderers can be created, there are multiple pre-configured renderers available for use within a ",(0,r.jsx)(n.code,{children:"Table"}),". The following are available for developers to use out of the box without the need to create a custom renderer:"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ButtonRenderer"})," - Renderer for a webforj button."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NativeButtonRenderer"})," - Renderer for a native HTML button."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ElementRenderer"})," - The base class for all renderers which render an HTML tag ",(0,r.jsx)(n.strong,{children:"with"})," content."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"VoidElementRenderer"})," - The base class for all renderers which render a void element, or an HTML tag ",(0,r.jsx)(n.strong,{children:"without"})," content."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"IconRenderer"})," - Renderer for an icon - ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/components/dwc-icon",children:"see this"})})," article for more information on icons."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Renderers allow for custom events to be written as well by extending any of the supported base renderer. Currently, renderers come with a ",(0,r.jsx)(n.code,{children:"RendererClickEvent"})," available for use by developers."]}),"\n",(0,r.jsxs)(n.p,{children:["Below is an example of a ",(0,r.jsx)(n.code,{children:"Table"})," that uses renderers to display rich content:"]}),"\n",(0,r.jsx)(t,{path:"https://demo.webforj.com/webapp/controlsamples/tablerichcontent?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/TableRichContentView.java",urls:["https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/MusicRecord.java","https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/Service.java"],height:"600px"})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var r=t(6540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
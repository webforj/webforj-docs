"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1617],{3771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(4848),r=t(8453);const a={sidebar_position:6,title:"Large Data Sets",slug:"data"},s=void 0,o={id:"components/table/table_large_data",title:"Large Data Sets",description:"Virtual Scrolling",source:"@site/docs/components/table/table_large_data.md",sourceDirName:"components/table",slug:"/components/table/data",permalink:"/docs/components/table/data",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/table/table_large_data.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Large Data Sets",slug:"data"},sidebar:"documentationSidebar",previous:{title:"Rendering",permalink:"/docs/components/table/rendering"},next:{title:"Editing and Refreshing",permalink:"/docs/components/table/refreshing"}},l={},c=[{value:"Virtual Scrolling",id:"virtual-scrolling",level:2},{value:"Initial Render",id:"initial-render",level:4},{value:"Dynamic Loading",id:"dynamic-loading",level:4},{value:"Item Recycling",id:"item-recycling",level:4},{value:"Performance Benefits:",id:"performance-benefits",level:4},{value:"Overscan",id:"overscan",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,r.R)(),...e.components},{ComponentDemo:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ComponentDemo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"virtual-scrolling",children:"Virtual Scrolling"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Table"})," component is built to efficiently handle large datasets by utilizing virtual scrolling, which  is a technique used in web applications to optimize the rendering and performance of large lists or tables by rendering only the visible items on the screen."]}),"\n",(0,i.jsx)(n.h4,{id:"initial-render",children:"Initial Render"}),"\n",(0,i.jsx)(n.p,{children:"Virtual scrolling is a design pattern in which, initially, only a small subset of items that fit within the visible area of the scrollable container is rendered. This minimizes the amount of DOM elements created and speeds up the initial rendering process."}),"\n",(0,i.jsx)(n.h4,{id:"dynamic-loading",children:"Dynamic Loading"}),"\n",(0,i.jsx)(n.p,{children:"As the user scrolls down or up, new items are dynamically loaded into the view. These items are typically fetched from the data source based on the current scroll position."}),"\n",(0,i.jsx)(n.h4,{id:"item-recycling",children:"Item Recycling"}),"\n",(0,i.jsx)(n.p,{children:"Instead of creating a new DOM element for each item, virtual scrolling often reuses existing DOM elements. As an item moves out of the visible area, its DOM element is recycled and repurposed for a new item entering the visible area. This recycling process helps to reduce memory usage and improves performance."}),"\n",(0,i.jsx)(n.h4,{id:"performance-benefits",children:"Performance Benefits:"}),"\n",(0,i.jsx)(n.p,{children:"The main advantage of virtual scrolling is improved performance, especially when dealing with a large number of items. It reduces the amount of DOM manipulation and enhances the overall responsiveness of the user interface."}),"\n",(0,i.jsxs)(n.p,{children:["The below ",(0,i.jsx)(n.code,{children:"Table"})," shows all olympic winners - a large dataset that benefits greatly from the table's virtual scrolling functionality:"]}),"\n",(0,i.jsx)(t,{path:"https://demo.webforj.com/webapp/controlsamples/tableolympicwinners?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/TableOlympicWinnersView.java",urls:["https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/MusicRecord.java","https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/Service.java"],height:"600px"}),"\n",(0,i.jsx)(n.h3,{id:"overscan",children:"Overscan"}),"\n",(0,i.jsxs)(n.p,{children:["Setting the table's ",(0,i.jsx)(n.code,{children:"Overscan"})," property determines how many rows to render outside of the visible area. This setting can be configured with the ",(0,i.jsx)(n.code,{children:"setOverscan(double value)"})," method."]}),"\n",(0,i.jsx)(n.p,{children:"A higher overscan value can reduce the frequency of rendering when scrolling, but at the cost of rendering more rows than are visible at any one time. This can be a trade-off between rendering performance and scroll smoothness."})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
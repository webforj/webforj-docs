"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3433],{7424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(4848),o=n(8453),r=n(3514);const s={sidebar_position:1,title:"Navigation Lifecycle"},a=void 0,c={id:"routing/navigation-lifecycle/overview",title:"Navigation Lifecycle",description:"Navigating through different views in a web app involves several stages, offering opportunities to perform actions before, during, or after a transition. The navigation lifecycle provides an event-driven system that allows developers to manage key aspects of navigation, such as validating data, controlling access, updating the UI, and handling cleanup.",source:"@site/docs/routing/navigation-lifecycle/overview.md",sourceDirName:"routing/navigation-lifecycle",slug:"/routing/navigation-lifecycle/overview",permalink:"/docs/routing/navigation-lifecycle/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/routing/navigation-lifecycle/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Navigation Lifecycle"},sidebar:"documentationSidebar",previous:{title:"State Management",permalink:"/docs/routing/state-managmenet"},next:{title:"Lifecycle Observers",permalink:"/docs/routing/navigation-lifecycle/observers"}},l={},d=[{value:"Lifecycle events overview",id:"lifecycle-events-overview",level:2},{value:"Topics",id:"topics",level:2}];function g(e){const t={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Navigating through different views in a web app involves several stages, offering opportunities to perform actions before, during, or after a transition. The navigation lifecycle provides an event-driven system that allows developers to manage key aspects of navigation, such as validating data, controlling access, updating the UI, and handling cleanup."}),"\n",(0,i.jsx)(t.p,{children:"This flexible system ensures smooth, consistent transitions by allowing developers to hook into critical points in the navigation process. Whether you need to block navigation, fetch data when a component is displayed, or manage unsaved changes, you have full control over the navigation flow through its lifecycle events and observers."}),"\n",(0,i.jsx)(t.h2,{id:"lifecycle-events-overview",children:"Lifecycle events overview"}),"\n",(0,i.jsx)(t.p,{children:"The navigation process is governed by a series of events that are triggered during route transitions. These events allow you to react at specific points in the lifecycle:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"WillEnter"}),": Triggered before navigating to a route and before its component is attached to the DOM. This is ideal for tasks like authentication checks or blocking the navigation if necessary."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DidEnter"}),": Triggered after the navigation is completed and the component is attached to the DOM. This event is suited for actions such as fetching data, running animations, or setting focus on UI elements."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"WillLeave"}),": Triggered before navigating away from the current route and before its component is removed from the DOM. It's useful for managing unsaved data, prompting the user for confirmation, or handling cleanup tasks."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DidLeave"}),": Triggered after switching to a different route and after the component has been removed from the DOM. This event is ideal for clearing resources or resetting the UI for future use."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These events provide granular control over the navigation lifecycle, making it easier to manage complex transitions and ensure smooth interactions across routes."}),"\n",(0,i.jsx)(t.h2,{id:"topics",children:"Topics"}),"\n",(0,i.jsx)(r.A,{className:"topics-section"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>m});n(6540);var i=n(53),o=n(4142),r=n(5489),s=n(6654),a=n(1312),c=n(1107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function g(e){let{href:t,children:n}=e;return(0,d.jsx)(r.A,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:o,description:r}=e;return(0,d.jsxs)(g,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:o,children:[n," ",o]}),r&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:r,children:r})]})}function u(e){let{item:t}=e;const n=(0,o.Nr)(t);return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const n=(0,o.$S)();return(0,d.jsx)(m,{items:n.items,className:t})}function m(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(p,{...e});const r=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(v,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
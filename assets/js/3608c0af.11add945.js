"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5683],{6302:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=o(5893),s=o(1151);const i={sidebar_position:10,title:"BBj Controls and webforJ Components"},r=void 0,a={id:"architecture/controls-components",title:"BBj Controls and webforJ Components",description:"The webforJ framework is designed to provide a Java API around the BBj language's DWC, offers a robust architecture for building and managing components.",source:"@site/docs/architecture/controls-components.md",sourceDirName:"architecture",slug:"/architecture/controls-components",permalink:"/docs/architecture/controls-components",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/architecture/controls-components.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"BBj Controls and webforJ Components"},sidebar:"documentationSidebar",previous:{title:"Client/Server Interaction",permalink:"/docs/architecture/"},next:{title:"Glossary",permalink:"/docs/glossary"}},c={},l=[{value:"Mapping BBj Controls to webforJ Components",id:"mapping-bbj-controls-to-webforj-components",level:2},{value:"The <code>DwcComponent</code> Base Class",id:"the-dwccomponent-base-class",level:2},{value:"Final Classes and Extension Restrictions",id:"final-classes-and-extension-restrictions",level:3},{value:"Composite Components: Extending Through Composition",id:"composite-components-extending-through-composition",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The webforJ framework is designed to provide a Java API around the BBj language's DWC, offers a robust architecture for building and managing components."}),"\n",(0,t.jsx)(n.h2,{id:"mapping-bbj-controls-to-webforj-components",children:"Mapping BBj Controls to webforJ Components"}),"\n",(0,t.jsx)(n.p,{children:"One of the fundamental principles of webforJ is the binding of BBj controls with webforJ components. In this architecture, every webforJ component shipped with the product has a one-to-one mapping with an underlying BBj control. This mapping ensures that Java components mirror the behavior and properties of their BBj counterparts seamlessly."}),"\n",(0,t.jsx)(n.p,{children:"This close correspondence between webforJ components and BBj controls simplifies development and allows Java developers to work with familiar concepts when building web-based applications without the need to write any BBj code."}),"\n",(0,t.jsxs)(n.h2,{id:"the-dwccomponent-base-class",children:["The ",(0,t.jsx)(n.code,{children:"DwcComponent"})," Base Class"]}),"\n",(0,t.jsx)(n.p,{children:"At the heart of webforJ's component architecture lies the DWCComponent base class. All webforJ components inherit from this class. This inheritance grants each webforJ component access to its underlying BBj control, providing a direct link between the Java component and the BBj control it represents."}),"\n",(0,t.jsx)(n.p,{children:"However, it's important to note that developers are restricted from extending the DWCComponent class further. Attempting to do so will result in a runtime exception that disallows such extensions. This restriction is in place to maintain the integrity of the underlying BBj control and ensure that developers do not inadvertently manipulate it in ways that could lead to unintended consequences."}),"\n",(0,t.jsx)(n.h3,{id:"final-classes-and-extension-restrictions",children:"Final Classes and Extension Restrictions"}),"\n",(0,t.jsxs)(n.p,{children:["In webforJ, most component classes, with the exception of the built-in HTML Elements and any classes extending these, are declared as ",(0,t.jsx)(n.code,{children:"final"}),". This means that they are not available for extension or subclassing. This design choice is deliberate and serves multiple purposes:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Control Over Underlying BBj Control"}),": As mentioned earlier, extending webforJ component classes would grant developers control over the underlying BBj control. To maintain the consistency and predictability of component behavior, this level of control is restricted."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Preventing Unintended Modifications"}),": Making the component classes ",(0,t.jsx)(n.code,{children:"final"})," prevents unintentional modifications to core components, reducing the risk of introducing unexpected behaviors or vulnerabilities."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Promoting the Use of Composites"}),": To extend the functionality of components, webforJ framework encourages developers to use a composite approach. Composite components are Java classes that contain other webforJ components or standard HTML elements. While traditional inheritance is discouraged, composite components offer a way to create new, customized components that encapsulate existing ones."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"composite-components-extending-through-composition",children:"Composite Components: Extending Through Composition"}),"\n",(0,t.jsxs)(n.p,{children:["In webforJ framework, the concept of composite components plays a pivotal role in extending component functionality. Composite components are Java classes that are not restricted by the final keyword, allowing developers to create new components that extends the behavior of a single component, or combines multiple components into one, by composing existing components. Classes which facilitate this behavior have been created for developer use. See the ",(0,t.jsx)(n.code,{children:"Composite"})," and ",(0,t.jsx)(n.code,{children:"ElementComposite"})," sections to see how to properly create composite components."]}),"\n",(0,t.jsx)(n.p,{children:"This approach encourages a more modular and flexible development style, enabling developers to build tailored components that meet specific requirements."})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);
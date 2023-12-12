"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9178],{5241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(5893),o=t(1151);const s={sidebar_position:1,title:"Component Basics",slug:"basics",draft:!1},r=void 0,a={id:"ui/component-basics",title:"Component Basics",description:"Components are fundamental building blocks that can be added to a window, providing user interface functionality and custom behavior. In the DWCj, the Component class serves as the foundation for all components within the engine.",source:"@site/docs/ui/component-basics.md",sourceDirName:"ui",slug:"/ui/basics",permalink:"/docs/ui/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/ui/component-basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Component Basics",slug:"basics",draft:!1},sidebar:"documentationSidebar",previous:{title:"Building a UI in DWCj",permalink:"/docs/ui/home"},next:{title:"Custom Components",permalink:"/docs/ui/custom-components/home"}},c={},d=[{value:"Lifecycle Management",id:"lifecycle-management",level:2},{value:"Create and Destroy",id:"create-and-destroy",level:3},{value:"Create",id:"create",level:4},{value:"Destroy",id:"destroy",level:4},{value:"Asynchronous Attachment",id:"asynchronous-attachment",level:3},{value:"Observers",id:"observers",level:3},{value:"Component Properties",id:"component-properties",level:2},{value:"ID",id:"id",level:3},{value:"Server-Side Component ID",id:"server-side-component-id",level:4},{value:"Client-Side Component ID",id:"client-side-component-id",level:4},{value:"User Data",id:"user-data",level:3}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Components are fundamental building blocks that can be added to a window, providing user interface functionality and custom behavior. In the DWCj, the ",(0,i.jsx)(n.code,{children:"Component"})," class serves as the foundation for all components within the engine."]}),"\n",(0,i.jsx)(n.h2,{id:"lifecycle-management",children:"Lifecycle Management"}),"\n",(0,i.jsx)(n.p,{children:"Understanding the component lifecycle is essential for creating, managing, and utilizing components effectively. The following three lifecycle states have methods to manipulate their behavior. These methods should not explicitly be called by the user."}),"\n",(0,i.jsx)(n.h3,{id:"create-and-destroy",children:"Create and Destroy"}),"\n",(0,i.jsxs)(n.p,{children:["All classes that extend the ",(0,i.jsx)(n.code,{children:"Component"})," class are responsible for implementing the functionality to be executed when the ",(0,i.jsx)(n.code,{children:"Component"})," is created, and when it is destroyed. This is done by overriding the ",(0,i.jsx)(n.code,{children:"onCreate()"})," and ",(0,i.jsx)(n.code,{children:"onDestroy()"})," methods, respectively."]}),"\n",(0,i.jsx)(n.h4,{id:"create",children:"Create"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"onCreate()"})," is a method called when the component is created. Creating components involves setting up their initial state and functionality. This is where you define what the component should do when it's first created. Whether it's initializing variables, setting up event listeners, or performing any other setup, the ",(0,i.jsx)(n.code,{children:"onCreate()"})," method is your entry point for customizing component behavior."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"onCreate()"})," method is where the component and any constituents should be added to the window."]})}),"\n",(0,i.jsx)(n.h4,{id:"destroy",children:"Destroy"}),"\n",(0,i.jsxs)(n.p,{children:["Destroying components is an essential part of managing resources and ensuring proper cleanup. Destroying a component is necessary when it's no longer needed or when you want to release resources associated with it. It allows a developer to perform cleanup tasks, such as stopping timers, releasing memory, or detaching event listeners. It also allows the ",(0,i.jsx)(n.code,{children:"destroy()"})," method to be called on any constituent components."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"onDestroy()"})," method is responsible for calling the ",(0,i.jsx)(n.code,{children:"destroy()"})," method on any constituent components. Otherwise, these components will still exist in the DOM, but will not be reachable via the API."]})}),"\n",(0,i.jsx)(n.h3,{id:"asynchronous-attachment",children:"Asynchronous Attachment"}),"\n",(0,i.jsxs)(n.p,{children:["While the ",(0,i.jsx)(n.code,{children:"onAttach()"})," method is a protected method intended for use internally, the ",(0,i.jsx)(n.code,{children:"whenAttached()"})," method returns a ",(0,i.jsx)(n.code,{children:"PendingResult"}),", which allows for additional specified behavior to execute asynchronously once the component is attached in the DOM."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Unlike the previous three methods, ",(0,i.jsx)(n.code,{children:"whenAttached()"})," is meant to be explicitly called by the user."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class Demo extends App {\r\n  @Override\r\n  public void run() throws DwcjException {\r\n    Frame window = new Frame();\r\n\r\n    // onCreate() method is called\r\n    Button button = new Button(); \r\n\r\n    /* Explicit call to whenAttached() which will display a \r\n    message box when the button is attached to the Frame.*/\r\n    button.whenAttached().thenAccept( e -> msgbox("I\'m attached!")); \r\n  \r\n    // onAttach() method is called, which triggers the whenAttached PendingResult to resolve.\r\n    window.add(button); \r\n  }\r\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"observers",children:"Observers"}),"\n",(0,i.jsxs)(n.p,{children:["Observers play a vital role in keeping track of component lifecycle events. Observers can be added and removed using the ",(0,i.jsx)(n.code,{children:"addLifecycleObserver()"})," and ",(0,i.jsx)(n.code,{children:"removeLifecycleObserver()"})," methods, and  receive notifications about events such as creation and destruction of components."]}),"\n",(0,i.jsx)(n.p,{children:"By adding observers, you can take action when a component is created, or destroyed. This is particularly useful for implementing custom logic or handling specific scenarios based on component events."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"Button button = new Button();\r\nbutton.addLifecycleObserver((button, lifecycleEvent) -> {\r\n  if (lifecycleEvent == ComponentLifecycleObserver.LifecycleEvent.DESTROY) {\r\n    //implemented logic to execute when the Button is destroyed\r\n  }\r\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"component-properties",children:"Component Properties"}),"\n",(0,i.jsx)(n.h3,{id:"id",children:"ID"}),"\n",(0,i.jsx)(n.p,{children:"Component IDs serve as unique identifiers for components, allowing you to interact with them and manage their state effectively."}),"\n",(0,i.jsx)(n.h4,{id:"server-side-component-id",children:"Server-Side Component ID"}),"\n",(0,i.jsxs)(n.p,{children:["Every component created from the ",(0,i.jsx)(n.code,{children:"Component"})," class is assigned a server-side identifier automatically. Server-side IDs are essential for internal tracking and identification of components within the framework. You can retrieve the server-side component ID using the ",(0,i.jsx)(n.code,{children:"getComponentId()"})," method."]}),"\n",(0,i.jsx)(n.h4,{id:"client-side-component-id",children:"Client-Side Component ID"}),"\n",(0,i.jsx)(n.p,{children:"While server-side component IDs are automatically generated, client-side component IDs need to be implemented by the user. The client-side ID represents the component's counterpart on the client side of your application."}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["This ID is ",(0,i.jsx)(n.strong,{children:"not"})," the ID attribute of the element in the DOM."]})}),"\n",(0,i.jsx)(n.h3,{id:"user-data",children:"User Data"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Component"})," class allows you to include additional information within the component using the ",(0,i.jsx)(n.code,{children:"setUserData()"})," method. This information is accessible only on the server side of the component via the ",(0,i.jsx)(n.code,{children:"getUserData()"})," method, and is not sent to the client."]}),"\n",(0,i.jsx)(n.p,{children:"This is quite useful when there is information that should be included with a component, and when that information should be accessible without making a trip to the client to retrieve it."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);
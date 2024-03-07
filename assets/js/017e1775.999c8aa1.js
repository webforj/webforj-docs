"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[6929],{4826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>w,frontMatter:()=>c,metadata:()=>h,toc:()=>u});var r=n(5893),a=n(1151),i=n(6957),o=n(7796),s=n(6521),l=n(3273);const c={sidebar_position:26,title:"Drawer"},d=void 0,h={id:"components/drawer",title:"Drawer",description:"The drawer is a container that slides into the viewport to expose additional options and information. Multiple drawers can be created in an application, and they will be stacked above each other.",source:"@site/docs/components/drawer.md",sourceDirName:"components",slug:"/components/drawer",permalink:"/docs/components/drawer",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/drawer.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26,title:"Drawer"},sidebar:"documentationSidebar",previous:{title:"Dialog",permalink:"/docs/components/dialog"},next:{title:"Field",permalink:"/docs/components/fields/"}},p={},u=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Autofocus",id:"autofocus",level:2},{value:"Label",id:"label",level:2},{value:"Placement",id:"placement",level:2},{value:"Events",id:"events",level:2},{value:"Drawer Open",id:"drawer-open",level:3},{value:"Drawer Close",id:"drawer-close",level:3},{value:"Toggling a Drawer Open or Closed",id:"toggling-a-drawer-open-or-closed",level:3},{value:"Removing an Event",id:"removing-an-event",level:3},{value:"Styling",id:"styling",level:2},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Best Practices",id:"best-practices",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{type:"engine",location:"org/dwcj/component/drawer/Drawer",top:"true"}),"\n",(0,r.jsx)(t.p,{children:"The drawer is a container that slides into the viewport to expose additional options and information. Multiple drawers can be created in an application, and they will be stacked above each other."}),"\n",(0,r.jsx)(t.p,{children:'The Drawer component can be used in many different situations, such as by providing a navigation menu that can be toggled, a panel that displays supplementary or contextual information, or to optimize usage on a mobile device. The following example will show a mobile application that uses the DWCJ\'s AppLayout component, and displays a "Welcome Popup" drawer at the bottom when first loaded. Additionally, a navigational Drawer component can be toggled in the application by clicking on the hamburger menu.'}),"\n",(0,r.jsx)(s.Z,{url:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.drawerdemos.DrawerWelcome",mobile:"true"}),"\n",(0,r.jsx)(i.Z,{frame:"hidden",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/drawerdemos/DrawerWelcome.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/drawerstyles/drawer_welcome.css"}),"\n",(0,r.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Navigation Menu"}),": One common usage of a drawer component is as a navigation menu. It provides a space-efficient way to display links to various sections or pages of your application, especially in mobile or responsive layouts. Users can open and close the drawer to access navigation options without cluttering the main content area."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Filter and Sidebar"}),": A drawer can be used as a filter or sidebar in applications that display a list of items. Users can expand the drawer to reveal filter options, sort controls, or additional information related to the list items. This keeps the main content focused on the list while providing advanced features in an accessible way."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"User Profile or Settings"}),": You can use a drawer to show user profile information or application settings. This keeps such information easily accessible but hidden when not needed, maintaining a clean and uncluttered interface. Users can open the drawer to update their profiles or adjust settings."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Notifications"}),": For applications with notifications or alerts, a drawer can slide in to display new messages or updates. Users can quickly check and dismiss notifications without leaving their current view."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(t.p,{children:"The Drawer component contains a single default constructor which will create a new instance of the Drawer class."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"Drawer newDrawer = new Drawer()\n"})}),"\n",(0,r.jsx)(i.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.drawerdemos.DrawerDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/drawerdemos/DrawerDemo.java",height:"600px"}),"\n",(0,r.jsx)(t.p,{children:"Various properties exist that allow for the customization of various attributes of the Drawer component. Below are those properties with examples for their modification."}),"\n",(0,r.jsx)(t.h2,{id:"autofocus",children:"Autofocus"}),"\n",(0,r.jsx)(t.p,{children:"The Auto-Focus property is designed to enhance accessibility and usability by automatically focusing on the first item within a drawer when it is opened. This feature eliminates the need for users to manually navigate to the desired item, saving time and effort."}),"\n",(0,r.jsx)(t.p,{children:"When the drawer is triggered to open, either through an event, by default or any other interaction, the user's focus is directed to the first item within the drawer. This first item could be a button, a link, a menu option, or any other focusable element."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"By automatically focusing on the first item, the developer ensures that users can immediately engage with the most relevant or frequently used option without having to tab or scroll through the entire drawer. This behavior streamlines the user experience and promotes efficient navigation within the UI."})}),"\n",(0,r.jsx)(t.p,{children:"This property can also be particularly beneficial for individuals who rely on keyboard navigation or assistive technologies such as screen readers. It provides a clear starting point within the drawer and allows users to access the desired functionality without unnecessary manual input."}),"\n",(0,r.jsx)(i.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.drawerdemos.DrawerAutoFocus",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/drawerdemos/DrawerAutoFocus.java",height:"600px"}),"\n",(0,r.jsx)(t.h2,{id:"label",children:"Label"}),"\n",(0,r.jsx)(t.p,{children:"The Drawer Label property is a feature designed to enhance accessibility and provide descriptive context for a drawer within a user interface. This property allows developers to assign a label to a drawer, primarily for accessibility purposes, ensuring that screen readers and other assistive technologies can accurately convey the drawer's purpose and content to users."}),"\n",(0,r.jsx)(t.p,{children:"When the Drawer Label property is utilized, the assigned label becomes an integral part of the drawer's accessibility infrastructure. It enables users who rely on assistive technologies to understand the drawer's function and navigate through the interface more effectively."}),"\n",(0,r.jsx)(t.p,{children:"By providing a label for the drawer, developers ensure that screen readers announce the purpose of the drawer to visually impaired users. This information empowers individuals to make informed decisions about interacting with the drawer, as they can understand its content and relevance within the broader user interface."}),"\n",(0,r.jsx)(t.p,{children:"The Label property can be customized to suit the specific context and design requirements of the application. Developers have the flexibility to provide concise and descriptive labels that accurately represent the drawer's content or functionality."}),"\n",(0,r.jsx)(t.h2,{id:"placement",children:"Placement"}),"\n",(0,r.jsx)(t.p,{children:"The placement property of the Drawer UI Component allows developers to specify the position and alignment of the drawer within the viewport. This property offers a range of enum values that provide flexibility in determining where the drawer appears in relation to the main content."}),"\n",(0,r.jsx)(t.p,{children:"The available enum values for the placement property are as follows:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"TOP"}),": This value places the drawer at the top of the viewport, allowing it to occupy the uppermost region."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"TOP_CENTER"}),": With this value, the drawer is positioned at the center of the top portion of the viewport. It is aligned horizontally in the middle, creating a balanced layout."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"BOTTOM"}),": When using this value, the drawer is situated at the bottom of the viewport, appearing below the main content."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"BOTTOM_CENTER"}),": This value centers the drawer horizontally at the bottom of the viewport. It provides a visually balanced composition."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"LEFT"}),": Selecting this value causes the drawer to be positioned on the left side of the viewport, adjacent to the main content."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"RIGHT"}),": By using this value, the drawer is placed on the right side of the viewport, maintaining a close proximity to the main content"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The placement property allows developers to choose the most appropriate position for the drawer based on the specific design and user experience requirements. The enum values offer a variety of placement options to accommodate different interface layouts and visual hierarchies."}),"\n",(0,r.jsx)(t.p,{children:"By leveraging the placement property, developers can create intuitive and efficient user interfaces. For example, placing the drawer on the left or right side allows for quick access to additional functionalities or navigation options, while top or bottom placements are well-suited for contextual information or supplementary content."}),"\n",(0,r.jsx)(i.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.drawerdemos.DrawerPlacement",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/drawerdemos/DrawerPlacement.java",height:"600px"}),"\n",(0,r.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,r.jsx)(t.p,{children:"There are two supported events that can be used with the Drawer component, open and close events. These events are essential components of the Drawer component, providing developers with the means to respond and react to the opening and closing actions of the drawer within the user interface."}),"\n",(0,r.jsx)(t.h3,{id:"drawer-open",children:"Drawer Open"}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"addOpenListener()"})," method to add an open event to your Drawer component."]}),"\n",(0,r.jsx)(t.p,{children:"The Drawer Open Event is triggered when the drawer is initiated to open, either through user interaction or programmatically. This event allows developers to execute specific actions, animations, or updates that should occur when the drawer becomes visible and accessible to the user. To add an open event listener, use the appropriate method:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"myDrawer.addOpenListener( e -> {\r\n  //Executed when the event fires\r\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"By leveraging the Drawer Open Event, developers can synchronize the opening of the drawer with other UI elements, trigger transitions or animations, and update the interface to reflect the change in state. This event can also be used to initiate fetching data, loading content, or any other necessary operations related to the appearance of the drawer."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"onOpen() method is similarly available for use, and simple calls the addOpenListener()"})," method."]})}),"\n",(0,r.jsx)(t.h3,{id:"drawer-close",children:"Drawer Close"}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"addCloseListener()"})," method to add an open event to your Drawer component."]}),"\n",(0,r.jsx)(t.p,{children:"The Drawer Close Event is triggered when the drawer is initiated to close. This event provides developers with the opportunity to perform actions or updates that should take place when the drawer is no longer visible or accessible to the user. To add a close event listener, use the appropriate method:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"myDrawer.addCloseListener( e -> {\r\n  //Executed when the event fires\r\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"With the Drawer Close Event, developers can synchronize the closing of the drawer with other UI elements, initiate animations or transitions, and update the interface to reflect the change in state. Additionally, this event can be utilized to save user preferences, persist data, or perform any cleanup operations associated with the closure of the drawer."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"onClose()"})," method is similarly available for use, and simple calls the ",(0,r.jsx)(t.code,{children:"addOpenListener()"})," method."]})}),"\n",(0,r.jsx)(t.h3,{id:"toggling-a-drawer-open-or-closed",children:"Toggling a Drawer Open or Closed"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"toggle()"})," method allows developers to control the opening and closing behavior of the drawer based on a boolean value. This function provides a programmatic way to toggle the visibility of the drawer. This can be shorthanded by using the ",(0,r.jsx)(t.code,{children:"open()"})," and ",(0,r.jsx)(t.code,{children:"close()"})," methods, which call the ",(0,r.jsx)(t.code,{children:"toggle()"})," method with the appropriate boolean argument."]}),"\n",(0,r.jsx)(t.h3,{id:"removing-an-event",children:"Removing an Event"}),"\n",(0,r.jsx)(t.p,{children:"To remove either an open or close event from the Drawer, simply use the appropriate remove event listener method."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"myDrawer.removeOpenListener(listener);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,r.jsx)(t.h3,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,r.jsxs)(t.p,{children:["These are the various parts of the ",(0,r.jsx)(t.a,{href:"../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,r.jsx)(o.Z,{tag:n(7099).dy,table:"parts"}),"\n",(0,r.jsx)(t.h3,{id:"css-properties",children:"CSS Properties"}),"\n",(0,r.jsx)(t.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,r.jsx)(o.Z,{tag:n(7099).dy,table:"properties"}),"\n",(0,r.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected Attributes"}),"\n",(0,r.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,r.jsx)(o.Z,{tag:n(7099).dy,table:"reflects"}),"\n",(0,r.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,r.jsx)(o.Z,{tag:"dwc-drawer",table:"dependencies"}),"\n",(0,r.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(t.p,{children:["To ensure an optimal user experience when using the ",(0,r.jsx)(t.code,{children:"Drawer"})," component, consider the following best practices:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Placement"}),": Decide whether the drawer should slide in from the left, right, top, or bottom, based on your application's layout and user experience considerations. Consider user preferences and design conventions."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Accessibility"}),": Pay special attention to accessibility. Ensure that users can open and close the drawer using keyboard controls and that screen readers can announce its presence and state. Provide ARIA roles and labels as necessary."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Swipe Gestures"}),": On touch-enabled devices, support swipe gestures for opening and closing the drawer. This is an intuitive way for users to interact with it."]}),"\n"]}),"\n"]})]})}function w(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},6031:(e,t,n)=>{var r=n(4836);t.Z=void 0;var a=r(n(4938)),i=n(5893),o=(0,a.default)((0,i.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=o},2610:(e,t,n)=>{var r=n(4836);t.Z=void 0;var a=r(n(4938)),i=n(5893),o=(0,a.default)((0,i.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=o},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var r=n(6010);const a={tabItem:"tabItem_Ymn6"};var i=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(6010),i=n(2466),o=n(6550),s=n(469),l=n(1980),c=n(7392),d=n(12);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function w(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,h]=m({queryString:n,groupId:a}),[w,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=c??w;return u({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),v(e)}),[h,v,i]),tabValues:i}}var v=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function f(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),o(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,a.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function A(e){const t=w(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...e,...t}),(0,b.jsx)(x,{...e,...t})]})}function y(e){const t=(0,v.Z)();return(0,b.jsx)(A,{...e,children:h(e.children)},String(t))}},6521:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var r=n(917),a=n(2949),i=n(5944);function o(e){let{url:t,mobile:n}=e;const o=r.iv`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 4rem 0;
        /* width: 110%; */
        margin-left: -5%;
    `,s=r.iv`
        position: relative;
        width : 100%;
        max-width: ${"true"==n?"375px":"100%"};
        height: ${"true"==n?"700px":"600px"};
        border-radius: 32px;
        overflow: hidden;
        box-shadow: 0 0 0 10px black, 0 3px 22px black;
        outline: thin solid black;
    `,l=r.iv`
        width: 100%;
        height: 100%;
        background: var(--dwc-surface-3);
    `;return(0,i.tZ)("div",{css:o,children:(0,i.tZ)("div",{css:s,children:(0,i.tZ)("iframe",{src:t+"&__theme__="+(0,a.I)().colorMode,css:l,loading:"lazy"})})})}},6957:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),a=n(917),i=n(4866),o=n(5162),s=n(4673),l=n(1750);const c="data:image/png;base64,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",d=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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";var p=n(2949),u=n(2610),m=n(5944);function w(e){let{collapse:t,setCollapse:n}=e;const r=a.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,i=a.iv`
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
  `;return(0,m.tZ)("div",{css:r,children:(0,m.tZ)("button",{css:i,onClick:()=>{n(!t)},children:t?(0,m.tZ)("img",{css:o,src:d,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:o,src:c,className:"icon-tabler-arrow-bar-down"})})})}function v(e){let{url:t}=e;const n=a.iv`
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
  `,r=a.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,m.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:r,src:h})})}function g(e){let{path:t,javaC:n,javaE:c,cssURL:d,javaHighlight:h,height:g,frame:b,tabs:f}=e;const[x,A]=(0,r.useState)(""),[y,j]=(0,r.useState)(""),[D,Z]=(0,r.useState)(""),[k,B]=(0,r.useState)(!(!n||!c)),[S,T]=(0,r.useState)(!1),[C,E]=(0,r.useState)({}),[L,O]=(0,r.useState)(!1),[z,M]=(0,r.useState)(0),[N,F]=(0,r.useState)(0),[V,H]=(0,r.useState)(25),[J,X]=(0,r.useState)(25),[P,G]=(0,r.useState)(0),[I,Y]=(0,r.useState)(!1),W=(0,r.useRef)(null),U=(0,r.useRef)(null);(0,r.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const t=new URL(c).pathname.split("/"),n=t[t.length-1];E((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{A(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{Z(e);const t=new URL(d).pathname.split("/"),n=t[t.length-1];E((e=>({...e,cssFile:n})))})),G(W.current?W.current.offsetWidth:0)}),[]);const R=()=>{O(!1)},q=e=>{if(L){const t=e.clientX-z;N+t>P/3&&(W.current.style.width=`${N+t}px`,U.current.style.right=(V-t<25?25:V-t)+"px",X(V-t<25?25:V-t))}},K=a.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==b?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
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
    height: ${g||"100%"};
    pointer-events: ${L?"none":"auto"};
  `,$=a.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${S&&"opacity: 1;"};
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
    border: ${"hidden"==b?"none":"1px solid var(--ifm-toc-border-color)"};
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
      border: ${"hidden"==b?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,re=a.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.BX)("div",{css:K,onMouseUp:R,onMouseLeave:R,onMouseMove:q,children:["hidden"!=b?(0,m.BX)("div",{onMouseEnter:()=>{T(!0)},onMouseLeave:()=>T(!1),css:Q,children:[(0,m.tZ)("iframe",{onMouseUp:R,loading:"lazy",src:t+"&__theme__="+(0,p.I)().colorMode,css:_,ref:W,onMouseMove:q}),(0,m.tZ)("div",{css:$,ref:U,children:(0,m.tZ)(v,{url:t})}),(0,m.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),O(!0),M(e.clientX),F(W.current?W.current.offsetWidth:0),H(J)},children:(0,m.tZ)(u.Z,{})})]}):null,(0,m.BX)(s.Z,{css:te,summary:(0,m.tZ)("summary",{onClick:()=>Y(!I),children:I?"Hide Code":"Show Code"}),children:[n&&c?(0,m.tZ)(w,{collapse:k,setCollapse:B}):null,d?(0,m.BX)(i.Z,{css:ne,children:[(0,m.tZ)(o.Z,{value:f?f[0]:"Java",label:f?f[0]:C.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:re,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:k?x:y})}),(0,m.tZ)(o.Z,{value:f?f[1]:"CSS",label:f?f[1]:C.cssFile,children:(0,m.tZ)(l.Z,{css:re,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:D})})]}):(0,m.tZ)(i.Z,{css:ne,children:(0,m.tZ)(o.Z,{value:f?f[0]:"Java",label:f?f[0]:C.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:re,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:k?x:y})})})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),a=n(917),i=n(8230),o=n(4387),s=n(6031);var l=n(5944);function c(e){let{type:t,location:n,top:c,children:d,code:h,suffix:p}=e;const[u,m]=(0,r.useState)("");(0,r.useEffect)((()=>{p||(p=""),m("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+n+".html"+p)}),[]);const w=a.iv`
    display: inline;

    ${c&&a.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,v=a.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:w,children:(0,l.tZ)(i.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(o.Z,{css:v,label:"Java API",component:"a",href:u,icon:(0,l.tZ)(s.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!h&&(0,l.tZ)("div",{css:w,children:(0,l.tZ)("a",{href:u,target:"_blank",children:d})}),"true"!==c&&h&&(0,l.tZ)("div",{css:w,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:u,target:"_blank",children:d})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var r=n(8397),a=n(5893);function i(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z,{...e})})}},7099:e=>{e.exports=JSON.parse('{"LN":"dwc-app-layout","zx":"dwc-button","Kx":"dwc-textarea","XZ":"dwc-checkbox","gN":"dwc-field","iR":"dwc-slider","wb":"dwc-listbox","Z":"dwc-choicebox","Ct":"dwc-combobox","ko":"dwc-progressbar","EU":"dwc-radio","ib":"dwc-tabbed-pane","dy":"dwc-drawer","Vq":"dwc-dialog","JO":"dwc-icon"}')}}]);
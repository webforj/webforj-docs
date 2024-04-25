"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1517],{8309:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var n=o(5893),a=o(1151),s=o(6957),i=o(7796),r=o(3273),l=o(2665);const c={title:"Dialog"},d=void 0,h={id:"components/dialog",title:"Dialog",description:"The webforJ dialog component is built to allow a developer to quickly and easily display a dialog on their application, for instances such as a login menu or information box.",source:"@site/docs/components/dialog.md",sourceDirName:"components",slug:"/components/dialog",permalink:"/docs/components/dialog",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/dialog.md",tags:[],version:"current",frontMatter:{title:"Dialog"},sidebar:"documentationSidebar",previous:{title:"CheckBox",permalink:"/docs/components/checkbox"},next:{title:"Drawer",permalink:"/docs/components/drawer"}},u={},p=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Backdrop and Blur",id:"backdrop-and-blur",level:2},{value:"Closing the Dialog",id:"closing-the-dialog",level:2},{value:"Auto-Focus",id:"auto-focus",level:2},{value:"Draggable",id:"draggable",level:2},{value:"Snap to Edge",id:"snap-to-edge",level:3},{value:"Positioning",id:"positioning",level:2},{value:"Vertical Alignment",id:"vertical-alignment",level:3},{value:"Full Screen and Breakpoints",id:"full-screen-and-breakpoints",level:3},{value:"Styling",id:"styling",level:2},{value:"Themes",id:"themes",level:3},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"Slots",id:"slots",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",target:"_blank",clickable:!1,iconName:"shadow"}),"\n",(0,n.jsx)(l.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-dialog",clickable:!1,iconName:"code"}),"\n",(0,n.jsx)(r.Z,{type:"dialog",location:"com/webforj/component/dialog/Dialog",top:"true"}),"\n",(0,n.jsx)(t.p,{children:"The webforJ dialog component is built to allow a developer to quickly and easily display a dialog on their application, for instances such as a login menu or information box."}),"\n",(0,n.jsxs)(t.p,{children:["The component is built with three sections, each of which are ",(0,n.jsx)(t.code,{children:"Panel"})," components: the ",(0,n.jsx)(t.strong,{children:"header"}),", the ",(0,n.jsx)(t.strong,{children:"content"}),", and the ",(0,n.jsx)(t.strong,{children:"footer"}),"."]}),"\n",(0,n.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.dialogdemos.DialogSections",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Sections.txt",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogSections.java",height:"225px"}),"\n",(0,n.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"User Feedback and Confirmation"}),": ",(0,n.jsx)(t.code,{children:"Dialog"})," components are often used to provide feedback or ask for user confirmation. They can display various important pieces of feedback to a user, such as:"]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Success messages"}),"\n",(0,n.jsx)(t.li,{children:"Error alerts"}),"\n",(0,n.jsx)(t.li,{children:"Confirmation submissions"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Form Input and Editing"}),": You can use dialogs to collect user input or allow them to edit information in a controlled and focused manner. For example, a dialog can pop up to edit user profile details or complete a multi-step form."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Contextual Information"}),": Displaying additional contextual information or tooltips in a dialog can help users understand complex features or data. Dialogs can provide in-depth explanations, charts, or help documentation."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Image and Media Previews"}),": When users need to view pieces of media, a ",(0,n.jsx)(t.code,{children:"Dialog"})," can be used to show larger previews or galleries, such as when interacting with:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Images"}),"\n",(0,n.jsx)(t.li,{children:"Videos"}),"\n",(0,n.jsx)(t.li,{children:"Other media"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsxs)(t.p,{children:["The Dialog can be constructed using the default ",(0,n.jsx)(t.code,{children:"Dialog()"})," constructor. Once the object has been instantiated, call the ",(0,n.jsx)(t.code,{children:"show()"})," method on the object itself to display the dialog."]}),"\n",(0,n.jsx)(t.h2,{id:"backdrop-and-blur",children:"Backdrop and Blur"}),"\n",(0,n.jsxs)(t.p,{children:["By enabling the backdrop attribute of the webforJ ",(0,n.jsx)(t.code,{children:"Dialog"})," component, a backdrop will be displayed behind the ",(0,n.jsx)(t.code,{children:"Dialog"}),". Additionally, when enabled, the Dialog's blurred attribute will blur the backdrop of the ",(0,n.jsx)(t.code,{children:"Dialog"}),". Modifying these settings can help users by providing depths, visual hierarchy, and context, leading to more clear guidance for a user."]}),"\n",(0,n.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.dialogdemos.DialogBackdropBlur",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Blur.txt",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogBackdropBlur.java",height:"300px"}),"\n",(0,n.jsx)(t.h2,{id:"closing-the-dialog",children:"Closing the Dialog"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Dialog"})," supports multiple cancellation methods for closure of the component: hitting the ",(0,n.jsx)(t.code,{children:"ESC"})," key, clicking outside of the ",(0,n.jsx)(t.code,{children:"Dialog"}),", or using the ",(0,n.jsx)(t.code,{children:"hide()"})," method. The first two properties are customizable via their respective methods:\r\n",(0,n.jsx)(t.code,{children:"setCancelOnEscKey()"})," and ",(0,n.jsx)(t.code,{children:"setCancelOnOutsideClick()"}),". The ",(0,n.jsx)(t.code,{children:"hide()"})," method allows for the ",(0,n.jsx)(t.code,{children:"Dialog"})," to be closed programmatically, such as by clicking a button on the ",(0,n.jsx)(t.code,{children:"Dialog"})," after saving data. A method to quickly enable or disable users' ability to close the ",(0,n.jsx)(t.code,{children:"Dialog"}),", ",(0,n.jsx)(t.code,{children:"setClosable()"})," will prevent or allow both escape and click closure of the ",(0,n.jsx)(t.code,{children:"Dialog"}),"."]}),"\n",(0,n.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.dialogdemos.DialogClose",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Close.txt",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogClose.java",height:"350px"}),"\n",(0,n.jsx)(t.h2,{id:"auto-focus",children:"Auto-Focus"}),"\n",(0,n.jsxs)(t.p,{children:["When enabled, auto-focus will automatically give focus to the first element within the dialog that can be focused. This is useful in helping to direct the attention of users, and is customizable via the ",(0,n.jsx)(t.code,{children:"setAutoFocus()"})," method."]}),"\n",(0,n.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.dialogdemos.DialogAutoFocus",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/AutoFocus.txt",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogAutoFocus.java",height:"350px"}),"\n",(0,n.jsx)(t.h2,{id:"draggable",children:"Draggable"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Dialog"})," has built in functionality to be draggable, allowing the user to relocate the ",(0,n.jsx)(t.code,{children:"Dialog"})," window by clicking and dragging. The position of the ",(0,n.jsx)(t.code,{children:"Dialog"})," can be manipulated from any of the fields within it: the header, content or footer."]}),"\n",(0,n.jsx)(t.h3,{id:"snap-to-edge",children:"Snap to Edge"}),"\n",(0,n.jsxs)(t.p,{children:["It is also possible to calibrate this behavior to snap to the edge of the screen, meaning the ",(0,n.jsx)(t.code,{children:"Dialog"})," will automatically align itself with the edge of the display when released from its drag and drop date. Snapping can be changed via the ",(0,n.jsx)(t.code,{children:"setSnapToEdge()"})," method. The ",(0,n.jsx)(t.code,{children:"setSnapThreshold()"})," takes a number of pixels, which will set how far the ",(0,n.jsx)(t.code,{children:"Dialog"})," should be from the sides of the screen before it will automatically snap to the edges."]}),"\n",(0,n.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.dialogdemos.DialogDraggable",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Draggable.txt",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogDraggable.java",height:"350px"}),"\n",(0,n.jsx)(t.h2,{id:"positioning",children:"Positioning"}),"\n",(0,n.jsxs)(t.p,{children:["The dialog's position can be manipulated using the built-in ",(0,n.jsx)(t.code,{children:"setPosx()"})," and ",(0,n.jsx)(t.code,{children:"setPosy()"})," methods. These methods take a string argument which can represent any applicable CSS unit of length, such as pixels or view height/width. A list of these measurements ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages",children:"can be found at this link"}),"."]}),"\n",(0,n.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.dialogdemos.DialogPositioning",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Positioning.txt",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogPositioning.java",height:"350px"}),"\n",(0,n.jsx)(t.h3,{id:"vertical-alignment",children:"Vertical Alignment"}),"\n",(0,n.jsxs)(t.p,{children:["In addition to manual assignment of a dialog's X and Y position, it is possible to use the dialog's built-in enum class to align the ",(0,n.jsx)(t.code,{children:"Dialog"}),". There are three possible values, ",(0,n.jsx)(t.code,{children:"TOP"}),", ",(0,n.jsx)(t.code,{children:"CENTER"})," and ",(0,n.jsx)(t.code,{children:"BOTTOM"}),", each of which can be used with the ",(0,n.jsx)(t.code,{children:"setAlignment()"})," method."]}),"\n",(0,n.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.dialogdemos.DialogAlignments",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Alignments.txt",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogAlignments.java",height:"550px"}),"\n",(0,n.jsx)(t.h3,{id:"full-screen-and-breakpoints",children:"Full Screen and Breakpoints"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Dialog"})," can be set to enter full screen mode. When full screen is enabled, the ",(0,n.jsx)(t.code,{children:"Dialog"})," cannot be moved or positioned. This mode can be manipulated with the breakpoint attribute of the ",(0,n.jsx)(t.code,{children:"Dialog"}),". The breakpoint is a media query which components when the ",(0,n.jsx)(t.code,{children:"Dialog"})," will automatically flip to full screen mode. When the query matches, the ",(0,n.jsx)(t.code,{children:"Dialog"})," changes to full screen - otherwise it is positioned."]}),"\n",(0,n.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,n.jsx)(t.h3,{id:"themes",children:"Themes"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Dialog"})," components come with ",(0,n.jsx)(r.Z,{type:"foundation",location:"com/webforj/component/dialog/Dialog.Theme.html",children:"7 discrete themes "})," built in for quick styling without the use of CSS. These themes are pre-defined styles that can be applied to buttons to change their appearance and visual presentation. They offer a quick and consistent way to customize the look of buttons throughout an application."]}),"\n",(0,n.jsx)(t.p,{children:"While there are many use cases for each of the various themes, some examples uses are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Danger"}),": Actions with severe consequences, such as clearing filled-out information, or permanently deleting an account/data is represents a good use case for dialogs with the Danger theme."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Default"}),": The default theme is appropriate for actions throughout an application that do not require special attention and that are generic, such as toggling a setting."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Primary"}),': This theme is appropriate as a main "call-to-action" on a page, such as signing up, saving changes, or continuing to another page.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Success"}),": Success themed dialogs are excellent for visualizing successful completion of an element in an application, such as the submission of a form or completion of a sign-up process. The success theme can by programmatically applied once a successful action has been completed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Warning"}),": Warning dialogs are useful to indicate users they are about to perform a potentially risky action, such as when navigating away from a page with unsaved changes. These actions are often less impactful than those that would use the Danger theme."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Gray"}),": Good for subtle actions, such as minor settings or actions that are more supplementary to a page, and not part of the main functionality."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Info"}),": The Info theme is a good choice to provide clarifying, additional information to a user when pushed."]}),"\n"]}),"\n",(0,n.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.dialogdemos.DialogThemes",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogThemes.java",height:"500px"}),"\n",(0,n.jsx)(t.h3,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,n.jsxs)(t.p,{children:["These are the various parts of the ",(0,n.jsx)(t.a,{href:"../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,n.jsx)(i.Z,{tag:o(7099).Vq,table:"parts"}),"\n",(0,n.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,n.jsxs)(t.p,{children:["Listed below are the slots available for utilization within the ",(0,n.jsx)(t.code,{children:"Button"})," component. These slots act as placeholders within the component that control where the children of a customized element should be inserted within the shadow tree."]}),"\n",(0,n.jsx)(i.Z,{tag:o(7099).Vq,table:"slots"}),"\n",(0,n.jsx)(t.h3,{id:"css-properties",children:"CSS Properties"}),"\n",(0,n.jsx)(t.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,n.jsx)(i.Z,{tag:o(7099).Vq,table:"properties"}),"\n",(0,n.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected Attributes"}),"\n",(0,n.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,n.jsx)(i.Z,{tag:o(7099).Vq,table:"reflects"})]})}function g(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},6031:(e,t,o)=>{var n=o(4836);t.Z=void 0;var a=n(o(4938)),s=o(5893),i=(0,a.default)((0,s.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=i},2610:(e,t,o)=>{var n=o(4836);t.Z=void 0;var a=n(o(4938)),s=o(5893),i=(0,a.default)((0,s.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=i},5162:(e,t,o)=>{o.d(t,{Z:()=>i});o(7294);var n=o(6010);const a={tabItem:"tabItem_Ymn6"};var s=o(5893);function i(e){let{children:t,hidden:o,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:o,children:t})}},4866:(e,t,o)=>{o.d(t,{Z:()=>j});var n=o(7294),a=o(6010),s=o(2466),i=o(6550),r=o(469),l=o(1980),c=o(7392),d=o(12);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:a}}=e;return{value:t,label:o,attributes:n,default:a}}))}(o);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function p(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:o=!1,groupId:a}=e,s=u(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,h]=m({queryString:o,groupId:a}),[g,b]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Nk)(o);return[a,(0,n.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:a}),f=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,r.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,s]),tabValues:s}}var b=o(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=o(5893);function x(e){let{className:t,block:o,selectedValue:n,selectValue:i,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,o=l.indexOf(t),a=r[o].value;a!==n&&(c(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;t=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;t=l[o]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},t),children:r.map((e=>{let{value:t,label:o,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,a.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":n===t}),children:o??t},t)}))})}function w(e){let{lazy:t,children:o,selectedValue:a}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function A(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,v.jsx)(A,{...e,children:h(e.children)},String(t))}},6957:(e,t,o)=>{o.d(t,{Z:()=>x});var n=o(7294),a=o(917),s=o(5697),i=o.n(s),r=o(4866),l=o(5162),c=o(4673),d=o(1750);const h=o.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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",p="data:image/png;base64,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";var m=o(2949),g=o(2610),b=o(5944);function f(e){let{collapse:t,setCollapse:o}=e;f.propTypes={collapse:i().bool.isRequired,setCollapse:i().func.isRequired};const n=a.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,s=a.iv`
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
  `,r=a.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,b.tZ)("div",{css:n,children:(0,b.tZ)("button",{css:s,onClick:()=>{o(!t)},children:t?(0,b.tZ)("img",{alt:"collapse_button",css:r,src:h,className:"icon-tabler-arrow-bar-up"}):(0,b.tZ)("img",{css:r,src:u,className:"icon-tabler-arrow-bar-down"})})})}function v(e){let{url:t}=e;const o=a.iv`
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
  `,n=a.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,b.tZ)("button",{css:o,onClick:()=>{window.open(t,"_blank")},children:(0,b.tZ)("img",{css:n,src:p})})}function x(e){let{path:t,javaC:o,javaE:s,urls:h,cssURL:u,javaHighlight:p,height:w,frame:A,tabs:j}=e;x.propTypes={path:i().string.isRequired,javaC:i().string,javaE:i().string,urls:i().arrayOf(i().string),cssURL:i().string,javaHighlight:i().string,height:i().string,frame:i().string,tabs:i().arrayOf(i().string)};const[y,D]=(0,n.useState)(""),[k,S]=(0,n.useState)(""),[C,Z]=(0,n.useState)({}),[B,E]=(0,n.useState)(""),[T,L]=(0,n.useState)(!(!o||!s)),[O,V]=(0,n.useState)(!1),[M,z]=(0,n.useState)({}),[F,N]=(0,n.useState)(!1),[X,q]=(0,n.useState)(0),[H,J]=(0,n.useState)(0),[G,P]=(0,n.useState)(25),[Y,I]=(0,n.useState)(25),[W,R]=(0,n.useState)(0),[U,K]=(0,n.useState)(!1),Q=(0,n.useRef)(null),_=(0,n.useRef)(null);function $(e,t,o){return(0,b.tZ)(d.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:o,children:e.code})}(0,n.useEffect)((()=>{s&&fetch(s).then((e=>e.text())).then((e=>{S(e);const t=new URL(s).pathname.split("/"),o=t[t.length-1];z((e=>({...e,javaFile:o})))})),o&&fetch(o).then((e=>e.text())).then((e=>{D(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{E(e);const t=new URL(u).pathname.split("/"),o=t[t.length-1];z((e=>({...e,cssFile:o})))})),h&&h.forEach((function(e){const t=new URL(e),o=t.pathname.split("/"),n=o[o.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){Z((o=>({...o,[e]:{fileName:e,code:t}})))}(n,e)}))})),R(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{N(!1)},te=e=>{if(F){const t=e.clientX-X;H+t>W/3&&(Q.current.style.width=`${H+t}px`,_.current.style.right=(G-t<25?25:G-t)+"px",I(G-t<25?25:G-t))}},oe=a.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ne=a.iv`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ae=a.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${w||"100%"};
    pointer-events: ${F?"none":"auto"};
  `,se=a.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${O&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ie=a.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,re=a.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==A?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==A?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,le=a.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=a.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,b.BX)("div",{css:oe,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=A?(0,b.BX)("div",{onMouseEnter:()=>{V(!0)},onMouseLeave:()=>V(!1),css:ne,children:[(0,b.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.I)().colorMode,css:ae,ref:Q,onMouseMove:te}),(0,b.tZ)("div",{css:se,ref:_,children:(0,b.tZ)(v,{url:t})}),(0,b.tZ)("div",{css:ie,onMouseDown:e=>{e.preventDefault(),N(!0),q(e.clientX),J(Q.current?Q.current.offsetWidth:0),P(Y)},children:(0,b.tZ)(g.Z,{})})]}):null,(0,b.BX)(c.Z,{css:re,summary:(0,b.tZ)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[o&&s?(0,b.tZ)(f,{collapse:T,setCollapse:L}):null,u?(0,b.BX)(r.Z,{css:le,children:[(0,b.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,b.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:T?y:k})}),Object.keys(C).map(((e,t)=>(0,b.tZ)(l.Z,{value:e,label:e,children:$(C[e],ce,p)},"tab"+t))),(0,b.tZ)(l.Z,{value:j?j[1]:"CSS",label:j?j[1]:M.cssFile,children:(0,b.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:B})})]}):(0,b.BX)(r.Z,{css:le,children:[(0,b.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,b.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:T?y:k})}),Object.keys(C).map(((e,t)=>(0,b.tZ)(l.Z,{value:e,label:e,children:$(C[e],ce,p)},"tab"+t)))]})]})]})}},3273:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(7294),a=o(917),s=o(8230),i=o(4387),r=o(6031);var l=o(5944);function c(e){let{type:t,location:o,top:c,children:d,code:h,suffix:u}=e;const[p,m]=(0,n.useState)("");(0,n.useEffect)((()=>{u||(u=""),m("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+o+".html"+u)}),[]);const g=a.iv`
    display: inline;

    ${c&&a.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=a.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)(s.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(i.Z,{css:b,label:"Java API",component:"a",href:p,icon:(0,l.tZ)(r.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!h&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})}),"true"!==c&&h&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})})})]})}},1415:(e,t,o)=>{o.d(t,{Z:()=>s});o(7294);var n=o(8397),a=o(5893);function s(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Z,{...e})})}},7099:e=>{e.exports=JSON.parse('{"LN":"dwc-app-layout","zx":"dwc-button","XZ":"dwc-checkbox","gN":"dwc-field","iR":"dwc-slider","wb":"dwc-listbox","Z":"dwc-choicebox","Ct":"dwc-combobox","C3":"dwc-navigator","EU":"dwc-radio","ib":"dwc-tabbed-pane","dy":"dwc-drawer","Vq":"dwc-dialog","JO":"dwc-icon","qX":"dwc-splitter"}')}}]);
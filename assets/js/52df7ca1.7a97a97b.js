"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7884],{6814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var o=n(5893),i=n(1151),s=n(6957),r=n(7796),a=n(3273),l=n(2665);const c={sidebar_position:3,title:"Confirm"},d="Confirm Dialog",u={id:"components/option-dialogs/confirm",title:"Confirm",description:"A ConfirmDialog is a modal dialog designed to allow the user to choose one of a set of up to 3 options. The dialog blocks app execution until the user interacts with it or it closes due to a timeout.",source:"@site/docs/components/option-dialogs/confirm.md",sourceDirName:"components/option-dialogs",slug:"/components/option-dialogs/confirm",permalink:"/docs/components/option-dialogs/confirm",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/option-dialogs/confirm.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Confirm"},sidebar:"documentationSidebar",previous:{title:"Message",permalink:"/docs/components/option-dialogs/message"},next:{title:"Input",permalink:"/docs/components/option-dialogs/input"}},h={},g=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Types",id:"types",level:2},{value:"Option type",id:"option-type",level:3},{value:"Message type",id:"message-type",level:3},{value:"Result",id:"result",level:2},{value:"Default button",id:"default-button",level:2},{value:"Buttons text",id:"buttons-text",level:2},{value:"HTML processing",id:"html-processing",level:2},{value:"Timeout",id:"timeout",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"confirm-dialog",children:"Confirm Dialog"}),"\n",(0,o.jsx)(l.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",target:"_blank",clickable:!1,iconName:"shadow"}),"\n",(0,o.jsx)(l.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-dialog",clickable:!1,iconName:"code"}),"\n",(0,o.jsx)(a.Z,{type:"ConfirmDialog",location:"com/webforj/component/optiondialog/ConfirmDialog",top:"true"}),"\n",(0,o.jsxs)(t.p,{children:["A ",(0,o.jsx)(t.code,{children:"ConfirmDialog"})," is a modal dialog designed to allow the user to choose one of a set of up to 3 options. The dialog blocks app execution until the user interacts with it or it closes due to a timeout."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'ConfirmDialog.Result result = OptionDialog.showConfirmDialog(\n    "Do you confirm?",\n    "Confirmation",\n    ConfirmDialog.OptionType.OK_CANCEL,\n    ConfirmDialog.MessageType.QUESTION);\n'})}),"\n",(0,o.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ConfirmDialog"})," provides a way to ask users for confirmation or to choose between multiple options, such as ",(0,o.jsx)(t.code,{children:"Yes/No"})," or ",(0,o.jsx)(t.code,{children:"OK/Cancel"}),", ensuring that they acknowledge and confirm their actions."]}),"\n",(0,o.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ConfirmDialog"})," can be initiated through the ",(0,o.jsx)(t.code,{children:"OptionDialog"})," factory class using one of the various ",(0,o.jsx)(t.code,{children:"showConfirmDialog"})," methods to configure its attributes and display the dialog directly. For more control over the configurations, the dialog can also be created using one of its several constructors."]}),"\n",(0,o.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.optiondialog.confirm.ConfirmDialogConstructor",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/optiondialog/confirm/ConfirmDialogConstructor.java",height:"350px"}),"\n",(0,o.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,o.jsx)(t.h3,{id:"option-type",children:"Option type"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ConfirmDialog"})," supports the following option types, which determine the buttons displayed in the dialog:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"OK"})}),": Displays an ",(0,o.jsx)(t.code,{children:"OK"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"OK_CANCEL"})}),": Displays ",(0,o.jsx)(t.code,{children:"OK"})," and ",(0,o.jsx)(t.code,{children:"Cancel"})," buttons."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"ABORT_RETRY_IGNORE"})}),": Displays ",(0,o.jsx)(t.code,{children:"Abort"}),", ",(0,o.jsx)(t.code,{children:"Retry"}),", and ",(0,o.jsx)(t.code,{children:"Ignore"})," buttons."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"YES_NO_CANCEL"})}),": Displays ",(0,o.jsx)(t.code,{children:"Yes"}),", ",(0,o.jsx)(t.code,{children:"No"}),", and ",(0,o.jsx)(t.code,{children:"Cancel"})," buttons."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"YES_NO"})}),": Displays ",(0,o.jsx)(t.code,{children:"Yes"})," and ",(0,o.jsx)(t.code,{children:"No"})," buttons."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"RETRY_CANCEL"})}),": Displays ",(0,o.jsx)(t.code,{children:"Retry"})," and ",(0,o.jsx)(t.code,{children:"Cancel"})," buttons."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"CUSTOM"})}),": Displays custom buttons as specified."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"message-type",children:"Message type"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ConfirmDialog"})," supports the following message types. When you configures a type, The dialog displays an icon beside the message, and the dialog's theme updates according to the webforJ design system rules."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"PLAIN"}),": Displays the message without an icon, using the default theme."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"ERROR"}),": Displays an error icon next to the message with the error theme applied."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"QUESTION"}),": Displays a question mark icon beside the message, using the primary theme."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"WARNING"}),": Displays a warning icon next to the message with the warning theme applied."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"INFO"}),": Displays an info icon beside the message, using the info theme."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["In the following sample, the code configures a confirm dialog of type ",(0,o.jsx)(t.code,{children:"CUSTOM"})," with a custom title and message."]}),"\n",(0,o.jsx)(s.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.optiondialog.confirm.ConfirmDialogOptionType",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/optiondialog/confirm/ConfirmDialogOptionType.java",height:"350px"}),"\n",(0,o.jsx)(t.h2,{id:"result",children:"Result"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ConfirmDialog"})," returns a result based on the user's interaction with the dialog. This result indicates which button the user clicked or if the dialog was dismissed due to a timeout."]}),"\n",(0,o.jsx)(t.admonition,{type:"important",children:(0,o.jsxs)(t.p,{children:["The resulting string will be returned from the ",(0,o.jsx)(t.code,{children:"show()"})," method, or the equivalent ",(0,o.jsx)(t.code,{children:"OptionDialog"})," method as shown below."]})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ConfirmDialog.Result"})," enum includes the following possible results:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"OK"})}),": The user clicked the ",(0,o.jsx)(t.code,{children:"OK"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"CANCEL"})}),": The user clicked the ",(0,o.jsx)(t.code,{children:"CANCEL"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"YES"})}),": The user clicked the ",(0,o.jsx)(t.code,{children:"YES"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"NO"})}),": The user clicked the ",(0,o.jsx)(t.code,{children:"NO"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"ABORT"})}),": The user clicked the ",(0,o.jsx)(t.code,{children:"ABORT"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"RETRY"})}),": The user clicked the ",(0,o.jsx)(t.code,{children:"RETRY"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"IGNORE"})}),": The user clicked the ",(0,o.jsx)(t.code,{children:"IGNORE"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"FIRST_CUSTOM_BUTTON"})}),": The user clicked the first custom button"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"SECOND_CUSTOM_BUTTON"})}),": The user clicked the second custom button"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"THIRD_CUSTOM_BUTTON"})}),": The user clicked the third custom button"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"TIMEOUT"})}),": The dialog timeouts."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"UNKNOWN"})}),": An unknown result, typically used as a default or error state."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'if (result == ConfirmDialog.Result.FIRST_CUSTOM_BUTTON) {\n    OptionDialog.showMessageDialog("Changes discarded", "Discarded", "Got it");\n} else {\n    OptionDialog.showMessageDialog(\n        "Changes saved", "Saved", "Got it", MessageDialog.MessageType.INFO);\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"default-button",children:"Default button"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ConfirmDialog"})," allows you to specify a default button that is preselected when the dialog is displayed. This enhances the user experience by providing a suggested action that can be quickly confirmed by pressing the ",(0,o.jsx)("kbd",{children:"Enter"})," key."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'ConfirmDialog dialog = new ConfirmDialog(\n    "Are you sure?", "Confirm", ConfirmDialog.OptionType.YES_NO);\ndialog.setDefaultButton(Button.SECOND); // second button\ndialog.show();\n'})}),"\n",(0,o.jsx)(t.h2,{id:"buttons-text",children:"Buttons text"}),"\n",(0,o.jsxs)(t.p,{children:["You can configure the text of the buttons using the ",(0,o.jsx)(t.code,{children:"setButtonText(ConfirmDialog.Button button, String text)"})," method."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'ConfirmDialog dialog = new ConfirmDialog(\n    "Are you sure?", "Confirm", ConfirmDialog.OptionType.CUSTOM);\ndialog.setButtonText(ConfirmDialog.Button.FIRST, "Absolutely");\ndialog.setButtonText(ConfirmDialog.Button.SECOND, "Nope");\ndialog.show();\n'})}),"\n",(0,o.jsx)(t.h2,{id:"html-processing",children:"HTML processing"}),"\n",(0,o.jsx)(t.p,{children:"By default, the confirm dialog processes and renders HTML content. You can turn off this feature by configuring it to display raw text instead."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'ConfirmDialog dialog = new ConfirmDialog(\n    "<b>Are you sure?</b>", "Confirm",\n    ConfirmDialog.OptionType.YES_NO, ConfirmDialog.MessageType.QUESTION);\ndialog.setRawText(true);\ndialog.show();\n'})}),"\n",(0,o.jsx)(t.h2,{id:"timeout",children:"Timeout"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ConfirmDialog"})," allows you to set a timeout duration after which the dialog automatically closes. This feature is useful for non-critical confirmations or actions that don't require the user's immediate interaction."]}),"\n",(0,o.jsxs)(t.p,{children:["You can configure the timeout for the dialog using the ",(0,o.jsx)(t.code,{children:"setTimeout(int timeout)"})," method. The timeout duration is in seconds. If the specified time elapses without any user interaction, the dialog closes automatically."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'ConfirmDialog dialog = new ConfirmDialog(\n    "Are you sure?", "Confirm", ConfirmDialog.OptionType.YES_NO);\ndialog.setDefaultButton(Button.SECOND);\ndialog.setTimeout(3);\nConfirmDialog.Result result = dialog.show();\n\nswitch (result) {\n  case TIMEOUT:\n    OptionDialog.showMessageDialog(\n        "You took too long to decide", "Timeout", "Got it",\n        MessageDialog.MessageType.WARNING);\n    break;\n  case YES:\n    OptionDialog.showMessageDialog(\n        "You clicked Yes", "Yes", "Got it",\n        MessageDialog.MessageType.INFO);\n    break;\n  default:\n    OptionDialog.showMessageDialog(\n        "You clicked No", "No", "Got it",\n        MessageDialog.MessageType.INFO);\n    break;\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Clear and Concise Prompts"}),": Ensure the prompt message clearly explains what action the user is being asked to confirm. Avoid ambiguity."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Appropriate Option Types"}),': Choose option types that match the context of the action. For simple yes/no decisions, use straightforward options. For more complex scenarios, provide additional buttons like "Cancel" to allow users to back out without making a choice.']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Logical Default Button"}),": Set a default button that aligns with the most likely or recommended user action to streamline decision-making."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Consistent Theming"}),": Align the dialog and button themes with your app's design for a cohesive user experience."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Judicious Use of Timeout"}),": Set timeouts for non-critical confirmations, ensuring users have enough time to read and understand the prompt."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Minimize Overuse"}),": Use confirm dialogs sparingly to avoid user frustration. Reserve them for critical actions requiring explicit user confirmation."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,o.jsx)(t.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,o.jsxs)(t.p,{children:["These are the various parts of the ",(0,o.jsx)(t.a,{href:"../../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,o.jsx)(r.Z,{tag:n(7099).Vq,table:"parts"}),"\n",(0,o.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,o.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,o.jsx)(r.Z,{tag:n(7099).Vq,table:"reflects"})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},6031:(e,t,n)=>{var o=n(4836);t.Z=void 0;var i=o(n(4938)),s=n(5893),r=(0,i.default)((0,s.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=r},2610:(e,t,n)=>{var o=n(4836);t.Z=void 0;var i=o(n(4938)),s=n(5893),r=(0,i.default)((0,s.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=r},5162:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var o=n(6010);const i={tabItem:"tabItem_Ymn6"};var s=n(5893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(7294),i=n(6010),s=n(2466),r=n(6550),a=n(469),l=n(1980),c=n(7392),d=n(12);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:i}}=e;return{value:t,label:n,attributes:o,default:i}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[c,u]=p({queryString:n,groupId:i}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,d.Nk)(n);return[i,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),x=(()=>{const e=c??m;return g({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=n(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function A(e){let{className:t,block:n,selectedValue:o,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=a[n].value;i!==o&&(c(t),r(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(A,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,b.jsx)(j,{...e,children:u(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>A});var o=n(7294),i=n(917),s=n(5697),r=n.n(s),a=n(4866),l=n(5162),c=n(4673),d=n(1750);const u=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",g="data:image/png;base64,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";var p=n(2949),m=n(2610),f=n(5944);function x(e){let{collapse:t,setCollapse:n}=e;x.propTypes={collapse:r().bool.isRequired,setCollapse:r().func.isRequired};const o=i.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,s=i.iv`
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
  `,a=i.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,f.tZ)("div",{css:o,children:(0,f.tZ)("button",{css:s,onClick:()=>{n(!t)},children:t?(0,f.tZ)("img",{alt:"collapse_button",css:a,src:u,className:"icon-tabler-arrow-bar-up"}):(0,f.tZ)("img",{css:a,src:h,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const n=i.iv`
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
  `,o=i.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,f.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,f.tZ)("img",{css:o,src:g})})}function A(e){let{path:t,javaC:n,javaE:s,urls:u,cssURL:h,javaHighlight:g,height:v,frame:j,tabs:w}=e;A.propTypes={path:r().string.isRequired,javaC:r().string,javaE:r().string,urls:r().arrayOf(r().string),cssURL:r().string,javaHighlight:r().string,height:r().string,frame:r().string,tabs:r().arrayOf(r().string)};const[y,D]=(0,o.useState)(""),[C,T]=(0,o.useState)(""),[O,k]=(0,o.useState)({}),[B,N]=(0,o.useState)(""),[S,Z]=(0,o.useState)(!(!n||!s)),[E,M]=(0,o.useState)(!1),[L,R]=(0,o.useState)({}),[Y,F]=(0,o.useState)(!1),[I,V]=(0,o.useState)(0),[H,G]=(0,o.useState)(0),[z,X]=(0,o.useState)(25),[U,J]=(0,o.useState)(25),[q,W]=(0,o.useState)(0),[P,K]=(0,o.useState)(!1),Q=(0,o.useRef)(null),_=(0,o.useRef)(null);function $(e,t,n){return(0,f.tZ)(d.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,o.useEffect)((()=>{s&&fetch(s).then((e=>e.text())).then((e=>{T(e);const t=new URL(s).pathname.split("/"),n=t[t.length-1];R((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{D(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{N(e);const t=new URL(h).pathname.split("/"),n=t[t.length-1];R((e=>({...e,cssFile:n})))})),u&&u.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),o=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){k((n=>({...n,[e]:{fileName:e,code:t}})))}(o,e)}))})),W(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{F(!1)},te=e=>{if(Y){const t=e.clientX-I;H+t>q/3&&(Q.current.style.width=`${H+t}px`,_.current.style.right=(z-t<25?25:z-t)+"px",J(z-t<25?25:z-t))}},ne=i.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,oe=i.iv`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ie=i.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${v||"100%"};
    pointer-events: ${Y?"none":"auto"};
  `,se=i.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${E&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,re=i.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ae=i.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==j?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==j?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,le=i.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=i.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,f.BX)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=j?(0,f.BX)("div",{onMouseEnter:()=>{M(!0)},onMouseLeave:()=>M(!1),css:oe,children:[(0,f.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,p.I)().colorMode,css:ie,ref:Q,onMouseMove:te}),(0,f.tZ)("div",{css:se,ref:_,children:(0,f.tZ)(b,{url:t})}),(0,f.tZ)("div",{css:re,onMouseDown:e=>{e.preventDefault(),F(!0),V(e.clientX),G(Q.current?Q.current.offsetWidth:0),X(U)},children:(0,f.tZ)(m.Z,{})})]}):null,(0,f.BX)(c.Z,{css:ae,summary:(0,f.tZ)("summary",{onClick:()=>K(!P),children:P?"Hide Code":"Show Code"}),children:[n&&s?(0,f.tZ)(x,{collapse:S,setCollapse:Z}):null,h?(0,f.BX)(a.Z,{css:le,children:[(0,f.tZ)(l.Z,{value:w?w[0]:"Java",label:w?w[0]:L.javaFile,default:!0,children:(0,f.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:S?y:C})}),Object.keys(O).map(((e,t)=>(0,f.tZ)(l.Z,{value:e,label:e,children:$(O[e],ce,g)},"tab"+t))),(0,f.tZ)(l.Z,{value:w?w[1]:"CSS",label:w?w[1]:L.cssFile,children:(0,f.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:B})})]}):(0,f.BX)(a.Z,{css:le,children:[(0,f.tZ)(l.Z,{value:w?w[0]:"Java",label:w?w[0]:L.javaFile,default:!0,children:(0,f.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:S?y:C})}),Object.keys(O).map(((e,t)=>(0,f.tZ)(l.Z,{value:e,label:e,children:$(O[e],ce,g)},"tab"+t)))]})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(7294),i=n(917),s=n(9112),r=n(8385),a=n(6031);var l=n(5944);function c(e){let{type:t,location:n,top:c,children:d,code:u,suffix:h}=e;const[g,p]=(0,o.useState)("");(0,o.useEffect)((()=>{h||(h=""),p("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+n+".html"+h)}),[]);const m=i.iv`
    display: inline;

    ${c&&i.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,f=i.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)(s.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(r.Z,{css:f,label:"Java API",component:"a",href:g,icon:(0,l.tZ)(a.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)("a",{href:g,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:g,target:"_blank",children:d})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var o=n(8397),i=n(5893);function s(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Z,{...e})})}},7099:e=>{e.exports=JSON.parse('{"LN":"dwc-app-layout","zx":"dwc-button","XZ":"dwc-checkbox","gN":"dwc-field","iR":"dwc-slider","wb":"dwc-listbox","Z":"dwc-choicebox","Ct":"dwc-combobox","C3":"dwc-navigator","EU":"dwc-radio","ib":"dwc-tabbed-pane","dy":"dwc-drawer","Vq":"dwc-dialog","JO":"dwc-icon","qX":"dwc-splitter","m3":"dwc-login"}')}}]);
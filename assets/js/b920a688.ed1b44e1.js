"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5904],{4583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var i=n(5893),s=n(1151),r=n(6957),o=n(7796),a=n(3273),l=n(2665);const c={sidebar_position:4,title:"Input"},d="Input Dialog",u={id:"components/option-dialogs/input",title:"Input",description:"An InputDialog is a modal dialog designed to prompt the user for input. The dialog blocks app execution until the user provides the input or closes the dialog.",source:"@site/docs/components/option-dialogs/input.md",sourceDirName:"components/option-dialogs",slug:"/components/option-dialogs/input",permalink:"/docs/components/option-dialogs/input",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/option-dialogs/input.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Input"},sidebar:"documentationSidebar",previous:{title:"Confirm",permalink:"/docs/components/option-dialogs/confirm"},next:{title:"File Chooser",permalink:"/docs/components/option-dialogs/file-chooser"}},h={},p=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Types",id:"types",level:2},{value:"Input types",id:"input-types",level:3},{value:"Message type",id:"message-type",level:3},{value:"Result",id:"result",level:2},{value:"Default value",id:"default-value",level:2},{value:"Timeout",id:"timeout",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"input-dialog",children:"Input Dialog"}),"\n",(0,i.jsx)(l.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",target:"_blank",clickable:!1,iconName:"shadow"}),"\n",(0,i.jsx)(l.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-dialog",clickable:!1,iconName:"code"}),"\n",(0,i.jsx)(a.Z,{type:"foundation",location:"com/webforj/component/optiondialog/InputDialog",top:"true"}),"\n",(0,i.jsxs)(t.p,{children:["An ",(0,i.jsx)(t.code,{children:"InputDialog"})," is a modal dialog designed to prompt the user for input. The dialog blocks app execution until the user provides the input or closes the dialog."]}),"\n",(0,i.jsx)(r.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.optiondialog.input.InputDialogBasic",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/optiondialog/input/InputDialogBasic.java",height:"500px"}),"\n",(0,i.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"InputDialog"})," provides a way to request input from users, such as text, numbers, or other data, ensuring that they provide necessary information before proceeding."]}),"\n",(0,i.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"InputDialog"})," can be initiated through the ",(0,i.jsx)(t.code,{children:"OptionDialog"})," factory class using one of the various ",(0,i.jsx)(t.code,{children:"showInputDialog"})," methods to configure its attributes and display the dialog directly. For more control over the configurations, the dialog can also be created using one of its several constructors."]}),"\n",(0,i.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,i.jsx)(t.h3,{id:"input-types",children:"Input types"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"InputDialog"})," supports different types of input fields, allowing you to tailor the input method to your specific needs:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TEXT"}),": A standard single-line text input."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"PASSWORD"}),": A password input field that hides the user's input."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"NUMBER"}),": A numeric input field."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"EMAIL"}),": An input field for email addresses."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"URL"}),": An input field for URLs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"SEARCH"}),": A search text input field."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DATE"}),": An input field for selecting dates."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TIME"}),": An input field for selecting time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DATETIME_LOCAL"}),": An input field for selecting local date and time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"COLOR"}),": An input field for selecting a color."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"message-type",children:"Message type"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"InputDialog"})," supports the following message types. When you configures a type, The dialog displays an icon beside the message, and the dialog's theme updates according to the webforJ design system rules."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"PLAIN"}),": Displays the message without an icon, using the default theme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ERROR"}),": Displays an error icon next to the message with the error theme applied."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"QUESTION"}),": Displays a question mark icon beside the message, using the primary theme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"WARNING"}),": Displays a warning icon next to the message with the warning theme applied."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"INFO"}),": Displays an info icon beside the message, using the info theme."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In the following sample, The user is prompted to enter its password to access the app. If login fails, the user will prompted\nagain."}),"\n",(0,i.jsx)(r.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.optiondialog.input.InputDialogType",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/optiondialog/input/InputDialogType.java",height:"350px"}),"\n",(0,i.jsx)(t.h2,{id:"result",children:"Result"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"InputDialog"})," returns the user's input as a string. If the user closes the dialog without providing input, the result will be ",(0,i.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"important",children:(0,i.jsxs)(t.p,{children:["The resulting string will be returned from the ",(0,i.jsx)(t.code,{children:"show()"})," method, or the equivalent ",(0,i.jsx)(t.code,{children:"OptionDialog"})," method as shown below."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'String result = OptionDialog.showInputDialog(\n    "Please enter your age:", "Age Input", "", InputDialog.InputType.NUMBER);\n\nif (result != null) {\n    OptionDialog.showMessageDialog("You entered: " + result, "Input Received", "OK");\n} else {\n    OptionDialog.showMessageDialog("No input received", "Input Canceled", "OK");\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"default-value",children:"Default value"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"InputDialog"})," allows you to specify a default value that appears in the input field when the dialog is displayed. This can provide users with a suggestion or a previously entered value."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'InputDialog dialog = new InputDialog(\n    "Please enter your name:", "Name Input", "John Doe", InputDialog.InputType.TEXT);\nString result = dialog.show();\n'})}),"\n",(0,i.jsx)(t.h2,{id:"timeout",children:"Timeout"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"InputDialog"})," allows you to set a timeout duration after which the dialog automatically closes. This feature is useful for non-critical input requests or actions that don't require the user's immediate interaction."]}),"\n",(0,i.jsxs)(t.p,{children:["You can configure the timeout for the dialog using the ",(0,i.jsx)(t.code,{children:"setTimeout(int timeout)"})," method. The timeout duration is in seconds. If the specified time elapses without any user interaction, the dialog closes automatically."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'InputDialog dialog = new InputDialog(\n    "Please enter your name:", "Name Input", "John Doe");\ndialog.setTimeout(5);\nString result = dialog.show();\n\nOptionDialog.showMessageDialog(\n        "You entered: " + result, "Input Received", "OK", MessageDialog.MessageType.INFO);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Clear and Concise Prompts"}),": Ensure the prompt message clearly explains what information the user is being asked to provide."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Appropriate Input Types"}),": Choose input types that match the required data to ensure accurate and relevant user input."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Logical Default Values"}),": Set default values that provide useful suggestions or previous entries to streamline user input."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Judicious Use of Timeout"}),": Set timeouts for non-critical input requests, ensuring users have enough time to provide the required information."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Minimize Overuse"}),": Use input dialogs sparingly to avoid user frustration. Reserve them for actions requiring specific user input."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,i.jsx)(t.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,i.jsxs)(t.p,{children:["These are the various parts of the ",(0,i.jsx)(t.a,{href:"../../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,i.jsx)(o.Z,{tag:n(7099).Vq,table:"parts"}),"\n",(0,i.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,i.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,i.jsx)(o.Z,{tag:n(7099).Vq,table:"reflects"})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},6031:(e,t,n)=>{var i=n(4836);t.Z=void 0;var s=i(n(4938)),r=n(5893),o=(0,s.default)((0,r.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=o},2610:(e,t,n)=>{var i=n(4836);t.Z=void 0;var s=i(n(4938)),r=n(5893),o=(0,s.default)((0,r.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=o},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var i=n(6010);const s={tabItem:"tabItem_Ymn6"};var r=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var i=n(7294),s=n(6010),r=n(2466),o=n(6550),a=n(469),l=n(1980),c=n(7392),d=n(12);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,u]=g({queryString:n,groupId:s}),[m,A]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Nk)(n);return[s,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),b=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),A(e)}),[u,A,r]),tabValues:r}}var A=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(5893);function v(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=a[n].value;s!==i&&(c(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(x,{...e,...t})]})}function j(e){const t=(0,A.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>v});var i=n(7294),s=n(917),r=n(5697),o=n.n(r),a=n(4866),l=n(5162),c=n(4673),d=n(1750);const u=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",p="data:image/png;base64,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";var g=n(2949),m=n(2610),A=n(5944);function b(e){let{collapse:t,setCollapse:n}=e;b.propTypes={collapse:o().bool.isRequired,setCollapse:o().func.isRequired};const i=s.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,r=s.iv`
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
  `;return(0,A.tZ)("div",{css:i,children:(0,A.tZ)("button",{css:r,onClick:()=>{n(!t)},children:t?(0,A.tZ)("img",{alt:"collapse_button",css:a,src:u,className:"icon-tabler-arrow-bar-up"}):(0,A.tZ)("img",{css:a,src:h,className:"icon-tabler-arrow-bar-down"})})})}function f(e){let{url:t}=e;const n=s.iv`
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
  `,i=s.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,A.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,A.tZ)("img",{css:i,src:p})})}function v(e){let{path:t,javaC:n,javaE:r,urls:u,cssURL:h,javaHighlight:p,height:x,frame:w,tabs:j}=e;v.propTypes={path:o().string.isRequired,javaC:o().string,javaE:o().string,urls:o().arrayOf(o().string),cssURL:o().string,javaHighlight:o().string,height:o().string,frame:o().string,tabs:o().arrayOf(o().string)};const[y,D]=(0,i.useState)(""),[Z,B]=(0,i.useState)(""),[S,k]=(0,i.useState)({}),[C,I]=(0,i.useState)(""),[E,T]=(0,i.useState)(!(!n||!r)),[L,N]=(0,i.useState)(!1),[O,M]=(0,i.useState)({}),[V,X]=(0,i.useState)(!1),[z,F]=(0,i.useState)(0),[H,R]=(0,i.useState)(0),[J,Y]=(0,i.useState)(25),[q,G]=(0,i.useState)(25),[P,U]=(0,i.useState)(0),[W,K]=(0,i.useState)(!1),Q=(0,i.useRef)(null),_=(0,i.useRef)(null);function $(e,t,n){return(0,A.tZ)(d.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,i.useEffect)((()=>{r&&fetch(r).then((e=>e.text())).then((e=>{B(e);const t=new URL(r).pathname.split("/"),n=t[t.length-1];M((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{D(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{I(e);const t=new URL(h).pathname.split("/"),n=t[t.length-1];M((e=>({...e,cssFile:n})))})),u&&u.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),i=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){k((n=>({...n,[e]:{fileName:e,code:t}})))}(i,e)}))})),U(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{X(!1)},te=e=>{if(V){const t=e.clientX-z;H+t>P/3&&(Q.current.style.width=`${H+t}px`,_.current.style.right=(J-t<25?25:J-t)+"px",G(J-t<25?25:J-t))}},ne=s.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ie=s.iv`
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
    height: ${x||"100%"};
    pointer-events: ${V?"none":"auto"};
  `,re=s.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${L&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,oe=s.iv`
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
    border: ${"hidden"==w?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==w?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,le=s.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=s.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,A.BX)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=w?(0,A.BX)("div",{onMouseEnter:()=>{N(!0)},onMouseLeave:()=>N(!1),css:ie,children:[(0,A.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,g.I)().colorMode,css:se,ref:Q,onMouseMove:te}),(0,A.tZ)("div",{css:re,ref:_,children:(0,A.tZ)(f,{url:t})}),(0,A.tZ)("div",{css:oe,onMouseDown:e=>{e.preventDefault(),X(!0),F(e.clientX),R(Q.current?Q.current.offsetWidth:0),Y(q)},children:(0,A.tZ)(m.Z,{})})]}):null,(0,A.BX)(c.Z,{css:ae,summary:(0,A.tZ)("summary",{onClick:()=>K(!W),children:W?"Hide Code":"Show Code"}),children:[n&&r?(0,A.tZ)(b,{collapse:E,setCollapse:T}):null,h?(0,A.BX)(a.Z,{css:le,children:[(0,A.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:O.javaFile,default:!0,children:(0,A.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:E?y:Z})}),Object.keys(S).map(((e,t)=>(0,A.tZ)(l.Z,{value:e,label:e,children:$(S[e],ce,p)},"tab"+t))),(0,A.tZ)(l.Z,{value:j?j[1]:"CSS",label:j?j[1]:O.cssFile,children:(0,A.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:C})})]}):(0,A.BX)(a.Z,{css:le,children:[(0,A.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:O.javaFile,default:!0,children:(0,A.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:E?y:Z})}),Object.keys(S).map(((e,t)=>(0,A.tZ)(l.Z,{value:e,label:e,children:$(S[e],ce,p)},"tab"+t)))]})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(7294),s=n(917),r=n(9112),o=n(8385),a=n(6031);var l=n(5944);function c(e){let{type:t,location:n,top:c,children:d,code:u,suffix:h}=e;const[p,g]=(0,i.useState)("");(0,i.useEffect)((()=>{h||(h=""),g("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+n+".html"+h)}),[]);const m=s.iv`
    display: inline;

    ${c&&s.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,A=s.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)(r.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(o.Z,{css:A,label:"Java API",component:"a",href:p,icon:(0,l.tZ)(a.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var i=n(8397),s=n(5893);function r(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.Z,{...e})})}},7099:e=>{e.exports=JSON.parse('{"LN":"dwc-app-layout","zx":"dwc-button","XZ":"dwc-checkbox","gN":"dwc-field","iR":"dwc-slider","wb":"dwc-listbox","Z":"dwc-choicebox","Ct":"dwc-combobox","C3":"dwc-navigator","ko":"dwc-progressbar","EU":"dwc-radio","ib":"dwc-tabbed-pane","dy":"dwc-drawer","Vq":"dwc-dialog","JO":"dwc-icon","qX":"dwc-splitter","m3":"dwc-login"}')}}]);
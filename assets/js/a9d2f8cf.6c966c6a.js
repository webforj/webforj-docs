"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2425],{4561:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var n=s(5893),a=s(1151),o=s(6957),i=s(7796),r=s(3273),l=s(2665);const c={sidebar_position:2,title:"Message"},d="Message Dialog",u={id:"components/option-dialogs/message",title:"Message",description:"A MessageDialog is a modal dialog designed to display a message to the user with an OK button to dismiss the dialog. It blocks app execution until the user interacts with it or it closes due to a timeout.",source:"@site/docs/components/option-dialogs/message.md",sourceDirName:"components/option-dialogs",slug:"/components/option-dialogs/message",permalink:"/docs/components/option-dialogs/message",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/option-dialogs/message.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Message"},sidebar:"documentationSidebar",previous:{title:"Option Dialogs",permalink:"/docs/components/option-dialogs/"},next:{title:"Confirm",permalink:"/docs/components/option-dialogs/confirm"}},h={},g=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Message type",id:"message-type",level:2},{value:"Button text",id:"button-text",level:2},{value:"HTML processing",id:"html-processing",level:2},{value:"Timeout",id:"timeout",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"message-dialog",children:"Message Dialog"}),"\n",(0,n.jsx)(l.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",target:"_blank",clickable:!1,iconName:"shadow"}),"\n",(0,n.jsx)(l.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-dialog",clickable:!1,iconName:"code"}),"\n",(0,n.jsx)(l.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-button",clickable:!1,iconName:"code"}),"\n",(0,n.jsx)(r.Z,{type:"MessageDialog",location:"com/webforj/component/optiondialog/MessageDialog",top:"true"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"MessageDialog"})," is a modal dialog designed to display a message to the user with an ",(0,n.jsx)(t.code,{children:"OK"})," button to dismiss the dialog. It blocks app execution until the user interacts with it or it closes due to a timeout."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'OptionDialog.showMessageDialog("Hello World!");\n'})}),"\n",(0,n.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,n.jsx)(t.p,{children:"The Message Dialog provides a way to display informational alerts, such as notifications, updates, or simple messages that only require the user to acknowledge them without providing any input."}),"\n",(0,n.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"MessageDialog"})," can be initiated through the ",(0,n.jsx)(t.code,{children:"OptionDialog"})," factory class using one of the various ",(0,n.jsx)(t.code,{children:"showMessageDialog"})," methods to configure its attributes and display the dialog directly. For more control over the configurations, the dialog can also be created using one of its several constructors."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'MessageDialog dialog = new MessageDialog(\n    "Hello World", "Hello World", MessageDialog.MessageType.INFO);\ndialog.setBlurred(true);\ndialog.setAlignment(MessageDialog.Alignment.TOP);\ndialog.show();\n'})}),"\n",(0,n.jsx)(t.h2,{id:"message-type",children:"Message type"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"MessageDialog"})," supports the following message types. When you configures a type, The dialog displays an icon beside the message, and the dialog's theme updates according to the webforJ design system rules."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"PLAIN"}),": Displays the message without an icon, using the default theme."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ERROR"}),": Displays an error icon next to the message with the error theme applied."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"QUESTION"}),": Displays a question mark icon beside the message, using the primary theme."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"WARNING"}),": Displays a warning icon next to the message with the warning theme applied."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"INFO"}),": Displays an info icon beside the message, using the info theme."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In the following sample, The code configures a message dialog of type ",(0,n.jsx)(t.code,{children:"WARNING"}),". with a custom title and message."]}),"\n",(0,n.jsx)(o.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.optiondialog.message.MessageDialogType",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/optiondialog/message/MessageDialogType.java",height:"350px"}),"\n",(0,n.jsx)(t.admonition,{title:"Dialog & Button Theme",type:"tip",children:(0,n.jsxs)(t.p,{children:["By default, the dialog's determines the theme based on the message type. You can customize the dialog's theme using the ",(0,n.jsx)(t.code,{children:"setTheme(Theme theme)"})," method and independently adjust the button theme with the ",(0,n.jsx)(t.code,{children:"setButtonTheme(ButtonTheme theme)"})," method to create different variations."]})}),"\n",(0,n.jsx)(t.h2,{id:"button-text",children:"Button text"}),"\n",(0,n.jsxs)(t.p,{children:["You can configure the dialog button's text using the ",(0,n.jsx)(t.code,{children:"setButtonText(String text)"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'OptionDialog.showMessageDialog("Hello World!", "Title", "Got it");\n'})}),"\n",(0,n.jsx)(t.h2,{id:"html-processing",children:"HTML processing"}),"\n",(0,n.jsx)(t.p,{children:"By default, the message dialog processes and renders HTML content. You can turn off this feature by configuring it to display raw text instead."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'MessageDialog dialog = new MessageDialog(\n    "<b>Hello World</b>", "Hello World", MessageDialog.MessageType.INFO);\ndialog.setRawText(true);\ndialog.show();\n'})}),"\n",(0,n.jsx)(t.h2,{id:"timeout",children:"Timeout"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"MessageDialog"})," allows you to set a timeout duration after which the dialog automatically closes. This feature is useful for non-critical notifications or information that doesn't require the user's immediate interaction."]}),"\n",(0,n.jsxs)(t.p,{children:["You can configure the timeout for the dialog using the ",(0,n.jsx)(t.code,{children:"setTimeout(int timeout)"})," method. The timeout duration is in seconds. If the specified time elapses without any user interaction, the dialog closes automatically."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'MessageDialog dialog = new MessageDialog("Hello World", "Title");\ndialog.setTimeout(2);\ndialog.show();\n'})}),"\n",(0,n.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Clear and Concise Messages"}),": Keep messages short and to the point and avoid technical jargon; use user-friendly language."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Appropriate Message Types"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Use ",(0,n.jsx)(t.code,{children:"ERROR"})," for critical issues."]}),"\n",(0,n.jsxs)(t.li,{children:["Use ",(0,n.jsx)(t.code,{children:"WARNING"})," for cautionary notices."]}),"\n",(0,n.jsxs)(t.li,{children:["Use ",(0,n.jsx)(t.code,{children:"INFO"})," for general information."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Consistent Theming"}),": Align dialog and button themes with your apps's design."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Judicious Use of Timeout"}),": Set timeouts for non-critical notifications and ensure users have enough time to read the message."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Avoid Overuse"}),": Use dialogs sparingly to prevent user frustration and reserve for important messages requiring user action or acknowledgment."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,n.jsx)(t.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,n.jsxs)(t.p,{children:["These are the various parts of the ",(0,n.jsx)(t.a,{href:"../../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,n.jsx)(i.Z,{tag:s(7099).Vq,table:"parts"}),"\n",(0,n.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,n.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,n.jsx)(i.Z,{tag:s(7099).Vq,table:"reflects"})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},6031:(e,t,s)=>{var n=s(4836);t.Z=void 0;var a=n(s(4938)),o=s(5893),i=(0,a.default)((0,o.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=i},2610:(e,t,s)=>{var n=s(4836);t.Z=void 0;var a=n(s(4938)),o=s(5893),i=(0,a.default)((0,o.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=i},5162:(e,t,s)=>{s.d(t,{Z:()=>i});s(7294);var n=s(6010);const a={tabItem:"tabItem_Ymn6"};var o=s(5893);function i(e){let{children:t,hidden:s,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:s,children:t})}},4866:(e,t,s)=>{s.d(t,{Z:()=>j});var n=s(7294),a=s(6010),o=s(2466),i=s(6550),r=s(469),l=s(1980),c=s(7392),d=s(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:a}}=e;return{value:t,label:s,attributes:n,default:a}}))}(s);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function g(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:s}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:s=!1,groupId:a}=e,o=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,u]=p({queryString:s,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(s);return[a,(0,n.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:a}),A=(()=>{const e=c??m;return g({value:e,tabValues:o})?e:null})();(0,r.Z)((()=>{A&&l(A)}),[A]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=s(2389);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(5893);function v(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,s=l.indexOf(t),a=r[s].value;a!==n&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},t),children:r.map((e=>{let{value:t,label:s,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.Z)("tabs__item",A.tabItem,o?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function x(e){let{lazy:t,children:s,selectedValue:a}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",A.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(x,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(t))}},6957:(e,t,s)=>{s.d(t,{Z:()=>v});var n=s(7294),a=s(917),o=s(5697),i=s.n(o),r=s(4866),l=s(5162),c=s(4673),d=s(1750);const u=s.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",g="data:image/png;base64,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";var p=s(2949),m=s(2610),b=s(5944);function A(e){let{collapse:t,setCollapse:s}=e;A.propTypes={collapse:i().bool.isRequired,setCollapse:i().func.isRequired};const n=a.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,o=a.iv`
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
  `;return(0,b.tZ)("div",{css:n,children:(0,b.tZ)("button",{css:o,onClick:()=>{s(!t)},children:t?(0,b.tZ)("img",{alt:"collapse_button",css:r,src:u,className:"icon-tabler-arrow-bar-up"}):(0,b.tZ)("img",{css:r,src:h,className:"icon-tabler-arrow-bar-down"})})})}function f(e){let{url:t}=e;const s=a.iv`
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
  `;return(0,b.tZ)("button",{css:s,onClick:()=>{window.open(t,"_blank")},children:(0,b.tZ)("img",{css:n,src:g})})}function v(e){let{path:t,javaC:s,javaE:o,urls:u,cssURL:h,javaHighlight:g,height:x,frame:w,tabs:j}=e;v.propTypes={path:i().string.isRequired,javaC:i().string,javaE:i().string,urls:i().arrayOf(i().string),cssURL:i().string,javaHighlight:i().string,height:i().string,frame:i().string,tabs:i().arrayOf(i().string)};const[y,D]=(0,n.useState)(""),[Z,B]=(0,n.useState)(""),[M,k]=(0,n.useState)({}),[S,T]=(0,n.useState)(""),[C,N]=(0,n.useState)(!(!s||!o)),[O,E]=(0,n.useState)(!1),[L,H]=(0,n.useState)({}),[V,z]=(0,n.useState)(!1),[F,X]=(0,n.useState)(0),[G,I]=(0,n.useState)(0),[Y,J]=(0,n.useState)(25),[R,W]=(0,n.useState)(25),[q,U]=(0,n.useState)(0),[P,K]=(0,n.useState)(!1),Q=(0,n.useRef)(null),_=(0,n.useRef)(null);function $(e,t,s){return(0,b.tZ)(d.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:s,children:e.code})}(0,n.useEffect)((()=>{o&&fetch(o).then((e=>e.text())).then((e=>{B(e);const t=new URL(o).pathname.split("/"),s=t[t.length-1];H((e=>({...e,javaFile:s})))})),s&&fetch(s).then((e=>e.text())).then((e=>{D(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{T(e);const t=new URL(h).pathname.split("/"),s=t[t.length-1];H((e=>({...e,cssFile:s})))})),u&&u.forEach((function(e){const t=new URL(e),s=t.pathname.split("/"),n=s[s.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){k((s=>({...s,[e]:{fileName:e,code:t}})))}(n,e)}))})),U(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{z(!1)},te=e=>{if(V){const t=e.clientX-F;G+t>q/3&&(Q.current.style.width=`${G+t}px`,_.current.style.right=(Y-t<25?25:Y-t)+"px",W(Y-t<25?25:Y-t))}},se=a.iv`
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
    height: ${x||"100%"};
    pointer-events: ${V?"none":"auto"};
  `,oe=a.iv`
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
  `;return(0,b.BX)("div",{css:se,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=w?(0,b.BX)("div",{onMouseEnter:()=>{E(!0)},onMouseLeave:()=>E(!1),css:ne,children:[(0,b.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,p.I)().colorMode,css:ae,ref:Q,onMouseMove:te}),(0,b.tZ)("div",{css:oe,ref:_,children:(0,b.tZ)(f,{url:t})}),(0,b.tZ)("div",{css:ie,onMouseDown:e=>{e.preventDefault(),z(!0),X(e.clientX),I(Q.current?Q.current.offsetWidth:0),J(R)},children:(0,b.tZ)(m.Z,{})})]}):null,(0,b.BX)(c.Z,{css:re,summary:(0,b.tZ)("summary",{onClick:()=>K(!P),children:P?"Hide Code":"Show Code"}),children:[s&&o?(0,b.tZ)(A,{collapse:C,setCollapse:N}):null,h?(0,b.BX)(r.Z,{css:le,children:[(0,b.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:L.javaFile,default:!0,children:(0,b.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:C?y:Z})}),Object.keys(M).map(((e,t)=>(0,b.tZ)(l.Z,{value:e,label:e,children:$(M[e],ce,g)},"tab"+t))),(0,b.tZ)(l.Z,{value:j?j[1]:"CSS",label:j?j[1]:L.cssFile,children:(0,b.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:S})})]}):(0,b.BX)(r.Z,{css:le,children:[(0,b.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:L.javaFile,default:!0,children:(0,b.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:C?y:Z})}),Object.keys(M).map(((e,t)=>(0,b.tZ)(l.Z,{value:e,label:e,children:$(M[e],ce,g)},"tab"+t)))]})]})]})}},3273:(e,t,s)=>{s.d(t,{Z:()=>c});var n=s(7294),a=s(917),o=s(9112),i=s(8385),r=s(6031);var l=s(5944);function c(e){let{type:t,location:s,top:c,children:d,code:u,suffix:h}=e;const[g,p]=(0,n.useState)("");(0,n.useEffect)((()=>{h||(h=""),p("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+s+".html"+h)}),[]);const m=a.iv`
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
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)(o.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(i.Z,{css:b,label:"Java API",component:"a",href:g,icon:(0,l.tZ)(r.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)("a",{href:g,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:g,target:"_blank",children:d})})})]})}},1415:(e,t,s)=>{s.d(t,{Z:()=>o});s(7294);var n=s(8397),a=s(5893);function o(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Z,{...e})})}},7099:e=>{e.exports=JSON.parse('{"LN":"dwc-app-layout","zx":"dwc-button","XZ":"dwc-checkbox","gN":"dwc-field","iR":"dwc-slider","wb":"dwc-listbox","Z":"dwc-choicebox","Ct":"dwc-combobox","C3":"dwc-navigator","EU":"dwc-radio","ib":"dwc-tabbed-pane","dy":"dwc-drawer","Vq":"dwc-dialog","JO":"dwc-icon","qX":"dwc-splitter","m3":"dwc-login"}')}}]);
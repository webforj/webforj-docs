"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5779],{2420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var o=n(5893),s=n(1151),a=n(6957),i=n(7796),r=n(3273),l=n(2665);const c={title:"Login"},d=void 0,u={id:"components/login",title:"Login",description:"The Login component is designed to provide a and user-friendly interface for authentication, allowing users to log in using a username and password. It supports various customizations to enhance user experience across different devices and locales.",source:"@site/docs/components/login.md",sourceDirName:"components",slug:"/components/login",permalink:"/docs/components/login",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/login.md",tags:[],version:"current",frontMatter:{title:"Login"},sidebar:"documentationSidebar",previous:{title:"FlexLayout",permalink:"/docs/components/flex_layouts"},next:{title:"Navigator",permalink:"/docs/components/navigator"}},h={},p=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Login submission",id:"login-submission",level:2},{value:"Internationalization (i18n)",id:"internationalization-i18n",level:2},{value:"Custom fields",id:"custom-fields",level:2},{value:"Cancel button",id:"cancel-button",level:2},{value:"Password managers",id:"password-managers",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"Slots",id:"slots",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3}];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",target:"_blank",clickable:!1,iconName:"shadow"}),"\n",(0,o.jsx)(l.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-login",clickable:!1,iconName:"code"}),"\n",(0,o.jsx)(r.Z,{type:"foundation",location:"com/webforj/component/login/Login",top:"true"}),"\n",(0,o.jsx)(t.p,{children:"The Login component is designed to provide a and user-friendly interface for authentication, allowing users to log in using a username and password. It supports various customizations to enhance user experience across different devices and locales."}),"\n",(0,o.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.login.LoginBasic",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/login/LoginBasic.java",height:"450px"}),"\n",(0,o.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,o.jsx)(t.p,{children:"The Login component provides a user-friendly login form interface within a dialog for entering authentication credentials. It enhances the user experience by offering:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Clear input fields for username and password."}),"\n",(0,o.jsx)(t.li,{children:"Visibility toggle for password to verify input."}),"\n",(0,o.jsx)(t.li,{children:"Input validation feedback to prompt correct format before submission."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,o.jsxs)(t.p,{children:["You can construct the ",(0,o.jsx)(t.code,{children:"Login"})," component using the default ",(0,o.jsx)(t.code,{children:"Login()"})," constructor. Once the component has been instantiated, call the ",(0,o.jsx)(t.code,{children:"open()"})," method on the component itself to display the login dialog."]}),"\n",(0,o.jsx)(t.h2,{id:"login-submission",children:"Login submission"}),"\n",(0,o.jsxs)(t.p,{children:["When users enter their username and password, the login component validates these inputs as required fields. Once the validation passes, a form submission event is triggered, delivering the entered credentials. To prevent multiple submissions, the ",(0,o.jsx)(t.code,{children:"Signin"})," button is immediately disabled."]}),"\n",(0,o.jsxs)(t.p,{children:["The demo below illustrates a basic form submission process. If the username and password are both set to ",(0,o.jsx)(t.code,{children:'"admin"'})," respectively, the login dialog closes, and a logout button appears. If the credentials don't match, the default error message of the login form is displayed."]}),"\n",(0,o.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.login.LoginSubmission",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/login/LoginSubmission.java",height:"450px"}),"\n",(0,o.jsx)(t.admonition,{title:"Disabling the Signin Button",type:"info",children:(0,o.jsxs)(t.p,{children:["By default, the login form immediately disables the ",(0,o.jsx)(t.code,{children:"Signin"})," button once the component validates the login inputs as correct, to prevent multiple submissions. You can re-enable the ",(0,o.jsx)(t.code,{children:"Signin"})," button using the ",(0,o.jsx)(t.code,{children:"setEnabled(true)"})," method."]})}),"\n",(0,o.jsx)(t.admonition,{title:"Allowing Empty Passwords",type:"tip",children:(0,o.jsxs)(t.p,{children:["In certain scenarios, empty passwords may be permissible, allowing users to log in with just a username. The login dialog can be configured to accept empty passwords by setting ",(0,o.jsx)(t.code,{children:"setEmptyPassword(true)"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"internationalization-i18n",children:"Internationalization (i18n)"}),"\n",(0,o.jsxs)(t.p,{children:["The titles, descriptions, labels, and messages within the login component are fully customizable using the ",(0,o.jsx)(t.code,{children:"LoginI18n"})," class. This flexibility allows you to tailor the login interface to meet specific localization requirements or personalization preferences."]}),"\n",(0,o.jsx)(t.p,{children:"The demo below illustrates how to provide a German translation for the login dialog, ensuring that all interface elements are adapted to the German language to enhance user experience for German-speaking users."}),"\n",(0,o.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.login.LoginInternationalization",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/login/LoginInternationalization.java",height:"500px"}),"\n",(0,o.jsx)(t.h2,{id:"custom-fields",children:"Custom fields"}),"\n",(0,o.jsxs)(t.p,{children:["The login component includes ",(0,o.jsx)(t.a,{href:"#slots",children:"several slots"}),", which allow you to add extra fields if necessary. This feature provides more control over the information required for successful authentication."]}),"\n",(0,o.jsx)(t.p,{children:"In the example below, a Customer ID field is added to the login form. Users must provide a valid ID to complete authentication, enhancing security and ensuring that access is granted only after verifying all required credentials."}),"\n",(0,o.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.login.LoginCustomFields",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/login/LoginCustomFields.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/login/LoginCustomFields/style.css",height:"700px"}),"\n",(0,o.jsx)(t.admonition,{title:"Submission Payload",type:"info",children:(0,o.jsx)(t.p,{children:"Note that the login component doesn't automatically recognize or include extra fields added to the form in its submission payload. This means developers must explicitly retrieve the value of any additional fields from the client side and handle it according to the app's requirements to complete the authentication process."})}),"\n",(0,o.jsx)(t.h2,{id:"cancel-button",children:"Cancel button"}),"\n",(0,o.jsxs)(t.p,{children:["In certain scenarios, it may be desirable to add a cancel button alongside the ",(0,o.jsx)(t.code,{children:"Signin"})," button. This feature is useful particularly when a user attempts to access a restricted area of the app and needs an option to cancel the action and return to their previous location. The login form includes a cancel button by default, but it's hidden from view."]}),"\n",(0,o.jsx)(t.p,{children:"To make the cancel button visible, you must provide a label for it - once labeled, it will appear on the screen. You can also listen to cancel events to respond appropriately to user actions, ensuring a smooth and user-friendly experience for navigating the app."}),"\n",(0,o.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.login.LoginCancelButton",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/login/LoginCancelButton.java",height:"450px"}),"\n",(0,o.jsx)(t.admonition,{title:"Hiding Elements",type:"tip",children:(0,o.jsx)(t.p,{children:"To hide an element from the login screen, simply set its label to an empty string. This approach is particularly useful for temporarily removing interface components without permanently altering the codebase."})}),"\n",(0,o.jsx)(t.h2,{id:"password-managers",children:"Password managers"}),"\n",(0,o.jsxs)(t.p,{children:["The login component is designed to be compatible with browser-based password managers, enhancing the user experience by simplifying the login process. For users of Chromium-based browsers, the component integrates seamlessly with the ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential",children:(0,o.jsx)(t.code,{children:"PasswordCredential"})})," API. This integration enables several convenient features:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Auto-fill"}),": The browser may automatically fill out the username and password fields if the user has saved credentials for the site."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Credential Management"}),": After logging in, the browser can prompt the user to save new credentials, making future logins faster and easier."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Credential Selection"}),": If multiple credentials are saved, the browser can offer a choice to the user to select from one of the saved sets."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,o.jsx)(t.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,o.jsxs)(t.p,{children:["These are the various parts of the ",(0,o.jsx)(t.a,{href:"../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,o.jsx)(i.Z,{tag:n(7099).m3,table:"parts"}),"\n",(0,o.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,o.jsxs)(t.p,{children:["Listed below are the slots available for utilization within the ",(0,o.jsx)(t.code,{children:"Login"})," component. These slots act as placeholders within the component that control where the children of a customized element should be inserted within the shadow tree."]}),"\n",(0,o.jsx)(i.Z,{tag:n(7099).m3,table:"slots"}),"\n",(0,o.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,o.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,o.jsx)(i.Z,{tag:n(7099).m3,table:"reflects"})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},6031:(e,t,n)=>{var o=n(4836);t.Z=void 0;var s=o(n(4938)),a=n(5893),i=(0,s.default)((0,a.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=i},2610:(e,t,n)=>{var o=n(4836);t.Z=void 0;var s=o(n(4938)),a=n(5893),i=(0,s.default)((0,a.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=i},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var o=n(6010);const s={tabItem:"tabItem_Ymn6"};var a=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(7294),s=n(6010),a=n(2466),i=n(6550),r=n(469),l=n(1980),c=n(7392),d=n(12);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:s}}=e;return{value:t,label:n,attributes:o,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:n,groupId:s}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Nk)(n);return[s,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),f=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,r.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function A(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=r[n].value;s!==o&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(A,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,v.jsx)(x,{...e,children:u(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>A});var o=n(7294),s=n(917),a=n(5697),i=n.n(a),r=n(4866),l=n(5162),c=n(4673),d=n(1750);const u=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",p="data:image/png;base64,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";var m=n(2949),g=n(2610),b=n(5944);function f(e){let{collapse:t,setCollapse:n}=e;f.propTypes={collapse:i().bool.isRequired,setCollapse:i().func.isRequired};const o=s.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,a=s.iv`
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
  `,r=s.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,b.tZ)("div",{css:o,children:(0,b.tZ)("button",{css:a,onClick:()=>{n(!t)},children:t?(0,b.tZ)("img",{alt:"collapse_button",css:r,src:u,className:"icon-tabler-arrow-bar-up"}):(0,b.tZ)("img",{css:r,src:h,className:"icon-tabler-arrow-bar-down"})})})}function v(e){let{url:t}=e;const n=s.iv`
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
  `,o=s.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,b.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,b.tZ)("img",{css:o,src:p})})}function A(e){let{path:t,javaC:n,javaE:a,urls:u,cssURL:h,javaHighlight:p,height:w,frame:x,tabs:y}=e;A.propTypes={path:i().string.isRequired,javaC:i().string,javaE:i().string,urls:i().arrayOf(i().string),cssURL:i().string,javaHighlight:i().string,height:i().string,frame:i().string,tabs:i().arrayOf(i().string)};const[j,Z]=(0,o.useState)(""),[S,D]=(0,o.useState)(""),[B,C]=(0,o.useState)({}),[k,L]=(0,o.useState)(""),[E,z]=(0,o.useState)(!(!n||!a)),[T,N]=(0,o.useState)(!1),[M,O]=(0,o.useState)({}),[V,F]=(0,o.useState)(!1),[I,H]=(0,o.useState)(0),[X,G]=(0,o.useState)(0),[Y,J]=(0,o.useState)(25),[q,P]=(0,o.useState)(25),[R,W]=(0,o.useState)(0),[U,K]=(0,o.useState)(!1),Q=(0,o.useRef)(null),_=(0,o.useRef)(null);function $(e,t,n){return(0,b.tZ)(d.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,o.useEffect)((()=>{a&&fetch(a).then((e=>e.text())).then((e=>{D(e);const t=new URL(a).pathname.split("/"),n=t[t.length-1];O((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{Z(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{L(e);const t=new URL(h).pathname.split("/"),n=t[t.length-1];O((e=>({...e,cssFile:n})))})),u&&u.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),o=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){C((n=>({...n,[e]:{fileName:e,code:t}})))}(o,e)}))})),W(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{F(!1)},te=e=>{if(V){const t=e.clientX-I;X+t>R/3&&(Q.current.style.width=`${X+t}px`,_.current.style.right=(Y-t<25?25:Y-t)+"px",P(Y-t<25?25:Y-t))}},ne=s.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,oe=s.iv`
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
    height: ${w||"100%"};
    pointer-events: ${V?"none":"auto"};
  `,ae=s.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${T&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ie=s.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,re=s.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==x?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==x?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `;return(0,b.BX)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=x?(0,b.BX)("div",{onMouseEnter:()=>{N(!0)},onMouseLeave:()=>N(!1),css:oe,children:[(0,b.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.I)().colorMode,css:se,ref:Q,onMouseMove:te}),(0,b.tZ)("div",{css:ae,ref:_,children:(0,b.tZ)(v,{url:t})}),(0,b.tZ)("div",{css:ie,onMouseDown:e=>{e.preventDefault(),F(!0),H(e.clientX),G(Q.current?Q.current.offsetWidth:0),J(q)},children:(0,b.tZ)(g.Z,{})})]}):null,(0,b.BX)(c.Z,{css:re,summary:(0,b.tZ)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[n&&a?(0,b.tZ)(f,{collapse:E,setCollapse:z}):null,h?(0,b.BX)(r.Z,{css:le,children:[(0,b.tZ)(l.Z,{value:y?y[0]:"Java",label:y?y[0]:M.javaFile,default:!0,children:(0,b.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:E?j:S})}),Object.keys(B).map(((e,t)=>(0,b.tZ)(l.Z,{value:e,label:e,children:$(B[e],ce,p)},"tab"+t))),(0,b.tZ)(l.Z,{value:y?y[1]:"CSS",label:y?y[1]:M.cssFile,children:(0,b.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:k})})]}):(0,b.BX)(r.Z,{css:le,children:[(0,b.tZ)(l.Z,{value:y?y[0]:"Java",label:y?y[0]:M.javaFile,default:!0,children:(0,b.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:E?j:S})}),Object.keys(B).map(((e,t)=>(0,b.tZ)(l.Z,{value:e,label:e,children:$(B[e],ce,p)},"tab"+t)))]})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(7294),s=n(917),a=n(9112),i=n(8385),r=n(6031);var l=n(5944);function c(e){let{type:t,location:n,top:c,children:d,code:u,suffix:h}=e;const[p,m]=(0,o.useState)("");(0,o.useEffect)((()=>{h||(h=""),m("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+n+".html"+h)}),[]);const g=s.iv`
    display: inline;

    ${c&&s.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=s.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)(a.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(i.Z,{css:b,label:"Java API",component:"a",href:p,icon:(0,l.tZ)(r.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var o=n(8397),s=n(5893);function a(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{...e})})}},7099:e=>{e.exports=JSON.parse('{"LN":"dwc-app-layout","zx":"dwc-button","XZ":"dwc-checkbox","gN":"dwc-field","iR":"dwc-slider","wb":"dwc-listbox","Z":"dwc-choicebox","Ct":"dwc-combobox","C3":"dwc-navigator","ko":"dwc-progressbar","EU":"dwc-radio","ib":"dwc-tabbed-pane","dy":"dwc-drawer","Vq":"dwc-dialog","JO":"dwc-icon","qX":"dwc-splitter","m3":"dwc-login"}')}}]);
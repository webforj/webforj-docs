"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8604],{5013:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=s(4848),n=s(8453),o=s(5943),a=(s(1530),s(1803)),i=s(5529);const l={sidebar_position:5,title:"PasswordField",slug:"passwordfield"},c=void 0,d={id:"components/fields/password-field",title:"PasswordField",description:"The PasswordField class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the Field documentation page for an overview of Field properties, events, and other important information.",source:"@site/docs/components/fields/password-field.md",sourceDirName:"components/fields",slug:"/components/fields/passwordfield",permalink:"/docs/components/fields/passwordfield",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/fields/password-field.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"PasswordField",slug:"passwordfield"},sidebar:"documentationSidebar",previous:{title:"NumberField",permalink:"/docs/components/fields/numberfield"},next:{title:"TextField",permalink:"/docs/components/fields/textfield"}},u={},h=[{value:"Usages",id:"usages",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Password Visibility",id:"password-visibility",level:3},{value:"Placeholder Text",id:"placeholder-text",level:3},{value:"Best Practices",id:"best-practices",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,r.jsx)(i.A,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-field",clickable:!1,iconName:"code"}),"\n",(0,r.jsx)(a.A,{type:"foundation",location:"com/webforj/component/field/PasswordField",top:"true"}),"\n",(0,r.jsxs)(t.admonition,{type:"success",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{children:(0,r.jsx)(t.strong,{children:"Important"})}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"PasswordField"})," class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/docs/components/fields",children:"Field documentation page"})})," for an overview of Field properties, events, and other important information."]})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"PasswordField"}),' component provides a way for the user to securely enter a password. The element is presented as a one-line plain text editor control in which the text is obscured so that it cannot be read, usually by replacing each character with a symbol such as the asterisk ("*") or a dot ("\u2022"). This character will vary depending on the user agent and operating system.']}),"\n",(0,r.jsx)(o.A,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.fielddemos.PasswordFieldDemo",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/fielddemos/PasswordFieldDemo.java",javaC:"",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/fieldstyles/date_field_styles.css"}),"\n",(0,r.jsx)(t.h3,{id:"usages",children:"Usages"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"PasswordField"})," is best used in scenarios where capturing or handling sensitive information, such as passwords or other confidential data, is essential to the user interface or application functionality. Here are some examples of when to use the ",(0,r.jsx)(t.code,{children:"PasswordField"}),":"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"User Authentication and Registration"}),": Password fields are crucial in applications that involve user authentication or registration processes, where secure password input is required."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Secure Form Inputs"}),": When designing forms that require input of sensitive information, such as credit card details or personal identification numbers (PINs), using a ",(0,r.jsx)(t.code,{children:"PasswordField"})," ensures the secure entry of such data."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Account Management and Profile Settings"}),": Password fields are valuable in applications that involve account management or profile settings, allowing users to change or update their passwords securely."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"PasswordField"})," class has three constructors:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"PasswordField(String label, String password)"}),": Creates a ",(0,r.jsx)(t.code,{children:"PasswordField"})," with a given label and password."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"PasswordField(String label)"}),": Creates a ",(0,r.jsx)(t.code,{children:"PasswordField"})," with a given label but with no pre-populated datetime."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"PasswordField()"}),": Creates a ",(0,r.jsx)(t.code,{children:"PasswordField"})," without any provided information."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"password-visibility",children:"Password Visibility"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the ",(0,r.jsx)(t.code,{children:"setPasswordReveal"})," method to control the visibility of the password reveal icon. When set to true, the password reveal icon is visible -  otherwise, it is hidden. You can check whether the password reveal icon is visible using the ",(0,r.jsx)(t.code,{children:"isPasswordReveal"})," method. It returns true if the password reveal icon is visible; otherwise, it returns false."]}),"\n",(0,r.jsx)(t.h3,{id:"placeholder-text",children:"Placeholder Text"}),"\n",(0,r.jsxs)(t.p,{children:["You can set placeholder text for the ",(0,r.jsx)(t.code,{children:"PasswordField"})," using the ",(0,r.jsx)(t.code,{children:"setPlaceholder"})," method. The placeholder text is displayed when the field is empty, helping to prompt the user to enter appropriate input into the ",(0,r.jsx)(t.code,{children:"PasswordField"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(t.p,{children:["As the ",(0,r.jsx)(t.code,{children:"PasswordField"})," component is often associated with sensitive information, consider the following best practices when using the ",(0,r.jsx)(t.code,{children:"PasswordField"}),":"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Provide Password Strength Feedback"}),": Incorporate password strength indicators or feedback mechanisms to help users create strong and secure passwords. Evaluate factors such as length, complexity, and a mix of uppercase and lowercase letters, numbers, and special characters."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Ensure Secure Password Storage"}),": Implement proper security measures to handle and store passwords securely in your application. Utilize industry-standard encryption algorithms and never store passwords in plain text."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Handle Password Confirmation"}),": If your application requires users to confirm their password, consider adding a password confirmation field. This helps users avoid errors when entering their password and provides an additional layer of security."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Allow Password Reset"}),': If your application involves user accounts, provide an option for users to reset their password. This could be in the form of a "Forgot Password" feature that initiates a password recovery process.']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Consider Accessibility"}),": Utilize the PasswordField with accessibility in mind, ensuring it meets accessibility standards such as providing proper labels, and compatibility with assistive technologies."]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7785:(e,t,s)=>{var r=s(4994);t.A=void 0;var n=r(s(2032)),o=s(4848),a=(0,n.default)((0,o.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.A=a},2706:(e,t,s)=>{var r=s(4994);t.A=void 0;var n=r(s(2032)),o=s(4848),a=(0,n.default)((0,o.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.A=a},9365:(e,t,s)=>{s.d(t,{A:()=>a});s(6540);var r=s(53);const n={tabItem:"tabItem_Ymn6"};var o=s(4848);function a(e){let{children:t,hidden:s,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,a),hidden:s,children:t})}},1470:(e,t,s)=>{s.d(t,{A:()=>y});var r=s(6540),n=s(53),o=s(3104),a=s(6347),i=s(205),l=s(7485),c=s(1682),d=s(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:n}}=e;return{value:t,label:s,attributes:r,default:n}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const n=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function A(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,o=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:s,groupId:n}),[A,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Dv)(s);return[n,(0,r.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:n}),f=(()=>{const e=c??A;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=s(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function w(e){let{className:t,block:s,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,s=l.indexOf(t),n=i[s].value;n!==r&&(c(t),a(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,n.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:n}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=A(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,g.jsx)(w,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function y(e){const t=(0,b.A)();return(0,g.jsx)(x,{...e,children:u(e.children)},String(t))}},5943:(e,t,s)=>{s.d(t,{A:()=>w});var r=s(6540),n=s(7437),o=s(5556),a=s.n(o),i=s(1470),l=s(9365),c=s(1622),d=s(1302);const u=s.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",p="data:image/png;base64,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";var m=s(5293),A=s(2706),b=s(2445);function f(e){let{collapse:t,setCollapse:s}=e;f.propTypes={collapse:a().bool.isRequired,setCollapse:a().func.isRequired};const r=n.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,o=n.AH`
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
  `,i=n.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,b.Y)("div",{css:r,children:(0,b.Y)("button",{css:o,onClick:()=>{s(!t)},children:t?(0,b.Y)("img",{alt:"collapse_button",css:i,src:u,className:"icon-tabler-arrow-bar-up"}):(0,b.Y)("img",{css:i,src:h,className:"icon-tabler-arrow-bar-down"})})})}function g(e){let{url:t}=e;const s=n.AH`
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
  `,r=n.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,b.Y)("button",{css:s,onClick:()=>{window.open(t,"_blank")},children:(0,b.Y)("img",{css:r,src:p})})}function w(e){let{path:t,javaC:s,javaE:o,urls:u,cssURL:h,javaHighlight:p,height:v,frame:x,tabs:y}=e;w.propTypes={path:a().string.isRequired,javaC:a().string,javaE:a().string,urls:a().arrayOf(a().string),cssURL:a().string,javaHighlight:a().string,height:a().string,frame:a().string,tabs:a().arrayOf(a().string)};const[j,D]=(0,r.useState)(""),[F,B]=(0,r.useState)(""),[k,S]=(0,r.useState)({}),[C,P]=(0,r.useState)(""),[Y,E]=(0,r.useState)(!(!s||!o)),[H,L]=(0,r.useState)(!1),[T,M]=(0,r.useState)({}),[N,V]=(0,r.useState)(!1),[z,O]=(0,r.useState)(0),[G,X]=(0,r.useState)(0),[J,I]=(0,r.useState)(25),[R,W]=(0,r.useState)(25),[q,Z]=(0,r.useState)(0),[U,K]=(0,r.useState)(!1),Q=(0,r.useRef)(null),_=(0,r.useRef)(null);function $(e,t,s){return(0,b.Y)(d.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:s,children:e.code})}(0,r.useEffect)((()=>{o&&fetch(o).then((e=>e.text())).then((e=>{B(e);const t=new URL(o).pathname.split("/"),s=t[t.length-1];M((e=>({...e,javaFile:s})))})),s&&fetch(s).then((e=>e.text())).then((e=>{D(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{P(e);const t=new URL(h).pathname.split("/"),s=t[t.length-1];M((e=>({...e,cssFile:s})))})),u&&u.forEach((function(e){const t=new URL(e),s=t.pathname.split("/"),r=s[s.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){S((s=>({...s,[e]:{fileName:e,code:t}})))}(r,e)}))})),Z(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{V(!1)},te=e=>{if(N){const t=e.clientX-z;G+t>q/3&&(Q.current.style.width=`${G+t}px`,_.current.style.right=(J-t<25?25:J-t)+"px",W(J-t<25?25:J-t))}},se=n.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,re=n.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ne=n.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${v||"100%"};
    pointer-events: ${N?"none":"auto"};
  `,oe=n.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${H&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ae=n.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ie=n.AH`
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
  `,le=n.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=n.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,b.FD)("div",{css:se,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=x?(0,b.FD)("div",{onMouseEnter:()=>{L(!0)},onMouseLeave:()=>L(!1),css:re,children:[(0,b.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.G)().colorMode,css:ne,ref:Q,onMouseMove:te}),(0,b.Y)("div",{css:oe,ref:_,children:(0,b.Y)(g,{url:t})}),(0,b.Y)("div",{css:ae,onMouseDown:e=>{e.preventDefault(),V(!0),O(e.clientX),X(Q.current?Q.current.offsetWidth:0),I(R)},children:(0,b.Y)(A.A,{})})]}):null,(0,b.FD)(c.A,{css:ie,summary:(0,b.Y)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[s&&o?(0,b.Y)(f,{collapse:Y,setCollapse:E}):null,h?(0,b.FD)(i.A,{css:le,children:[(0,b.Y)(l.A,{value:y?y[0]:"Java",label:y?y[0]:T.javaFile,default:!0,children:(0,b.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:Y?j:F})}),Object.keys(k).map(((e,t)=>(0,b.Y)(l.A,{value:e,label:e,children:$(k[e],ce,p)},"tab"+t))),(0,b.Y)(l.A,{value:y?y[1]:"CSS",label:y?y[1]:T.cssFile,children:(0,b.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:C})})]}):(0,b.FD)(i.A,{css:le,children:[(0,b.Y)(l.A,{value:y?y[0]:"Java",label:y?y[0]:T.javaFile,default:!0,children:(0,b.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:Y?j:F})}),Object.keys(k).map(((e,t)=>(0,b.Y)(l.A,{value:e,label:e,children:$(k[e],ce,p)},"tab"+t)))]})]})]})}},1803:(e,t,s)=>{s.d(t,{A:()=>c});var r=s(6540),n=s(7437),o=s(276),a=s(526),i=s(7785);var l=s(2445);function c(e){let{type:t,location:s,top:c,children:d,code:u,suffix:h}=e;const[p,m]=(0,r.useState)("");(0,r.useEffect)((()=>{h||(h=""),m("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+s+".html"+h)}),[]);const A=n.AH`
    display: inline;

    ${c&&n.AH`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=n.AH`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.FD)(l.FK,{children:["true"===c&&(0,l.Y)("div",{css:A,children:(0,l.Y)(o.A,{title:"JavaDoc",arrow:!0,children:(0,l.Y)(a.A,{css:b,label:"Java API",component:"a",href:p,icon:(0,l.Y)(i.A,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.Y)("div",{css:A,children:(0,l.Y)("a",{href:p,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.Y)("div",{css:A,children:(0,l.Y)("code",{children:(0,l.Y)("a",{href:p,target:"_blank",children:d})})})]})}},6999:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var r=s(4718),n=s(4848);function o(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.A,{...e})})}}}]);
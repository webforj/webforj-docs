"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1030],{8533:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=s(5893),r=s(1151),a=s(6957),i=(s(7796),s(3273)),o=s(2665);const l={sidebar_position:5,title:"PasswordField",slug:"passwordfield"},c=void 0,d={id:"components/fields/password-field",title:"PasswordField",description:"The PasswordField class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the Field documentation page for an overview of Field properties, events, and other important information.",source:"@site/docs/components/fields/password-field.md",sourceDirName:"components/fields",slug:"/components/fields/passwordfield",permalink:"/docs/components/fields/passwordfield",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/fields/password-field.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"PasswordField",slug:"passwordfield"},sidebar:"documentationSidebar",previous:{title:"NumberField",permalink:"/docs/components/fields/numberfield"},next:{title:"TextField",permalink:"/docs/components/fields/textfield"}},u={},h=[{value:"Usages",id:"usages",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Password Visibility",id:"password-visibility",level:3},{value:"Placeholder Text",id:"placeholder-text",level:3},{value:"Best Practices",id:"best-practices",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,n.jsx)(o.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"bbj-editbox",href:"https://basishub.github.io/basis-next/#/web-components/bbj-editbox",clickable:!1,iconName:"code"}),"\n",(0,n.jsx)(i.Z,{type:"engine",location:"org/dwcj/component/field/PasswordField",top:"true"}),"\n",(0,n.jsxs)(t.admonition,{type:"success",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{children:(0,n.jsx)(t.strong,{children:"Important"})}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"PasswordField"})," class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/docs/components/fields",children:"Field documentation page"})})," for an overview of Field properties, events, and other important information."]})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"PasswordField"}),' component provides a way for the user to securely enter a password. The element is presented as a one-line plain text editor control in which the text is obscured so that it cannot be read, usually by replacing each character with a symbol such as the asterisk ("*") or a dot ("\u2022"). This character will vary depending on the user agent and operating system.']}),"\n",(0,n.jsx)(a.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.fielddemos.PasswordFieldDemo",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/fielddemos/PasswordFieldDemo.java",javaE:"",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/fieldstyles/date_field_styles.css"}),"\n",(0,n.jsx)(t.h3,{id:"usages",children:"Usages"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"PasswordField"})," is best used in scenarios where capturing or handling sensitive information, such as passwords or other confidential data, is essential to the user interface or application functionality. Here are some examples of when to use the ",(0,n.jsx)(t.code,{children:"PasswordField"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"User Authentication and Registration"}),": Password fields are crucial in applications that involve user authentication or registration processes, where secure password input is required."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Secure Form Inputs"}),": When designing forms that require input of sensitive information, such as credit card details or personal identification numbers (PINs), using a ",(0,n.jsx)(t.code,{children:"PasswordField"})," ensures the secure entry of such data."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Account Management and Profile Settings"}),": Password fields are valuable in applications that involve account management or profile settings, allowing users to change or update their passwords securely."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"PasswordField"})," class has three constructors:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"PasswordField(String label, String password)"}),": Creates a ",(0,n.jsx)(t.code,{children:"PasswordField"})," with a given label and password."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"PasswordField(String label)"}),": Creates a ",(0,n.jsx)(t.code,{children:"PasswordField"})," with a given label but with no pre-populated datetime."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"PasswordField()"}),": Creates a ",(0,n.jsx)(t.code,{children:"PasswordField"})," without any provided information."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"password-visibility",children:"Password Visibility"}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.code,{children:"setPasswordReveal"})," method to control the visibility of the password reveal icon. When set to true, the password reveal icon is visible -  otherwise, it is hidden. You can check whether the password reveal icon is visible using the ",(0,n.jsx)(t.code,{children:"isPasswordReveal"})," method. It returns true if the password reveal icon is visible; otherwise, it returns false."]}),"\n",(0,n.jsx)(t.h3,{id:"placeholder-text",children:"Placeholder Text"}),"\n",(0,n.jsxs)(t.p,{children:["You can set placeholder text for the ",(0,n.jsx)(t.code,{children:"PasswordField"})," using the ",(0,n.jsx)(t.code,{children:"setPlaceholder"})," method. The placeholder text is displayed when the field is empty, helping to prompt the user to enter appropriate input into the ",(0,n.jsx)(t.code,{children:"PasswordField"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsxs)(t.p,{children:["As the ",(0,n.jsx)(t.code,{children:"PasswordField"})," component is often associated with sensitive information, consider the following best practices when using the ",(0,n.jsx)(t.code,{children:"PasswordField"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Provide Password Strength Feedback"}),": Incorporate password strength indicators or feedback mechanisms to help users create strong and secure passwords. Evaluate factors such as length, complexity, and a mix of uppercase and lowercase letters, numbers, and special characters."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Ensure Secure Password Storage"}),": Implement proper security measures to handle and store passwords securely in your application. Utilize industry-standard encryption algorithms and never store passwords in plain text."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Handle Password Confirmation"}),": If your application requires users to confirm their password, consider adding a password confirmation field. This helps users avoid errors when entering their password and provides an additional layer of security."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Allow Password Reset"}),': If your application involves user accounts, provide an option for users to reset their password. This could be in the form of a "Forgot Password" feature that initiates a password recovery process.']}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Consider Accessibility"}),": Utilize the PasswordField with accessibility in mind, ensuring it meets accessibility standards such as providing proper labels, and compatibility with assistive technologies."]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5162:(e,t,s)=>{s.d(t,{Z:()=>i});s(7294);var n=s(6010);const r={tabItem:"tabItem_Ymn6"};var a=s(5893);function i(e){let{children:t,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:s,children:t})}},4866:(e,t,s)=>{s.d(t,{Z:()=>y});var n=s(7294),r=s(6010),a=s(2466),i=s(6550),o=s(469),l=s(1980),c=s(7392),d=s(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function A(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:s,groupId:r}),[A,w]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Nk)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),b=(()=>{const e=c??A;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),w(e)}),[u,w,a]),tabValues:a}}var w=s(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(5893);function f(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,s=l.indexOf(t),r=o[s].value;r!==n&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=A(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function y(e){const t=(0,w.Z)();return(0,g.jsx)(x,{...e,children:u(e.children)},String(t))}},6957:(e,t,s)=>{s.d(t,{Z:()=>w});var n=s(7294),r=s(917),a=s(4866),i=s(5162),o=s(4673),l=s(1750);const c="data:image/png;base64,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",d=s.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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";var h=s(2949),p=s(5944);function m(e){let{collapse:t,setCollapse:s}=e;const n=r.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,a=r.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    margin-right: 5px;
    background-color: transparent;  
  `,i=r.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,p.tZ)("div",{css:n,children:(0,p.tZ)("button",{css:a,onClick:()=>{s(!t)},children:t?(0,p.tZ)("img",{css:i,src:d,className:"icon-tabler-arrow-bar-up"}):(0,p.tZ)("img",{css:i,src:c,className:"icon-tabler-arrow-bar-down"})})})}function A(e){let{url:t}=e;const s=r.iv`
      position: relative;
      cursor: pointer;
      z-index: 10;
      height: 35px;
      width: 35px;
      border: none;
      background-color: none;
      justify-self: flex-end;
      /* margin-right: 5px; */
      margin-top: -5px;
      margin-bottom: -20px;
      background-color: transparent;

      
    `,n=r.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,p.tZ)("button",{css:s,onClick:()=>{window.open(t,"_blank")},children:(0,p.tZ)("img",{css:n,src:u})})}function w(e){let{path:t,javaC:s,javaE:c,cssURL:d,javaHighlight:u,height:w,frame:b,tabs:g}=e;const[f,v]=(0,n.useState)(""),[x,y]=(0,n.useState)(""),[j,D]=(0,n.useState)(""),[B,Z]=(0,n.useState)(!(!s||!c)),[F,k]=(0,n.useState)(!1),[P,S]=(0,n.useState)({});(0,n.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{y(e);const t=new URL(c).pathname.split("/"),s=t[t.length-1];S((e=>({...e,javaFile:s})))})),s&&fetch(s).then((e=>e.text())).then((e=>{v(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{D(e);const t=new URL(d).pathname.split("/"),s=t[t.length-1];S((e=>({...e,cssFile:s})))}))}),[]);const C=r.iv`
		display: flex;
    flex-direction: column;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==b?"0 15px 0 15px;":"7px 15px 0 15px;"};
    box-shadow: var(--ifm-global-shadow-lw);
    `,E=r.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${w};
  `,L=r.iv`
    border: none;
    box-shadow: none;
    background-color: var(--code-display-color);
    margin-bottom: 0px;
    padding: 10px;

    .tabs{
      margin-top: 20px;
    }

    summary{
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 0;
      font-weight: bold;
      ::before{
        left: auto;
        margin-left: -100px;
      }
    }

  `,T=r.iv`
  width: 100%;
  `,N=r.iv`
  display: flex;
  justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${F&&"opacity: 1;"};
    
  `;return(0,p.BX)("div",{css:C,children:["hidden"!=b?(0,p.BX)("div",{onMouseEnter:()=>{k(!0)},onMouseLeave:()=>k(!1),css:T,children:[(0,p.tZ)("div",{css:N,children:(0,p.tZ)(A,{url:t})}),(0,p.tZ)("iframe",{loading:"lazy",src:t+"&theme="+("dark"===(0,h.I)().colorMode?"dark":"light"),css:E})]}):null,(0,p.BX)(o.Z,{css:L,summary:(0,p.tZ)("summary",{children:"Show Code"}),children:[s&&c?(0,p.tZ)(m,{collapse:B,setCollapse:Z}):null,d?(0,p.BX)(a.Z,{children:[(0,p.tZ)(i.Z,{value:g?g[0]:"Java",label:g?g[0]:P.javaFile,default:!0,children:(0,p.tZ)(l.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:B?f:x})}),(0,p.tZ)(i.Z,{value:g?g[1]:"CSS",label:g?g[1]:P.cssFile,children:(0,p.tZ)(l.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:j})})]}):(0,p.tZ)(a.Z,{children:(0,p.tZ)(i.Z,{value:g?g[0]:"Java",label:g?g[0]:P.javaFile,default:!0,children:(0,p.tZ)(l.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:B?f:x})})})]})]})}},3273:(e,t,s)=>{s.d(t,{Z:()=>h});var n=s(7294),r=s(917),a=s(8230),i=s(4387),o=s(6770);let l=null,c=null;const d={getLatestTag:async function(){return l&&c&&Date.now()-c<36e5?l:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return l=t[0].name,c=Date.now(),l}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};var u=s(5944);function h(e){let{type:t,location:s,top:l,children:c,code:h,suffix:p}=e;const[m,A]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{try{let e=await d.getLatestTag();p||(p=""),e||(e="23.04"),A("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/"+e+"/"+s+".html"+p)}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const w=r.iv`
    display: inline;

    ${l&&r.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=r.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,u.BX)(u.HY,{children:["true"===l&&(0,u.tZ)("div",{css:w,children:(0,u.tZ)(a.Z,{title:"JavaDoc",arrow:!0,children:(0,u.tZ)(i.Z,{css:b,label:"Java API",component:"a",href:m,icon:(0,u.tZ)(o.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==l&&!h&&(0,u.tZ)("div",{css:w,children:(0,u.tZ)("a",{href:m,target:"_blank",children:c})}),"true"!==l&&h&&(0,u.tZ)("div",{css:w,children:(0,u.tZ)("code",{children:(0,u.tZ)("a",{href:m,target:"_blank",children:c})})})]})}},1415:(e,t,s)=>{s.d(t,{Z:()=>a});s(7294);var n=s(8397),r=s(5893);function a(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.Z,{...e})})}}}]);
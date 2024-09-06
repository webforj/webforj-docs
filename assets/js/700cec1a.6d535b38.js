"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5051],{5066:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(4848),r=o(8453),a=o(5943),s=(o(1530),o(1803));const i={title:"RadioButtonGroup",slug:"radiobuttongroup"},l=void 0,c={id:"components/radio-group",title:"RadioButtonGroup",description:"The RadioButtonGroup class is used to group related radio buttons together, which helps establish the mutual exclusivity among the options within that group. Users can select only one radio button within a given radio group. When a user selects a radio button within a group, any previously selected radio button in the same group automatically becomes deselected. This ensures that only one option can be chosen at a time.",source:"@site/docs/components/radio-group.md",sourceDirName:"components",slug:"/components/radiobuttongroup",permalink:"/docs/components/radiobuttongroup",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/radio-group.md",tags:[],version:"current",frontMatter:{title:"RadioButtonGroup",slug:"radiobuttongroup"},sidebar:"documentationSidebar",previous:{title:"RadioButton",permalink:"/docs/components/radiobutton"},next:{title:"Slider",permalink:"/docs/components/slider"}},u={},d=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Adding and Removing RadioButtons",id:"adding-and-removing-radiobuttons",level:2},{value:"Naming",id:"naming",level:2},{value:"Best Practices",id:"best-practices",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{type:"foundation",location:"com/webforj/component/optioninput/RadioButtonGroup",top:"true"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"RadioButtonGroup"})," class is used to group related radio buttons together, which helps establish the mutual exclusivity among the options within that group. Users can select only one radio button within a given radio group. When a user selects a radio button within a group, any previously selected radio button in the same group automatically becomes deselected. This ensures that only one option can be chosen at a time."]}),"\n",(0,n.jsx)(a.A,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.radiobuttondemos.RadioButtonGroupDemo",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/radiobuttondemos/RadioButtonGroupDemo.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/radiobuttonstyles/radiobutton_styles.css",height:"200px"}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"RadioButtonGroup"})," component will not render an HTML element on the page. Rather, it is only\r\nlogic that ensures a group of RadioButtons behave as a group instead of individually."]})}),"\n",(0,n.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"RadioButtonGroup"})," is best used in scenarios where users need to make a single selection from a predefined set of options presented as radio buttons. Here are some examples of when to use the ",(0,n.jsx)(t.code,{children:"RadioButtonGroup"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Survey or Questionnaires"}),": ",(0,n.jsx)(t.code,{children:"RadioButtonGroup"})," components are commonly used in surveys or questionnaires where users need to select a single response from a list of options."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Preference Settings"}),": Applications that involve preference or settings panels often use RadioButtonGroup component to allow users to choose a single option from a set of mutually exclusive choices."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Filtering or Sorting"}),": A ",(0,n.jsx)(t.code,{children:"RadioButton"})," can be used in applications that require users to select a single filter or sorting option, such as sorting a list of items by different criteria."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"RadioButtonGroup"})," class has four constructors:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"RadioButtonGroup()"}),": Creates an empty ",(0,n.jsx)(t.code,{children:"RadioButtonGroup"})," in the unchecked state."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"RadioButtonGroup(String name)"}),": Creates a ",(0,n.jsx)(t.code,{children:"RadioButtonGroup"})," with an name."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"RadioButtonGroup(RadioButton... buttons)"}),": Creates a ",(0,n.jsx)(t.code,{children:"RadioButtonGroup"})," with one or more ",(0,n.jsx)(t.code,{children:"RadioButton"})," objects assigned to the group."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"RadioButtonGroup(String name, RadioButton... buttons)"})," Creates a ",(0,n.jsx)(t.code,{children:"RadioButtonGroup"})," with both a name and one or more ",(0,n.jsx)(t.code,{children:"RadioButton"})," objects assigned to the group."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"RadioButton"})," component stores the group to which it belongs, which can be accessed via the ",(0,n.jsx)(t.code,{children:"getButtonGroup()"})," method."]}),"\n",(0,n.jsx)(t.h2,{id:"adding-and-removing-radiobuttons",children:"Adding and Removing RadioButtons"}),"\n",(0,n.jsxs)(t.p,{children:["It is possible to add and remove singular or multiple ",(0,n.jsx)(t.code,{children:"RadioButton"})," objects to a group, ensuring that they exhibit mutually-exclusive checking behavior, and are associated with any name that may belong to the group."]}),"\n",(0,n.jsx)(t.h2,{id:"naming",children:"Naming"}),"\n",(0,n.jsxs)(t.p,{children:["The name attribute in a ",(0,n.jsx)(t.code,{children:"RadioButtonGroup"})," groups related RadioButtons together, allowing users to make a single choice from the options provided and enforcing exclusivity among the RadioButtons. The name of a group is not reflected in the DOM, however, and is a convenience utility for the Java developer."]}),"\n",(0,n.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsx)(t.p,{children:"To ensure an optimal user experience when using the RadioButton component, consider the following best practices:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Clearly Label Options"}),": Provide clear and concise labels for each ",(0,n.jsx)(t.code,{children:"RadioButton"})," option to accurately describe the choice. Labels should be easy to understand and distinguish from one another."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Provide Default Selection"}),": If applicable, consider providing a default selection for Radio buttons to guide users when they first encounter the options. The default selection should align with the most common or preferred choice."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7785:(e,t,o)=>{var n=o(4994);t.A=void 0;var r=n(o(2032)),a=o(4848),s=(0,r.default)((0,a.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.A=s},2706:(e,t,o)=>{var n=o(4994);t.A=void 0;var r=n(o(2032)),a=o(4848),s=(0,r.default)((0,a.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.A=s},9365:(e,t,o)=>{o.d(t,{A:()=>s});o(6540);var n=o(53);const r={tabItem:"tabItem_Ymn6"};var a=o(4848);function s(e){let{children:t,hidden:o,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:o,children:t})}},1470:(e,t,o)=>{o.d(t,{A:()=>y});var n=o(6540),r=o(53),a=o(3104),s=o(6347),i=o(205),l=o(7485),c=o(1682),u=o(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:r}}=e;return{value:t,label:o,attributes:n,default:r}}))}(o);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function p(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function A(e){const{defaultValue:t,queryString:o=!1,groupId:r}=e,a=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:o,groupId:r}),[A,g]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(o);return[r,(0,n.useCallback)((e=>{o&&a.set(e)}),[o,a])]}({groupId:r}),b=(()=>{const e=c??A;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=o(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=o(4848);function f(e){let{className:t,block:o,selectedValue:n,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,o=l.indexOf(t),r=i[o].value;r!==n&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;t=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;t=l[o]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":o},t),children:i.map((e=>{let{value:t,label:o,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:o??t},t)}))})}function x(e){let{lazy:t,children:o,selectedValue:r}=e;const a=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=A(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function y(e){const t=(0,g.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},5943:(e,t,o)=>{o.d(t,{A:()=>f});var n=o(6540),r=o(7437),a=o(5556),s=o.n(a),i=o(1470),l=o(9365),c=o(1622),u=o(1302);const d=o.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",p="data:image/png;base64,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";var m=o(5293),A=o(2706),g=o(2445);function b(e){let{collapse:t,setCollapse:o}=e;b.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const n=r.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,a=r.AH`
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
  `,i=r.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,g.Y)("div",{css:n,children:(0,g.Y)("button",{css:a,onClick:()=>{o(!t)},children:t?(0,g.Y)("img",{alt:"collapse_button",css:i,src:d,className:"icon-tabler-arrow-bar-up"}):(0,g.Y)("img",{css:i,src:h,className:"icon-tabler-arrow-bar-down"})})})}function v(e){let{url:t}=e;const o=r.AH`
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
  `,n=r.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,g.Y)("button",{css:o,onClick:()=>{window.open(t,"_blank")},children:(0,g.Y)("img",{css:n,src:p})})}function f(e){let{path:t,javaC:o,javaE:a,urls:d,cssURL:h,javaHighlight:p,height:x,frame:w,tabs:y}=e;f.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[B,j]=(0,n.useState)(""),[D,k]=(0,n.useState)(""),[S,C]=(0,n.useState)({}),[R,Y]=(0,n.useState)(""),[G,E]=(0,n.useState)(!(!o||!a)),[H,L]=(0,n.useState)(!1),[F,M]=(0,n.useState)({}),[N,O]=(0,n.useState)(!1),[V,z]=(0,n.useState)(0),[T,X]=(0,n.useState)(0),[J,P]=(0,n.useState)(25),[W,I]=(0,n.useState)(25),[Z,q]=(0,n.useState)(0),[U,K]=(0,n.useState)(!1),Q=(0,n.useRef)(null),_=(0,n.useRef)(null);function $(e,t,o){return(0,g.Y)(u.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:o,children:e.code})}(0,n.useEffect)((()=>{a&&fetch(a).then((e=>e.text())).then((e=>{k(e);const t=new URL(a).pathname.split("/"),o=t[t.length-1];M((e=>({...e,javaFile:o})))})),o&&fetch(o).then((e=>e.text())).then((e=>{j(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{Y(e);const t=new URL(h).pathname.split("/"),o=t[t.length-1];M((e=>({...e,cssFile:o})))})),d&&d.forEach((function(e){const t=new URL(e),o=t.pathname.split("/"),n=o[o.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){C((o=>({...o,[e]:{fileName:e,code:t}})))}(n,e)}))})),q(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{O(!1)},te=e=>{if(N){const t=e.clientX-V;T+t>Z/3&&(Q.current.style.width=`${T+t}px`,_.current.style.right=(J-t<25?25:J-t)+"px",I(J-t<25?25:J-t))}},oe=r.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ne=r.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,re=r.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${x||"100%"};
    pointer-events: ${N?"none":"auto"};
  `,ae=r.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${H&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,se=r.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ie=r.AH`
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
  `,le=r.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=r.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,g.FD)("div",{css:oe,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=w?(0,g.FD)("div",{onMouseEnter:()=>{L(!0)},onMouseLeave:()=>L(!1),css:ne,children:[(0,g.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.G)().colorMode,css:re,ref:Q,onMouseMove:te}),(0,g.Y)("div",{css:ae,ref:_,children:(0,g.Y)(v,{url:t})}),(0,g.Y)("div",{css:se,onMouseDown:e=>{e.preventDefault(),O(!0),z(e.clientX),X(Q.current?Q.current.offsetWidth:0),P(W)},children:(0,g.Y)(A.A,{})})]}):null,(0,g.FD)(c.A,{css:ie,summary:(0,g.Y)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[o&&a?(0,g.Y)(b,{collapse:G,setCollapse:E}):null,h?(0,g.FD)(i.A,{css:le,children:[(0,g.Y)(l.A,{value:y?y[0]:"Java",label:y?y[0]:F.javaFile,default:!0,children:(0,g.Y)(u.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:G?B:D})}),Object.keys(S).map(((e,t)=>(0,g.Y)(l.A,{value:e,label:e,children:$(S[e],ce,p)},"tab"+t))),(0,g.Y)(l.A,{value:y?y[1]:"CSS",label:y?y[1]:F.cssFile,children:(0,g.Y)(u.A,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:R})})]}):(0,g.FD)(i.A,{css:le,children:[(0,g.Y)(l.A,{value:y?y[0]:"Java",label:y?y[0]:F.javaFile,default:!0,children:(0,g.Y)(u.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:G?B:D})}),Object.keys(S).map(((e,t)=>(0,g.Y)(l.A,{value:e,label:e,children:$(S[e],ce,p)},"tab"+t)))]})]})]})}},1803:(e,t,o)=>{o.d(t,{A:()=>c});var n=o(6540),r=o(7437),a=o(276),s=o(526),i=o(7785);var l=o(2445);function c(e){let{type:t,location:o,top:c,children:u,code:d,suffix:h}=e;const[p,m]=(0,n.useState)("");(0,n.useEffect)((()=>{h||(h=""),m("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+o+".html"+h)}),[]);const A=r.AH`
    display: inline;

    ${c&&r.AH`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,g=r.AH`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.FD)(l.FK,{children:["true"===c&&(0,l.Y)("div",{css:A,children:(0,l.Y)(a.A,{title:"JavaDoc",arrow:!0,children:(0,l.Y)(s.A,{css:g,label:"Java API",component:"a",href:p,icon:(0,l.Y)(i.A,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!d&&(0,l.Y)("div",{css:A,children:(0,l.Y)("a",{href:p,target:"_blank",children:u})}),"true"!==c&&d&&(0,l.Y)("div",{css:A,children:(0,l.Y)("code",{children:(0,l.Y)("a",{href:p,target:"_blank",children:u})})})]})}},6999:(e,t,o)=>{o.d(t,{A:()=>a});o(6540);var n=o(4718),r=o(4848);function a(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.A,{...e})})}}}]);
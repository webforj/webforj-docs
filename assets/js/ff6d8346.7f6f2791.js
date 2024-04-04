"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2529],{353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=n(5893),i=n(1151),a=n(6957),s=n(7796),r=n(3273),c=n(2665);const l={sidebar_position:100,title:"RadioButton",slug:"radiobutton"},d=void 0,u={id:"components/radio-button",title:"RadioButton",description:"The RadioButton class creates an object that can be selected or deselected, and which displays its state to the user. By convention, only one radio button in a group can be selected at a time. Radio buttons are commonly used when mutually exclusive options are available, allowing the user to choose a single option from a set of choices.",source:"@site/docs/components/radio-button.md",sourceDirName:"components",slug:"/components/radiobutton",permalink:"/docs/components/radiobutton",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/radio-button.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"RadioButton",slug:"radiobutton"},sidebar:"documentationSidebar",previous:{title:"ProgressBar",permalink:"/docs/components/progress-bar"},next:{title:"RadioButtonGroup",permalink:"/docs/components/radiobuttongroup"}},h={},p=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Text and Positioning",id:"text-and-positioning",level:2},{value:"Activation",id:"activation",level:2},{value:"Manual Activation",id:"manual-activation",level:3},{value:"Auto Activation",id:"auto-activation",level:3},{value:"Switches",id:"switches",level:2},{value:"Styling",id:"styling",level:2},{value:"Expanses",id:"expanses",level:3},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Dependencies",id:"dependencies-1",level:3}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,o.jsx)(c.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-radio",clickable:!1,iconName:"code"}),"\n",(0,o.jsx)(r.Z,{type:"engine",location:"org/dwcj/component/optioninput/RadioButton",top:"true"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"RadioButton"})," class creates an object that can be selected or deselected, and which displays its state to the user. By convention, only one radio button in a group can be selected at a time. Radio buttons are commonly used when mutually exclusive options are available, allowing the user to choose a single option from a set of choices."]}),"\n",(0,o.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.radiobuttondemos.RadioButtonGroupDemo",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/radiobuttondemos/RadioButtonGroupDemo.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/radiobuttonstyles/radiobutton_styles.css",height:"200px"}),"\n",(0,o.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"RadioButton"})," is best used in scenarios where users need to make a single selection from a predefined set of options. Here are some examples of when to use the ",(0,o.jsx)(t.code,{children:"RadioButton"}),":"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Survey or Questionnaires"}),": Radio buttons are commonly used in surveys or questionnaires where users need to select a single response from a list of options."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Preference Settings"}),": Applications that involve preference or settings panels often use Radio buttons to allow users to choose a single option from a set of mutually exclusive choices."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Filtering or Sorting"}),": A ",(0,o.jsx)(t.code,{children:"RadioButton"})," can be used in applications that require users to select a single filter or sorting option, such as sorting a list of items by different criteria."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"RadioButton"})," class has three constructors:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"RadioButton()"}),": Creates an empty ",(0,o.jsx)(t.code,{children:"RadioButton"})," in the unchecked state."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"RadioButton(String text)"}),": Creates a ",(0,o.jsx)(t.code,{children:"RadioButton"})," with an attached label in the unchecked state."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"RadioButton(String text, boolean checked)"})," Creates a ",(0,o.jsx)(t.code,{children:"RadioButton"})," with an attached label in either the checked or unchecked state, based on the boolean passed (",(0,o.jsx)(t.code,{children:"true"})," for checked, ",(0,o.jsx)(t.code,{children:"false"})," for unchecked)."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Here is an example of how to create a ",(0,o.jsx)(t.code,{children:"RadioButton"})," object:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'RadioButton myRadioButton = new RadioButton("RadioButton Text");\n'})}),"\n",(0,o.jsx)(t.h2,{id:"text-and-positioning",children:"Text and Positioning"}),"\n",(0,o.jsxs)(t.p,{children:["Radio buttons can utilize the ",(0,o.jsx)(t.code,{children:"setText(String text)"})," method, which will be positioned near the radio button according to the built-in ",(0,o.jsx)(t.code,{children:"Position"}),".\r\nRadio buttons have built-in functionality to set text to be displayed either to the right or left of the component. By default, the text will be displayed to the right of the component. Positioning of the horizontal text is supported by use of the ",(0,o.jsx)(t.code,{children:"HorizontalAlignment"})," enum class. Show below are the two settings: ",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.radiobuttondemos.RadioButtonText",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/radiobuttondemos/RadioButtonText.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/radiobuttonstyles/radiobutton_styles.css",height:"100px"}),"\n",(0,o.jsx)(t.h2,{id:"activation",children:"Activation"}),"\n",(0,o.jsxs)(t.p,{children:["Radio buttons can be controlled using two types of activation: manual activation and auto activation. These dictate when a ",(0,o.jsx)(t.code,{children:"RadioButton"})," will change its state."]}),"\n",(0,o.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.radiobuttondemos.RadioButtonActivation",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/radiobuttondemos/RadioButtonActivation.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/radiobuttonstyles/radiobutton_styles.css",height:"175px"}),"\n",(0,o.jsx)(t.h3,{id:"manual-activation",children:"Manual Activation"}),"\n",(0,o.jsx)(t.p,{children:"When a radio button is set to manual activation, it means that it will not be automatically checked when it gains focus.\r\nManual activation allows the user to navigate through the radio button options using the keyboard or other input methods without immediately changing the selected option."}),"\n",(0,o.jsx)(t.p,{children:"If the radio button is part of a group, selecting a different radio button within the group will automatically uncheck the previously selected radio button.\r\nManual activation provides finer control over the selection process, requiring an explicit action from the user to change the selected option."}),"\n",(0,o.jsx)(t.h3,{id:"auto-activation",children:"Auto Activation"}),"\n",(0,o.jsxs)(t.p,{children:["Automatic activation is the default state for a ",(0,o.jsx)(t.code,{children:"RadioButton"}),", and means that the button will be checked on whenever it gains focus for any reason. This means that\r\nnot only clicking, but auto-focus or tab navigation will also check the button."]}),"\n",(0,o.jsx)(t.admonition,{title:"Note",type:"tip",children:(0,o.jsxs)(t.p,{children:["The default activation value is ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"MANUAL"})})," activation."]})}),"\n",(0,o.jsx)(t.h2,{id:"switches",children:"Switches"}),"\n",(0,o.jsxs)(t.p,{children:["A ",(0,o.jsx)(t.code,{children:"RadioButton"})," can also be set to display as a switch provides which provides alternative visual representation for selecting options. Normally, radio buttons are circular or rounded in shape and indicate a single choice from a group of options."]}),"\n",(0,o.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.radiobuttondemos.RadioButtonSwitch",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/radiobuttondemos/RadioButtonSwitch.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/radiobuttonstyles/radiobutton_styles.css",height:"120px"}),"\n",(0,o.jsxs)(t.p,{children:["A ",(0,o.jsx)(t.code,{children:"RadioButton"})," can be transformed into a switch that resembles a toggle switch or slider using one of two methods:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"The Factory Method"}),": The RadioButton can be created using the following Factory methods:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"Switch(String text, boolean checked);\r\nSwitch(String text);\r\nSwitch();\n"})}),"\n",(0,o.jsxs)(t.p,{children:["These methods mirror a ",(0,o.jsx)(t.code,{children:"RadioButton"})," constructor, and will create the component with the switch property already toggled on."]}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Setter"}),": It is also possible to change an already existing ",(0,o.jsx)(t.code,{children:"RadioButton"})," into a switch by using the appropriate setter:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"myRadioButton.setSwitch(true);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When a ",(0,o.jsx)(t.code,{children:"RadioButton"})," is displayed as a switch, it typically appears as a oblong shape with an indicator that can be toggled on or off. This visual representation gives users a more intuitive and familiar interface, similar to physical switches commonly found in electronic devices."]}),"\n",(0,o.jsxs)(t.p,{children:["Setting a ",(0,o.jsx)(t.code,{children:"RadioButton"})," to display as a switch can improve user experience by providing a clear and straightforward way to select options. It can enhance the visual appeal and usability of forms, settings panels, or any other interface element that requires multiple choices."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["The behavior of the ",(0,o.jsx)(t.code,{children:"RadioButton"})," remains the same when being rendered as a Switch, meaning only one option can be selected at a time within a group. The switch-like appearance is a visual transformation which retains the functionality of a ",(0,o.jsx)(t.code,{children:"RadioButton"}),"."]})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,o.jsx)(t.h3,{id:"expanses",children:"Expanses"}),"\n",(0,o.jsxs)(t.p,{children:["There are five checkbox expanses that are supported which allow for quick styling without using CSS.\r\nExpanses are supported by use of the ",(0,o.jsx)(t.code,{children:"Expanse"})," enum class. Below are the expanses supported for the checkbox component: ",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(t.h3,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,o.jsx)(t.p,{children:"These are the various parts of the shadow DOM for the component, which will be required when styling via CSS is desired."}),"\n",(0,o.jsx)(s.Z,{tag:n(7099).EU,table:"parts"}),"\n",(0,o.jsx)(t.h3,{id:"css-properties",children:"CSS Properties"}),"\n",(0,o.jsx)(t.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,o.jsx)(s.Z,{tag:n(7099).EU,table:"properties"}),"\n",(0,o.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected Attributes"}),"\n",(0,o.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,o.jsx)(s.Z,{tag:n(7099).EU,table:"reflects"}),"\n",(0,o.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,o.jsx)(s.Z,{tag:"dwc-radio",table:"dependencies"}),"\n",(0,o.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,o.jsx)(t.p,{children:"To ensure an optimal user experience when using the RadioButton component, consider the following best practices:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Clearly Label Options"}),": Provide clear and concise text for each ",(0,o.jsx)(t.code,{children:"RadioButton"})," option to accurately describe the choice. Text should be easy to understand and distinguish from one another."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Group Radio buttons"}),": Group related Radio buttons together to indicate their association. This helps users understand that only one option can be selected within a specific group. This can be done effectively using the ",(0,o.jsx)(t.a,{href:"/docs/components/radiobuttongroup",children:(0,o.jsx)(t.code,{children:"RadioButtonGroup"})})," component."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Provide Default Selection"}),": If applicable, consider providing a default selection for Radio buttons to guide users when they first encounter the options. The default selection should align with the most common or preferred choice."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"dependencies-1",children:"Dependencies"}),"\n",(0,o.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,o.jsx)(s.Z,{tag:"dwc-drawer",table:"dependencies"})]})}function b(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},6031:(e,t,n)=>{var o=n(4836);t.Z=void 0;var i=o(n(4938)),a=n(5893),s=(0,i.default)((0,a.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=s},2610:(e,t,n)=>{var o=n(4836);t.Z=void 0;var i=o(n(4938)),a=n(5893),s=(0,i.default)((0,a.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=s},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var o=n(6010);const i={tabItem:"tabItem_Ymn6"};var a=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var o=n(7294),i=n(6010),a=n(2466),s=n(6550),r=n(469),c=n(1980),l=n(7392),d=n(12);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:i}}=e;return{value:t,label:n,attributes:o,default:i}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[s,c]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[l,u]=m({queryString:n,groupId:i}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,d.Nk)(n);return[i,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),v=(()=>{const e=l??b;return p({value:e,tabValues:a})?e:null})();(0,r.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(5893);function x(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),i=r[n].value;i!==o&&(l(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function A(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...e,...t}),(0,f.jsx)(w,{...e,...t})]})}function j(e){const t=(0,g.Z)();return(0,f.jsx)(A,{...e,children:u(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(7294),i=n(917),a=n(5697),s=n.n(a),r=n(4866),c=n(5162),l=n(4673),d=n(1750);const u=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",p="data:image/png;base64,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";var m=n(2949),b=n(2610),g=n(5944);function v(e){let{collapse:t,setCollapse:n}=e;v.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const o=i.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,a=i.iv`
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
  `,r=i.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,g.tZ)("div",{css:o,children:(0,g.tZ)("button",{css:a,onClick:()=>{n(!t)},children:t?(0,g.tZ)("img",{alt:"collapse_button",css:r,src:u,className:"icon-tabler-arrow-bar-up"}):(0,g.tZ)("img",{css:r,src:h,className:"icon-tabler-arrow-bar-down"})})})}function f(e){let{url:t}=e;const n=i.iv`
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
  `;return(0,g.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,g.tZ)("img",{css:o,src:p})})}function x(e){let{path:t,javaC:n,javaE:a,urls:u,cssURL:h,javaHighlight:p,height:w,frame:A,tabs:j}=e;x.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[y,B]=(0,o.useState)(""),[S,Z]=(0,o.useState)(""),[k,D]=(0,o.useState)({}),[R,C]=(0,o.useState)(""),[E,T]=(0,o.useState)(!(!n||!a)),[L,M]=(0,o.useState)(!1),[N,O]=(0,o.useState)({}),[z,H]=(0,o.useState)(!1),[V,X]=(0,o.useState)(0),[F,G]=(0,o.useState)(0),[P,J]=(0,o.useState)(25),[Y,q]=(0,o.useState)(25),[I,U]=(0,o.useState)(0),[W,K]=(0,o.useState)(!1),Q=(0,o.useRef)(null),_=(0,o.useRef)(null);function $(e,t,n){return(0,g.tZ)(d.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,o.useEffect)((()=>{a&&fetch(a).then((e=>e.text())).then((e=>{Z(e);const t=new URL(a).pathname.split("/"),n=t[t.length-1];O((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{B(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{C(e);const t=new URL(h).pathname.split("/"),n=t[t.length-1];O((e=>({...e,cssFile:n})))})),u&&u.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),o=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){D((n=>({...n,[e]:{fileName:e,code:t}})))}(o,e)}))})),U(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{H(!1)},te=e=>{if(z){const t=e.clientX-V;F+t>I/3&&(Q.current.style.width=`${F+t}px`,_.current.style.right=(P-t<25?25:P-t)+"px",q(P-t<25?25:P-t))}},ne=i.iv`
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
    height: ${w||"100%"};
    pointer-events: ${z?"none":"auto"};
  `,ae=i.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${L&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,se=i.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,re=i.iv`
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
  `,ce=i.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,le=i.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,g.BX)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=A?(0,g.BX)("div",{onMouseEnter:()=>{M(!0)},onMouseLeave:()=>M(!1),css:oe,children:[(0,g.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.I)().colorMode,css:ie,ref:Q,onMouseMove:te}),(0,g.tZ)("div",{css:ae,ref:_,children:(0,g.tZ)(f,{url:t})}),(0,g.tZ)("div",{css:se,onMouseDown:e=>{e.preventDefault(),H(!0),X(e.clientX),G(Q.current?Q.current.offsetWidth:0),J(Y)},children:(0,g.tZ)(b.Z,{})})]}):null,(0,g.BX)(l.Z,{css:re,summary:(0,g.tZ)("summary",{onClick:()=>K(!W),children:W?"Hide Code":"Show Code"}),children:[n&&a?(0,g.tZ)(v,{collapse:E,setCollapse:T}):null,h?(0,g.BX)(r.Z,{css:ce,children:[(0,g.tZ)(c.Z,{value:j?j[0]:"Java",label:j?j[0]:N.javaFile,default:!0,children:(0,g.tZ)(d.Z,{css:le,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:E?y:S})}),Object.keys(k).map(((e,t)=>(0,g.tZ)(c.Z,{value:e,label:e,children:$(k[e],le,p)},"tab"+t))),(0,g.tZ)(c.Z,{value:j?j[1]:"CSS",label:j?j[1]:N.cssFile,children:(0,g.tZ)(d.Z,{css:le,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:R})})]}):(0,g.BX)(r.Z,{css:ce,children:[(0,g.tZ)(c.Z,{value:j?j[0]:"Java",label:j?j[0]:N.javaFile,default:!0,children:(0,g.tZ)(d.Z,{css:le,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:E?y:S})}),Object.keys(k).map(((e,t)=>(0,g.tZ)(c.Z,{value:e,label:e,children:$(k[e],le,p)},"tab"+t)))]})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(7294),i=n(917),a=n(8230),s=n(4387),r=n(6031);var c=n(5944);function l(e){let{type:t,location:n,top:l,children:d,code:u,suffix:h}=e;const[p,m]=(0,o.useState)("");(0,o.useEffect)((()=>{h||(h=""),m("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+n+".html"+h)}),[]);const b=i.iv`
    display: inline;

    ${l&&i.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,g=i.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,c.BX)(c.HY,{children:["true"===l&&(0,c.tZ)("div",{css:b,children:(0,c.tZ)(a.Z,{title:"JavaDoc",arrow:!0,children:(0,c.tZ)(s.Z,{css:g,label:"Java API",component:"a",href:p,icon:(0,c.tZ)(r.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==l&&!u&&(0,c.tZ)("div",{css:b,children:(0,c.tZ)("a",{href:p,target:"_blank",children:d})}),"true"!==l&&u&&(0,c.tZ)("div",{css:b,children:(0,c.tZ)("code",{children:(0,c.tZ)("a",{href:p,target:"_blank",children:d})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var o=n(8397),i=n(5893);function a(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Z,{...e})})}},7099:e=>{e.exports=JSON.parse('{"LN":"dwc-app-layout","zx":"dwc-button","XZ":"dwc-checkbox","gN":"dwc-field","iR":"dwc-slider","wb":"dwc-listbox","Z":"dwc-choicebox","Ct":"dwc-combobox","C3":"dwc-navigator","ko":"dwc-progressbar","EU":"dwc-radio","ib":"dwc-tabbed-pane","dy":"dwc-drawer","Vq":"dwc-dialog","JO":"dwc-icon","qX":"dwc-splitter"}')}}]);
"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1732],{3333:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=o(4848),i=o(8453);const s={title:"RadioButton",slug:"radiobutton"},a=void 0,r={id:"components/radio-button",title:"RadioButton",description:"The RadioButton class creates an object that can be selected or deselected, and which displays its state to the user. By convention, only one radio button in a group can be selected at a time. Radio buttons are commonly used when mutually exclusive options are available, allowing the user to choose a single option from a set of choices.",source:"@site/docs/components/radio-button.md",sourceDirName:"components",slug:"/components/radiobutton",permalink:"/docs/components/radiobutton",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/radio-button.md",tags:[],version:"current",frontMatter:{title:"RadioButton",slug:"radiobutton"},sidebar:"documentationSidebar",previous:{title:"ProgressBar",permalink:"/docs/components/progressbar"},next:{title:"RadioButtonGroup",permalink:"/docs/components/radiobuttongroup"}},c={},d=[{value:"Usages",id:"usages",level:2},{value:"Text and Positioning",id:"text-and-positioning",level:2},{value:"Activation",id:"activation",level:2},{value:"Manual Activation",id:"manual-activation",level:3},{value:"Auto Activation",id:"auto-activation",level:3},{value:"Switches",id:"switches",level:2},{value:"Styling",id:"styling",level:2},{value:"Expanses",id:"expanses",level:3},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Dependencies",id:"dependencies-1",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{ComponentDemo:s,DocChip:a,JavadocLink:r,TableBuilder:c}=t;return s||p("ComponentDemo",!0),a||p("DocChip",!0),r||p("JavadocLink",!0),c||p("TableBuilder",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,n.jsx)(a,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-radio",clickable:!1,iconName:"code"}),"\n",(0,n.jsx)(r,{type:"foundation",location:"com/webforj/component/optioninput/RadioButton",top:"true"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"RadioButton"})," class creates an object that can be selected or deselected, and which displays its state to the user. By convention, only one radio button in a group can be selected at a time. Radio buttons are commonly used when mutually exclusive options are available, allowing the user to choose a single option from a set of choices."]}),"\n",(0,n.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/radiobuttongroup?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/radiobutton/RadioButtonGroupView.java",height:"200px"}),"\n",(0,n.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"RadioButton"})," is best used in scenarios where users need to make a single selection from a predefined set of options. Here are some examples of when to use the ",(0,n.jsx)(t.code,{children:"RadioButton"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Survey or Questionnaires"}),": Radio buttons are commonly used in surveys or questionnaires where users need to select a single response from a list of options."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Preference Settings"}),": Applications that involve preference or settings panels often use Radio buttons to allow users to choose a single option from a set of mutually exclusive choices."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Filtering or Sorting"}),": A ",(0,n.jsx)(t.code,{children:"RadioButton"})," can be used in applications that require users to select a single filter or sorting option, such as sorting a list of items by different criteria."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"text-and-positioning",children:"Text and Positioning"}),"\n",(0,n.jsxs)(t.p,{children:["Radio buttons can utilize the ",(0,n.jsx)(t.code,{children:"setText(String text)"})," method, which will be positioned near the radio button according to the built-in ",(0,n.jsx)(t.code,{children:"Position"}),".\r\nRadio buttons have built-in functionality to set text to be displayed either to the right or left of the component. By default, the text will be displayed to the right of the component. Positioning of the horizontal text is supported by use of the ",(0,n.jsx)(t.code,{children:"HorizontalAlignment"})," enum class. Show below are the two settings: ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/radiobuttontext?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/radiobutton/RadioButtonTextView.java",height:"120px"}),"\n",(0,n.jsx)(t.h2,{id:"activation",children:"Activation"}),"\n",(0,n.jsxs)(t.p,{children:["Radio buttons can be controlled using two types of activation: manual activation and auto activation. These dictate when a ",(0,n.jsx)(t.code,{children:"RadioButton"})," will change its state."]}),"\n",(0,n.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/radiobuttonactivation?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/radiobutton/RadioButtonActivationView.java",height:"175px"}),"\n",(0,n.jsx)(t.h3,{id:"manual-activation",children:"Manual Activation"}),"\n",(0,n.jsx)(t.p,{children:"When a radio button is set to manual activation, it means that it will not be automatically checked when it gains focus.\r\nManual activation allows the user to navigate through the radio button options using the keyboard or other input methods without immediately changing the selected option."}),"\n",(0,n.jsx)(t.p,{children:"If the radio button is part of a group, selecting a different radio button within the group will automatically uncheck the previously selected radio button.\r\nManual activation provides finer control over the selection process, requiring an explicit action from the user to change the selected option."}),"\n",(0,n.jsx)(t.h3,{id:"auto-activation",children:"Auto Activation"}),"\n",(0,n.jsxs)(t.p,{children:["Automatic activation is the default state for a ",(0,n.jsx)(t.code,{children:"RadioButton"}),", and means that the button will be checked on whenever it gains focus for any reason. This means that\r\nnot only clicking, but auto-focus or tab navigation will also check the button."]}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"tip",children:(0,n.jsxs)(t.p,{children:["The default activation value is ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"MANUAL"})})," activation."]})}),"\n",(0,n.jsx)(t.h2,{id:"switches",children:"Switches"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"RadioButton"})," can also be set to display as a switch provides which provides alternative visual representation for selecting options. Normally, radio buttons are circular or rounded in shape and indicate a single choice from a group of options."]}),"\n",(0,n.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/radiobuttonswitch?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/radiobutton/RadioButtonSwitchView.java",height:"120px"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"RadioButton"})," can be transformed into a switch that resembles a toggle switch or slider using one of two methods:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"The Factory Method"}),": The RadioButton can be created using the following Factory methods:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"Switch(String text, boolean checked);\r\nSwitch(String text);\r\nSwitch();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["These methods mirror a ",(0,n.jsx)(t.code,{children:"RadioButton"})," constructor, and will create the component with the switch property already toggled on."]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Setter"}),": It is also possible to change an already existing ",(0,n.jsx)(t.code,{children:"RadioButton"})," into a switch by using the appropriate setter:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"myRadioButton.setSwitch(true);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When a ",(0,n.jsx)(t.code,{children:"RadioButton"})," is displayed as a switch, it typically appears as a oblong shape with an indicator that can be toggled on or off. This visual representation gives users a more intuitive and familiar interface, similar to physical switches commonly found in electronic devices."]}),"\n",(0,n.jsxs)(t.p,{children:["Setting a ",(0,n.jsx)(t.code,{children:"RadioButton"})," to display as a switch can improve user experience by providing a clear and straightforward way to select options. It can enhance the visual appeal and usability of forms, settings panels, or any other interface element that requires multiple choices."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["The behavior of the ",(0,n.jsx)(t.code,{children:"RadioButton"})," remains the same when being rendered as a Switch, meaning only one option can be selected at a time within a group. The switch-like appearance is a visual transformation which retains the functionality of a ",(0,n.jsx)(t.code,{children:"RadioButton"}),"."]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,n.jsx)(t.h3,{id:"expanses",children:"Expanses"}),"\n",(0,n.jsxs)(t.p,{children:["There are five checkbox expanses that are supported which allow for quick styling without using CSS.\r\nExpanses are supported by use of the ",(0,n.jsx)(t.code,{children:"Expanse"})," enum class. Below are the expanses supported for the checkbox component: ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(t.h3,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,n.jsx)(t.p,{children:"These are the various parts of the shadow DOM for the component, which will be required when styling via CSS is desired."}),"\n",(0,n.jsx)(c,{tag:o(7813).a,table:"parts"}),"\n",(0,n.jsx)(t.h3,{id:"css-properties",children:"CSS Properties"}),"\n",(0,n.jsx)(t.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,n.jsx)(c,{tag:o(7813).a,table:"properties"}),"\n",(0,n.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected Attributes"}),"\n",(0,n.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,n.jsx)(c,{tag:o(7813).a,table:"reflects"}),"\n",(0,n.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,n.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,n.jsx)(c,{tag:"dwc-radio",table:"dependencies"}),"\n",(0,n.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsx)(t.p,{children:"To ensure an optimal user experience when using the RadioButton component, consider the following best practices:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Clearly Label Options"}),": Provide clear and concise text for each ",(0,n.jsx)(t.code,{children:"RadioButton"})," option to accurately describe the choice. Text should be easy to understand and distinguish from one another."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Group Radio buttons"}),": Group related Radio buttons together to indicate their association. This helps users understand that only one option can be selected within a specific group. This can be done effectively using the ",(0,n.jsx)(t.a,{href:"/docs/components/radiobuttongroup",children:(0,n.jsx)(t.code,{children:"RadioButtonGroup"})})," component."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Provide Default Selection"}),": If applicable, consider providing a default selection for Radio buttons to guide users when they first encounter the options. The default selection should align with the most common or preferred choice."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"dependencies-1",children:"Dependencies"}),"\n",(0,n.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,n.jsx)(c,{tag:"dwc-drawer",table:"dependencies"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(6540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}},7813:e=>{e.exports=JSON.parse('{"e7":"dwc-app-layout","$n":"dwc-button","Sc":"dwc-checkbox","D0":"dwc-field","Ap":"dwc-slider","qF":"dwc-listbox","tX":"dwc-choicebox","a3":"dwc-combobox","mD":"dwc-navigator","z2":"dwc-progressbar","a":"dwc-radio","TN":"dwc-tabbed-pane","_s":"dwc-drawer","lG":"dwc-dialog","In":"dwc-icon","O3":"dwc-splitter","az":"dwc-login"}')}}]);
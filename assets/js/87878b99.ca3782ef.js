"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9047],{4679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var s=n(5893),o=n(1151),i=(n(4866),n(5162),n(6957)),r=n(7796),a=n(3273),c=n(2665);const l={sidebar_position:10,title:"CheckBox"},d=void 0,h={id:"components/checkbox",title:"CheckBox",description:"The CheckBox class creates a component that can be selected or deselected, and which displays its state to the user. When clicked, a check mark appears inside the box, to indicate an affirmative choice (on). When clicked again, the check mark disappears, indicating a negative choice (off).",source:"@site/docs/components/checkbox.md",sourceDirName:"components",slug:"/components/checkbox",permalink:"/docs/components/checkbox",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/checkbox.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"CheckBox"},sidebar:"documentationSidebar",previous:{title:"Button",permalink:"/docs/components/button"},next:{title:"Dialog",permalink:"/docs/components/dialog"}},u={},p=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Text and Positioning",id:"text-and-positioning",level:2},{value:"Indeterminism",id:"indeterminism",level:2},{value:"Events",id:"events",level:2},{value:"Styling",id:"styling",level:2},{value:"Expanses",id:"expanses",level:3},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Best Practices",id:"best-practices",level:2}];function m(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,s.jsx)(c.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"bbj-checkbox",href:"https://basishub.github.io/basis-next/#/web-components/bbj-checkbox",clickable:!1,iconName:"code"}),"\n",(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/optioninput/CheckBox",top:"true"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CheckBox"})," class creates a component that can be selected or deselected, and which displays its state to the user. When clicked, a check mark appears inside the box, to indicate an affirmative choice (on). When clicked again, the check mark disappears, indicating a negative choice (off)."]}),"\n",(0,s.jsx)(t.p,{children:"By providing a clear and straightforward visual indication of selection status, checkboxes enhance user interaction and decision-making, making them an essential element in modern user interfaces."}),"\n",(0,s.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CheckBox"})," is best used in scenarios where users need to make multiple selections from a list of options. Here are some examples of when to use the ",(0,s.jsx)(t.code,{children:"CheckBox"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Task or Feature Selection"}),": Checkboxes are commonly used when users need to select multiple tasks or features to perform certain actions or configurations."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Preference Settings"}),": Applications that involve preference or settings panels often use Checkboxes to allow users to choose multiple options from a set of choices. This is best for options which are not mutually exclusive. For instance:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Enabling or disabling notifications"}),"\n",(0,s.jsx)(t.li,{children:"Choosing a dark mode or light mode theme"}),"\n",(0,s.jsx)(t.li,{children:"Selecting email notification preferences"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Filtering or Sorting"}),": A ",(0,s.jsx)(t.code,{children:"CheckBox"})," can be used in applications that require users to select multiple filters or categories, such as filtering search results or selecting multiple items for further actions."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Form Inputs"}),": Checkboxes are commonly used in forms to allow users to select multiple options or make binary choices. For example:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Subscribe to a newsletter"}),"\n",(0,s.jsx)(t.li,{children:"Agree to terms and conditions"}),"\n",(0,s.jsx)(t.li,{children:"Select items for purchase or booking"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CheckBox"})," class has three constructors:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/checkbox/CheckBox",code:"true",suffix:"#<init>()",children:"Checkbox()"}),": Creates an empty ",(0,s.jsx)("code",{children:"CheckBox"})," in the unchecked state."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/checkbox/CheckBox",code:"true",suffix:"#<init>(java.lang.String)",children:"Checkbox(String text)"}),": Creates a ",(0,s.jsx)("code",{children:"CheckBox"})," with an attached label in the unchecked state."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/checkbox/CheckBox",code:"true",suffix:"#<init>(java.lang.String,boolean)",children:"Checkbox(String text boolean checked)"}),": Creates a ",(0,s.jsx)("code",{children:"CheckBox"})," with an attached label in either the checked or unchecked state, based on the boolean passed (",(0,s.jsx)("code",{children:"true"})," for checked, ",(0,s.jsx)("code",{children:"false"})," for unchecked)."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Here is an example of how to create a ",(0,s.jsx)(t.code,{children:"CheckBox"})," object:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'CheckBox enabled = new CheckBox("Enable Option");\n'})}),"\n",(0,s.jsx)(t.h2,{id:"text-and-positioning",children:"Text and Positioning"}),"\n",(0,s.jsxs)(t.p,{children:["Check boxes can utilize the ",(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/AbstractOptionInput",code:"true",suffix:"#setText(java.lang.String)",children:"setText(String text)"})," method, which will be positioned near the check box according to the built-in ",(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/TextPosition",code:"true",suffix:"",children:"Position"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Checkboxes have built-in functionality to set text to be displayed either to the right or left of the box. By default, the text will be displayed to the right of the component. Positioning of the text is supported by use of the  ",(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/TextPosition",code:"true",suffix:"",children:"Position"})," enum. Show below are the two settings: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(i.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.checkboxdemos.CheckboxHorizontalText",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/checkboxdemos/CheckboxHorizontalText.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/checkbox/Horizontal.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/checkboxstyles/text_styles.css",height:"200px"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h2,{id:"indeterminism",children:"Indeterminism"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CheckBox"})," component supports indeterminism, which is a UI pattern commonly used in forms and lists to indicate that a group of checkboxes has a mixture of checked and unchecked states. This state is represented by a third visual state, typically displayed as a filled square or a dash inside the checkbox. There are a few common use cases associated with indeterminism:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Selecting multiple items"}),": Indeterminism is useful when users need to select multiple items from a list or a set of options. It allows users to indicate that they want to select some, but not all, of the available choices."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Hierarchical data"}),": Indeterminism can be employed in scenarios where there is a hierarchical relationship between CheckBoxes. For example, when selecting categories and subcategories, indeterminism can represent that some subcategories are selected while others are not, and the parent component is in the indeterminate state."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.checkboxdemos.CheckboxIndeterminate",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/checkboxdemos/CheckboxIndeterminate.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/checkbox/Indeterminate.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/checkboxstyles/text_styles.css",height:"150px"}),"\n",(0,s.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CheckBox"})," class provides methods to add and remove event listeners for the following events:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Events"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/event/BlurEvent",code:"true",children:"BlurEvent"})}),(0,s.jsx)(t.td,{children:"An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/event/FocusEvent",code:"true",children:"FocusEvent"})}),(0,s.jsx)(t.td,{children:"An event that is triggered when an element gains focus, opposite of a blur event. It occurs when the user interacts with an element, typically by clicking inside an input field or navigating to it using the keyboard's tab key, causing the element to become active and ready to receive user input."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/event/CheckEvent",code:"true",children:"CheckEvent"})}),(0,s.jsx)(t.td,{children:"An event that is triggered when the state of a component changes and becomes checked. It occurs when the user interacts with a checkbox element by clicking or tapping on it, causing the checkbox to transition from an unchecked state to a checked state."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/event/UncheckEvent",code:"true",children:"UncheckEvent"})}),(0,s.jsx)(t.td,{children:"An event that is triggered when the state of a component changes and becomes unchecked."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/event/ToggleEvent",code:"true",children:"ToggleEvent"})}),(0,s.jsx)(t.td,{children:'A ToggleEvent fires a CheckBox or a similar UI element changes its state between "on" and "off" or "active" and "inactive."'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/event/MouseEnterEvent",code:"true",children:"MouseEnterEvent"})}),(0,s.jsx)(t.td,{children:"An event that is triggered when the mouse cursor enters the boundaries of a component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/event/MouseExitEvent",code:"true",children:"MouseExitEvent"})}),(0,s.jsx)(t.td,{children:"An event that is triggered when the mouse cursor exits the boundaries of a component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/event/RightMouseDownEvent",code:"true",children:"RightMouseDownEvent"})}),(0,s.jsx)(t.td,{children:"An event that is triggered when the user presses the right mouse button while the cursor is over a component."})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"To add an event listener, use the appropriate method:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"myCheckBox.addCheckListener( e -> {\r\n  //Executed when the event fires\r\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,s.jsx)(t.code,{children:"on"})," prefix followed by the event, such as:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"myCheckBox.onCheck( e -> {\r\n    //Executed when the event fires\r\n});\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Using the event payload that comes with various events to attain information reduces the number of round trips made when instead querying the component for the required information."})}),"\n",(0,s.jsx)(t.p,{children:"To remove an event listener, use the appropriate method:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"myCheckBox.removeCheckListener(listener);\n"})}),"\n",(0,s.jsx)(i.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.checkboxdemos.CheckboxEventDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/checkboxdemos/CheckboxEventDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/checkbox/Event.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/checkboxstyles/text_styles.css",height:"100px"}),"\n",(0,s.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,s.jsx)(t.h3,{id:"expanses",children:"Expanses"}),"\n",(0,s.jsxs)(t.p,{children:["The following ",(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/Expanse",children:" Expanses values "})," allow for quick styling without using CSS.\r\nExpanses are supported by use of the ",(0,s.jsx)(t.code,{children:"Expanse"})," enum class. Below are the expanses supported for the checkbox component: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(i.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.checkboxdemos.CheckboxExpanseDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/checkboxdemos/CheckboxExpanseDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/checkbox/Expanse.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/checkboxstyles/expanse_styles.css",javaHighlight:"{17,21,25,29,33}"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,s.jsx)(t.p,{children:"These are the various parts of the shadow DOM for the component, which will be required when styling via CSS is desired."}),"\n",(0,s.jsx)(r.Z,{tag:n(5731).XZ,table:"parts"}),"\n",(0,s.jsx)(t.h3,{id:"css-properties",children:"CSS Properties"}),"\n",(0,s.jsx)(t.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,s.jsx)(r.Z,{tag:n(5731).XZ,table:"properties"}),"\n",(0,s.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected Attributes"}),"\n",(0,s.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,s.jsx)(r.Z,{tag:n(5731).XZ,table:"reflects"}),"\n",(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,s.jsx)(r.Z,{tag:"bbj-checkbox",table:"dependencies"}),"\n",(0,s.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(t.p,{children:["To ensure an optimal user experience when using the ",(0,s.jsx)(t.code,{children:"Checkbox"})," component, consider the following best practices:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Clearly Label Options"}),": Provide clear and concise labels for each ",(0,s.jsx)(t.code,{children:"CheckBox"})," option to accurately describe the choice. Labels should be easy to understand and distinguish from one another."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Group CheckBoxes"}),": Group related Checkboxes together to indicate their association. This helps users understand that multiple options can be selected within a specific group."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Provide Default Selection"}),": If applicable, consider providing a default selection for CheckBoxes to guide users when they first encounter the options. The default selection should align with the most common or preferred choice."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Indeterminism"}),": If a parent ",(0,s.jsx)(t.code,{children:"CheckBox"})," component has multiple components belonging to it in a way in which some can be checked on and others checked off, use the indeterminate property to show that not all ",(0,s.jsx)(t.code,{children:"CheckBox"})," components are checked or unchecked."]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},6031:(e,t,n)=>{var s=n(4836);t.Z=void 0;var o=s(n(4938)),i=n(5893),r=(0,o.default)((0,i.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=r},2610:(e,t,n)=>{var s=n(4836);t.Z=void 0;var o=s(n(4938)),i=n(5893),r=(0,o.default)((0,i.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=r},5162:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(6010);const o={tabItem:"tabItem_Ymn6"};var i=n(5893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,r),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var s=n(7294),o=n(6010),i=n(2466),r=n(6550),a=n(469),c=n(1980),l=n(7392),d=n(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:o}}=e;return{value:t,label:n,attributes:s,default:o}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,i=u(e),[r,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[l,h]=m({queryString:n,groupId:o}),[x,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,d.Nk)(n);return[o,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),g=(()=>{const e=l??x;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function f(e){let{className:t,block:n,selectedValue:s,selectValue:r,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),o=a[n].value;o!==s&&(l(t),r(o))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function A(e){const t=x(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,v.jsx)(A,{...e,children:h(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>b});var s=n(7294),o=n(917),i=n(4866),r=n(5162),a=n(4673),c=n(1750);const l="data:image/png;base64,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",d=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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";var u=n(2610),p=n(5944);function m(e){let{collapse:t,setCollapse:n}=e;const s=o.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
    `,i=o.iv`
    /* position: absolute;
    right: 0; */
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
  `,r=o.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,p.tZ)("div",{css:s,children:(0,p.tZ)("button",{css:i,onClick:()=>{n(!t)},children:t?(0,p.tZ)("img",{css:r,src:d,className:"icon-tabler-arrow-bar-up"}):(0,p.tZ)("img",{css:r,src:l,className:"icon-tabler-arrow-bar-down"})})})}function x(e){let{url:t}=e;const n=o.iv`
      position: relative;
      cursor: pointer;
      z-index: 10;
      height: 35px;
      width: 35px;
      border: none;
      background-color: none;
      justify-self: flex-end;
      margin-top: -5px;
      margin-bottom: -20px;
      background-color: transparent;

      
    `,s=o.iv`
      /* filter: invert(var(--inversion-percentage)); */ //UNCOMMENT WHEN DMEOS CHANGE COLOR
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,p.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,p.tZ)("img",{css:s,src:h})})}function b(e){let{path:t,javaC:n,javaE:l,cssURL:d,javaHighlight:h,height:b,frame:g,tabs:v}=e;const[f,j]=(0,s.useState)(""),[A,w]=(0,s.useState)(""),[k,y]=(0,s.useState)(""),[C,B]=(0,s.useState)(!(!n||!l)),[Z,D]=(0,s.useState)(!1),[S,E]=(0,s.useState)({}),[T,L]=(0,s.useState)(!1),[M,N]=(0,s.useState)(0),[O,H]=(0,s.useState)(0),[z,J]=(0,s.useState)(25),[F,V]=(0,s.useState)(25),[X,I]=(0,s.useState)(0),[P,G]=(0,s.useState)(!1),Y=(0,s.useRef)(null),q=(0,s.useRef)(null);(0,s.useEffect)((()=>{l&&fetch(l).then((e=>e.text())).then((e=>{w(e);const t=new URL(l).pathname.split("/"),n=t[t.length-1];E((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{j(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{y(e);const t=new URL(d).pathname.split("/"),n=t[t.length-1];E((e=>({...e,cssFile:n})))})),I(Y.current?Y.current.offsetWidth:0),console.log(X)}),[]);const R=()=>{L(!1),console.log("Stop Resizing")},U=e=>{if(T){const t=e.clientX-M;O+t>X/3&&(Y.current.style.width=`${O+t}px`,q.current.style.right=(z-t<25?25:z-t)+"px",V(z-t<25?25:z-t))}},W=o.iv`
		display: flex;
    flex-direction: column;
		width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==g?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
    `,K=o.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,Q=o.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${b||"100%"};
    pointer-events: ${T?"none":"auto"};
  `,_=o.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${Z&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,$=o.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ee=o.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==g?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div{
      /* border: none; */
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type{
      border: ${"hidden"==g?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
    }

    summary{
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before{
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary)
      }
    }
    .margin-top--md{
      margin-top: 0px !important;
    }
    ul{
      margin: -4px 0px!important;
    }
    `,te=o.iv`
    /* :first-child{
      margin-left: 1em;
    } */
    li[aria-selected="true"]{
      border-color: var(--ifm-color-primary);
    }
    
    .tabs__item{
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ne=o.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,p.BX)("div",{css:W,onMouseUp:R,onMouseLeave:R,onMouseMove:U,children:["hidden"!=g?(0,p.BX)("div",{onMouseEnter:()=>{D(!0)},onMouseLeave:()=>D(!1),css:K,children:[(0,p.tZ)("iframe",{onMouseUp:R,loading:"lazy",src:t,css:Q,ref:Y,onMouseMove:U}),(0,p.tZ)("div",{css:_,ref:q,children:(0,p.tZ)(x,{url:t})}),(0,p.tZ)("div",{css:$,onMouseDown:e=>{e.preventDefault(),L(!0),N(e.clientX),H(Y.current?Y.current.offsetWidth:0),J(F),console.log(q.current.right),console.log("Start Resizing")},children:(0,p.tZ)(u.Z,{})})]}):null,(0,p.BX)(a.Z,{css:ee,summary:(0,p.tZ)("summary",{onClick:()=>G(!P),children:P?"Hide Code":"Show Code"}),children:[n&&l?(0,p.tZ)(m,{collapse:C,setCollapse:B}):null,d?(0,p.BX)(i.Z,{css:te,children:[(0,p.tZ)(r.Z,{value:v?v[0]:"Java",label:v?v[0]:S.javaFile,default:!0,children:(0,p.tZ)(c.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:C?f:A})}),(0,p.tZ)(r.Z,{value:v?v[1]:"CSS",label:v?v[1]:S.cssFile,children:(0,p.tZ)(c.Z,{css:ne,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:k})})]}):(0,p.tZ)(i.Z,{css:te,children:(0,p.tZ)(r.Z,{value:v?v[0]:"Java",label:v?v[0]:S.javaFile,default:!0,children:(0,p.tZ)(c.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:C?f:A})})})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(7294),o=n(917),i=n(8230),r=n(4387),a=n(6031);var c=n(5944);function l(e){let{type:t,location:n,top:l,children:d,code:h,suffix:u}=e;const[p,m]=(0,s.useState)("");(0,s.useEffect)((()=>{u||(u=""),m("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+n+".html"+u)}),[]);const x=o.iv`
    display: inline;

    ${l&&o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=o.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,c.BX)(c.HY,{children:["true"===l&&(0,c.tZ)("div",{css:x,children:(0,c.tZ)(i.Z,{title:"JavaDoc",arrow:!0,children:(0,c.tZ)(r.Z,{css:b,label:"Java API",component:"a",href:p,icon:(0,c.tZ)(a.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==l&&!h&&(0,c.tZ)("div",{css:x,children:(0,c.tZ)("a",{href:p,target:"_blank",children:d})}),"true"!==l&&h&&(0,c.tZ)("div",{css:x,children:(0,c.tZ)("code",{children:(0,c.tZ)("a",{href:p,target:"_blank",children:d})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var s=n(8397),o=n(5893);function i(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.Z,{...e})})}},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog","JO":"bbj-icon"}')}}]);
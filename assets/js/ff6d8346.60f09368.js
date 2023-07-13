"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2529],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),o=n(7294),i=n(6010),r=n(2466),s=n(6775),l=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=m({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=l??d;return h({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,i]),tabValues:i}}var g=n(2389);const v="tabList__CuJ",k="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(d(t),l(a))},h=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:p},r,{className:(0,i.Z)("tabs__item",k,null==r?void 0:r.className,{"tabs__item--active":s===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function A(e){const t=b(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",v)},o.createElement(f,(0,a.Z)({},e,t)),o.createElement(w,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return o.createElement(A,(0,a.Z)({key:String(t)},e))}},2395:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),o=n(2863),i=n(4866),r=n(5162),s=n(4673),l=n(4633);const c=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function u(e){let{collapse:t,setCollapse:n}=e;const a=o.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,i=o.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    margin-right: 5px;
    margin-bottom: -50px;
    background-color: transparent;
  
  `,r=o.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,o.tZ)("div",{css:a},(0,o.tZ)("button",{css:i,onClick:()=>{n(!t)}},t?(0,o.tZ)("img",{css:r,src:c,className:"icon-tabler-arrow-bar-up"}):(0,o.tZ)("img",{css:r,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function d(e){let{path:t,javaC:n,javaE:c,cssURL:d,javaHighlight:p,height:h,frame:m}=e;const[b,g]=(0,a.useState)(""),[v,k]=(0,a.useState)(""),[f,w]=(0,a.useState)(""),[A,y]=(0,a.useState)(!0),N=o.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==m?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,x=o.iv`
    min-height: 100px;
    height: 100%;
    height: ${h};
  `,E=o.iv`
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

  `;return c&&fetch(c).then((e=>e.text())).then((e=>{k(e)})),n&&fetch(n).then((e=>e.text())).then((e=>{g(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{w(e)})),(0,o.tZ)("div",{css:N},"hidden"!=m?(0,o.tZ)("iframe",{loading:"lazy",src:t,css:x}):null,(0,o.tZ)(s.Z,{css:E,summary:(0,o.tZ)("summary",null,"Show Code")},n&&c?(0,o.tZ)(u,{collapse:A,setCollapse:y}):null,d?(0,o.tZ)(i.Z,null,(0,o.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(l.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p},A?b:v)),(0,o.tZ)(r.Z,{value:"CSS",label:"CSS"},(0,o.tZ)(l.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},f))):(0,o.tZ)(i.Z,null,(0,o.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(l.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p},A?b:v)))))}},3273:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(2863);let i=null,r=null;const s={getLatestTag:async function(){return i&&r&&Date.now()-r<36e5?i:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return i=t[0].name,r=Date.now(),i}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function l(e){let{type:t,location:n}=e;const[i,r]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{const e=await s.getLatestTag();r("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html")}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const l=o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,c=o.iv`
    color: gray;
  `;return(0,o.tZ)("div",{css:l},(0,o.tZ)("p",{css:c},"API:\xa0"),(0,o.tZ)("b",null,(0,o.tZ)("a",{href:i,target:"_blank"},"Java")))}},7796:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function o(e){var t,n;const[o,i]=(0,a.useState)(null);if((0,a.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const n=t.components.find((t=>t.tag===e.tag));i(n)}))}),[]),!o)return a.createElement("div",null,"Loading...");const r=null==(t=o.docsTags)?void 0:t.filter((e=>"part"===e.name)),s=null==(n=o.styles)?void 0:n.map((e=>({name:e.name,description:e.docs})));return a.createElement(a.Fragment,null,a.createElement("h4",null,"Shadow Parts"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==r?void 0:r.map((e=>{const[t,n]=e.text.split(" - ");return a.createElement("tr",{key:e.id},a.createElement("td",null,t),a.createElement("td",null,n))})))),a.createElement("h4",null,"CSS Properties"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==s?void 0:s.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,e.name),a.createElement("td",null,e.description)))))))}},5187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),i=(n(2395),n(7796)),r=n(3273);const s={sidebar_position:100,title:"RadioButton"},l=void 0,c={unversionedId:"components/radio-button",id:"components/radio-button",title:"RadioButton",description:"The RadioButton class is a java class in org.dwcj.component.radiobutton package. n item that can be selected or deselected, and which displays its state to the user. By convention, only one radio button in a group can be selected at a time. Radio buttons are commonly used when mutually exclusive options are available, allowing the user to choose a single option from a set of choices.",source:"@site/docs/components/radio-button.md",sourceDirName:"components",slug:"/components/radio-button",permalink:"/docs/components/radio-button",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/radio-button.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"RadioButton"},sidebar:"tutorialSidebar",previous:{title:"ProgressBar",permalink:"/docs/components/progress-bar"},next:{title:"RadioButtonGroup",permalink:"/docs/components/radio-group"}},u={},d=[{value:"Constructors",id:"constructors",level:3},{value:"Text and Positioning",id:"text-and-positioning",level:3},{value:"Activation",id:"activation",level:3},{value:"Manual Activation",id:"manual-activation",level:4},{value:"Auto Activation",id:"auto-activation",level:4},{value:"Switches",id:"switches",level:3},{value:"Expanses",id:"expanses",level:3},{value:"Events",id:"events",level:3},{value:"Usages",id:"usages",level:3},{value:"Best Practices",id:"best-practices",level:3},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:3}],p={toc:d};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{type:"engine",location:"org/dwcj/component/radiobutton/RadioButton",mdxType:"JavadocLink"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," class is a java class in ",(0,o.kt)("inlineCode",{parentName:"p"},"org.dwcj.component.radiobutton")," package. n item that can be selected or deselected, and which displays its state to the user. By convention, only one radio button in a group can be selected at a time. Radio buttons are commonly used when mutually exclusive options are available, allowing the user to choose a single option from a set of choices."),(0,o.kt)("p",null,"Here is an example of how to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'RadioButton myRadioButton = new RadioButton("RadioButton Text");\n')),(0,o.kt)("h3",{id:"constructors"},"Constructors"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," class has three constructors:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton()"),": Creates an empty ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton")," in the unchecked state."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton(String)"),": Creates a ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton")," with an attached label in the unchecked state."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton(String, boolean)")," Creates a ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton")," with an attached label in either the checked or unchecked state, based on the boolean passed (",(0,o.kt)("inlineCode",{parentName:"li"},"true")," for checked, ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," for unchecked).")),(0,o.kt)("h3",{id:"text-and-positioning"},"Text and Positioning"),(0,o.kt)("p",null,"Radio buttons can utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"setText(String foo)")," method, which will be positioned near the radio button according to the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Position"),".\nDWCJ radio buttons have built-in functionality to set text to be displayed either to the right or left of the component. By default, the text will be displayed to the right of the component. Positioning of the horizontal text is supported by use of a built-in enum class. Show below are the two settings: ",(0,o.kt)("br",null)),(0,o.kt)("h3",{id:"activation"},"Activation"),(0,o.kt)("p",null,"Radio buttons can be controlled using two types of activation: manual activation and auto activation. These dictate when a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," will change its state."),(0,o.kt)("h4",{id:"manual-activation"},"Manual Activation"),(0,o.kt)("p",null,"When a radio button is set to manual activation, it means that it will not be automatically checked when it gains focus.\nManual activation allows the user to navigate through the radio button options using the keyboard or other input methods without immediately changing the selected option."),(0,o.kt)("p",null,"If the radio button is part of a group, selecting a different radio button within the group will automatically uncheck the previously selected radio button.\nManual activation provides finer control over the selection process, requiring an explicit action from the user to change the selected option."),(0,o.kt)("h4",{id:"auto-activation"},"Auto Activation"),(0,o.kt)("p",null,"Automatic activation is the default state for a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton"),", and means that the button will be checked on whenever it gains focus for any reason. This means that\nnot only clicking, but auto-focus or tab navigation will also check the button."),(0,o.kt)("h3",{id:"switches"},"Switches"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," can also be set to display as a switch provides which provides alternative visual representation for selecting options. Normally, radio buttons are circular or rounded in shape and indicate a single choice from a group of options. However, by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"setSwitch(boolean)")," method, a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," can be transformed into a switch that resembles a toggle switch or slider."),(0,o.kt)("p",null,"When a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," is displayed as a switch, it typically appears as a oblong shape with an indicator that can be toggled on or off. This visual representation gives users a more intuitive and familiar interface, similar to physical switches commonly found in electronic devices. To do this, execute code similar to the following snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"RadioButton myButton = new RadioButton();\nmyButton.setSwitch(true);\n")),(0,o.kt)("p",null,"Setting a radio button to display as a switch can improve user experience by providing a clear and straightforward way to select options. It can enhance the visual appeal and usability of forms, settings panels, or any other interface element that requires multiple choices."),(0,o.kt)("p",null,"It's important to note that the behavior of the radio button remains the same, meaning only one option can be selected at a time within a group. The switch-like appearance is primarily a visual transformation while retaining the functionality of a radio button."),(0,o.kt)("h3",{id:"expanses"},"Expanses"),(0,o.kt)("p",null,"There are five checkbox expanses that are supported in the DWCJ which allow for quick styling without using CSS.\nExpanses are supported by use of a built-in enum class. Below are the expanses supported for the checkbox component: ",(0,o.kt)("br",null)),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," class provides methods to add and remove event listeners for the following events:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Events"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"BlurEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"FocusEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when an element gains focus, opposite of a blur event. It occurs when the user interacts with an element, typically by clicking inside an input field or navigating to it using the keyboard's tab key, causing the element to become active and ready to receive user input.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"CheckedEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the state of a component changes and becomes checked. It occurs when the user interacts with a checkbox element by clicking or tapping on it, causing the checkbox to transition from an unchecked state to a checked state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"UncheckedEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the state of a component changes and becomes unchecked. It occurs when the user interacts with a checkbox element by clicking or tapping on it, causing the checkbox to transition from an checked state to a unchecked state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"ToggleEvent")),(0,o.kt)("td",{parentName:"tr",align:null},'A ToggleEvent fires a CheckBox or a similar UI element changes its state between "on" and "off" or "active" and "inactive." It represents the action of toggling a setting, feature, or state of an element such as a CheckBox or Radio Button.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"MouseEnterEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the mouse cursor enters the boundaries of an element. It occurs when the user moves the mouse pointer over the specified element, indicating that the mouse has entered its area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"MouseExitEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the mouse cursor exits the boundaries of an element. It occurs when the user moves the mouse pointer out of the boundaries of the specified element, indicating that the mouse has exited its area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"RightMouseDownEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event refers to an event that is triggered when the user presses the right mouse button while the cursor is over an element. It allows you to capture the specific action of the user's right mouse button being pressed down within the boundaries of the element.")))),(0,o.kt)("br",null),(0,o.kt)("p",null,"To add an event listener, use the appropriate method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myRadioButton.addCheckedListener( e -> {\n  //Executed when the event fires\n});\n")),(0,o.kt)("p",null,"Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," prefix followed by the event, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myRadioButton.onChecked( e -> {\n    //Executed when the event fires\n});\n")),(0,o.kt)("p",null,"To remove an event listener, use the appropriate method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myRadioButton.removeCheckedListener(listener);\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For a method to be removed via the appropriate removeListener method, the signature of the method must be saved. ")),(0,o.kt)("h3",{id:"usages"},"Usages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," is best used in scenarios where users need to make a single selection from a predefined set of options. Here are some examples of when to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Survey or Questionnaires"),": Radio buttons are commonly used in surveys or questionnaires where users need to select a single response from a list of options.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Preference Settings"),": Applications that involve preference or settings panels often use Radio buttons to allow users to choose a single option from a set of mutually exclusive choices.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Filtering or Sorting"),": A ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," can be used in applications that require users to select a single filter or sorting option, such as sorting a list of items by different criteria."))),(0,o.kt)("h3",{id:"best-practices"},"Best Practices"),(0,o.kt)("p",null,"To ensure an optimal user experience when using the RadioButton component, consider the following best practices:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Clearly Label Options"),": Provide clear and concise labels for each ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," option to accurately describe the choice. Labels should be easy to understand and distinguish from one another.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Group Radio buttons"),": Group related Radio buttons together to indicate their association. This helps users understand that only one option can be selected within a specific group. This can be done effectively using the DWCJ's ",(0,o.kt)("a",{parentName:"p",href:"/docs/components/radio-group"},(0,o.kt)("inlineCode",{parentName:"a"},"RadioButtonGroup"))," component")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Provide Default Selection"),": If applicable, consider providing a default selection for Radio buttons to guide users when they first encounter the options. The default selection should align with the most common or preferred choice."))),(0,o.kt)("h3",{id:"parts-and-css-properties"},"Parts and CSS Properties"),(0,o.kt)(i.Z,{tag:n(5731).EU,mdxType:"TableBuilder"}))}h.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog"}')}}]);
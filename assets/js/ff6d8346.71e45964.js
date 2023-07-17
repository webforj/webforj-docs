"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2529],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>A});var a=n(7462),o=n(7294),i=n(6010),r=n(2466),l=n(6775),s=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,i]),tabValues:i}}var g=n(2389);const v="tabList__CuJ",k="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(d(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},r,{className:(0,i.Z)("tabs__item",k,null==r?void 0:r.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",v)},o.createElement(f,(0,a.Z)({},e,t)),o.createElement(w,(0,a.Z)({},e,t)))}function A(e){const t=(0,g.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},2395:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),o=n(2863),i=n(4866),r=n(5162),l=n(4673),s=n(8488);const c=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function u(e){let{collapse:t,setCollapse:n}=e;const a=o.iv`
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
  `;return(0,o.tZ)("div",{css:a},(0,o.tZ)("button",{css:i,onClick:()=>{n(!t)}},t?(0,o.tZ)("img",{css:r,src:c,className:"icon-tabler-arrow-bar-up"}):(0,o.tZ)("img",{css:r,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function d(e){let{path:t,javaC:n,javaE:c,cssURL:d,javaHighlight:p,height:m,frame:h}=e;const[b,g]=(0,a.useState)(""),[v,k]=(0,a.useState)(""),[f,w]=(0,a.useState)(""),[y,A]=(0,a.useState)(!0),N=o.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==h?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,E=o.iv`
    min-height: 100px;
    height: 100%;
    height: ${m};
  `,x=o.iv`
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

  `;return c&&fetch(c).then((e=>e.text())).then((e=>{k(e)})),n&&fetch(n).then((e=>e.text())).then((e=>{g(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{w(e)})),(0,o.tZ)("div",{css:N},"hidden"!=h?(0,o.tZ)("iframe",{loading:"lazy",src:t,css:E}):null,(0,o.tZ)(l.Z,{css:x,summary:(0,o.tZ)("summary",null,"Show Code")},n&&c?(0,o.tZ)(u,{collapse:y,setCollapse:A}):null,d?(0,o.tZ)(i.Z,null,(0,o.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p},y?b:v)),(0,o.tZ)(r.Z,{value:"CSS",label:"CSS"},(0,o.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},f))):(0,o.tZ)(i.Z,null,(0,o.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p},y?b:v)))))}},3273:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(2863);let i=null,r=null;const l={getLatestTag:async function(){return i&&r&&Date.now()-r<36e5?i:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return i=t[0].name,r=Date.now(),i}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function s(e){let{type:t,location:n}=e;const[i,r]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{const e=await l.getLatestTag();r("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html")}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const s=o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,c=o.iv`
    color: gray;
  `;return(0,o.tZ)("div",{css:s},(0,o.tZ)("p",{css:c},"API:\xa0"),(0,o.tZ)("b",null,(0,o.tZ)("a",{href:i,target:"_blank"},"Java")))}},7796:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function o(e){var t,n,o;const[i,r]=(0,a.useState)(null);if((0,a.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const n=t.components.find((t=>t.tag===e.tag));r(n)}))}),[]),!i)return a.createElement("div",null,"Loading...");const l=null==(t=i.docsTags)?void 0:t.filter((e=>"part"===e.name)),s=null==(n=i.styles)?void 0:n.map((e=>({name:e.name,description:e.docs}))),c=null==(o=i.props)?void 0:o.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type})));return a.createElement(a.Fragment,null,"parts"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==l?void 0:l.map((e=>{const[t,n]=e.text.split(" - ");return a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,n))}))))),"properties"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==s?void 0:s.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,e.description))))))),"reflects"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Attribute"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,null==c?void 0:c.map((e=>null!=e.attr&&"&#x2714;"==e.display&&a.createElement("tr",{key:e.attr},a.createElement("td",null,a.createElement("code",null,e.attr)),a.createElement("td",null,e.desc),a.createElement("td",null,e.type))))))),"properties"!=e.table&&"parts"!=e.table&&"reflects"!=e.table&&a.createElement(a.Fragment,null,a.createElement("h4",null,"Shadow Parts"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==l?void 0:l.map((e=>{const[t,n]=e.text.split(" - ");return a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,n))})))),a.createElement("h4",null,"CSS Properties"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==s?void 0:s.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,e.description)))))),a.createElement("h4",null,"Reflected Attributes"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Attribute"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,null==c?void 0:c.map((e=>null!=e.attr&&"&#x2714;"==e.display&&a.createElement("tr",{key:e.attr},a.createElement("td",null,a.createElement("code",null,e.attr)),a.createElement("td",null,e.desc),a.createElement("td",null,e.type))))))))}},1415:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(8397);function i(e){return a.createElement(a.Fragment,null,a.createElement(o.Z,e))}},5187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),i=(n(2395),n(7796)),r=n(3273);const l={sidebar_position:100,title:"RadioButton",slug:"radiobutton"},s=void 0,c={unversionedId:"components/radio-button",id:"components/radio-button",title:"RadioButton",description:"The RadioButton class creates an object that can be selected or deselected, and which displays its state to the user. By convention, only one radio button in a group can be selected at a time. Radio buttons are commonly used when mutually exclusive options are available, allowing the user to choose a single option from a set of choices.",source:"@site/docs/components/radio-button.md",sourceDirName:"components",slug:"/components/radiobutton",permalink:"/docs/components/radiobutton",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/radio-button.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"RadioButton",slug:"radiobutton"},sidebar:"tutorialSidebar",previous:{title:"ProgressBar",permalink:"/docs/components/progress-bar"},next:{title:"RadioButtonGroup",permalink:"/docs/components/radiobuttongroup"}},u={},d=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Text and Positioning",id:"text-and-positioning",level:2},{value:"Activation",id:"activation",level:2},{value:"Manual Activation",id:"manual-activation",level:3},{value:"Auto Activation",id:"auto-activation",level:3},{value:"Switches",id:"switches",level:2},{value:"Events",id:"events",level:2},{value:"Adding Events",id:"adding-events",level:3},{value:"Removing Events",id:"removing-events",level:3},{value:"Styling",id:"styling",level:2},{value:"Expanses",id:"expanses",level:3},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Best Practices",id:"best-practices",level:2}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{type:"engine",location:"org/dwcj/component/radiobutton/RadioButton",mdxType:"JavadocLink"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," class creates an object that can be selected or deselected, and which displays its state to the user. By convention, only one radio button in a group can be selected at a time. Radio buttons are commonly used when mutually exclusive options are available, allowing the user to choose a single option from a set of choices."),(0,o.kt)("h2",{id:"usages"},"Usages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," is best used in scenarios where users need to make a single selection from a predefined set of options. Here are some examples of when to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Survey or Questionnaires"),": Radio buttons are commonly used in surveys or questionnaires where users need to select a single response from a list of options.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Preference Settings"),": Applications that involve preference or settings panels often use Radio buttons to allow users to choose a single option from a set of mutually exclusive choices.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Filtering or Sorting"),": A ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," can be used in applications that require users to select a single filter or sorting option, such as sorting a list of items by different criteria."))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," class has three constructors:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton()"),": Creates an empty ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton")," in the unchecked state."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton(String text)"),": Creates a ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton")," with an attached label in the unchecked state."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton(String text, boolean checked)")," Creates a ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton")," with an attached label in either the checked or unchecked state, based on the boolean passed (",(0,o.kt)("inlineCode",{parentName:"li"},"true")," for checked, ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," for unchecked).")),(0,o.kt)("p",null,"Here is an example of how to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'RadioButton myRadioButton = new RadioButton("RadioButton Text");\n')),(0,o.kt)("h2",{id:"text-and-positioning"},"Text and Positioning"),(0,o.kt)("p",null,"Radio buttons can utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"setText(String foo)")," method, which will be positioned near the radio button according to the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Position"),".\nRadio buttons have built-in functionality to set text to be displayed either to the right or left of the component. By default, the text will be displayed to the right of the component. Positioning of the horizontal text is supported by use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"HorizontalAlignment")," enum class. Show below are the two settings: ",(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"activation"},"Activation"),(0,o.kt)("p",null,"Radio buttons can be controlled using two types of activation: manual activation and auto activation. These dictate when a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," will change its state."),(0,o.kt)("h3",{id:"manual-activation"},"Manual Activation"),(0,o.kt)("p",null,"When a radio button is set to manual activation, it means that it will not be automatically checked when it gains focus.\nManual activation allows the user to navigate through the radio button options using the keyboard or other input methods without immediately changing the selected option."),(0,o.kt)("p",null,"If the radio button is part of a group, selecting a different radio button within the group will automatically uncheck the previously selected radio button.\nManual activation provides finer control over the selection process, requiring an explicit action from the user to change the selected option."),(0,o.kt)("h3",{id:"auto-activation"},"Auto Activation"),(0,o.kt)("p",null,"Automatic activation is the default state for a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton"),", and means that the button will be checked on whenever it gains focus for any reason. This means that\nnot only clicking, but auto-focus or tab navigation will also check the button."),(0,o.kt)("h2",{id:"switches"},"Switches"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," can also be set to display as a switch provides which provides alternative visual representation for selecting options. Normally, radio buttons are circular or rounded in shape and indicate a single choice from a group of options. However, a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," can be transformed into a switch that resembles a toggle switch or slider using one of two methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"The Factory Method"),": The RadioButton can be created using the following Factory methods:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Switch(String text, boolean checked);\nSwitch(String text);\nSwitch();\n")),(0,o.kt)("p",null,"These methods mirror a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," constructor, and will create the component with the switch property already toggled on."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Setter"),": It is also possible to change an already existing ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton")," into a switch by using the appropriate setter:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myRadioButton.setSwitch(true);\n")),(0,o.kt)("p",null,"When a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," is displayed as a switch, it typically appears as a oblong shape with an indicator that can be toggled on or off. This visual representation gives users a more intuitive and familiar interface, similar to physical switches commonly found in electronic devices. "),(0,o.kt)("p",null,"Setting a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," to display as a switch can improve user experience by providing a clear and straightforward way to select options. It can enhance the visual appeal and usability of forms, settings panels, or any other interface element that requires multiple choices."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The behavior of the ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," remains the same when being rendered as a Switch, meaning only one option can be selected at a time within a group. The switch-like appearance is a visual transformation which retains the functionality of a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton"),".")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," class provides methods to add and remove event listeners for the following events:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Events"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"BlurEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"FocusEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when an element gains focus, opposite of a blur event. It occurs when the user interacts with an element, typically by clicking inside an input field or navigating to it using the keyboard's tab key, causing the element to become active and ready to receive user input.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"CheckedEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the state of a component changes and becomes checked. It occurs when the user interacts with a checkbox element by clicking or tapping on it, causing the checkbox to transition from an unchecked state to a checked state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"UncheckedEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the state of a component changes and becomes unchecked. It occurs when the user interacts with a checkbox element by clicking or tapping on it, causing the checkbox to transition from an checked state to a unchecked state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"ToggleEvent")),(0,o.kt)("td",{parentName:"tr",align:null},'A ToggleEvent fires a CheckBox or a similar UI element changes its state between "on" and "off" or "active" and "inactive." It represents the action of toggling a setting, feature, or state of an element such as a CheckBox or Radio Button.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"MouseEnterEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the mouse cursor enters the boundaries of an element. It occurs when the user moves the mouse pointer over the specified element, indicating that the mouse has entered its area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"MouseExitEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the mouse cursor exits the boundaries of an element. It occurs when the user moves the mouse pointer out of the boundaries of the specified element, indicating that the mouse has exited its area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"RightMouseDownEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event refers to an event that is triggered when the user presses the right mouse button while the cursor is over an element. It allows you to capture the specific action of the user's right mouse button being pressed down within the boundaries of the element.")))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"adding-events"},"Adding Events"),(0,o.kt)("p",null,"To add an event listener, use the appropriate method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myRadioButton.addCheckedListener( e -> {\n  //Executed when the event fires\n});\n")),(0,o.kt)("p",null,"Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," prefix followed by the event, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myRadioButton.onChecked( e -> {\n    //Executed when the event fires\n});\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using the event payload that comes with various events to attain information reduces the number of round trips made when instead querying the component for the required information. ")),(0,o.kt)("h3",{id:"removing-events"},"Removing Events"),(0,o.kt)("p",null,"To remove an event listener, use the appropriate method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myRadioButton.removeCheckedListener(listener);\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For a method to be removed via the appropriate removeListener method, the signature of the method must be saved. ")),(0,o.kt)("h2",{id:"styling"},"Styling"),(0,o.kt)("h3",{id:"expanses"},"Expanses"),(0,o.kt)("p",null,"There are five checkbox expanses that are supported which allow for quick styling without using CSS.\nExpanses are supported by use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Expanse")," enum class. Below are the expanses supported for the checkbox component: ",(0,o.kt)("br",null)),(0,o.kt)("h3",{id:"shadow-parts"},"Shadow Parts"),(0,o.kt)("p",null,"These are the various parts of the shadow DOM for the component, which will be required when styling via CSS is desired."),(0,o.kt)(i.Z,{tag:n(5731).EU,table:"parts",mdxType:"TableBuilder"}),(0,o.kt)("h3",{id:"css-properties"},"CSS Properties"),(0,o.kt)("p",null,"These are the various CSS properties that are used in the component, with a short description of their use."),(0,o.kt)(i.Z,{tag:n(5731).EU,table:"properties",mdxType:"TableBuilder"}),(0,o.kt)("h3",{id:"reflected-attributes"},"Reflected Attributes"),(0,o.kt)("p",null,"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."),(0,o.kt)(i.Z,{tag:n(5731).EU,table:"reflects",mdxType:"TableBuilder"}),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("p",null,"To ensure an optimal user experience when using the RadioButton component, consider the following best practices:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Clearly Label Options"),": Provide clear and concise text for each ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," option to accurately describe the choice. Text should be easy to understand and distinguish from one another.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Group Radio buttons"),": Group related Radio buttons together to indicate their association. This helps users understand that only one option can be selected within a specific group. This can be done effectively using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/components/radiobuttongroup"},(0,o.kt)("inlineCode",{parentName:"a"},"RadioButtonGroup"))," component.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Provide Default Selection"),": If applicable, consider providing a default selection for Radio buttons to guide users when they first encounter the options. The default selection should align with the most common or preferred choice."))))}m.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog"}')}}]);
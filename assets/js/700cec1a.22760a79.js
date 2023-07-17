"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[4020],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),o=n(7294),r=n(6010),l=n(2466),i=n(6775),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=s??d;return p({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var b=n(2389);const v="tabList__CuJ",f="tabItem_LNqP";function A(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},p=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,r.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",v)},o.createElement(A,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},2395:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),o=n(2863),r=n(4866),l=n(5162),i=n(4673),s=n(8488);const u=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function c(e){let{collapse:t,setCollapse:n}=e;const a=o.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,r=o.iv`
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
  
  `,l=o.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,o.tZ)("div",{css:a},(0,o.tZ)("button",{css:r,onClick:()=>{n(!t)}},t?(0,o.tZ)("img",{css:l,src:u,className:"icon-tabler-arrow-bar-up"}):(0,o.tZ)("img",{css:l,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function d(e){let{path:t,javaC:n,javaE:u,cssURL:d,javaHighlight:m,height:p,frame:h}=e;const[g,b]=(0,a.useState)(""),[v,f]=(0,a.useState)(""),[A,k]=(0,a.useState)(""),[y,E]=(0,a.useState)(!0),w=o.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==h?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,N=o.iv`
    min-height: 100px;
    height: 100%;
    height: ${p};
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

  `;return u&&fetch(u).then((e=>e.text())).then((e=>{f(e)})),n&&fetch(n).then((e=>e.text())).then((e=>{b(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{k(e)})),(0,o.tZ)("div",{css:w},"hidden"!=h?(0,o.tZ)("iframe",{loading:"lazy",src:t,css:N}):null,(0,o.tZ)(i.Z,{css:x,summary:(0,o.tZ)("summary",null,"Show Code")},n&&u?(0,o.tZ)(c,{collapse:y,setCollapse:E}):null,d?(0,o.tZ)(r.Z,null,(0,o.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},y?g:v)),(0,o.tZ)(l.Z,{value:"CSS",label:"CSS"},(0,o.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},A))):(0,o.tZ)(r.Z,null,(0,o.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},y?g:v)))))}},3273:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(2863);let r=null,l=null;const i={getLatestTag:async function(){return r&&l&&Date.now()-l<36e5?r:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return r=t[0].name,l=Date.now(),r}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function s(e){let{type:t,location:n}=e;const[r,l]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{const e=await i.getLatestTag();l("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html")}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const s=o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,u=o.iv`
    color: gray;
  `;return(0,o.tZ)("div",{css:s},(0,o.tZ)("p",{css:u},"API:\xa0"),(0,o.tZ)("b",null,(0,o.tZ)("a",{href:r,target:"_blank"},"Java")))}},7796:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function o(e){var t,n,o;const[r,l]=(0,a.useState)(null);if((0,a.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const n=t.components.find((t=>t.tag===e.tag));l(n)}))}),[]),!r)return a.createElement("div",null,"Loading...");const i=null==(t=r.docsTags)?void 0:t.filter((e=>"part"===e.name)),s=null==(n=r.styles)?void 0:n.map((e=>({name:e.name,description:e.docs}))),u=null==(o=r.props)?void 0:o.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type})));return a.createElement(a.Fragment,null,"parts"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==i?void 0:i.map((e=>{const[t,n]=e.text.split(" - ");return a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,n))}))))),"properties"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==s?void 0:s.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,e.description))))))),"reflects"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Attribute"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,null==u?void 0:u.map((e=>null!=e.attr&&"&#x2714;"==e.display&&a.createElement("tr",{key:e.attr},a.createElement("td",null,a.createElement("code",null,e.attr)),a.createElement("td",null,e.desc),a.createElement("td",null,e.type))))))),"properties"!=e.table&&"parts"!=e.table&&"reflects"!=e.table&&a.createElement(a.Fragment,null,a.createElement("h4",null,"Shadow Parts"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==i?void 0:i.map((e=>{const[t,n]=e.text.split(" - ");return a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,n))})))),a.createElement("h4",null,"CSS Properties"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==s?void 0:s.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,e.description)))))),a.createElement("h4",null,"Reflected Attributes"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Attribute"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,null==u?void 0:u.map((e=>null!=e.attr&&"&#x2714;"==e.display&&a.createElement("tr",{key:e.attr},a.createElement("td",null,a.createElement("code",null,e.attr)),a.createElement("td",null,e.desc),a.createElement("td",null,e.type))))))))}},1415:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(8397);function r(e){return a.createElement(a.Fragment,null,a.createElement(o.Z,e))}},7308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=(n(2395),n(7796),n(3273));const l={sidebar_position:100,title:"RadioButtonGroup",slug:"radiobuttongroup"},i=void 0,s={unversionedId:"components/radio-group",id:"components/radio-group",title:"RadioButtonGroup",description:"The RadioButtonGroup class is used to group related radio buttons together, which helps establish the mutual exclusivity among the options within that group. Users can select only one radio button within a given radio group. When a user selects a radio button within a group, any previously selected radio button in the same group automatically becomes deselected. This ensures that only one option can be chosen at a time.",source:"@site/docs/components/radio-group.md",sourceDirName:"components",slug:"/components/radiobuttongroup",permalink:"/docs/components/radiobuttongroup",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/radio-group.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"RadioButtonGroup",slug:"radiobuttongroup"},sidebar:"tutorialSidebar",previous:{title:"RadioButton",permalink:"/docs/components/radiobutton"},next:{title:"Slider",permalink:"/docs/components/slider"}},u={},c=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Adding and Removing RadioButtons",id:"adding-and-removing-radiobuttons",level:2},{value:"Naming",id:"naming",level:2},{value:"Events",id:"events",level:2},{value:"Adding Events",id:"adding-events",level:3},{value:"Removing Events",id:"removing-events",level:3},{value:"Best Practices",id:"best-practices",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{type:"engine",location:"org/dwcj/component/radiobutton/RadioButtonGroup",mdxType:"JavadocLink"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButtonGroup")," class is used to group related radio buttons together, which helps establish the mutual exclusivity among the options within that group. Users can select only one radio button within a given radio group. When a user selects a radio button within a group, any previously selected radio button in the same group automatically becomes deselected. This ensures that only one option can be chosen at a time."),(0,o.kt)("h2",{id:"usages"},"Usages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButtonGroup")," is best used in scenarios where users need to make a single selection from a predefined set of options presented as radio buttons. Here are some examples of when to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButtonGroup"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Survey or Questionnaires"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButtonGroup")," components are commonly used in surveys or questionnaires where users need to select a single response from a list of options.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Preference Settings"),": Applications that involve preference or settings panels often use RadioButtonGroup component to allow users to choose a single option from a set of mutually exclusive choices.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Filtering or Sorting"),": A ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," can be used in applications that require users to select a single filter or sorting option, such as sorting a list of items by different criteria."))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButtonGroup")," class has four constructors:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RadioButtonGroup()"),": Creates an empty ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButtonGroup")," in the unchecked state."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RadioButtonGroup(String name)"),": Creates a ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButtonGroup")," with an name."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RadioButtonGroup(RadioButton... buttons)"),": Creates a ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButtonGroup")," with one or more ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton")," objects assigned to the group."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RadioButtonGroup(String name, RadioButton... buttons)")," Creates a ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButtonGroup")," with both a name and one or more ",(0,o.kt)("inlineCode",{parentName:"li"},"RadioButton")," objects assigned to the group.")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," component stores the group to which it belongs, which can be accessed via the ",(0,o.kt)("inlineCode",{parentName:"p"},"getButtonGroup()")," method."),(0,o.kt)("h2",{id:"adding-and-removing-radiobuttons"},"Adding and Removing RadioButtons"),(0,o.kt)("p",null,"It is possible to add and remove singular or multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," objects to a group, ensuring that they exhibit mutually-exclusive checking behavior, and are associated with any name that may belong to the group."),(0,o.kt)("h2",{id:"naming"},"Naming"),(0,o.kt)("p",null,"The name attribute in a ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButtonGroup")," groups related RadioButtons together, allowing users to make a single choice from the options provided and enforcing exclusivity among the RadioButtons. The name of a group is not reflected in the DOM, however, and is a convenience utility for the Java developer."),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButtonGroup")," class provides methods to add and remove change events. These events fire whenever a change is made to an element within the group."),(0,o.kt)("h3",{id:"adding-events"},"Adding Events"),(0,o.kt)("p",null,"To add an ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeEvent")," listener, use the appropriate method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myRadioButtonGroup.addChangeListener( e -> {\n  //Executed when the event fires\n});\n")),(0,o.kt)("p",null,"Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," prefix followed by the event, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myRadioButtonGroup.onChange( e -> {\n    //Executed when the event fires\n});\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using the event payload that comes with various events to attain information reduces the number of round trips made when instead querying the component for the required information. ")),(0,o.kt)("h3",{id:"removing-events"},"Removing Events"),(0,o.kt)("p",null,"To remove an event listener, use the appropriate method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myRadioButton.removeChangeListener(listener);\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For a method to be removed via the appropriate removeListener method, the signature of the method must be saved. ")),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("p",null,"To ensure an optimal user experience when using the RadioButton component, consider the following best practices:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Clearly Label Options"),": Provide clear and concise labels for each ",(0,o.kt)("inlineCode",{parentName:"p"},"RadioButton")," option to accurately describe the choice. Labels should be easy to understand and distinguish from one another.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Provide Default Selection"),": If applicable, consider providing a default selection for Radio buttons to guide users when they first encounter the options. The default selection should align with the most common or preferred choice."))))}m.isMDXComponent=!0}}]);
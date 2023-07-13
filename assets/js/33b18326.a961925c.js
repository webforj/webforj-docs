"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8402],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(7462),r=a(7294),i=a(6010),l=a(2466),o=a(6775),s=a(1980),A=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,A.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=u(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,A]=p({queryString:a,groupId:n}),[d,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=s??d;return h({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),A(e),m(e)}),[A,m,i]),tabValues:i}}var g=a(2389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:A}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=A[a].value;n!==o&&(d(t),s(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},A.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:u},l,{className:(0,i.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=m(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function C(e){const t=(0,g.Z)();return r.createElement(E,(0,n.Z)({key:String(t)},e))}},2395:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),r=a(2863),i=a(4866),l=a(5162),o=a(4673),s=a(4633);const A=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function c(e){let{collapse:t,setCollapse:a}=e;const n=r.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,i=r.iv`
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
  
  `,l=r.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,r.tZ)("div",{css:n},(0,r.tZ)("button",{css:i,onClick:()=>{a(!t)}},t?(0,r.tZ)("img",{css:l,src:A,className:"icon-tabler-arrow-bar-up"}):(0,r.tZ)("img",{css:l,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function d(e){let{path:t,javaC:a,javaE:A,cssURL:d,javaHighlight:u,height:h,frame:p}=e;const[m,g]=(0,n.useState)(""),[f,b]=(0,n.useState)(""),[v,w]=(0,n.useState)(""),[E,C]=(0,n.useState)(!0),y=r.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==p?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,k=r.iv`
    min-height: 100px;
    height: 100%;
    height: ${h};
  `,N=r.iv`
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

  `;return A&&fetch(A).then((e=>e.text())).then((e=>{b(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{g(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{w(e)})),(0,r.tZ)("div",{css:y},"hidden"!=p?(0,r.tZ)("iframe",{loading:"lazy",src:t,css:k}):null,(0,r.tZ)(o.Z,{css:N,summary:(0,r.tZ)("summary",null,"Show Code")},a&&A?(0,r.tZ)(c,{collapse:E,setCollapse:C}):null,d?(0,r.tZ)(i.Z,null,(0,r.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,r.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u},E?m:f)),(0,r.tZ)(l.Z,{value:"CSS",label:"CSS"},(0,r.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},v))):(0,r.tZ)(i.Z,null,(0,r.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,r.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u},E?m:f)))))}},3273:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(2863);let i=null,l=null;const o={getLatestTag:async function(){return i&&l&&Date.now()-l<36e5?i:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return i=t[0].name,l=Date.now(),i}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function s(e){let{type:t,location:a}=e;const[i,l]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{try{const e=await o.getLatestTag();l("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+a+".html")}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const s=r.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,A=r.iv`
    color: gray;
  `;return(0,r.tZ)("div",{css:s},(0,r.tZ)("p",{css:A},"API:\xa0"),(0,r.tZ)("b",null,(0,r.tZ)("a",{href:i,target:"_blank"},"Java")))}},7796:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){var t,a;const[r,i]=(0,n.useState)(null);if((0,n.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const a=t.components.find((t=>t.tag===e.tag));i(a)}))}),[]),!r)return n.createElement("div",null,"Loading...");const l=null==(t=r.docsTags)?void 0:t.filter((e=>"part"===e.name)),o=null==(a=r.styles)?void 0:a.map((e=>({name:e.name,description:e.docs})));return n.createElement(n.Fragment,null,n.createElement("h4",null,"Shadow Parts"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==l?void 0:l.map((e=>{const[t,a]=e.text.split(" - ");return n.createElement("tr",{key:e.id},n.createElement("td",null,t),n.createElement("td",null,a))})))),n.createElement("h4",null,"CSS Properties"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==o?void 0:o.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,e.name),n.createElement("td",null,e.description)))))))}},2322:(e,t,a)=>{a.d(t,{Z:()=>l});a(7294);var n=a(2863),r=a(9960);function i(e){let{imagePath:t,title:a,description:i,link:l}=e;const o=n.iv`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-top: 15px;
    padding: 20px;
    border: 1px solid var(--ifm-color-emphasis-200);
    transition: all var(--ifm-transition-fast) ease;
    transition-property: border,box-shadow;
    border-radius: var(--ifm-card-border-radius);
    text-decoration: none;
    color: var(--ifm-font-color-base);

    
    
    
    &:hover{
      border: 1px var(--ifm-color-primary) solid;
      .bar{
        background-color: var(--ifm-color-primary);
      }
      text-decoration: none;
      color: var(--ifm-font-color-base);
    } 
  `,s=n.iv`
    width: 200px;
    height: 150px;
    object-fit: contain;
    margin: 0 0 5px -3px;
  `,A=n.iv`
      height: 1px;
      background-color: lightgray;
      margin: 5px 0 15px 0;
      transition: all var(--ifm-transition-fast) ease;
      transition-property: background-color,box-shadow;
    `,c=n.iv`
    h5{
      font-size: 1em;
    }
    p{
      font-size: .9em;
      margin: 0px !important;
    }
  `;return(0,n.tZ)(r.Z,{to:l,css:o},(0,n.tZ)("div",{css:{display:"flex",justifyContent:"center"}},(0,n.tZ)("img",{src:t.default,css:s})),(0,n.tZ)("div",{css:A,className:"bar"}),(0,n.tZ)("div",{css:c},(0,n.tZ)("h5",null,a),(0,n.tZ)("p",null,i)))}function l(e){let{componentData:t}=e;const a=n.iv`
    display : flex;
    flex-direction : row,;
    flex-wrap : wrap;
    gap : 40px;
    margin-right: -300px;
  `;return(0,n.tZ)("div",{css:a},t.map((e=>(0,n.tZ)(i,{imagePath:e.image,title:e.title,description:e.description,link:e.link}))))}},6258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));a(552),a(6882),a(3983),a(5480),a(3020),a(7348),a(3159);a(2322),a(2395),a(7796);var i=a(3273);const l={sidebar_position:0,title:"Field"},o=void 0,s={unversionedId:"components/fields/fields",id:"components/fields/fields",title:"Field",description:"The DWCJ supports seven different types of field components, each with various behaviors and implementations that suit various",source:"@site/docs/components/fields/fields.md",sourceDirName:"components/fields",slug:"/components/fields/",permalink:"/docs/components/fields/",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/fields/fields.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Field"},sidebar:"tutorialSidebar",previous:{title:"Drawer",permalink:"/docs/components/drawer"},next:{title:"ColorField",permalink:"/docs/components/fields/color-field"}},A={},c=[{value:"Shared Field Properties",id:"shared-field-properties",level:2},{value:"Autocomplete",id:"autocomplete",level:3},{value:"Label",id:"label",level:3},{value:"Required",id:"required",level:3},{value:"Spellcheck",id:"spellcheck",level:3},{value:"Shared Events",id:"shared-events",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{type:"engine",location:"org/dwcj/component/field/AbstractField",mdxType:"JavadocLink"}),(0,r.kt)("p",null,"The DWCJ supports seven different types of field components, each with various behaviors and implementations that suit various\nneeds. While each of these components have variations in their implementations, there are commonalities amongst all of the\nfield classes that will be described here."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section describes common functionality amongst various field components in the DWCJ, and is not itself a class that can be instantiated and used.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/fields/color-field"},(0,r.kt)("inlineCode",{parentName:"a"},"ColorField"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/fields/date-field"},(0,r.kt)("inlineCode",{parentName:"a"},"DateField"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/fields/date-time-field"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTimeField"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/fields/number-field"},(0,r.kt)("inlineCode",{parentName:"a"},"NumberField"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/fields/password-field"},(0,r.kt)("inlineCode",{parentName:"a"},"PasswordField"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/fields/text-field"},(0,r.kt)("inlineCode",{parentName:"a"},"TextField"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/fields/time-field"},(0,r.kt)("inlineCode",{parentName:"a"},"TimeField")))),(0,r.kt)("h2",{id:"shared-field-properties"},"Shared Field Properties"),(0,r.kt)("h3",{id:"autocomplete"},"Autocomplete"),(0,r.kt)("p",null,"Specifies the browser's behavior regarding automatic form filling and completion. The available options include OFF, ON, and specific values for different types of autocomplete data such as names, addresses, and email addresses. The various values can be found in the Javadoc, and follow MDN standards."),(0,r.kt)("h3",{id:"label"},"Label"),(0,r.kt)("p",null,"A field label is a descriptive text or title that is associated with the field. It provides a brief explanation or prompt to help users understand the purpose or expected input for that particular field. Field labels are not only important for usability but also play a crucial role in accessibility, as they enable screen readers and assistive technologies to provide accurate information and facilitate keyboard navigation."),(0,r.kt)("h3",{id:"required"},"Required"),(0,r.kt)("p",null,"A field is required when the user must provide a value before submitting a form. This is mainly used in conjunction with ",(0,r.kt)("inlineCode",{parentName:"p"},"setLabel(String)")," to provide a visual indication to users that the field is required."),(0,r.kt)("h3",{id:"spellcheck"},"Spellcheck"),(0,r.kt)("p",null,"By calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"setSpellCheck(true)")," method, you can enable the spellcheck feature for a field. This means that when a user enters text into the field, the browser or user agent may check the spelling of the entered text for errors."),(0,r.kt)("h2",{id:"shared-events"},"Shared Events"),(0,r.kt)("p",null,"All DWCJ field components share the following methods to add and remove event listeners for the following events:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Events"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"BlurEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"FocusEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when an element gains focus, opposite of a blur event. It occurs when the user interacts with an element, typically by clicking inside an input field or navigating to it using the keyboard's tab key, causing the element to become active and ready to receive user input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"KeypressEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when one of a specific set of key is pressed while the component has focus. These keys have specific codes, allowing for conditional logic to be implemented based on the key pressed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ModifyEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when an is changed or modified. It typically occurs any time a user changes an aspect of the component, such as each time a letter is input or removed from an input component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"MouseEnterEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the mouse cursor enters the boundaries of an element. It occurs when the user moves the mouse pointer over the specified element, indicating that the mouse has entered its area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"MouseExitEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the mouse cursor exits the boundaries of an element. It occurs when the user moves the mouse pointer out of the boundaries of the specified element, indicating that the mouse has exited its area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"RightMouseDownEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event refers to an event that is triggered when the user presses the right mouse button while the cursor is over an element. It allows you to capture the specific action of the user's right mouse button being pressed down within the boundaries of the element.")))))}u.isMDXComponent=!0},552:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/color_field-5432a32155395e4eb0a9ce56ec283ce2.png"},6882:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/date_field-73dadbcbf87ee3e0240c1c8e4c4c369f.png"},3983:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/date_time_field-a67e2cb6a8c3a58d238e9c2c2a201178.png"},5480:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA1CAYAAAAEVKRZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHQSURBVHhe7dyxihNBGMDxiYjiFTaHKJZWgqWNlZ0+gX0afYATH0O8B9Am/T2BdlY2loKVpXjIFbFQFCH64aTJJR83ISw73u8HS2a3nj87s4SZLP4qwFoX6i+whkAgIRBICAQSAoGEQCAhEEgIBBICgYRAINH8V5OXb7+WF6+Py8cvP+sTGLfbNy6Xpw+vlyf3r9UnZ9cUSMRx+Oa4PH90s9y7tVefwri9+/S9PDv6XA4etEfStMSKN4c46E3M15i3MX9bNQUSyypx0KOYt9tsC2zSISEQSAgEEgJhVPavXikXF7+2vnZNIJAQCCQEQlem02kdDUMgdGMZx5CRCIQurEYxVCQCYfQ2xTBEJE1/Vpw8fl9ODu/UO9i9+Mw7n8/rXbvfk0t1dNr+wYeyeHW33p2NNwgkBAIJSyxGZd0SK9trzGazOvrHEotzZzWCpU3Pd0kgdGE1hiHiCAKhG8sohoojCISuDBlHEAgkBMLoxJeoba9dEwijcvLtRx2Ng0AgIRBICAQSTYHEGadxjCP0JuZtzN9WTYHEAcBxxqlI6MnybN6Yv62c7s5/b7DT3eG8sUmHhEAgIRBICAQSAoGEQCAhEEgIBBICgYRAYKNS/gDN9bRIHg9suQAAAABJRU5ErkJggg=="},3020:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n="data:image/png;base64,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"},7348:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n="data:image/png;base64,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"},3159:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n="data:image/png;base64,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"}}]);
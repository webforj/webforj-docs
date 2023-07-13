"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9243],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),i=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),i=a(7294),r=a(6010),l=a(2466),o=a(6775),s=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return i.Children.map(e,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function m(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=s??d;return p({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var g=a(2389);const f="tabList__CuJ",v="tabItem_LNqP";function A(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(d(t),s(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,r.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=b(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",f)},i.createElement(A,(0,n.Z)({},e,t)),i.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return i.createElement(N,(0,n.Z)({key:String(t)},e))}},2395:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),i=a(2863),r=a(4866),l=a(5162),o=a(4673),s=a(4633);const u=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function c(e){let{collapse:t,setCollapse:a}=e;const n=i.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,r=i.iv`
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
  
  `,l=i.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,i.tZ)("div",{css:n},(0,i.tZ)("button",{css:r,onClick:()=>{a(!t)}},t?(0,i.tZ)("img",{css:l,src:u,className:"icon-tabler-arrow-bar-up"}):(0,i.tZ)("img",{css:l,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function d(e){let{path:t,javaC:a,javaE:u,cssURL:d,javaHighlight:m,height:p,frame:h}=e;const[b,g]=(0,n.useState)(""),[f,v]=(0,n.useState)(""),[A,k]=(0,n.useState)(""),[N,w]=(0,n.useState)(!0),y=i.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==h?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,x=i.iv`
    min-height: 100px;
    height: 100%;
    height: ${p};
  `,E=i.iv`
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

  `;return u&&fetch(u).then((e=>e.text())).then((e=>{v(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{g(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{k(e)})),(0,i.tZ)("div",{css:y},"hidden"!=h?(0,i.tZ)("iframe",{loading:"lazy",src:t,css:x}):null,(0,i.tZ)(o.Z,{css:E,summary:(0,i.tZ)("summary",null,"Show Code")},a&&u?(0,i.tZ)(c,{collapse:N,setCollapse:w}):null,d?(0,i.tZ)(r.Z,null,(0,i.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,i.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},N?b:f)),(0,i.tZ)(l.Z,{value:"CSS",label:"CSS"},(0,i.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},A))):(0,i.tZ)(r.Z,null,(0,i.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,i.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},N?b:f)))))}},3273:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),i=a(2863);let r=null,l=null;const o={getLatestTag:async function(){return r&&l&&Date.now()-l<36e5?r:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return r=t[0].name,l=Date.now(),r}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function s(e){let{type:t,location:a}=e;const[r,l]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{try{const e=await o.getLatestTag();l("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+a+".html")}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const s=i.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,u=i.iv`
    color: gray;
  `;return(0,i.tZ)("div",{css:s},(0,i.tZ)("p",{css:u},"API:\xa0"),(0,i.tZ)("b",null,(0,i.tZ)("a",{href:r,target:"_blank"},"Java")))}},7796:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);function i(e){var t,a;const[i,r]=(0,n.useState)(null);if((0,n.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const a=t.components.find((t=>t.tag===e.tag));r(a)}))}),[]),!i)return n.createElement("div",null,"Loading...");const l=null==(t=i.docsTags)?void 0:t.filter((e=>"part"===e.name)),o=null==(a=i.styles)?void 0:a.map((e=>({name:e.name,description:e.docs})));return n.createElement(n.Fragment,null,n.createElement("h4",null,"Shadow Parts"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==l?void 0:l.map((e=>{const[t,a]=e.text.split(" - ");return n.createElement("tr",{key:e.id},n.createElement("td",null,t),n.createElement("td",null,a))})))),n.createElement("h4",null,"CSS Properties"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==o?void 0:o.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,e.name),n.createElement("td",null,e.description)))))))}},990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),r=(a(2395),a(7796)),l=a(3273);const o={sidebar_position:4,title:"NumberField"},s=void 0,u={unversionedId:"components/fields/number-field",id:"components/fields/number-field",title:"NumberField",description:"The DateTimeField class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the Field documentation page for an overview of Field properties, events, and other important information.",source:"@site/docs/components/fields/number-field.md",sourceDirName:"components/fields",slug:"/components/fields/number-field",permalink:"/docs/components/fields/number-field",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/fields/number-field.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"NumberField"},sidebar:"tutorialSidebar",previous:{title:"DateTimeField",permalink:"/docs/components/fields/date-time-field"},next:{title:"PasswordField",permalink:"/docs/components/fields/password-field"}},c={},d=[{value:"Constructors",id:"constructors",level:3},{value:"Maximum and Minimum",id:"maximum-and-minimum",level:3},{value:"Granularity",id:"granularity",level:3},{value:"Placeholder Text",id:"placeholder-text",level:3},{value:"Usages",id:"usages",level:3},{value:"Best Practices",id:"best-practices",level:3},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:3}],m={toc:d};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{type:"engine",location:"org/dwcj/component/field/NumberField",mdxType:"JavadocLink"}),(0,i.kt)("admonition",{type:"success"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTimeField")," class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/components/fields"},"Field documentation page"))," for an overview of Field properties, events, and other important information.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField")," component can be used to accept numerical input from the user. It ensures that only valid numeric values are entered and provides a convenient interface for inputting numbers."),(0,i.kt)("h3",{id:"constructors"},"Constructors"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField")," class has three constructors:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"NumberField(String label, Double value)"),": Creates a ",(0,i.kt)("inlineCode",{parentName:"li"},"NumberField")," with a given label and value."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"NumberField(String label)"),": Creates a ",(0,i.kt)("inlineCode",{parentName:"li"},"NumberField")," with a given label but with no pre-populated datetime."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"NumberField()"),": Creates a ",(0,i.kt)("inlineCode",{parentName:"li"},"NumberField")," without any provided information.")),(0,i.kt)("h3",{id:"maximum-and-minimum"},"Maximum and Minimum"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"setMax()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"setMin()")," methods to specify the acceptable time range. If the value entered into the component is outside of the specified value, the component fails constraint validation. Also, if there is already a maximum or minimum set, the value given to the other method must be lower or higher respectively."),(0,i.kt)("h3",{id:"granularity"},"Granularity"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"setStep")," method to specify the granularity that the value must adhere to when using arrow keys to modify the value. This will increment or decrement the component's value by a certain step each time. This does not apply when a user enters a value directly, but only when interacting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField")," using the arrow keys."),(0,i.kt)("h3",{id:"placeholder-text"},"Placeholder Text"),(0,i.kt)("p",null,"You can set placeholder text for the ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"setPlaceholder")," method. The placeholder text is displayed when the field is empty, helping to prompt the user to enter appropriate input into the ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField"),"."),(0,i.kt)("h3",{id:"usages"},"Usages"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField")," is best used in scenarios where capturing or manipulating numerical data is crucial to the user interface or application functionality. Here are some examples of when to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Numeric Input Forms"),": When designing forms that require numeric inputs, using a ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField")," simplifies the input process for users. This is particularly useful for applications that collect user data or require numerical values.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Analysis and Calculations"),": A ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField")," will be particularly valuable in applications that involve data analysis, calculations, or mathematical operations. They enable users to input or manipulate numeric values accurately.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Financial and Budgeting Applications"),": Applications that involve financial calculations, budgeting, or tracking expenses often require precise numeric inputs. A ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField")," ensures accurate entry of financial figures.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Measurement and Unit Conversion"),": In applications that deal with measurements or unit conversions, the ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField")," is ideal for inputting numerical values with units such as length, weight, or volume."))),(0,i.kt)("h3",{id:"best-practices"},"Best Practices"),(0,i.kt)("p",null,"To ensure a seamless integration and optimal user experience, consider the following best practices when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"NumberField"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Consider Accessibility"),": Utilize the NumberField component with accessibility in mind, adhering to accessibility standards such as proper labeling, keyboard navigation support, and compatibility with assistive technologies. Ensure that users with disabilities can interact with the NumberField effectively.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Utilize Increment/Decrement Buttons"),": If appropriate for your application, consider utilizing increment and decrement buttons with the NumberField. This allows users to adjust the numeric value by a specific increment or decrement with a single click.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Handle Minimum and Maximum Values"),": If your application requires limiting the numeric input range, incorporate validation and visual cues to indicate the acceptable minimum and maximum values. Prevent users from entering values outside the defined range."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the numeric input relates to a specific unit of measurement or has a particular context, provide clear labeling or additional information to guide users and ensure accurate input.")),(0,i.kt)("h3",{id:"parts-and-css-properties"},"Parts and CSS Properties"),(0,i.kt)(r.Z,{tag:a(5731).gN,mdxType:"TableBuilder"}))}p.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog"}')}}]);
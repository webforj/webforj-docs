"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2498],{8306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var o=n(5893),i=n(1151),s=n(6957),r=(n(6521),n(7796)),a=n(3273),l=n(2665);const c={sidebar_position:1,title:"ChoiceBox",slug:"choicebox"},d=void 0,h={id:"components/list-components/choice-box",title:"ChoiceBox",description:"The ChoiceBox component is a user interface element designed to present users with a list of options or choices. Users can select a single option from this list, typically by clicking the ChoiceBox, which triggers the display of a dropdown list containing available choices. Users can also interact with the ChoiceBox with the arrow keys. When a user makes a selection, the chosen option is then displayed in the ChoiceBox button.",source:"@site/docs/components/list-components/choice-box.md",sourceDirName:"components/list-components",slug:"/components/list-components/choicebox",permalink:"/docs/components/list-components/choicebox",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/list-components/choice-box.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"ChoiceBox",slug:"choicebox"},sidebar:"documentationSidebar",previous:{title:"Lists",permalink:"/docs/components/list-components/lists"},next:{title:"ComboBox",permalink:"/docs/components/list-components/combobox"}},u={},p=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Dropdown Type",id:"dropdown-type",level:2},{value:"Max Row Count",id:"max-row-count",level:2},{value:"Opening Dimensions",id:"opening-dimensions",level:2},{value:"Events",id:"events",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Best Practices",id:"best-practices",level:2}];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,o.jsx)(l.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"bbj-list-button",href:"https://basishub.github.io/basis-next/#/web-components/bbj-list-button",clickable:!1,iconName:"code"}),"\n",(0,o.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/button/Button",top:"true"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," component is a user interface element designed to present users with a list of options or choices. Users can select a single option from this list, typically by clicking the ",(0,o.jsx)(t.code,{children:"ChoiceBox"}),", which triggers the display of a dropdown list containing available choices. Users can also interact with the ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," with the arrow keys. When a user makes a selection, the chosen option is then displayed in the ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," button."]}),"\n",(0,o.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ChoiceBox"})," components are used for various purposes, such as selecting items from a menu, choosing from a list of categories, or picking options from predefined sets. They provide an organized and visually pleasing way for users to make selections, particularly when there are multiple options available. Common usages include:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"User Selection of Options"}),": The primary purpose of a ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," is to allow users to select a single option from a list. This is valuable in applications that require users to make choices, such as:"]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Selecting items from a list"}),"\n",(0,o.jsx)(t.li,{children:"Choosing from a list of categories"}),"\n",(0,o.jsx)(t.li,{children:"Picking options from predefined sets"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Form Inputs"}),": When designing forms that require users to input specific options, the ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," simplifies the selection process. Whether it's selecting a country, state, or any other option from a predefined list, the ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," streamlines the input process."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Filtering and Sorting"}),": ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," can be employed for filtering and sorting tasks in applications. Users can choose filter criteria or sorting preferences from a list, facilitating the organization and navigation of data."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Configuration and Settings"}),": When your application includes settings or configuration options, the ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," provides an intuitive way for users to adjust preferences. Users can pick settings from a list, making it easy to tailor the application to their needs."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," is intended for use when a preset number of options are available, and custom options should not be allowed or included. If allowing users to enter custom values is desired, use a ",(0,o.jsx)(t.a,{href:"/docs/components/list-components/combobox",children:(0,o.jsx)(t.code,{children:"ComboBox"})})," instead"]})}),"\n",(0,o.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/ChoiceBox",code:"true",suffix:"#<init>()",children:"ChoiceBox()"}),": Constructs a new ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," without a label."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/ChoiceBox",code:"true",suffix:"#<init>(java.lang.String)",children:"ChoiceBox(String label)"}),": Constructs a new ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," with the specified label."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/ChoiceBox",code:"true",suffix:"#<init>(java.lang.String,org.dwcj.component.event.ComponentEventListener)",children:"ChoiceBox(String label, ComponentEventListener< ListSelectEvent> selectListener)"}),": Constructs a new ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," with the given label and a listener to handle item selection events."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"dropdown-type",children:"Dropdown Type"}),"\n",(0,o.jsxs)(t.p,{children:["Using the ",(0,o.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/DwcSelectDropdown",code:"true",suffix:"#setDropdownType(java.lang.String)",children:"setDropdownType()"})," method will assign a value to the ",(0,o.jsx)(t.code,{children:"type"})," attribute of a ",(0,o.jsx)(t.code,{children:"ChoiceBox"}),", and a corresponding value for the ",(0,o.jsx)(t.code,{children:"data-dropdown-for"})," attribute in the dropdown of the ",(0,o.jsx)(t.code,{children:"ChoiceBox"}),". This is helpful for styling, as the dropdown is taken out of its current position in the DOM and relocated to the end of the page body when opened."]}),"\n",(0,o.jsx)(t.p,{children:"This detachment creates a situation where directly targeting the\r\ndropdown using CSS or shadow part selectors from the parent component becomes challenging, unless you make use of the dropdown type attribute."}),"\n",(0,o.jsx)(t.p,{children:"In the demo below, the Dropdown type is set and used in the CSS file to select the dropdown and change the background color."}),"\n",(0,o.jsx)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.choiceboxdemos.ChoiceBoxDropdownType",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/choiceboxdemos/ChoiceBoxDropdownType.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/choicebox/DropdownType.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/dropdown_styles.css",height:"250px"}),"\n",(0,o.jsx)(t.h2,{id:"max-row-count",children:"Max Row Count"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the number of rows displayed in the dropdown of a ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," will be increased to fit the content. However, using the ",(0,o.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/DwcSelectDropdown",code:"true",suffix:"#setMaxRowCount(int)",children:"setMaxRowCount()"})," method allows for control over how many items are displayed."]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsx)(t.p,{children:"Using a number that is less than or equal to 0 will result in unsetting this property."})}),"\n",(0,o.jsx)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.choiceboxdemos.ChoiceBoxMaxRowDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/choiceboxdemos/ChoiceBoxMaxRowDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/choicebox/MaxRow.txt",height:"250px"}),"\n",(0,o.jsx)(t.h2,{id:"opening-dimensions",children:"Opening Dimensions"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," component has methods that allow manipulation of the dropdown dimensions. The ",(0,o.jsx)(t.strong,{children:"maximum height"})," and ",(0,o.jsx)(t.strong,{children:"minimum width"})," of the dropdown can be set using the ",(0,o.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/DwcSelectDropdown",code:"true",suffix:"#setOpenHeight(int)",children:"setOpenHeight()"})," and ",(0,o.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/DwcSelectDropdown",code:"true",suffix:"#setOpenWidth(int)",children:"setOpenWidth()"})," methods, respectively."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Passing a ",(0,o.jsx)(t.code,{children:"String"})," value to either of these methods will allow for ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units",children:"any valid CSS unit"})," to be applied, such as pixels, viewport dimensions, or other valid rules. Passing an ",(0,o.jsx)(t.code,{children:"int"})," will set the value passed in pixels."]})}),"\n",(0,o.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," class provides methods to add and remove event listeners for the following events, as well as events common to all list components:"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Events"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:(0,o.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/event/ListOpenEvent",code:"true",children:"ListOpenEvent"})}),(0,o.jsx)(t.td,{children:"An event which is fired when a list dropdown is opened."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:(0,o.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/event/ListCloseEvent",code:"true",children:"ListCloseEvent"})}),(0,o.jsx)(t.td,{children:"An event which is fired when a list dropdown is closed."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:(0,o.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/event/ListClickEvent",code:"true",children:"ListClickEvent"})}),(0,o.jsx)(t.td,{children:"This event is triggered when the user clicks an item from a List-based component."})]})]})]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["For a list of additional events supported by the ",(0,o.jsx)(t.code,{children:"ChoiceBox"}),", see ",(0,o.jsx)(t.a,{href:"/docs/components/list-components/lists#shared-events",children:"this section"})," which outlines shared events amongst list components."]})}),"\n",(0,o.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,o.jsx)(t.h3,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,o.jsxs)(t.p,{children:["These are the various parts of the ",(0,o.jsx)(t.a,{href:"../../glossary#shadow-dom",children:"shadow DOM"})," for the ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," component, which will be required when styling via CSS is desired."]}),"\n",(0,o.jsx)(r.Z,{tag:n(5731).Z,table:"parts",exclusions:""}),"\n",(0,o.jsx)(t.h3,{id:"css-properties",children:"CSS Properties"}),"\n",(0,o.jsx)(t.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,o.jsx)(r.Z,{tag:n(5731).Z,exclusions:"",table:"properties"}),"\n",(0,o.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected Attributes"}),"\n",(0,o.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,o.jsx)(r.Z,{tag:n(5731).Z,table:"reflects",exclusions:""}),"\n",(0,o.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,o.jsx)(r.Z,{tag:"bbj-list-button",table:"dependencies"}),"\n",(0,o.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,o.jsxs)(t.p,{children:["To ensure an optimal user experience when using the ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," component, consider the following best practices:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Clear and Limited Options"}),": Keep the list of choices concise where possible, and relevant to the user's task. A ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," is ideal for presenting a clear list of options."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"User-Friendly Labels"}),": Ensure that the displayed labels for each option are user-friendly and self-explanatory. Make sure users can easily understand the purpose of each choice."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Default Selection"}),": Set a default selection when the ChoiceBox is initially displayed. This ensures a pre-selected option, reducing the number of interactions required to make a choice."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"ChoiceBox vs. Other List Components"}),": A ",(0,o.jsx)(t.code,{children:"ChoiceBox"})," should be used over other List components in the following situations:"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Multiple Selection is not needed or required, and all items do not need to be displayed at once."}),"\n",(0,o.jsx)(t.li,{children:"A selection of predefined choices is desired, preventing users from entering custom or unexpected data."}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},6031:(e,t,n)=>{var o=n(4836);t.Z=void 0;var i=o(n(4938)),s=n(5893),r=(0,i.default)((0,s.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=r},2610:(e,t,n)=>{var o=n(4836);t.Z=void 0;var i=o(n(4938)),s=n(5893),r=(0,i.default)((0,s.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=r},5162:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var o=n(6010);const i={tabItem:"tabItem_Ymn6"};var s=n(5893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var o=n(7294),i=n(6010),s=n(2466),r=n(6550),a=n(469),l=n(1980),c=n(7392),d=n(12);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:i}}=e;return{value:t,label:n,attributes:o,default:i}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=u(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[c,h]=m({queryString:n,groupId:i}),[x,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,d.Nk)(n);return[i,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),g=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,s]),tabValues:s}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function f(e){let{className:t,block:n,selectedValue:o,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=a[n].value;i!==o&&(c(t),r(i))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,i.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function A(e){const t=x(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,v.jsx)(A,{...e,children:h(e.children)},String(t))}},6521:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var o=n(917),i=n(5944);function s(e){let{url:t,mobile:n}=e;const s=o.iv`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 4rem 0;
        /* width: 110%; */
        margin-left: -5%;
    `,r=o.iv`
        position: relative;
        width : 100%;
        max-width: ${"true"==n?"375px":"100%"};
        height: ${"true"==n?"700px":"600px"};
        border-radius: 32px;
        overflow: hidden;
        box-shadow: 0 0 0 10px black, 0 3px 22px black;
        outline: thin solid black;
    `,a=o.iv`
        width: 100%;
        height: 100%;
        background: var(--bbj-surface-3);
    `;return(0,i.tZ)("div",{css:s,children:(0,i.tZ)("div",{css:r,children:(0,i.tZ)("iframe",{src:t,css:a,loading:"lazy"})})})}},6957:(e,t,n)=>{n.d(t,{Z:()=>b});var o=n(7294),i=n(917),s=n(4866),r=n(5162),a=n(4673),l=n(1750);const c="data:image/png;base64,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",d=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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";var u=n(2610),p=n(5944);function m(e){let{collapse:t,setCollapse:n}=e;const o=i.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
    `,s=i.iv`
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
  `,r=i.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,p.tZ)("div",{css:o,children:(0,p.tZ)("button",{css:s,onClick:()=>{n(!t)},children:t?(0,p.tZ)("img",{css:r,src:d,className:"icon-tabler-arrow-bar-up"}):(0,p.tZ)("img",{css:r,src:c,className:"icon-tabler-arrow-bar-down"})})})}function x(e){let{url:t}=e;const n=i.iv`
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

      
    `,o=i.iv`
      /* filter: invert(var(--inversion-percentage)); */ //UNCOMMENT WHEN DMEOS CHANGE COLOR
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,p.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,p.tZ)("img",{css:o,src:h})})}function b(e){let{path:t,javaC:n,javaE:c,cssURL:d,javaHighlight:h,height:b,frame:g,tabs:v}=e;const[f,w]=(0,o.useState)(""),[A,j]=(0,o.useState)(""),[y,C]=(0,o.useState)(""),[B,D]=(0,o.useState)(!(!n||!c)),[S,Z]=(0,o.useState)(!1),[k,E]=(0,o.useState)({}),[L,M]=(0,o.useState)(!1),[O,T]=(0,o.useState)(0),[N,z]=(0,o.useState)(0),[H,V]=(0,o.useState)(25),[F,J]=(0,o.useState)(25),[X,G]=(0,o.useState)(0),[Y,P]=(0,o.useState)(!1),U=(0,o.useRef)(null),W=(0,o.useRef)(null);(0,o.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const t=new URL(c).pathname.split("/"),n=t[t.length-1];E((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{w(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{C(e);const t=new URL(d).pathname.split("/"),n=t[t.length-1];E((e=>({...e,cssFile:n})))})),G(U.current?U.current.offsetWidth:0)}),[]);const q=()=>{M(!1)},R=e=>{if(L){const t=e.clientX-O;N+t>X/3&&(U.current.style.width=`${N+t}px`,W.current.style.right=(H-t<25?25:H-t)+"px",J(H-t<25?25:H-t))}},I=i.iv`
		display: flex;
    flex-direction: column;
		width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==g?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
    `,K=i.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,Q=i.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${b||"100%"};
    pointer-events: ${L?"none":"auto"};
  `,_=i.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${S&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,$=i.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ee=i.iv`
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
    `,te=i.iv`
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
  `,ne=i.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,p.BX)("div",{css:I,onMouseUp:q,onMouseLeave:q,onMouseMove:R,children:["hidden"!=g?(0,p.BX)("div",{onMouseEnter:()=>{Z(!0)},onMouseLeave:()=>Z(!1),css:K,children:[(0,p.tZ)("iframe",{onMouseUp:q,loading:"lazy",src:t,css:Q,ref:U,onMouseMove:R}),(0,p.tZ)("div",{css:_,ref:W,children:(0,p.tZ)(x,{url:t})}),(0,p.tZ)("div",{css:$,onMouseDown:e=>{e.preventDefault(),M(!0),T(e.clientX),z(U.current?U.current.offsetWidth:0),V(F)},children:(0,p.tZ)(u.Z,{})})]}):null,(0,p.BX)(a.Z,{css:ee,summary:(0,p.tZ)("summary",{onClick:()=>P(!Y),children:Y?"Hide Code":"Show Code"}),children:[n&&c?(0,p.tZ)(m,{collapse:B,setCollapse:D}):null,d?(0,p.BX)(s.Z,{css:te,children:[(0,p.tZ)(r.Z,{value:v?v[0]:"Java",label:v?v[0]:k.javaFile,default:!0,children:(0,p.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:B?f:A})}),(0,p.tZ)(r.Z,{value:v?v[1]:"CSS",label:v?v[1]:k.cssFile,children:(0,p.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:y})})]}):(0,p.tZ)(s.Z,{css:te,children:(0,p.tZ)(r.Z,{value:v?v[0]:"Java",label:v?v[0]:k.javaFile,default:!0,children:(0,p.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:B?f:A})})})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(7294),i=n(917),s=n(8230),r=n(4387),a=n(6031);var l=n(5944);function c(e){let{type:t,location:n,top:c,children:d,code:h,suffix:u}=e;const[p,m]=(0,o.useState)("");(0,o.useEffect)((()=>{u||(u=""),m("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+n+".html"+u)}),[]);const x=i.iv`
    display: inline;

    ${c&&i.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=i.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:x,children:(0,l.tZ)(s.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(r.Z,{css:b,label:"Java API",component:"a",href:p,icon:(0,l.tZ)(a.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!h&&(0,l.tZ)("div",{css:x,children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})}),"true"!==c&&h&&(0,l.tZ)("div",{css:x,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var o=n(8397),i=n(5893);function s(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Z,{...e})})}},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog","JO":"bbj-icon"}')}}]);
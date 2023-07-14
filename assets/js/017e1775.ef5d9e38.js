"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[6929],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>A});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),l=a(6775),s=a(1980),c=a(7392),d=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:n}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),w=(()=>{const e=s??p;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{w&&l(w)}),[w]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),v(e)}),[c,v,o]),tabValues:o}}var w=a(2389);const g="tabList__CuJ",b="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==l&&(p(t),s(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:u},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function A(e){const t=(0,w.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},6521:(e,t,a)=>{a.d(t,{Z:()=>r});a(7294);var n=a(2863);function r(e){let{url:t,mobile:a}=e;const r=n.iv`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 4rem 0;
        width: 100%;
    `,o=n.iv`
        position: relative;
        width : 100%;
        max-width: ${"true"==a?"375px":"100%"};
        height: ${"true"==a?"700px":"600px"};
        border-radius: 32px;
        overflow: hidden;
        box-shadow: 0 0 0 10px black, 0 3px 22px black;
        outline: thin solid black;
    `,i=n.iv`
        width: 100%;
        height: 100%;
        background: var(--bbj-surface-3);
    `;return(0,n.tZ)("div",{css:r},(0,n.tZ)("div",{css:o},(0,n.tZ)("iframe",{src:t,css:i,loading:"lazy"})))}},2395:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),r=a(2863),o=a(4866),i=a(5162),l=a(4673),s=a(4633);const c=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function d(e){let{collapse:t,setCollapse:a}=e;const n=r.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,o=r.iv`
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
  
  `,i=r.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,r.tZ)("div",{css:n},(0,r.tZ)("button",{css:o,onClick:()=>{a(!t)}},t?(0,r.tZ)("img",{css:i,src:c,className:"icon-tabler-arrow-bar-up"}):(0,r.tZ)("img",{css:i,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function p(e){let{path:t,javaC:a,javaE:c,cssURL:p,javaHighlight:u,height:h,frame:m}=e;const[v,w]=(0,n.useState)(""),[g,b]=(0,n.useState)(""),[f,y]=(0,n.useState)(""),[k,A]=(0,n.useState)(!0),x=r.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==m?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,D=r.iv`
    min-height: 100px;
    height: 100%;
    height: ${h};
  `,E=r.iv`
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

  `;return c&&fetch(c).then((e=>e.text())).then((e=>{b(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{w(e)})),p&&fetch(p).then((e=>e.text())).then((e=>{y(e)})),(0,r.tZ)("div",{css:x},"hidden"!=m?(0,r.tZ)("iframe",{loading:"lazy",src:t,css:D}):null,(0,r.tZ)(l.Z,{css:E,summary:(0,r.tZ)("summary",null,"Show Code")},a&&c?(0,r.tZ)(d,{collapse:k,setCollapse:A}):null,p?(0,r.tZ)(o.Z,null,(0,r.tZ)(i.Z,{value:"Java",label:"Java",default:!0},(0,r.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u},k?v:g)),(0,r.tZ)(i.Z,{value:"CSS",label:"CSS"},(0,r.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},f))):(0,r.tZ)(o.Z,null,(0,r.tZ)(i.Z,{value:"Java",label:"Java",default:!0},(0,r.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u},k?v:g)))))}},3273:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(2863);let o=null,i=null;const l={getLatestTag:async function(){return o&&i&&Date.now()-i<36e5?o:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return o=t[0].name,i=Date.now(),o}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function s(e){let{type:t,location:a}=e;const[o,i]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{try{const e=await l.getLatestTag();i("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+a+".html")}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const s=r.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,c=r.iv`
    color: gray;
  `;return(0,r.tZ)("div",{css:s},(0,r.tZ)("p",{css:c},"API:\xa0"),(0,r.tZ)("b",null,(0,r.tZ)("a",{href:o,target:"_blank"},"Java")))}},7796:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){var t,a;const[r,o]=(0,n.useState)(null);if((0,n.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const a=t.components.find((t=>t.tag===e.tag));o(a)}))}),[]),!r)return n.createElement("div",null,"Loading...");const i=null==(t=r.docsTags)?void 0:t.filter((e=>"part"===e.name)),l=null==(a=r.styles)?void 0:a.map((e=>({name:e.name,description:e.docs})));return n.createElement(n.Fragment,null,"parts"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==i?void 0:i.map((e=>{const[t,a]=e.text.split(" - ");return n.createElement("tr",{key:e.id},n.createElement("td",null,t),n.createElement("td",null,a))}))))),"properties"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==l?void 0:l.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,e.name),n.createElement("td",null,e.description))))))),"properties"!=e.table&&"parts"!=e.table&&n.createElement(n.Fragment,null,n.createElement("h4",null,"Shadow Parts"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==i?void 0:i.map((e=>{const[t,a]=e.text.split(" - ");return n.createElement("tr",{key:e.id},n.createElement("td",null,t),n.createElement("td",null,a))})))),n.createElement("h4",null,"CSS Properties"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==l?void 0:l.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,e.name),n.createElement("td",null,e.description))))))))}},7714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var n=a(7462),r=(a(7294),a(3905)),o=a(2395),i=a(7796),l=a(6521),s=a(3273);const c={sidebar_position:26,title:"Drawer"},d=void 0,p={unversionedId:"components/drawer",id:"components/drawer",title:"Drawer",description:"The drawer is a container that slides into the viewport to expose additional options and information. Multiple drawers can be created in an application, and they will be stacked above each other.",source:"@site/docs/components/drawer.md",sourceDirName:"components",slug:"/components/drawer",permalink:"/docs/components/drawer",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/drawer.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26,title:"Drawer"},sidebar:"tutorialSidebar",previous:{title:"Dialog",permalink:"/docs/components/dialog"},next:{title:"Field",permalink:"/docs/components/fields/"}},u={},h=[{value:"Constructors",id:"constructors",level:3},{value:"Autofocus",id:"autofocus",level:3},{value:"Label",id:"label",level:3},{value:"Size",id:"size",level:3},{value:"Max Size",id:"max-size",level:3},{value:"Placement",id:"placement",level:3},{value:"Events",id:"events",level:2},{value:"Drawer Open",id:"drawer-open",level:3},{value:"Drawer Close",id:"drawer-close",level:3},{value:"Toggling a Drawer Open or Closed",id:"toggling-a-drawer-open-or-closed",level:3},{value:"Removing an Event",id:"removing-an-event",level:3},{value:"Example Usage",id:"example-usage",level:2},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:2}],m={toc:h};function v(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{type:"engine",location:"org/dwcj/component/drawer/Drawer",mdxType:"JavadocLink"}),(0,r.kt)("p",null,"The drawer is a container that slides into the viewport to expose additional options and information. Multiple drawers can be created in an application, and they will be stacked above each other."),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("p",null,"The Drawer component contains a single default constructor which will create a new instance of the Drawer class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Drawer newDrawer = new Drawer()\n")),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.drawerdemos.DrawerDemo",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/drawerdemos/DrawerDemo.java",height:"600px",mdxType:"ComponentDemo"}),(0,r.kt)("p",null,"Various properties exist that allow for the customization of various attributes of the Drawer component. Below are those properties with examples for their modification."),(0,r.kt)("h3",{id:"autofocus"},"Autofocus"),(0,r.kt)("p",null,"The Auto-Focus property is designed to enhance accessibility and usability by automatically focusing on the first item within a drawer when it is opened. This feature eliminates the need for users to manually navigate to the desired item, saving time and effort."),(0,r.kt)("p",null,"When the drawer is triggered to open, either through an event, by default or any other interaction, the user's focus is directed to the first item within the drawer. This first item could be a button, a link, a menu option, or any other focusable element."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By automatically focusing on the first item, the developer ensures that users can immediately engage with the most relevant or frequently used option without having to tab or scroll through the entire drawer. This behavior streamlines the user experience and promotes efficient navigation within the UI.")),(0,r.kt)("p",null,"This property can also be particularly beneficial for individuals who rely on keyboard navigation or assistive technologies such as screen readers. It provides a clear starting point within the drawer and allows users to access the desired functionality without unnecessary manual input."),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.drawerdemos.DrawerAutoFocus",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/drawerdemos/DrawerAutoFocus.java",height:"600px",mdxType:"ComponentDemo"}),(0,r.kt)("h3",{id:"label"},"Label"),(0,r.kt)("p",null,"The Drawer Label property is a feature designed to enhance accessibility and provide descriptive context for a drawer within a user interface. This property allows developers to assign a label to a drawer, primarily for accessibility purposes, ensuring that screen readers and other assistive technologies can accurately convey the drawer's purpose and content to users."),(0,r.kt)("p",null,"When the Drawer Label property is utilized, the assigned label becomes an integral part of the drawer's accessibility infrastructure. It enables users who rely on assistive technologies to understand the drawer's function and navigate through the interface more effectively."),(0,r.kt)("p",null,"By providing a label for the drawer, developers ensure that screen readers announce the purpose of the drawer to visually impaired users. This information empowers individuals to make informed decisions about interacting with the drawer, as they can understand its content and relevance within the broader user interface."),(0,r.kt)("p",null,"The Label property can be customized to suit the specific context and design requirements of the application. Developers have the flexibility to provide concise and descriptive labels that accurately represent the drawer's content or functionality."),(0,r.kt)("h3",{id:"size"},"Size"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property of the Drawer component enables developers to control and specify the dimensions of the drawer within the user interface. This property allows for fine-tuning the size of the drawer, ensuring it aligns with the desired layout and design requirements."),(0,r.kt)("p",null,"When utilizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property, developers have the flexibility to define the width and height of the drawer based on their specific needs. Unlike the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSize")," property, which sets a maximum limit, the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property provides explicit control over the actual size of the drawer."),(0,r.kt)("p",null,"Developers can customize the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property based on the available screen real estate, the amount of content to be displayed, and the overall design aesthetic. This level of control allows for creating visually balanced and functional interfaces."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property can be defined using various units such as pixels, percentages, or other appropriate CSS measurement values. This versatility ensures that the drawer's size can be adjusted precisely to fit different screen sizes, resolutions, and device types."),(0,r.kt)("p",null,"By utilizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property effectively, developers can create responsive interfaces that adapt to different viewports and screen orientations. For instance, a smaller size can be chosen for mobile devices to optimize space utilization, while larger sizes can be used for desktop displays to take advantage of the available screen area."),(0,r.kt)("h3",{id:"max-size"},"Max Size"),(0,r.kt)("p",null,"The Drawer max size property is a versatile feature designed to control the maximum width or height of a drawer within a user interface, based on the specified placement. This property allows developers to define the maximum size of the drawer, ensuring optimal presentation and layout while accommodating varying screen sizes and device resolutions."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To set the size of the drawer, modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property - ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSize")," is used to ensure a drawer never grows larger than a certain value.")),(0,r.kt)("p",null,"When utilizing the Drawer max size property, developers can set a maximum size value expressed as pixels, percentages, or other appropriate CSS measurement values. This value represents the maximum width when the drawer is placed on the left or right side of the interface or the maximum height when placed on the top or bottom."),(0,r.kt)("p",null,"By defining a maximum size for the drawer, developers maintain control over its dimensions and prevent it from becoming excessively wide or tall, which could hinder the overall user experience. The CSS measurement approach allows for responsiveness, adapting the size of the drawer dynamically in relation to the available screen space."),(0,r.kt)("p",null,"The Drawer's max size property is particularly beneficial when dealing with responsive and adaptive designs. It ensures that the drawer remains visually pleasing and functional across different devices, screen orientations, and viewports."),(0,r.kt)("p",null,"When the drawer's content exceeds the defined maximum size, developers can implement appropriate techniques to handle overflow, such as scrolling within the drawer or utilizing additional UI patterns like tabs or accordions. This helps maintain a clean and organized interface while accommodating larger amounts of content."),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.drawerdemos.DrawerSize",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/drawerdemos/DrawerSize.java",height:"600px",mdxType:"ComponentDemo"}),(0,r.kt)("h3",{id:"placement"},"Placement"),(0,r.kt)("p",null,"The placement property of the Drawer UI Component allows developers to specify the position and alignment of the drawer within the viewport. This property offers a range of enum values that provide flexibility in determining where the drawer appears in relation to the main content."),(0,r.kt)("p",null,"The available enum values for the placement property are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"TOP"),": This value places the drawer at the top of the viewport, allowing it to occupy the uppermost region.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"TOP_CENTER"),": With this value, the drawer is positioned at the center of the top portion of the viewport. It is aligned horizontally in the middle, creating a balanced layout.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BOTTOM"),": When using this value, the drawer is situated at the bottom of the viewport, appearing below the main content.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BOTTOM_CENTER"),": This value centers the drawer horizontally at the bottom of the viewport. It provides a visually balanced composition.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LEFT"),": Selecting this value causes the drawer to be positioned on the left side of the viewport, adjacent to the main content.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RIGHT"),": By using this value, the drawer is placed on the right side of the viewport, maintaining a close proximity to the main content"))),(0,r.kt)("p",null,"The placement property allows developers to choose the most appropriate position for the drawer based on the specific design and user experience requirements. The enum values offer a variety of placement options to accommodate different interface layouts and visual hierarchies."),(0,r.kt)("p",null,"By leveraging the placement property, developers can create intuitive and efficient user interfaces. For example, placing the drawer on the left or right side allows for quick access to additional functionalities or navigation options, while top or bottom placements are well-suited for contextual information or supplementary content."),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.drawerdemos.DrawerPlacement",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/drawerdemos/DrawerPlacement.java",height:"600px",mdxType:"ComponentDemo"}),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"There are two supported events that can be used with the Drawer component, open and close events. These events are essential components of the Drawer component, providing developers with the means to respond and react to the opening and closing actions of the drawer within the user interface."),(0,r.kt)("h3",{id:"drawer-open"},"Drawer Open"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"addOpenListener()")," method to add an open event to your Drawer component."),(0,r.kt)("p",null,"The Drawer Open Event is triggered when the drawer is initiated to open, either through user interaction or programmatically. This event allows developers to execute specific actions, animations, or updates that should occur when the drawer becomes visible and accessible to the user. To add an open event listener, use the appropriate method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"myDrawer.addOpenListener( e -> {\n  //Executed when the event fires\n});\n")),(0,r.kt)("p",null,"By leveraging the Drawer Open Event, developers can synchronize the opening of the drawer with other UI elements, trigger transitions or animations, and update the interface to reflect the change in state. This event can also be used to initiate fetching data, loading content, or any other necessary operations related to the appearance of the drawer."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onOpen() method is similarly available for use, and simple calls the addOpenListener()")," method.")),(0,r.kt)("h3",{id:"drawer-close"},"Drawer Close"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCloseListener()")," method to add an open event to your Drawer component."),(0,r.kt)("p",null,"The Drawer Close Event is triggered when the drawer is initiated to close. This event provides developers with the opportunity to perform actions or updates that should take place when the drawer is no longer visible or accessible to the user. To add a close event listener, use the appropriate method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"myDrawer.addCloseListener( e -> {\n  //Executed when the event fires\n});\n")),(0,r.kt)("p",null,"With the Drawer Close Event, developers can synchronize the closing of the drawer with other UI elements, initiate animations or transitions, and update the interface to reflect the change in state. Additionally, this event can be utilized to save user preferences, persist data, or perform any cleanup operations associated with the closure of the drawer."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onClose()")," method is similarly available for use, and simple calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"addOpenListener()")," method.")),(0,r.kt)("h3",{id:"toggling-a-drawer-open-or-closed"},"Toggling a Drawer Open or Closed"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"toggle()")," method allows developers to control the opening and closing behavior of the drawer based on a boolean value. This function provides a programmatic way to toggle the visibility of the drawer. This can be shorthanded by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"open()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"close()")," methods, which call the ",(0,r.kt)("inlineCode",{parentName:"p"},"toggle()")," method with the appropriate boolean argument."),(0,r.kt)("h3",{id:"removing-an-event"},"Removing an Event"),(0,r.kt)("p",null,"To remove either an open or close event from the Drawer, simply use the appropriate remove event listener method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"myDrawer.removeOpenListener(listener);\n")),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("p",null,'The Drawer component can be used in many different situations, such as by providing a navigation menu that can be toggled, a panel that displays supplementary or contexual information, or to optimize usage on a mobile device. The following example will show a mobile application that uses the DWCJ\'s AppLayout component, and displays a "Welcome Popup" drawer at the bottom when first loaded. Additionally, a navigational Drawer component can be toggled in the application by clicking on the hamburger menu.'),(0,r.kt)(l.Z,{url:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.drawerdemos.DrawerWelcome",mobile:"true",mdxType:"AppLayoutViewer"}),(0,r.kt)(o.Z,{frame:"hidden",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/drawerdemos/DrawerWelcome.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/drawerstyles/drawer_welcome.css",mdxType:"ComponentDemo"}),(0,r.kt)("h2",{id:"parts-and-css-properties"},"Parts and CSS Properties"),(0,r.kt)(i.Z,{tag:a(5731).dy,mdxType:"TableBuilder"}))}v.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog"}')}}]);
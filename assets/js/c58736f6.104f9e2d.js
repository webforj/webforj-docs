"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1517],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7462),l=a(7294),o=a(6010),r=a(2466),i=a(6775),s=a(1980),c=a(7392),d=a(12);function u(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[r,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??u;return p({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var b=a(2389);const v="tabList__CuJ",f="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==i&&(u(t),s(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:m},r,{className:(0,o.Z)("tabs__item",f,null==r?void 0:r.className,{"tabs__item--active":i===t})}),a??t)})))}function A(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",v)},l.createElement(k,(0,n.Z)({},e,t)),l.createElement(A,(0,n.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return l.createElement(w,(0,n.Z)({key:String(t)},e))}},2395:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),l=a(2863),o=a(4866),r=a(5162),i=a(4673),s=a(8488);const c=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function d(e){let{collapse:t,setCollapse:a}=e;const n=l.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,o=l.iv`
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
  
  `,r=l.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,l.tZ)("div",{css:n},(0,l.tZ)("button",{css:o,onClick:()=>{a(!t)}},t?(0,l.tZ)("img",{css:r,src:c,className:"icon-tabler-arrow-bar-up"}):(0,l.tZ)("img",{css:r,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function u(e){let{path:t,javaC:a,javaE:c,cssURL:u,javaHighlight:m,height:p,frame:h}=e;const[g,b]=(0,n.useState)(""),[v,f]=(0,n.useState)(""),[k,A]=(0,n.useState)(""),[w,E]=(0,n.useState)(!0),y=l.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==h?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,D=l.iv`
    min-height: 100px;
    height: 100%;
    height: ${p};
  `,x=l.iv`
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

  `;return c&&fetch(c).then((e=>e.text())).then((e=>{f(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{b(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{A(e)})),(0,l.tZ)("div",{css:y},"hidden"!=h?(0,l.tZ)("iframe",{loading:"lazy",src:t,css:D}):null,(0,l.tZ)(i.Z,{css:x,summary:(0,l.tZ)("summary",null,"Show Code")},a&&c?(0,l.tZ)(d,{collapse:w,setCollapse:E}):null,u?(0,l.tZ)(o.Z,null,(0,l.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,l.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},w?g:v)),(0,l.tZ)(r.Z,{value:"CSS",label:"CSS"},(0,l.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},k))):(0,l.tZ)(o.Z,null,(0,l.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,l.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},w?g:v)))))}},3273:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(2863);let o=null,r=null;const i={getLatestTag:async function(){return o&&r&&Date.now()-r<36e5?o:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return o=t[0].name,r=Date.now(),o}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function s(e){let{type:t,location:a}=e;const[o,r]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{try{const e=await i.getLatestTag();r("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+a+".html")}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const s=l.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,c=l.iv`
    color: gray;
  `;return(0,l.tZ)("div",{css:s},(0,l.tZ)("p",{css:c},"API:\xa0"),(0,l.tZ)("b",null,(0,l.tZ)("a",{href:o,target:"_blank"},"Java")))}},7796:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(e){var t,a,l;const[o,r]=(0,n.useState)(null);if((0,n.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const a=t.components.find((t=>t.tag===e.tag));r(a)}))}),[]),!o)return n.createElement("div",null,"Loading...");const i=null==(t=o.docsTags)?void 0:t.filter((e=>"part"===e.name)),s=null==(a=o.styles)?void 0:a.map((e=>({name:e.name,description:e.docs}))),c=null==(l=o.props)?void 0:l.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type})));return n.createElement(n.Fragment,null,"parts"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==i?void 0:i.map((e=>{const[t,a]=e.text.split(" - ");return n.createElement("tr",{key:e.id},n.createElement("td",null,n.createElement("code",null,t)),n.createElement("td",null,a))}))))),"properties"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==s?void 0:s.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,e.description))))))),"reflects"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Attribute"),n.createElement("th",null,"Description"),n.createElement("th",null,"Type"))),n.createElement("tbody",null,null==c?void 0:c.map((e=>null!=e.attr&&"&#x2714;"==e.display&&n.createElement("tr",{key:e.attr},n.createElement("td",null,n.createElement("code",null,e.attr)),n.createElement("td",null,e.desc),n.createElement("td",null,e.type))))))),"properties"!=e.table&&"parts"!=e.table&&"reflects"!=e.table&&n.createElement(n.Fragment,null,n.createElement("h4",null,"Shadow Parts"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==i?void 0:i.map((e=>{const[t,a]=e.text.split(" - ");return n.createElement("tr",{key:e.id},n.createElement("td",null,n.createElement("code",null,t)),n.createElement("td",null,a))})))),n.createElement("h4",null,"CSS Properties"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==s?void 0:s.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,e.description)))))),n.createElement("h4",null,"Reflected Attributes"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Attribute"),n.createElement("th",null,"Description"),n.createElement("th",null,"Type"))),n.createElement("tbody",null,null==c?void 0:c.map((e=>null!=e.attr&&"&#x2714;"==e.display&&n.createElement("tr",{key:e.attr},n.createElement("td",null,n.createElement("code",null,e.attr)),n.createElement("td",null,e.desc),n.createElement("td",null,e.type))))))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(8397);function o(e){return n.createElement(n.Fragment,null,n.createElement(l.Z,e))}},7338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),o=a(2395),r=a(7796),i=a(3273);const s={sidebar_position:25,title:"Dialog"},c=void 0,d={unversionedId:"components/dialog",id:"components/dialog",title:"Dialog",description:"The DWCJ's dialog component is built to allow a developer to quickly and easily display a dialog on their application, for instances such as a login menu or information box.",source:"@site/docs/components/dialog.md",sourceDirName:"components",slug:"/components/dialog",permalink:"/docs/components/dialog",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/dialog.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,title:"Dialog"},sidebar:"tutorialSidebar",previous:{title:"ComboBox",permalink:"/docs/components/combo-box"},next:{title:"Drawer",permalink:"/docs/components/drawer"}},u={},m=[{value:"Constructors",id:"constructors",level:3},{value:"Backdrop and Blur",id:"backdrop-and-blur",level:3},{value:"Closing the Dialog",id:"closing-the-dialog",level:3},{value:"Auto-Focus",id:"auto-focus",level:3},{value:"Draggable",id:"draggable",level:3},{value:"Snap to Edge",id:"snap-to-edge",level:4},{value:"Positioning",id:"positioning",level:3},{value:"Vertical Alignment",id:"vertical-alignment",level:4},{value:"Full Screen and Breakpoints",id:"full-screen-and-breakpoints",level:4},{value:"Events",id:"events",level:2},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:2}],p={toc:m};function h(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,{type:"engine",location:"org/dwcj/component/dialog/Dialog",mdxType:"JavadocLink"}),(0,l.kt)("p",null,"The DWCJ's dialog component is built to allow a developer to quickly and easily display a dialog on their application, for instances such as a login menu or information box."),(0,l.kt)("p",null,"The component is built with three sections, each of which are ",(0,l.kt)("inlineCode",{parentName:"p"},"Div")," components: the header, the content, and the footer."),(0,l.kt)("h3",{id:"constructors"},"Constructors"),(0,l.kt)("p",null,"The Dialog can be constructed using the default ",(0,l.kt)("inlineCode",{parentName:"p"},"Dialog()")," constructor. Once the object has been instantiated, call the ",(0,l.kt)("inlineCode",{parentName:"p"},"show()")," method on the object itself to display the dialog."),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogSections",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Sections.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogSections.java",height:"225px",mdxType:"ComponentDemo"}),(0,l.kt)("h3",{id:"backdrop-and-blur"},"Backdrop and Blur"),(0,l.kt)("p",null,"By enabling the backdrop attribute of the DWCJ's dialog component, a backdrop will be displayed behind the dialog. Additionally, when enabled, the dialog's blurred attribute will blur the backdrop of the dialog."),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogBackdropBlur",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Blur.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogBackdropBlur.java",height:"300px",mdxType:"ComponentDemo"}),(0,l.kt)("h3",{id:"closing-the-dialog"},"Closing the Dialog"),(0,l.kt)("p",null,"The dialog supports multiple cancellation methods for closure of the component: hitting the ",(0,l.kt)("inlineCode",{parentName:"p"},"ESC")," key, clicking outside of the dialog, or using the ",(0,l.kt)("inlineCode",{parentName:"p"},"hide()")," method. The first two properties are customizable via their respective methods:\n",(0,l.kt)("inlineCode",{parentName:"p"},"setCancelOnEscKey()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"setCancelOnOutsideClick()"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"hide()")," method allows for the dialog to be closed programmatically, such as by clicking a button on the dialog, for example after saving data. A method to quickly enable or disable users' ability to close the dialog, ",(0,l.kt)("inlineCode",{parentName:"p"},"setClosable()")," will prevent or allow both escape and click closure of the dialog."),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogClose",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Close.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogClose.java",height:"350px",mdxType:"ComponentDemo"}),(0,l.kt)("h3",{id:"auto-focus"},"Auto-Focus"),(0,l.kt)("p",null,"When enabled, auto-focus will automatically give focus to the first element within the dialog that can be focused. This is useful in helping to direct the attention of users, and is customizable via the ",(0,l.kt)("inlineCode",{parentName:"p"},"setAutoFocus()")," method."),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogAutoFocus",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/AutoFocus.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogAutoFocus.java",height:"350px",mdxType:"ComponentDemo"}),(0,l.kt)("h3",{id:"draggable"},"Draggable"),(0,l.kt)("p",null,"The dialog has built in functionality to be draggable, allowing the user to relocate the dialog window by clicking and dragging. The position of the dialog can be manipulated from any of the fields within it: the header, content or footer."),(0,l.kt)("h4",{id:"snap-to-edge"},"Snap to Edge"),(0,l.kt)("p",null,"It is also possible to calibrate this behavior to snap to the edge of the screen, meaning the dialog will automatically align itself with the edge of the display when released from its drag and drop date. Snapping can be changed via the ",(0,l.kt)("inlineCode",{parentName:"p"},"setSnapToEdge()")," method. The ",(0,l.kt)("inlineCode",{parentName:"p"},"setSnapThreshold()")," takes a number of pixels, which will set how far the dialog should be from the sides of the screen before it will automatically snap to the edges.  "),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogDraggable",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Draggable.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogDraggable.java",height:"350px",mdxType:"ComponentDemo"}),(0,l.kt)("h3",{id:"positioning"},"Positioning"),(0,l.kt)("p",null,"The dialog's position can be manipulated using the built-in ",(0,l.kt)("inlineCode",{parentName:"p"},"setPosx()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"setPosy()")," methods. These methods take a string argument which can represent any applicable CSS unit of length, such as pixels or view height/width. A list of these measurements ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages"},"can be found at this link"),"."),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogPositioning",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Positioning.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogPositioning.java",height:"350px",mdxType:"ComponentDemo"}),(0,l.kt)("h4",{id:"vertical-alignment"},"Vertical Alignment"),(0,l.kt)("p",null,"In addition to manual assignment of a dialog's X and Y position, it is possible to use the dialog's built-in enum class to align the dialog. There are three possible values, ",(0,l.kt)("inlineCode",{parentName:"p"},"TOP"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"CENTER")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"BOTTOM"),", each of which can be used with the ",(0,l.kt)("inlineCode",{parentName:"p"},"setAlignment()")," method. "),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogAlignments",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Alignments.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogAlignments.java",height:"550px",mdxType:"ComponentDemo"}),(0,l.kt)("h4",{id:"full-screen-and-breakpoints"},"Full Screen and Breakpoints"),(0,l.kt)("p",null,"The dialog can be set to enter full screen mode. When full screen is enabled, the dialog cannot be moved or positioned. This mode can be manipulated with the breakpoint attribute of the dialog. The breakpoint is a media query which components when the dialog will automatically flip to full screen mode. When the query matches, the dialog changes to full screen - otherwise it is positioned."),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Dialog")," class provides methods to add and remove event listeners for the following events:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DialogOpenEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DialogCloseEvent"))),(0,l.kt)("p",null,"To add an event listener, use the appropriate method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"myDialog.addOpenListener( e -> {\n  //Executed when the event fires\n});\n")),(0,l.kt)("p",null,"Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the on prefix followed by the event, such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"myDialog.onOpen( e -> {\n  //Executed when the event fires\n});\n")),(0,l.kt)("p",null,"To remove an event listener, use the appropriate method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"myDialog.removeOpenListener(listener);\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"For a method to be removed via the appropriate removeListener method, the signature of the method must be saved.")),(0,l.kt)("h2",{id:"parts-and-css-properties"},"Parts and CSS Properties"),(0,l.kt)(r.Z,{tag:a(5731).Vq,mdxType:"TableBuilder"}))}h.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog"}')}}]);
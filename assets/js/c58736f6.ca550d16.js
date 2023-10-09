"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1517],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),l=a(7294),o=a(6010),i=a(2466),r=a(6775),s=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,r]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{b&&r(b)}),[b]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var b=a(2389);const v="tabList__CuJ",k="tabItem_LNqP";function A(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==r&&(d(t),s(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":r===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",v)},l.createElement(A,(0,n.Z)({},e,t)),l.createElement(f,(0,n.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return l.createElement(w,(0,n.Z)({key:String(t)},e))}},6957:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),l=a(917),o=a(4866),i=a(5162),r=a(4673),s=a(8488);const c=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";var u=a(2949);function d(e){let{collapse:t,setCollapse:a}=e;const n=l.iv`
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
    background-color: transparent;  
  `,i=l.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,l.tZ)("div",{css:n},(0,l.tZ)("button",{css:o,onClick:()=>{a(!t)}},t?(0,l.tZ)("img",{css:i,src:c,className:"icon-tabler-arrow-bar-up"}):(0,l.tZ)("img",{css:i,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function m(e){let{url:t}=e;const a=l.iv`
      position: relative;
      cursor: pointer;
      z-index: 10;
      height: 35px;
      width: 35px;
      border: none;
      background-color: none;
      justify-self: flex-end;
      /* margin-right: 5px; */
      margin-top: -5px;
      margin-bottom: -20px;
      background-color: transparent;

      
    `,n=l.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,l.tZ)("button",{css:a,onClick:()=>{window.open(t,"_blank")}},(0,l.tZ)("img",{css:n,src:"data:image/png;base64,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"}))}function p(e){let{path:t,javaC:a,javaE:c,cssURL:p,javaHighlight:h,height:g,frame:b,tabs:v}=e;const[k,A]=(0,n.useState)(""),[f,w]=(0,n.useState)(""),[y,E]=(0,n.useState)(""),[D,C]=(0,n.useState)(!(!a||!c)),[N,x]=(0,n.useState)(!1),[S,T]=(0,n.useState)({});(0,n.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{w(e);const t=new URL(c).pathname.split("/"),a=t[t.length-1];T((e=>({...e,javaFile:a})))})),a&&fetch(a).then((e=>e.text())).then((e=>{A(e)})),p&&fetch(p).then((e=>e.text())).then((e=>{E(e);const t=new URL(p).pathname.split("/"),a=t[t.length-1];T((e=>({...e,cssFile:a})))}))}),[]);const B=l.iv`
		display: flex;
    flex-direction: column;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==b?"0 15px 0 15px;":"7px 15px 0 15px;"};
    box-shadow: var(--ifm-global-shadow-lw);
    `,Z=l.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${g};
  `,j=l.iv`
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

  `,L=l.iv`
  width: 100%;
  `,F=l.iv`
  display: flex;
  justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${N&&"opacity: 1;"};
    
  `;return(0,l.tZ)("div",{css:B},"hidden"!=b?(0,l.tZ)("div",{onMouseEnter:()=>{x(!0)},onMouseLeave:()=>x(!1),css:L},(0,l.tZ)("div",{css:F},(0,l.tZ)(m,{url:t})),(0,l.tZ)("iframe",{loading:"lazy",src:t+"&theme="+("dark"===(0,u.I)().colorMode?"dark":"light"),css:Z})):null,(0,l.tZ)(r.Z,{css:j,summary:(0,l.tZ)("summary",null,"Show Code")},a&&c?(0,l.tZ)(d,{collapse:D,setCollapse:C}):null,p?(0,l.tZ)(o.Z,null,(0,l.tZ)(i.Z,{value:v?v[0]:"Java",label:v?v[0]:S.javaFile,default:!0},(0,l.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h},D?k:f)),(0,l.tZ)(i.Z,{value:v?v[1]:"CSS",label:v?v[1]:S.cssFile},(0,l.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},y))):(0,l.tZ)(o.Z,null,(0,l.tZ)(i.Z,{value:v?v[0]:"Java",label:v?v[0]:S.javaFile,default:!0},(0,l.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h},D?k:f)))))}},7796:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(e){var t,a,l,o;const[i,r]=(0,n.useState)(null);if((0,n.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const a=t.components.find((t=>t.tag===e.tag));r(a)}))}),[]),!i)return n.createElement("div",null,"Loading...");const s=null==(t=i.docsTags)?void 0:t.filter((e=>"part"===e.name)),c=null==(a=i.slots)?void 0:a.map((e=>({name:e.name,desc:e.docs}))),u=null==(l=i.styles)?void 0:l.map((e=>({name:e.name,description:e.docs}))),d=null==(o=i.props)?void 0:o.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type})));return n.createElement(n.Fragment,null,"parts"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==s?void 0:s.map((t=>{var a;const[l,o]=t.text.split(" - ");return!(null!=(a=e.exclusions)&&a.includes(l))&&n.createElement("tr",{key:t.id},n.createElement("td",null,n.createElement("code",null,l)),n.createElement("td",null,o))}))))),"slots"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Slot"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==c?void 0:c.map((t=>{var a;return!(null!=(a=e.exclusions)&&a.includes(t.name))&&""!=t.name&&n.createElement("tr",{key:t.name},n.createElement("td",null,n.createElement("code",null,t.name)),n.createElement("td",null,t.desc))}))))),"properties"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==u?void 0:u.map((t=>{var a;return!(null!=(a=e.exclusions)&&a.includes(t.name))&&n.createElement("tr",{key:t.name},n.createElement("td",null,n.createElement("code",null,t.name)),n.createElement("td",null,t.description))}))))),"reflects"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Attribute"),n.createElement("th",null,"Description"),n.createElement("th",null,"Type"))),n.createElement("tbody",null,null==d?void 0:d.map((t=>{var a;return null!=t.attr&&0==t.display&&!(null!=(a=e.exclusions)&&a.includes(t.attr))&&n.createElement("tr",{key:t.attr},n.createElement("td",null,n.createElement("code",null,t.attr)),n.createElement("td",null,t.desc),n.createElement("td",null,t.type))}))))),"properties"!=e.table&&"parts"!=e.table&&"slots"!=e.table&&"reflects"!=e.table&&n.createElement(n.Fragment,null,n.createElement("h4",null,"Shadow Parts"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==s?void 0:s.map((e=>{const[t,a]=e.text.split(" - ");return n.createElement("tr",{key:e.id},n.createElement("td",null,n.createElement("code",null,t)),n.createElement("td",null,a))})))),n.createElement("h4",null,"CSS Properties"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==u?void 0:u.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,e.description)))))),n.createElement("h4",null,"Reflected Attributes"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Attribute"),n.createElement("th",null,"Description"),n.createElement("th",null,"Type"))),n.createElement("tbody",null,null==d?void 0:d.map((t=>{var a;return null!=t.attr&&0==t.display&&!(null!=(a=e.exclusions)&&a.includes(t.attr))&&n.createElement("tr",{key:t.attr},n.createElement("td",null,n.createElement("code",null,t.attr)),n.createElement("td",null,t.desc),n.createElement("td",null,t.type))}))))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(8397);function o(e){return n.createElement(n.Fragment,null,n.createElement(l.Z,e))}},7338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),o=a(6957),i=a(7796),r=a(3273);const s={sidebar_position:25,title:"Dialog"},c=void 0,u={unversionedId:"components/dialog",id:"components/dialog",title:"Dialog",description:"The DWCJ's dialog component is built to allow a developer to quickly and easily display a dialog on their application, for instances such as a login menu or information box.",source:"@site/docs/components/dialog.md",sourceDirName:"components",slug:"/components/dialog",permalink:"/docs/components/dialog",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/dialog.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,title:"Dialog"},sidebar:"tutorialSidebar",previous:{title:"ComboBox",permalink:"/docs/components/combo-box"},next:{title:"Drawer",permalink:"/docs/components/drawer"}},d={},m=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Backdrop and Blur",id:"backdrop-and-blur",level:2},{value:"Closing the Dialog",id:"closing-the-dialog",level:2},{value:"Auto-Focus",id:"auto-focus",level:2},{value:"Draggable",id:"draggable",level:2},{value:"Snap to Edge",id:"snap-to-edge",level:3},{value:"Positioning",id:"positioning",level:2},{value:"Vertical Alignment",id:"vertical-alignment",level:3},{value:"Full Screen and Breakpoints",id:"full-screen-and-breakpoints",level:3},{value:"Events",id:"events",level:2},{value:"Styling",id:"styling",level:2},{value:"Themes",id:"themes",level:3},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"Slots",id:"slots",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3}],p={toc:m};function h(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{type:"engine",location:"org/dwcj/component/dialog/Dialog",top:"true",mdxType:"JavadocLink"}),(0,l.kt)("p",null,"The DWCJ's dialog component is built to allow a developer to quickly and easily display a dialog on their application, for instances such as a login menu or information box."),(0,l.kt)("p",null,"The component is built with three sections, each of which are ",(0,l.kt)("inlineCode",{parentName:"p"},"Panel")," components: the ",(0,l.kt)("strong",{parentName:"p"},"header"),", the ",(0,l.kt)("strong",{parentName:"p"},"content"),", and the ",(0,l.kt)("strong",{parentName:"p"},"footer"),"."),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.dialogdemos.DialogSections",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Sections.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogSections.java",height:"225px",mdxType:"ComponentDemo"}),(0,l.kt)("h2",{id:"usages"},"Usages"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"User Feedback and Confirmation"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Dialog")," components are often used to provide feedback or ask for user confirmation. They can display various important pieces of feedback to a user, such as:"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Success messages "),(0,l.kt)("li",{parentName:"ul"},"Error alerts"),(0,l.kt)("li",{parentName:"ul"},"Confirmation submissions")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Form Input and Editing"),": You can use dialogs to collect user input or allow them to edit information in a controlled and focused manner. For example, a dialog can pop up to edit user profile details or complete a multi-step form.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Contextual Information"),": Displaying additional contextual information or tooltips in a dialog can help users understand complex features or data. Dialogs can provide in-depth explanations, charts, or help documentation.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Image and Media Previews"),": When users need to view pieces of media, a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dialog")," can be used to show larger previews or galleries, such as when interacting with:"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Images"),(0,l.kt)("li",{parentName:"ul"},"Videos"),(0,l.kt)("li",{parentName:"ul"},"Other media"))))),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("p",null,"The Dialog can be constructed using the default ",(0,l.kt)("inlineCode",{parentName:"p"},"Dialog()")," constructor. Once the object has been instantiated, call the ",(0,l.kt)("inlineCode",{parentName:"p"},"show()")," method on the object itself to display the dialog."),(0,l.kt)("h2",{id:"backdrop-and-blur"},"Backdrop and Blur"),(0,l.kt)("p",null,"By enabling the backdrop attribute of the DWCJ's dialog component, a backdrop will be displayed behind the dialog. Additionally, when enabled, the dialog's blurred attribute will blur the backdrop of the dialog."),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.dialogdemos.DialogBackdropBlur",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Blur.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogBackdropBlur.java",height:"300px",mdxType:"ComponentDemo"}),(0,l.kt)("h2",{id:"closing-the-dialog"},"Closing the Dialog"),(0,l.kt)("p",null,"The dialog supports multiple cancellation methods for closure of the component: hitting the ",(0,l.kt)("inlineCode",{parentName:"p"},"ESC")," key, clicking outside of the dialog, or using the ",(0,l.kt)("inlineCode",{parentName:"p"},"hide()")," method. The first two properties are customizable via their respective methods:\n",(0,l.kt)("inlineCode",{parentName:"p"},"setCancelOnEscKey()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"setCancelOnOutsideClick()"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"hide()")," method allows for the dialog to be closed programmatically, such as by clicking a button on the dialog, for example after saving data. A method to quickly enable or disable users' ability to close the dialog, ",(0,l.kt)("inlineCode",{parentName:"p"},"setClosable()")," will prevent or allow both escape and click closure of the dialog."),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.dialogdemos.DialogClose",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Close.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogClose.java",height:"350px",mdxType:"ComponentDemo"}),(0,l.kt)("h2",{id:"auto-focus"},"Auto-Focus"),(0,l.kt)("p",null,"When enabled, auto-focus will automatically give focus to the first element within the dialog that can be focused. This is useful in helping to direct the attention of users, and is customizable via the ",(0,l.kt)("inlineCode",{parentName:"p"},"setAutoFocus()")," method."),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.dialogdemos.DialogAutoFocus",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/AutoFocus.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogAutoFocus.java",height:"350px",mdxType:"ComponentDemo"}),(0,l.kt)("h2",{id:"draggable"},"Draggable"),(0,l.kt)("p",null,"The dialog has built in functionality to be draggable, allowing the user to relocate the dialog window by clicking and dragging. The position of the dialog can be manipulated from any of the fields within it: the header, content or footer."),(0,l.kt)("h3",{id:"snap-to-edge"},"Snap to Edge"),(0,l.kt)("p",null,"It is also possible to calibrate this behavior to snap to the edge of the screen, meaning the dialog will automatically align itself with the edge of the display when released from its drag and drop date. Snapping can be changed via the ",(0,l.kt)("inlineCode",{parentName:"p"},"setSnapToEdge()")," method. The ",(0,l.kt)("inlineCode",{parentName:"p"},"setSnapThreshold()")," takes a number of pixels, which will set how far the dialog should be from the sides of the screen before it will automatically snap to the edges.  "),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.dialogdemos.DialogDraggable",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Draggable.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogDraggable.java",height:"350px",mdxType:"ComponentDemo"}),(0,l.kt)("h2",{id:"positioning"},"Positioning"),(0,l.kt)("p",null,"The dialog's position can be manipulated using the built-in ",(0,l.kt)("inlineCode",{parentName:"p"},"setPosx()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"setPosy()")," methods. These methods take a string argument which can represent any applicable CSS unit of length, such as pixels or view height/width. A list of these measurements ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages"},"can be found at this link"),"."),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.dialogdemos.DialogPositioning",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Positioning.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogPositioning.java",height:"350px",mdxType:"ComponentDemo"}),(0,l.kt)("h3",{id:"vertical-alignment"},"Vertical Alignment"),(0,l.kt)("p",null,"In addition to manual assignment of a dialog's X and Y position, it is possible to use the dialog's built-in enum class to align the dialog. There are three possible values, ",(0,l.kt)("inlineCode",{parentName:"p"},"TOP"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"CENTER")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"BOTTOM"),", each of which can be used with the ",(0,l.kt)("inlineCode",{parentName:"p"},"setAlignment()")," method. "),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.dialogdemos.DialogAlignments",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/dialog/Alignments.txt",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogAlignments.java",height:"550px",mdxType:"ComponentDemo"}),(0,l.kt)("h3",{id:"full-screen-and-breakpoints"},"Full Screen and Breakpoints"),(0,l.kt)("p",null,"The dialog can be set to enter full screen mode. When full screen is enabled, the dialog cannot be moved or positioned. This mode can be manipulated with the breakpoint attribute of the dialog. The breakpoint is a media query which components when the dialog will automatically flip to full screen mode. When the query matches, the dialog changes to full screen - otherwise it is positioned."),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Dialog")," class provides methods to add and remove event listeners for the following events:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DialogOpenEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DialogCloseEvent"))),(0,l.kt)("p",null,"To add an event listener, use the appropriate method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"myDialog.addOpenListener( e -> {\n  //Executed when the event fires\n});\n")),(0,l.kt)("p",null,"Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the on prefix followed by the event, such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"myDialog.onOpen( e -> {\n  //Executed when the event fires\n});\n")),(0,l.kt)("p",null,"To remove an event listener, use the appropriate method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"myDialog.removeOpenListener(listener);\n")),(0,l.kt)("h2",{id:"styling"},"Styling"),(0,l.kt)("h3",{id:"themes"},"Themes"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Dialog")," components come with ",(0,l.kt)(r.Z,{type:"engine",location:"org/dwcj/component/dialog/Dialog.Theme.html",mdxType:"JavadocLink"},"7 discrete themes ")," built in for quick styling without the use of CSS. These themes are pre-defined styles that can be applied to buttons to change their appearance and visual presentation. They offer a quick and consistent way to customize the look of buttons throughout an application. "),(0,l.kt)("p",null,"While there are many use cases for each of the various themes, some examples uses are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Danger"),": Actions with severe consequences, such as clearing filled-out information, or permanently deleting an account/data is represents a good use case for dialogs with the Danger theme."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default"),": The default theme is appropriate for actions throughout an application that do not require special attention and that are generic, such as toggling a setting."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Primary"),': This theme is appropriate as a main "call-to-action" on a page, such as signing up, saving changes, or continuing to another page.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Success"),": Success themed dialogs are excellent for visualizing successful completion of an element in an application, such as the submission of a form or completion of a sign-up process. The success theme can by programmatically applied once a successful action has been completed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Warning"),": Warning dialogs are useful to indicate users they are about to perform a potentially risky action, such as when navigating away from a page with unsaved changes. These actions are often less impactful than those that would use the Danger theme."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Gray"),": Good for subtle actions, such as minor settings or actions that are more supplementary to a page, and not part of the main functionality."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Info"),": The Info theme is a good choice to provide clarifying, additional information to a user when pushed.")),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.dialogdemos.DialogThemes",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/dialogdemos/DialogThemes.java",height:"500px",mdxType:"ComponentDemo"}),(0,l.kt)("h3",{id:"shadow-parts"},"Shadow Parts"),(0,l.kt)("p",null,"These are the various parts of the ",(0,l.kt)("a",{parentName:"p",href:"../glossary#shadow-dom"},"shadow DOM")," for the component, which will be required when styling via CSS is desired."),(0,l.kt)(i.Z,{tag:a(5731).Vq,table:"parts",mdxType:"TableBuilder"}),(0,l.kt)("h3",{id:"slots"},"Slots"),(0,l.kt)("p",null,"Listed below are the slots available for utilization within the ",(0,l.kt)("inlineCode",{parentName:"p"},"Button")," component. These slots act as placeholders within the component that control where the children of a customized element should be inserted within the shadow tree."),(0,l.kt)(i.Z,{tag:a(5731).Vq,table:"slots",mdxType:"TableBuilder"}),(0,l.kt)("h3",{id:"css-properties"},"CSS Properties"),(0,l.kt)("p",null,"These are the various CSS properties that are used in the component, with a short description of their use."),(0,l.kt)(i.Z,{tag:a(5731).Vq,table:"properties",mdxType:"TableBuilder"}),(0,l.kt)("h3",{id:"reflected-attributes"},"Reflected Attributes"),(0,l.kt)("p",null,"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."),(0,l.kt)(i.Z,{tag:a(5731).Vq,table:"reflects",mdxType:"TableBuilder"}))}h.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog","JO":"bbj-icon"}')}}]);
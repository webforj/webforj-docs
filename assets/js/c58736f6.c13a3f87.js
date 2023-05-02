"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1517],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(7294),n=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>D});var o=a(7462),n=a(7294),l=a(6010),i=a(2466),s=a(6775),r=a(1980),c=a(7392),d=a(12);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:n}}=e;return{value:t,label:a,attributes:o,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const o=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,r._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(o.location.search);t.set(l,e),o.replace({...o.location,search:t.toString()})}),[l,o])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,l=p(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:l}))),[r,c]=m({queryString:a,groupId:o}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,l]=(0,d.Nk)(a);return[o,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:o}),b=(()=>{const e=r??u;return h({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var b=a(2389);const v="tabList__CuJ",A="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:s,selectValue:r,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),o=c[a].value;o!==s&&(u(t),r(o))},h=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:p},i,{className:(0,l.Z)("tabs__item",A,null==i?void 0:i.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:o}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v)},n.createElement(f,(0,o.Z)({},e,t)),n.createElement(k,(0,o.Z)({},e,t)))}function D(e){const t=(0,b.Z)();return n.createElement(w,(0,o.Z)({key:String(t)},e))}},2395:(e,t,a)=>{a.d(t,{Z:()=>u});var o=a(7294),n=a(2863),l=a(4866),i=a(5162),s=a(4673),r=a(8488);const c=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function d(e){let{collapse:t,setCollapse:a}=e;const o=n.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,l=n.iv`
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
  
  `,i=n.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,n.tZ)("div",{css:o},(0,n.tZ)("button",{css:l,onClick:()=>{a(!t)}},t?(0,n.tZ)("img",{css:i,src:c,className:"icon-tabler-arrow-bar-up"}):(0,n.tZ)("img",{css:i,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function u(e){let{path:t,javaC:a,javaE:c,cssURL:u,javaHighlight:p,height:h}=e;const[m,g]=(0,o.useState)(""),[b,v]=(0,o.useState)(""),[A,f]=(0,o.useState)(""),[k,w]=(0,o.useState)(!0),D=n.iv`
		display: flex;
    flex-direction: column;
    padding: 10px 15px 0 15px;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    
    `,y=n.iv`
    min-height: 100px;
    height: 100%;
    height: ${h};
  `,x=n.iv`
    border: none;
    box-shadow: none;
    background-color: var(--code-display-color);
    margin-bottom: 0px;
    padding: 10px;

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

  `;return c&&fetch(c).then((e=>e.text())).then((e=>{v(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{g(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{f(e)})),(0,n.tZ)("div",{css:D},(0,n.tZ)("iframe",{loading:"lazy",src:t,css:y}),(0,n.tZ)(s.Z,{css:x,summary:(0,n.tZ)("summary",null,"Show Code")},a&&c?(0,n.tZ)(d,{collapse:k,setCollapse:w}):null,u?(0,n.tZ)(l.Z,null,(0,n.tZ)(i.Z,{value:"Java",label:"Java",default:!0},(0,n.tZ)(r.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p},k?m:b)),(0,n.tZ)(i.Z,{value:"CSS",label:"CSS"},(0,n.tZ)(r.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},A))):(0,n.tZ)(l.Z,null,(0,n.tZ)(i.Z,{value:"Java",label:"Java",default:!0},(0,n.tZ)(r.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p},k?m:b)))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(7294),n=a(8397);function l(e){return o.createElement(o.Fragment,null,o.createElement(n.Z,e))}},7338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=a(7462),n=(a(7294),a(3905)),l=a(2395);const i={sidebar_position:25,title:"Dialog"},s=void 0,r={unversionedId:"components/dialog",id:"components/dialog",title:"Dialog",description:"API:&nbsp;",source:"@site/docs/components/dialog.md",sourceDirName:"components",slug:"/components/dialog",permalink:"/docs/components/dialog",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/dialog.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,title:"Dialog"},sidebar:"tutorialSidebar",previous:{title:"Combo box",permalink:"/docs/components/combo-box"},next:{title:"Field",permalink:"/docs/components/field"}},c={},d=[{value:"Backdrop and Blur",id:"backdrop-and-blur",level:3},{value:"Closing the Dialog",id:"closing-the-dialog",level:3},{value:"Auto-Focus",id:"auto-focus",level:3},{value:"Draggable",id:"draggable",level:2},{value:"Snap to Edge",id:"snap-to-edge",level:3},{value:"Positioning",id:"positioning",level:2},{value:"Vertical Alignment",id:"vertical-alignment",level:3},{value:"Full Screen and Breakpoints",id:"full-screen-and-breakpoints",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"}},(0,n.kt)("p",{style:{color:"gray"}},"API:\xa0"),(0,n.kt)("b",null,(0,n.kt)("a",{href:"https://javadoc.io/static/org.dwcj/dwcj-engine/0.15.0/org/dwcj/controls/dialog/Dialog.html",style:{justifySelf:"flex-end"}}," Java "))),(0,n.kt)("p",null,"The DWCJ's dialog component is built to allow a developer to quickly and easily display a dialog on their application, for instances such as a login menu or information box."),(0,n.kt)("p",null,"The component is built with three sections, each of which are ",(0,n.kt)("inlineCode",{parentName:"p"},"Div")," components: the header, the content, and the footer."),(0,n.kt)("p",null,"To show the dialog, call the ",(0,n.kt)("inlineCode",{parentName:"p"},"show()")," method on the object itself. This "),(0,n.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogSections",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogSections.java",height:"225px",mdxType:"ComponentDemo"}),(0,n.kt)("h3",{id:"backdrop-and-blur"},"Backdrop and Blur"),(0,n.kt)("p",null,"By enabling the backdrop attribute of the DWCJ's dialog component, a backdrop will be displayed behind the dialog. Additionally, when enabled, the dialog's blurred attribute will blur the backdrop of the dialog."),(0,n.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogBackdropBlur",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogBackdropBlur.java",height:"300px",mdxType:"ComponentDemo"}),(0,n.kt)("h3",{id:"closing-the-dialog"},"Closing the Dialog"),(0,n.kt)("p",null,"The dialog supports multiple cancellation methods for closure of the component: hitting the ",(0,n.kt)("inlineCode",{parentName:"p"},"ESC")," key, clicking outside of the dialog, or using the ",(0,n.kt)("inlineCode",{parentName:"p"},"hide()")," method. The first two properties are customizable via their respective methods:\n",(0,n.kt)("inlineCode",{parentName:"p"},"setCancelOnEscKey()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"setCancelOnOutsideClick()"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"hide()")," method allows for the dialog to be closed programmatically, such as by clicking a button on the dialog, for example after saving data. A method to quickly enable or disable users' ability to close the dialog, ",(0,n.kt)("inlineCode",{parentName:"p"},"setClosable()")," will prevent or allow both escape and click closure of the dialog."),(0,n.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogClose",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogClose.java",height:"350px",mdxType:"ComponentDemo"}),(0,n.kt)("h3",{id:"auto-focus"},"Auto-Focus"),(0,n.kt)("p",null,"When enabled, auto-focus will automatically give focus to the first element within the dialog that can be focused. This is useful in helping to direct the attention of users, and is customizable via the ",(0,n.kt)("inlineCode",{parentName:"p"},"setAutoFocus()")," method."),(0,n.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogAutoFocus",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogAutoFocus.java",height:"350px",mdxType:"ComponentDemo"}),(0,n.kt)("h2",{id:"draggable"},"Draggable"),(0,n.kt)("p",null,"The dialog has built in functionality to be draggable, allowing the user to relocate the dialog window by clicking and dragging. The position of the dialog can be manipulated from any of the fields within it: the header, content or footer."),(0,n.kt)("h3",{id:"snap-to-edge"},"Snap to Edge"),(0,n.kt)("p",null,"It is also possible to calibrate this behavior to snap to the edge of the screen, meaning the dialog will automatically align itself with the edge of the display when released from its drag and drop date. Snapping can be changed via the ",(0,n.kt)("inlineCode",{parentName:"p"},"setSnapToEdge()")," method. The ",(0,n.kt)("inlineCode",{parentName:"p"},"setSnapThreshold()")," takes a number of pixels, which will set how far the dialog should be from the sides of the screen before it will automatically snap to the edges.  "),(0,n.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogDraggable",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogDraggable.java",height:"350px",mdxType:"ComponentDemo"}),(0,n.kt)("h2",{id:"positioning"},"Positioning"),(0,n.kt)("p",null,"The dialog's position can be manipulated using the built-in ",(0,n.kt)("inlineCode",{parentName:"p"},"setPosx()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"setPosy()")," methods. These methods take a string argument which can represent any applicable CSS unit of length, such as pixels or view height/width. A list of these measurements ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages"},"can be found at this link"),"."),(0,n.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogPositioning",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogPositioning.java",height:"350px",mdxType:"ComponentDemo"}),(0,n.kt)("h3",{id:"vertical-alignment"},"Vertical Alignment"),(0,n.kt)("p",null,"In addition to manual assignment of a dialog's X and Y position, it is possible to use the dialog's built-in enum class to align the dialog. There are three possible values, ",(0,n.kt)("inlineCode",{parentName:"p"},"TOP"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"CENTER")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"BOTTOM"),", each of which can be used with the ",(0,n.kt)("inlineCode",{parentName:"p"},"setAlignment()")," method. "),(0,n.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.dialogdemos.DialogAlignments",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/dialogdemos/DialogAlignments.java",height:"350px",mdxType:"ComponentDemo"}),(0,n.kt)("h3",{id:"full-screen-and-breakpoints"},"Full Screen and Breakpoints"),(0,n.kt)("p",null,"The dialog can be set to enter full screen mode. When full screen is enabled, the dialog cannot be moved or positioned. This mode can be manipulated with the breakpoint attribute of the dialog. The breakpoint is a media query which components when the dialog will automatically flip to full screen mode. When the query matches, the dialog changes to full screen - otherwise it is positioned."))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2565],{61:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=n(5893),s=n(1151),r=n(6957),i=n(3273);const l={sidebar_position:50,title:"Label"},o=void 0,c={id:"components/label",title:"Label",description:"The Label class is used to create a label object which shows static text.",source:"@site/docs/components/label.md",sourceDirName:"components",slug:"/components/label",permalink:"/docs/components/label",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/label.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Label"},sidebar:"documentationSidebar",previous:{title:"TimeField",permalink:"/docs/components/fields/timefield"},next:{title:"Lists",permalink:"/docs/components/list-components/lists"}},d={},h=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"HTML Injection",id:"html-injection",level:2},{value:"Line Wrapping",id:"line-wrapping",level:2},{value:"Alignment",id:"alignment",level:2},{value:"Events",id:"events",level:2},{value:"Adding Events",id:"adding-events",level:3},{value:"Removing Events",id:"removing-events",level:3},{value:"Example",id:"example",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{type:"engine",location:"org/dwcj/component/label/Label",top:"true"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Label"})," class is used to create a label object which shows static text."]}),"\n",(0,a.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,a.jsx)(t.p,{children:"The Label component is a static text UI component that is commonly used in applications to display descriptive or informational text. It serves as a visual element that provides context, identifies UI elements, or presents information to the user. The Label component is highly versatile and can be used in various scenarios throughout an application. Some common usages of the Label component include:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Form Labels"}),": Labels are frequently used alongside form fields to describe the purpose or expected input for a particular field. They improve usability and accessibility by providing clear instructions or hints to users. For example, you can use Labels in registration forms, contact forms, or search forms to identify input fields like name, email, address, or search query."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Data Display"}),": Labels are useful for displaying static information or labeling data elements in different sections of an application. They can be used to present user profiles, product details, or any other information that needs proper identification or description."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Navigation"}),": Labels can be employed in navigation menus, sidebars, or tabs to indicate the purpose or destination of a particular navigation item. They help users understand the function of each navigation option and improve the overall user experience."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Headers and Section Titles"}),": Labels can be used as section titles or headers to organize content and provide clear delineation between different sections or blocks of information. They enhance the readability and structure of the user interface."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Label"})," class has three constructors:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Label()"}),": Creates an empty label."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Label(String text)"}),": Creates a label with the specified text."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Label(String text, boolean wrap)"}),": Creates a label with the specified text and sets whether or not the text should be wrapped. More detail about line wrapping can be found ",(0,a.jsx)(t.a,{href:"#line-wrapping",children:"here."})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Here's an example of how to create a Label object using each constructor:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'// Creates an empty label.\r\nLabel emptyLabel = new Label();\r\n\r\n// Creates a label with the specified text.\r\nLabel textLabel = new Label("Hello, world!");\r\n\r\n// Creates a label with the specified text and sets whether or not the text should be wrapped.\r\nLabel wrappedLabel = new Label("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", true);\r\n\n'})}),"\n",(0,a.jsx)(t.h2,{id:"html-injection",children:"HTML Injection"}),"\n",(0,a.jsx)(t.p,{children:"In addition to using the label as static text, it can also be used as an HTML tag within your code. Simply set the label's content to the desired HTML tag with the various attributes, class names, etc, and the label will be replaced with the desired HTML element."}),"\n",(0,a.jsx)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Demo.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/text_styles.css",javaHighlight:"{16-18}",height:"250px"}),"\n",(0,a.jsx)(t.h2,{id:"line-wrapping",children:"Line Wrapping"}),"\n",(0,a.jsxs)(t.p,{children:["The line wrap method for a ",(0,a.jsx)(t.code,{children:"Label"})," component sets whether or not the component automatically wraps the text within the label onto multiple lines when it exceeds the available width, ensuring that the entire text is visible without overflowing the container. Setting this value to false will truncate any text that falls out of the component's bounds. This helps manipulate readability and truncation of longer text content within the label. The default value for lineWrap is ",(0,a.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelLineWrap",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelLineWrap.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/wrap_styles.css",javaHighlight:"{16-18}",height:"250px"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h2,{id:"alignment",children:"Alignment"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Label"})," class implements the TextAlignable interface, which allows you to set the text alignment of the label. The possible alignment values are Alignment.LEFT, Alignment.MIDDLE, and Alignment.RIGHT. To set the alignment, use the setTextAlignment method:"]}),"\n",(0,a.jsx)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelAlignment",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelAlignment.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Alignment.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/alignment_styles.css",height:"450px"}),"\n",(0,a.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Label"})," class provides methods to add and remove event listeners for the following events:"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Events"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:(0,a.jsx)(i.Z,{type:"engine",location:"org/dwcj/component/event/MouseEnterEvent",code:"true",children:"MouseEnterEvent"})}),(0,a.jsx)(t.td,{children:"An event that is triggered when the mouse cursor enters the boundaries of a component."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:(0,a.jsx)(i.Z,{type:"engine",location:"org/dwcj/component/event/MouseExitEvent",code:"true",children:"MouseExitEvent"})}),(0,a.jsx)(t.td,{children:"An event that is triggered when the mouse cursor exits the boundaries of a component."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:(0,a.jsx)(i.Z,{type:"engine",location:"org/dwcj/component/event/RightMouseDownEvent",code:"true",children:"RightMouseDownEvent"})}),(0,a.jsx)(t.td,{children:"An event that is triggered when the user presses the right mouse button while the cursor is over a component."})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"adding-events",children:"Adding Events"}),"\n",(0,a.jsx)(t.p,{children:"To add an event listener, use the appropriate method:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"myLabel.addMouseEnterListener( e -> {\r\n  //Executed when the event fires\r\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,a.jsx)(t.code,{children:"on"})," prefix followed by the event, such as:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"myLabel.onMouseEnter( e -> {\r\n    //Executed when the event fires\r\n});\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Using the event payload that comes with various events to attain information reduces the number of round trips made when instead querying the component for the required information."})}),"\n",(0,a.jsx)(t.h3,{id:"removing-events",children:"Removing Events"}),"\n",(0,a.jsx)(t.p,{children:"To remove an event listener, use the appropriate method:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"myLabel.removeMouseEnterListener(listener);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["Here is an example of how to use the ",(0,a.jsx)(t.code,{children:"Label"})," class to create a simple UI component which allows the user to hover over the text to change the message:"]}),"\n",(0,a.jsx)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelSample",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelSample.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Sample.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/text_styles.css",javaHighlight:"{43-45}"}),"\n",(0,a.jsx)("br",{})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var a=n(6010);const s={tabItem:"tabItem_Ymn6"};var r=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(7294),s=n(6010),r=n(2466),i=n(6550),l=n(469),o=n(1980),c=n(7392),d=n(12);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=u(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,h]=p({queryString:n,groupId:s}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),v=(()=>{const e=c??b;return m({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=n(5893);function w(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==a&&(c(t),i(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,A.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function f(e){const t=b(e);return(0,A.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,A.jsx)(w,{...e,...t}),(0,A.jsx)(x,{...e,...t})]})}function j(e){const t=(0,g.Z)();return(0,A.jsx)(f,{...e,children:h(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7294),s=n(917),r=n(4866),i=n(5162),l=n(4673),o=n(1750);const c="data:image/png;base64,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",d=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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";var u=n(2949),m=n(5944);function p(e){let{collapse:t,setCollapse:n}=e;const a=s.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,r=s.iv`
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
  `,i=s.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:a,children:(0,m.tZ)("button",{css:r,onClick:()=>{n(!t)},children:t?(0,m.tZ)("img",{css:i,src:d,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:i,src:c,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const n=s.iv`
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

      
    `,a=s.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,m.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:a,src:h})})}function g(e){let{path:t,javaC:n,javaE:c,cssURL:d,javaHighlight:h,height:g,frame:v,tabs:A}=e;const[w,x]=(0,a.useState)(""),[f,j]=(0,a.useState)(""),[y,L]=(0,a.useState)(""),[D,E]=(0,a.useState)(!(!n||!c)),[Z,B]=(0,a.useState)(!1),[C,S]=(0,a.useState)({});(0,a.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const t=new URL(c).pathname.split("/"),n=t[t.length-1];S((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{x(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{L(e);const t=new URL(d).pathname.split("/"),n=t[t.length-1];S((e=>({...e,cssFile:n})))}))}),[]);const k=s.iv`
		display: flex;
    flex-direction: column;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==v?"0 15px 0 15px;":"7px 15px 0 15px;"};
    box-shadow: var(--ifm-global-shadow-lw);
    `,T=s.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${g};
  `,H=s.iv`
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

  `,M=s.iv`
  width: 100%;
  `,J=s.iv`
  display: flex;
  justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${Z&&"opacity: 1;"};
    
  `;return(0,m.BX)("div",{css:k,children:["hidden"!=v?(0,m.BX)("div",{onMouseEnter:()=>{B(!0)},onMouseLeave:()=>B(!1),css:M,children:[(0,m.tZ)("div",{css:J,children:(0,m.tZ)(b,{url:t})}),(0,m.tZ)("iframe",{loading:"lazy",src:t+"&theme="+("dark"===(0,u.I)().colorMode?"dark":"light"),css:T})]}):null,(0,m.BX)(l.Z,{css:H,summary:(0,m.tZ)("summary",{children:"Show Code"}),children:[n&&c?(0,m.tZ)(p,{collapse:D,setCollapse:E}):null,d?(0,m.BX)(r.Z,{children:[(0,m.tZ)(i.Z,{value:A?A[0]:"Java",label:A?A[0]:C.javaFile,default:!0,children:(0,m.tZ)(o.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:D?w:f})}),(0,m.tZ)(i.Z,{value:A?A[1]:"CSS",label:A?A[1]:C.cssFile,children:(0,m.tZ)(o.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:y})})]}):(0,m.tZ)(r.Z,{children:(0,m.tZ)(i.Z,{value:A?A[0]:"Java",label:A?A[0]:C.javaFile,default:!0,children:(0,m.tZ)(o.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:D?w:f})})})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),s=n(917),r=n(8230),i=n(4387),l=n(6770);let o=null,c=null;const d={getLatestTag:async function(){return o&&c&&Date.now()-c<36e5?o:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return o=t[0].name,c=Date.now(),o}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};var h=n(5944);function u(e){let{type:t,location:n,top:o,children:c,code:u,suffix:m}=e;const[p,b]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{let e=await d.getLatestTag();m||(m=""),e||(e="23.04"),b("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html"+m)}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const g=s.iv`
    display: inline;

    ${o&&s.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,v=s.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,h.BX)(h.HY,{children:["true"===o&&(0,h.tZ)("div",{css:g,children:(0,h.tZ)(r.Z,{title:"JavaDoc",arrow:!0,children:(0,h.tZ)(i.Z,{css:v,label:"Java API",component:"a",href:p,icon:(0,h.tZ)(l.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==o&&!u&&(0,h.tZ)("div",{css:g,children:(0,h.tZ)("a",{href:p,target:"_blank",children:c})}),"true"!==o&&u&&(0,h.tZ)("div",{css:g,children:(0,h.tZ)("code",{children:(0,h.tZ)("a",{href:p,target:"_blank",children:c})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(8397),s=n(5893);function r(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{...e})})}}}]);
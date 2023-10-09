"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2565],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),o=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),o=a(7294),l=a(6010),s=a(2466),r=a(6775),i=a(1980),c=a(7392),u=a(12);function m(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[s,r]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=h({queryString:a,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=i??m;return d({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{v&&r(v)}),[v]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var v=a(2389);const g="tabList__CuJ",A="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==r&&(m(t),i(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},s,{className:(0,l.Z)("tabs__item",A,null==s?void 0:s.className,{"tabs__item--active":r===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",g)},o.createElement(w,(0,n.Z)({},e,t)),o.createElement(f,(0,n.Z)({},e,t)))}function y(e){const t=(0,v.Z)();return o.createElement(k,(0,n.Z)({key:String(t)},e))}},6957:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),o=a(917),l=a(4866),s=a(5162),r=a(4673),i=a(8488);const c=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";var u=a(2949);function m(e){let{collapse:t,setCollapse:a}=e;const n=o.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,l=o.iv`
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
  `,s=o.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,o.tZ)("div",{css:n},(0,o.tZ)("button",{css:l,onClick:()=>{a(!t)}},t?(0,o.tZ)("img",{css:s,src:c,className:"icon-tabler-arrow-bar-up"}):(0,o.tZ)("img",{css:s,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function p(e){let{url:t}=e;const a=o.iv`
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

      
    `,n=o.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,o.tZ)("button",{css:a,onClick:()=>{window.open(t,"_blank")}},(0,o.tZ)("img",{css:n,src:"data:image/png;base64,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"}))}function d(e){let{path:t,javaC:a,javaE:c,cssURL:d,javaHighlight:h,height:b,frame:v,tabs:g}=e;const[A,w]=(0,n.useState)(""),[f,k]=(0,n.useState)(""),[y,x]=(0,n.useState)(""),[L,D]=(0,n.useState)(!(!a||!c)),[C,N]=(0,n.useState)(!1),[E,B]=(0,n.useState)({});(0,n.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{k(e);const t=new URL(c).pathname.split("/"),a=t[t.length-1];B((e=>({...e,javaFile:a})))})),a&&fetch(a).then((e=>e.text())).then((e=>{w(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{x(e);const t=new URL(d).pathname.split("/"),a=t[t.length-1];B((e=>({...e,cssFile:a})))}))}),[]);const S=o.iv`
		display: flex;
    flex-direction: column;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==v?"0 15px 0 15px;":"7px 15px 0 15px;"};
    box-shadow: var(--ifm-global-shadow-lw);
    `,Z=o.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${b};
  `,T=o.iv`
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

  `,H=o.iv`
  width: 100%;
  `,j=o.iv`
  display: flex;
  justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${C&&"opacity: 1;"};
    
  `;return(0,o.tZ)("div",{css:S},"hidden"!=v?(0,o.tZ)("div",{onMouseEnter:()=>{N(!0)},onMouseLeave:()=>N(!1),css:H},(0,o.tZ)("div",{css:j},(0,o.tZ)(p,{url:t})),(0,o.tZ)("iframe",{loading:"lazy",src:t+"&theme="+("dark"===(0,u.I)().colorMode?"dark":"light"),css:Z})):null,(0,o.tZ)(r.Z,{css:T,summary:(0,o.tZ)("summary",null,"Show Code")},a&&c?(0,o.tZ)(m,{collapse:L,setCollapse:D}):null,d?(0,o.tZ)(l.Z,null,(0,o.tZ)(s.Z,{value:g?g[0]:"Java",label:g?g[0]:E.javaFile,default:!0},(0,o.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h},L?A:f)),(0,o.tZ)(s.Z,{value:g?g[1]:"CSS",label:g?g[1]:E.cssFile},(0,o.tZ)(i.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},y))):(0,o.tZ)(l.Z,null,(0,o.tZ)(s.Z,{value:g?g[0]:"Java",label:g?g[0]:E.javaFile,default:!0},(0,o.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h},L?A:f)))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(8397);function l(e){return n.createElement(n.Fragment,null,n.createElement(o.Z,e))}},689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var n=a(7462),o=(a(7294),a(3905)),l=a(6957),s=a(3273);const r={sidebar_position:50,title:"Label"},i=void 0,c={unversionedId:"components/label",id:"components/label",title:"Label",description:"The Label class is used to create a label object which shows static text.",source:"@site/docs/components/label.md",sourceDirName:"components",slug:"/components/label",permalink:"/docs/components/label",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/label.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Label"},sidebar:"tutorialSidebar",previous:{title:"TimeField",permalink:"/docs/components/fields/timefield"},next:{title:"ListBox",permalink:"/docs/components/list-box"}},u={},m=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"HTML Injection",id:"html-injection",level:2},{value:"Line Wrapping",id:"line-wrapping",level:2},{value:"Alignment",id:"alignment",level:2},{value:"Events",id:"events",level:2},{value:"Adding Events",id:"adding-events",level:3},{value:"Removing Events",id:"removing-events",level:3},{value:"Example",id:"example",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{type:"engine",location:"org/dwcj/component/label/Label",top:"true",mdxType:"JavadocLink"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Label")," class is used to create a label object which shows static text. "),(0,o.kt)("h2",{id:"usages"},"Usages"),(0,o.kt)("p",null,"The Label component is a static text UI component that is commonly used in applications to display descriptive or informational text. It serves as a visual element that provides context, identifies UI elements, or presents information to the user. The Label component is highly versatile and can be used in various scenarios throughout an application. Some common usages of the Label component include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Form Labels"),": Labels are frequently used alongside form fields to describe the purpose or expected input for a particular field. They improve usability and accessibility by providing clear instructions or hints to users. For example, you can use Labels in registration forms, contact forms, or search forms to identify input fields like name, email, address, or search query.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data Display"),": Labels are useful for displaying static information or labeling data elements in different sections of an application. They can be used to present user profiles, product details, or any other information that needs proper identification or description.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Navigation"),": Labels can be employed in navigation menus, sidebars, or tabs to indicate the purpose or destination of a particular navigation item. They help users understand the function of each navigation option and improve the overall user experience.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Headers and Section Titles"),": Labels can be used as section titles or headers to organize content and provide clear delineation between different sections or blocks of information. They enhance the readability and structure of the user interface."))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Label")," class has three constructors:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Label()"),": Creates an empty label."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Label(String text)"),": Creates a label with the specified text."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Label(String text, boolean wrap)"),": Creates a label with the specified text and sets whether or not the text should be wrapped.")),(0,o.kt)("p",null,"Here's an example of how to create a Label object using each constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Creates an empty label.\nLabel emptyLabel = new Label();\n\n// Creates a label with the specified text.\nLabel textLabel = new Label("Hello, world!");\n\n// Creates a label with the specified text and sets whether or not the text should be wrapped.\nLabel wrappedLabel = new Label("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", true);\n\n')),(0,o.kt)("h2",{id:"html-injection"},"HTML Injection"),(0,o.kt)("p",null,"In addition to using the label as static text, it can also be used as an HTML tag within your code. Simply set the label's text to the desired HTML tag with the various attributes, class names, etc, and\nthe label will be replaced with the desired HTML element."),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Demo.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/text_styles.css",javaHighlight:"{16-18}",height:"250px",mdxType:"ComponentDemo"}),(0,o.kt)("h2",{id:"line-wrapping"},"Line Wrapping"),(0,o.kt)("p",null,"The line wrap method for a ",(0,o.kt)("inlineCode",{parentName:"p"},"Label")," component sets whether or not the component automatically wraps the text within the label onto multiple lines when it exceeds the available width, ensuring that the entire text is visible without overflowing the container. Setting this value to false will truncate any text that falls out of the component's bounds. This helps manipulate readability and truncation of longer text content within the label. The default value for lineWrap is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelLineWrap",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelLineWrap.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/wrap_styles.css",javaHighlight:"{16-18}",height:"250px",mdxType:"ComponentDemo"}),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"alignment"},"Alignment"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Label")," class implements the TextAlignable interface, which allows you to set the text alignment of the label. The possible alignment values are Alignment.LEFT, Alignment.MIDDLE, and Alignment.RIGHT. To set the alignment, use the setTextAlignment method:"),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelAlignment",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelAlignment.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Alignment.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/alignment_styles.css",height:"450px",mdxType:"ComponentDemo"}),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Label")," class provides methods to add and remove event listeners for the following events:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Events"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"MouseEnterEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the mouse cursor enters the boundaries of an element. It occurs when the user moves the mouse pointer over the specified element, indicating that the mouse has entered its area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"MouseExitEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the mouse cursor exits the boundaries of an element. It occurs when the user moves the mouse pointer out of the boundaries of the specified element, indicating that the mouse has exited its area.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"RightMouseDownEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"An event refers to an event that is triggered when the user presses the right mouse button while the cursor is over an element. It allows you to capture the specific action of the user's right mouse button being pressed down within the boundaries of the element.")))),(0,o.kt)("h3",{id:"adding-events"},"Adding Events"),(0,o.kt)("p",null,"To add an event listener, use the appropriate method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myLabel.addMouseEnterListener( e -> {\n  //Executed when the event fires\n});\n")),(0,o.kt)("p",null,"Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," prefix followed by the event, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myLabel.onMouseEnter( e -> {\n    //Executed when the event fires\n});\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using the event payload that comes with various events to attain information reduces the number of round trips made when instead querying the component for the required information. ")),(0,o.kt)("h3",{id:"removing-events"},"Removing Events"),(0,o.kt)("p",null,"To remove an event listener, use the appropriate method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"myLabel.removeMouseEnterListener(listener);\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is an example of how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Label")," class to create a simple UI component which allows the user to hover over the text to change the message:"),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelSample",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelSample.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Sample.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/text_styles.css",javaHighlight:"{43-45}",mdxType:"ComponentDemo"}),(0,o.kt)("br",null))}d.isMDXComponent=!0}}]);
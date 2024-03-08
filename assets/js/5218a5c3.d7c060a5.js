"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7198],{5570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var a=n(5893),o=n(1151),r=n(9469),i=n(9358),s=(n(7796),n(4904),n(3273)),l=n(2665);const c={sidebar_position:1,title:"Table"},d=void 0,u={id:"addons/table/table",title:"Table",description:"The table component is currently under heavy development and has not reached a stable status. However, any assistance testing would be appreciated.",source:"@site/docs/addons/table/table.md",sourceDirName:"addons/table",slug:"/addons/table/",permalink:"/docs/addons/table/",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/addons/table/table.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Table"},sidebar:"documentationSidebar",previous:{title:"Addons",permalink:"/docs/category/addons"},next:{title:"Columns",permalink:"/docs/addons/table/columns"}},h={},p=[{value:"Creating a <code>Table</code>",id:"creating-a-table",level:2},{value:"1. Creating an Entity Class",id:"1-creating-an-entity-class",level:4},{value:"2. Create a Repository",id:"2-create-a-repository",level:4},{value:"3. Instantiate <code>Table</code> and Add Columns",id:"3-instantiate-table-and-add-columns",level:4},{value:"4. Set the <code>Table</code> data",id:"4-set-the-table-data",level:4}];function m(e){const t={admonition:"admonition",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,a.jsx)(l.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-table",clickable:!1,iconName:"code"}),"\n",(0,a.jsx)(s.Z,{type:"engine",location:"org/dwcj/component/button/Button",top:"true"}),"\n",(0,a.jsx)(t.admonition,{title:"EXPERIMENTAL",type:"warning",children:(0,a.jsx)(t.p,{children:"The table component is currently under heavy development and has not reached a stable status. However, any assistance testing would be appreciated."})}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsxs)(t.p,{children:["To use the ",(0,a.jsx)(t.code,{children:"Table"})," in your project, ensure snapshots are enabled, and include the following tag in your POM's dependencies:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-xml",children:"<dependency>\r\n    <groupId>org.dwcj</groupId>\r\n    <artifactId>dwcj-table</artifactId>\r\n    <version>24.00-SNAPSHOT</version>\r\n</dependency>\n"})})]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Table"})," class is a versatile component designed for presenting tabular information in a structured and easily understandable manner. Optimized for handling large datasets with high performance, this component offers advanced visualization and a comprehensive suite of events for dynamic user engagement."]}),"\n",(0,a.jsx)(r.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples/DataTable?",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/DataTable.java",height:"600px"}),"\n",(0,a.jsxs)(t.h2,{id:"creating-a-table",children:["Creating a ",(0,a.jsx)(t.code,{children:"Table"})]}),"\n",(0,a.jsxs)(t.p,{children:["In order to create and populate a ",(0,a.jsx)(t.code,{children:"Table"})," in an application, the following steps can be taken:"]}),"\n",(0,a.jsx)(t.h4,{id:"1-creating-an-entity-class",children:"1. Creating an Entity Class"}),"\n",(0,a.jsx)(t.p,{children:"Define a class to represent the entities (data) you want to display in the table. In the example, this class is MusicRecord."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"public class MusicRecord {\r\n    // Fields and methods to represent the attributes of each record\r\n}\n"})}),"\n",(0,a.jsx)(t.h4,{id:"2-create-a-repository",children:"2. Create a Repository"}),"\n",(0,a.jsx)(t.p,{children:"Once an entity class has been created, use this to fill a collection of these entities with the desired data."}),"\n",(0,a.jsxs)(t.p,{children:["From this data, a ",(0,a.jsx)(t.code,{children:"Repository"})," needs to be created for use within the ",(0,a.jsx)(t.code,{children:"Table"}),". The ",(0,a.jsx)(t.code,{children:"CollectionRepository"})," class is provided to turn any valid Java collection into a usable ",(0,a.jsx)(t.code,{children:"Repository"}),", forgoing the need to implement your own ",(0,a.jsx)(t.code,{children:"Repository"})," class."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'List<MusicRecord> data = new Gson().fromJson(\r\n    Assets.contentOf(\r\n        Assets.resolveContextUrl("context://data/CDStore.json")\r\n    ), new TypeToken<List<MusicRecord>>() {}\r\n);\r\n\r\nCollectionRepository<MusicRecord> dataRepository = new CollectionRepository<>(data);\n'})}),"\n",(0,a.jsxs)(t.h4,{id:"3-instantiate-table-and-add-columns",children:["3. Instantiate ",(0,a.jsx)(t.code,{children:"Table"})," and Add Columns"]}),"\n",(0,a.jsxs)(t.p,{children:["Instantiate a new ",(0,a.jsx)(t.code,{children:"Table"})," object, and use one of the provided factory methods to add the desired columns to a newly created ",(0,a.jsx)(t.code,{children:"Table"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'Table<MusicRecord> table = new Table<>();\r\ntable.addColumn("Number", MusicRecord::getNumber);\r\ntable.addColumn("Title", MusicRecord::getTitle);\r\ntable.addColumn("Artist", MusicRecord::getArtist);\r\ntable.addColumn("Genre", MusicRecord::getMusicType);\r\ntable.addColumn("Cost", MusicRecord::getCost);\n'})}),"\n",(0,a.jsxs)(t.h4,{id:"4-set-the-table-data",children:["4. Set the ",(0,a.jsx)(t.code,{children:"Table"})," data"]}),"\n",(0,a.jsxs)(t.p,{children:["Finally, set the ",(0,a.jsx)(t.code,{children:"Repository"})," for the ",(0,a.jsx)(t.code,{children:"Table"})," created in the previous step:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"table.setRepository(Service.getMusicRecords());\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Alternatively, the ",(0,a.jsx)(t.code,{children:"setItems()"})," method can be passed any valid Java collection, which will create a ",(0,a.jsx)(t.code,{children:"CollectionRepository"})," under the hood for you."]})}),"\n",(0,a.jsxs)(t.p,{children:["Below is an example of the above steps implemented to create a basic ",(0,a.jsx)(t.code,{children:"Table"})," component:"]}),"\n",(0,a.jsx)(i.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=addondemos.tabledemos.TableBasic",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/TableBasic.java",urls:["https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/MusicRecord.java","https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/addondemos/tabledemos/Service.java"],height:"600px"})]})}function v(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},6031:(e,t,n)=>{var a=n(4836);t.Z=void 0;var o=a(n(4938)),r=n(5893),i=(0,o.default)((0,r.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=i},2610:(e,t,n)=>{var a=n(4836);t.Z=void 0;var o=a(n(4938)),r=n(5893),i=(0,o.default)((0,r.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=i},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var a=n(6010);const o={tabItem:"tabItem_Ymn6"};var r=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7294),o=n(6010),r=n(2466),i=n(6550),s=n(469),l=n(1980),c=n(7392),d=n(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,u]=m({queryString:n,groupId:o}),[v,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,d.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=c??v;return p({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(5893);function A(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),o=s[n].value;o!==a&&(c(t),i(o))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=v(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(A,{...e,...t}),(0,f.jsx)(w,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,f.jsx)(x,{...e,children:u(e.children)},String(t))}},9469:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7294),o=n(917),r=n(4866),i=n(5162),s=n(4673),l=n(1750),c=n(1974),d=n(7762),u=n(2143),h=n(2949),p=n(2610),m=n(5944);function v(e){let{collapse:t,setCollapse:n}=e;const a=o.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,r=o.iv`
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
  `,i=o.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:a,children:(0,m.tZ)("button",{css:r,onClick:()=>{n(!t)},children:t?(0,m.tZ)("img",{css:i,src:d.Z,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:i,src:c.Z,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const n=o.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    justify-self: flex-end;
    margin-top: -5px;
    margin-bottom: -20px;
    background-color: transparent;
    margin-right: 12px;
  `,a=o.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,m.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:a,src:u.Z})})}function g(e){let{path:t,javaC:n,javaE:c,cssURL:d,javaHighlight:u,height:g,frame:f,tabs:A}=e;const[w,x]=(0,a.useState)(""),[y,j]=(0,a.useState)(""),[k,Z]=(0,a.useState)(""),[D,C]=(0,a.useState)(!(!n||!c)),[E,B]=(0,a.useState)(!1),[S,M]=(0,a.useState)({}),[L,T]=(0,a.useState)(!1),[N,O]=(0,a.useState)(0),[X,R]=(0,a.useState)(0),[F,z]=(0,a.useState)(25),[H,V]=(0,a.useState)(25),[J,I]=(0,a.useState)(0),[G,Y]=(0,a.useState)(!1),P=(0,a.useRef)(null),U=(0,a.useRef)(null);(0,a.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const t=new URL(c).pathname.split("/"),n=t[t.length-1];M((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{x(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{Z(e);const t=new URL(d).pathname.split("/"),n=t[t.length-1];M((e=>({...e,cssFile:n})))})),I(P.current?P.current.offsetWidth:0)}),[]);const W=()=>{T(!1)},q=e=>{if(L){const t=e.clientX-N;X+t>J/3&&(P.current.style.width=`${X+t}px`,U.current.style.right=(F-t<25?25:F-t)+"px",V(F-t<25?25:F-t))}},K=o.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==f?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,Q=o.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,_=o.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${g||"100%"};
    pointer-events: ${L?"none":"auto"};
  `,$=o.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${E&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ee=o.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,te=o.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==f?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      /* border: none; */
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==f?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
    }

    summary {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before {
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary);
      }
    }
    .margin-top--md {
      margin-top: 0px !important;
    }
    ul {
      margin: -4px 0px !important;
    }
  `,ne=o.iv`
    /* :first-child{
      margin-left: 1em;
    } */
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ae=o.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.BX)("div",{css:K,onMouseUp:W,onMouseLeave:W,onMouseMove:q,children:["hidden"!=f?(0,m.BX)("div",{onMouseEnter:()=>{B(!0)},onMouseLeave:()=>B(!1),css:Q,children:[(0,m.tZ)("iframe",{onMouseUp:W,loading:"lazy",src:t+"&__theme__="+(0,h.I)().colorMode,css:_,ref:P,onMouseMove:q}),(0,m.tZ)("div",{css:$,ref:U,children:(0,m.tZ)(b,{url:t})}),(0,m.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),T(!0),O(e.clientX),R(P.current?P.current.offsetWidth:0),z(H)},children:(0,m.tZ)(p.Z,{})})]}):null,(0,m.BX)(s.Z,{css:te,summary:(0,m.tZ)("summary",{onClick:()=>Y(!G),children:G?"Hide Code":"Show Code"}),children:[n&&c?(0,m.tZ)(v,{collapse:D,setCollapse:C}):null,d?(0,m.BX)(r.Z,{css:ne,children:[(0,m.tZ)(i.Z,{value:A?A[0]:"Java",label:A?A[0]:S.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ae,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?w:y})}),(0,m.tZ)(i.Z,{value:A?A[1]:"CSS",label:A?A[1]:S.cssFile,children:(0,m.tZ)(l.Z,{css:ae,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:k})})]}):(0,m.tZ)(r.Z,{css:ne,children:(0,m.tZ)(i.Z,{value:A?A[0]:"Java",label:A?A[0]:S.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ae,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?w:y})})})]})]})}},9358:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7294),o=n(917),r=n(4866),i=n(5162),s=n(4673),l=n(1750),c=n(1974),d=n(7762),u=n(2143),h=n(2949),p=n(2610),m=n(5944);function v(e){let{collapse:t,setCollapse:n}=e;const a=o.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,r=o.iv`
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
  `,i=o.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:a,children:(0,m.tZ)("button",{css:r,onClick:()=>{n(!t)},children:t?(0,m.tZ)("img",{css:i,src:d.Z,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:i,src:c.Z,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const n=o.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    justify-self: flex-end;
    margin-top: -5px;
    margin-bottom: -20px;
    background-color: transparent;
    margin-right: 12px;
  `,a=o.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,m.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:a,src:u.Z})})}function g(e){let{path:t,javaC:n,javaE:c,urls:d,cssURL:u,javaHighlight:g,height:f,frame:A,tabs:w}=e;const[x,y]=(0,a.useState)(""),[j,k]=(0,a.useState)(""),[Z,D]=(0,a.useState)({}),[C,E]=(0,a.useState)(""),[B,S]=(0,a.useState)(!(!n||!c)),[M,L]=(0,a.useState)(!1),[T,N]=(0,a.useState)({}),[O,X]=(0,a.useState)(!1),[R,F]=(0,a.useState)(0),[z,H]=(0,a.useState)(0),[V,J]=(0,a.useState)(25),[I,G]=(0,a.useState)(25),[Y,P]=(0,a.useState)(0),[U,W]=(0,a.useState)(!1),q=(0,a.useRef)(null),K=(0,a.useRef)(null);(0,a.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{k(e);const t=new URL(c).pathname.split("/"),n=t[t.length-1];N((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{y(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{E(e);const t=new URL(u).pathname.split("/"),n=t[t.length-1];N((e=>({...e,cssFile:n})))})),d.forEach((e=>{const t=new URL(e).pathname.split("/"),n=t[t.length-1];fetch(e).then((e=>e.text())).then((e=>{D((t=>({...t,[n]:{fileName:n,code:e}})))}))})),P(q.current?q.current.offsetWidth:0)}),[]);const Q=()=>{X(!1)},_=e=>{if(O){const t=e.clientX-R;z+t>Y/3&&(q.current.style.width=`${z+t}px`,K.current.style.right=(V-t<25?25:V-t)+"px",G(V-t<25?25:V-t))}},$=o.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==A?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,ee=o.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,te=o.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${f||"100%"};
    pointer-events: ${O?"none":"auto"};
  `,ne=o.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${M&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ae=o.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,oe=o.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==A?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      /* border: none; */
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==A?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
    }

    summary {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before {
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary);
      }
    }
    .margin-top--md {
      margin-top: 0px !important;
    }
    ul {
      margin: -4px 0px !important;
    }
  `,re=o.iv`
    /* :first-child{
      margin-left: 1em;
    } */
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ie=o.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.BX)("div",{css:$,onMouseUp:Q,onMouseLeave:Q,onMouseMove:_,children:["hidden"!=A?(0,m.BX)("div",{onMouseEnter:()=>{L(!0)},onMouseLeave:()=>L(!1),css:ee,children:[(0,m.tZ)("iframe",{onMouseUp:Q,loading:"lazy",src:t+"&__theme__="+(0,h.I)().colorMode,css:te,ref:q,onMouseMove:_}),(0,m.tZ)("div",{css:ne,ref:K,children:(0,m.tZ)(b,{url:t})}),(0,m.tZ)("div",{css:ae,onMouseDown:e=>{e.preventDefault(),X(!0),F(e.clientX),H(q.current?q.current.offsetWidth:0),J(I)},children:(0,m.tZ)(p.Z,{})})]}):null,(0,m.BX)(s.Z,{css:oe,summary:(0,m.tZ)("summary",{onClick:()=>W(!U),children:U?"Hide Code":"Show Code"}),children:[n&&c?(0,m.tZ)(v,{collapse:B,setCollapse:S}):null,u?(0,m.BX)(r.Z,{css:re,children:[(0,m.tZ)(i.Z,{value:w?w[0]:"Java",label:w?w[0]:T.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:B?x:j})}),Object.keys(Z).map(((e,t)=>(0,m.tZ)(i.Z,{value:e,label:e,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:Z[e].code})},t))),(0,m.tZ)(i.Z,{value:w?w[1]:"CSS",label:w?w[1]:T.cssFile,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:C})})]}):(0,m.BX)(r.Z,{css:re,children:[(0,m.tZ)(i.Z,{value:w?w[0]:"Java",label:w?w[0]:T.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:B?x:j})}),Object.keys(Z).map(((e,t)=>(0,m.tZ)(i.Z,{value:e,label:e,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:Z[e].code})},t)))]})]})]})}},4904:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var a=n(917),o=n(3273),r=n(5944);function i(e){let{base:t,events:n}=e;const i=a.iv`
    text-align: center;
  `;return(0,r.BX)("table",{children:[(0,r.tZ)("thead",{children:(0,r.BX)("tr",{children:[(0,r.tZ)("th",{children:"Event"}),(0,r.tZ)("th",{children:"Description"})]})}),t&&Object.entries({blur:{name:"BlurEvent",description:"An event that is triggered when a component loses focus.",link:"org/dwcj/component/event/BlurEvent"},focus:{name:"FocusEvent",description:"An event that is triggered when a component gains focus, opposite of a blur event.",link:"org/dwcj/component/event/FocusEvent"},mouseEnter:{name:"MouseEnterEvent",description:"An event that is triggered when the mouse cursor enters the boundaries of a component.",link:"org/dwcj/component/event/MouseEnterEvent"},mouseExit:{name:"MouseExitEvent",description:"An event that is triggered when the mouse cursor exits the boundaries of a component.",link:"org/dwcj/component/event/MouseExitEvent"},rightMouseDown:{name:"RightMouseDownEvent",description:"An event that is triggered when the user presses the right mouse button while the cursor is over a component.",link:"org/dwcj/component/event/RightMouseDownEvent"}}).map((e=>{let[t,n]=e;return(0,r.BX)("tr",{children:[(0,r.tZ)("td",{css:i,children:(0,r.tZ)(o.Z,{type:"engine",location:n.link,code:"true",children:n.name})}),(0,r.tZ)("td",{children:n.description})]},t)})),n&&Object.entries({buttonClick:{name:"ButtonClickEvent",description:"An event that is triggered when a user interacts with a button by clicking or tapping on it.",link:"org/dwcj/component/button/event/ButtonClickEvent"},check:{name:"CheckEvent",description:"An event that is triggered when the state of a component changes and becomes checked. It occurs when the user interacts with a checkbox element by clicking or tapping on it, causing the checkbox to transition from an unchecked state to a checked state.",link:"org/dwcj/component/event/CheckEvent"},uncheck:{name:"UncheckEvent",description:"An event that is triggered when the state of a component changes and becomes unchecked.",link:"org/dwcj/component/event/UncheckEvent"},toggle:{name:"ToggleEvent",description:'A ToggleEvent fires a CheckBox or a similar UI element changes its state between "on" and "off" or "active" and "inactive."',link:"org/dwcj/component/event/UncheckEvent"},dialogOpen:{name:"DialogOpenEvent",description:"An event that is fired when the Dialog is opened.",link:"org/dwcj/component/dialog/event/DialogOpenEvent"},dialogClose:{name:"DialogCloseEvent",description:"An event that is fired when the Dialog is closed.",link:"org/dwcj/component/dialog/event/DialogCloseEvent"},drawerOpen:{name:"DrawerOpenEvent",description:"An event that is fired when the Drawer is opened.",link:"org/dwcj/component/drawer/event/DrawerOpenEvent"},drawerClose:{name:"DrawerCloseEvent",description:"An event that is fired when the Drawer is closed.",link:"org/dwcj/component/drawer/event/DrawerCloseEvent"},keypress:{name:"KeypressEvent",description:'An event that is triggered when one of "special keys" is pressed while the component has focus. These keys have specific codes, allowing for conditional logic to be implemented based on the key pressed.',link:"org/dwcj/component/event/KeypressEvent"},modify:{name:"ModifyEvent",description:"An event that is triggered when an is changed or modified. It typically occurs any time a user changes an aspect of the component, such as each time a letter is input or removed from an input component.",link:"org/dwcj/component/event/ModifyEvent"},listSelect:{name:"ListSelectEvent",description:"An event which is fired when the user selects an item from a list.",link:"org/dwcj/component/list/event/ListSelectEvent"},listOpen:{name:"ListOpenEvent",description:"An event which is fired when a list dropdown is opened.",link:"org/dwcj/component/list/event/ListOpenEvent"},listClose:{name:"ListCloseEvent",description:"An event which is fired when a list dropdown is closed.",link:"org/dwcj/component/list/event/ListCloseEvent"},listClick:{name:"ListClickEvent",description:"This event is triggered when the user clicks an item from a List-based component.",link:"org/dwcj/component/list/event/ListClickEvent"}}).filter((e=>{let[t]=e;return n.includes(t)})).map((e=>{let[t,n]=e;return(0,r.BX)("tr",{children:[(0,r.tZ)("td",{css:i,children:(0,r.tZ)(o.Z,{type:"engine",location:n.link,code:"true",children:n.name})}),(0,r.tZ)("td",{children:n.description})]},t)}))]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),o=n(917),r=n(8230),i=n(4387),s=n(6031);var l=n(5944);function c(e){let{type:t,location:n,top:c,children:d,code:u,suffix:h}=e;const[p,m]=(0,a.useState)("");(0,a.useEffect)((()=>{h||(h=""),m("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+n+".html"+h)}),[]);const v=o.iv`
    display: inline;

    ${c&&o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=o.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:v,children:(0,l.tZ)(r.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(i.Z,{css:b,label:"Java API",component:"a",href:p,icon:(0,l.tZ)(s.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:v,children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:v,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(8397),o=n(5893);function r(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Z,{...e})})}},7762:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png"},1974:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},2143:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);
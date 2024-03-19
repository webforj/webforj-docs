"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7198],{5570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(5893),r=a(1151),o=(a(9469),a(9358)),s=(a(7796),a(4904),a(3273)),i=a(2665);const l={sidebar_position:1,title:"Table"},c=void 0,d={id:"addons/table/table",title:"Table",description:"The table component is currently under heavy development and has not reached a stable status. However, any assistance testing would be appreciated.",source:"@site/docs/addons/table/table.md",sourceDirName:"addons/table",slug:"/addons/table/",permalink:"/docs/addons/table/",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/addons/table/table.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Table"},sidebar:"documentationSidebar",previous:{title:"Addons",permalink:"/docs/category/addons"},next:{title:"Columns",permalink:"/docs/addons/table/columns"}},u={},p=[{value:"Creating a <code>Table</code>",id:"creating-a-table",level:2},{value:"1. Creating an Entity Class",id:"1-creating-an-entity-class",level:4},{value:"2. Create a Repository",id:"2-create-a-repository",level:4},{value:"3. Instantiate <code>Table</code> and Add Columns",id:"3-instantiate-table-and-add-columns",level:4},{value:"4. Set the <code>Table</code> data",id:"4-set-the-table-data",level:4}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,n.jsx)(i.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-table",clickable:!1,iconName:"code"}),"\n",(0,n.jsx)(s.Z,{type:"engine",location:"org/dwcj/component/button/Button",top:"true"}),"\n",(0,n.jsx)(t.admonition,{title:"EXPERIMENTAL",type:"warning",children:(0,n.jsx)(t.p,{children:"The table component is currently under heavy development and has not reached a stable status. However, any assistance testing would be appreciated."})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["To use the ",(0,n.jsx)(t.code,{children:"Table"})," in your project, ensure snapshots are enabled, and include the following tag in your POM's dependencies:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<dependency>\r\n    <groupId>com.webforj</groupId>\r\n    <artifactId>webforj-table</artifactId>\r\n    <version>24.00-SNAPSHOT</version>\r\n</dependency>\n"})})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Table"})," class is a versatile component designed for presenting tabular information in a structured and easily understandable manner. Optimized for handling large datasets with high performance, this component offers advanced visualization and a comprehensive suite of events for dynamic user engagement."]}),"\n",(0,n.jsx)(o.Z,{path:"https://demo.webforj.com/webapp/controlsamples/DataTable?",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/DataTable.java",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/MusicRecord.java","https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/Service.java"],height:"600px"}),"\n",(0,n.jsxs)(t.h2,{id:"creating-a-table",children:["Creating a ",(0,n.jsx)(t.code,{children:"Table"})]}),"\n",(0,n.jsxs)(t.p,{children:["In order to create and populate a ",(0,n.jsx)(t.code,{children:"Table"})," in an application, the following steps can be taken:"]}),"\n",(0,n.jsx)(t.h4,{id:"1-creating-an-entity-class",children:"1. Creating an Entity Class"}),"\n",(0,n.jsx)(t.p,{children:"Define a class to represent the entities (data) you want to display in the table. In the example, this class is MusicRecord."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"public class MusicRecord {\r\n    // Fields and methods to represent the attributes of each record\r\n}\n"})}),"\n",(0,n.jsx)(t.h4,{id:"2-create-a-repository",children:"2. Create a Repository"}),"\n",(0,n.jsx)(t.p,{children:"Once an entity class has been created, use this to fill a collection of these entities with the desired data."}),"\n",(0,n.jsxs)(t.p,{children:["From this data, a ",(0,n.jsx)(t.code,{children:"Repository"})," needs to be created for use within the ",(0,n.jsx)(t.code,{children:"Table"}),". The ",(0,n.jsx)(t.code,{children:"CollectionRepository"})," class is provided to turn any valid Java collection into a usable ",(0,n.jsx)(t.code,{children:"Repository"}),", forgoing the need to implement your own ",(0,n.jsx)(t.code,{children:"Repository"})," class."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'List<MusicRecord> data = new Gson().fromJson(\r\n    Assets.contentOf(\r\n        Assets.resolveContextUrl("context://data/CDStore.json")\r\n    ), new TypeToken<List<MusicRecord>>() {}\r\n);\r\n\r\nCollectionRepository<MusicRecord> dataRepository = new CollectionRepository<>(data);\n'})}),"\n",(0,n.jsxs)(t.h4,{id:"3-instantiate-table-and-add-columns",children:["3. Instantiate ",(0,n.jsx)(t.code,{children:"Table"})," and Add Columns"]}),"\n",(0,n.jsxs)(t.p,{children:["Instantiate a new ",(0,n.jsx)(t.code,{children:"Table"})," object, and use one of the provided factory methods to add the desired columns to a newly created ",(0,n.jsx)(t.code,{children:"Table"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'Table<MusicRecord> table = new Table<>();\r\ntable.addColumn("Number", MusicRecord::getNumber);\r\ntable.addColumn("Title", MusicRecord::getTitle);\r\ntable.addColumn("Artist", MusicRecord::getArtist);\r\ntable.addColumn("Genre", MusicRecord::getMusicType);\r\ntable.addColumn("Cost", MusicRecord::getCost);\n'})}),"\n",(0,n.jsxs)(t.h4,{id:"4-set-the-table-data",children:["4. Set the ",(0,n.jsx)(t.code,{children:"Table"})," data"]}),"\n",(0,n.jsxs)(t.p,{children:["Finally, set the ",(0,n.jsx)(t.code,{children:"Repository"})," for the ",(0,n.jsx)(t.code,{children:"Table"})," created in the previous step:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"table.setRepository(Service.getMusicRecords());\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Alternatively, the ",(0,n.jsx)(t.code,{children:"setItems()"})," method can be passed any valid Java collection, which will create a ",(0,n.jsx)(t.code,{children:"CollectionRepository"})," under the hood for you."]})}),"\n",(0,n.jsxs)(t.p,{children:["Below is an example of the above steps implemented to create a basic ",(0,n.jsx)(t.code,{children:"Table"})," component:"]}),"\n",(0,n.jsx)(o.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=addondemos.tabledemos.TableBasic",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/TableBasic.java",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/MusicRecord.java","https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/Service.java"],height:"600px"})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6031:(e,t,a)=>{var n=a(4836);t.Z=void 0;var r=n(a(4938)),o=a(5893),s=(0,r.default)((0,o.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=s},2610:(e,t,a)=>{var n=a(4836);t.Z=void 0;var r=n(a(4938)),o=a(5893),s=(0,r.default)((0,o.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=s},5162:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var n=a(6010);const r={tabItem:"tabItem_Ymn6"};var o=a(5893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,s),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7294),r=a(6010),o=a(2466),s=a(6550),i=a(469),l=a(1980),c=a(7392),d=a(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:a,groupId:r}),[b,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=c??b;return h({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var v=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(5893);function A(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),r=i[a].value;r!==n&&(c(t),s(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(A,{...e,...t}),(0,f.jsx)(x,{...e,...t})]})}function y(e){const t=(0,v.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(t))}},9469:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294),r=a(917),o=a(4866),s=a(5162),i=a(4673),l=a(1750),c=a(1974),d=a(7762),u=a(2143),p=a(2949),h=a(2610),m=a(5944);function b(e){let{collapse:t,setCollapse:a}=e;const n=r.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,o=r.iv`
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
  `,s=r.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:n,children:(0,m.tZ)("button",{css:o,onClick:()=>{a(!t)},children:t?(0,m.tZ)("img",{css:s,src:d.Z,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:s,src:c.Z,className:"icon-tabler-arrow-bar-down"})})})}function v(e){let{url:t}=e;const a=r.iv`
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
  `,n=r.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,m.tZ)("button",{css:a,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:n,src:u.Z})})}function g(e){let{path:t,javaC:a,javaE:c,cssURL:d,javaHighlight:u,height:g,frame:f,tabs:A}=e;const[x,w]=(0,n.useState)(""),[y,j]=(0,n.useState)(""),[Z,k]=(0,n.useState)(""),[C,S]=(0,n.useState)(!(!a||!c)),[B,D]=(0,n.useState)(!1),[M,E]=(0,n.useState)({}),[T,N]=(0,n.useState)(!1),[L,R]=(0,n.useState)(0),[z,X]=(0,n.useState)(0),[F,O]=(0,n.useState)(25),[H,V]=(0,n.useState)(25),[J,G]=(0,n.useState)(0),[I,Y]=(0,n.useState)(!1),P=(0,n.useRef)(null),W=(0,n.useRef)(null);(0,n.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const t=new URL(c).pathname.split("/"),a=t[t.length-1];E((e=>({...e,javaFile:a})))})),a&&fetch(a).then((e=>e.text())).then((e=>{w(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{k(e);const t=new URL(d).pathname.split("/"),a=t[t.length-1];E((e=>({...e,cssFile:a})))})),G(P.current?P.current.offsetWidth:0)}),[]);const U=()=>{N(!1)},q=e=>{if(T){const t=e.clientX-L;z+t>J/3&&(P.current.style.width=`${z+t}px`,W.current.style.right=(F-t<25?25:F-t)+"px",V(F-t<25?25:F-t))}},K=r.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==f?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,Q=r.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,_=r.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${g||"100%"};
    pointer-events: ${T?"none":"auto"};
  `,$=r.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${B&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ee=r.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,te=r.iv`
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
  `,ae=r.iv`
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
  `,ne=r.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.BX)("div",{css:K,onMouseUp:U,onMouseLeave:U,onMouseMove:q,children:["hidden"!=f?(0,m.BX)("div",{onMouseEnter:()=>{D(!0)},onMouseLeave:()=>D(!1),css:Q,children:[(0,m.tZ)("iframe",{onMouseUp:U,loading:"lazy",src:t+"&__theme__="+(0,p.I)().colorMode,css:_,ref:P,onMouseMove:q}),(0,m.tZ)("div",{css:$,ref:W,children:(0,m.tZ)(v,{url:t})}),(0,m.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),N(!0),R(e.clientX),X(P.current?P.current.offsetWidth:0),O(H)},children:(0,m.tZ)(h.Z,{})})]}):null,(0,m.BX)(i.Z,{css:te,summary:(0,m.tZ)("summary",{onClick:()=>Y(!I),children:I?"Hide Code":"Show Code"}),children:[a&&c?(0,m.tZ)(b,{collapse:C,setCollapse:S}):null,d?(0,m.BX)(o.Z,{css:ae,children:[(0,m.tZ)(s.Z,{value:A?A[0]:"Java",label:A?A[0]:M.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:C?x:y})}),(0,m.tZ)(s.Z,{value:A?A[1]:"CSS",label:A?A[1]:M.cssFile,children:(0,m.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:Z})})]}):(0,m.tZ)(o.Z,{css:ae,children:(0,m.tZ)(s.Z,{value:A?A[0]:"Java",label:A?A[0]:M.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:C?x:y})})})]})]})}},9358:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294),r=a(917),o=a(4866),s=a(5162),i=a(4673),l=a(1750),c=a(1974),d=a(7762),u=a(2143),p=a(2949),h=a(2610),m=a(5944);function b(e){let{collapse:t,setCollapse:a}=e;const n=r.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,o=r.iv`
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
  `,s=r.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:n,children:(0,m.tZ)("button",{css:o,onClick:()=>{a(!t)},children:t?(0,m.tZ)("img",{css:s,src:d.Z,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:s,src:c.Z,className:"icon-tabler-arrow-bar-down"})})})}function v(e){let{url:t}=e;const a=r.iv`
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
  `,n=r.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,m.tZ)("button",{css:a,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:n,src:u.Z})})}function g(e){let{path:t,javaC:a,javaE:c,urls:d,cssURL:u,javaHighlight:g,height:f,frame:A,tabs:x}=e;const[w,y]=(0,n.useState)(""),[j,Z]=(0,n.useState)(""),[k,C]=(0,n.useState)({}),[S,B]=(0,n.useState)(""),[D,M]=(0,n.useState)(!(!a||!c)),[E,T]=(0,n.useState)(!1),[N,L]=(0,n.useState)({}),[R,z]=(0,n.useState)(!1),[X,F]=(0,n.useState)(0),[O,H]=(0,n.useState)(0),[V,J]=(0,n.useState)(25),[G,I]=(0,n.useState)(25),[Y,P]=(0,n.useState)(0),[W,U]=(0,n.useState)(!1),q=(0,n.useRef)(null),K=(0,n.useRef)(null);(0,n.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{Z(e);const t=new URL(c).pathname.split("/"),a=t[t.length-1];L((e=>({...e,javaFile:a})))})),a&&fetch(a).then((e=>e.text())).then((e=>{y(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{B(e);const t=new URL(u).pathname.split("/"),a=t[t.length-1];L((e=>({...e,cssFile:a})))})),d.forEach((e=>{const t=new URL(e).pathname.split("/"),a=t[t.length-1];fetch(e).then((e=>e.text())).then((e=>{C((t=>({...t,[a]:{fileName:a,code:e}})))}))})),P(q.current?q.current.offsetWidth:0)}),[]);const Q=()=>{z(!1)},_=e=>{if(R){const t=e.clientX-X;O+t>Y/3&&(q.current.style.width=`${O+t}px`,K.current.style.right=(V-t<25?25:V-t)+"px",I(V-t<25?25:V-t))}},$=r.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==A?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,ee=r.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,te=r.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${f||"100%"};
    pointer-events: ${R?"none":"auto"};
  `,ae=r.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${E&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ne=r.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,re=r.iv`
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
  `,oe=r.iv`
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
  `,se=r.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.BX)("div",{css:$,onMouseUp:Q,onMouseLeave:Q,onMouseMove:_,children:["hidden"!=A?(0,m.BX)("div",{onMouseEnter:()=>{T(!0)},onMouseLeave:()=>T(!1),css:ee,children:[(0,m.tZ)("iframe",{onMouseUp:Q,loading:"lazy",src:t+"&__theme__="+(0,p.I)().colorMode,css:te,ref:q,onMouseMove:_}),(0,m.tZ)("div",{css:ae,ref:K,children:(0,m.tZ)(v,{url:t})}),(0,m.tZ)("div",{css:ne,onMouseDown:e=>{e.preventDefault(),z(!0),F(e.clientX),H(q.current?q.current.offsetWidth:0),J(G)},children:(0,m.tZ)(h.Z,{})})]}):null,(0,m.BX)(i.Z,{css:re,summary:(0,m.tZ)("summary",{onClick:()=>U(!W),children:W?"Hide Code":"Show Code"}),children:[a&&c?(0,m.tZ)(b,{collapse:D,setCollapse:M}):null,u?(0,m.BX)(o.Z,{css:oe,children:[(0,m.tZ)(s.Z,{value:x?x[0]:"Java",label:x?x[0]:N.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:se,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:D?w:j})}),Object.keys(k).map(((e,t)=>(0,m.tZ)(s.Z,{value:e,label:e,children:(0,m.tZ)(l.Z,{css:se,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:k[e].code})},t))),(0,m.tZ)(s.Z,{value:x?x[1]:"CSS",label:x?x[1]:N.cssFile,children:(0,m.tZ)(l.Z,{css:se,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:S})})]}):(0,m.BX)(o.Z,{css:oe,children:[(0,m.tZ)(s.Z,{value:x?x[0]:"Java",label:x?x[0]:N.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:se,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:D?w:j})}),Object.keys(k).map(((e,t)=>(0,m.tZ)(s.Z,{value:e,label:e,children:(0,m.tZ)(l.Z,{css:se,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:g,children:k[e].code})},t)))]})]})]})}},4904:(e,t,a)=>{a(7294),a(3273)},3273:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),r=a(917),o=a(8230),s=a(4387),i=a(6031);var l=a(5944);function c(e){let{type:t,location:a,top:c,children:d,code:u,suffix:p}=e;const[h,m]=(0,n.useState)("");(0,n.useEffect)((()=>{p||(p=""),m("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+a+".html"+p)}),[]);const b=r.iv`
    display: inline;

    ${c&&r.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,v=r.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)(o.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(s.Z,{css:v,label:"Java API",component:"a",href:h,icon:(0,l.tZ)(i.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("a",{href:h,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:h,target:"_blank",children:d})})})]})}},1415:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var n=a(8397),r=a(5893);function o(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.Z,{...e})})}},7762:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png"},1974:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},2143:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);
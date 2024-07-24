"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5851],{4127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(5893),r=n(1151),o=n(6957);const s={title:"Whats new in version 24.00?",description:"Get to know the features, fixes and functionality new in webforJ version 24.00.",slug:"whats-new-24.00",date:new Date("2024-04-08T00:00:00.000Z"),authors:[{name:"webforJ Team",url:"https://github.com/webforj",image_url:"/img/webforj_icon.svg"}],tags:["webforJ","v24.00","release"],hide_table_of_contents:!1},i="24.00",l={permalink:"/blog/whats-new-24.00",source:"@site/blog/2024-04-08-webforj-v24.00/24.00.md",title:"Whats new in version 24.00?",description:"Get to know the features, fixes and functionality new in webforJ version 24.00.",date:"2024-04-08T00:00:00.000Z",formattedDate:"April 8, 2024",tags:[{label:"webforJ",permalink:"/blog/tags/webfor-j"},{label:"v24.00",permalink:"/blog/tags/v-24-00"},{label:"release",permalink:"/blog/tags/release"}],readingTime:2.13,hasTruncateMarker:!0,authors:[{name:"webforJ Team",url:"https://github.com/webforj",image_url:"/img/webforj_icon.svg",imageURL:"/img/webforj_icon.svg"}],frontMatter:{title:"Whats new in version 24.00?",description:"Get to know the features, fixes and functionality new in webforJ version 24.00.",slug:"whats-new-24.00",date:"2024-04-08T00:00:00.000Z",authors:[{name:"webforJ Team",url:"https://github.com/webforj",image_url:"/img/webforj_icon.svg",imageURL:"/img/webforj_icon.svg"}],tags:["webforJ","v24.00","release"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Whats new in version 24.01?",permalink:"/blog/whats-new-24.01"}},c={authorsImageUrls:[void 0]},u=[{value:"Table component",id:"table-component",level:2},{value:"Navigator component",id:"navigator-component",level:2},{value:"Splitter component",id:"splitter-component",level:2},{value:"Package renaming",id:"package-renaming",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Webforj version ",(0,a.jsx)(t.code,{children:"24.00"})," is live and available for development. Learn more about what main features and fixes are included in this release."]}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://github.com/webforj/webforj/releases/tag/24.00",children:"GitHub release overview"})," for a more comprehensive list of changes."]}),"\n",(0,a.jsx)(t.h2,{id:"table-component",children:"Table component"}),"\n",(0,a.jsxs)(t.p,{children:["This release introduces a new ",(0,a.jsxs)(t.a,{href:"https://documentation.webforj.com/docs/components/table",children:[(0,a.jsx)(t.code,{children:"Table"})," component"]}),", allowing developers access to a lightweight, fast and optimized way to display their data."]}),"\n",(0,a.jsx)(o.Z,{path:"https://demo.webforj.com/webapp/controlsamples/DataTable?",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/DataTable.java",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/MusicRecord.java","https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/Service.java"],height:"600px"}),"\n",(0,a.jsx)(t.p,{children:"This table supports tons of modern features, some of which include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../docs/components/table/filtering",children:"Filtering"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../docs/components/table/refreshing",children:"Editing"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../docs/components/table/sorting",children:"Sorting"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../docs/components/table/rendering",children:"Lodash rendering"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Using the ",(0,a.jsx)(t.code,{children:"Table"})," in your app is simple, and follows a few easy steps outlined in ",(0,a.jsx)(t.a,{href:"https://documentation.webforj.com/docs/components/table#creating-a-table",children:"this user guide article"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"navigator-component",children:"Navigator component"}),"\n",(0,a.jsx)(o.Z,{path:"https://demo.webforj.com/webapp/controlsamples/NavigatorPages?",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/navigatordemos/NavigatorPages.java",height:"125px"}),"\n",(0,a.jsxs)(t.p,{children:["In addition to the ",(0,a.jsx)(t.code,{children:"Table"})," (and often in conjunction with), the new ",(0,a.jsx)(t.a,{href:"../docs/components/navigator",children:(0,a.jsx)(t.code,{children:"Navigator"})})," component is available to use in webforJ applications. Perfect for cases in which an app utilizes pagination, the customizable ",(0,a.jsx)(t.code,{children:"Navigator"})," is the perfect pick to allow users to interact with implemented pagination."]}),"\n",(0,a.jsxs)(t.p,{children:["It integrates nicely with the ",(0,a.jsx)(t.code,{children:"Repository"})," class, an object of which can be passed in the constructor to take care of binding as soon as the Navigator object is constructed."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"Repository<ItemRecord> repository = Service.getItemRecords();\r\nNavigator nav = new Navigator(repository);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Navigator"})," can be customized with various settings that configure the text, tooltips, buttons, layouts, and other aspects of the component's appearance. To see a list of these settings, as well as their options, ",(0,a.jsx)(t.a,{href:"https://documentation.webforj.com/docs/components/navigator#customizing-buttons-text-and-tooltips",children:"review the docs"})," for more details."]}),"\n",(0,a.jsx)(t.h2,{id:"splitter-component",children:"Splitter component"}),"\n",(0,a.jsx)(o.Z,{path:"https://demo.webforj.com/webapp/controlsamples/SplitterBasic?",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBasic.java",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBox.java"],height:"300px"}),"\n",(0,a.jsxs)(t.p,{children:["Rounding out the newly introduced components is the ",(0,a.jsx)(t.code,{children:"Splitter"}),", a tool that allows users to compartmentalize and dynamically resize your app. Whether dividing an entire page, or only a part of the app, the ",(0,a.jsx)(t.code,{children:"Splitter"})," is a great tool with many uses within all types of modern apps."]}),"\n",(0,a.jsxs)(t.p,{children:["Among the features included with this component is the ability to automatically save the layout configured by the user when an app is closed, so the splitter maintains its layout when the app is relaunched. Give it a try yourself over at ",(0,a.jsx)(t.a,{href:"https://documentation.webforj.com/docs/components/splitter#auto-save",children:"the docs article"})," which outlines this and many other features."]}),"\n",(0,a.jsx)(t.h2,{id:"package-renaming",children:"Package renaming"}),"\n",(0,a.jsxs)(t.p,{children:["Version ",(0,a.jsx)(t.code,{children:"24.00"}),", integrates the product's new official brand, webforJ, into the codebase. The previous alias, DWCJ, has been replaced within the framework's package structure. As a result, you need to update your import statements from org.dwcj to com.webforj when using webforJ. New code written shouldn't be affected by the change."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"//For example:\r\nimport com.webforj.App;\r\nimport com.webforj.component.button.event.ButtonClickEvent;\r\nimport com.webforj.component.field.TextField;\r\nimport com.webforj.component.field.TextField.Type;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2610:(e,t,n)=>{var a=n(4836);t.Z=void 0;var r=a(n(4938)),o=n(5893),s=(0,r.default)((0,o.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=s},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var a=n(6010);const r={tabItem:"tabItem_Ymn6"};var o=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(7294),r=n(6010),o=n(2466),s=n(6550),i=n(469),l=n(1980),c=n(7392),u=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,d]=m({queryString:n,groupId:r}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=n(5893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,A.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=b(e);return(0,A.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,A.jsx)(v,{...e,...t}),(0,A.jsx)(w,{...e,...t})]})}function j(e){const t=(0,g.Z)();return(0,A.jsx)(x,{...e,children:d(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7294),r=n(917),o=n(5697),s=n.n(o),i=n(4866),l=n(5162),c=n(4673),u=n(1750);const d=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",p="data:image/png;base64,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";var m=n(2949),b=n(2610),g=n(5944);function f(e){let{collapse:t,setCollapse:n}=e;f.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const a=r.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,o=r.iv`
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
  `,i=r.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,g.tZ)("div",{css:a,children:(0,g.tZ)("button",{css:o,onClick:()=>{n(!t)},children:t?(0,g.tZ)("img",{alt:"collapse_button",css:i,src:d,className:"icon-tabler-arrow-bar-up"}):(0,g.tZ)("img",{css:i,src:h,className:"icon-tabler-arrow-bar-down"})})})}function A(e){let{url:t}=e;const n=r.iv`
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
  `,a=r.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,g.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,g.tZ)("img",{css:a,src:p})})}function v(e){let{path:t,javaC:n,javaE:o,urls:d,cssURL:h,javaHighlight:p,height:w,frame:x,tabs:j}=e;v.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[y,B]=(0,a.useState)(""),[D,k]=(0,a.useState)(""),[S,Z]=(0,a.useState)({}),[C,E]=(0,a.useState)(""),[L,N]=(0,a.useState)(!(!n||!o)),[T,z]=(0,a.useState)(!1),[M,J]=(0,a.useState)({}),[F,O]=(0,a.useState)(!1),[V,H]=(0,a.useState)(0),[G,X]=(0,a.useState)(0),[Y,R]=(0,a.useState)(25),[W,I]=(0,a.useState)(25),[P,q]=(0,a.useState)(0),[U,K]=(0,a.useState)(!1),Q=(0,a.useRef)(null),_=(0,a.useRef)(null);function $(e,t,n){return(0,g.tZ)(u.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,a.useEffect)((()=>{o&&fetch(o).then((e=>e.text())).then((e=>{k(e);const t=new URL(o).pathname.split("/"),n=t[t.length-1];J((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{B(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{E(e);const t=new URL(h).pathname.split("/"),n=t[t.length-1];J((e=>({...e,cssFile:n})))})),d&&d.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),a=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){Z((n=>({...n,[e]:{fileName:e,code:t}})))}(a,e)}))})),q(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{O(!1)},te=e=>{if(F){const t=e.clientX-V;G+t>P/3&&(Q.current.style.width=`${G+t}px`,_.current.style.right=(Y-t<25?25:Y-t)+"px",I(Y-t<25?25:Y-t))}},ne=r.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ae=r.iv`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,re=r.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${w||"100%"};
    pointer-events: ${F?"none":"auto"};
  `,oe=r.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${T&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,se=r.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ie=r.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==x?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==x?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,le=r.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=r.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,g.BX)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=x?(0,g.BX)("div",{onMouseEnter:()=>{z(!0)},onMouseLeave:()=>z(!1),css:ae,children:[(0,g.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.I)().colorMode,css:re,ref:Q,onMouseMove:te}),(0,g.tZ)("div",{css:oe,ref:_,children:(0,g.tZ)(A,{url:t})}),(0,g.tZ)("div",{css:se,onMouseDown:e=>{e.preventDefault(),O(!0),H(e.clientX),X(Q.current?Q.current.offsetWidth:0),R(W)},children:(0,g.tZ)(b.Z,{})})]}):null,(0,g.BX)(c.Z,{css:ie,summary:(0,g.tZ)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[n&&o?(0,g.tZ)(f,{collapse:L,setCollapse:N}):null,h?(0,g.BX)(i.Z,{css:le,children:[(0,g.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,g.tZ)(u.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:L?y:D})}),Object.keys(S).map(((e,t)=>(0,g.tZ)(l.Z,{value:e,label:e,children:$(S[e],ce,p)},"tab"+t))),(0,g.tZ)(l.Z,{value:j?j[1]:"CSS",label:j?j[1]:M.cssFile,children:(0,g.tZ)(u.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:C})})]}):(0,g.BX)(i.Z,{css:le,children:[(0,g.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,g.tZ)(u.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:L?y:D})}),Object.keys(S).map(((e,t)=>(0,g.tZ)(l.Z,{value:e,label:e,children:$(S[e],ce,p)},"tab"+t)))]})]})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(8397),r=n(5893);function o(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{...e})})}}}]);
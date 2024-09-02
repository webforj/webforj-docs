"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[6477],{4325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>A,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(4848),a=r(8453),o=r(5943);const i={sidebar_position:15,title:"Filtering",slug:"filtering"},s=void 0,l={id:"components/table/table_filtering",title:"Filtering",description:"The Table component allows you to implement filtering functionality to narrow down displayed data based on specific criteria. Filtering can be achieved by defining a filtering criteria using the setFilter(Predicate filter) method provided by the Repository associated with the table.",source:"@site/docs/components/table/table_filtering.md",sourceDirName:"components/table",slug:"/components/table/filtering",permalink:"/docs/components/table/filtering",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/table/table_filtering.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Filtering",slug:"filtering"},sidebar:"documentationSidebar",previous:{title:"Editing and Refreshing",permalink:"/docs/components/table/refreshing"},next:{title:"Interactivity",permalink:"/docs/components/table/Interactivity"}},c={},d=[];function u(e){const t={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Table"})," component allows you to implement filtering functionality to narrow down displayed data based on specific criteria. Filtering can be achieved by defining a filtering criteria using the ",(0,n.jsx)(t.code,{children:"setFilter(Predicate<T> filter)"})," method provided by the ",(0,n.jsx)(t.code,{children:"Repository"})," associated with the table."]}),"\n",(0,n.jsx)(o.A,{path:"https://demo.webforj.com/webapp/controlsamples?class=addondemos.tabledemos.TableFiltering",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/TableFiltering.java",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/MusicRecord.java","https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/Service.java"],height:"600px"}),"\n",(0,n.jsxs)(t.p,{children:["In the above example, the ",(0,n.jsx)(t.code,{children:"setFilter()"})," method is used to define a filtering criteria based on the title of ",(0,n.jsx)(t.code,{children:"MusicRecord"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"setFilter()"})," method belongs to the ",(0,n.jsx)(t.code,{children:"Repository"})," class, and is not a built-in behavior of the ",(0,n.jsx)(t.code,{children:"Table"})," itself."]})}),"\n",(0,n.jsxs)(t.p,{children:["The filter is then applied when the user modifies the content of the search field, updating the searchTerm and triggering the ",(0,n.jsx)(t.code,{children:"commit()"})," method to refresh the displayed data."]})]})}function A(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2706:(e,t,r)=>{var n=r(4994);t.A=void 0;var a=n(r(2032)),o=r(4848),i=(0,a.default)((0,o.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.A=i},9365:(e,t,r)=>{r.d(t,{A:()=>i});r(6540);var n=r(53);const a={tabItem:"tabItem_Ymn6"};var o=r(4848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(6540),a=r(53),o=r(3104),i=r(6347),s=r(205),l=r(7485),c=r(1682),d=r(9466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function A(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=A(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,u]=p({queryString:r,groupId:a}),[b,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=c??b;return m({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var h=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),a=s[r].value;a!==n&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(w,{...e,...t})]})}function y(e){const t=(0,h.A)();return(0,f.jsx)(x,{...e,children:u(e.children)},String(t))}},5943:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(6540),a=r(7437),o=r(5556),i=r.n(o),s=r(1470),l=r(9365),c=r(1622),d=r(1302);const u=r.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",A="data:image/png;base64,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",m="data:image/png;base64,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";var p=r(5293),b=r(2706),h=r(2445);function g(e){let{collapse:t,setCollapse:r}=e;g.propTypes={collapse:i().bool.isRequired,setCollapse:i().func.isRequired};const n=a.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,o=a.AH`
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
  `,s=a.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,h.Y)("div",{css:n,children:(0,h.Y)("button",{css:o,onClick:()=>{r(!t)},children:t?(0,h.Y)("img",{alt:"collapse_button",css:s,src:u,className:"icon-tabler-arrow-bar-up"}):(0,h.Y)("img",{css:s,src:A,className:"icon-tabler-arrow-bar-down"})})})}function f(e){let{url:t}=e;const r=a.AH`
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
  `,n=a.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,h.Y)("button",{css:r,onClick:()=>{window.open(t,"_blank")},children:(0,h.Y)("img",{css:n,src:m})})}function v(e){let{path:t,javaC:r,javaE:o,urls:u,cssURL:A,javaHighlight:m,height:w,frame:x,tabs:y}=e;v.propTypes={path:i().string.isRequired,javaC:i().string,javaE:i().string,urls:i().arrayOf(i().string),cssURL:i().string,javaHighlight:i().string,height:i().string,frame:i().string,tabs:i().arrayOf(i().string)};const[D,B]=(0,n.useState)(""),[j,S]=(0,n.useState)(""),[k,C]=(0,n.useState)({}),[E,F]=(0,n.useState)(""),[Y,H]=(0,n.useState)(!(!r||!o)),[L,M]=(0,n.useState)(!1),[N,O]=(0,n.useState)({}),[V,T]=(0,n.useState)(!1),[z,G]=(0,n.useState)(0),[X,J]=(0,n.useState)(0),[R,I]=(0,n.useState)(25),[Z,W]=(0,n.useState)(25),[P,q]=(0,n.useState)(0),[U,K]=(0,n.useState)(!1),Q=(0,n.useRef)(null),_=(0,n.useRef)(null);function $(e,t,r){return(0,h.Y)(d.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:r,children:e.code})}(0,n.useEffect)((()=>{o&&fetch(o).then((e=>e.text())).then((e=>{S(e);const t=new URL(o).pathname.split("/"),r=t[t.length-1];O((e=>({...e,javaFile:r})))})),r&&fetch(r).then((e=>e.text())).then((e=>{B(e)})),A&&fetch(A).then((e=>e.text())).then((e=>{F(e);const t=new URL(A).pathname.split("/"),r=t[t.length-1];O((e=>({...e,cssFile:r})))})),u&&u.forEach((function(e){const t=new URL(e),r=t.pathname.split("/"),n=r[r.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){C((r=>({...r,[e]:{fileName:e,code:t}})))}(n,e)}))})),q(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{T(!1)},te=e=>{if(V){const t=e.clientX-z;X+t>P/3&&(Q.current.style.width=`${X+t}px`,_.current.style.right=(R-t<25?25:R-t)+"px",W(R-t<25?25:R-t))}},re=a.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ne=a.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ae=a.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${w||"100%"};
    pointer-events: ${V?"none":"auto"};
  `,oe=a.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${L&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ie=a.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,se=a.AH`
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
  `,le=a.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=a.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,h.FD)("div",{css:re,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=x?(0,h.FD)("div",{onMouseEnter:()=>{M(!0)},onMouseLeave:()=>M(!1),css:ne,children:[(0,h.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,p.G)().colorMode,css:ae,ref:Q,onMouseMove:te}),(0,h.Y)("div",{css:oe,ref:_,children:(0,h.Y)(f,{url:t})}),(0,h.Y)("div",{css:ie,onMouseDown:e=>{e.preventDefault(),T(!0),G(e.clientX),J(Q.current?Q.current.offsetWidth:0),I(Z)},children:(0,h.Y)(b.A,{})})]}):null,(0,h.FD)(c.A,{css:se,summary:(0,h.Y)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[r&&o?(0,h.Y)(g,{collapse:Y,setCollapse:H}):null,A?(0,h.FD)(s.A,{css:le,children:[(0,h.Y)(l.A,{value:y?y[0]:"Java",label:y?y[0]:N.javaFile,default:!0,children:(0,h.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:Y?D:j})}),Object.keys(k).map(((e,t)=>(0,h.Y)(l.A,{value:e,label:e,children:$(k[e],ce,m)},"tab"+t))),(0,h.Y)(l.A,{value:y?y[1]:"CSS",label:y?y[1]:N.cssFile,children:(0,h.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:E})})]}):(0,h.FD)(s.A,{css:le,children:[(0,h.Y)(l.A,{value:y?y[0]:"Java",label:y?y[0]:N.javaFile,default:!0,children:(0,h.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:Y?D:j})}),Object.keys(k).map(((e,t)=>(0,h.Y)(l.A,{value:e,label:e,children:$(k[e],ce,m)},"tab"+t)))]})]})]})}},6999:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var n=r(4718),a=r(4848);function o(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.A,{...e})})}}}]);
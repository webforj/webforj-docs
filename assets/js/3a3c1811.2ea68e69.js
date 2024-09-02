"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[6156],{3585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(4848),n=r(8453);r(5943);const o={title:"Whats new in version 24.02?",description:"Get to know the features, fixes and functionality new in webforJ version 24.02.",slug:"whats-new-24.02",date:new Date("2024-06-03T00:00:00.000Z"),authors:[{name:"webforJ Team",url:"https://github.com/webforj",image_url:"/img/webforj_icon.svg"}],tags:["webforJ","v24.02","release"],image:"https://webforj.com/wp-content/uploads/2024/04/cropped-Logo_webforJ_RGB_1-removebg-preview.png",hide_table_of_contents:!1},s=void 0,i={permalink:"/blog/whats-new-24.02",source:"@site/blog/2024-06-03-webforj-v24.02/24.02.md",title:"Whats new in version 24.02?",description:"Get to know the features, fixes and functionality new in webforJ version 24.02.",date:"2024-06-03T00:00:00.000Z",formattedDate:"June 3, 2024",tags:[{label:"webforJ",permalink:"/blog/tags/webfor-j"},{label:"v24.02",permalink:"/blog/tags/v-24-02"},{label:"release",permalink:"/blog/tags/release"}],readingTime:2.885,hasTruncateMarker:!0,authors:[{name:"webforJ Team",url:"https://github.com/webforj",image_url:"/img/webforj_icon.svg",imageURL:"/img/webforj_icon.svg"}],frontMatter:{title:"Whats new in version 24.02?",description:"Get to know the features, fixes and functionality new in webforJ version 24.02.",slug:"whats-new-24.02",date:"2024-06-03T00:00:00.000Z",authors:[{name:"webforJ Team",url:"https://github.com/webforj",image_url:"/img/webforj_icon.svg",imageURL:"/img/webforj_icon.svg"}],tags:["webforJ","v24.02","release"],image:"https://webforj.com/wp-content/uploads/2024/04/cropped-Logo_webforJ_RGB_1-removebg-preview.png",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"What's new in version 24.10?",permalink:"/blog/whats-new-24.10"},nextItem:{title:"Whats new in version 24.01?",permalink:"/blog/whats-new-24.01"}},l={authorsImageUrls:[void 0]},u=[];function c(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,a.jsx)(t.p,{children:"Webforj version 24.02 is live and available for development. Learn more about what main features and fixes are included in this release."})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},2706:(e,t,r)=>{var a=r(4994);t.A=void 0;var n=a(r(2032)),o=r(4848),s=(0,n.default)((0,o.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.A=s},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var a=r(53);const n={tabItem:"tabItem_Ymn6"};var o=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>D});var a=r(6540),n=r(53),o=r(3104),s=r(6347),i=r(205),l=r(7485),u=r(1682),c=r(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function A(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=A(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=u??p;return b({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=r(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function v(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=i[r].value;n!==a&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.A)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",h.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(w,{...e,...t})]})}function D(e){const t=(0,g.A)();return(0,f.jsx)(x,{...e,children:d(e.children)},String(t))}},5943:(e,t,r)=>{r.d(t,{A:()=>v});var a=r(6540),n=r(7437),o=r(5556),s=r.n(o),i=r(1470),l=r(9365),u=r(1622),c=r(1302);const d=r.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",A="data:image/png;base64,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",b="data:image/png;base64,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";var m=r(5293),p=r(2706),g=r(2445);function h(e){let{collapse:t,setCollapse:r}=e;h.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const a=n.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,o=n.AH`
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
  `,i=n.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,g.Y)("div",{css:a,children:(0,g.Y)("button",{css:o,onClick:()=>{r(!t)},children:t?(0,g.Y)("img",{alt:"collapse_button",css:i,src:d,className:"icon-tabler-arrow-bar-up"}):(0,g.Y)("img",{css:i,src:A,className:"icon-tabler-arrow-bar-down"})})})}function f(e){let{url:t}=e;const r=n.AH`
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
  `,a=n.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,g.Y)("button",{css:r,onClick:()=>{window.open(t,"_blank")},children:(0,g.Y)("img",{css:a,src:b})})}function v(e){let{path:t,javaC:r,javaE:o,urls:d,cssURL:A,javaHighlight:b,height:w,frame:x,tabs:D}=e;v.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[y,B]=(0,a.useState)(""),[k,S]=(0,a.useState)(""),[L,C]=(0,a.useState)({}),[E,Y]=(0,a.useState)(""),[j,H]=(0,a.useState)(!(!r||!o)),[M,F]=(0,a.useState)(!1),[J,N]=(0,a.useState)({}),[O,G]=(0,a.useState)(!1),[V,z]=(0,a.useState)(0),[T,X]=(0,a.useState)(0),[W,R]=(0,a.useState)(25),[Z,I]=(0,a.useState)(25),[q,P]=(0,a.useState)(0),[U,K]=(0,a.useState)(!1),Q=(0,a.useRef)(null),_=(0,a.useRef)(null);function $(e,t,r){return(0,g.Y)(c.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:r,children:e.code})}(0,a.useEffect)((()=>{o&&fetch(o).then((e=>e.text())).then((e=>{S(e);const t=new URL(o).pathname.split("/"),r=t[t.length-1];N((e=>({...e,javaFile:r})))})),r&&fetch(r).then((e=>e.text())).then((e=>{B(e)})),A&&fetch(A).then((e=>e.text())).then((e=>{Y(e);const t=new URL(A).pathname.split("/"),r=t[t.length-1];N((e=>({...e,cssFile:r})))})),d&&d.forEach((function(e){const t=new URL(e),r=t.pathname.split("/"),a=r[r.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){C((r=>({...r,[e]:{fileName:e,code:t}})))}(a,e)}))})),P(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{G(!1)},te=e=>{if(O){const t=e.clientX-V;T+t>q/3&&(Q.current.style.width=`${T+t}px`,_.current.style.right=(W-t<25?25:W-t)+"px",I(W-t<25?25:W-t))}},re=n.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ae=n.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ne=n.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${w||"100%"};
    pointer-events: ${O?"none":"auto"};
  `,oe=n.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${M&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,se=n.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ie=n.AH`
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
  `,le=n.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ue=n.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,g.FD)("div",{css:re,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=x?(0,g.FD)("div",{onMouseEnter:()=>{F(!0)},onMouseLeave:()=>F(!1),css:ae,children:[(0,g.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.G)().colorMode,css:ne,ref:Q,onMouseMove:te}),(0,g.Y)("div",{css:oe,ref:_,children:(0,g.Y)(f,{url:t})}),(0,g.Y)("div",{css:se,onMouseDown:e=>{e.preventDefault(),G(!0),z(e.clientX),X(Q.current?Q.current.offsetWidth:0),R(Z)},children:(0,g.Y)(p.A,{})})]}):null,(0,g.FD)(u.A,{css:ie,summary:(0,g.Y)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[r&&o?(0,g.Y)(h,{collapse:j,setCollapse:H}):null,A?(0,g.FD)(i.A,{css:le,children:[(0,g.Y)(l.A,{value:D?D[0]:"Java",label:D?D[0]:J.javaFile,default:!0,children:(0,g.Y)(c.A,{css:ue,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:b,children:j?y:k})}),Object.keys(L).map(((e,t)=>(0,g.Y)(l.A,{value:e,label:e,children:$(L[e],ue,b)},"tab"+t))),(0,g.Y)(l.A,{value:D?D[1]:"CSS",label:D?D[1]:J.cssFile,children:(0,g.Y)(c.A,{css:ue,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:E})})]}):(0,g.FD)(i.A,{css:le,children:[(0,g.Y)(l.A,{value:D?D[0]:"Java",label:D?D[0]:J.javaFile,default:!0,children:(0,g.Y)(c.A,{css:ue,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:b,children:j?y:k})}),Object.keys(L).map(((e,t)=>(0,g.Y)(l.A,{value:e,label:e,children:$(L[e],ue,b)},"tab"+t)))]})]})]})}},6999:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var a=r(4718),n=r(4848);function o(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.A,{...e})})}}}]);
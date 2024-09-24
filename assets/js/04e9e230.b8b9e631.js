"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5629],{736:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>A,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=t(4848),a=t(8453),o=t(5943),s=(t(1530),t(2151),t(1803)),i=t(5529);const l={title:"Spinner"},c=void 0,d={id:"components/spinner/spinner",title:"Spinner",description:"A Spinner is a UI component used to indicate the progress of an indeterminate operation. When a process takes time to complete but the exact duration is unknown (such as loading content or submitting a form), a spinner provides a visual cue to users that something is in progress.",source:"@site/docs/components/spinner/spinner.md",sourceDirName:"components/spinner",slug:"/components/spinner/",permalink:"/docs/components/spinner/",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/spinner/spinner.md",tags:[],version:"current",frontMatter:{title:"Spinner"},sidebar:"documentationSidebar",previous:{title:"Slider",permalink:"/docs/components/slider"},next:{title:"Splitter",permalink:"/docs/components/splitter"}},u={},p=[{value:"Creating a <code>Spinner</code>",id:"creating-a-spinner",level:2},{value:"Controlling the <code>Spinner</code>",id:"controlling-the-spinner",level:2},{value:"Speed",id:"speed",level:3},{value:"Pausing and resuming",id:"pausing-and-resuming",level:3},{value:"Rotation direction",id:"rotation-direction",level:2}];function h(e){const n={admonition:"admonition",code:"code",div:"div",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,r.jsx)(i.A,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-spinner",clickable:!1,iconName:"code"}),"\n",(0,r.jsx)(s.A,{type:"spinner",location:"com/webforj/component/spinner/Spinner",top:"true"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"Spinner"})," is a UI component used to indicate the progress of an indeterminate operation. When a process takes time to complete but the exact duration is unknown (such as loading content or submitting a form), a spinner provides a visual cue to users that something is in progress."]}),"\n",(0,r.jsxs)(n.p,{children:["webforJ's ",(0,r.jsx)(n.code,{children:"Spinner"})," and its variants are highly customizable, allowing developers to customize it in a way that best suits the needs of the app being created."]}),"\n",(0,r.jsxs)(n.h2,{id:"creating-a-spinner",children:["Creating a ",(0,r.jsx)(n.code,{children:"Spinner"})]}),"\n",(0,r.jsxs)(n.p,{children:["To create a basic ",(0,r.jsx)(n.code,{children:"Spinner"}),", you can use the ",(0,r.jsx)(n.code,{children:"Spinner"})," class, which offers constructors that allow you to specify the ",(0,r.jsx)(n.code,{children:"Theme"})," and ",(0,r.jsx)(n.code,{children:"Expanse"}),". These configurations allow developers to fine tune how a spinner should appear in color and size to best fit the ",(0,r.jsx)(n.code,{children:"Spinner"})," component's intended use case."]}),"\n",(0,r.jsx)(o.A,{path:"http://localhost:8888/webapp/controlsamples?class=componentdemos.spinnerdemos.SpinnerDemo",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/spinnerdemos/SpinnerDemo.java",height:"225px"}),"\n",(0,r.jsx)(n.admonition,{title:"Defaults",type:"info",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Spinner"})," component will have ",(0,r.jsx)(n.code,{children:"Theme.DEFAULT"})," and ",(0,r.jsx)(n.code,{children:"SpinnerExpanse.NONE"})," applied when the default constructor is used."]})}),"\n",(0,r.jsxs)(n.h2,{id:"controlling-the-spinner",children:["Controlling the ",(0,r.jsx)(n.code,{children:"Spinner"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Spinner"})," component allows you to control the speed at which it spins as well as pausing and resuming rotation."]}),"\n",(0,r.jsx)(n.h3,{id:"speed",children:"Speed"}),"\n",(0,r.jsxs)(n.p,{children:["You can adjust the speed of the spinner's rotation using the ",(0,r.jsx)(n.code,{children:"setSpeed()"})," method. The speed is defined in milliseconds needed to complete a full rotation, where a smaller value means a faster rotation."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"spinner.setSpeed(500);  // Sets the spinner to rotate every 500 milliseconds\n"})}),"\n",(0,r.jsx)(n.p,{children:"In this example, the spinner completes a rotation every 500 milliseconds. You can increase this value for a slower rotation or decrease it for a faster one."}),"\n",(0,r.jsx)(n.div,{children:(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.code,{children:"Spinner"})," will take 1000 milliseconds to complete one full rotation."]})}),"\n",(0,r.jsx)(n.h3,{id:"pausing-and-resuming",children:"Pausing and resuming"}),"\n",(0,r.jsxs)(n.p,{children:["To pause the spinner, use the ",(0,r.jsx)(n.code,{children:"setPaused()"})," method. This stops the rotation of the ",(0,r.jsx)(n.code,{children:"Spinner"}),". This would commonly be done before hiding the ",(0,r.jsx)(n.code,{children:"Spinner"})," from view, but does not in and of itself hide the ",(0,r.jsx)(n.code,{children:"Spinner"})," component."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"spinner.setPaused(true);  // Pauses the spinner\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To resume the spinning animation, simply pass ",(0,r.jsx)(n.code,{children:"false"})," to the ",(0,r.jsx)(n.code,{children:"setPaused()"})," method."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"spinner.setPaused(false);  // Resumes the spinner\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rotation-direction",children:"Rotation direction"})]})}function A(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7785:(e,n,t)=>{var r=t(4994);n.A=void 0;var a=r(t(2032)),o=t(4848),s=(0,a.default)((0,o.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");n.A=s},2706:(e,n,t)=>{var r=t(4994);n.A=void 0;var a=r(t(2032)),o=t(4848),s=(0,a.default)((0,o.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");n.A=s},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(53);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(6540),a=t(53),o=t(3104),s=t(6347),i=t(205),l=t(7485),c=t(1682),d=t(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function A(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=A({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=c??m;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(x,{...e,...n})]})}function j(e){const n=(0,b.A)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(n))}},5943:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(6540),a=t(7437),o=t(5556),s=t.n(o),i=t(1470),l=t(9365),c=t(1622),d=t(1302);const u=t.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",p="data:image/png;base64,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",h="data:image/png;base64,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";var A=t(5293),m=t(2706),b=t(2445);function g(e){let{collapse:n,setCollapse:t}=e;g.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const r=a.AH`
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
  `,i=a.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,b.Y)("div",{css:r,children:(0,b.Y)("button",{css:o,onClick:()=>{t(!n)},children:n?(0,b.Y)("img",{alt:"collapse_button",css:i,src:u,className:"icon-tabler-arrow-bar-up"}):(0,b.Y)("img",{css:i,src:p,className:"icon-tabler-arrow-bar-down"})})})}function f(e){let{url:n}=e;const t=a.AH`
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
  `,r=a.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,b.Y)("button",{css:t,onClick:()=>{window.open(n,"_blank")},children:(0,b.Y)("img",{css:r,src:h})})}function v(e){let{path:n,javaC:t,javaE:o,urls:u,cssURL:p,javaHighlight:h,height:x,frame:w,tabs:j}=e;v.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[y,S]=(0,r.useState)(""),[D,k]=(0,r.useState)(""),[B,Y]=(0,r.useState)({}),[C,E]=(0,r.useState)(""),[H,L]=(0,r.useState)(!(!t||!o)),[N,F]=(0,r.useState)(!1),[M,z]=(0,r.useState)({}),[O,T]=(0,r.useState)(!1),[V,G]=(0,r.useState)(0),[X,J]=(0,r.useState)(0),[P,I]=(0,r.useState)(25),[R,W]=(0,r.useState)(25),[Z,q]=(0,r.useState)(0),[U,K]=(0,r.useState)(!1),Q=(0,r.useRef)(null),_=(0,r.useRef)(null);function $(e,n,t){return(0,b.Y)(d.A,{css:n,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:t,children:e.code})}(0,r.useEffect)((()=>{o&&fetch(o).then((e=>e.text())).then((e=>{k(e);const n=new URL(o).pathname.split("/"),t=n[n.length-1];z((e=>({...e,javaFile:t})))})),t&&fetch(t).then((e=>e.text())).then((e=>{S(e)})),p&&fetch(p).then((e=>e.text())).then((e=>{E(e);const n=new URL(p).pathname.split("/"),t=n[n.length-1];z((e=>({...e,cssFile:t})))})),u&&u.forEach((function(e){const n=new URL(e),t=n.pathname.split("/"),r=t[t.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,n){Y((t=>({...t,[e]:{fileName:e,code:n}})))}(r,e)}))})),q(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{T(!1)},ne=e=>{if(O){const n=e.clientX-V;X+n>Z/3&&(Q.current.style.width=`${X+n}px`,_.current.style.right=(P-n<25?25:P-n)+"px",W(P-n<25?25:P-n))}},te=a.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,re=a.AH`
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
    height: ${x||"100%"};
    pointer-events: ${O?"none":"auto"};
  `,oe=a.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${N&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,se=a.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ie=a.AH`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==w?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==w?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `;return(0,b.FD)("div",{css:te,onMouseUp:ee,onMouseLeave:ee,onMouseMove:ne,children:["hidden"!=w?(0,b.FD)("div",{onMouseEnter:()=>{F(!0)},onMouseLeave:()=>F(!1),css:re,children:[(0,b.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:n+"&__theme__="+(0,A.G)().colorMode,css:ae,ref:Q,onMouseMove:ne}),(0,b.Y)("div",{css:oe,ref:_,children:(0,b.Y)(f,{url:n})}),(0,b.Y)("div",{css:se,onMouseDown:e=>{e.preventDefault(),T(!0),G(e.clientX),J(Q.current?Q.current.offsetWidth:0),I(R)},children:(0,b.Y)(m.A,{})})]}):null,(0,b.FD)(c.A,{css:ie,summary:(0,b.Y)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[t&&o?(0,b.Y)(g,{collapse:H,setCollapse:L}):null,p?(0,b.FD)(i.A,{css:le,children:[(0,b.Y)(l.A,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,b.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:H?y:D})}),Object.keys(B).map(((e,n)=>(0,b.Y)(l.A,{value:e,label:e,children:$(B[e],ce,h)},"tab"+n))),(0,b.Y)(l.A,{value:j?j[1]:"CSS",label:j?j[1]:M.cssFile,children:(0,b.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:C})})]}):(0,b.FD)(i.A,{css:le,children:[(0,b.Y)(l.A,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,b.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:H?y:D})}),Object.keys(B).map(((e,n)=>(0,b.Y)(l.A,{value:e,label:e,children:$(B[e],ce,h)},"tab"+n)))]})]})]})}},2151:(e,n,t)=>{t(6540),t(1803)},1803:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(6540),a=t(7437),o=t(276),s=t(526),i=t(7785);var l=t(2445);function c(e){let{type:n,location:t,top:c,children:d,code:u,suffix:p}=e;const[h,A]=(0,r.useState)("");(0,r.useEffect)((()=>{p||(p=""),A("https://javadoc.io/doc/com.webforj/webforj-"+n+"/latest/"+t+".html"+p)}),[]);const m=a.AH`
    display: inline;

    ${c&&a.AH`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=a.AH`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.FD)(l.FK,{children:["true"===c&&(0,l.Y)("div",{css:m,children:(0,l.Y)(o.A,{title:"JavaDoc",arrow:!0,children:(0,l.Y)(s.A,{css:b,label:"Java API",component:"a",href:h,icon:(0,l.Y)(i.A,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.Y)("div",{css:m,children:(0,l.Y)("a",{href:h,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.Y)("div",{css:m,children:(0,l.Y)("code",{children:(0,l.Y)("a",{href:h,target:"_blank",children:d})})})]})}},6999:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4718),a=t(4848);function o(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.A,{...e})})}}}]);
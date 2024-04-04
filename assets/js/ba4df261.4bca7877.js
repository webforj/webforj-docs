"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9580],{1629:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=o(5893),n=o(1151),i=o(6957),s=(o(7796),o(3273)),a=o(2665);const l={sidebar_position:1,title:"ColorField",slug:"colorfield"},c=void 0,d={id:"components/fields/color-field",title:"ColorField",description:"The ColorField class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the Field documentation page for an overview of Field properties, events, and other important information.",source:"@site/docs/components/fields/color-field.md",sourceDirName:"components/fields",slug:"/components/fields/colorfield",permalink:"/docs/components/fields/colorfield",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/fields/color-field.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"ColorField",slug:"colorfield"},sidebar:"documentationSidebar",previous:{title:"Field",permalink:"/docs/components/fields/"},next:{title:"DateField",permalink:"/docs/components/fields/datefield"}},u={},h=[{value:"Usages",id:"usages",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Color Code Format",id:"color-code-format",level:3},{value:"Static Utilities",id:"static-utilities",level:3},{value:"Best Practices",id:"best-practices",level:3}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,r.jsx)(a.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-field",clickable:!1,iconName:"code"}),"\n",(0,r.jsx)(s.Z,{type:"engine",location:"org/dwcj/component/field/ColorField",top:"true"}),"\n",(0,r.jsxs)(t.admonition,{type:"success",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{children:(0,r.jsx)(t.strong,{children:"Important"})}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ColorField"})," class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/docs/components/fields",children:"Field documentation page"})})," for an overview of Field properties, events, and other important information."]})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ColorField"})," component is a powerful and versatile tool designed to provide an intuitive and interactive way to explore and select colors within your application. Whether you're designing a user interface, creating visualizations, or enhancing user experience, the ",(0,r.jsx)(t.code,{children:"ColorField"})," component offers a seamless and efficient approach to working with colors."]}),"\n",(0,r.jsx)(t.p,{children:"With a simple drag-and-hover interface, users can effortlessly navigate through the color space to find the exact hue, saturation, and brightness that matches their creative vision. Users can also input color values directly, ensuring precision."}),"\n",(0,r.jsx)(i.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.fielddemos.ColorFieldDemo",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/fielddemos/ColorFieldDemo.java",javaC:"",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/fieldstyles/color_field_styles.css",height:"300px"}),"\n",(0,r.jsx)(t.h3,{id:"usages",children:"Usages"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ColorField"})," is best used in scenarios where color selection is a crucial part of the user interface or application functionality. This section outlines the best practices and scenarios for using the color field component effectively."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Graphic Design and Image Editing Tools"}),": Color fields are essential in applications that involve:"]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Graphic design elements or functionality"}),"\n",(0,r.jsx)(t.li,{children:"Image editing and customization"}),"\n",(0,r.jsx)(t.li,{children:"Tasks that require selecting or modifying colors"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Theme Customization"}),": If your application allows users to customize themes, using a color field enables them to choose colors for different UI elements, such as backgrounds, text, buttons, etc."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Data Visualization"}),": Color fields are valuable in applications that involve data visualization, as they allow users to select colors for charts, graphs, heatmaps, and other visual representations."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Form Inputs"}),": When designing forms that require color inputs, using a color field simplifies the color selection process for users."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ColorField"})," class has four constructors:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ColorField(String label, Color color)"}),": Creates a ",(0,r.jsx)(t.code,{children:"ColorField"})," with a given label and color."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ColorField(String label)"}),": Creates a ",(0,r.jsx)(t.code,{children:"ColorField"})," with a given label but with no pre-populated color."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ColorField(Color color)"}),": Creates a ",(0,r.jsx)(t.code,{children:"ColorField"})," with a given color, but without a label."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ColorField()"}),": Creates a ",(0,r.jsx)(t.code,{children:"ColorField"})," without any provided information."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"color-code-format",children:"Color Code Format"}),"\n",(0,r.jsxs)(t.p,{children:["Currently, the ",(0,r.jsx)(t.code,{children:"ColorField"})," supports ",(0,r.jsx)(t.code,{children:"#RRGGBB"})," hexadecimal format. Only simple colors (without alpha channel) are allowed in the picker interface. Additionally, the ",(0,r.jsx)(t.code,{children:"ColorField"})," comes along with a various methods that interact with the ",(0,r.jsx)(t.code,{children:"java.awt.Color"})," class to add flexibility."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"The component's presentation may vary substantially from one browser and/or platform to another. It might be a simple textual field that automatically validates to ensure that the color information is entered in the proper format, a platform-standard color picker, or some kind of custom color picker window."})}),"\n",(0,r.jsx)(t.h3,{id:"static-utilities",children:"Static Utilities"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ColorField"})," class also provides the following static utility methods:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Color fromHex(String hex)"}),": Convert a color string in hex format to a ",(0,r.jsx)(t.code,{children:"Color"})," object which can then be utilized with this class, or elsewhere."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"String toHex(Color color)"}),": Convert the given value to the corresponding hex representation."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"boolean isValidHexColor(String hex)"}),": Check if the given value is a valid 7 character hex color."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(t.p,{children:["To ensure an optimal user experience when using the ",(0,r.jsx)(t.code,{children:"ColorField"})," component, consider the following best practices:"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Consider Contextual Assistance"}),": Provide contextual assistance, such as tooltips or inline help, to guide users in understanding the purpose and usage of the color field component."]})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},6031:(e,t,o)=>{var r=o(4836);t.Z=void 0;var n=r(o(4938)),i=o(5893),s=(0,n.default)((0,i.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=s},2610:(e,t,o)=>{var r=o(4836);t.Z=void 0;var n=r(o(4938)),i=o(5893),s=(0,n.default)((0,i.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=s},5162:(e,t,o)=>{o.d(t,{Z:()=>s});o(7294);var r=o(6010);const n={tabItem:"tabItem_Ymn6"};var i=o(5893);function s(e){let{children:t,hidden:o,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,s),hidden:o,children:t})}},4866:(e,t,o)=>{o.d(t,{Z:()=>j});var r=o(7294),n=o(6010),i=o(2466),s=o(6550),a=o(469),l=o(1980),c=o(7392),d=o(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:o}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:o,attributes:r,default:n}}=e;return{value:t,label:o,attributes:r,default:n}}))}(o);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function p(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:o=!1,groupId:n}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=o.find((e=>e.default))??o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=m({queryString:o,groupId:n}),[f,g]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(o);return[n,(0,r.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:n}),A=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{A&&l(A)}),[A]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=o(2389);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=o(5893);function v(e){let{className:t,block:o,selectedValue:r,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,o=l.indexOf(t),n=a[o].value;n!==r&&(c(t),s(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;t=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;t=l[o]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},t),children:a.map((e=>{let{value:t,label:o,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,n.Z)("tabs__item",A.tabItem,i?.className,{"tabs__item--active":r===t}),children:o??t},t)}))})}function x(e){let{lazy:t,children:o,selectedValue:n}=e;const i=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,n.Z)("tabs-container",A.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(x,{...e,...t})]})}function j(e){const t=(0,g.Z)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(t))}},6957:(e,t,o)=>{o.d(t,{Z:()=>v});var r=o(7294),n=o(917),i=o(5697),s=o.n(i),a=o(4866),l=o(5162),c=o(4673),d=o(1750);const u=o.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",p="data:image/png;base64,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";var m=o(2949),f=o(2610),g=o(5944);function A(e){let{collapse:t,setCollapse:o}=e;A.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const r=n.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,i=n.iv`
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
  `,a=n.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,g.tZ)("div",{css:r,children:(0,g.tZ)("button",{css:i,onClick:()=>{o(!t)},children:t?(0,g.tZ)("img",{alt:"collapse_button",css:a,src:u,className:"icon-tabler-arrow-bar-up"}):(0,g.tZ)("img",{css:a,src:h,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const o=n.iv`
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
  `,r=n.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,g.tZ)("button",{css:o,onClick:()=>{window.open(t,"_blank")},children:(0,g.tZ)("img",{css:r,src:p})})}function v(e){let{path:t,javaC:o,javaE:i,urls:u,cssURL:h,javaHighlight:p,height:x,frame:w,tabs:j}=e;v.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[y,C]=(0,r.useState)(""),[Z,D]=(0,r.useState)(""),[k,B]=(0,r.useState)({}),[F,S]=(0,r.useState)(""),[E,L]=(0,r.useState)(!(!o||!i)),[z,T]=(0,r.useState)(!1),[M,N]=(0,r.useState)({}),[V,O]=(0,r.useState)(!1),[H,X]=(0,r.useState)(0),[G,Y]=(0,r.useState)(0),[J,I]=(0,r.useState)(25),[P,q]=(0,r.useState)(25),[W,R]=(0,r.useState)(0),[U,K]=(0,r.useState)(!1),Q=(0,r.useRef)(null),_=(0,r.useRef)(null);function $(e,t,o){return(0,g.tZ)(d.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:o,children:e.code})}(0,r.useEffect)((()=>{i&&fetch(i).then((e=>e.text())).then((e=>{D(e);const t=new URL(i).pathname.split("/"),o=t[t.length-1];N((e=>({...e,javaFile:o})))})),o&&fetch(o).then((e=>e.text())).then((e=>{C(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{S(e);const t=new URL(h).pathname.split("/"),o=t[t.length-1];N((e=>({...e,cssFile:o})))})),u&&u.forEach((function(e){const t=new URL(e),o=t.pathname.split("/"),r=o[o.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){B((o=>({...o,[e]:{fileName:e,code:t}})))}(r,e)}))})),R(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{O(!1)},te=e=>{if(V){const t=e.clientX-H;G+t>W/3&&(Q.current.style.width=`${G+t}px`,_.current.style.right=(J-t<25?25:J-t)+"px",q(J-t<25?25:J-t))}},oe=n.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,re=n.iv`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ne=n.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${x||"100%"};
    pointer-events: ${V?"none":"auto"};
  `,ie=n.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${z&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,se=n.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ae=n.iv`
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
  `,le=n.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=n.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,g.BX)("div",{css:oe,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=w?(0,g.BX)("div",{onMouseEnter:()=>{T(!0)},onMouseLeave:()=>T(!1),css:re,children:[(0,g.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.I)().colorMode,css:ne,ref:Q,onMouseMove:te}),(0,g.tZ)("div",{css:ie,ref:_,children:(0,g.tZ)(b,{url:t})}),(0,g.tZ)("div",{css:se,onMouseDown:e=>{e.preventDefault(),O(!0),X(e.clientX),Y(Q.current?Q.current.offsetWidth:0),I(P)},children:(0,g.tZ)(f.Z,{})})]}):null,(0,g.BX)(c.Z,{css:ae,summary:(0,g.tZ)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[o&&i?(0,g.tZ)(A,{collapse:E,setCollapse:L}):null,h?(0,g.BX)(a.Z,{css:le,children:[(0,g.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,g.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:E?y:Z})}),Object.keys(k).map(((e,t)=>(0,g.tZ)(l.Z,{value:e,label:e,children:$(k[e],ce,p)},"tab"+t))),(0,g.tZ)(l.Z,{value:j?j[1]:"CSS",label:j?j[1]:M.cssFile,children:(0,g.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:F})})]}):(0,g.BX)(a.Z,{css:le,children:[(0,g.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,g.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:E?y:Z})}),Object.keys(k).map(((e,t)=>(0,g.tZ)(l.Z,{value:e,label:e,children:$(k[e],ce,p)},"tab"+t)))]})]})]})}},3273:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(7294),n=o(917),i=o(8230),s=o(4387),a=o(6031);var l=o(5944);function c(e){let{type:t,location:o,top:c,children:d,code:u,suffix:h}=e;const[p,m]=(0,r.useState)("");(0,r.useEffect)((()=>{h||(h=""),m("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+o+".html"+h)}),[]);const f=n.iv`
    display: inline;

    ${c&&n.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,g=n.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:f,children:(0,l.tZ)(i.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(s.Z,{css:g,label:"Java API",component:"a",href:p,icon:(0,l.tZ)(a.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:f,children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:f,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})})})]})}},1415:(e,t,o)=>{o.d(t,{Z:()=>i});o(7294);var r=o(8397),n=o(5893);function i(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Z,{...e})})}}}]);
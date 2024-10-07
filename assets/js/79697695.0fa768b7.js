"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[6885],{283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var r=n(4848),s=n(8453),i=(n(5943),n(1530),n(1803)),l=n(5529);const a={sidebar_position:6,title:"TextField",slug:"textfield"},o=void 0,c={id:"components/fields/text-field",title:"TextField",description:"The TextField class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the Field documentation page for an overview of Field properties, events, and other important information.",source:"@site/docs/components/fields/text-field.md",sourceDirName:"components/fields",slug:"/components/fields/textfield",permalink:"/docs/components/fields/textfield",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/fields/text-field.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"TextField",slug:"textfield"},sidebar:"documentationSidebar",previous:{title:"PasswordField",permalink:"/docs/components/fields/passwordfield"},next:{title:"TimeField",permalink:"/docs/components/fields/timefield"}},d={},h=[{value:"Usages",id:"usages",level:3},{value:"Types",id:"types",level:3},{value:"Placeholder Text",id:"placeholder-text",level:3},{value:"Selected Text",id:"selected-text",level:3},{value:"Best Practices",id:"best-practices",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,r.jsx)(l.A,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-field",clickable:!1,iconName:"code"}),"\n",(0,r.jsx)(i.A,{type:"foundation",location:"com/webforj/component/field/TextField",top:"true"}),"\n",(0,r.jsxs)(t.admonition,{type:"success",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{children:(0,r.jsx)(t.strong,{children:"Important"})}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"TextField"})," class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/docs/components/fields",children:"Field documentation page"})})," for an overview of Field properties, events, and other important information."]})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"TextField"})," component allows users to enter and edit text in a single line. It can be configured to display a specific virtual keyboard, such as a numeric keypad, email input, telephone input, or URL input. The component also provides built-in validation to reject values that do not adhere to the specified type."]}),"\n",(0,r.jsx)(t.h3,{id:"usages",children:"Usages"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"TextField"})," is suitable for a wide range of scenarios where text input or editing is required. Here are some examples of when to use the ",(0,r.jsx)(t.code,{children:"TextField"}),":"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Form Inputs"}),": A ",(0,r.jsx)(t.code,{children:"TextField"})," is commonly used in forms for capturing user input, such as names, addresses, or comments. It is best to use a ",(0,r.jsx)(t.code,{children:"TextField"})," in these applications when the input is generally short enough to fit on one line."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Search Functionality"}),": ",(0,r.jsx)(t.code,{children:"TextField"})," can be used to provide a search box, allowing users to input search queries."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Text Editing"}),": A ",(0,r.jsx)(t.code,{children:"TextField"})," is ideal for applications that require text editing or content creation, such as document editors, chat applications, or note-taking apps."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"types",children:"Types"}),"\n",(0,r.jsxs)(t.p,{children:["You can specify the type of the TextField using the ",(0,r.jsx)(t.code,{children:"setType"})," method. Similarly, the type can be retrieved using the ",(0,r.jsx)(t.code,{children:"getType"})," method, which will return an enum value."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Type.TEXT"}),": This is the default value for a ",(0,r.jsx)(t.code,{children:"TextField"}),", and automatically removes line breaks from the input value"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Type.EMAIL"}),": This configuration option is used for editing an email address. It has a relevant keyboard in supporting browsers and devices with dynamic keyboards."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Type.TEL"}),": This option is used for entering a telephone number. The field will display a telephone keypad in some devices with dynamic keypads."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Type.URL"}),": A field for entering a URL. It has a relevant keyboard in supporting browsers and devices with dynamic keyboards."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Type.SEARCH"}),": A single-line text field for entering search strings. Line-breaks are automatically removed from the input value."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"placeholder-text",children:"Placeholder Text"}),"\n",(0,r.jsxs)(t.p,{children:["You can set placeholder text for the ",(0,r.jsx)(t.code,{children:"TextField"})," using the ",(0,r.jsx)(t.code,{children:"setPlaceholder"})," method. The placeholder text is displayed when the field is empty, helping to prompt the user to enter appropriate input into the ",(0,r.jsx)(t.code,{children:"TextField"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"selected-text",children:"Selected Text"}),"\n",(0,r.jsxs)(t.p,{children:["It is possible to interact with the ",(0,r.jsx)(t.code,{children:"TextField"})," class to retrieve a user's selected text, and to get information about the user's selection. You can retrieve the selected text in the ",(0,r.jsx)(t.code,{children:"TextField"})," using the ",(0,r.jsx)(t.code,{children:"getSelectedText"})," method. This behavior would commonly be used in conjunction with an event. Similarly, it is possible to retrieve the current selection range of the ",(0,r.jsx)(t.code,{children:"TextField"})," using the ",(0,r.jsx)(t.code,{children:"getSelectionRange"})," method. This returns a ",(0,r.jsx)(t.code,{children:"SelectionRange"})," object representing the start and end indices of the selected text."]}),"\n",(0,r.jsx)(t.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(t.p,{children:["The following section outlines some suggested best practices for utilization of the ",(0,r.jsx)(t.code,{children:"TextField"}),"."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Provide Clear Labels and Instructions"}),": Label the ",(0,r.jsx)(t.code,{children:"TextField"})," clearly to indicate the type of information users should enter. Consider providing additional instructional text or placeholder values to guide users and set expectations for the required input."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Spell Checking and Auto-Complete"}),": When applicable, consider utilizing spellcheck and/or autocomplete functionality to the ",(0,r.jsx)(t.code,{children:"TextField"}),". These features can help users input information faster and reduce errors by providing suggested values based on previous inputs or predefined options."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Consider Accessibility"}),": Utilize the ",(0,r.jsx)(t.code,{children:"TextField"})," component with accessibility in mind, adhering to accessibility standards such as proper labeling, keyboard navigation support, and compatibility with assistive technologies. Ensure that users with disabilities can interact with the ",(0,r.jsx)(t.code,{children:"TextField"})," effectively."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7785:(e,t,n)=>{var r=n(4994);t.A=void 0;var s=r(n(2032)),i=n(4848),l=(0,s.default)((0,i.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.A=l},4863:(e,t,n)=>{var r=n(4994);t.A=void 0;var s=r(n(2032)),i=n(4848),l=(0,s.default)([(0,i.jsx)("path",{d:"M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62C6.28 8.13 5 9.92 5 12c0 2.76 2.24 5 5 5v2H7z"},"0"),(0,i.jsx)("path",{d:"M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.53-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.54z"},"1"),(0,i.jsx)("circle",{cx:"10.5",cy:"8",r:"1.5"},"2")],"Biotech");t.A=l},4680:(e,t,n)=>{var r=n(4994);t.A=void 0;var s=r(n(2032)),i=n(4848),l=(0,s.default)((0,i.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");t.A=l},2706:(e,t,n)=>{var r=n(4994);t.A=void 0;var s=r(n(2032)),i=n(4848),l=(0,s.default)((0,i.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.A=l},4303:(e,t,n)=>{var r=n(4994);t.A=void 0;var s=r(n(2032)),i=n(4848),l=(0,s.default)([(0,i.jsx)("circle",{cx:"9",cy:"12",r:"8"},"0"),(0,i.jsx)("path",{d:"M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"},"1")],"FiberSmartRecord");t.A=l},8144:(e,t,n)=>{var r=n(4994);t.A=void 0;var s=r(n(2032)),i=n(4848),l=(0,s.default)((0,i.jsx)("path",{d:"m2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"}),"Style");t.A=l},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(53);const s={tabItem:"tabItem_Ymn6"};var i=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),s=n(53),i=n(3104),l=n(6347),a=n(205),o=n(7485),c=n(1682),d=n(9466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,h]=x({queryString:n,groupId:s}),[m,A]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),b=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),A(e)}),[h,A,i]),tabValues:i}}var A=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),s=a[n].value;s!==r&&(c(t),l(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function w(e){const t=(0,A.A)();return(0,f.jsx)(j,{...e,children:h(e.children)},String(t))}},5943:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(6540),s=n(7437),i=n(5556),l=n.n(i),a=n(1470),o=n(9365),c=n(1622),d=n(1302);const h=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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",p="data:image/png;base64,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";var x=n(5293),m=n(2706),A=n(2445);function b(e){let{collapse:t,setCollapse:n}=e;b.propTypes={collapse:l().bool.isRequired,setCollapse:l().func.isRequired};const r=s.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,i=s.AH`
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
  `,a=s.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,A.Y)("div",{css:r,children:(0,A.Y)("button",{css:i,onClick:()=>{n(!t)},children:t?(0,A.Y)("img",{alt:"collapse_button",css:a,src:h,className:"icon-tabler-arrow-bar-up"}):(0,A.Y)("img",{css:a,src:u,className:"icon-tabler-arrow-bar-down"})})})}function f(e){let{url:t}=e;const n=s.AH`
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
  `,r=s.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,A.Y)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,A.Y)("img",{css:r,src:p})})}function g(e){let{path:t,javaC:n,javaE:i,urls:h,cssURL:u,javaHighlight:p,height:v,frame:j,tabs:w}=e;g.propTypes={path:l().string.isRequired,javaC:l().string,javaE:l().string,urls:l().arrayOf(l().string),cssURL:l().string,javaHighlight:l().string,height:l().string,frame:l().string,tabs:l().arrayOf(l().string)};const[y,D]=(0,r.useState)(""),[T,k]=(0,r.useState)(""),[F,S]=(0,r.useState)({}),[B,Y]=(0,r.useState)(""),[C,L]=(0,r.useState)(!(!n||!i)),[E,H]=(0,r.useState)(!1),[N,z]=(0,r.useState)({}),[M,O]=(0,r.useState)(!1),[V,G]=(0,r.useState)(0),[P,X]=(0,r.useState)(0),[I,J]=(0,r.useState)(25),[R,q]=(0,r.useState)(25),[W,Z]=(0,r.useState)(0),[U,K]=(0,r.useState)(!1),Q=(0,r.useRef)(null),_=(0,r.useRef)(null);function $(e,t,n){return(0,A.Y)(d.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,r.useEffect)((()=>{i&&fetch(i).then((e=>e.text())).then((e=>{k(e);const t=new URL(i).pathname.split("/"),n=t[t.length-1];z((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{D(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{Y(e);const t=new URL(u).pathname.split("/"),n=t[t.length-1];z((e=>({...e,cssFile:n})))})),h&&h.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),r=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){S((n=>({...n,[e]:{fileName:e,code:t}})))}(r,e)}))})),Z(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{O(!1)},te=e=>{if(M){const t=e.clientX-V;P+t>W/3&&(Q.current.style.width=`${P+t}px`,_.current.style.right=(I-t<25?25:I-t)+"px",q(I-t<25?25:I-t))}},ne=s.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,re=s.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,se=s.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${v||"100%"};
    pointer-events: ${M?"none":"auto"};
  `,ie=s.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${E&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,le=s.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ae=s.AH`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==j?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==j?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,oe=s.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=s.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,A.FD)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=j?(0,A.FD)("div",{onMouseEnter:()=>{H(!0)},onMouseLeave:()=>H(!1),css:re,children:[(0,A.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,x.G)().colorMode,css:se,ref:Q,onMouseMove:te}),(0,A.Y)("div",{css:ie,ref:_,children:(0,A.Y)(f,{url:t})}),(0,A.Y)("div",{css:le,onMouseDown:e=>{e.preventDefault(),O(!0),G(e.clientX),X(Q.current?Q.current.offsetWidth:0),J(R)},children:(0,A.Y)(m.A,{})})]}):null,(0,A.FD)(c.A,{css:ae,summary:(0,A.Y)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[n&&i?(0,A.Y)(b,{collapse:C,setCollapse:L}):null,u?(0,A.FD)(a.A,{css:oe,children:[(0,A.Y)(o.A,{value:w?w[0]:"Java",label:w?w[0]:N.javaFile,default:!0,children:(0,A.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:C?y:T})}),Object.keys(F).map(((e,t)=>(0,A.Y)(o.A,{value:e,label:e,children:$(F[e],ce,p)},"tab"+t))),(0,A.Y)(o.A,{value:w?w[1]:"CSS",label:w?w[1]:N.cssFile,children:(0,A.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:B})})]}):(0,A.FD)(a.A,{css:oe,children:[(0,A.Y)(o.A,{value:w?w[0]:"Java",label:w?w[0]:N.javaFile,default:!0,children:(0,A.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:C?y:T})}),Object.keys(F).map(((e,t)=>(0,A.Y)(o.A,{value:e,label:e,children:$(F[e],ce,p)},"tab"+t)))]})]})]})}},5529:(e,t,n)=>{n.d(t,{A:()=>h});n(6540);var r=n(7437),s=n(276),i=n(526),l=n(4863),a=n(4303),o=n(4680),c=n(8144),d=n(2445);function h(e){let{label:t,href:n,clickable:h,iconName:u,tooltipText:p,color:x}=e;const m=r.AH`
    margin-right: 10px;
    padding-left: 5px;
    background-color: var(--chip-background);
    color: var(--chip-text);

    :hover{
      color: inherit;
      background-color: var(--chip-background-hover);
    }
  `,A=r.AH`
      color: var(--chip-icon-color) !important;
  `;let b;return b="scoped"===u?(0,d.Y)(l.A,{css:A}):"shadow"===u?(0,d.Y)(a.A,{css:A}):"code"===u?(0,d.Y)(o.A,{css:A}):(0,d.Y)(c.A,{css:A}),(0,d.Y)(s.A,{title:p,arrow:!0,css:m,children:(0,d.Y)(i.A,{label:t,component:"a",href:h?n:null,icon:b,clickable:h,color:x,target:"_blank"})})}},1803:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(6540),s=n(7437),i=n(276),l=n(526),a=n(7785);var o=n(2445);function c(e){let{type:t,location:n,top:c,children:d,code:h,suffix:u}=e;const[p,x]=(0,r.useState)("");(0,r.useEffect)((()=>{u||(u=""),x("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+n+".html"+u)}),[]);const m=s.AH`
    display: inline;

    ${c&&s.AH`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,A=s.AH`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,o.FD)(o.FK,{children:["true"===c&&(0,o.Y)("div",{css:m,children:(0,o.Y)(i.A,{title:"JavaDoc",arrow:!0,children:(0,o.Y)(l.A,{css:A,label:"Java API",component:"a",href:p,icon:(0,o.Y)(a.A,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!h&&(0,o.Y)("div",{css:m,children:(0,o.Y)("a",{href:p,target:"_blank",children:d})}),"true"!==c&&h&&(0,o.Y)("div",{css:m,children:(0,o.Y)("code",{children:(0,o.Y)("a",{href:p,target:"_blank",children:d})})})]})}},1530:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(6540),s=n(5489),i=n(4848);function l(e){const[t,n]=(0,r.useState)(null);if((0,r.useEffect)((()=>{fetch("https://dwc.style/docs/dwc-components.json").then((e=>e.json())).then((t=>{const r=t.components.find((t=>t.tag===e.tag));n(r)}))}),[]),!t)return(0,i.jsx)("div",{children:"Loading..."});const l=t.docsTags?.filter((e=>"part"===e.name)),a=t.slots?.map((e=>({name:e.name,desc:e.docs}))),o=t.styles?.map((e=>({name:e.name,description:e.docs}))),c=t.props?.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type}))),d=t?.dependencies||[];return(0,i.jsxs)(i.Fragment,{children:["parts"==e.table&&(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Part"}),(0,i.jsx)("th",{children:"Description"})]},"header")}),(0,i.jsx)("tbody",{children:l?.map((t=>{const[n,r]=t.text.split(" - ");return!e.exclusions?.includes(n)&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:n})}),(0,i.jsx)("td",{children:r})]},t.id)}))})]}),"slots"==e.table&&(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Slot"}),(0,i.jsx)("th",{children:"Description"})]},"header")}),(0,i.jsx)("tbody",{children:a?.map((t=>!e.exclusions?.includes(t.name)&&""!=t.name&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:t.name})}),(0,i.jsx)("td",{children:t.desc})]},t.name)))})]}),"properties"==e.table&&(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Description"})]},"header")}),(0,i.jsx)("tbody",{children:o?.map((t=>!e.exclusions?.includes(t.name)&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:t.name})}),(0,i.jsx)("td",{children:t.description})]},t.name)))})]}),"reflects"==e.table&&(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Attribute"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Type"})]},"header")}),(0,i.jsx)("tbody",{children:c?.map((t=>null!=t.attr&&1==t.display&&!e.exclusions?.includes(t.attr)&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:t.attr})}),(0,i.jsx)("td",{children:t.desc}),(0,i.jsx)("td",{children:t.type})]},t.attr)))})]}),"dependencies"==e.table&&(0,i.jsx)("ul",{children:d.map(((e,t)=>(0,i.jsx)("li",{children:(0,i.jsx)(s.A,{to:"/docs/client-components/"+e.replace("dwc-","").charAt(0).toUpperCase()+e.slice(5),children:e},t)})))}),"properties"!=e.table&&"parts"!=e.table&&"slots"!=e.table&&"reflects"!=e.table&&"dependencies"!=e.table&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h4",{children:"Shadow Parts"}),(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Part"}),(0,i.jsx)("th",{children:"Description"})]},"header")}),(0,i.jsx)("tbody",{children:l?.map((e=>{const[t,n]=e.text.split(" - ");return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:t})}),(0,i.jsx)("td",{children:n})]},e.id)}))})]}),(0,i.jsx)("h4",{children:"CSS Properties"}),(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Description"})]},"header")}),(0,i.jsx)("tbody",{children:o?.map((e=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:e.name})}),(0,i.jsx)("td",{children:e.description})]},e.name)))})]}),(0,i.jsx)("h4",{children:"Reflected Attributes"}),(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Attribute"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Type"})]},"header")}),(0,i.jsx)("tbody",{children:c?.map((t=>null!=t.attr&&0==t.display&&!e.exclusions?.includes(t.attr)&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:t.attr})}),(0,i.jsx)("td",{children:t.desc}),(0,i.jsx)("td",{children:t.type})]},t.attr)))})]})]})]})}},6999:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4718),s=n(4848);function i(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.A,{...e})})}}}]);
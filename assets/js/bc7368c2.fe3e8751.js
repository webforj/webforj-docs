"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5177],{3223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(5893),i=n(1151),r=n(6957),s=n(3273);const a={sidebar_position:2,title:"Composite Components",slug:"composite",draft:!1},c="Composite Components in DWCj",l={id:"ui/composite",title:"Composite Components",description:"Developers will often wish to create components that contain constituent components for application level use. The Composite component gives developers the tools they need to create their own components while maintaining control over what they choose to expose to users.",source:"@site/docs/ui/composite.md",sourceDirName:"ui",slug:"/ui/composite",permalink:"/docs/ui/composite",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/ui/composite.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Composite Components",slug:"composite",draft:!1},sidebar:"documentationSidebar",previous:{title:"Component Basics",permalink:"/docs/ui/basics"},next:{title:"Elements",permalink:"/docs/ui/element"}},d={},u=[{value:"Component Binding",id:"component-binding",level:2},{value:"Lifecycle Management",id:"lifecycle-management",level:2},{value:"Example <code>Composite</code> Component",id:"example-composite-component",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{type:"engine",location:"org/dwcj/component/Composite",top:"true"}),"\n",(0,o.jsx)(t.h1,{id:"composite-components-in-dwcj",children:"Composite Components in DWCj"}),"\n",(0,o.jsxs)(t.p,{children:["Developers will often wish to create components that contain constituent components for application level use. The ",(0,o.jsx)(t.code,{children:"Composite"})," component gives developers the tools they need to create their own components while maintaining control over what they choose to expose to users."]}),"\n",(0,o.jsxs)(t.p,{children:["It allows developers to manage a specific type of ",(0,o.jsx)(t.code,{children:"Component"})," instance, providing a way to encapsulate its behavior. It requires any extending subclass to specify the type of ",(0,o.jsx)(t.code,{children:"Component"})," it intends to manage, ensuring a subclass of ",(0,o.jsx)(t.code,{children:"Composite"})," is intrinsically linked to its underlying ",(0,o.jsx)(t.code,{children:"Component"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["It's highly recommended to create custom components by utilizing the ",(0,o.jsx)(t.code,{children:"Composite"})," component, rather than extending the base ",(0,o.jsx)(t.code,{children:"Component"})," component."]})}),"\n",(0,o.jsxs)(t.p,{children:["To utilize the ",(0,o.jsx)(t.code,{children:"Composite"})," component, start by creating a new Java class that extends the ",(0,o.jsx)(t.code,{children:"Composite"})," component. Specify the type of Component you want to manage as the generic type parameter."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"public class ApplicationComponent extends Composite<Div> {\r\n\t//Implementation\r\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"component-binding",children:"Component Binding"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Composite"})," class requires developers to specify the type of ",(0,o.jsx)(t.code,{children:"Component"})," it manages. This strong association ensures that a ",(0,o.jsx)(t.code,{children:"Composite"})," component is intrinsically linked to its underlying Component. This also provides benefits over traditional inheritance, as it allows the developer to decide exactly what functionality to expose to the public API."]}),"\n",(0,o.jsxs)(t.p,{children:["By default, the ",(0,o.jsx)(t.code,{children:"Composite"})," component utilizes the generic type parameter of its subclass to identify and instantiate the bound component type. This is based on the assumption that the component class has a parameter-less constructor. Developers can customize the component initialization process by overriding the ",(0,o.jsx)(t.code,{children:"initBoundComponent()"})," method. This allows for greater flexibility in creating and managing the bound component, including invoking parameterized constructors."]}),"\n",(0,o.jsxs)(t.p,{children:["The following snippet overrides the initBoundComponent method to use a parameterized constructor for the ",(0,o.jsx)(t.a,{href:"/docs/layouts/flex_layouts",children:"FlexLayout"})," class:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'public static class OverrideComposite extends Composite<FlexLayout> {\r\n\t\r\n\tTextField nameField;\r\n\tButton submit;\r\n\r\n\t@Override\r\n\tprotected FlexLayout initBoundComponent() {\r\n\t\tnameField = new TextField();\r\n\t\tsubmit = new Button("Submit");\r\n\t\treturn new FlexLayout(nameField, submit);\r\n\t}\r\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"lifecycle-management",children:"Lifecycle Management"}),"\n",(0,o.jsxs)(t.p,{children:["Unlike with the ",(0,o.jsx)(t.code,{children:"Component"}),", developers do not need to implement the ",(0,o.jsx)(t.code,{children:"onCreate()"})," and ",(0,o.jsx)(t.code,{children:"onDestroy()"})," methods when working with the ",(0,o.jsx)(t.code,{children:"Composite"})," component. The ",(0,o.jsx)(t.code,{children:"Composite"})," component takes care of these aspects for you."]}),"\n",(0,o.jsxs)(t.p,{children:["Should you need to access the bound components at the various stages of its lifecycle, the ",(0,o.jsx)(t.code,{children:"onDidCreate()"})," and ",(0,o.jsx)(t.code,{children:"onDidDestroy()"})," hooks allow developers access to these lifecycle stages to perform additional functionality. Utilization of these hooks is optional."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"onDidCreate()"})," method is called immediately after the bound component is created and added to a window. Use this method to set up your component, modify any configurations needed, and add child components if applicable. While the ",(0,o.jsx)(t.code,{children:"Component"})," class's ",(0,o.jsx)(t.code,{children:"onCreate()"})," method takes a ",(0,o.jsx)(t.a,{href:"#",children:"Window"})," instance, the ",(0,o.jsx)(t.code,{children:"onDidCreate()"})," method instead takes the bound component, removing the need to call the ",(0,o.jsx)(t.code,{children:"getBoundComponent()"})," method directly. For example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"public class ApplicationComponent extends Composite<Div> {\r\n\t@Override\r\n\tprotected void onDidCreate(Div container) {\r\n\t\t// Add child components to the container\r\n\t\tcontainer.add(new CheckBox());\r\n\t\tcontainer.add(new Paragraph());\r\n\t\t// ...\r\n\t}\r\n}\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["This logic can also be implemented in the constructor, by calling ",(0,o.jsx)(t.code,{children:"getBoundComponent()"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["Similarly, the ",(0,o.jsx)(t.code,{children:"onDidDestroy()"})," method fires once the bound component has been destroyed, and allows for additional behavior to be fired on destruction should it be desired."]}),"\n",(0,o.jsxs)(t.h3,{id:"example-composite-component",children:["Example ",(0,o.jsx)(t.code,{children:"Composite"})," Component"]}),"\n",(0,o.jsxs)(t.p,{children:["In the demo below, a simple ToDo application has been created, where each item added to the list is a ",(0,o.jsx)(t.code,{children:"Composite"})," component, consisting of a ",(0,o.jsx)(t.a,{href:"/docs/components/radiobutton",children:(0,o.jsx)(t.code,{children:"RadioButton"})})," styled as a switch, and a ",(0,o.jsx)(t.a,{href:"#",children:(0,o.jsx)(t.code,{children:"Div"})})," with text."]}),"\n",(0,o.jsxs)(t.p,{children:["The logic for this component is set up in the constructor, which sets styling and adds constituent components to the bound component using the ",(0,o.jsx)(t.code,{children:"getBoundComponent"})," method, and adds event logic."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["This could also be implemented in the ",(0,o.jsx)(t.code,{children:"onDidCreate()"})," method, which would give direct access to the bound ",(0,o.jsx)(t.a,{href:"/docs/layouts/flex_layouts",children:(0,o.jsx)(t.code,{children:"FlexLayout"})})," component."]})}),"\n",(0,o.jsx)(t.p,{children:"This component is then instantiated and utilized in an Application, and allows for its use throughout various locations, making it a powerful tool in the creation of custom components."}),"\n",(0,o.jsx)(r.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=demos.CompositeDemo",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/compositestyles/styles.css",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/demos/CompositeDemo.java",height:"500px"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},6031:(e,t,n)=>{var o=n(4836);t.Z=void 0;var i=o(n(4938)),r=n(5893),s=(0,i.default)((0,r.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=s},2610:(e,t,n)=>{var o=n(4836);t.Z=void 0;var i=o(n(4938)),r=n(5893),s=(0,i.default)((0,r.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=s},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var o=n(6010);const i={tabItem:"tabItem_Ymn6"};var r=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(7294),i=n(6010),r=n(2466),s=n(6550),a=n(469),c=n(1980),l=n(7392),d=n(12);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:i}}=e;return{value:t,label:n,attributes:o,default:i}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function A(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=p(e),[s,c]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[l,u]=m({queryString:n,groupId:i}),[A,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,d.Nk)(n);return[i,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),g=(()=>{const e=l??A;return h({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function f(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),i=a[n].value;i!==o&&(l(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=A(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(7294),i=n(917),r=n(4866),s=n(5162),a=n(4673),c=n(1750);const l="data:image/png;base64,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",d=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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";var p=n(2949),h=n(2610),m=n(5944);function A(e){let{collapse:t,setCollapse:n}=e;const o=i.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
    `,r=i.iv`
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
  `,s=i.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:o,children:(0,m.tZ)("button",{css:r,onClick:()=>{n(!t)},children:t?(0,m.tZ)("img",{css:s,src:d,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:s,src:l,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const n=i.iv`
      position: relative;
      cursor: pointer;
      z-index: 10;
      height: 35px;
      width: 35px;
      border: none;
      background-color: none;
      justify-self: flex-end;
      margin-top: -5px;
      margin-bottom: -20px;
      background-color: transparent;

      
    `,o=i.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten;
        opacity: 0.5;
      }
    `;return(0,m.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:o,src:u})})}function g(e){let{path:t,javaC:n,javaE:l,cssURL:d,javaHighlight:u,height:g,frame:v,tabs:f}=e;const[x,w]=(0,o.useState)(""),[y,C]=(0,o.useState)(""),[j,D]=(0,o.useState)(""),[B,k]=(0,o.useState)(!(!n||!l)),[Z,S]=(0,o.useState)(!1),[E,L]=(0,o.useState)({}),[z,F]=(0,o.useState)(!1),[M,T]=(0,o.useState)(0),[N,V]=(0,o.useState)(0),[O,H]=(0,o.useState)(25),[X,J]=(0,o.useState)(25),[G,Y]=(0,o.useState)(0),[I,W]=(0,o.useState)(!1),P=(0,o.useRef)(null),q=(0,o.useRef)(null);(0,o.useEffect)((()=>{l&&fetch(l).then((e=>e.text())).then((e=>{C(e);const t=new URL(l).pathname.split("/"),n=t[t.length-1];L((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{w(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{D(e);const t=new URL(d).pathname.split("/"),n=t[t.length-1];L((e=>({...e,cssFile:n})))})),Y(P.current?P.current.offsetWidth:0)}),[]);const R=()=>{F(!1)},U=e=>{if(z){const t=e.clientX-M;N+t>G/3&&(P.current.style.width=`${N+t}px`,q.current.style.right=(O-t<25?25:O-t)+"px",J(O-t<25?25:O-t))}},K=i.iv`
		display: flex;
    flex-direction: column;
		width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==v?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
    `,Q=i.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,_=i.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${g||"100%"};
    pointer-events: ${z?"none":"auto"};
  `,$=i.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${Z&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ee=i.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,te=i.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==v?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div{
      /* border: none; */
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type{
      border: ${"hidden"==v?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
    }

    summary{
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before{
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary)
      }
    }
    .margin-top--md{
      margin-top: 0px !important;
    }
    ul{
      margin: -4px 0px!important;
    }
    `,ne=i.iv`
    /* :first-child{
      margin-left: 1em;
    } */
    li[aria-selected="true"]{
      border-color: var(--ifm-color-primary);
    }
    
    .tabs__item{
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,oe=i.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.BX)("div",{css:K,onMouseUp:R,onMouseLeave:R,onMouseMove:U,children:["hidden"!=v?(0,m.BX)("div",{onMouseEnter:()=>{S(!0)},onMouseLeave:()=>S(!1),css:Q,children:[(0,m.tZ)("iframe",{onMouseUp:R,loading:"lazy",src:t+"&__theme__="+(0,p.I)().colorMode,css:_,ref:P,onMouseMove:U}),(0,m.tZ)("div",{css:$,ref:q,children:(0,m.tZ)(b,{url:t})}),(0,m.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),F(!0),T(e.clientX),V(P.current?P.current.offsetWidth:0),H(X)},children:(0,m.tZ)(h.Z,{})})]}):null,(0,m.BX)(a.Z,{css:te,summary:(0,m.tZ)("summary",{onClick:()=>W(!I),children:I?"Hide Code":"Show Code"}),children:[n&&l?(0,m.tZ)(A,{collapse:B,setCollapse:k}):null,d?(0,m.BX)(r.Z,{css:ne,children:[(0,m.tZ)(s.Z,{value:f?f[0]:"Java",label:f?f[0]:E.javaFile,default:!0,children:(0,m.tZ)(c.Z,{css:oe,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:B?x:y})}),(0,m.tZ)(s.Z,{value:f?f[1]:"CSS",label:f?f[1]:E.cssFile,children:(0,m.tZ)(c.Z,{css:oe,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:j})})]}):(0,m.tZ)(r.Z,{css:ne,children:(0,m.tZ)(s.Z,{value:f?f[0]:"Java",label:f?f[0]:E.javaFile,default:!0,children:(0,m.tZ)(c.Z,{css:oe,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:B?x:y})})})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(7294),i=n(917),r=n(8230),s=n(4387),a=n(6031);var c=n(5944);function l(e){let{type:t,location:n,top:l,children:d,code:u,suffix:p}=e;const[h,m]=(0,o.useState)("");(0,o.useEffect)((()=>{p||(p=""),m("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+n+".html"+p)}),[]);const A=i.iv`
    display: inline;

    ${l&&i.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=i.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,c.BX)(c.HY,{children:["true"===l&&(0,c.tZ)("div",{css:A,children:(0,c.tZ)(r.Z,{title:"JavaDoc",arrow:!0,children:(0,c.tZ)(s.Z,{css:b,label:"Java API",component:"a",href:h,icon:(0,c.tZ)(a.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==l&&!u&&(0,c.tZ)("div",{css:A,children:(0,c.tZ)("a",{href:h,target:"_blank",children:d})}),"true"!==l&&u&&(0,c.tZ)("div",{css:A,children:(0,c.tZ)("code",{children:(0,c.tZ)("a",{href:h,target:"_blank",children:d})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var o=n(8397),i=n(5893);function r(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Z,{...e})})}}}]);
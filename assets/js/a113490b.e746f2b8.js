"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[6450],{2033:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(5893),a=r(1151),o=r(6957);const i={sidebar_position:1,title:"Hello World"},s=void 0,l={id:"getting_started/Templates/hello_world",title:"Hello World",description:"To start a simple application, it is recommended to use webforJ's HelloWorldJava repository as a template. This can be done using any of the installation methods.",source:"@site/docs/getting_started/Templates/hello_world.md",sourceDirName:"getting_started/Templates",slug:"/getting_started/Templates/hello_world",permalink:"/docs/getting_started/Templates/hello_world",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/getting_started/Templates/hello_world.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Hello World"},sidebar:"documentationSidebar",previous:{title:"Creating an application",permalink:"/docs/getting_started/creating_an_application"},next:{title:"App Layout",permalink:"/docs/getting_started/Templates/app_layout"}},c={},d=[{value:"CSS",id:"css",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["To start a simple application, it is recommended to use webforJ's ",(0,n.jsx)(t.a,{href:"https://github.com/webforj/webforj-hello-world",children:"HelloWorldJava repository"})," as a template. This can be done using any of the ",(0,n.jsx)(t.a,{href:"/docs/installation/",children:"installation methods"}),"."]}),"\n",(0,n.jsx)(o.Z,{path:"https://demo.webforj.com/webapp/controlsamples/HelloWorldJava?",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/HelloWorldJava.java",height:"300px"}),"\n",(0,n.jsx)(t.p,{children:"Once you have cloned the repository and can see the application, modifying the following sections will allow you to start building your own simple application:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'public class HelloWorldApp extends App {\r\n  \r\n  Paragraph hello = new Paragraph("Hello World!");\r\n  Button btn = new Button("Say Hello");\r\n\r\n  @Override\r\n  public void run() throws webforJException {\r\n\r\n    Frame mainFrame = new Frame();\r\n    mainFrame.addClassName("mainFrame");\r\n\r\n    btn.setTheme(ButtonTheme.SUCCESS)\r\n        .setExpanse(Expanse.XLARGE)\r\n        .addClickListener(e -> msgbox("Hello World!"));\r\n\r\n    mainFrame.add(hello, btn);\r\n  }\r\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"This is the method that will be executed when your application is rendered. Here, since the sample program is quite small, the entirety of the program's functionality has been built into this singular method."}),"\n",(0,n.jsx)(t.p,{children:"This is an ideal pattern for exploration purposes or simple applications. For more complex applications, it is advised to split functionality into additional methods and classes."}),"\n",(0,n.jsx)(t.h3,{id:"css",children:"CSS"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'@InlineStyleSheet(/* css */"""\r\n  .mainFrame {\r\n    display: inline-grid;\r\n    gap: 20px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    border: 1px dotted;\r\n  }\r\n""")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This is the inline CSS that will be applied to your application. Either continue adding to this section, or create a separate stylesheet using ",(0,n.jsx)(t.a,{href:"/docs/styling/styling_intro",children:"this page"})," as a reference."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=BEU.vscode-java-html&ssr=false#overview",children:"This plugin for VS Code"})," allows you to see syntax highlighting for CSS and HTML within your webforJ code. To do this, install the extension, and add either ",(0,n.jsx)(t.code,{children:"/* css */"})," or ",(0,n.jsx)(t.code,{children:"/* html */"}),", depending on the desired highlighting, before a multiline string in triple quotes. You should then see the contents of the string highlighted depending on the specified language."]})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2610:(e,t,r)=>{var n=r(4836);t.Z=void 0;var a=n(r(4938)),o=r(5893),i=(0,a.default)((0,o.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=i},5162:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var n=r(6010);const a={tabItem:"tabItem_Ymn6"};var o=r(5893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6010),o=r(2466),i=r(6550),s=r(469),l=r(1980),c=r(7392),d=r(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function A(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:r,groupId:a}),[A,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=c??A;return h({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function f(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),a=s[r].value;a!==n&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=A(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function y(e){const t=(0,g.Z)();return(0,v.jsx)(x,{...e,children:u(e.children)},String(t))}},6957:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(7294),a=r(917),o=r(5697),i=r.n(o),s=r(4866),l=r(5162),c=r(4673),d=r(1750);const u=r.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",p="data:image/png;base64,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",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAALyElEQVR4nO3dXahmVR3H8e+M0/FlRouiGV9GxLSkiy7MkW7MDJOCCJ1zkia66KaLLByKEqUizW6EwJjKi24yDfL9pYSEEDSlIMS3JkJrlBzURiUcdXyZF8cu9hnmpOfMec551tr//9rP9wMLQWU9/73W/p398qy9H5AkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSW1bEV1ABauBs4AzgNNm2zrgvcAa4D1xpakHe4DXgJeAF4HHgSeAh4A/z/63wRhKgNcBXwamgU8AU7HlKKk9wF+B24EbgOdjy9E5wF3AXuBtm20JbS/we+Bs1Ltz6U6HoncC2zDaA8CnUXXHAdcTP+G2Yba7gBNRFZuAncRPsm3YbSdwISrmCOCXxE+sbbLaNcDhaCxrgD8SP5m2yWz30n39mFbmr5HWAXcDp0cXoon2CPA54IXoQuaTNcDHAPdheJXDVrqvm3ZGF/JOK6MLmMcRdHcDDa+y+BhwGwmviQ+LLmAe19CtqJIyORl4P/CH6ELmyhbgC4GroouQFnAm8E/g79GFHJDpGvh44B8kv+unibcT+CiwI7oQyHUNfDWGV/m9D/hJdBEHZDkCnwvcE12ENKK36dZO/ym6kCwBfoDuGV6pFfcDn4ouIsMp9DkYXrXnbOCT0UVkCPB3oguQlumS6AKiT6HXAs8Cq4LrkJZjH7CeCX6zx7epuxj9TbrnhzcCJ+H7sCbBKrq5ngZ+Q7cP1NzHNvezWTndT72B/S3dd8uabCcAN1L3iaWJtBrYTfkB3Qd8vcftUBu+Qbdv1DjLO7LH7Ujjs9T5i3hRnxuhpnyTOvvceX1uRBbfo85ps3QoN1F+v7us1y1I4jrKDuIbeM2rxa2n/I2ta3vdgjkivwc+rXB/twDPFe5Tw/MMcGvhPkvvyyOLDPCxhfu7o3B/Gq47C/dXel8eWWSAjy7c30OF+9Nwld5XSu/LI4tcibWbsr9hNEX3cxnSYqbo9r9SdtO9Cqp3kQF+u3B/0ctC1ZZB7H8ZHmaQtEwGWGqYAZYaZoClhhlgqWEGWGqYAZYaZoClhhlgqWEGeFimgE10r5DZRre0tMYD7KXbHuBp4Gd0P+quBpTeCSbdDLCd+DCO2/bRz0+XuP+NyQEsYyWwhfjglW6PUvd1w+5/Y3IAyxhieOeGuBb3vzE5gOObIT5ktVut0+lB7H8+TtiuKeBxul+OH7J9wAeAVwr3O4j9z7vQ7Zpm+OGF7jr4yugisjLA7doYXUCPpqMLyMoAt+vM6AJ6dFx0AVl5DdyuNwh6D1OQ0vM7iP3PI3C7JvXOu+YwwO3aEV2A4hngdj0YXYDiGeB2+UsU8iZWwyZlIccB3sSah0fgdu0BLokuQrEMcNtuo3uGVurdIBaTJzDUxwlrz2/2+tJzAMsaygP9BngJvIk1LFN064YvADYAJ1H3ofg+eRMrmUH8BRywlcCviT/yegROygHMK1t4DXBCDmBOGcNrgBNyAPPJGl4DnJADmEvm8BrghBzAPLKH1wAn5ADm0EJ4DXBCDmC8VsJrgBNyAGO1FF4DnJADGKe18BrghBzAGC2G1wAn5AD2r9XwGuCEHMB+tRxeA5yQA9if1sNrgBNyAPsREd4bKvRZWvb60nMA64sK72EV+i0te33pOYB1RYaXCn2Xlr2+9BzAeqLDS4X+S8teX3oOYB0ZwkuFzygte33pOYDlZQkvFT6ntOz1pecAlpUpvFT4rNKy15eeA1hOtvBS4fNKy15feg5gGRnDS4XPLC17fek5gOPLGl4qfG5p2etLzwEcT+bwUuGzS8teX3oO4PJlDy8VPr+07PWl5wAuTwvhpUINpWWvLz0HcOlaCS8V6igte33pOYBL01J4qVBLadnrS88BHF1r4aVCPaVlry+91yk3eK/1XHufWgwv5J9fAzympyg3eE/1XHtfWg0v5J/fQQR4ZdQHAw8m7SuLlcC1wFd7/Mzrga8AbxXoy/kduE2U++v3pZ5r78MW+j3yXkfZP+jZ53cQR+BIU5Q5zfo3cHi/pVc3Q9vhhfzza4ALKLGjzvRedV2ldvxRW6lr3vlknl8DXMg4p4pbAuqtreSpZ2R4D8g6vwa4kJUsb5K3EHsTrpab6Ce8NU6b55N1fg1wYTPAdhYfqO0M77R5rj5On/sK71zZ5tcAVzBFdwp5I7AN2Dvbts3+u02z/8+QvUHd8PZx2ryQTPNrgFVFyRVMmcKbjQFWFbVOoSNOmzMzwKqixk0sw/tuBlhVlP4aydPm+RlgVVFyIYfhXZgBVjUlVjB52nxoBlhVjbOCyfAuzgCrqqwrmIbCAKsX2VYwDYUBVm8yrWAaikEEeEXUB0vBSocuJEteK0kNM8BSwwyw1DADLDXMAEsNM8BSwwyw1DADLDXMAEsNWxVdwBynABcAHwfWA+tm/7k6qJ7XgGeA52f/+TBwJ/BkUD1SOuuAHwNbKb82tVbbClw5W7vaNYi10FFWA5cCLxMfyOW2XcBVwDGFx0b9MMDLNAPsID6ApdoOYGPREVIfDPASraA76r5FfOhKt/10R2NvCrbDAC/BUcAtxAetdrsJOLLQmKkuAzyiFXQPnUeHq692Gz5n3QIDPKIriA9V3+2HJQZOVRngEczQXR9GB6rvth9vbGU3iADXPNVbA/wLOLbiZ2T2AnAq8Gp0IZpX6dAN7pU632VywwuwFvhWdBEatlp/NdbSvTHx6Er9t2IX8GG674qVi0fgQ7gYwwvdZcRF0UVouGoF2Bs4B10QXYCGq8Zh/1S6m1c66CM4Jtl4Cr2A8yv02bovRBegYaoR4A0V+mzd6dEFaJhqBPj4Cn22zjFRFTUCfFyFPlt3QnQBGqYaAZ7kxRsL8QisKmrcORvE3T2Gsx2a3yDm1wfQpYYZYKlhBlhqmAGWGmaApYYZYKlhBlhqmAGWGmaApYYZYE2iqcL97S7c38gMsCZR6YdLwt48aoA1iUo/s26ApR6Vfk9Z2FtHDbAmzYl0vxhS0hOF+xuZAdakuRo4vHCfYQGuYRC/OTNCXa1shw7aTJ3fwvpMnxtR21B2/KFshzqbqfPj8m8ysN+EHsqOP5TtmHQnUvfH5e/tb1PebVXkh0sVTNF9z7uB7m7zDOWveee6vWLfi/KdWAtrcTumgGm6HXcDcBL+ka5pL90fixejCnByh2MG+CndKaP6cTeB4a1lKNeOrWzHSmBLhXpti7ezRpif5rSy4y+mle0wvDHtvhHmpkmt7PiLaWE7ZirUaVu87QfOHmF+mtTCjj+K7NsxBTxVoU7b4u36EeanFy6lbNc0cHJ0ERPoJeCS6CIOMMDt2hhdwIT6GvB8dBEHGOB2nRldwAT6BcELN97JhRwLy74drzOwNbjJ3QN8HtgTXchcNRZy7ALWFOwv8kZWKa9EF6Cx/A34IsnCC3VOoZ+r0GfraoxJ2FsgJszDwHnAy9GFzKdGgP9Toc/W1QjwgxX61P+7BzgHeCG4jgV5BO5HjTG5o0KfOujndNe8YS+sG0WNAD9Uoc/W1RiTO4CnK/Q76V6iW+G2mYTXvH04hfiVMtlarQUXLqUs1/bTrbBat6QZGKitxE9IlvbomGO5GB9mGL/dx4DXNi/HlcRPSpZ2xXhDuSgfJ1xe2wP8joE+EjiuD9Lddo+epOj2Kv2dks0A23vYppbbm3TvsLqYbh/VIVxO/IRFtx+MPYpLMwVsAm4EttG98iV6DPpuu4H/Ak8CfwF+BVxG9+pXV64twWq6r0+iJzSqPTc7BlKzpunu7kWHqe/2FnB+gfGTwl1OfKD6bt8vMnJSAiuAG4gPVV/tVuKeoJKqOBK4mfhw1W43440SDdQK4FLq/D5NdNsPXIUvSNAE2Miw7k4/S/kfjJZSO4ruaLyT+AAut+2iO+oeXXhspGasBX4EPEZ8IEdtj83WvLbCeEhLkulu6Yfovjs9A1hPtwRxPWVfz7MUu4Bn6F5Q8CzwCHAn3buYJUmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEnA/wDL76bzm26ebQAAAABJRU5ErkJggg==";var m=r(2949),A=r(2610),g=r(5944);function b(e){let{collapse:t,setCollapse:r}=e;b.propTypes={collapse:i().bool.isRequired,setCollapse:i().func.isRequired};const n=a.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,o=a.iv`
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
  `,s=a.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,g.tZ)("div",{css:n,children:(0,g.tZ)("button",{css:o,onClick:()=>{r(!t)},children:t?(0,g.tZ)("img",{alt:"collapse_button",css:s,src:u,className:"icon-tabler-arrow-bar-up"}):(0,g.tZ)("img",{css:s,src:p,className:"icon-tabler-arrow-bar-down"})})})}function v(e){let{url:t}=e;const r=a.iv`
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
  `,n=a.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,g.tZ)("button",{css:r,onClick:()=>{window.open(t,"_blank")},children:(0,g.tZ)("img",{css:n,src:h})})}function f(e){let{path:t,javaC:r,javaE:o,urls:u,cssURL:p,javaHighlight:h,height:w,frame:x,tabs:y}=e;f.propTypes={path:i().string.isRequired,javaC:i().string,javaE:i().string,urls:i().arrayOf(i().string),cssURL:i().string,javaHighlight:i().string,height:i().string,frame:i().string,tabs:i().arrayOf(i().string)};const[B,D]=(0,n.useState)(""),[S,Z]=(0,n.useState)(""),[j,k]=(0,n.useState)({}),[C,E]=(0,n.useState)(""),[L,H]=(0,n.useState)(!(!r||!o)),[N,T]=(0,n.useState)(!1),[F,M]=(0,n.useState)({}),[O,V]=(0,n.useState)(!1),[X,z]=(0,n.useState)(0),[J,G]=(0,n.useState)(0),[Y,W]=(0,n.useState)(25),[q,I]=(0,n.useState)(25),[P,R]=(0,n.useState)(0),[U,K]=(0,n.useState)(!1),Q=(0,n.useRef)(null),_=(0,n.useRef)(null);function $(e,t,r){return(0,g.tZ)(d.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:r,children:e.code})}(0,n.useEffect)((()=>{o&&fetch(o).then((e=>e.text())).then((e=>{Z(e);const t=new URL(o).pathname.split("/"),r=t[t.length-1];M((e=>({...e,javaFile:r})))})),r&&fetch(r).then((e=>e.text())).then((e=>{D(e)})),p&&fetch(p).then((e=>e.text())).then((e=>{E(e);const t=new URL(p).pathname.split("/"),r=t[t.length-1];M((e=>({...e,cssFile:r})))})),u&&u.forEach((function(e){const t=new URL(e),r=t.pathname.split("/"),n=r[r.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){k((r=>({...r,[e]:{fileName:e,code:t}})))}(n,e)}))})),R(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{V(!1)},te=e=>{if(O){const t=e.clientX-X;J+t>P/3&&(Q.current.style.width=`${J+t}px`,_.current.style.right=(Y-t<25?25:Y-t)+"px",I(Y-t<25?25:Y-t))}},re=a.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ne=a.iv`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ae=a.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${w||"100%"};
    pointer-events: ${O?"none":"auto"};
  `,oe=a.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${N&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ie=a.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,se=a.iv`
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
  `,le=a.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=a.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,g.BX)("div",{css:re,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=x?(0,g.BX)("div",{onMouseEnter:()=>{T(!0)},onMouseLeave:()=>T(!1),css:ne,children:[(0,g.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.I)().colorMode,css:ae,ref:Q,onMouseMove:te}),(0,g.tZ)("div",{css:oe,ref:_,children:(0,g.tZ)(v,{url:t})}),(0,g.tZ)("div",{css:ie,onMouseDown:e=>{e.preventDefault(),V(!0),z(e.clientX),G(Q.current?Q.current.offsetWidth:0),W(q)},children:(0,g.tZ)(A.Z,{})})]}):null,(0,g.BX)(c.Z,{css:se,summary:(0,g.tZ)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[r&&o?(0,g.tZ)(b,{collapse:L,setCollapse:H}):null,p?(0,g.BX)(s.Z,{css:le,children:[(0,g.tZ)(l.Z,{value:y?y[0]:"Java",label:y?y[0]:F.javaFile,default:!0,children:(0,g.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:L?B:S})}),Object.keys(j).map(((e,t)=>(0,g.tZ)(l.Z,{value:e,label:e,children:$(j[e],ce,h)},"tab"+t))),(0,g.tZ)(l.Z,{value:y?y[1]:"CSS",label:y?y[1]:F.cssFile,children:(0,g.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:C})})]}):(0,g.BX)(s.Z,{css:le,children:[(0,g.tZ)(l.Z,{value:y?y[0]:"Java",label:y?y[0]:F.javaFile,default:!0,children:(0,g.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:L?B:S})}),Object.keys(j).map(((e,t)=>(0,g.tZ)(l.Z,{value:e,label:e,children:$(j[e],ce,h)},"tab"+t)))]})]})]})}},1415:(e,t,r)=>{r.d(t,{Z:()=>o});r(7294);var n=r(8397),a=r(5893);function o(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Z,{...e})})}}}]);
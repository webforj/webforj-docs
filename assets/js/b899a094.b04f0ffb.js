"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9247],{8510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(4848),o=r(8453),a=r(5943);const i={sidebar_position:1,title:"Hello World"},s=void 0,l={id:"getting-started/templates/hello-world",title:"Hello World",description:"To start a simple application, it is recommended to use webforJ's HelloWorldJava repository as a template. This can be done using any of the installation methods.",source:"@site/docs/getting-started/templates/hello-world.md",sourceDirName:"getting-started/templates",slug:"/getting-started/templates/hello-world",permalink:"/docs/getting-started/templates/hello-world",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/getting-started/templates/hello-world.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Hello World"},sidebar:"documentationSidebar",previous:{title:"Templates",permalink:"/docs/category/templates"},next:{title:"Routing",permalink:"/docs/routing/overview"}},d={},c=[{value:"CSS",id:"css",level:3}];function A(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["To start a simple application, it is recommended to use webforJ's ",(0,n.jsx)(t.a,{href:"https://github.com/webforj/webforj-hello-world",children:"HelloWorldJava repository"})," as a template. This can be done using any of the ",(0,n.jsx)(t.a,{href:"../../installation/docker-user",children:"installation methods"}),"."]}),"\n",(0,n.jsx)(a.A,{path:"https://demo.webforj.com/webapp/controlsamples?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/HelloWorldJavaView.java",height:"300px"}),"\n",(0,n.jsx)(t.p,{children:"Once you have cloned the repository and can see the application, modifying the following sections will allow you to start building your own simple application:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'public class HelloWorldApp extends App {\r\n  \r\n  Paragraph hello = new Paragraph("Hello World!");\r\n  Button btn = new Button("Say Hello");\r\n\r\n  @Override\r\n  public void run() throws webforJException {\r\n\r\n    Frame mainFrame = new Frame();\r\n    mainFrame.addClassName("mainFrame");\r\n\r\n    btn.setTheme(ButtonTheme.SUCCESS)\r\n        .setExpanse(Expanse.XLARGE)\r\n        .addClickListener(e -> msgbox("Hello World!"));\r\n\r\n    mainFrame.add(hello, btn);\r\n  }\r\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"This is the method that will be executed when your application is rendered. Here, since the sample program is quite small, the entirety of the program's functionality has been built into this singular method."}),"\n",(0,n.jsx)(t.p,{children:"This is an ideal pattern for exploration purposes or simple applications. For more complex applications, it is advised to split functionality into additional methods and classes."}),"\n",(0,n.jsx)(t.h3,{id:"css",children:"CSS"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'@InlineStyleSheet(/* css */"""\r\n  .mainFrame {\r\n    display: inline-grid;\r\n    gap: 20px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    border: 1px dotted;\r\n  }\r\n""")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This is the inline CSS that will be applied to your application. Either continue adding to this section, or create a separate stylesheet using ",(0,n.jsx)(t.a,{href:"../../styling/getting-started",children:"this page"})," as a reference."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=BEU.vscode-java-html&ssr=false#overview",children:"This plugin for VS Code"})," allows you to see syntax highlighting for CSS and HTML within your webforJ code. To do this, install the extension, and add either ",(0,n.jsx)(t.code,{children:"/* css */"})," or ",(0,n.jsx)(t.code,{children:"/* html */"}),", depending on the desired highlighting, before a multiline string in triple quotes. You should then see the contents of the string highlighted depending on the specified language."]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(A,{...e})}):A(e)}},5943:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(6540),o=r(7437),a=r(5556),i=r.n(a),s=r(1470),l=r(9365),d=r(1622),c=r(1302);const A=r.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",p="data:image/png;base64,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",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAALyElEQVR4nO3dXahmVR3H8e+M0/FlRouiGV9GxLSkiy7MkW7MDJOCCJ1zkia66KaLLByKEqUizW6EwJjKi24yDfL9pYSEEDSlIMS3JkJrlBzURiUcdXyZF8cu9hnmpOfMec551tr//9rP9wMLQWU9/73W/p398qy9H5AkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSW1bEV1ABauBs4AzgNNm2zrgvcAa4D1xpakHe4DXgJeAF4HHgSeAh4A/z/63wRhKgNcBXwamgU8AU7HlKKk9wF+B24EbgOdjy9E5wF3AXuBtm20JbS/we+Bs1Ltz6U6HoncC2zDaA8CnUXXHAdcTP+G2Yba7gBNRFZuAncRPsm3YbSdwISrmCOCXxE+sbbLaNcDhaCxrgD8SP5m2yWz30n39mFbmr5HWAXcDp0cXoon2CPA54IXoQuaTNcDHAPdheJXDVrqvm3ZGF/JOK6MLmMcRdHcDDa+y+BhwGwmviQ+LLmAe19CtqJIyORl4P/CH6ELmyhbgC4GroouQFnAm8E/g79GFHJDpGvh44B8kv+unibcT+CiwI7oQyHUNfDWGV/m9D/hJdBEHZDkCnwvcE12ENKK36dZO/ym6kCwBfoDuGV6pFfcDn4ouIsMp9DkYXrXnbOCT0UVkCPB3oguQlumS6AKiT6HXAs8Cq4LrkJZjH7CeCX6zx7epuxj9TbrnhzcCJ+H7sCbBKrq5ngZ+Q7cP1NzHNvezWTndT72B/S3dd8uabCcAN1L3iaWJtBrYTfkB3Qd8vcftUBu+Qbdv1DjLO7LH7Ujjs9T5i3hRnxuhpnyTOvvceX1uRBbfo85ps3QoN1F+v7us1y1I4jrKDuIbeM2rxa2n/I2ta3vdgjkivwc+rXB/twDPFe5Tw/MMcGvhPkvvyyOLDPCxhfu7o3B/Gq47C/dXel8eWWSAjy7c30OF+9Nwld5XSu/LI4tcibWbsr9hNEX3cxnSYqbo9r9SdtO9Cqp3kQF+u3B/0ctC1ZZB7H8ZHmaQtEwGWGqYAZYaZoClhhlgqWEGWGqYAZYaZoClhhlgqWEGeFimgE10r5DZRre0tMYD7KXbHuBp4Gd0P+quBpTeCSbdDLCd+DCO2/bRz0+XuP+NyQEsYyWwhfjglW6PUvd1w+5/Y3IAyxhieOeGuBb3vzE5gOObIT5ktVut0+lB7H8+TtiuKeBxul+OH7J9wAeAVwr3O4j9z7vQ7Zpm+OGF7jr4yugisjLA7doYXUCPpqMLyMoAt+vM6AJ6dFx0AVl5DdyuNwh6D1OQ0vM7iP3PI3C7JvXOu+YwwO3aEV2A4hngdj0YXYDiGeB2+UsU8iZWwyZlIccB3sSah0fgdu0BLokuQrEMcNtuo3uGVurdIBaTJzDUxwlrz2/2+tJzAMsaygP9BngJvIk1LFN064YvADYAJ1H3ofg+eRMrmUH8BRywlcCviT/yegROygHMK1t4DXBCDmBOGcNrgBNyAPPJGl4DnJADmEvm8BrghBzAPLKH1wAn5ADm0EJ4DXBCDmC8VsJrgBNyAGO1FF4DnJADGKe18BrghBzAGC2G1wAn5AD2r9XwGuCEHMB+tRxeA5yQA9if1sNrgBNyAPsREd4bKvRZWvb60nMA64sK72EV+i0te33pOYB1RYaXCn2Xlr2+9BzAeqLDS4X+S8teX3oOYB0ZwkuFzygte33pOYDlZQkvFT6ntOz1pecAlpUpvFT4rNKy15eeA1hOtvBS4fNKy15feg5gGRnDS4XPLC17fek5gOPLGl4qfG5p2etLzwEcT+bwUuGzS8teX3oO4PJlDy8VPr+07PWl5wAuTwvhpUINpWWvLz0HcOlaCS8V6igte33pOYBL01J4qVBLadnrS88BHF1r4aVCPaVlry+91yk3eK/1XHufWgwv5J9fAzympyg3eE/1XHtfWg0v5J/fQQR4ZdQHAw8m7SuLlcC1wFd7/Mzrga8AbxXoy/kduE2U++v3pZ5r78MW+j3yXkfZP+jZ53cQR+BIU5Q5zfo3cHi/pVc3Q9vhhfzza4ALKLGjzvRedV2ldvxRW6lr3vlknl8DXMg4p4pbAuqtreSpZ2R4D8g6vwa4kJUsb5K3EHsTrpab6Ce8NU6b55N1fg1wYTPAdhYfqO0M77R5rj5On/sK71zZ5tcAVzBFdwp5I7AN2Dvbts3+u02z/8+QvUHd8PZx2ryQTPNrgFVFyRVMmcKbjQFWFbVOoSNOmzMzwKqixk0sw/tuBlhVlP4aydPm+RlgVVFyIYfhXZgBVjUlVjB52nxoBlhVjbOCyfAuzgCrqqwrmIbCAKsX2VYwDYUBVm8yrWAaikEEeEXUB0vBSocuJEteK0kNM8BSwwyw1DADLDXMAEsNM8BSwwyw1DADLDXMAEsNWxVdwBynABcAHwfWA+tm/7k6qJ7XgGeA52f/+TBwJ/BkUD1SOuuAHwNbKb82tVbbClw5W7vaNYi10FFWA5cCLxMfyOW2XcBVwDGFx0b9MMDLNAPsID6ApdoOYGPREVIfDPASraA76r5FfOhKt/10R2NvCrbDAC/BUcAtxAetdrsJOLLQmKkuAzyiFXQPnUeHq692Gz5n3QIDPKIriA9V3+2HJQZOVRngEczQXR9GB6rvth9vbGU3iADXPNVbA/wLOLbiZ2T2AnAq8Gp0IZpX6dAN7pU632VywwuwFvhWdBEatlp/NdbSvTHx6Er9t2IX8GG674qVi0fgQ7gYwwvdZcRF0UVouGoF2Bs4B10QXYCGq8Zh/1S6m1c66CM4Jtl4Cr2A8yv02bovRBegYaoR4A0V+mzd6dEFaJhqBPj4Cn22zjFRFTUCfFyFPlt3QnQBGqYaAZ7kxRsL8QisKmrcORvE3T2Gsx2a3yDm1wfQpYYZYKlhBlhqmAGWGmaApYYZYKlhBlhqmAGWGmaApYYZYE2iqcL97S7c38gMsCZR6YdLwt48aoA1iUo/s26ApR6Vfk9Z2FtHDbAmzYl0vxhS0hOF+xuZAdakuRo4vHCfYQGuYRC/OTNCXa1shw7aTJ3fwvpMnxtR21B2/KFshzqbqfPj8m8ysN+EHsqOP5TtmHQnUvfH5e/tb1PebVXkh0sVTNF9z7uB7m7zDOWveee6vWLfi/KdWAtrcTumgGm6HXcDcBL+ka5pL90fixejCnByh2MG+CndKaP6cTeB4a1lKNeOrWzHSmBLhXpti7ezRpif5rSy4y+mle0wvDHtvhHmpkmt7PiLaWE7ZirUaVu87QfOHmF+mtTCjj+K7NsxBTxVoU7b4u36EeanFy6lbNc0cHJ0ERPoJeCS6CIOMMDt2hhdwIT6GvB8dBEHGOB2nRldwAT6BcELN97JhRwLy74drzOwNbjJ3QN8HtgTXchcNRZy7ALWFOwv8kZWKa9EF6Cx/A34IsnCC3VOoZ+r0GfraoxJ2FsgJszDwHnAy9GFzKdGgP9Toc/W1QjwgxX61P+7BzgHeCG4jgV5BO5HjTG5o0KfOujndNe8YS+sG0WNAD9Uoc/W1RiTO4CnK/Q76V6iW+G2mYTXvH04hfiVMtlarQUXLqUs1/bTrbBat6QZGKitxE9IlvbomGO5GB9mGL/dx4DXNi/HlcRPSpZ2xXhDuSgfJ1xe2wP8joE+EjiuD9Lddo+epOj2Kv2dks0A23vYppbbm3TvsLqYbh/VIVxO/IRFtx+MPYpLMwVsAm4EttG98iV6DPpuu4H/Ak8CfwF+BVxG9+pXV64twWq6r0+iJzSqPTc7BlKzpunu7kWHqe/2FnB+gfGTwl1OfKD6bt8vMnJSAiuAG4gPVV/tVuKeoJKqOBK4mfhw1W43440SDdQK4FLq/D5NdNsPXIUvSNAE2Miw7k4/S/kfjJZSO4ruaLyT+AAut+2iO+oeXXhspGasBX4EPEZ8IEdtj83WvLbCeEhLkulu6Yfovjs9A1hPtwRxPWVfz7MUu4Bn6F5Q8CzwCHAn3buYJUmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEnA/wDL76bzm26ebQAAAABJRU5ErkJggg==";var m=r(5293),u=r(2706),g=r(2445);function b(e){let{collapse:t,setCollapse:r}=e;b.propTypes={collapse:i().bool.isRequired,setCollapse:i().func.isRequired};const n=o.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,a=o.AH`
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
  `,s=o.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,g.Y)("div",{css:n,children:(0,g.Y)("button",{css:a,onClick:()=>{r(!t)},children:t?(0,g.Y)("img",{alt:"collapse_button",css:s,src:A,className:"icon-tabler-arrow-bar-up"}):(0,g.Y)("img",{css:s,src:p,className:"icon-tabler-arrow-bar-down"})})})}function w(e){let{url:t}=e;const r=o.AH`
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
  `,n=o.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,g.Y)("button",{css:r,onClick:()=>{window.open(t,"_blank")},children:(0,g.Y)("img",{css:n,src:h})})}function v(e){let{path:t,javaC:r,javaE:a,urls:A,cssURL:p,javaHighlight:h,height:f,frame:x,tabs:y}=e;v.propTypes={path:i().string.isRequired,javaC:i().string,javaE:i().string,urls:i().arrayOf(i().string),cssURL:i().string,javaHighlight:i().string,height:i().string,frame:i().string,tabs:i().arrayOf(i().string)};const[D,B]=(0,n.useState)(""),[S,H]=(0,n.useState)(""),[j,C]=(0,n.useState)({}),[k,Y]=(0,n.useState)(""),[E,F]=(0,n.useState)(!(!r||!a)),[L,M]=(0,n.useState)(!1),[O,G]=(0,n.useState)({}),[J,N]=(0,n.useState)(!1),[X,W]=(0,n.useState)(0),[z,T]=(0,n.useState)(0),[Z,R]=(0,n.useState)(25),[V,P]=(0,n.useState)(25),[U,q]=(0,n.useState)(0),[K,Q]=(0,n.useState)(!1),I=(0,n.useRef)(null),_=(0,n.useRef)(null);function $(e,t,r){return(0,g.Y)(c.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:r,children:e.code})}(0,n.useEffect)((()=>{a&&fetch(a).then((e=>e.text())).then((e=>{H(e);const t=new URL(a).pathname.split("/"),r=t[t.length-1];G((e=>({...e,javaFile:r})))})),r&&fetch(r).then((e=>e.text())).then((e=>{B(e)})),p&&fetch(p).then((e=>e.text())).then((e=>{Y(e);const t=new URL(p).pathname.split("/"),r=t[t.length-1];G((e=>({...e,cssFile:r})))})),A&&A.forEach((function(e){const t=new URL(e),r=t.pathname.split("/"),n=r[r.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){C((r=>({...r,[e]:{fileName:e,code:t}})))}(n,e)}))})),q(I.current?I.current.offsetWidth:0)}),[]);const ee=()=>{N(!1)},te=e=>{if(J){const t=e.clientX-X;z+t>U/3&&(I.current.style.width=`${z+t}px`,_.current.style.right=(Z-t<25?25:Z-t)+"px",P(Z-t<25?25:Z-t))}},re=o.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ne=o.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,oe=o.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${f||"100%"};
    pointer-events: ${J?"none":"auto"};
  `,ae=o.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${L&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ie=o.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,se=o.AH`
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
  `,le=o.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,de=o.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,g.FD)("div",{css:re,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=x?(0,g.FD)("div",{onMouseEnter:()=>{M(!0)},onMouseLeave:()=>M(!1),css:ne,children:[(0,g.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.G)().colorMode,css:oe,ref:I,onMouseMove:te}),(0,g.Y)("div",{css:ae,ref:_,children:(0,g.Y)(w,{url:t})}),(0,g.Y)("div",{css:ie,onMouseDown:e=>{e.preventDefault(),N(!0),W(e.clientX),T(I.current?I.current.offsetWidth:0),R(V)},children:(0,g.Y)(u.A,{})})]}):null,(0,g.FD)(d.A,{css:se,summary:(0,g.Y)("summary",{onClick:()=>Q(!K),children:K?"Hide Code":"Show Code"}),children:[r&&a?(0,g.Y)(b,{collapse:E,setCollapse:F}):null,p?(0,g.FD)(s.A,{css:le,children:[(0,g.Y)(l.A,{value:y?y[0]:"Java",label:y?y[0]:O.javaFile,default:!0,children:(0,g.Y)(c.A,{css:de,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:E?D:S})}),Object.keys(j).map(((e,t)=>(0,g.Y)(l.A,{value:e,label:e,children:$(j[e],de,h)},"tab"+t))),(0,g.Y)(l.A,{value:y?y[1]:"CSS",label:y?y[1]:O.cssFile,children:(0,g.Y)(c.A,{css:de,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:k})})]}):(0,g.FD)(s.A,{css:le,children:[(0,g.Y)(l.A,{value:y?y[0]:"Java",label:y?y[0]:O.javaFile,default:!0,children:(0,g.Y)(c.A,{css:de,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:E?D:S})}),Object.keys(j).map(((e,t)=>(0,g.Y)(l.A,{value:e,label:e,children:$(j[e],de,h)},"tab"+t)))]})]})]})}},6999:(e,t,r)=>{r.d(t,{A:()=>a});r(6540);var n=r(4718),o=r(4848);function a(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.A,{...e})})}}}]);
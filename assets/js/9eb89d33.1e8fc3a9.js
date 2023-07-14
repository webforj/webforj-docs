"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5148],{5162:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(7294),l=n(6010);const o="tabItem_Ymn6";function r(t){let{children:e,hidden:n,className:r}=t;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},e)}},4866:(t,e,n)=>{n.d(e,{Z:()=>E});var a=n(7462),l=n(7294),o=n(6010),r=n(2466),s=n(6775),i=n(1980),u=n(7392),c=n(12);function m(t){return function(t){return l.Children.map(t,(t=>{if((0,l.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:l}}=t;return{value:e,label:n,attributes:a,default:l}}))}function d(t){const{values:e,children:n}=t;return(0,l.useMemo)((()=>{const t=e??m(n);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:n}=t;const a=(0,s.k6)(),o=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,i._X)(o),(0,l.useCallback)((t=>{if(!o)return;const e=new URLSearchParams(a.location.search);e.set(o,t),a.replace({...a.location,search:e.toString()})}),[o,a])]}function h(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,o=d(t),[r,s]=(0,l.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:o}))),[i,u]=b({queryString:n,groupId:a}),[m,h]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,o]=(0,c.Nk)(n);return[a,(0,l.useCallback)((t=>{n&&o.set(t)}),[n,o])]}({groupId:a}),g=(()=>{const t=i??m;return p({value:t,tabValues:o})?t:null})();(0,l.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:r,selectValue:(0,l.useCallback)((t=>{if(!p({value:t,tabValues:o}))throw new Error(`Can't select invalid tab value=${t}`);s(t),u(t),h(t)}),[u,h,o]),tabValues:o}}var g=n(2389);const k="tabList__CuJ",v="tabItem_LNqP";function A(t){let{className:e,block:n,selectedValue:s,selectValue:i,tabValues:u}=t;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),d=t=>{const e=t.currentTarget,n=c.indexOf(e),a=u[n].value;a!==s&&(m(e),i(a))},p=t=>{var e;let n=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const e=c.indexOf(t.currentTarget)+1;n=c[e]??c[0];break}case"ArrowLeft":{const e=c.indexOf(t.currentTarget)-1;n=c[e]??c[c.length-1];break}}null==(e=n)||e.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e)},u.map((t=>{let{value:e,label:n,attributes:r}=t;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:t=>c.push(t),onKeyDown:p,onClick:d},r,{className:(0,o.Z)("tabs__item",v,null==r?void 0:r.className,{"tabs__item--active":s===e})}),n??e)})))}function f(t){let{lazy:e,children:n,selectedValue:a}=t;if(n=Array.isArray(n)?n:[n],e){const t=n.find((t=>t.props.value===a));return t?(0,l.cloneElement)(t,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function w(t){const e=h(t);return l.createElement("div",{className:(0,o.Z)("tabs-container",k)},l.createElement(A,(0,a.Z)({},t,e)),l.createElement(f,(0,a.Z)({},t,e)))}function E(t){const e=(0,g.Z)();return l.createElement(w,(0,a.Z)({key:String(e)},t))}},2395:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(7294),l=n(2863),o=n(4866),r=n(5162),s=n(4673),i=n(4633);const u=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function c(t){let{collapse:e,setCollapse:n}=t;const a=l.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,o=l.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    margin-right: 5px;
    margin-bottom: -50px;
    background-color: transparent;
  
  `,r=l.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,l.tZ)("div",{css:a},(0,l.tZ)("button",{css:o,onClick:()=>{n(!e)}},e?(0,l.tZ)("img",{css:r,src:u,className:"icon-tabler-arrow-bar-up"}):(0,l.tZ)("img",{css:r,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function m(t){let{path:e,javaC:n,javaE:u,cssURL:m,javaHighlight:d,height:p,frame:b}=t;const[h,g]=(0,a.useState)(""),[k,v]=(0,a.useState)(""),[A,f]=(0,a.useState)(""),[w,E]=(0,a.useState)(!0),x=l.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==b?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,y=l.iv`
    min-height: 100px;
    height: 100%;
    height: ${p};
  `,N=l.iv`
    border: none;
    box-shadow: none;
    background-color: var(--code-display-color);
    margin-bottom: 0px;
    padding: 10px;

    .tabs{
      margin-top: 20px;
    }

    summary{
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 0;
      font-weight: bold;
      ::before{
        left: auto;
        margin-left: -100px;
      }
    }

  `;return u&&fetch(u).then((t=>t.text())).then((t=>{v(t)})),n&&fetch(n).then((t=>t.text())).then((t=>{g(t)})),m&&fetch(m).then((t=>t.text())).then((t=>{f(t)})),(0,l.tZ)("div",{css:x},"hidden"!=b?(0,l.tZ)("iframe",{loading:"lazy",src:e,css:y}):null,(0,l.tZ)(s.Z,{css:N,summary:(0,l.tZ)("summary",null,"Show Code")},n&&u?(0,l.tZ)(c,{collapse:w,setCollapse:E}):null,m?(0,l.tZ)(o.Z,null,(0,l.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:d},w?h:k)),(0,l.tZ)(r.Z,{value:"CSS",label:"CSS"},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},A))):(0,l.tZ)(o.Z,null,(0,l.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:d},w?h:k)))))}},3273:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(7294),l=n(2863);let o=null,r=null;const s={getLatestTag:async function(){return o&&r&&Date.now()-r<36e5?o:async function(){try{const t=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),e=await t.json();return o=e[0].name,r=Date.now(),o}catch(t){return console.error("Error fetching latest tag:",t),null}}()}};function i(t){let{type:e,location:n}=t;const[o,r]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{const t=await s.getLatestTag();r("https://javadoc.io/static/org.dwcj/dwcj-"+e+"/"+t+"/"+n+".html")}catch(t){console.error("Error fetching latest release:",t)}})()}),[]);const i=l.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,u=l.iv`
    color: gray;
  `;return(0,l.tZ)("div",{css:i},(0,l.tZ)("p",{css:u},"API:\xa0"),(0,l.tZ)("b",null,(0,l.tZ)("a",{href:o,target:"_blank"},"Java")))}},7796:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(7294);function l(t){var e,n;const[l,o]=(0,a.useState)(null);if((0,a.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((t=>t.json())).then((e=>{const n=e.components.find((e=>e.tag===t.tag));o(n)}))}),[]),!l)return a.createElement("div",null,"Loading...");const r=null==(e=l.docsTags)?void 0:e.filter((t=>"part"===t.name)),s=null==(n=l.styles)?void 0:n.map((t=>({name:t.name,description:t.docs})));return a.createElement(a.Fragment,null,"parts"==t.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==r?void 0:r.map((t=>{const[e,n]=t.text.split(" - ");return a.createElement("tr",{key:t.id},a.createElement("td",null,e),a.createElement("td",null,n))}))))),"properties"==t.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==s?void 0:s.map((t=>a.createElement("tr",{key:t.name},a.createElement("td",null,t.name),a.createElement("td",null,t.description))))))),"properties"!=t.table&&"parts"!=t.table&&a.createElement(a.Fragment,null,a.createElement("h4",null,"Shadow Parts"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==r?void 0:r.map((t=>{const[e,n]=t.text.split(" - ");return a.createElement("tr",{key:t.id},a.createElement("td",null,e),a.createElement("td",null,n))})))),a.createElement("h4",null,"CSS Properties"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==s?void 0:s.map((t=>a.createElement("tr",{key:t.name},a.createElement("td",null,t.name),a.createElement("td",null,t.description))))))))}},7743:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),l=(n(7294),n(3905)),o=n(2395),r=n(7796),s=n(3273);const i={sidebar_position:5,title:"Button"},u=void 0,c={unversionedId:"components/button",id:"components/button",title:"Button",description:"Text",source:"@site/docs/components/button.md",sourceDirName:"components",slug:"/components/button",permalink:"/docs/components/button",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/button.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Button"},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/docs/components/home"},next:{title:"CheckBox",permalink:"/docs/components/checkbox"}},m={},d=[{value:"Text",id:"text",level:3},{value:"Adding Icons to Buttons",id:"adding-icons-to-buttons",level:3},{value:"Disabling a Button",id:"disabling-a-button",level:3},{value:"Themes",id:"themes",level:3},{value:"Expanses",id:"expanses",level:3},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:2}],p={toc:d};function b(t){let{components:e,...i}=t;return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,{type:"engine",location:"org/dwcj/component/button/Button",mdxType:"JavadocLink"}),(0,l.kt)("h3",{id:"text"},"Text"),(0,l.kt)("p",null,"Buttons come with a parameterized constructor, taking a String argument, which will set the initial text of the button. The ",(0,l.kt)("inlineCode",{parentName:"p"},"setText(String foo)")," method can also be called to set the text of the button.  "),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"adding-icons-to-buttons"},"Adding Icons to Buttons"),(0,l.kt)("p",null,"In addition to, or instead of having text on a button, it is possible to add an icon to a button as well. Out of the box, the following icon pools can be used:"),(0,l.kt)("ol",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"https://tabler-icons.io/"}," Tabler ")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"https://feathericons.com/"}," Feather ")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"https://fontawesome.com/"}," Font Awesome Free "))),(0,l.kt)("p",null,"Below are examples of buttons with text to the left and right, as well as a button with only an icon:"),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.buttondemos.ButtonIcon",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/buttondemos/ButtonIcon.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/button/Icon.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/buttonstyles/icon_styles.css",javaHighlight:"{15,17,19}",height:"100px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"To add these icons, set the button's text to have an ",(0,l.kt)("inlineCode",{parentName:"p"},"<html>")," tag, with a ",(0,l.kt)("inlineCode",{parentName:"p"},"<bbj-icon>")," tag inside with the name attribute set accordingly. In addition to an icon, include text to the left or right of the ",(0,l.kt)("inlineCode",{parentName:"p"},"<bbj-icon>")," tag to include a label as well."),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"disabling-a-button"},"Disabling a Button"),(0,l.kt)("p",null,"Button components can be disabled to convey to a user that a certain action is not yet or is no longer available. A disabled button will increase the gray scale of the button, and is available for\nall button themes and expanses. ",(0,l.kt)("br",null),(0,l.kt)("br",null)),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.buttondemos.ButtonDisable",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/buttondemos/ButtonDisable.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/button/Disable.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/buttonstyles/disable_styles.css",javaHighlight:"{49-52}",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"Disabling a button can be done at any time in the code by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"setEnabled(boolean foo)")," function. For added convenience, a button can also be disabled when clicked using the built-in ",(0,l.kt)("inlineCode",{parentName:"p"},"setDisabledOnClick(boolean foo)")," function."),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"themes"},"Themes"),(0,l.kt)("p",null,"DWCJ button components come with 14 themes built in for quick styling without the use of CSS.\nShown below are example buttons with each of the supported Themes applied: ",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.buttondemos.ButtonThemes",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/buttondemos/ButtonThemes.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/button/Theme.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/buttonstyles/theme_styles.css",javaHighlight:"{23-36}",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"Listed below are the current supported theme options for the button control:",(0,l.kt)("br",null)),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Button Themes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.DEFAULT")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.DANGER")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.GRAY")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.INFO")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.PRIMARY")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.SUCCESS")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.WARNING")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.OUTLINED_DEFAULT")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.OUTLINED_DANGER")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.OUTLINED_GRAY")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.OUTLINED_INFO")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.OUTLINED_PRIMARY")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.OUTLINED_SUCCESS")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Theme.OUTLINED_WARNING"))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"expanses"},"Expanses"),(0,l.kt)("p",null,"There are five button expanses that are supported in the DWCJ which allow for quick styling without using CSS.\nBelow are the various expanses supported for the button component: ",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.buttondemos.ButtonExpanses",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/buttondemos/ButtonExpanses.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/button/Expanses.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/buttonstyles/expanse_styles.css",javaHighlight:"{18-22}",mdxType:"ComponentDemo"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Button Expanses"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Expanse.XSMALL")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Expanse.SMALL")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Expanse.MEDIUM")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Expanse.LARGE")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Button.Expanse.XLARGE"))))))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"parts-and-css-properties"},"Parts and CSS Properties"),(0,l.kt)(r.Z,{tag:n(5731).zx,mdxType:"TableBuilder"}))}b.isMDXComponent=!0},5731:t=>{t.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog"}')}}]);
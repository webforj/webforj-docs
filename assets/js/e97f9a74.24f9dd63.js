"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9729],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),l=a(7294),r=a(6010),s=a(2466),o=a(6775),i=a(1980),c=a(7392),m=a(12);function u(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,c]=h({queryString:a,groupId:n}),[u,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,m.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),v=(()=>{const e=i??u;return p({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,r]),tabValues:r}}var v=a(2389);const A="tabList__CuJ",g="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=m.indexOf(t),n=c[a].value;n!==o&&(u(t),i(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:p,onClick:d},s,{className:(0,r.Z)("tabs__item",g,null==s?void 0:s.className,{"tabs__item--active":o===t})}),a??t)})))}function E(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",A)},l.createElement(w,(0,n.Z)({},e,t)),l.createElement(E,(0,n.Z)({},e,t)))}function y(e){const t=(0,v.Z)();return l.createElement(k,(0,n.Z)({key:String(t)},e))}},6957:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),l=a(917),r=a(4866),s=a(5162),o=a(4673),i=a(8488);const c=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";var m=a(2949);function u(e){let{collapse:t,setCollapse:a}=e;const n=l.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,r=l.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    margin-right: 5px;
    background-color: transparent;  
  `,s=l.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,l.tZ)("div",{css:n},(0,l.tZ)("button",{css:r,onClick:()=>{a(!t)}},t?(0,l.tZ)("img",{css:s,src:c,className:"icon-tabler-arrow-bar-up"}):(0,l.tZ)("img",{css:s,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function d(e){let{url:t}=e;const a=l.iv`
      position: relative;
      cursor: pointer;
      z-index: 10;
      height: 35px;
      width: 35px;
      border: none;
      background-color: none;
      justify-self: flex-end;
      /* margin-right: 5px; */
      margin-top: -5px;
      margin-bottom: -20px;
      background-color: transparent;

      
    `,n=l.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,l.tZ)("button",{css:a,onClick:()=>{window.open(t,"_blank")}},(0,l.tZ)("img",{css:n,src:"data:image/png;base64,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"}))}function p(e){let{path:t,javaC:a,javaE:c,cssURL:p,javaHighlight:h,height:b,frame:v,tabs:A}=e;const[g,w]=(0,n.useState)(""),[E,k]=(0,n.useState)(""),[y,f]=(0,n.useState)(""),[D,S]=(0,n.useState)(!(!a||!c)),[x,C]=(0,n.useState)(!1),[Z,B]=(0,n.useState)({});(0,n.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{k(e);const t=new URL(c).pathname.split("/"),a=t[t.length-1];B((e=>({...e,javaFile:a})))})),a&&fetch(a).then((e=>e.text())).then((e=>{w(e)})),p&&fetch(p).then((e=>e.text())).then((e=>{f(e);const t=new URL(p).pathname.split("/"),a=t[t.length-1];B((e=>({...e,cssFile:a})))}))}),[]);const N=l.iv`
		display: flex;
    flex-direction: column;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==v?"0 15px 0 15px;":"7px 15px 0 15px;"};
    box-shadow: var(--ifm-global-shadow-lw);
    `,L=l.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${b};
  `,T=l.iv`
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

  `,j=l.iv`
  width: 100%;
  `,J=l.iv`
  display: flex;
  justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${x&&"opacity: 1;"};
    
  `;return(0,l.tZ)("div",{css:N},"hidden"!=v?(0,l.tZ)("div",{onMouseEnter:()=>{C(!0)},onMouseLeave:()=>C(!1),css:j},(0,l.tZ)("div",{css:J},(0,l.tZ)(d,{url:t})),(0,l.tZ)("iframe",{loading:"lazy",src:t+"&theme="+("dark"===(0,m.I)().colorMode?"dark":"light"),css:L})):null,(0,l.tZ)(o.Z,{css:T,summary:(0,l.tZ)("summary",null,"Show Code")},a&&c?(0,l.tZ)(u,{collapse:D,setCollapse:S}):null,p?(0,l.tZ)(r.Z,null,(0,l.tZ)(s.Z,{value:A?A[0]:"Java",label:A?A[0]:Z.javaFile,default:!0},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h},D?g:E)),(0,l.tZ)(s.Z,{value:A?A[1]:"CSS",label:A?A[1]:Z.cssFile},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},y))):(0,l.tZ)(r.Z,null,(0,l.tZ)(s.Z,{value:A?A[0]:"Java",label:A?A[0]:Z.javaFile,default:!0},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h},D?g:E)))))}},7796:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(e){var t,a,l,r;const[s,o]=(0,n.useState)(null);if((0,n.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const a=t.components.find((t=>t.tag===e.tag));o(a)}))}),[]),!s)return n.createElement("div",null,"Loading...");const i=null==(t=s.docsTags)?void 0:t.filter((e=>"part"===e.name)),c=null==(a=s.slots)?void 0:a.map((e=>({name:e.name,desc:e.docs}))),m=null==(l=s.styles)?void 0:l.map((e=>({name:e.name,description:e.docs}))),u=null==(r=s.props)?void 0:r.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type})));return n.createElement(n.Fragment,null,"parts"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==i?void 0:i.map((t=>{var a;const[l,r]=t.text.split(" - ");return!(null!=(a=e.exclusions)&&a.includes(l))&&n.createElement("tr",{key:t.id},n.createElement("td",null,n.createElement("code",null,l)),n.createElement("td",null,r))}))))),"slots"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Slot"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==c?void 0:c.map((t=>{var a;return!(null!=(a=e.exclusions)&&a.includes(t.name))&&""!=t.name&&n.createElement("tr",{key:t.name},n.createElement("td",null,n.createElement("code",null,t.name)),n.createElement("td",null,t.desc))}))))),"properties"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==m?void 0:m.map((t=>{var a;return!(null!=(a=e.exclusions)&&a.includes(t.name))&&n.createElement("tr",{key:t.name},n.createElement("td",null,n.createElement("code",null,t.name)),n.createElement("td",null,t.description))}))))),"reflects"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Attribute"),n.createElement("th",null,"Description"),n.createElement("th",null,"Type"))),n.createElement("tbody",null,null==u?void 0:u.map((t=>{var a;return null!=t.attr&&0==t.display&&!(null!=(a=e.exclusions)&&a.includes(t.attr))&&n.createElement("tr",{key:t.attr},n.createElement("td",null,n.createElement("code",null,t.attr)),n.createElement("td",null,t.desc),n.createElement("td",null,t.type))}))))),"properties"!=e.table&&"parts"!=e.table&&"slots"!=e.table&&"reflects"!=e.table&&n.createElement(n.Fragment,null,n.createElement("h4",null,"Shadow Parts"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==i?void 0:i.map((e=>{const[t,a]=e.text.split(" - ");return n.createElement("tr",{key:e.id},n.createElement("td",null,n.createElement("code",null,t)),n.createElement("td",null,a))})))),n.createElement("h4",null,"CSS Properties"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==m?void 0:m.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,e.description)))))),n.createElement("h4",null,"Reflected Attributes"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Attribute"),n.createElement("th",null,"Description"),n.createElement("th",null,"Type"))),n.createElement("tbody",null,null==u?void 0:u.map((t=>{var a;return null!=t.attr&&0==t.display&&!(null!=(a=e.exclusions)&&a.includes(t.attr))&&n.createElement("tr",{key:t.attr},n.createElement("td",null,n.createElement("code",null,t.attr)),n.createElement("td",null,t.desc),n.createElement("td",null,t.type))}))))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(8397);function r(e){return n.createElement(n.Fragment,null,n.createElement(l.Z,e))}},4861:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var n=a(7462),l=(a(7294),a(3905)),r=a(6957),s=a(7796),o=a(3273);const i={sidebar_position:110,title:"Slider"},c=void 0,m={unversionedId:"components/slider",id:"components/slider",title:"Slider",description:"Upper and Lower Limit",source:"@site/docs/components/slider.md",sourceDirName:"components",slug:"/components/slider",permalink:"/docs/components/slider",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/slider.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110,title:"Slider"},sidebar:"tutorialSidebar",previous:{title:"RadioButtonGroup",permalink:"/docs/components/radiobuttongroup"},next:{title:"TextArea",permalink:"/docs/components/text-area"}},u={},d=[{value:"Upper and Lower Limit",id:"upper-and-lower-limit",level:3},{value:"Ticks and Labeling",id:"ticks-and-labeling",level:3},{value:"Orientation and Inversion",id:"orientation-and-inversion",level:3},{value:"Themes",id:"themes",level:3},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:2}],p={toc:d};function h(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{type:"engine",location:"org/dwcj/component/slider/Slider",top:"true",mdxType:"JavadocLink"}),(0,l.kt)("h3",{id:"upper-and-lower-limit"},"Upper and Lower Limit"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"setMinimum()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"setMaximum()")," methods to determine the upper and lower bound of the slider. Each interval on the slider has a distance of 1, meaning that a slider with maximum 10 and minimum of 0 will have 10 intervals on the slider, whereas a maximum of 100 and minimum of 0 will have 100 intervals. These intervals will evenly distribute on the slider, depending on the height and width dimensions that it has been given by the developer. "),(0,l.kt)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderMaxMinDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderMaxMinDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/MinMax.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/minmax_styles.css",javaHighlight:"{17,21}",height:"225px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"ticks-and-labeling"},"Ticks and Labeling"),(0,l.kt)("p",null,"Slider components can be customized to show ticks, or spaces bounded by lines to represent distances. Major ticks will be larger and more noticeable than minor ticks, and both can be configured to appear at the desired intervals. It is also possible to set the slider to snap to the tick values using the ",(0,l.kt)("inlineCode",{parentName:"p"},"setSnapToTicks()")," method."),(0,l.kt)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderLabelDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderLabelDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Label.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/label_styles.css",javaHighlight:"{62-78}",height:"325px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"It is also possible to set labels on a slider. These labs may or may not correspond with ticks that have been set. To set the labels, simply create a map with key value pairs, where the keys are the integer values to be labeled, and the values are the desired label string. "),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If tick snapping is enabled, the slider will only snap to ticked spaces specifically. If a non-ticked value has a label, it will not be snapped to by the slider.")),(0,l.kt)("br",null),(0,l.kt)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderTickDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderTickDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Ticks.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/tick_styles.css",javaHighlight:"{24-31}",height:"225px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"orientation-and-inversion"},"Orientation and Inversion"),(0,l.kt)("p",null,"Sliders can be oriented either horizontally or vertically by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"setOrientation()")," method."),(0,l.kt)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderOrientationDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderOrientationDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Orientation.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/orientation_styles.css",javaHighlight:"{37}",height:"400px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"It is also possible to invert a slider. By default, the minimum value of a vertical slider is at the bottom and the maximum value is at the top. For a horizontal slider, the minimum value is to the left and the maximum value is to the right. The orientation reverses for inverted sliders."),(0,l.kt)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderInversionDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderInversionDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Inversion.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/inversion_styles.css",javaHighlight:"{42}",height:"200px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"themes"},"Themes"),(0,l.kt)("p",null,"The slider component comes with 6 themes built in for quick styling without the use of CSS. Theming is supported by use of a built-in enum class.\nShown below are sliders with each of the supported Themes applied: ",(0,l.kt)("br",null)),(0,l.kt)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderThemesDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderThemesDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Themes.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/theme_styles.css",javaHighlight:"{20,25,30,35,40,45}",height:"620px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slider Themes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.DEFAULT")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.DANGER")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.GRAY")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.INFO")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.SUCCESS")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.WARNING"))))))),(0,l.kt)("h2",{id:"parts-and-css-properties"},"Parts and CSS Properties"),(0,l.kt)(s.Z,{tag:a(5731).iR,mdxType:"TableBuilder"}))}h.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog","JO":"bbj-icon"}')}}]);
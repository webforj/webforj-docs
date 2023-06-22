"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9729],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),s=a(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(l,r),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(7462),s=a(7294),l=a(6010),r=a(2466),o=a(6775),i=a(1980),c=a(7392),m=a(12);function d(e){return function(e){return s.Children.map(e,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function u(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=u(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=h({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=i??d;return p({value:e,tabValues:l})?e:null})();(0,s.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var v=a(2389);const g="tabList__CuJ",A="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),u=e=>{const t=e.currentTarget,a=m.indexOf(t),n=c[a].value;n!==o&&(d(t),i(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}null==(t=a)||t.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:p,onClick:u},r,{className:(0,l.Z)("tabs__item",A,null==r?void 0:r.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=b(e);return s.createElement("div",{className:(0,l.Z)("tabs-container",g)},s.createElement(w,(0,n.Z)({},e,t)),s.createElement(k,(0,n.Z)({},e,t)))}function x(e){const t=(0,v.Z)();return s.createElement(f,(0,n.Z)({key:String(t)},e))}},2395:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),s=a(2863),l=a(4866),r=a(5162),o=a(4673),i=a(8488);const c=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function m(e){let{collapse:t,setCollapse:a}=e;const n=s.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,l=s.iv`
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
  
  `,r=s.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,s.tZ)("div",{css:n},(0,s.tZ)("button",{css:l,onClick:()=>{a(!t)}},t?(0,s.tZ)("img",{css:r,src:c,className:"icon-tabler-arrow-bar-up"}):(0,s.tZ)("img",{css:r,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function d(e){let{path:t,javaC:a,javaE:c,cssURL:d,javaHighlight:u,height:p,frame:h}=e;const[b,v]=(0,n.useState)(""),[g,A]=(0,n.useState)(""),[w,k]=(0,n.useState)(""),[f,x]=(0,n.useState)(!0),y=s.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==h?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,S=s.iv`
    min-height: 100px;
    height: 100%;
    height: ${p};
  `,D=s.iv`
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

  `;return c&&fetch(c).then((e=>e.text())).then((e=>{A(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{v(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{k(e)})),(0,s.tZ)("div",{css:y},"hidden"!=h?(0,s.tZ)("iframe",{loading:"lazy",src:t,css:S}):null,(0,s.tZ)(o.Z,{css:D,summary:(0,s.tZ)("summary",null,"Show Code")},a&&c?(0,s.tZ)(m,{collapse:f,setCollapse:x}):null,d?(0,s.tZ)(l.Z,null,(0,s.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,s.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u},f?b:g)),(0,s.tZ)(r.Z,{value:"CSS",label:"CSS"},(0,s.tZ)(i.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},w))):(0,s.tZ)(l.Z,null,(0,s.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,s.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u},f?b:g)))))}},7796:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294);function s(e){var t,a;const[s,l]=(0,n.useState)(null);if((0,n.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const a=t.components.find((t=>t.tag===e.tag));l(a)}))}),[]),!s)return n.createElement("div",null,"Loading...");const r=null==(t=s.docsTags)?void 0:t.filter((e=>"part"===e.name)),o=null==(a=s.styles)?void 0:a.map((e=>({name:e.name,description:e.docs})));return n.createElement(n.Fragment,null,n.createElement("h4",null,"Shadow Parts"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==r?void 0:r.map((e=>{const[t,a]=e.text.split(" - ");return n.createElement("tr",{key:e.id},n.createElement("td",null,t),n.createElement("td",null,a))})))),n.createElement("h4",null,"CSS Properties"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==o?void 0:o.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,e.name),n.createElement("td",null,e.description)))))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),s=a(8397);function l(e){return n.createElement(n.Fragment,null,n.createElement(s.Z,e))}},4861:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(7462),s=(a(7294),a(3905)),l=a(2395),r=a(7796);const o={sidebar_position:110,title:"Slider"},i=void 0,c={unversionedId:"components/slider",id:"components/slider",title:"Slider",description:"API:&nbsp;",source:"@site/docs/components/slider.md",sourceDirName:"components",slug:"/components/slider",permalink:"/docs/components/slider",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/slider.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110,title:"Slider"},sidebar:"tutorialSidebar",previous:{title:"Progress Bar",permalink:"/docs/components/progress-bar"},next:{title:"Text Area",permalink:"/docs/components/text-area"}},m={},d=[{value:"Upper and Lower Limit",id:"upper-and-lower-limit",level:3},{value:"Ticks and Labeling",id:"ticks-and-labeling",level:3},{value:"Orientation and Inversion",id:"orientation-and-inversion",level:3},{value:"Themes",id:"themes",level:3},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:2}],u={toc:d};function p(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"-50px"}},(0,s.kt)("p",{style:{color:"gray"}},"API:\xa0"),(0,s.kt)("b",null,(0,s.kt)("a",{href:"https://javadoc.io/static/org.dwcj/dwcj-engine/0.15.0/org/dwcj/controls/slider/Slider.html",style:{justifySelf:"flex-end"}}," Java "))),(0,s.kt)("h3",{id:"upper-and-lower-limit"},"Upper and Lower Limit"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"setMinimum()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"setMaximum()")," methods to determine the upper and lower bound of the slider. Each interval on the slider has a distance of 1, meaning that a slider with maximum 10 and minimum of 0 will have 10 intervals on the slider, whereas a maximum of 100 and minimum of 0 will have 100 intervals. These intervals will evenly distribute on the slider, depending on the height and width dimensions that it has been given by the developer. "),(0,s.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderMaxMinDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderMaxMinDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/MinMax.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/minmax_styles.css",javaHighlight:"{17,21}",height:"225px",mdxType:"ComponentDemo"}),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"ticks-and-labeling"},"Ticks and Labeling"),(0,s.kt)("p",null,"Slider components can be customized to show ticks, or spaces bounded by lines to represent distances. Major ticks will be larger and more noticeable than minor ticks, and both can be configured to appear at the desired intervals. It is also possible to set the slider to snap to the tick values using the ",(0,s.kt)("inlineCode",{parentName:"p"},"setSnapToTicks()")," method."),(0,s.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderLabelDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderLabelDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Label.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/label_styles.css",javaHighlight:"{62-78}",height:"325px",mdxType:"ComponentDemo"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"It is also possible to set labels on a slider. These labs may or may not correspond with ticks that have been set. To set the labels, simply create a map with key value pairs, where the keys are the integer values to be labeled, and the values are the desired label string. "),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"If tick snapping is enabled, the slider will only snap to ticked spaces specifically. If a non-ticked value has a label, it will not be snapped to by the slider.")),(0,s.kt)("br",null),(0,s.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderTickDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderTickDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Ticks.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/tick_styles.css",javaHighlight:"{24-31}",height:"225px",mdxType:"ComponentDemo"}),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"orientation-and-inversion"},"Orientation and Inversion"),(0,s.kt)("p",null,"Sliders can be oriented either horizontally or vertically by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"setOrientation()")," method."),(0,s.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderOrientationDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderOrientationDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Orientation.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/orientation_styles.css",javaHighlight:"{37}",height:"400px",mdxType:"ComponentDemo"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"It is also possible to invert a slider. By default, the minimum value of a vertical slider is at the bottom and the maximum value is at the top. For a horizontal slider, the minimum value is to the left and the maximum value is to the right. The orientation reverses for inverted sliders."),(0,s.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderInversionDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderInversionDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Inversion.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/inversion_styles.css",javaHighlight:"{42}",height:"200px",mdxType:"ComponentDemo"}),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"themes"},"Themes"),(0,s.kt)("p",null,"The slider component comes with 6 themes built in for quick styling without the use of CSS. Theming is supported by use of a built-in enum class.\nShown below are sliders with each of the supported Themes applied: ",(0,s.kt)("br",null)),(0,s.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderThemesDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderThemesDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Themes.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/theme_styles.css",javaHighlight:"{20,25,30,35,40,45}",height:"620px",mdxType:"ComponentDemo"}),(0,s.kt)("br",null),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Slider Themes"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("inlineCode",{parentName:"td"},"Slider.Theme.DEFAULT")),(0,s.kt)("li",null,(0,s.kt)("inlineCode",{parentName:"td"},"Slider.Theme.DANGER")),(0,s.kt)("li",null,(0,s.kt)("inlineCode",{parentName:"td"},"Slider.Theme.GRAY")),(0,s.kt)("li",null,(0,s.kt)("inlineCode",{parentName:"td"},"Slider.Theme.INFO")),(0,s.kt)("li",null,(0,s.kt)("inlineCode",{parentName:"td"},"Slider.Theme.SUCCESS")),(0,s.kt)("li",null,(0,s.kt)("inlineCode",{parentName:"td"},"Slider.Theme.WARNING"))))))),(0,s.kt)("h2",{id:"parts-and-css-properties"},"Parts and CSS Properties"),(0,s.kt)(r.Z,{tag:a(5731).iR,mdxType:"TableBuilder"}))}p.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","nv":"bbj-inpute","Ki":"bbj-inputn","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","dy":"bbj-drawer","Vq":"bbj-dialog"}')}}]);
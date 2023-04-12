"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5496],{5162:(e,t,o)=>{o.d(t,{Z:()=>l});var a=o(7294),n=o(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:o,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,l),hidden:o},t)}},4866:(e,t,o)=>{o.d(t,{Z:()=>k});var a=o(7462),n=o(7294),s=o(6010),l=o(2466),r=o(6775),i=o(1980),c=o(7392),u=o(12);function m(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:o,attributes:a,default:n}}=e;return{value:t,label:o,attributes:a,default:n}}))}function b(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??m(o);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function d(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:o}=e;const a=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:o=!1,groupId:a}=e,s=b(e),[l,r]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=o.find((e=>e.default))??o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,c]=p({queryString:o,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(o);return[a,(0,n.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:a}),x=(()=>{const e=i??m;return d({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{x&&r(x)}),[x]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),h(e)}),[c,h,s]),tabValues:s}}var x=o(2389);const A="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:o,selectedValue:r,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),b=e=>{const t=e.currentTarget,o=u.indexOf(t),a=c[o].value;a!==r&&(m(t),i(a))},d=e=>{var t;let o=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;o=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;o=u[t]??u[u.length-1];break}}null==(t=o)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},t)},c.map((e=>{let{value:t,label:o,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:b},l,{className:(0,s.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":r===t})}),o??t)})))}function f(e){let{lazy:t,children:o,selectedValue:a}=e;if(o=Array.isArray(o)?o:[o],t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",A)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(f,(0,a.Z)({},e,t)))}function k(e){const t=(0,x.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},2395:(e,t,o)=>{o.d(t,{Z:()=>m});var a=o(7294),n=o(2863),s=o(4866),l=o(5162),r=o(4673),i=o(8488);const c=o.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function u(e){let{collapse:t,setCollapse:o}=e;const a=n.iv`
    /* transition: all var(--ifm-transition-fast) ease; */
    display: flex;
    justify-content: end;
    /* margin-bottom: -85px; */
    margin-bottom: -30px;
    background-color: transparent;
    `,s=n.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    /* margin-right: 83px; */
    margin-right: 5px;
    margin-bottom: -50px;
    background-color: transparent;
  
  `,l=n.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,n.tZ)("div",{css:a},(0,n.tZ)("button",{css:s,onClick:()=>{o(!t)}},t?(0,n.tZ)("img",{css:l,src:c,className:"icon-tabler-arrow-bar-up"}):(0,n.tZ)("img",{css:l,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function m(e){let{path:t,javaC:o,javaE:c,cssURL:m,javaHighlight:b,height:d}=e;const[p,h]=(0,a.useState)(""),[x,A]=(0,a.useState)(""),[v,g]=(0,a.useState)(""),[f,w]=(0,a.useState)(!0),k=n.iv`
		display: flex;
    flex-direction: column;
    padding: 10px 15px 0 15px;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    
    `,C=n.iv`
    min-height: 100px;
    height: 100%;
    height: ${d};
  `,y=n.iv`
    border: none;
    box-shadow: none;
    background-color: var(--code-display-color);
    margin-bottom: 0px;
    padding: 10px;

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

  `;return c&&fetch(c).then((e=>e.text())).then((e=>{A(e)})),o&&fetch(o).then((e=>e.text())).then((e=>{h(e)})),m&&fetch(m).then((e=>e.text())).then((e=>{g(e)})),(0,n.tZ)("div",{css:k},(0,n.tZ)("iframe",{loading:"lazy",src:t,css:C}),(0,n.tZ)(r.Z,{css:y,summary:(0,n.tZ)("summary",null,"Show Code")},o&&c?(0,n.tZ)(u,{collapse:f,setCollapse:w}):null,m?(0,n.tZ)(s.Z,null,(0,n.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,n.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:b},f?p:x)),(0,n.tZ)(l.Z,{value:"CSS",label:"CSS"},(0,n.tZ)(i.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},v))):(0,n.tZ)(s.Z,null,(0,n.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,n.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:b},f?p:x)))))}},1415:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(7294),n=o(8397);function s(e){return a.createElement(a.Fragment,null,a.createElement(n.Z,e))}},9282:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=o(7462),n=(o(7294),o(3905)),s=o(2395);const l={sidebar_position:23,title:"Combo box"},r=void 0,i={unversionedId:"controls/combo-box",id:"controls/combo-box",title:"Combo box",description:"API:&nbsp;",source:"@site/docs/controls/combo-box.md",sourceDirName:"controls",slug:"/controls/combo-box",permalink:"/docs/controls/combo-box",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/controls/combo-box.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,title:"Combo box"},sidebar:"tutorialSidebar",previous:{title:"Choice Box",permalink:"/docs/controls/choice-box"},next:{title:"Dialog",permalink:"/docs/controls/dialog"}},c={},u=[{value:"Menu Placement",id:"menu-placement",level:3},{value:"Label",id:"label",level:3},{value:"Placeholder",id:"placeholder",level:3},{value:"Expanses",id:"expanses",level:3}],m={toc:u};function b(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"-50px"}},(0,n.kt)("p",{style:{color:"gray"}},"API:\xa0"),(0,n.kt)("b",null,(0,n.kt)("a",{href:"https://javadoc.io/static/org.dwcj/dwcj-engine/0.15.0/org/dwcj/controls/textcombobox/TextComboBox.html",style:{justifySelf:"flex-end"}}," Java "))),(0,n.kt)("h3",{id:"menu-placement"},"Menu Placement"),(0,n.kt)("p",null,"The combo box can be configured to open the menu in various positions relative to the position of the control itself."),(0,n.kt)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxPlacement",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxPlacement.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Placement.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/placement_styles.css",javaHighlight:"{24,29,33,38}",height:"350px",mdxType:"ComponentDemo"}),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"label"},"Label"),(0,n.kt)("p",null,"The combo box control can be easily labeled without the needing to create an extra label control using the ",(0,n.kt)("inlineCode",{parentName:"p"},"setAttribute()")," method and passing the desired label as a string, as shown below: ",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxLabel",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxLabel.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Label.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/text_combo_styles.css",javaHighlight:"{24}",height:"200px",mdxType:"ComponentDemo"}),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"placeholder"},"Placeholder"),(0,n.kt)("p",null,"It is also possible to set placeholder text within the control to better help users understand what type of input is expected. Similar to a label, this can be accomplished using the ",(0,n.kt)("inlineCode",{parentName:"p"},"setAttribute()")," method: ",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxPlaceholder",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxPlaceholder.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Placeholder.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/text_combo_styles.css",javaHighlight:"{24}",height:"200px",mdxType:"ComponentDemo"}),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"expanses"},"Expanses"),(0,n.kt)("p",null,"DWCJ's combo box comes with 5 expanses for quick styling without the use of CSS. Expanses are supported by use of a built-in enum class.\nBelow are the various expanses supported for the text box control: ",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxExpanses",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxExpanses.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Expanses.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/expanse_styles.css",javaHighlight:"{24,27,30,33,36}",height:"350px",mdxType:"ComponentDemo"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Combo Box Expanses"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.XSMALL")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.SMALL")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.MEDIUM")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.LARGE")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.XLARGE"))))))))}b.isMDXComponent=!0}}]);
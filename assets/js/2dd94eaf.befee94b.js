"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9577],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var A=n.createContext({}),s=function(e){var t=n.useContext(A),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(A.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,A=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,k=d["".concat(A,".").concat(p)]||d[p]||c[p]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var A in t)hasOwnProperty.call(t,A)&&(o[A]=t[A]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},422:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:70},i="Numeric Box",o={unversionedId:"controls/numeric-box",id:"controls/numeric-box",title:"Numeric Box",description:"At a Glance",source:"@site/docs/controls/numeric-box.md",sourceDirName:"controls",slug:"/controls/numeric-box",permalink:"/docs/controls/numeric-box",draft:!1,tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"List Box",permalink:"/docs/controls/list-box"},next:{title:"Progress Bar",permalink:"/docs/controls/progress-bar"}},A={},s=[{value:"At a Glance",id:"at-a-glance",level:3},{value:"Labeling",id:"labeling",level:3},{value:"Placeholder",id:"placeholder",level:3},{value:"Masking",id:"masking",level:3},{value:"Expanse",id:"expanse",level:3}],u={toc:s};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"numeric-box"},"Numeric Box"),(0,r.kt)("h3",{id:"at-a-glance"},"At a Glance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parent Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Interfaces"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"AbstractDwcControl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},"HasReadOnly")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},"HasTextHighlight")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},"HasFocus")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},"HasTabTraversal")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},"HasTextAlignment"))))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Methods"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"String getCommaCharacter()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"String getDotCharacter()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"String getEditString()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Integer getError()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"int getLength()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Integer getMargin()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"String getMask()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"String getRestore()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"BigDecimal getValue()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean isHighlight()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean isInsertMode()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean isNegatable()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean isPassEnter()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean isPassTab()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean isUseEditCommas()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"void restore()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox selectAll()"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setCommaCharacter(String comma)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setDotCharacter(String dot)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setEditString(String edit)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setExpanse(Expanse expanse)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setHighlight(Boolean highlight)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setInsertMode(Boolean insert)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setLength(Integer len)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setMargin(Integer marginWidth)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setMask(String mask)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setNegatable(boolean negatable)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setPassEnter(Boolean pass)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setPassTab(Boolean pass)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setRestore(float restore)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setUseEditCommas(boolean useCommas)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setValue(BigDecimal value)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setValue(float value)"))),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox setValue(int value)")))))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Events"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericBox onEditModify(Consumer<NumericBoxEditModifyEvent> callback")))))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"labeling"},"Labeling"),(0,r.kt)("p",null,"Labels can be easily added above the control without the need to create a separate Label component above the control. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Numeric box labeling",src:a(7032).Z,width:"189",height:"65"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"setAttribute()")," function to create a label. The attribute to be changed is ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),", and the value should be the desired label text.  ",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.controls.numericbox.NumericBox;\n\nNumericBox exampleNumericBox = new NumericBox();      //Creates a new NumericBox\nexampleNumericBox.setAttribute("label", "Example numeric box label!");     //Gives the numeric box a label with the provided text\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"placeholder"},"Placeholder"),(0,r.kt)("p",null,"It is also possible to configure text that appears in the input when it has no value set by utilizing the placeholder attribute."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Numeric box placeholder",src:a(5312).Z,width:"194",height:"48"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"setAttribute()")," function to set placeholder text. The attribute to be changed is ",(0,r.kt)("inlineCode",{parentName:"p"},"placeholder"),", and the value should be the desired text.  ",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.controls.numericbox.NumericBox;\n\nNumericBox exampleNumericBox = new NumericBox();      //Creates a new NumericBox\nexampleNumericBox.setAttribute("placeholder", "Example placeholder");     //Gives the numeric box a placeholder with the provided text\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"masking"},"Masking"),(0,r.kt)("p",null,"In order to enforce certain ruled on numeric input, masking has been implemented to allow developers to customize input constraints."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"center"},"Mask"),(0,r.kt)("th",{align:"center"},"Supported"),(0,r.kt)("th",{align:"left"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"0"),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},"A zero is always replaced by a digit(0..9).")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"#"),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},"The pound sign is used to suppress leading zeroes. It is replaced by the fill character for leading zeroes to the left of the decimal point. For trailing zeros to the right of the decimal point it is replaced by a space or a zero (see ",(0,r.kt)("a",{href:"https://basishub.github.io/bbj-masks/docs/api/class/src/NumberMask/NumberMask.js~NumberMask.html",rel:"nofollow"},"forceTrailingZeros option"),"). Any other time it is replaced by a digit.")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},","),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},"To the left of the decimal point, the comma is replaced by the fill character if no digits have yet been placed. Any other time, it results in a comma.")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"*"),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},'The asterisk "*" is inserted into the number.')),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"."),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},"The decimal point is replaced by a decimal point if any digits appear in the output mask. Otherwise, it is replaced by the fill character. After the decimal point, the fill character becomes a space.")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"$"),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},"The dollar sign always results in a dollar sign.")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"("),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},'left parenthesis results in a "(" if the number is negative, or the fill character if positive.')),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},")"),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},'A right parenthesis results in a ")" if the number is negative, or the fill character if positive.')),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},")"),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},'A right parenthesis results in a ")" if the number is negative, or the fill character if positive.')),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"CR"),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},'The characters "CR" are inserted into the number if the number is negative. Two spaces are inserted if the number is positive.')),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"DR"),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},'The characters "CR" are inserted into the number if the number is negative. The characters "DR" are inserted if the number is positive.')),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"B"),(0,r.kt)("td",{align:"center"},"\u2713"),(0,r.kt)("td",{align:"left"},'The upper case "B" always becomes a space. Any other character is simply copied to the result.positive.')))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"expanse"},"Expanse"),(0,r.kt)("p",null,"DWCJ Numeric Box components come with 5 expanses for quick styling without the use of CSS.\nBelow are the various expanses supported for the numeric box control: ",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Numeric box expanses",src:a(2612).Z,width:"1302",height:"83"})),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Numeric Box Expanses"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"NumericBox.Expanse.XSMALL")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"NumericBox.Expanse.SMALL")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"NumericBox.Expanse.MEDIUM")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"NumericBox.Expanse.LARGE")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"NumericBox.Expanse.XLARGE"))))))),(0,r.kt)("br",null),"Expanses are supported by use of a built-in enum class. To apply an expanse, execute code similar to the following: ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import org.dwcj.controls.numericbox.NumericBox;\n\nNumericBox exampleNumericBox = new NumericBox();      //Creates a new NumericBox\nexampleNumericBox.setExpanse(NumericBox.Expanse.MEDIUM);     //Sets the numeric box's expanse to the medium size.\n")))}c.isMDXComponent=!0},2612:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/numericbox_expanses-eadb671b5eaf4509e06c34e5217d755a.jpg"},7032:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/jpeg;base64,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"},5312:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/jpeg;base64,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"}}]);
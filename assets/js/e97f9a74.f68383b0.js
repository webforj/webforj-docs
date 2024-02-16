"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9729],{6572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=r(5893),a=r(1151),s=r(6957),i=r(7796),o=r(3273);const l={sidebar_position:110,title:"Slider"},c=void 0,d={id:"components/slider",title:"Slider",description:"Upper and Lower Limit",source:"@site/docs/components/slider.md",sourceDirName:"components",slug:"/components/slider",permalink:"/docs/components/slider",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/slider.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110,title:"Slider"},sidebar:"documentationSidebar",previous:{title:"RadioButtonGroup",permalink:"/docs/components/radiobuttongroup"},next:{title:"TabbedPane",permalink:"/docs/components/tabbedpane"}},u={},m=[{value:"Upper and Lower Limit",id:"upper-and-lower-limit",level:3},{value:"Ticks and Labeling",id:"ticks-and-labeling",level:3},{value:"Orientation and Inversion",id:"orientation-and-inversion",level:3},{value:"Themes",id:"themes",level:3},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{type:"engine",location:"org/dwcj/component/slider/Slider",top:"true"}),"\n",(0,n.jsx)(t.h3,{id:"upper-and-lower-limit",children:"Upper and Lower Limit"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"setMinimum()"})," and ",(0,n.jsx)(t.code,{children:"setMaximum()"})," methods to determine the upper and lower bound of the slider. Each interval on the slider has a distance of 1, meaning that a slider with maximum 10 and minimum of 0 will have 10 intervals on the slider, whereas a maximum of 100 and minimum of 0 will have 100 intervals. These intervals will evenly distribute on the slider, depending on the height and width dimensions that it has been given by the developer."]}),"\n",(0,n.jsx)(s.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderMaxMinDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderMaxMinDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/MinMax.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/minmax_styles.css",javaHighlight:"{17,21}",height:"225px"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"ticks-and-labeling",children:"Ticks and Labeling"}),"\n",(0,n.jsxs)(t.p,{children:["Slider components can be customized to show ticks, or spaces bounded by lines to represent distances. Major ticks will be larger and more noticeable than minor ticks, and both can be configured to appear at the desired intervals. It is also possible to set the slider to snap to the tick values using the ",(0,n.jsx)(t.code,{children:"setSnapToTicks()"})," method."]}),"\n",(0,n.jsx)(s.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderLabelDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderLabelDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Label.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/label_styles.css",javaHighlight:"{62-78}",height:"325px"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"It is also possible to set labels on a slider. These labs may or may not correspond with ticks that have been set. To set the labels, simply create a map with key value pairs, where the keys are the integer values to be labeled, and the values are the desired label string."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"If tick snapping is enabled, the slider will only snap to ticked spaces specifically. If a non-ticked value has a label, it will not be snapped to by the slider."})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderTickDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderTickDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Ticks.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/tick_styles.css",javaHighlight:"{24-31}",height:"225px"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"orientation-and-inversion",children:"Orientation and Inversion"}),"\n",(0,n.jsxs)(t.p,{children:["Sliders can be oriented either horizontally or vertically by using the ",(0,n.jsx)(t.code,{children:"setOrientation()"})," method."]}),"\n",(0,n.jsx)(s.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderOrientationDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderOrientationDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Orientation.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/orientation_styles.css",javaHighlight:"{37}",height:"400px"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"It is also possible to invert a slider. By default, the minimum value of a vertical slider is at the bottom and the maximum value is at the top. For a horizontal slider, the minimum value is to the left and the maximum value is to the right. The orientation reverses for inverted sliders."}),"\n",(0,n.jsx)(s.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderInversionDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderInversionDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Inversion.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/inversion_styles.css",javaHighlight:"{42}",height:"200px"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"themes",children:"Themes"}),"\n",(0,n.jsxs)(t.p,{children:["The slider component comes with 6 themes built in for quick styling without the use of CSS. Theming is supported by use of a built-in enum class.\r\nShown below are sliders with each of the supported Themes applied: ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.sliderdemos.SliderThemesDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderThemesDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/slider/Themes.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/theme_styles.css",javaHighlight:"{20,25,30,35,40,45}",height:"620px"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsx)(t.tr,{children:(0,n.jsx)(t.th,{children:"Slider Themes"})})}),(0,n.jsx)(t.tbody,{children:(0,n.jsx)(t.tr,{children:(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"Slider.Theme.DEFAULT"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"Slider.Theme.DANGER"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"Slider.Theme.GRAY"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"Slider.Theme.INFO"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"Slider.Theme.SUCCESS"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"Slider.Theme.WARNING"})})]})})})})]}),"\n",(0,n.jsx)(t.h2,{id:"parts-and-css-properties",children:"Parts and CSS Properties"}),"\n",(0,n.jsx)(i.Z,{tag:r(5731).iR})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6031:(e,t,r)=>{var n=r(4836);t.Z=void 0;var a=n(r(4938)),s=r(5893),i=(0,a.default)((0,s.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=i},2610:(e,t,r)=>{var n=r(4836);t.Z=void 0;var a=n(r(4938)),s=r(5893),i=(0,a.default)((0,s.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=i},5162:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var n=r(6010);const a={tabItem:"tabItem_Ymn6"};var s=r(5893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(7294),a=r(6010),s=r(2466),i=r(6550),o=r(469),l=r(1980),c=r(7392),d=r(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=m(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,u]=p({queryString:r,groupId:a}),[b,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),A=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{A&&l(A)}),[A]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=r(2389);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function w(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",A.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function f(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",A.tabList),children:[(0,g.jsx)(w,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function j(e){const t=(0,v.Z)();return(0,g.jsx)(f,{...e,children:u(e.children)},String(t))}},6957:(e,t,r)=>{r.d(t,{Z:()=>A});var n=r(7294),a=r(917),s=r(4866),i=r(5162),o=r(4673),l=r(1750);const c="data:image/png;base64,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",d=r.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAALyElEQVR4nO3dXahmVR3H8e+M0/FlRouiGV9GxLSkiy7MkW7MDJOCCJ1zkia66KaLLByKEqUizW6EwJjKi24yDfL9pYSEEDSlIMS3JkJrlBzURiUcdXyZF8cu9hnmpOfMec551tr//9rP9wMLQWU9/73W/p398qy9H5AkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSW1bEV1ABauBs4AzgNNm2zrgvcAa4D1xpakHe4DXgJeAF4HHgSeAh4A/z/63wRhKgNcBXwamgU8AU7HlKKk9wF+B24EbgOdjy9E5wF3AXuBtm20JbS/we+Bs1Ltz6U6HoncC2zDaA8CnUXXHAdcTP+G2Yba7gBNRFZuAncRPsm3YbSdwISrmCOCXxE+sbbLaNcDhaCxrgD8SP5m2yWz30n39mFbmr5HWAXcDp0cXoon2CPA54IXoQuaTNcDHAPdheJXDVrqvm3ZGF/JOK6MLmMcRdHcDDa+y+BhwGwmviQ+LLmAe19CtqJIyORl4P/CH6ELmyhbgC4GroouQFnAm8E/g79GFHJDpGvh44B8kv+unibcT+CiwI7oQyHUNfDWGV/m9D/hJdBEHZDkCnwvcE12ENKK36dZO/ym6kCwBfoDuGV6pFfcDn4ouIsMp9DkYXrXnbOCT0UVkCPB3oguQlumS6AKiT6HXAs8Cq4LrkJZjH7CeCX6zx7epuxj9TbrnhzcCJ+H7sCbBKrq5ngZ+Q7cP1NzHNvezWTndT72B/S3dd8uabCcAN1L3iaWJtBrYTfkB3Qd8vcftUBu+Qbdv1DjLO7LH7Ujjs9T5i3hRnxuhpnyTOvvceX1uRBbfo85ps3QoN1F+v7us1y1I4jrKDuIbeM2rxa2n/I2ta3vdgjkivwc+rXB/twDPFe5Tw/MMcGvhPkvvyyOLDPCxhfu7o3B/Gq47C/dXel8eWWSAjy7c30OF+9Nwld5XSu/LI4tcibWbsr9hNEX3cxnSYqbo9r9SdtO9Cqp3kQF+u3B/0ctC1ZZB7H8ZHmaQtEwGWGqYAZYaZoClhhlgqWEGWGqYAZYaZoClhhlgqWEGeFimgE10r5DZRre0tMYD7KXbHuBp4Gd0P+quBpTeCSbdDLCd+DCO2/bRz0+XuP+NyQEsYyWwhfjglW6PUvd1w+5/Y3IAyxhieOeGuBb3vzE5gOObIT5ktVut0+lB7H8+TtiuKeBxul+OH7J9wAeAVwr3O4j9z7vQ7Zpm+OGF7jr4yugisjLA7doYXUCPpqMLyMoAt+vM6AJ6dFx0AVl5DdyuNwh6D1OQ0vM7iP3PI3C7JvXOu+YwwO3aEV2A4hngdj0YXYDiGeB2+UsU8iZWwyZlIccB3sSah0fgdu0BLokuQrEMcNtuo3uGVurdIBaTJzDUxwlrz2/2+tJzAMsaygP9BngJvIk1LFN064YvADYAJ1H3ofg+eRMrmUH8BRywlcCviT/yegROygHMK1t4DXBCDmBOGcNrgBNyAPPJGl4DnJADmEvm8BrghBzAPLKH1wAn5ADm0EJ4DXBCDmC8VsJrgBNyAGO1FF4DnJADGKe18BrghBzAGC2G1wAn5AD2r9XwGuCEHMB+tRxeA5yQA9if1sNrgBNyAPsREd4bKvRZWvb60nMA64sK72EV+i0te33pOYB1RYaXCn2Xlr2+9BzAeqLDS4X+S8teX3oOYB0ZwkuFzygte33pOYDlZQkvFT6ntOz1pecAlpUpvFT4rNKy15eeA1hOtvBS4fNKy15feg5gGRnDS4XPLC17fek5gOPLGl4qfG5p2etLzwEcT+bwUuGzS8teX3oO4PJlDy8VPr+07PWl5wAuTwvhpUINpWWvLz0HcOlaCS8V6igte33pOYBL01J4qVBLadnrS88BHF1r4aVCPaVlry+91yk3eK/1XHufWgwv5J9fAzympyg3eE/1XHtfWg0v5J/fQQR4ZdQHAw8m7SuLlcC1wFd7/Mzrga8AbxXoy/kduE2U++v3pZ5r78MW+j3yXkfZP+jZ53cQR+BIU5Q5zfo3cHi/pVc3Q9vhhfzza4ALKLGjzvRedV2ldvxRW6lr3vlknl8DXMg4p4pbAuqtreSpZ2R4D8g6vwa4kJUsb5K3EHsTrpab6Ce8NU6b55N1fg1wYTPAdhYfqO0M77R5rj5On/sK71zZ5tcAVzBFdwp5I7AN2Dvbts3+u02z/8+QvUHd8PZx2ryQTPNrgFVFyRVMmcKbjQFWFbVOoSNOmzMzwKqixk0sw/tuBlhVlP4aydPm+RlgVVFyIYfhXZgBVjUlVjB52nxoBlhVjbOCyfAuzgCrqqwrmIbCAKsX2VYwDYUBVm8yrWAaikEEeEXUB0vBSocuJEteK0kNM8BSwwyw1DADLDXMAEsNM8BSwwyw1DADLDXMAEsNWxVdwBynABcAHwfWA+tm/7k6qJ7XgGeA52f/+TBwJ/BkUD1SOuuAHwNbKb82tVbbClw5W7vaNYi10FFWA5cCLxMfyOW2XcBVwDGFx0b9MMDLNAPsID6ApdoOYGPREVIfDPASraA76r5FfOhKt/10R2NvCrbDAC/BUcAtxAetdrsJOLLQmKkuAzyiFXQPnUeHq692Gz5n3QIDPKIriA9V3+2HJQZOVRngEczQXR9GB6rvth9vbGU3iADXPNVbA/wLOLbiZ2T2AnAq8Gp0IZpX6dAN7pU632VywwuwFvhWdBEatlp/NdbSvTHx6Er9t2IX8GG674qVi0fgQ7gYwwvdZcRF0UVouGoF2Bs4B10QXYCGq8Zh/1S6m1c66CM4Jtl4Cr2A8yv02bovRBegYaoR4A0V+mzd6dEFaJhqBPj4Cn22zjFRFTUCfFyFPlt3QnQBGqYaAZ7kxRsL8QisKmrcORvE3T2Gsx2a3yDm1wfQpYYZYKlhBlhqmAGWGmaApYYZYKlhBlhqmAGWGmaApYYZYE2iqcL97S7c38gMsCZR6YdLwt48aoA1iUo/s26ApR6Vfk9Z2FtHDbAmzYl0vxhS0hOF+xuZAdakuRo4vHCfYQGuYRC/OTNCXa1shw7aTJ3fwvpMnxtR21B2/KFshzqbqfPj8m8ysN+EHsqOP5TtmHQnUvfH5e/tb1PebVXkh0sVTNF9z7uB7m7zDOWveee6vWLfi/KdWAtrcTumgGm6HXcDcBL+ka5pL90fixejCnByh2MG+CndKaP6cTeB4a1lKNeOrWzHSmBLhXpti7ezRpif5rSy4y+mle0wvDHtvhHmpkmt7PiLaWE7ZirUaVu87QfOHmF+mtTCjj+K7NsxBTxVoU7b4u36EeanFy6lbNc0cHJ0ERPoJeCS6CIOMMDt2hhdwIT6GvB8dBEHGOB2nRldwAT6BcELN97JhRwLy74drzOwNbjJ3QN8HtgTXchcNRZy7ALWFOwv8kZWKa9EF6Cx/A34IsnCC3VOoZ+r0GfraoxJ2FsgJszDwHnAy9GFzKdGgP9Toc/W1QjwgxX61P+7BzgHeCG4jgV5BO5HjTG5o0KfOujndNe8YS+sG0WNAD9Uoc/W1RiTO4CnK/Q76V6iW+G2mYTXvH04hfiVMtlarQUXLqUs1/bTrbBat6QZGKitxE9IlvbomGO5GB9mGL/dx4DXNi/HlcRPSpZ2xXhDuSgfJ1xe2wP8joE+EjiuD9Lddo+epOj2Kv2dks0A23vYppbbm3TvsLqYbh/VIVxO/IRFtx+MPYpLMwVsAm4EttG98iV6DPpuu4H/Ak8CfwF+BVxG9+pXV64twWq6r0+iJzSqPTc7BlKzpunu7kWHqe/2FnB+gfGTwl1OfKD6bt8vMnJSAiuAG4gPVV/tVuKeoJKqOBK4mfhw1W43440SDdQK4FLq/D5NdNsPXIUvSNAE2Miw7k4/S/kfjJZSO4ruaLyT+AAut+2iO+oeXXhspGasBX4EPEZ8IEdtj83WvLbCeEhLkulu6Yfovjs9A1hPtwRxPWVfz7MUu4Bn6F5Q8CzwCHAn3buYJUmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEnA/wDL76bzm26ebQAAAABJRU5ErkJggg==";var m=r(2949),h=r(2610),p=r(5944);function b(e){let{collapse:t,setCollapse:r}=e;const n=a.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
    `,s=a.iv`
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
  `,i=a.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,p.tZ)("div",{css:n,children:(0,p.tZ)("button",{css:s,onClick:()=>{r(!t)},children:t?(0,p.tZ)("img",{css:i,src:d,className:"icon-tabler-arrow-bar-up"}):(0,p.tZ)("img",{css:i,src:c,className:"icon-tabler-arrow-bar-down"})})})}function v(e){let{url:t}=e;const r=a.iv`
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

      
    `,n=a.iv`
      /* filter: invert(var(--inversion-percentage)); */ //UNCOMMENT WHEN DMEOS CHANGE COLOR
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,p.tZ)("button",{css:r,onClick:()=>{window.open(t,"_blank")},children:(0,p.tZ)("img",{css:n,src:u})})}function A(e){let{path:t,javaC:r,javaE:c,cssURL:d,javaHighlight:u,height:A,frame:g,tabs:w}=e;const[x,f]=(0,n.useState)(""),[j,S]=(0,n.useState)(""),[y,D]=(0,n.useState)(""),[k,Z]=(0,n.useState)(!(!r||!c)),[C,B]=(0,n.useState)(!1),[E,L]=(0,n.useState)({}),[T,M]=(0,n.useState)(!1),[J,N]=(0,n.useState)(0),[O,H]=(0,n.useState)(0),[z,V]=(0,n.useState)(25),[F,X]=(0,n.useState)(25),[G,I]=(0,n.useState)(0),[Y,R]=(0,n.useState)(!1),U=(0,n.useRef)(null),P=(0,n.useRef)(null);(0,n.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{S(e);const t=new URL(c).pathname.split("/"),r=t[t.length-1];L((e=>({...e,javaFile:r})))})),r&&fetch(r).then((e=>e.text())).then((e=>{f(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{D(e);const t=new URL(d).pathname.split("/"),r=t[t.length-1];L((e=>({...e,cssFile:r})))})),I(U.current?U.current.offsetWidth:0)}),[]);const W=()=>{M(!1)},q=e=>{if(T){const t=e.clientX-J;O+t>G/3&&(U.current.style.width=`${O+t}px`,P.current.style.right=(z-t<25?25:z-t)+"px",X(z-t<25?25:z-t))}},K=a.iv`
		display: flex;
    flex-direction: column;
		width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==g?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
    `,Q=a.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,_=a.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${A||"100%"};
    pointer-events: ${T?"none":"auto"};
  `,$=a.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${C&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ee=a.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,te=a.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==g?"none":"1px solid var(--ifm-toc-border-color)"};
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
      border: ${"hidden"==g?"1px solid var(--ifm-toc-border-color)":"none"};
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
    `,re=a.iv`
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
  `,ne=a.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,p.BX)("div",{css:K,onMouseUp:W,onMouseLeave:W,onMouseMove:q,children:["hidden"!=g?(0,p.BX)("div",{onMouseEnter:()=>{B(!0)},onMouseLeave:()=>B(!1),css:Q,children:[(0,p.tZ)("iframe",{onMouseUp:W,loading:"lazy",src:t+"&__theme__="+("dark"===(0,m.I)().colorMode?"dark":"light"),css:_,ref:U,onMouseMove:q}),(0,p.tZ)("div",{css:$,ref:P,children:(0,p.tZ)(v,{url:t})}),(0,p.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),M(!0),N(e.clientX),H(U.current?U.current.offsetWidth:0),V(F)},children:(0,p.tZ)(h.Z,{})})]}):null,(0,p.BX)(o.Z,{css:te,summary:(0,p.tZ)("summary",{onClick:()=>R(!Y),children:Y?"Hide Code":"Show Code"}),children:[r&&c?(0,p.tZ)(b,{collapse:k,setCollapse:Z}):null,d?(0,p.BX)(s.Z,{css:re,children:[(0,p.tZ)(i.Z,{value:w?w[0]:"Java",label:w?w[0]:E.javaFile,default:!0,children:(0,p.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:k?x:j})}),(0,p.tZ)(i.Z,{value:w?w[1]:"CSS",label:w?w[1]:E.cssFile,children:(0,p.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:y})})]}):(0,p.tZ)(s.Z,{css:re,children:(0,p.tZ)(i.Z,{value:w?w[0]:"Java",label:w?w[0]:E.javaFile,default:!0,children:(0,p.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:k?x:j})})})]})]})}},3273:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7294),a=r(917),s=r(8230),i=r(4387),o=r(6031);var l=r(5944);function c(e){let{type:t,location:r,top:c,children:d,code:u,suffix:m}=e;const[h,p]=(0,n.useState)("");(0,n.useEffect)((()=>{m||(m=""),p("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+r+".html"+m)}),[]);const b=a.iv`
    display: inline;

    ${c&&a.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,v=a.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)(s.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(i.Z,{css:v,label:"Java API",component:"a",href:h,icon:(0,l.tZ)(o.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("a",{href:h,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:h,target:"_blank",children:d})})})]})}},1415:(e,t,r)=>{r.d(t,{Z:()=>s});r(7294);var n=r(8397),a=r(5893);function s(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Z,{...e})})}},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","ib":"bbj-tabs-list","dy":"bbj-drawer","Vq":"bbj-dialog","JO":"bbj-icon"}')}}]);
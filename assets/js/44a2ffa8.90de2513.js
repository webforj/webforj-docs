"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8499],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var i=a(7462),n=a(7294),l=a(6010),o=a(2466),r=a(6775),s=a(1980),c=a(7392),m=a(12);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const i=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function A(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,l=d(e),[o,r]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:l}))),[s,c]=h({queryString:a,groupId:i}),[u,A]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,l]=(0,m.Nk)(a);return[i,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:i}),g=(()=>{const e=s??u;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&r(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),A(e)}),[c,A,l]),tabValues:l}}var g=a(2389);const b="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=m.indexOf(t),i=c[a].value;i!==r&&(u(t),s(i))},p=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>m.push(e),onKeyDown:p,onClick:d},o,{className:(0,l.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":r===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:i}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function k(e){const t=A(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b)},n.createElement(v,(0,i.Z)({},e,t)),n.createElement(w,(0,i.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return n.createElement(k,(0,i.Z)({key:String(t)},e))}},6957:(e,t,a)=>{a.d(t,{Z:()=>p});var i=a(7294),n=a(917),l=a(4866),o=a(5162),r=a(4673),s=a(8488);const c=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";var m=a(2949);function u(e){let{collapse:t,setCollapse:a}=e;const i=n.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,l=n.iv`
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
  `,o=n.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,n.tZ)("div",{css:i},(0,n.tZ)("button",{css:l,onClick:()=>{a(!t)}},t?(0,n.tZ)("img",{css:o,src:c,className:"icon-tabler-arrow-bar-up"}):(0,n.tZ)("img",{css:o,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function d(e){let{url:t}=e;const a=n.iv`
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

      
    `,i=n.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,n.tZ)("button",{css:a,onClick:()=>{window.open(t,"_blank")}},(0,n.tZ)("img",{css:i,src:"data:image/png;base64,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"}))}function p(e){let{path:t,javaC:a,javaE:c,cssURL:p,javaHighlight:h,height:A,frame:g,tabs:b}=e;const[f,v]=(0,i.useState)(""),[w,k]=(0,i.useState)(""),[y,N]=(0,i.useState)(""),[C,T]=(0,i.useState)(!(!a||!c)),[D,Z]=(0,i.useState)(!1),[x,B]=(0,i.useState)({});(0,i.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{k(e);const t=new URL(c).pathname.split("/"),a=t[t.length-1];B((e=>({...e,javaFile:a})))})),a&&fetch(a).then((e=>e.text())).then((e=>{v(e)})),p&&fetch(p).then((e=>e.text())).then((e=>{N(e);const t=new URL(p).pathname.split("/"),a=t[t.length-1];B((e=>({...e,cssFile:a})))}))}),[]);const F=n.iv`
		display: flex;
    flex-direction: column;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==g?"0 15px 0 15px;":"7px 15px 0 15px;"};
    box-shadow: var(--ifm-global-shadow-lw);
    `,E=n.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${A};
  `,S=n.iv`
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

  `,L=n.iv`
  width: 100%;
  `,H=n.iv`
  display: flex;
  justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${D&&"opacity: 1;"};
    
  `;return(0,n.tZ)("div",{css:F},"hidden"!=g?(0,n.tZ)("div",{onMouseEnter:()=>{Z(!0)},onMouseLeave:()=>Z(!1),css:L},(0,n.tZ)("div",{css:H},(0,n.tZ)(d,{url:t})),(0,n.tZ)("iframe",{loading:"lazy",src:t+"&theme="+("dark"===(0,m.I)().colorMode?"dark":"light"),css:E})):null,(0,n.tZ)(r.Z,{css:S,summary:(0,n.tZ)("summary",null,"Show Code")},a&&c?(0,n.tZ)(u,{collapse:C,setCollapse:T}):null,p?(0,n.tZ)(l.Z,null,(0,n.tZ)(o.Z,{value:b?b[0]:"Java",label:b?b[0]:x.javaFile,default:!0},(0,n.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h},C?f:w)),(0,n.tZ)(o.Z,{value:b?b[1]:"CSS",label:b?b[1]:x.cssFile},(0,n.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},y))):(0,n.tZ)(l.Z,null,(0,n.tZ)(o.Z,{value:b?b[0]:"Java",label:b?b[0]:x.javaFile,default:!0},(0,n.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h},C?f:w)))))}},3273:(e,t,a)=>{a.d(t,{Z:()=>u});var i=a(7294),n=a(917),l=a(8230),o=a(4387),r=a(6770);let s=null,c=null;const m={getLatestTag:async function(){return s&&c&&Date.now()-c<36e5?s:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return s=t[0].name,c=Date.now(),s}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function u(e){let{type:t,location:a,top:s,children:c,code:u,suffix:d}=e;const[p,h]=(0,i.useState)("");(0,i.useEffect)((()=>{(async()=>{try{let e=await m.getLatestTag();d||(d=""),e||(e="23.02"),h("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+a+".html"+d)}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const A=n.iv`
    display: inline;

    ${s&&n.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,g=n.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,n.tZ)(i.Fragment,null,"true"===s&&(0,n.tZ)("div",{css:A},(0,n.tZ)(l.Z,{title:"JavaDoc",arrow:!0},(0,n.tZ)(o.Z,{css:g,label:"Java API",component:"a",href:p,icon:(0,n.tZ)(r.Z,null),clickable:!0,color:"primary",target:"_blank"}))),"true"!==s&&!u&&(0,n.tZ)("div",{css:A},(0,n.tZ)("a",{href:p,target:"_blank"},c)),"true"!==s&&u&&(0,n.tZ)("div",{css:A},(0,n.tZ)("code",null,(0,n.tZ)("a",{href:p,target:"_blank"},c))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(7294),n=a(8397);function l(e){return i.createElement(i.Fragment,null,i.createElement(n.Z,e))}},6814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var i=a(7462),n=(a(7294),a(3905)),l=(a(6957),a(7796),a(3273)),o=a(2665);const r={sidebar_position:7,title:"TimeField",slug:"timefield"},s=void 0,c={unversionedId:"components/fields/time-field",id:"components/fields/time-field",title:"TimeField",description:"The TimeField class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the Field documentation page for an overview of Field properties, events, and other important information.",source:"@site/docs/components/fields/time-field.md",sourceDirName:"components/fields",slug:"/components/fields/timefield",permalink:"/docs/components/fields/timefield",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/fields/time-field.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"TimeField",slug:"timefield"},sidebar:"tutorialSidebar",previous:{title:"TextField",permalink:"/docs/components/fields/textfield"},next:{title:"Label",permalink:"/docs/components/label"}},m={},u=[{value:"Usages",id:"usages",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Maximum and Minimum",id:"maximum-and-minimum",level:3},{value:"Display",id:"display",level:3},{value:"Static Utilities",id:"static-utilities",level:3},{value:"Best Practices",id:"best-practices",level:3}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow",mdxType:"DocChip"}),(0,n.kt)(o.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"bbj-editbox",href:"https://basishub.github.io/basis-next/#/web-components/bbj-editbox",clickable:!1,iconName:"code",mdxType:"DocChip"}),(0,n.kt)(l.Z,{type:"engine",location:"org/dwcj/component/field/TimeField",top:"true",mdxType:"JavadocLink"}),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField")," class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/components/fields"},"Field documentation page"))," for an overview of Field properties, events, and other important information.")),(0,n.kt)("h3",{id:"usages"},"Usages"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField")," is best used in scenarios where capturing or manipulating time values is crucial to the user interface or application functionality. Here are some examples of when to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Event Scheduling and Calendars"),": Time fields are essential in applications that involve event scheduling, appointment booking, or managing calendars where precise time selection is required.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Time Tracking and Logging"),": Applications that involve time tracking, such as timesheet management or logging work hours, require Time fields to capture accurate time entries.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Reminders and Alarms"),": If your application involves setting reminders or alarms that require specific times, using a ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField")," simplifies the input process for users.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Meeting or Event Invitations"),": When designing applications that involve meeting or event invitations, a ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField")," enables users to specify event start times or deadlines accurately."))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField")," class provides a user interface component that allows the user to enter both a time; hours, minutes, and optionally seconds. The value of the time field is always in 24-hour format that includes leading zeros: HH:mm, regardless of the field format, which is likely to be selected based on the user's locale (or by the user agent). If the time includes seconds, the format is always HH:mm:ss"),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField")," class has four constructors:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"TimeField(String label, LocalTime time)"),": Creates a ",(0,n.kt)("inlineCode",{parentName:"li"},"TimeField")," with a given label and time."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"TimeField(String label)"),": Creates a ",(0,n.kt)("inlineCode",{parentName:"li"},"TimeField")," with a given label but with no pre-populated time."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"TimeField(LocalTime time)"),": Creates a ",(0,n.kt)("inlineCode",{parentName:"li"},"TimeField")," with a given time, but without a label."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"TimeField()"),": Creates a ",(0,n.kt)("inlineCode",{parentName:"li"},"TimeField")," without any provided information.")),(0,n.kt)("h3",{id:"maximum-and-minimum"},"Maximum and Minimum"),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"setMax()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"setMin()")," methods to specify the acceptable time range. If the value entered into the component is outside of the specified value, the component fails constraint validation. Also, if there is already a maximum or minimum set, the value given to the other method must be lower or higher respectively."),(0,n.kt)("h3",{id:"display"},"Display"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField")," will, by default, display its information within the UI element based on the locale the browser is configured to. For example, users with United States configurations will see the time displayed with A.M. and P.M. labels, whereas other locales would see the time in 24 hour format. This does not inhibit manipulation of the ",(0,n.kt)("inlineCode",{parentName:"p"},"LocalTime")," object returned by methods from the class, however."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"When displaying time, the seconds will display by default. However, if the component is given a ",(0,n.kt)("inlineCode",{parentName:"p"},"LocaleTime")," object with the seconds set to 0, the seconds are then hidden from the display.")),(0,n.kt)("h3",{id:"static-utilities"},"Static Utilities"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField")," class also provides the following static utility methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"fromTime(String timeAsString)"),": Convert a time string in HH:mm:ss format to a LocalTime object which can then be utilized with this class, or elsewhere.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"toTime(LocalTime time)"),": Convert a LocalTime to a time string in HH:mm:ss format.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"isValidTime(String timeAsString)"),": Check if the given string is a valid HH:mm:ss time. This will return a boolean value true if so, false otherwise."))),(0,n.kt)("h3",{id:"best-practices"},"Best Practices"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Provide Clear Time Format Examples"),": Clearly indicate the expected time format to users within or near the ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField"),". Use examples or placeholders to guide users in entering time correctly. Consider displaying the time format dynamically based on the user's locale if applicable.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Consider Accessibility"),": Utilize the ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField")," component with accessibility in mind, ensuring it meets accessibility standards such as providing proper labels, sufficient color contrast, and compatibility with assistive technologies.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Include Clear Time Clearing Option"),": Enable users to clear the selected time easily if needed, providing a way to reset the ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeField")," to an empty state."))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8499],{1955:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=i(5893),s=i(1151),a=(i(6957),i(7796),i(3273)),r=i(2665);const l={sidebar_position:7,title:"TimeField",slug:"timefield"},o=void 0,c={id:"components/fields/time-field",title:"TimeField",description:"The TimeField class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the Field documentation page for an overview of Field properties, events, and other important information.",source:"@site/docs/components/fields/time-field.md",sourceDirName:"components/fields",slug:"/components/fields/timefield",permalink:"/docs/components/fields/timefield",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/fields/time-field.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"TimeField",slug:"timefield"},sidebar:"documentationSidebar",previous:{title:"TextField",permalink:"/docs/components/fields/textfield"},next:{title:"Label",permalink:"/docs/components/label"}},d={},u=[{value:"Usages",id:"usages",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Maximum and Minimum",id:"maximum-and-minimum",level:3},{value:"Display",id:"display",level:3},{value:"Static Utilities",id:"static-utilities",level:3},{value:"Best Practices",id:"best-practices",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,n.jsx)(r.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"bbj-editbox",href:"https://basishub.github.io/basis-next/#/web-components/bbj-editbox",clickable:!1,iconName:"code"}),"\n",(0,n.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/field/TimeField",top:"true"}),"\n",(0,n.jsxs)(t.admonition,{type:"success",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{children:(0,n.jsx)(t.strong,{children:"Important"})}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/docs/components/fields",children:"Field documentation page"})})," for an overview of Field properties, events, and other important information."]})]}),"\n",(0,n.jsx)(t.h3,{id:"usages",children:"Usages"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," is best used in scenarios where capturing or manipulating time values is crucial to the user interface or application functionality. Here are some examples of when to use the ",(0,n.jsx)(t.code,{children:"TimeField"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Event Scheduling and Calendars"}),": Time fields are essential in applications that involve event scheduling, appointment booking, or managing calendars where precise time selection is required."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Time Tracking and Logging"}),": Applications that involve time tracking, such as timesheet management or logging work hours, require Time fields to capture accurate time entries."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Reminders and Alarms"}),": If your application involves setting reminders or alarms that require specific times, using a ",(0,n.jsx)(t.code,{children:"TimeField"})," simplifies the input process for users."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Meeting or Event Invitations"}),": When designing applications that involve meeting or event invitations, a ",(0,n.jsx)(t.code,{children:"TimeField"})," enables users to specify event start times or deadlines accurately."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," class provides a user interface component that allows the user to enter both a time; hours, minutes, and optionally seconds. The value of the time field is always in 24-hour format that includes leading zeros: HH",":mm",", regardless of the field format, which is likely to be selected based on the user's locale (or by the user agent). If the time includes seconds, the format is always HH:mm",":ss"]}),"\n",(0,n.jsx)(t.h3,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," class has four constructors:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TimeField(String label, LocalTime time)"}),": Creates a ",(0,n.jsx)(t.code,{children:"TimeField"})," with a given label and time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TimeField(String label)"}),": Creates a ",(0,n.jsx)(t.code,{children:"TimeField"})," with a given label but with no pre-populated time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TimeField(LocalTime time)"}),": Creates a ",(0,n.jsx)(t.code,{children:"TimeField"})," with a given time, but without a label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TimeField()"}),": Creates a ",(0,n.jsx)(t.code,{children:"TimeField"})," without any provided information."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"maximum-and-minimum",children:"Maximum and Minimum"}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.code,{children:"setMax()"})," and ",(0,n.jsx)(t.code,{children:"setMin()"})," methods to specify the acceptable time range. If the value entered into the component is outside of the specified value, the component fails constraint validation. Also, if there is already a maximum or minimum set, the value given to the other method must be lower or higher respectively."]}),"\n",(0,n.jsx)(t.h3,{id:"display",children:"Display"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," will, by default, display its information within the UI element based on the locale the browser is configured to. For example, users with United States configurations will see the time displayed with A.M. and P.M. labels, whereas other locales would see the time in 24 hour format. This does not inhibit manipulation of the ",(0,n.jsx)(t.code,{children:"LocalTime"})," object returned by methods from the class, however."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["When displaying time, the seconds will display by default. However, if the component is given a ",(0,n.jsx)(t.code,{children:"LocaleTime"})," object with the seconds set to 0, the seconds are then hidden from the display."]})}),"\n",(0,n.jsx)(t.h3,{id:"static-utilities",children:"Static Utilities"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," class also provides the following static utility methods:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"fromTime(String timeAsString)"}),": Convert a time string in HH:mm",":ss"," format to a LocalTime object which can then be utilized with this class, or elsewhere."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"toTime(LocalTime time)"}),": Convert a LocalTime to a time string in HH:mm",":ss"," format."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"isValidTime(String timeAsString)"}),": Check if the given string is a valid HH:mm",":ss"," time. This will return a boolean value true if so, false otherwise."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Provide Clear Time Format Examples"}),": Clearly indicate the expected time format to users within or near the ",(0,n.jsx)(t.code,{children:"TimeField"}),". Use examples or placeholders to guide users in entering time correctly. Consider displaying the time format dynamically based on the user's locale if applicable."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Consider Accessibility"}),": Utilize the ",(0,n.jsx)(t.code,{children:"TimeField"})," component with accessibility in mind, ensuring it meets accessibility standards such as providing proper labels, sufficient color contrast, and compatibility with assistive technologies."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Include Clear Time Clearing Option"}),": Enable users to clear the selected time easily if needed, providing a way to reset the ",(0,n.jsx)(t.code,{children:"TimeField"})," to an empty state."]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,i)=>{i.d(t,{Z:()=>r});i(7294);var n=i(6010);const s={tabItem:"tabItem_Ymn6"};var a=i(5893);function r(e){let{children:t,hidden:i,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,r),hidden:i,children:t})}},4866:(e,t,i)=>{i.d(t,{Z:()=>j});var n=i(7294),s=i(6010),a=i(2466),r=i(6550),l=i(469),o=i(1980),c=i(7392),d=i(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:s}}=e;return{value:t,label:i,attributes:n,default:s}}))}(i);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function m(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:i}=e;const s=(0,r.k6)(),a=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,o._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function A(e){const{defaultValue:t,queryString:i=!1,groupId:s}=e,a=h(e),[r,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=p({queryString:i,groupId:s}),[A,g]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Nk)(i);return[s,(0,n.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:s}),b=(()=>{const e=c??A;return m({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=i(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=i(5893);function v(e){let{className:t,block:i,selectedValue:n,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,i=o.indexOf(t),s=l[i].value;s!==n&&(c(t),r(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;t=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;t=o[i]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},t),children:l.map((e=>{let{value:t,label:i,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function x(e){let{lazy:t,children:i,selectedValue:s}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=A(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(x,{...e,...t})]})}function j(e){const t=(0,g.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(t))}},6957:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(7294),s=i(917),a=i(4866),r=i(5162),l=i(4673),o=i(1750);const c="data:image/png;base64,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",d=i.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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";var h=i(2949),m=i(5944);function p(e){let{collapse:t,setCollapse:i}=e;const n=s.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,a=s.iv`
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
  `,r=s.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:n,children:(0,m.tZ)("button",{css:a,onClick:()=>{i(!t)},children:t?(0,m.tZ)("img",{css:r,src:d,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:r,src:c,className:"icon-tabler-arrow-bar-down"})})})}function A(e){let{url:t}=e;const i=s.iv`
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

      
    `,n=s.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,m.tZ)("button",{css:i,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:n,src:u})})}function g(e){let{path:t,javaC:i,javaE:c,cssURL:d,javaHighlight:u,height:g,frame:b,tabs:f}=e;const[v,x]=(0,n.useState)(""),[w,j]=(0,n.useState)(""),[y,T]=(0,n.useState)(""),[D,B]=(0,n.useState)(!(!i||!c)),[Z,k]=(0,n.useState)(!1),[F,C]=(0,n.useState)({});(0,n.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const t=new URL(c).pathname.split("/"),i=t[t.length-1];C((e=>({...e,javaFile:i})))})),i&&fetch(i).then((e=>e.text())).then((e=>{x(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{T(e);const t=new URL(d).pathname.split("/"),i=t[t.length-1];C((e=>({...e,cssFile:i})))}))}),[]);const S=s.iv`
		display: flex;
    flex-direction: column;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==b?"0 15px 0 15px;":"7px 15px 0 15px;"};
    box-shadow: var(--ifm-global-shadow-lw);
    `,E=s.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${g};
  `,L=s.iv`
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

  `,H=s.iv`
  width: 100%;
  `,M=s.iv`
  display: flex;
  justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${Z&&"opacity: 1;"};
    
  `;return(0,m.BX)("div",{css:S,children:["hidden"!=b?(0,m.BX)("div",{onMouseEnter:()=>{k(!0)},onMouseLeave:()=>k(!1),css:H,children:[(0,m.tZ)("div",{css:M,children:(0,m.tZ)(A,{url:t})}),(0,m.tZ)("iframe",{loading:"lazy",src:t+"&theme="+("dark"===(0,h.I)().colorMode?"dark":"light"),css:E})]}):null,(0,m.BX)(l.Z,{css:L,summary:(0,m.tZ)("summary",{children:"Show Code"}),children:[i&&c?(0,m.tZ)(p,{collapse:D,setCollapse:B}):null,d?(0,m.BX)(a.Z,{children:[(0,m.tZ)(r.Z,{value:f?f[0]:"Java",label:f?f[0]:F.javaFile,default:!0,children:(0,m.tZ)(o.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?v:w})}),(0,m.tZ)(r.Z,{value:f?f[1]:"CSS",label:f?f[1]:F.cssFile,children:(0,m.tZ)(o.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:y})})]}):(0,m.tZ)(a.Z,{children:(0,m.tZ)(r.Z,{value:f?f[0]:"Java",label:f?f[0]:F.javaFile,default:!0,children:(0,m.tZ)(o.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?v:w})})})]})]})}},3273:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(7294),s=i(917),a=i(8230),r=i(4387),l=i(6770);let o=null,c=null;const d={getLatestTag:async function(){return o&&c&&Date.now()-c<36e5?o:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return o=t[0].name,c=Date.now(),o}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};var u=i(5944);function h(e){let{type:t,location:i,top:o,children:c,code:h,suffix:m}=e;const[p,A]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{try{let e=await d.getLatestTag();m||(m=""),e||(e="23.04"),A("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/"+e+"/"+i+".html"+m)}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const g=s.iv`
    display: inline;

    ${o&&s.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=s.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,u.BX)(u.HY,{children:["true"===o&&(0,u.tZ)("div",{css:g,children:(0,u.tZ)(a.Z,{title:"JavaDoc",arrow:!0,children:(0,u.tZ)(r.Z,{css:b,label:"Java API",component:"a",href:p,icon:(0,u.tZ)(l.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==o&&!h&&(0,u.tZ)("div",{css:g,children:(0,u.tZ)("a",{href:p,target:"_blank",children:c})}),"true"!==o&&h&&(0,u.tZ)("div",{css:g,children:(0,u.tZ)("code",{children:(0,u.tZ)("a",{href:p,target:"_blank",children:c})})})]})}},1415:(e,t,i)=>{i.d(t,{Z:()=>a});i(7294);var n=i(8397),s=i(5893);function a(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.Z,{...e})})}}}]);
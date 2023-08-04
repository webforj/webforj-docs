"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9666],{3273:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),o=n(917),s=n(8745),i=n(8385),r=n(6770);let c=null,l=null;const u={getLatestTag:async function(){return c&&l&&Date.now()-l<36e5?c:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return c=t[0].name,l=Date.now(),c}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function d(e){let{type:t,location:n,top:c,children:l,code:d,suffix:p}=e;const[v,m]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{let e=await u.getLatestTag();p||(p=""),e||(e="23.02"),m("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html"+p)}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const h=o.iv`
    display: inline;

    ${c&&o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,g=o.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,o.tZ)(a.Fragment,null,"true"===c&&(0,o.tZ)("div",{css:h},(0,o.tZ)(s.Z,{title:"JavaDoc",arrow:!0},(0,o.tZ)(i.Z,{css:g,label:"Java API",component:"a",href:v,icon:(0,o.tZ)(r.Z,null),clickable:!0,color:"primary",target:"_blank"}))),"true"!==c&&!d&&(0,o.tZ)("div",{css:h},(0,o.tZ)("a",{href:v,target:"_blank"},l)),"true"!==c&&d&&(0,o.tZ)("div",{css:h},(0,o.tZ)("code",null,(0,o.tZ)("a",{href:v,target:"_blank"},l))))}},4622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),s=n(3273);const i={sidebar_position:0,title:"FocusEvent",sidebar_class_name:"sidebar--item__hidden",slug:"FocusEvent"},r=void 0,c={unversionedId:"components/events/focus-event",id:"components/events/focus-event",title:"FocusEvent",description:"An event that is triggered when an element gains focus, opposite of a blur event. It occurs when the user interacts with an element, typically by clicking inside an input field or navigating to it using the keyboard's tab key, causing the element to become active and ready to receive user input.",source:"@site/docs/components/events/focus-event.md",sourceDirName:"components/events",slug:"/components/events/FocusEvent",permalink:"/docs/components/events/FocusEvent",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/events/focus-event.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"FocusEvent",sidebar_class_name:"sidebar--item__hidden",slug:"FocusEvent"},sidebar:"tutorialSidebar",previous:{title:"Event",permalink:"/docs/components/events/event"},next:{title:"KeypressEvent",permalink:"/docs/components/events/KeypressEvent"}},l={},u=[{value:"Event Payload",id:"event-payload",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{type:"engine",location:"org/dwcj/component/event/FocusEvent",top:"true",mdxType:"JavadocLink"}),(0,o.kt)("p",null,"An event that is triggered when an element gains focus, opposite of a blur event. It occurs when the user interacts with an element, typically by clicking inside an input field or navigating to it using the keyboard's tab key, causing the element to become active and ready to receive user input."),(0,o.kt)("h2",{id:"event-payload"},"Event Payload"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Events"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"getText()")),(0,o.kt)("td",{parentName:"tr",align:null},"Gets the text of the component.")))),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./event"},"Event")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./BlurEvent"},"Blur Event"))))}p.isMDXComponent=!0}}]);
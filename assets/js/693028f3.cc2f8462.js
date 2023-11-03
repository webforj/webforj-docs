"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3779],{3273:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),o=n(917),s=n(8230),i=n(4387),r=n(6770);let l=null,c=null;const u={getLatestTag:async function(){return l&&c&&Date.now()-c<36e5?l:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return l=t[0].name,c=Date.now(),l}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function d(e){let{type:t,location:n,top:l,children:c,code:d,suffix:m}=e;const[p,h]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{let e=await u.getLatestTag();m||(m=""),e||(e="23.02"),h("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html"+m)}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const v=o.iv`
    display: inline;

    ${l&&o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,f=o.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,o.tZ)(a.Fragment,null,"true"===l&&(0,o.tZ)("div",{css:v},(0,o.tZ)(s.Z,{title:"JavaDoc",arrow:!0},(0,o.tZ)(i.Z,{css:f,label:"Java API",component:"a",href:p,icon:(0,o.tZ)(r.Z,null),clickable:!0,color:"primary",target:"_blank"}))),"true"!==l&&!d&&(0,o.tZ)("div",{css:v},(0,o.tZ)("a",{href:p,target:"_blank"},c)),"true"!==l&&d&&(0,o.tZ)("div",{css:v},(0,o.tZ)("code",null,(0,o.tZ)("a",{href:p,target:"_blank"},c))))}},5061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),s=n(3273);const i={sidebar_position:0,title:"BlurEvent",sidebar_class_name:"sidebar--item__hidden",slug:"BlurEvent"},r=void 0,l={unversionedId:"components/events/blur-event",id:"components/events/blur-event",title:"BlurEvent",description:"An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page. This event is useful when you want to detect when a user moves away from a particular element on a web page, such as an input field or a button. This class also inherits methods from the base Event class.",source:"@site/docs/components/events/blur-event.md",sourceDirName:"components/events",slug:"/components/events/BlurEvent",permalink:"/docs/components/events/BlurEvent",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/events/blur-event.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"BlurEvent",sidebar_class_name:"sidebar--item__hidden",slug:"BlurEvent"},sidebar:"tutorialSidebar",previous:{title:"Event",permalink:"/docs/components/events/event"},next:{title:"ButtonClickEvent",permalink:"/docs/components/events/ButtonClickEvent"}},c={},u=[{value:"Event Payload",id:"event-payload",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{type:"engine",location:"org/dwcj/component/event/BlurEvent",top:"true",mdxType:"JavadocLink"}),(0,o.kt)("p",null,"An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page. This event is useful when you want to detect when a user moves away from a particular element on a web page, such as an input field or a button. This class also inherits methods from the base ",(0,o.kt)("inlineCode",{parentName:"p"},"Event")," class."),(0,o.kt)("h2",{id:"event-payload"},"Event Payload"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"getText()")),(0,o.kt)("td",{parentName:"tr",align:null},"Gets the text of the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"isClientValidationValid()")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the result of the client validation function, if any, when the component loses focus.")))),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./event"},"Event")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./FocusEvent"},"Focus Event"))))}m.isMDXComponent=!0}}]);
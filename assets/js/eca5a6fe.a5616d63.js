"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1385],{3273:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),s=n(917),i=n(8230),o=n(4387),l=n(6770);let r=null,c=null;const d={getLatestTag:async function(){return r&&c&&Date.now()-c<36e5?r:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return r=t[0].name,c=Date.now(),r}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function m(e){let{type:t,location:n,top:r,children:c,code:m,suffix:p}=e;const[u,v]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{let e=await d.getLatestTag();p||(p=""),e||(e="23.02"),v("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html"+p)}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const h=s.iv`
    display: inline;

    ${r&&s.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,k=s.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,s.tZ)(a.Fragment,null,"true"===r&&(0,s.tZ)("div",{css:h},(0,s.tZ)(i.Z,{title:"JavaDoc",arrow:!0},(0,s.tZ)(o.Z,{css:k,label:"Java API",component:"a",href:u,icon:(0,s.tZ)(l.Z,null),clickable:!0,color:"primary",target:"_blank"}))),"true"!==r&&!m&&(0,s.tZ)("div",{css:h},(0,s.tZ)("a",{href:u,target:"_blank"},c)),"true"!==r&&m&&(0,s.tZ)("div",{css:h},(0,s.tZ)("code",null,(0,s.tZ)("a",{href:u,target:"_blank"},c))))}},9901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7462),s=(n(7294),n(3905)),i=n(3273);const o={sidebar_position:0,title:"ListSelectEvent",sidebar_class_name:"sidebar--item__hidden",slug:"ListSelectEvent"},l=void 0,r={unversionedId:"components/events/list-select-event",id:"components/events/list-select-event",title:"ListSelectEvent",description:"This event is triggered when the user selects an item from a List-based component. It provides essential information about the selected item and allows developers to implement custom actions or responses when an item is chosen.",source:"@site/docs/components/events/list-select-event.md",sourceDirName:"components/events",slug:"/components/events/ListSelectEvent",permalink:"/docs/components/events/ListSelectEvent",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/events/list-select-event.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"ListSelectEvent",sidebar_class_name:"sidebar--item__hidden",slug:"ListSelectEvent"},sidebar:"tutorialSidebar",previous:{title:"ListOpenEvent",permalink:"/docs/components/events/ListOpenEvent"},next:{title:"ModifyEvent",permalink:"/docs/components/events/ModifyEvent"}},c={},d=[{value:"Event Payload",id:"event-payload",level:2},{value:"See Also",id:"see-also",level:2},{value:"Events",id:"events",level:3},{value:"Components",id:"components",level:3}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,{type:"engine",location:"org/dwcj/component/event/ListSelectEvent",top:"true",mdxType:"JavadocLink"}),(0,s.kt)("p",null,"This event is triggered when the user selects an item from a List-based component. It provides essential information about the selected item and allows developers to implement custom actions or responses when an item is chosen."),(0,s.kt)("h2",{id:"event-payload"},"Event Payload"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Method"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"getSelectedIndex()")),(0,s.kt)("td",{parentName:"tr",align:null},"Returns the selected index, or -1 if no item is selected.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"getSelectedItem()")),(0,s.kt)("td",{parentName:"tr",align:null},"Returns the selected item, or null if no item is selected.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"getSelectedIndices()")),(0,s.kt)("td",{parentName:"tr",align:null},"Returns a list of selected indices, or an empty list if no item is selected. If the list doesn't support multiple selection, the list will contain only one item.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"getSelectedItems()")),(0,s.kt)("td",{parentName:"tr",align:null},"Returns a list of selected items. If the list doesn't support multiple selection, the list will contain only one item.")))),(0,s.kt)("h2",{id:"see-also"},"See Also"),(0,s.kt)("h3",{id:"events"},"Events"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./event"},"Event")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./ListOpenEvent"},"ListOpenEvent")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./ListCloseEvent"},"ListCloseEvent"))),(0,s.kt)("h3",{id:"components"},"Components"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../list-components/ChoiceBox"},"ChoiceBox")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../list-components/ComboBox"},"ComboBox")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../list-components/ListBox"},"ListBox"))))}p.isMDXComponent=!0}}]);
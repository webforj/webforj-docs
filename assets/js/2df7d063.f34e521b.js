"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7100],{3343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var s=n(5893),r=n(1151),i=n(3273);const c={sidebar_position:0,title:"KeypressEvent",sidebar_class_name:"sidebar--item__hidden",slug:"KeypressEvent"},o=void 0,d={id:"components/events/keypress-event",title:"KeypressEvent",description:"A Keypress event occurs when a user presses a specific key on the keyboard while an element, such as an input field or a specific section of a web page, has focus. This event is commonly used to capture and respond to user keyboard interactions.",source:"@site/docs/components/events/keypress-event.md",sourceDirName:"components/events",slug:"/components/events/KeypressEvent",permalink:"/docs/components/events/KeypressEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/events/keypress-event.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"KeypressEvent",sidebar_class_name:"sidebar--item__hidden",slug:"KeypressEvent"},sidebar:"documentationSidebar",previous:{title:"FocusEvent",permalink:"/docs/components/events/FocusEvent"},next:{title:"ListCloseEvent",permalink:"/docs/components/events/ListCloseEvent"}},a={},l=[{value:"Event Payload",id:"event-payload",level:2},{value:"See Also",id:"see-also",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{type:"engine",location:"org/dwcj/component/event/KeypressEvent",top:"true"}),"\n",(0,s.jsx)(t.p,{children:"A Keypress event occurs when a user presses a specific key on the keyboard while an element, such as an input field or a specific section of a web page, has focus. This event is commonly used to capture and respond to user keyboard interactions."}),"\n",(0,s.jsx)(t.p,{children:"When a Keypress event is triggered, the key that was pressed can be determine using the key code, and a specific action or actions can be performed based on the user's input. For example, it can be used to validate user input in form fields, implement keyboard shortcuts, or trigger certain actions based on specific key combinations."}),"\n",(0,s.jsxs)(t.p,{children:["To see a list of keys that trigger this event, ",(0,s.jsx)(i.Z,{type:"engine",location:"org/dwcj/component/event/KeypressEvent.Key",children:"see the Javadoc."})," This class also inherits methods from the ",(0,s.jsxs)(t.a,{href:"./event",children:["base ",(0,s.jsx)(t.code,{children:"Event"})," class"]})]}),"\n",(0,s.jsx)(t.h2,{id:"event-payload",children:"Event Payload"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Method"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"getCode()"})}),(0,s.jsx)(t.td,{children:"Returns the integer value of the key code."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"getName()"})}),(0,s.jsx)(t.td,{children:"Returns the name of the key code."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"fromCode(int value)"})}),(0,s.jsx)(t.td,{children:"Returns the key code that matches the given integer value."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"fromName(String name)"})}),(0,s.jsx)(t.td,{children:"Returns the key code that matches the given name."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"getKeyCode()"})}),(0,s.jsx)(t.td,{children:"Returns the key that was pressed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"isAltKey()"})}),(0,s.jsx)(t.td,{children:"Returns whether or not the alt key was pressed when the event happened."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"isCmdKey()"})}),(0,s.jsx)(t.td,{children:"Returns whether or not the command key was pressed when the event happened."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"isControlKey()"})}),(0,s.jsx)(t.td,{children:"Returns whether or not the control key was pressed when the event happened."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"isShiftKey()"})}),(0,s.jsx)(t.td,{children:"Returns whether or not the shift key was pressed when the event happened."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See Also"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./event",children:"Event"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3273:(e,t,n)=>{n.d(t,{Z:()=>p});var s=n(7294),r=n(917),i=n(8230),c=n(4387),o=n(6770);let d=null,a=null;const l={getLatestTag:async function(){return d&&a&&Date.now()-a<36e5?d:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return d=t[0].name,a=Date.now(),d}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};var h=n(5944);function p(e){let{type:t,location:n,top:d,children:a,code:p,suffix:u}=e;const[v,x]=(0,s.useState)("");(0,s.useEffect)((()=>{(async()=>{try{let e=await l.getLatestTag();u||(u=""),e||(e="23.04"),x("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html"+u)}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const y=r.iv`
    display: inline;

    ${d&&r.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,j=r.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,h.BX)(h.HY,{children:["true"===d&&(0,h.tZ)("div",{css:y,children:(0,h.tZ)(i.Z,{title:"JavaDoc",arrow:!0,children:(0,h.tZ)(c.Z,{css:j,label:"Java API",component:"a",href:v,icon:(0,h.tZ)(o.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==d&&!p&&(0,h.tZ)("div",{css:y,children:(0,h.tZ)("a",{href:v,target:"_blank",children:a})}),"true"!==d&&p&&(0,h.tZ)("div",{css:y,children:(0,h.tZ)("code",{children:(0,h.tZ)("a",{href:v,target:"_blank",children:a})})})]})}}}]);
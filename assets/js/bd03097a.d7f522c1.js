"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7587],{5743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(4848),o=t(8453),s=t(3235);const a={sidebar_position:4,title:"Event Options"},r=void 0,l={id:"building-ui/web-components/event-options",title:"Event Options",description:"ElementEventOptions is a versatile webforJ tool designed to encapsulate and manage configuration settings for Element events within webforJ applications. As a container for various options, it allows developers to precisely dictate how events associated with elements should be processed.",source:"@site/docs/building-ui/web-components/event-options.md",sourceDirName:"building-ui/web-components",slug:"/building-ui/web-components/event-options",permalink:"/docs/building-ui/web-components/event-options",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/building-ui/web-components/event-options.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Event Options"},sidebar:"documentationSidebar",previous:{title:"HTML Element Components",permalink:"/docs/building-ui/web-components/html-elements"},next:{title:"Events",permalink:"/docs/building-ui/events"}},d={},c=[{value:"Event data",id:"event-data",level:2},{value:"Executing JavaScript",id:"executing-javascript",level:2},{value:"Usage",id:"usage",level:3},{value:"Filtering events",id:"filtering-events",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Debouncing and throttling",id:"debouncing-and-throttling",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Usage",id:"usage-2",level:3},{value:"Example",id:"example",level:3},{value:"Merging event options",id:"merging-event-options",level:2},{value:"Annotations",id:"annotations",level:2},{value:"Purpose",id:"purpose-1",level:3},{value:"Example",id:"example-1",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{type:"foundation",location:"com/webforj/component/element/event/ElementEventOptions",top:"true"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ElementEventOptions"})," is a versatile webforJ tool designed to encapsulate and manage configuration settings for ",(0,i.jsx)(n.code,{children:"Element"})," events within webforJ applications. As a container for various options, it allows developers to precisely dictate how events associated with elements should be processed."]}),"\n",(0,i.jsx)(n.h2,{id:"event-data",children:"Event data"}),"\n",(0,i.jsxs)(n.p,{children:["Event data is a key feature of ",(0,i.jsx)(n.code,{children:"ElementEventOptions"}),", allowing developers to attach specific information to the event options. This functionality facilitates the passing of custom data from the client to the server when an event is triggered. This capability is instrumental in conveying additional context or parameters associated with the event, and allows for information to be accessed and utilized without additional trips to the client needing to be made."]}),"\n",(0,i.jsx)(n.p,{children:"For instance, consider a scenario where you have a button click event, and you want to pass the current user's username along with the event. Instead on querying a user's username from the client each time, send this information along with the event as data."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information, see the ",(0,i.jsx)(n.a,{href:"../../building-ui/events",children:"events"})," and ",(0,i.jsx)(n.a,{href:"/docs/architecture/",children:"architecture"})," pages."]})}),"\n",(0,i.jsxs)(n.p,{children:["To add data to the event options, you can use the ",(0,i.jsx)(n.code,{children:"addData()"})," method."]}),"\n",(0,i.jsx)(n.h2,{id:"executing-javascript",children:"Executing JavaScript"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ElementEventOptions"})," class allows developers to specify JavaScript code to be evaluated on the client-side before the associated event is fired. This feature enables clients to prepare event data or trigger additional events as needed. This is helpful in many cases, for instance when wanting to validate form data on the client side before submitting it via a form submission event."]}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["To set the event code, use the ",(0,i.jsx)(n.code,{children:"setCode()"})," method."]}),"\n",(0,i.jsx)(n.h2,{id:"filtering-events",children:"Filtering events"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ElementEventOptions"})," includes a feature for setting a filter expression to be evaluated on the client before the event is fired. This filter expression enables the client to determine whether the event should proceed or be halted based on certain conditions. Consider an input field where you want to trigger an event only if the entered text meets specific criteria, such as a minimum length."]}),"\n",(0,i.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["To set the event filter, use the ",(0,i.jsx)(n.code,{children:"setFilter()"})," method."]}),"\n",(0,i.jsx)(n.h2,{id:"debouncing-and-throttling",children:"Debouncing and throttling"}),"\n",(0,i.jsx)(n.h3,{id:"purpose",children:"Purpose"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ElementEventOptions"})," provides mechanisms for debouncing and throttling events. These features are useful for controlling the frequency of event listeners, ensuring that they are triggered only under certain conditions."]}),"\n",(0,i.jsx)(n.h3,{id:"usage-2",children:"Usage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To set debounce, use the ",(0,i.jsx)(n.code,{children:"setDebounce"})," method."]}),"\n",(0,i.jsxs)(n.li,{children:["To set throttle, use the ",(0,i.jsx)(n.code,{children:"setThrottle"})," method."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"In scenarios where you want to handle rapid user input, such as search input fields, you can use debounce to delay execution until the user has finished typing."}),"\n",(0,i.jsx)(n.h2,{id:"merging-event-options",children:"Merging event options"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ElementEventOptions"})," class supports merging with other instances, allowing developers to aggregate various options. This feature is helpful when combining settings from different sources."]}),"\n",(0,i.jsx)(n.h2,{id:"annotations",children:"Annotations"}),"\n",(0,i.jsx)(n.h3,{id:"purpose-1",children:"Purpose"}),"\n",(0,i.jsxs)(n.p,{children:["For convenience, ",(0,i.jsx)(n.code,{children:"ElementEventOptions"})," can be configured using annotations. These annotations provide a more concise and expressive way to set event options."]}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Consider the following example annotation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@EventOptions(data = {@EventData(key = "value", exp = "component.value")},\r\n      debounce = @DebounceSettings(value = 200))\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7785:(e,n,t)=>{var i=t(4994);n.A=void 0;var o=i(t(2032)),s=t(4848),a=(0,o.default)((0,s.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");n.A=a},3235:(e,n,t)=>{t.d(n,{A:()=>d});var i=t(6540),o=t(7437),s=t(276),a=t(526),r=t(7785),l=t(2445);function d(e){let{type:n,location:t,top:d,children:c,code:h,suffix:u}=e;const[p,v]=(0,i.useState)(""),[m,g]=(0,i.useState)(!1);(0,i.useEffect)((()=>{document.querySelectorAll(".doc-chip").length>0?g(!0):g(!1)}),[]),(0,i.useEffect)((()=>{u||(u=""),v("https://javadoc.io/doc/com.webforj/webforj-"+n+"/latest/"+t+".html"+u)}),[]);const f=o.AH`
    ${e=>e&&o.AH`
    margin-bottom: 1em;
    margin-left: 0.5em;
    float: right;
    @media (max-width: 500px){
    margin-bottom: 1em;
    float: none;
    margin-left: -.25em;
    }
    `}
  `,x=o.AH`
    width: 100%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row-reverse;
  `,b=o.AH`
    background-color: var(--javadoclink-bg);
    color: var(--javadoclink-color);
    padding: 0 0 0 5px;
    :hover {
      background-color: var(--javadoclink-hover-bg);
      color: var(--javadoclink-hover-color);
    } 
  `;return(0,l.FD)(l.FK,{children:["true"===d&&m&&(0,l.Y)(s.A,{title:"JavaDoc",arrow:!0,css:f,children:(0,l.Y)(a.A,{css:b,label:"Java API",component:"a",href:p,icon:(0,l.Y)(r.A,{}),clickable:!0,color:"primary",target:"_blank"})}),"true"===d&&!m&&(0,l.Y)("div",{css:x,children:(0,l.Y)(s.A,{title:"JavaDoc",arrow:!0,children:(0,l.Y)(a.A,{css:b,label:"Java API",component:"a",href:p,icon:(0,l.Y)(r.A,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==d&&!h&&(0,l.Y)("a",{href:p,target:"_blank",children:c}),"true"!==d&&h&&(0,l.Y)("code",{children:(0,l.Y)("a",{href:p,target:"_blank",children:c})})]})}}}]);
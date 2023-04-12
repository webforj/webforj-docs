"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=i,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4,displayed_sidebar:"documentationSidebar"},a="Architecture",s={unversionedId:"getting_started/architecture",id:"getting_started/architecture",title:"Architecture",description:"The following section discussed various performance qualities and best practices for the DWCJ, as well as implementation details for the framework.",source:"@site/docs/getting_started/architecture.md",sourceDirName:"getting_started",slug:"/getting_started/architecture",permalink:"/docs/getting_started/architecture",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/getting_started/architecture.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar",previous:{title:"Configuration",permalink:"/docs/getting_started/configuration"},next:{title:"DWCJ Controls",permalink:"/docs/category/dwcj-controls"}},c={},l=[{value:"1. Server to Client",id:"1-server-to-client",level:3},{value:"2. Client to Server",id:"2-client-to-server",level:3},{value:"3. Server to Client to Server (Round Trip)",id:"3-server-to-client-to-server-round-trip",level:3},{value:"Improve Performance",id:"improve-performance",level:3},{value:"Caching",id:"caching",level:3},{value:"Loading Time",id:"loading-time",level:3}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"The following section discussed various performance qualities and best practices for the DWCJ, as well as implementation details for the framework."),(0,i.kt)("p",null,"When creating an application in the DWCJ, the client and the server work together to manipulate data between client and server can be broken down into the broad categories:"),(0,i.kt)("h3",{id:"1-server-to-client"},"1. Server to Client"),(0,i.kt)("p",null,"DWCJ methods such as ",(0,i.kt)("inlineCode",{parentName:"p"},"setText()")," are included in this category. The DWCJ application running on the server sends data to the client without waiting for a response. The DWCJ automatically optimizes batches of operations in this category to improve performance.   "),(0,i.kt)("h3",{id:"2-client-to-server"},"2. Client to Server"),(0,i.kt)("p",null,"This category covers event traffic, such as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Button.onClick()")," method. For the most part, the client sends events to the server without waiting for any response. The event object typically contains additional parameters relating to the event, such as the hashcode. Because this information is delivered to the server as part of the act of delivering the event, it is immediately available to the program as soon as the event is received. "),(0,i.kt)("h3",{id:"3-server-to-client-to-server-round-trip"},"3. Server to Client to Server (Round Trip)"),(0,i.kt)("p",null,"Round trips are performed when the application queries the client for some dynamic information that cannot be cached on the server. Methods such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Label.getText()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Checkbox.isChecked()")," fall into this category. When a DWCJ application executes a line such as ",(0,i.kt)("inlineCode",{parentName:"p"},"String title = myLabe.getText()"),", it comes to a complete standstill while the server sends that request to the client, then waits for the client to send the response back."),(0,i.kt)("p",null,"If the application sends several messages to the client that don't require a response (category 1), followed by a single message that requires a round trip (category 3), the application must wait for the client to process all pending messages, then respond to the final message that requires a response. In some cases, this can add a delay. If that round trip had not been introduced, the client would have been able to continue working through processing those backlogged messages while the application running on the server moved on to new work. "),(0,i.kt)("h3",{id:"improve-performance"},"Improve Performance"),(0,i.kt)("p",null,"It is possible to significantly improve application responsiveness by avoiding the third category's round trips as much as possible. For example, changing the ComboBox's onSelect functionality from this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private void comboBoxSelect(ComboBoxSelectEvent ev){\n    ComboBox cb = ev.getControl();\n    int selected = cb.getSelectedIndex(); // Goes to the client\n    //Do something here\n}\n")),(0,i.kt)("p",null,"to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private void comboBoxSelect(ComboBoxSelectEvent ev){\n    int selected = ev.getSelectedIndex(); //Gets value from the event\n    //Do something here\n}\n")),(0,i.kt)("p",null,"In the first snippet, ",(0,i.kt)("inlineCode",{parentName:"p"},"ComboBox.getSelectedIndex()")," being performed on the control forces a round trip back to the client, introducing a delay. In the second version, using the event's ",(0,i.kt)("inlineCode",{parentName:"p"},"ComboBoxSelectEvent.getSelectedIndex()")," method retrieves the value that was delivered to the server as part of the original event."),(0,i.kt)("h3",{id:"caching"},"Caching"),(0,i.kt)("p",null,"The DWCJ further optimizes performance by utilizing caching. In general, two types of data exist in this context: data that the user can directly change, and data that cannot be changed by the user. In the first case, when retrieving the information that users will directly interact with, it is necessary to query the server for this information. "),(0,i.kt)("p",null,"However, information which cannot be changed by the user can be cached to avoid additional performance hits. This ensures that a round trip does not need to be made unnecessarily, providing a more efficient user experience. The DWCJ optimizes applications in this manner to ensure optimal performance. "),(0,i.kt)("h3",{id:"loading-time"},"Loading Time"),(0,i.kt)("p",null,"When the user launches a DWCJ app, it loads\njust a tiny chunk (only about 2.5kB gzip) of JavaScript to bootstrap the session.\nAfter that, it dynamically downloads individual messages, or chunks of\nJavaScript, on-demand as the application uses the corresponding\nfunctionality. For example, the server only sends the client the JavaScript\nnecessary to build a DWCJ ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," once \u2014 when the application creates its\nfirst ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," component. This results in measurable improvements to the initial\nload time, which results in a better user experience."))}p.isMDXComponent=!0}}]);
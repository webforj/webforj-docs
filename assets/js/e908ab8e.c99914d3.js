"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7737],{8360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>A,toc:()=>r});var i=n(4848),o=n(8453);n(9856),n(2468);const s={sidebar_position:0,title:"Lists"},c=void 0,A={id:"components/lists/lists",title:"Lists",description:"There are three types of lists for use within your applications: ListBox, ChoiceBox and ComboBox. These three components all display a list of key value items, and support methods to add, remove, select and manage the items within the list.",source:"@site/docs/components/lists/lists.md",sourceDirName:"components/lists",slug:"/components/lists/",permalink:"/docs/components/lists/",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/lists/lists.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Lists"},sidebar:"documentationSidebar",previous:{title:"TimeField",permalink:"/docs/components/fields/timefield"},next:{title:"ChoiceBox",permalink:"/docs/components/lists/choicebox"}},a={},r=[{value:"Using <code>ListItem</code>",id:"using-listitem",level:2},{value:"Managing <code>ListItem</code> Objects with the API",id:"managing-listitem-objects-with-the-api",level:2},{value:"Shared List Properties",id:"shared-list-properties",level:2},{value:"Label",id:"label",level:3},{value:"Topics",id:"topics",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{DocCardList:n,JavadocLink:s}=t;return n||h("DocCardList",!0),s||h("JavadocLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList"}),"\n",(0,i.jsxs)(t.p,{children:["There are three types of lists for use within your applications: ",(0,i.jsx)(t.a,{href:"./lists/listbox",children:(0,i.jsx)(t.code,{children:"ListBox"})}),", ",(0,i.jsx)(t.a,{href:"./lists/choicebox",children:(0,i.jsx)(t.code,{children:"ChoiceBox"})})," and ",(0,i.jsx)(t.a,{href:"./lists/combobox",children:(0,i.jsx)(t.code,{children:"ComboBox"})}),". These three components all display a list of key value items, and support methods to add, remove, select and manage the items within the list."]}),"\n",(0,i.jsx)(t.p,{children:"This section will list the commonalities within each of the aforementioned components, with the specific behaviors belonging to each outlined in their own sections."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"This section describes common functionality amongst all of the list components, and is not itself a class that can be instantiated and used."})}),"\n",(0,i.jsxs)(t.h2,{id:"using-listitem",children:["Using ",(0,i.jsx)(t.code,{children:"ListItem"})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/ListItem",code:"true",children:"ListItem"})," class represents individual items within a list. Each ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/ListItem",code:"true",children:"ListItem"})," is associated with a key and a display text. Here are the key points regarding the ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/ListItem",code:"true",children:"ListItem"})," class:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/ListItem",code:"true",children:"ListItem"})," encapsulates a unique key ",(0,i.jsx)(t.code,{children:"Object"}),", and a text ",(0,i.jsx)(t.code,{children:"String"})," for display within the component. List components are composed of ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/ListItem",code:"true",children:"ListItem"})," objects."]}),"\n",(0,i.jsxs)(t.li,{children:["You can construct a ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/ListItem",code:"true",children:"ListItem"})," by providing a key and text, or simply by specifying the text, where a random key is generated."]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"managing-listitem-objects-with-the-api",children:["Managing ",(0,i.jsx)(t.code,{children:"ListItem"})," Objects with the API"]}),"\n",(0,i.jsx)(t.p,{children:"The various List classes offer various methods for managing the list of items and maintaining a consistent state between the list and the client."}),"\n",(0,i.jsx)(t.p,{children:"By using these methods provided in the classes, you can effectively manage the items within the list component. The API allows you to interact with and manipulate the list to meet your application's requirements."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Adding an Item"}),":"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["To add an item to the list, you can use the ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#add(org.dwcj.component.list.ListItem)",code:"true",children:"add(ListItem item)"})," method."]}),"\n",(0,i.jsxs)(t.li,{children:["You can also add an item by specifying the key and text using the ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#add(java.lang.Object,java.lang.String)",code:"true",children:"add(Object key, String text)"})," or ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#add(java.lang.String)",code:"true",children:"add(String text)"})," method."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Inserting an Item at a Specific Index:"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["To insert an item at a specific index, use the ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#insert(int,org.dwcj.component.list.ListItem)",code:"true",children:"insert(int index, ListItem item)"})," method."]}),"\n",(0,i.jsxs)(t.li,{children:["You can insert an item with key and text using the ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#insert(int,java.lang.Object,java.lang.String)",code:"true",children:"insert(int index, Object key, String text)"})," or ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#insert(int,java.lang.String)",code:"true",children:"insert(int index, String text)"})," method."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Inserting Multiple Items:"})," You can insert multiple items at a specified index using the ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"l#insert(int,java.util.List)",code:"true",children:"insert(int index, List< ListItem > items)"})," method."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["To optimize performance in applications, instead of triggering a server-to-client message each time you use the add method, it's more efficient to compile a list of ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/ListItem",code:"true",children:"ListItem"})," objects first. Once you have this list, you can add them all at once using the ",(0,i.jsx)(t.code,{children:"insert(int index, List<ListItem> items)"})," method. This approach reduces server-client communication, enhancing overall efficiency. For detailed guidelines on this and other best practices in webforJ ",(0,i.jsx)(t.a,{href:"/docs/architecture/",children:"architecture"}),", consult the documentation."]})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Removing an Item:"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["To remove an item from the list, use the ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#remove(int)",code:"true",children:"remove(int index)"})," or ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#remove(java.lang.Object)",code:"true",children:"remove(Object key)"})," method."]}),"\n",(0,i.jsxs)(t.li,{children:["You can also remove all items from the list using ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#removeAll()",code:"true",children:"removeAll()"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Accessing and Updating Items:"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["To access items by key or index, use ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#getByKey(java.lang.Object)",code:"true",children:"getByKey(Object key)"})," or ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#getByIndex(int)",code:"true",children:"getByIndex(int index)"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You can update the text of an item using the ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/ListItem",suffix:"#setText(java.lang.String)",code:"true",children:"setText(String text)"})," method within the ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/ListItem",code:"true",children:"ListItem"})," class."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Selecting an Item:"})," To select an item within the list, you can use methods such as ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#select(org.dwcj.component.list.ListItem)",code:"true",children:"select(ListItem item)"})," or ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#selectKey(java.lang.Object)",code:"true",children:"selectKey(Object key)"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Retrieving Information about the List:"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You can get the size of the list using the ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#size()",code:"true",children:"size()"})," method."]}),"\n",(0,i.jsxs)(t.li,{children:["To check if the list is empty, use the ",(0,i.jsx)(s,{type:"foundation",location:"com/webforj/component/list/DwcList",suffix:"#isEmpty()",code:"true",children:"isEmpty()"})," method."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"shared-list-properties",children:"Shared List Properties"}),"\n",(0,i.jsx)(t.h3,{id:"label",children:"Label"}),"\n",(0,i.jsx)(t.p,{children:"The various List components can be assigned a label, which is a descriptive text or title that is associated with the component. It provides a brief explanation or prompt to help users understand the purpose or expected selection for that particular list. List labels are not only important for usability but also play a crucial role in accessibility, as they enable screen readers and assistive technologies to provide accurate information and facilitate keyboard navigation."}),"\n",(0,i.jsx)(t.h2,{id:"topics",children:"Topics"}),"\n",(0,i.jsx)(n,{className:"topics-section"})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3152:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var i=n(7437),o=n(5489),s=n(2445);function c(e){let{imagePath:t,title:n,description:c,link:A}=e;const a=i.AH`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-top: 15px;
    padding: 20px;
    border: 1px solid var(--ifm-color-emphasis-200);
    transition: all var(--ifm-transition-fast) ease;
    transition-property: border,box-shadow;
    border-radius: var(--ifm-card-border-radius);
    text-decoration: none;
    color: var(--ifm-font-color-base);    
    
    &:hover{
      border: 1px var(--ifm-color-primary) solid;
      .bar{
        background-color: var(--ifm-color-primary);
      }
      text-decoration: none;
      color: var(--ifm-font-color-base);
    } 
  `,r=i.AH`
    width: 250px;
    height: 150px;
    object-fit: contain;
    margin: 0 0 5px -3px;
  `,d=i.AH`
      height: 1px;
      background-color: lightgray;
      margin: 5px 0 15px 0;
      transition: all var(--ifm-transition-fast) ease;
      transition-property: background-color,box-shadow;
    `,l=i.AH`
    h5{
      font-size: 1em;
    }
    p{
      font-size: .9em;
      margin: 0px !important;
    }
  `;return(0,s.FD)(o.A,{to:A,css:a,children:[(0,s.Y)("div",{css:{display:"flex",justifyContent:"center"},children:(0,s.Y)("img",{src:t.default,css:r})}),(0,s.Y)("div",{css:d,className:"bar"}),(0,s.FD)("div",{css:l,children:[(0,s.Y)("h5",{children:n}),(0,s.Y)("p",{children:c})]})]})}},2468:(e,t,n)=>{n(6540),n(3152)},9856:(e,t,n)=>{n(3019),n(8822),n(7586),n(9389),n(4645),n(8859),n(5445)},3019:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/color_field-5432a32155395e4eb0a9ce56ec283ce2.png"},8822:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/date_field-73dadbcbf87ee3e0240c1c8e4c4c369f.png"},7586:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/date_time_field-a67e2cb6a8c3a58d238e9c2c2a201178.png"},9389:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA1CAYAAAAEVKRZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHQSURBVHhe7dyxihNBGMDxiYjiFTaHKJZWgqWNlZ0+gX0afYATH0O8B9Am/T2BdlY2loKVpXjIFbFQFCH64aTJJR83ISw73u8HS2a3nj87s4SZLP4qwFoX6i+whkAgIRBICAQSAoGEQCAhEEgIBBICgYRAINH8V5OXb7+WF6+Py8cvP+sTGLfbNy6Xpw+vlyf3r9UnZ9cUSMRx+Oa4PH90s9y7tVefwri9+/S9PDv6XA4etEfStMSKN4c46E3M15i3MX9bNQUSyypx0KOYt9tsC2zSISEQSAgEEgJhVPavXikXF7+2vnZNIJAQCCQEQlem02kdDUMgdGMZx5CRCIQurEYxVCQCYfQ2xTBEJE1/Vpw8fl9ODu/UO9i9+Mw7n8/rXbvfk0t1dNr+wYeyeHW33p2NNwgkBAIJSyxGZd0SK9trzGazOvrHEotzZzWCpU3Pd0kgdGE1hiHiCAKhG8sohoojCISuDBlHEAgkBMLoxJeoba9dEwijcvLtRx2Ng0AgIRBICAQSTYHEGadxjCP0JuZtzN9WTYHEAcBxxqlI6MnybN6Yv62c7s5/b7DT3eG8sUmHhEAgIRBICAQSAoGEQCAhEEgIBBICgYRAYKNS/gDN9bRIHg9suQAAAABJRU5ErkJggg=="},4645:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i="data:image/png;base64,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"},8859:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i="data:image/png;base64,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"},5445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i="data:image/png;base64,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"},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>A});var i=n(6540);const o={},s=i.createContext(o);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function A(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
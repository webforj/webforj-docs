"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[4007],{9772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var a=t(4848),r=t(8453),i=t(1470),s=t(9365),o=t(3514);const l={sidebar_position:1,title:"Data Binding"},c=void 0,d={id:"data-binding/home",title:"Data Binding",description:"webforJ includes a data binding feature that seamlessly integrates UI components with backend data models in Java applications. This feature bridges the gap between the UI and the data layer, ensuring that changes in the UI reflect in the data model and vice versa. As a result, it enhances user experience and reduces the complexity of event handling and data synchronization.",source:"@site/docs/data-binding/home.md",sourceDirName:"data-binding",slug:"/data-binding/home",permalink:"/docs/data-binding/home",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/data-binding/home.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Data Binding"},sidebar:"documentationSidebar",previous:{title:"Events",permalink:"/docs/ui/events"},next:{title:"Bindings",permalink:"/docs/data-binding/bindings"}},u={},h=[{value:"Concept",id:"concept",level:2},{value:"Key features",id:"key-features",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"webforJ includes a data binding feature that seamlessly integrates UI components with backend data models in Java applications. This feature bridges the gap between the UI and the data layer, ensuring that changes in the UI reflect in the data model and vice versa. As a result, it enhances user experience and reduces the complexity of event handling and data synchronization."}),"\n",(0,a.jsx)(n.h2,{id:"concept",children:"Concept"}),"\n",(0,a.jsxs)(n.p,{children:["The following demonstration showcases a simple webforJ app for registering superheroes using webforJ data binding. The app consists of two main parts: ",(0,a.jsx)(n.code,{children:"HeroRegistration.java"})," and ",(0,a.jsx)(n.code,{children:"Hero.java"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["In ",(0,a.jsx)(n.code,{children:"HeroRegistration.java"}),", the code configures the user interface with a ",(0,a.jsx)(n.code,{children:"TextField"})," for entering the hero's name, a ",(0,a.jsx)(n.code,{children:"ComboBox"})," to select a superpower, and a ",(0,a.jsx)(n.code,{children:"Button"})," to submit the registration."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Hero"})," class defines the data model with validation constraints on the hero's name and power, ensuring that entries are valid and adhere to specified criteria such as length and pattern."]}),"\n",(0,a.jsxs)(n.p,{children:["The app utilizes the ",(0,a.jsx)(n.code,{children:"BindingContext"})," to bind UI components to the properties of the ",(0,a.jsx)(n.code,{children:"Hero"})," object. When a user clicks the submit button, the app writes the data entered in the form back to the ",(0,a.jsx)(n.code,{children:"Hero"})," bean if they're valid."]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{value:"HeroRegistration",label:"HeroRegistration.java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:"showLineNumbers",children:'public class HeroRegistration extends App {\n    \n  private TextField name = new TextField("Text Field");\n  private ComboBox power = new ComboBox("Power");\n  private Button submit = new Button("Submit Application");\n  private FlexLayout layout = FlexLayout.create(name, power, submit).vertical().build()\n      .setStyle("margin", "20px auto").setMaxWidth("400px");\n\n  @Override\n  public void run() throws WebforjException {\n    power.insert("Fly", "Invisible", "LaserVision", "Speed", "Teleportation");\n\n    BindingContext<Hero> context = BindingContext.of(this, Hero.class, true);\n    Hero bean = new Hero("Superman", "Fly");\n\n    // reflect the bean data in the form\n    context.read(bean);\n\n    submit.onClick(e -> {\n      // write the form data back to the bean\n      ValidationResult results = context.write(bean);\n\n      if (results.isValid()) {\n        // do something with the bean\n        // repository.persist(bean)\n      }\n    });\n\n    Frame frame = new Frame();\n    frame.add(layout);\n  }\n}\n'})})}),(0,a.jsx)(s.A,{value:"Hero",label:"Hero.java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:"showLineNumbers",children:'public class Hero {\n\n  @NotEmpty(message = "Name cannot be empty")\n  @Length(min = 3, max = 20)\n  private String name;\n\n  @NotEmpty(message = "Unspecified power")\n  @Pattern(regexp = "Fly|Invisible|LaserVision|Speed|Teleportation", message = "Invalid power")\n  private String power;\n\n  public Hero(String name, String power) {\n    this.name = name;\n    this.power = power;\n  }\n\n  public String getName() {\n    return name;\n  }\n\n  public void setName(String name) {\n    this.name = name;\n  }\n\n  public String getPower() {\n    return power;\n  }\n\n  public void setPower(String power) {\n    this.power = power;\n  }\n\n  public String toString() {\n    return "Name: " + name + ", Power: " + power;\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"key-features",children:"Key features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Bidirectional Binding:"}),"  Supports bidirectional data binding, allowing changes in the data model to update the UI, and user interactions in the UI to update the data model."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Validation Support:"})," Integrates comprehensive validation mechanisms that you can customize and extended. Developers can implement their own validation rules or use existing validation frameworks like Jakarta Validation to ensure data integrity before updating the model."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Extensibility:"})," Can be easily extended to support different types of UI components, data transformations, and complex validation scenarios."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Annotation-Driven Configuration:"}),"  Utilizes annotations to minimize boilerplate code, making the bindings between UI components and data models declarative and easy to manage."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"topics",children:"Topics"}),"\n",(0,a.jsx)(o.A,{className:"topics-section"})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},3514:(e,n,t)=>{t.d(n,{A:()=>f});t(6540);var a=t(53),r=t(4142),i=t(5489),s=t(6654),o=t(1312),l=t(1107);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=t(4848);function u(e){let{href:n,children:t}=e;return(0,d.jsx)(i.A,{href:n,className:(0,a.A)("card padding--lg",c.cardContainer),children:t})}function h(e){let{href:n,icon:t,title:r,description:i}=e;return(0,d.jsxs)(u,{href:n,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,a.A)("text--truncate",c.cardTitle),title:r,children:[t," ",r]}),i&&(0,d.jsx)("p",{className:(0,a.A)("text--truncate",c.cardDescription),title:i,children:i})]})}function p(e){let{item:n}=e;const t=(0,r.Nr)(n);return t?(0,d.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function m(e){let{item:n}=e;const t=(0,s.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.cC)(n.docId??void 0);return(0,d.jsx)(h,{href:n.href,icon:t,title:n.label,description:n.description??a?.description})}function b(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(m,{item:n});case"category":return(0,d.jsx)(p,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function g(e){let{className:n}=e;const t=(0,r.$S)();return(0,d.jsx)(f,{items:t.items,className:n})}function f(e){const{items:n,className:t}=e;if(!n)return(0,d.jsx)(g,{...e});const i=(0,r.d1)(n);return(0,d.jsx)("section",{className:(0,a.A)("row",t),children:i.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(b,{item:e})},n)))})}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(53);const r={tabItem:"tabItem_Ymn6"};var i=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(6540),r=t(53),i=t(3104),s=t(6347),o=t(205),l=t(7485),c=t(1682),d=t(9466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:r}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),f=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(w,{...e,...n})]})}function y(e){const n=(0,g.A)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(n))}}}]);
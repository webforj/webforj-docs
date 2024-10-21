"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9885],{4608:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var t=n(4848),i=n(8453);const s={sidebar_position:2,title:"Composite Components",draft:!1},c=void 0,d={id:"building-ui/composite-components",title:"Composite Components",description:"Developers will often wish to create components that contain constituent components for application level use. The Composite component gives developers the tools they need to create their own components while maintaining control over what they choose to expose to users.",source:"@site/docs/building-ui/composite-components.md",sourceDirName:"building-ui",slug:"/building-ui/composite-components",permalink:"/docs/building-ui/composite-components",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/building-ui/composite-components.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Composite Components",draft:!1},sidebar:"documentationSidebar",previous:{title:"Component Basics",permalink:"/docs/building-ui/basics"},next:{title:"Elements",permalink:"/docs/building-ui/element"}},a={},r=[{value:"Component binding",id:"component-binding",level:2},{value:"Lifecycle management",id:"lifecycle-management",level:2},{value:"Example <code>Composite</code> component",id:"example-composite-component",level:3}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components},{ComponentDemo:n,JavadocLink:s}=o;return n||h("ComponentDemo",!0),s||h("JavadocLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{type:"foundation",location:"com/webforj/component/Composite",top:"true"}),"\n",(0,t.jsxs)(o.p,{children:["Developers will often wish to create components that contain constituent components for application level use. The ",(0,t.jsx)(o.code,{children:"Composite"})," component gives developers the tools they need to create their own components while maintaining control over what they choose to expose to users."]}),"\n",(0,t.jsxs)(o.p,{children:["It allows developers to manage a specific type of ",(0,t.jsx)(o.code,{children:"Component"})," instance, providing a way to encapsulate its behavior. It requires any extending subclass to specify the type of ",(0,t.jsx)(o.code,{children:"Component"})," it intends to manage, ensuring a subclass of ",(0,t.jsx)(o.code,{children:"Composite"})," is intrinsically linked to its underlying ",(0,t.jsx)(o.code,{children:"Component"}),"."]}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["It's highly recommended to create custom components by utilizing the ",(0,t.jsx)(o.code,{children:"Composite"})," component, rather than extending the base ",(0,t.jsx)(o.code,{children:"Component"})," component."]})}),"\n",(0,t.jsxs)(o.p,{children:["To utilize the ",(0,t.jsx)(o.code,{children:"Composite"})," component, start by creating a new Java class that extends the ",(0,t.jsx)(o.code,{children:"Composite"})," component. Specify the type of Component you want to manage as the generic type parameter."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:"public class ApplicationComponent extends Composite<Div> {\n\t//Implementation\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"component-binding",children:"Component binding"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"Composite"})," class requires developers to specify the type of ",(0,t.jsx)(o.code,{children:"Component"})," it manages. This strong association ensures that a ",(0,t.jsx)(o.code,{children:"Composite"})," component is intrinsically linked to its underlying Component. This also provides benefits over traditional inheritance, as it allows the developer to decide exactly what functionality to expose to the public API."]}),"\n",(0,t.jsxs)(o.p,{children:["By default, the ",(0,t.jsx)(o.code,{children:"Composite"})," component utilizes the generic type parameter of its subclass to identify and instantiate the bound component type. This is based on the assumption that the component class has a parameter-less constructor. Developers can customize the component initialization process by overriding the ",(0,t.jsx)(o.code,{children:"initBoundComponent()"})," method. This allows for greater flexibility in creating and managing the bound component, including invoking parameterized constructors."]}),"\n",(0,t.jsxs)(o.p,{children:["The following snippet overrides the initBoundComponent method to use a parameterized constructor for the ",(0,t.jsx)(o.a,{href:"/docs/components/flex-layout",children:"FlexLayout"})," class:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:'public static class OverrideComposite extends Composite<FlexLayout> {\n\t\n\tTextField nameField;\n\tButton submit;\n\n\t@Override\n\tprotected FlexLayout initBoundComponent() {\n\t\tnameField = new TextField();\n\t\tsubmit = new Button("Submit");\n\t\treturn new FlexLayout(nameField, submit);\n\t}\n}\n'})}),"\n",(0,t.jsx)(o.h2,{id:"lifecycle-management",children:"Lifecycle management"}),"\n",(0,t.jsxs)(o.p,{children:["Unlike with the ",(0,t.jsx)(o.code,{children:"Component"}),", developers do not need to implement the ",(0,t.jsx)(o.code,{children:"onCreate()"})," and ",(0,t.jsx)(o.code,{children:"onDestroy()"})," methods when working with the ",(0,t.jsx)(o.code,{children:"Composite"})," component. The ",(0,t.jsx)(o.code,{children:"Composite"})," component takes care of these aspects for you."]}),"\n",(0,t.jsxs)(o.p,{children:["Should you need to access the bound components at the various stages of its lifecycle, the ",(0,t.jsx)(o.code,{children:"onDidCreate()"})," and ",(0,t.jsx)(o.code,{children:"onDidDestroy()"})," hooks allow developers access to these lifecycle stages to perform additional functionality. Utilization of these hooks is optional."]}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"onDidCreate()"})," method is called immediately after the bound component is created and added to a window. Use this method to set up your component, modify any configurations needed, and add child components if applicable. While the ",(0,t.jsx)(o.code,{children:"Component"})," class's ",(0,t.jsx)(o.code,{children:"onCreate()"})," method takes a ",(0,t.jsx)(o.a,{href:"#",children:"Window"})," instance, the ",(0,t.jsx)(o.code,{children:"onDidCreate()"})," method instead takes the bound component, removing the need to call the ",(0,t.jsx)(o.code,{children:"getBoundComponent()"})," method directly. For example:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:"public class ApplicationComponent extends Composite<Div> {\n\t@Override\n\tprotected void onDidCreate(Div container) {\n\t\t// Add child components to the container\n\t\tcontainer.add(new CheckBox());\n\t\tcontainer.add(new Paragraph());\n\t\t// ...\n\t}\n}\n"})}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["This logic can also be implemented in the constructor, by calling ",(0,t.jsx)(o.code,{children:"getBoundComponent()"}),"."]})}),"\n",(0,t.jsxs)(o.p,{children:["Similarly, the ",(0,t.jsx)(o.code,{children:"onDidDestroy()"})," method fires once the bound component has been destroyed, and allows for additional behavior to be fired on destruction should it be desired."]}),"\n",(0,t.jsxs)(o.h3,{id:"example-composite-component",children:["Example ",(0,t.jsx)(o.code,{children:"Composite"})," component"]}),"\n",(0,t.jsxs)(o.p,{children:["In the demo below, a simple ToDo application has been created, where each item added to the list is a ",(0,t.jsx)(o.code,{children:"Composite"})," component, consisting of a ",(0,t.jsx)(o.a,{href:"/docs/components/radiobutton",children:(0,t.jsx)(o.code,{children:"RadioButton"})})," styled as a switch, and a ",(0,t.jsx)(o.a,{href:"#",children:(0,t.jsx)(o.code,{children:"Div"})})," with text."]}),"\n",(0,t.jsxs)(o.p,{children:["The logic for this component is set up in the constructor, which sets styling and adds constituent components to the bound component using the ",(0,t.jsx)(o.code,{children:"getBoundComponent"})," method, and adds event logic."]}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["This could also be implemented in the ",(0,t.jsx)(o.code,{children:"onDidCreate()"})," method, which would give direct access to the bound ",(0,t.jsx)(o.a,{href:"/docs/components/flex-layout",children:(0,t.jsx)(o.code,{children:"FlexLayout"})})," component."]})}),"\n",(0,t.jsx)(o.p,{children:"This component is then instantiated and utilized in an Application, and allows for its use throughout various locations, making it a powerful tool in the creation of custom components."}),"\n",(0,t.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/compositedemo?",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/compositeDemo.css",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/CompositeDemoView.java",height:"500px"})]})}function p(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function h(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>d});var t=n(6540);const i={},s=t.createContext(i);function c(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);
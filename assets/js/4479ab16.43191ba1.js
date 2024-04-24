"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3756],{534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=t(5893),a=t(1151);const o={sidebar_position:2,title:"Bindings"},s=void 0,d={id:"data-binding/bindings",title:"Bindings",description:"A binding in webforJ links a specific property of a Java Bean to a UI component. This linkage enables automatic updates between the UI and the backend model. Each binding can handle data synchronization, validation, transformation, and event management.",source:"@site/docs/data-binding/bindings.md",sourceDirName:"data-binding",slug:"/data-binding/bindings",permalink:"/docs/data-binding/bindings",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/data-binding/bindings.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Bindings"},sidebar:"documentationSidebar",previous:{title:"Data Binding",permalink:"/docs/data-binding/overview"},next:{title:"Validation",permalink:"/docs/data-binding/validation/overview"}},r={},l=[{value:"Configure bindings",id:"configure-bindings",level:2},{value:"The bound property",id:"the-bound-property",level:3},{value:"The bound component",id:"the-bound-component",level:3},{value:"Reading and writing data",id:"reading-and-writing-data",level:2},{value:"Reading data",id:"reading-data",level:3},{value:"Writing data",id:"writing-data",level:3},{value:"ReadOnly data",id:"readonly-data",level:2},{value:"Configuring readonly bindings",id:"configuring-readonly-bindings",level:3},{value:"Binding getters and setters",id:"binding-getters-and-setters",level:2},{value:"Customizing setters and getters",id:"customizing-setters-and-getters",level:3},{value:"Using custom getters",id:"using-custom-getters",level:3},{value:"Using custom setters",id:"using-custom-setters",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"A binding in webforJ links a specific property of a Java Bean to a UI component. This linkage enables automatic updates between the UI and the backend model. Each binding can handle data synchronization, validation, transformation, and event management."}),"\n",(0,i.jsxs)(n.p,{children:["You can initiate bindings only through the ",(0,i.jsx)(n.code,{children:"BindingContext"}),". It manages a collection of binding instances, each linking a UI component to\na property of a bean. It facilitates group operations on bindings, such as validation and\nsynchronization between the UI components and the bean's properties. It acts as an aggregator,\nallowing for collective actions on multiple bindings, thereby streamlining the management of data\nflow within applications."]}),"\n",(0,i.jsx)(n.admonition,{title:"Automatic Binding",type:"tip",children:(0,i.jsxs)(n.p,{children:["This section introduces the basics of manually configuring bindings. Additionally, you can automatically create bindings based on the UI components in your form. Once you grasp the fundamentals, learn more by reading the ",(0,i.jsx)(n.a,{href:"./automatic-binding",children:"Automatic Binding"})," section."]})}),"\n",(0,i.jsx)(n.h2,{id:"configure-bindings",children:"Configure bindings"}),"\n",(0,i.jsxs)(n.p,{children:["Start by creating a new instance of ",(0,i.jsx)(n.code,{children:"BindingContext"})," which manages all bindings for a particular model.\nThis context ensures that all bindings can be validated and updated collectively."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"BindingContext<Hero> context = new BindingContext<>(Hero.class);\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Each form should have only one ",(0,i.jsx)(n.code,{children:"BindingContext"})," instance, and you should use this instance for all the components in the form."]})}),"\n",(0,i.jsx)(n.h3,{id:"the-bound-property",children:"The bound property"}),"\n",(0,i.jsx)(n.p,{children:"A binding property is a specific field or attribute of a Java Bean that can be linked to a UI component in your app.\nThis linkage allows changes in the UI to directly affect the corresponding property of the data model, and vice versa,\nfacilitating a reactive user experience."}),"\n",(0,i.jsx)(n.p,{children:"When setting up a binding, your should provider the property name as a string. This name must match the field name in the Java Bean class. Here's a simple example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BindingContext<Hero> context = new BindingContext<>(Hero.class, true);\ncontext\n    .bind(textField, "power")\n    .add()\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class Hero  {\n  private String name;\n  private String power;\n\n  // setters and getters\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["the ",(0,i.jsx)(n.code,{children:"bind"})," methods returns a ",(0,i.jsx)(n.code,{children:"BindingBuilder"})," which creates the ",(0,i.jsx)(n.code,{children:"Binding"})," object and you can use to configure the binding several settings, the ",(0,i.jsx)(n.code,{children:"add"})," method which\nis what actually gets the binding added to the context."]}),"\n",(0,i.jsx)(n.h3,{id:"the-bound-component",children:"The bound component"}),"\n",(0,i.jsxs)(n.p,{children:["The other side of the binding is the bound component, which refers to the UI component that interacts with the property of the Java Bean.\nThe bound component can be any UI component that supports user interaction and display, such as text fields, combo boxes, checkboxes, or\nany custom component that implements the ",(0,i.jsx)(n.code,{children:"ValueAware"})," interface."]}),"\n",(0,i.jsx)(n.p,{children:"The bound component serves as the user's point of interaction with the underlying data model.\nIt displays data to the user and also captures user inputs which are then propagated back to the model."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'TextField nameTextField = new TextField("Name");\nBindingContext<Hero> context = new BindingContext<>(Hero.class);\ncontext.bind(nameTextField, "name").add();\n'})}),"\n",(0,i.jsx)(n.h2,{id:"reading-and-writing-data",children:"Reading and writing data"}),"\n",(0,i.jsx)(n.h3,{id:"reading-data",children:"Reading data"}),"\n",(0,i.jsxs)(n.p,{children:["Reading data involves populating UI components with values from the data model.\nThis is typically done when a form is initially displayed, or when you need to reload the data due to changes in the underlying model.\nThe ",(0,i.jsx)(n.code,{children:"read"})," method provided by ",(0,i.jsx)(n.code,{children:"BindingContext"})," makes this process straightforward."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// Assume Hero object has been instantiated and initialized\nHero hero = new Hero("Clark Kent", "Flying");\n\n// BindingContext is already configured with bindings\ncontext.read(hero);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the ",(0,i.jsx)(n.code,{children:"read"})," method takes an instance of ",(0,i.jsx)(n.code,{children:"Hero"})," and updates all bound UI components to reflect the hero's properties.\nIf the hero's name or power changes, the corresponding UI components (like a ",(0,i.jsx)(n.code,{children:"TextField"})," for name and a ",(0,i.jsx)(n.code,{children:"ComboBox"})," for powers)\ndisplay these new values."]}),"\n",(0,i.jsx)(n.h3,{id:"writing-data",children:"Writing data"}),"\n",(0,i.jsxs)(n.p,{children:["Writing data involves collecting values from the UI components and updating the data model.\nThis typically occurs when a user submits a form. The ",(0,i.jsx)(n.code,{children:"write"})," method handles validation and model updating in one step."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// This could be triggered by a form submission event\nsubmit.onClick(event -> {\n  ValidationResult results = context.write(hero);\n  if (results.isValid()) {\n    // Data is valid, and hero object has been updated\n    // repository.save(hero); \n  } else {\n    // Handle validation errors\n    // results.getMessages();\n  }\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the code above, when the user clicks the submit button, the ",(0,i.jsx)(n.code,{children:"write"})," method is called.\nIt performs all configured validations and, if the data passes all checks, updates the ",(0,i.jsx)(n.code,{children:"Hero"})," object\nwith new values from the bound components.\nIf the data is valid, you might save to a database or processed further. If there are validation errors,\nyou should handle appropriately, typically by displaying error messages to the user."]}),"\n",(0,i.jsx)(n.admonition,{title:"Validation Errors Reporting",type:"tip",children:(0,i.jsxs)(n.p,{children:["All core components of webforJ have default configurations to automatically report validation errors, either inline or through a popover. You can customize this behavior using ",(0,i.jsx)(n.a,{href:"/docs/data-binding/validation/reporters",children:"Reporters"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"readonly-data",children:"ReadOnly data"}),"\n",(0,i.jsx)(n.p,{children:"In certain scenarios, you may want your app to display data without allowing the end-user to modify it directly through the UI.\nThis is where read-only data bindings become crucial. webforJ supports the configuration of bindings to be read-only, ensuring that\nyou can display data, but not edit it through bound UI components."}),"\n",(0,i.jsx)(n.h3,{id:"configuring-readonly-bindings",children:"Configuring readonly bindings"}),"\n",(0,i.jsx)(n.p,{children:"To set up a read-only binding, you can configure the binding to turn off or ignore UI component input.\nThis ensures that the data remains unchanged from the UI perspective, while still updating programmatically if needed."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// Configuring a text field to be read-only in the binding context\nBindingContext<Hero> context = new BindingContext<>(Hero.class);\ncontext.bind(nameTextField, "name")\n    .readOnly()\n    .add();\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this configuration, ",(0,i.jsx)(n.code,{children:"readOnly"})," ensures that the ",(0,i.jsx)(n.code,{children:"nameTextField"})," doesn't accept user input, effectively making the text field display\nthe data without allowing modifications."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The binding can mark the component as read-only only if the UI components implements the ",(0,i.jsx)(n.code,{children:"ReadOnlyAware"})," interface."]})}),"\n",(0,i.jsxs)(n.admonition,{title:"Component ReadOnly vs Binding ReadOnly",type:"tip",children:[(0,i.jsx)(n.p,{children:"It's important to differentiate between bindings you configure as read-only and UI components you set to display as read-only.\nWhen you mark a binding as read-only, it impacts how the binding manages data during the write process, not just the UI behavior."}),(0,i.jsx)(n.p,{children:"When you mark a binding as read-only, the system skips data updates. Any changes to the UI component won't transmit back to the data model.\nThis ensures that even if the UI component somehow receives user input, it won't update the underlying data model.\nMaintaining this separation is crucial for preserving data integrity in scenarios where user actions shouldn't alter the data."}),(0,i.jsx)(n.p,{children:"In contrast, setting a UI component as read-only, without configuring the binding itself as read-only, simply stops the user from making changes\nto the UI component but doesn't stop the binding from updating the data model if changes occur programmatically or through other means."})]}),"\n",(0,i.jsx)(n.h2,{id:"binding-getters-and-setters",children:"Binding getters and setters"}),"\n",(0,i.jsx)(n.p,{children:"Setters and getters are methods in Java that set and get the values of properties, respectively.\nIn the context of data binding, they are used to define how properties are updated and retrieved within the binding framework."}),"\n",(0,i.jsx)(n.h3,{id:"customizing-setters-and-getters",children:"Customizing setters and getters"}),"\n",(0,i.jsxs)(n.p,{children:["Although webforJ can automatically use standard JavaBean naming conventions\n(for example, ",(0,i.jsx)(n.code,{children:"getName()"}),", ",(0,i.jsx)(n.code,{children:"setName()"})," for a property ",(0,i.jsx)(n.code,{children:"name"}),"), you might need to define custom behavior.\nThis is necessary when the property doesn't follow the conventional naming or when the data handling requires additional logic."]}),"\n",(0,i.jsx)(n.h3,{id:"using-custom-getters",children:"Using custom getters"}),"\n",(0,i.jsx)(n.p,{children:"Custom getters are used when the value retrieval process involves more than just returning a property.\nFor example, you might want to format the string, compute a value, or log certain actions when a property is accessed."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BindingContext<Hero> context = new BindingContext<>(Hero.class);\ncontext\n    .bind(textField, "power")\n    .useGetter(hero -> {\n        String name = hero.getName();\n        return name.toUpperCase(); // Custom logic: convert name to uppercase\n    });\n'})}),"\n",(0,i.jsx)(n.h3,{id:"using-custom-setters",children:"Using custom setters"}),"\n",(0,i.jsx)(n.p,{children:"Custom setters come into play when setting a property involves additional operations such as validation, transformation, or side effects\nlike logging or notifying other parts of your app."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BindingContext<Hero> context = new BindingContext<>(Hero.class);\ncontext\n    .bind(textField, "power")\n    .useSetter((hero, name) -> {\n        System.out.println("Updating name from " + hero.getName() + " to " + name);\n        hero.setName(name); // Additional operation: logging\n    });\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);
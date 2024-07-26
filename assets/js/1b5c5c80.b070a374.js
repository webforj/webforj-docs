"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5388],{7266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(5893),r=t(1151);const i={sidebar_position:4,title:"Transformation"},o=void 0,s={id:"data-binding/transformation",title:"Transformation",description:"Data transformations are a pivotal feature, facilitating seamless conversion between the data types used in UI components and those in your data model. This capability ensures that data types are compatible and appropriately formatted when moving data between the frontend and backend of your applications.",source:"@site/docs/data-binding/transformation.md",sourceDirName:"data-binding",slug:"/data-binding/transformation",permalink:"/docs/data-binding/transformation",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/data-binding/transformation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Transformation"},sidebar:"documentationSidebar",previous:{title:"Jakarta Validation",permalink:"/docs/data-binding/validation/jakarta-validation"},next:{title:"Automatic Binding",permalink:"/docs/data-binding/automatic-binding"}},d={},c=[{value:"Configuring transformers",id:"configuring-transformers",level:2},{value:"Implementing a transformer",id:"implementing-a-transformer",level:2},{value:"Using transformers in bindings",id:"using-transformers-in-bindings",level:2},{value:"Simplifying transforms with <code>Transformer.of</code>",id:"simplifying-transforms-with-transformerof",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Data transformations are a pivotal feature, facilitating seamless conversion between the data types used in UI components and those in your data model. This capability ensures that data types are compatible and appropriately formatted when moving data between the frontend and backend of your applications."}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["The transformer setting is best used when the data type of the bean property doesn't match the data type handled by the UI components. If you simply need to transform data of the same type, configuring ",(0,a.jsx)(n.a,{href:"/docs/data-binding/bindings#bindings-getters-and-setters",children:"the bindings' getters and setters"})," is the preferred approach."]})}),"\n",(0,a.jsx)(n.h2,{id:"configuring-transformers",children:"Configuring transformers"}),"\n",(0,a.jsx)(n.p,{children:"You configure data transformations directly within your bindings, enabling you to define how data should be transformed during the data binding process."}),"\n",(0,a.jsxs)(n.p,{children:["You can add transformers to a binding using the ",(0,a.jsx)(n.code,{children:"useTransformer"})," method on the ",(0,a.jsx)(n.code,{children:"BindingBuilder"}),". Transformers must implement the ",(0,a.jsx)(n.code,{children:"Transformer"})," interface, which requires defining methods for both directions of data flow: from model to UI and from UI to model."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'context.bind(salaryField, "salary")\n    .useTransformer(new CurrencyTransformer())\n    .add();\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In the example above, the code configures a ",(0,a.jsx)(n.code,{children:"CurrencyTransformer"})," to handle conversions between the model data type (for example, BigDecimal) and the UI representation (for example, a formatted string)."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"Each binding is associated with a single transformer. If transforming a value requires multiple steps, it's recommend to implement your own transformer for these steps."})}),"\n",(0,a.jsx)(n.h2,{id:"implementing-a-transformer",children:"Implementing a transformer"}),"\n",(0,a.jsxs)(n.p,{children:["Here\u2019s an example of implementing a simple transformer that converts between a ",(0,a.jsx)(n.code,{children:"LocalDate"})," model and a ",(0,a.jsx)(n.code,{children:"String"})," UI representation:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\n\nimport com.webforj.data.transformation.TransformationException;\nimport com.webforj.data.transformation.transformer.Transformer;\n\npublic class DateTransformer implements Transformer<LocalDate, String> {\n  private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");\n\n  @Override\n  public LocalDate transformToComponent(String modelValue) {\n    try {\n      return LocalDate.parse(modelValue, formatter);\n    } catch (Exception e) {\n      throw new TransformationException("Invalid date format");\n    }\n  }\n\n  @Override\n  public String transformToModel(LocalDate componentValue) {\n    try {\n      return componentValue.format(formatter);\n    } catch (Exception e) {\n      throw new TransformationException("Invalid date format");\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"This transformer facilitates the handling of date fields, ensuring that dates are correctly formatted when displayed in the UI and correctly parsed back into the model."}),"\n",(0,a.jsx)(n.h2,{id:"using-transformers-in-bindings",children:"Using transformers in bindings"}),"\n",(0,a.jsx)(n.p,{children:"Once you have defined a transformer, you can apply it across multiple bindings within your app. This approach is particularly useful for standard data formats that need consistent handling across different parts of your app."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'BindingContext<Employee> context = new BindingContext<>(Employee.class);\ncontext.bind(startDateField, "startDate", String.class)\n    .useTransformer(new DateTransformer())\n    .add();\n'})}),"\n",(0,a.jsx)(n.admonition,{title:"Specifying the Bean Property Type",type:"info",children:(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"bind"})," method, specifying the type of the bean property as the third parameter is essential when there is a discrepancy between the data type displayed by the UI component and the data type used in the model. For instance, if the component handles ",(0,a.jsx)(n.code,{children:"startDateField"})," as a Java ",(0,a.jsx)(n.code,{children:"LocalDate"})," within the component but stored as a ",(0,a.jsx)(n.code,{children:"String"})," in the model, explicitly defining the type as ",(0,a.jsx)(n.code,{children:"String.class"})," ensures that the binding mechanism accurately processes and converts the data between the two different types utilized by the component and the bean using the provided transformer and validators."]})}),"\n",(0,a.jsxs)(n.h2,{id:"simplifying-transforms-with-transformerof",children:["Simplifying transforms with ",(0,a.jsx)(n.code,{children:"Transformer.of"})]}),"\n",(0,a.jsxs)(n.p,{children:["It's possible to simplify the implementation of such transformations using the ",(0,a.jsx)(n.code,{children:"Transformer.of"})," method provided by the ",(0,a.jsx)(n.code,{children:"Transformer"}),". This method is syntactic sugar, and allows you to write a method that handles transformations inline, rather than passing a class implementing the ",(0,a.jsx)(n.code,{children:"Transformer"})," interface."]}),"\n",(0,a.jsxs)(n.p,{children:["In the following example , the code handles a checkbox interaction within a travel app where users can opt for additional services like car rental. The checkbox state ",(0,a.jsx)(n.code,{children:"boolean"})," needs to be transformed into a string representation ",(0,a.jsx)(n.code,{children:'"yes"'})," or ",(0,a.jsx)(n.code,{children:'"no"'})," that the backend model uses."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'CheckBox carRental = new CheckBox("Car Rental");\nBindingContext<Trip> context = new BindingContext<>(Trip.class, true);\ncontext.bind(carRental, "carRental", String.class)\n  .useTransformer(\n      Transformer.of(\n        // convert component value to modal value\n        bool -> Boolean.TRUE.equals(bool) ? "yes" : "no",\n        // convert modal value to component value\n        str -> str.equals("yes")\n      ), \n\n      // in case transformation fails, show the following\n      // message\n      "Checkbox must be checked"\n  )\n  .add();\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);
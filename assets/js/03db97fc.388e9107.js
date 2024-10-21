"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2643],{5921:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var o=n(4848),i=n(8453);const l={title:"Error Handling"},t=void 0,s={id:"advanced/error-handling",title:"Error Handling",description:"Error handling is a crucial aspect of developing robust web apps. In webforJ, error handling is designed to be flexible and customizable, allowing developers to handle exceptions in a way that best suits their app's needs.",source:"@site/docs/advanced/error-handling.md",sourceDirName:"advanced",slug:"/advanced/error-handling",permalink:"/docs/advanced/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/advanced/error-handling.md",tags:[],version:"current",frontMatter:{title:"Error Handling"},sidebar:"documentationSidebar",previous:{title:"Interval",permalink:"/docs/advanced/interval"},next:{title:"Terminate and Error Actions",permalink:"/docs/advanced/terminate-and-error-actions"}},d={},a=[{value:"Overview",id:"overview",level:2},{value:"Discovering and using error handlers",id:"discovering-and-using-error-handlers",level:2},{value:"Discovery process",id:"discovery-process",level:3},{value:"Handler selection",id:"handler-selection",level:3},{value:"The <code>ErrorHandler</code> Interface",id:"the-errorhandler-interface",level:2},{value:"Methods",id:"methods",level:3},{value:"Naming convention",id:"naming-convention",level:3},{value:"Registration",id:"registration",level:3},{value:"Implementing a custom error handler",id:"implementing-a-custom-error-handler",level:2},{value:"Step 1: Create the error handler class",id:"step-1-create-the-error-handler-class",level:3},{value:"Step 2: Register the error handler",id:"step-2-register-the-error-handler",level:3},{value:"Using <code>AutoService</code> to simplify registration",id:"using-autoservice-to-simplify-registration",level:2},{value:"The <code>GlobalErrorHandler</code> class",id:"the-globalerrorhandler-class",level:2},{value:"Behavior",id:"behavior",level:3},{value:"Defining a custom global error handler",id:"defining-a-custom-global-error-handler",level:3}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"Error handling is a crucial aspect of developing robust web apps. In webforJ, error handling is designed to be flexible and customizable, allowing developers to handle exceptions in a way that best suits their app's needs."}),"\n",(0,o.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(r.p,{children:["In webforJ, error handling revolves around the ",(0,o.jsx)(r.code,{children:"ErrorHandler"})," interface. This interface allows developers to define how their app should respond when exceptions occur during execution. By default, webforJ provides a ",(0,o.jsx)(r.code,{children:"GlobalErrorHandler"})," that handles all exceptions in a generic way. However, developers can create custom error handlers for specific exceptions to provide more tailored responses."]}),"\n",(0,o.jsx)(r.h2,{id:"discovering-and-using-error-handlers",children:"Discovering and using error handlers"}),"\n",(0,o.jsx)(r.p,{children:"webforJ uses Java's Service Provider Interface (SPI) to discover and load error handlers."}),"\n",(0,o.jsx)(r.h3,{id:"discovery-process",children:"Discovery process"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Service Registration"}),": Error handlers are registered via the ",(0,o.jsx)(r.code,{children:"META-INF/services"})," mechanism."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Service Loading"}),": On app startup, webforJ loads all classes listed in ",(0,o.jsx)(r.code,{children:"META-INF/services/com.webforj.error.ErrorHandler"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Error Handling"}),": When an exception occurs, webforJ checks if an error handler exists for that specific exception."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"handler-selection",children:"Handler selection"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"If a specific handler for the exception exists, it is used."}),"\n",(0,o.jsxs)(r.li,{children:["If no specific handler is found, but a custom global error handler ",(0,o.jsx)(r.code,{children:"WebforjGlobalErrorHandler"})," is defined, it is used."]}),"\n",(0,o.jsxs)(r.li,{children:["If neither is found, the default ",(0,o.jsx)(r.code,{children:"GlobalErrorHandler"})," is used."]}),"\n"]}),"\n",(0,o.jsxs)(r.h2,{id:"the-errorhandler-interface",children:["The ",(0,o.jsx)(r.code,{children:"ErrorHandler"})," Interface"]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"ErrorHandler"})," interface is designed to handle errors that occur during the execution of a webforJ app. Applications that want to manage specific exceptions should implement this interface."]}),"\n",(0,o.jsx)(r.h3,{id:"methods",children:"Methods"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.code,{children:"onError(Throwable throwable, boolean debug)"})}),": Called when an error occurs. This method should contain the logic for handling the exception."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.code,{children:"showErrorPage(String title, String content)"})}),": A default method that displays the error page with the given title and content."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"naming-convention",children:"Naming convention"}),"\n",(0,o.jsxs)(r.p,{children:["The implementing class must be named after the exception it handles, with the suffix ",(0,o.jsx)(r.code,{children:"ErrorHandler"}),". For example, to handle ",(0,o.jsx)(r.code,{children:"NullPointerException"}),", the class should be named ",(0,o.jsx)(r.code,{children:"NullPointerExceptionErrorHandler"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"registration",children:"Registration"}),"\n",(0,o.jsxs)(r.p,{children:["The custom error handler must be registered in the ",(0,o.jsx)(r.code,{children:"META-INF/services/com.webforj.error.ErrorHandler"})," file so that webforJ can discover and utilize it."]}),"\n",(0,o.jsx)(r.h2,{id:"implementing-a-custom-error-handler",children:"Implementing a custom error handler"}),"\n",(0,o.jsx)(r.p,{children:"The following steps detail the implementation of a custom error handler for a specific exception:"}),"\n",(0,o.jsx)(r.h3,{id:"step-1-create-the-error-handler-class",children:"Step 1: Create the error handler class"}),"\n",(0,o.jsxs)(r.p,{children:["Create a new class that implements the ",(0,o.jsx)(r.code,{children:"ErrorHandler"})," interface and is named after the exception it handles."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:'package com.example.error;\n\nimport com.webforj.error.ErrorHandler;\n\npublic class NullPointerExceptionErrorHandler implements ErrorHandler {\n\n  @Override\n  public void onError(Throwable throwable, boolean debug) {\n    // Custom handling logic for NullPointerException\n    String title = "Null Pointer Exception";\n    String content = "A null value was encountered where an object is required.";\n\n    showErrorPage(title, content);\n  }\n}\n'})}),"\n",(0,o.jsxs)(r.admonition,{type:"info",children:[(0,o.jsxs)(r.mdxAdmonitionTitle,{children:[(0,o.jsx)(r.code,{children:"showErrorPage()"})," method"]}),(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"showErrorPage"})," method is a utility method that utilizes the webforJ API to send the provided HTML content and page title to the browser, displaying an error page. When an exception occurs and the app is unable to recover, it becomes impossible to use webforJ components to build a custom error page. However, the ",(0,o.jsx)(r.code,{children:"Page"})," API remains accessible, allowing the developer to redirect or display an error page as a final attempt."]})]}),"\n",(0,o.jsx)(r.h3,{id:"step-2-register-the-error-handler",children:"Step 2: Register the error handler"}),"\n",(0,o.jsxs)(r.p,{children:["Create a file named ",(0,o.jsx)(r.code,{children:"com.webforj.error.ErrorHandler"})," inside the ",(0,o.jsx)(r.code,{children:"META-INF/services"})," directory of your app. Add the fully qualified name of your error handler class to this file."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"File"}),": ",(0,o.jsx)(r.code,{children:"META-INF/services/com.webforj.error.ErrorHandler"})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"com.example.error.NullPointerExceptionErrorHandler\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Now, whenever a ",(0,o.jsx)(r.code,{children:"NullPointerException"})," is thrown, webforJ selects your registered handler and execute its logic to handle the error."]}),"\n",(0,o.jsxs)(r.h2,{id:"using-autoservice-to-simplify-registration",children:["Using ",(0,o.jsx)(r.code,{children:"AutoService"})," to simplify registration"]}),"\n",(0,o.jsxs)(r.p,{children:["It\u2019s easy for developers to forget to update or correctly specify service descriptors. By using Google's ",(0,o.jsx)(r.code,{children:"AutoService"}),", you can automate the generation of the ",(0,o.jsx)(r.code,{children:"META-INF/services/com.webforj.error.ErrorHandler"})," file. All you need to do is annotate the error handler with the ",(0,o.jsx)(r.code,{children:"AutoService"})," annotation. You can learn more about ",(0,o.jsx)(r.a,{href:"https://github.com/google/auto/blob/main/service/README.md",children:"AutoService here"}),"."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:'@AutoService(ErrorHandler.class)\npublic class NullPointerExceptionErrorHandler implements ErrorHandler {\n\n  @Override\n  public void onError(Throwable throwable, boolean debug) {\n    // Custom handling logic for NullPointerException\n    String title = "Null Pointer Exception";\n    String content = "A null value was encountered where an object is required.";\n\n    showErrorPage(title, content);\n  }\n}\n'})}),"\n",(0,o.jsxs)(r.h2,{id:"the-globalerrorhandler-class",children:["The ",(0,o.jsx)(r.code,{children:"GlobalErrorHandler"})," class"]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"GlobalErrorHandler"})," is the default error handler provided by webforJ. It implements the ",(0,o.jsx)(r.code,{children:"ErrorHandler"})," interface and provides generic error handling."]}),"\n",(0,o.jsx)(r.h3,{id:"behavior",children:"Behavior"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Logging"}),": Errors are logged to both the server and browser consoles."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Error Page Display"}),": Depending on the debug mode, the error page displays the stack trace or a generic error message."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"defining-a-custom-global-error-handler",children:"Defining a custom global error handler"}),"\n",(0,o.jsxs)(r.p,{children:["To define a global error handler, you need to create a new error handler named ",(0,o.jsx)(r.code,{children:"WebforjGlobalErrorHandler"}),". then follow ",(0,o.jsx)(r.a,{href:"#step-2-register-the-error-handler",children:"the steps to register error handlers"})," as explained previously. In this case, webforJ first look for any custom error handlers to manage exceptions. If none are found, webforJ falls back to the custom global error handler."]}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["If multiple ",(0,o.jsx)(r.code,{children:"WebforjGlobalErrorHandler"})," are registerd then webforJ selects the first one"]})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>s});var o=n(6540);const i={},l=o.createContext(i);function t(e){const r=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(l.Provider,{value:r},e.children)}}}]);
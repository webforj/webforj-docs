"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3150],{717:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(5893),i=n(1151);const o={sidebar_position:1,displayed_sidebar:"documentationSidebar",id:"styling_intro",pagination_prev:"components/tabbed-pane"},a="Styling",l={id:"styling/styling_intro",title:"Styling",description:"Application Theme",source:"@site/docs/styling/getting_started.md",sourceDirName:"styling",slug:"/styling/styling_intro",permalink:"/docs/styling/styling_intro",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/styling/getting_started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"documentationSidebar",id:"styling_intro",pagination_prev:"components/tabbed-pane"},sidebar:"documentationSidebar",previous:{title:"TabbedPane",permalink:"/docs/components/tabbedpane"},next:{title:"Themes",permalink:"/docs/styling/theme"}},h={},c=[{value:"Application Theme",id:"application-theme",level:2},{value:"Default Themes",id:"default-themes",level:3},{value:"System Theme",id:"system-theme",level:3},{value:"Using Custom CSS",id:"using-custom-css",level:2},{value:"Using the <code>setStyle()</code> method",id:"using-the-setstyle-method",level:3},{value:"Using the <code>App</code> class&#39;s methods",id:"using-the-app-classs-methods",level:3},{value:"Using annotations",id:"using-annotations",level:3},{value:"Component Theme and Expanse",id:"component-theme-and-expanse",level:2}];function r(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"styling",children:"Styling"}),"\n",(0,t.jsx)(s.h2,{id:"application-theme",children:"Application Theme"}),"\n",(0,t.jsx)(s.p,{children:"webforJ ships three themes by default, as well as with the ability to create your own, custom theme. The default themes are light, dark and dark-pure."}),"\n",(0,t.jsx)(s.h3,{id:"default-themes",children:"Default Themes"}),"\n",(0,t.jsxs)(s.p,{children:["To change the theme of your application, you can use the ",(0,t.jsx)(s.code,{children:"@AppTheme"})," annotation or the ",(0,t.jsx)(s.code,{children:"App.setTheme()"})," method. When using this annotation, the theme name should be one of the following: ",(0,t.jsx)(s.code,{children:"system"}),", ",(0,t.jsx)(s.code,{children:"light"}),", ",(0,t.jsx)(s.code,{children:"dark"}),", ",(0,t.jsx)(s.code,{children:"dark-pure"})," or the name of a custom theme."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'@AppTheme("dark-pure")\r\n//or\r\nApp.setTheme("dark-pure");\n'})}),"\n",(0,t.jsx)(s.h3,{id:"system-theme",children:"System Theme"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"system"})," theme option allows for a theme to be set based on the operating system user preferences. Operating systems that support a dark mode or dark theme typically have an option to activate it somewhere in the settings."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"On Windows 10:"}),' The theme option can be found within the "Colors" section under "Choose your Color". For a more detailed guide, see ',(0,t.jsx)(s.a,{href:"https://blogs.windows.com/windowsexperience/2016/08/08/windows-10-tip-personalize-your-pc-by-enabling-the-dark-theme/",children:"this resource."})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"On macOS:"}),' In the "System Preferences" section under "General", there are options to change the appearance. For more details, see ',(0,t.jsx)(s.a,{href:"https://support.apple.com/en-us/HT208976",children:"this resource."})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"On iOS:"}),' Change the "Appearance" selection within the "Display & Brightness" option in the settings menu.']}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"On Android:"}),' Toggle the "Dark Theme" switch under the "Display" option within the settings menu']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If the system's themes have been customized and your application is set to use the system theme, it will be necessary to inform your application of the customized theme names. To do this, use the ",(0,t.jsx)(s.code,{children:"@AppLightTheme"})," and ",(0,t.jsx)(s.code,{children:"@AppDarkTheme"})," annotations:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'@AppLightTheme("my-light-theme")\r\n@AppDarkTheme("my-dark-theme")\n'})}),"\n",(0,t.jsx)(s.h2,{id:"using-custom-css",children:"Using Custom CSS"}),"\n",(0,t.jsx)(s.p,{children:"Styling your webforJ application can be accomplished in various ways, which include:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Using the ",(0,t.jsx)(s.code,{children:"setStyle()"})," method on various elements in the webforJ API"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Using ",(0,t.jsx)(s.code,{children:"App"})," class API methods to apply a stylesheet for your class"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Using annotations"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"using-the-setstyle-method",children:["Using the ",(0,t.jsx)(s.code,{children:"setStyle()"})," method"]}),"\n",(0,t.jsxs)(s.p,{children:["Components which extend the ",(0,t.jsx)(s.code,{children:"AbstractDwcComponent"}),", including those shipped with the engine, will have access to the ",(0,t.jsx)(s.code,{children:"setStyle()"})," method, which takes two strings: the desired style attribute to be changed, and the desired value."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'Button exampleButton = new Button();\r\nexampleButton.setStyle("width","50px");\n'})}),"\n",(0,t.jsxs)(s.h3,{id:"using-the-app-classs-methods",children:["Using the ",(0,t.jsx)(s.code,{children:"App"})," class's methods"]}),"\n",(0,t.jsxs)(s.p,{children:["The webforJ App class contains functionality to allow stylesheets to be applied to the application: ",(0,t.jsx)(s.code,{children:"addStyleSheet()"})," and ",(0,t.jsx)(s.code,{children:"addInlineStyleSheet()"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"addStyleSheet()"})," method will inject an external style sheet from a URL into a page, such as stylesheets hosted on CDNs."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'App.getPage().addStyleSheet("https://www.w3schools.com/w3css/4/w3.css")\n'})}),"\n",(0,t.jsxs)(s.p,{children:["This annotation also supports the ",(0,t.jsx)(s.code,{children:"webserver://"})," protocol, and will by default point to the folder of the running application under jetty's htdocs (",(0,t.jsx)(s.code,{children:"bbx/htdocs/myapp"}),")."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'addStyleSheet("webserver://static/css/style.css");\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"addInlineStyleSheet()"})," method is used when a developer wants to include a local stylesheet. By default, the resources directory of a project will be used. For example, a file called ",(0,t.jsx)(s.code,{children:"styles.css"})," located in ",(0,t.jsx)(s.code,{children:"src/resources/css"})," would by loaded by the following code:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'App.getPage().addInlineStyleSheet("context://css/styles.css");\n'})}),"\n",(0,t.jsx)(s.h3,{id:"using-annotations",children:"Using annotations"}),"\n",(0,t.jsx)(s.p,{children:"Similar to the App class's methods, webforJ contains annotations which allow for the use of external and local stylesheets as well."}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:["These annotations are only available to classes which extend the ",(0,t.jsx)(s.code,{children:"Component"})," class, as annotations are processed only when a class is attached to a panel. For classes in which this is not the case, use the previously mentioned ",(0,t.jsx)(s.code,{children:"App"})," class's method."]})}),"\n",(0,t.jsxs)(s.p,{children:["To annotate the injection of an external CSS file, use the ",(0,t.jsx)(s.code,{children:"@StyleSheet()"})," annotation."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'@StyleSheet("https://www.w3schools.com/w3css/4/w3.css")\r\n//or\r\n@StyleSheet(value="https://www.w3schools.com/w3css/4/w3.css")\r\n\n'})}),"\n",(0,t.jsxs)(s.p,{children:["It is also possible to apply local stylesheets with annotations. Use the ",(0,t.jsx)(s.code,{children:"@InlineStyleSheet()"})," annotation to include an external file. As with the App's API method, the root directory used by this annotation will be the resources directory of a project. A file called ",(0,t.jsx)(s.code,{children:"styles.css"})," located in ",(0,t.jsx)(s.code,{children:"src/resources/css"})," would by loaded by the following code:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'@InlineStyleSheet("context://css/style.css")\n'})}),"\n",(0,t.jsxs)(s.p,{children:["These annotations have the required parameter ",(0,t.jsx)(s.code,{children:"value"}),", and optional parameters ",(0,t.jsx)(s.code,{children:"id"}),", ",(0,t.jsx)(s.code,{children:"top"}),", and ",(0,t.jsx)(s.code,{children:"once"}),", and ",(0,t.jsx)(s.code,{children:"attributes"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The required ",(0,t.jsx)(s.code,{children:"value"})," parameter is the CSS content to be injected into the page as a style element. ",(0,t.jsxs)(s.strong,{children:["If no other parameters are given, it is not necessary to add ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"value="})})," to the annotation."]})]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"id"})," parameter accepts a string which creates a unique resource ID, causing resources with the same ID to be bundled together. This means that the resources will be injected in the same style element in the page."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"top"})," parameter accepts a boolean value, is false by default, and specifies that the style should be injected into the top level of the window."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"once"})," parameter accepts a boolean value, is false by default, and specifies whether the style should be injected into the page once only. This is useful when creating custom components that come with their own style sheets - multiple instances of the component can be used, but the style sheet will only be injected once."]}),"\n",(0,t.jsx)(s.admonition,{title:"Important!",type:"tip",children:(0,t.jsxs)(s.p,{children:["In order to use the ",(0,t.jsx)(s.code,{children:"once"})," parameter properly, ensure that you have also assigned a unique id using the ",(0,t.jsx)(s.code,{children:"id"})," parameter."]})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"attributes"})," parameter is empty by default, and can be specified either as a string in the ",(0,t.jsx)(s.code,{children:"attr=value,attr=value"})," format, or as a hashMap containing key/value pairs. These attributes are a set of ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style",children:"attributes"})," to be added to the style element."]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"It is also possible to use Java Text Blocks to create chunks of CSS that can be applied via HTML class attribute to the class itself. This styling can be applied with either the App API method or using annotations."}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",metastring:"showLineNumbers",children:'@InlineStyleSheet(value = /* css */ """\r\n   .panel{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        gap: 1rem;\r\n        padding: 2rem;\r\n        height: inherit;\r\n   } \r\n""")\r\n\r\npublic class Demo extends App{\r\n    @Override\r\n    public void run() throws DwcException{\r\n        AppPanel panel = new AppPanel();\r\n        panel.addClassName("panel");\r\n    }\r\n}\n'})}),(0,t.jsxs)(s.p,{children:["If you're using VS code, an extension that provides syntax highlighting ",(0,t.jsx)(s.a,{href:"https://marketplace.visualstudio.com/items?itemName=BEU.vscode-java-html",children:"can be found here"}),":"]}),(0,t.jsx)("img",{src:"https://github.com/webforj/vscode-java-html/raw/HEAD/docs/demo.png"})]}),"\n",(0,t.jsx)(s.h2,{id:"component-theme-and-expanse",children:"Component Theme and Expanse"}),"\n",(0,t.jsxs)(s.p,{children:["Many core webforJ components come packaged with various Themes and Expanses for easy styling. More about the specific component Themes and Expanses can be found in the ",(0,t.jsx)(s.a,{href:"/docs/components/home",children:"webforJ Components"})," section."]})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}}}]);
"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const l={sidebar_position:2},i="Users",r={unversionedId:"installation/users",id:"installation/users",title:"Users",description:"This process will substantially change with the upcoming BBj version 23.00 release.",source:"@site/docs/installation/users.md",sourceDirName:"installation",slug:"/installation/users",permalink:"/docs/installation/users",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/installation/users.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/installation/"},next:{title:"Contributors",permalink:"/docs/installation/contributors"}},s={},c=[{value:"1) Java and Maven Download and Configuration",id:"1-java-and-maven-download-and-configuration",level:2},{value:"Java",id:"java",level:3},{value:"Maven",id:"maven",level:3},{value:"2) BBj Download and Installation",id:"2-bbj-download-and-installation",level:2},{value:"3) Using the BBj Plugin Manager",id:"3-using-the-bbj-plugin-manager",level:2},{value:"Create a DWCJ application deployment",id:"create-a-dwcj-application-deployment",level:3},{value:"4) Opening Your Project in an IDE",id:"4-opening-your-project-in-an-ide",level:2},{value:"Navigating to your files in your IDE",id:"navigating-to-your-files-in-your-ide",level:3},{value:"5) Launching Your DWCJ &quot;Hello World&quot; Application",id:"5-launching-your-dwcj-hello-world-application",level:2}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"users"},"Users"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This process will substantially change with the upcoming BBj version 23.00 release.")),(0,o.kt)("p",null,"This section of the documentation will cover the steps required only for\nusers who wish to use the DWCJ for web and/or application development.\nThis installation will not allow users to contribute to the DWCJ implementation\ncode itself."),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," This walkthrough will cover installation on a Windows system - installation\nsteps may vary for Mac/Linux OS devices."),(0,o.kt)("br",null),(0,o.kt)("p",null,"Installation will be broken down into the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Java and Maven download and configuration"),(0,o.kt)("li",{parentName:"ol"},"BBj download and installation"),(0,o.kt)("li",{parentName:"ol"},"Using the BBj Plugin Manager to create your application"),(0,o.kt)("li",{parentName:"ol"},"Launching your application")),(0,o.kt)("h2",{id:"1-java-and-maven-download-and-configuration"},"1) Java and Maven Download and Configuration"),(0,o.kt)("p",null,"In order to use the DWCJ, you must first have Java and Maven installed and properly configured. If you already\nhave Java and Maven downloaded, please skip to ",(0,o.kt)("a",{parentName:"p",href:"#section2"},(0,o.kt)("strong",{parentName:"a"},"Step 2")),". If you also have\nBBj installed on your system, please skip to ",(0,o.kt)("a",{parentName:"p",href:"#section3"},(0,o.kt)("strong",{parentName:"a"},"Step 3")),"."),(0,o.kt)("h3",{id:"java"},"Java"),(0,o.kt)("b",null,"Java OpenJDK17")," can be found [by following this link](https://adoptium.net/temurin/releases/). It is recommended to allow the installation to handle setting the JAVA_HOME variable during installation, where applicable.",(0,o.kt)("h3",{id:"maven"},"Maven"),(0,o.kt)("p",null,"Maven should also be downloaded, and can be found ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/download.cgi"},"at this link"),". It is\nrecommended to configure your system environment variables with Maven - a guide for installation and configuration\nfor Windows users can be found ",(0,o.kt)("a",{parentName:"p",href:"https://phoenixnap.com/kb/install-maven-windows"},"here"),"."),(0,o.kt)("a",{name:"section2"}),(0,o.kt)("h2",{id:"2-bbj-download-and-installation"},"2) BBj Download and Installation"),(0,o.kt)("b",null,"While following this step, be sure to install BBj version 22.14 or newer "),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"The following video describes the steps needed download the tool that will install BBj on your machine. Watch from the beginning until the ",(0,o.kt)("strong",{parentName:"p"},"1:30")," mark. "),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Ovk8kznQfGs?end=90",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}),(0,o.kt)("p",null,"Once you've downloaded the installer, follow this video's instructions to walk you through the installer options to put BBj on your machine. Follow this\nvideo from ",(0,o.kt)("strong",{parentName:"p"},"4:13")," to ",(0,o.kt)("strong",{parentName:"p"},"8:23"),"."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Ovk8kznQfGs?start=253&end=503",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{name:"section3"}),(0,o.kt)("h2",{id:"3-using-the-bbj-plugin-manager"},"3) Using the BBj Plugin Manager"),(0,o.kt)("p",null,'Once BBj has been installed, we can use the BBj Plugin Manager to give us\naccess to the DWCJ and start development on our project. To do this, run the\nPluginManager application. For windows users, this can be found by typing\n"PluginManager" into the Start menu.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Plugin manager start menu option",src:n(1441).Z,width:"343",height:"677"})),(0,o.kt)("p",null,"Once this is complete, you should see the Plugin Manager window open. It\nshould look something like the screenshot below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(8342).Z,width:"998",height:"700"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"create-a-dwcj-application-deployment"},"Create a DWCJ application deployment"),(0,o.kt)("p",null,"From this window, first click the ",(0,o.kt)("strong",{parentName:"p"},'"Available Plugins')," tab near the\ntop left corner of the window. This will open a menu with many more available\nplugins. Check the ",(0,o.kt)("strong",{parentName:"p"},'"Show versions under development"')," checkbox in order to\nshow the DWCJ entry."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(4651).Z,width:"319",height:"235"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Scroll down through the various selections until you find the DWCJ entry in\nthe list. Select this entry, and then click the ",(0,o.kt)("strong",{parentName:"p"},'"Install"')," button at the\nbottom right of the Plugin Manager window."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(9753).Z,width:"969",height:"411"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"After the DWCJ plugin has been installed, click on the ",(0,o.kt)("strong",{parentName:"p"},'"Installed Plugins"'),"\ntab once again, which should now display the DWCJ among the list of other\ninstalled plugins. Select the DWCJ from the list, and click ",(0,o.kt)("strong",{parentName:"p"},'"Configure"'),"\ntowards the top right of the window."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(6898).Z,width:"996",height:"272"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"This will open the configuration window. Here, we'll create a new configuration\nto begin an instance of the DWCJ. Select the ",(0,o.kt)("strong",{parentName:"p"},'"+"')," button below the\n",(0,o.kt)("strong",{parentName:"p"},'"Configurations"')," field as shown in the screenshot below"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(9630).Z,width:"799",height:"463"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Give your configuration a name, and then click the ",(0,o.kt)("strong",{parentName:"p"},'"New Project"')," button\nunder the ",(0,o.kt)("strong",{parentName:"p"},'"DWCJ Projects"')," window."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(2220).Z,width:"781",height:"447"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"This will open a window which will allow the selection of a project template.\nSelect ",(0,o.kt)("strong",{parentName:"p"},'"HelloWorldJava"')," from the template list. This will create a small file with\na simple program that can be run once configuration is complete.\nYou'll also be prompted to select the location of the project. This walkthrough will use\na new folder,though this isn't overtly necessary. We'll name the new folder ",(0,o.kt)("strong",{parentName:"p"},'"dwcj_app"'),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(1566).Z,width:"891",height:"451"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Once this folder is created, click on the new folder (or the existing folder\nyou've chosen to create your project inside of), and then click the select\nbutton at the bottom right of the window."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(6454).Z,width:"904",height:"452"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"You should now see your configuration listed on the left side of the window,\nwith two file paths listed under the DWCJ Projects window. It should look\nsimilar to the screenshot below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(9009).Z,width:"912",height:"617"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"4-opening-your-project-in-an-ide"},"4) Opening Your Project in an IDE"),(0,o.kt)("p",null,"Now that the files we need have been created, the project can be opened in\nan editor or IDE. This tutorial will use Microsoft\u2019s VS Code as the development IDE.\nOther IDEs may be used, and may come with other features or functionality. ",(0,o.kt)("strong",{parentName:"p"},"VS Code can be ",(0,o.kt)("a",{parentName:"strong",href:"https://code.visualstudio.com/Download"},"downloaded free of charge from this link."))),(0,o.kt)("h3",{id:"navigating-to-your-files-in-your-ide"},"Navigating to your files in your IDE"),(0,o.kt)("p",null,"Click on ",(0,o.kt)("strong",{parentName:"p"},'"File"')," at the top left of the VS Code window, and select the\n",(0,o.kt)("strong",{parentName:"p"},'"Open Folder..."')," menu option. This will open an explorer window."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(8065).Z,width:"804",height:"501"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Select the folder where the DWCJ files were initialized in the previous step.\nAn example path would be ",(0,o.kt)("strong",{parentName:"p"},'"C:/dwcj_app/"'),". Once you've navigated to the\ncorrect folder, click on the ",(0,o.kt)("strong",{parentName:"p"},'"Select Folder"')," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(2883).Z,width:"946",height:"534"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"5-launching-your-dwcj-hello-world-application"},'5) Launching Your DWCJ "Hello World" Application'),(0,o.kt)("p",null,"Navigate back to the Plugin Manager, and select the DWCJ from the installed\nplugins list, and click ",(0,o.kt)("strong",{parentName:"p"},'"Configure"'),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(8506).Z,width:"986",height:"345"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"After opening the configuration menu, you can launch your application! Click on\nthe ",(0,o.kt)("strong",{parentName:"p"},"Launch")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JAVA_HOME variable Screenshop",src:n(3323).Z,width:"817",height:"496"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"If configured correctly, a welcome window should appear, and you should be able\nto launch your sample application!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations!")," You're now ready for development in the DWCJ!"))}u.isMDXComponent=!0},6898:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i10-e16cb245a041fb47c3caab37374cb56e.jpg"},9630:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i11-c4842ecb5c1c44e4c58b93211771cc4b.jpg"},2220:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i12-10df20bebfbc531ecd43d40a07e5518c.jpg"},1566:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i13-c757683d991ca66d14240b219362875f.jpg"},6454:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i14-78b76080888df6078b83fb3048378a91.jpg"},9009:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i15-ffb84353bb76629f8a69713f8722ccc8.jpg"},8065:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i16-6c89436f12849413b04adf96cc5b5015.jpg"},2883:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i17-2f7470e508bd686b67969e469ccea082.jpg"},8506:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i20-14b90871f9248bc0516911d20751d573.jpg"},3323:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i21-0c7343ee23a474a99ffa902c54e26ad4.jpg"},8342:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i7-248efc09f459b672cf8421a4ee647cb7.jpg"},4651:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i8-e94fde3b9d1ce548268dd8167db08f07.jpg"},9753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/i9-32c5e57ffcb6f426e7f2d50479e1fcfb.jpg"},1441:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pluginmanager-3785308866c39e84be3c3d034e24dc7b.png"}}]);
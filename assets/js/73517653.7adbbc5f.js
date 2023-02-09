"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),p=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),b=p(n),c=a,u=b["".concat(m,".").concat(c)]||b[c]||s[c]||l;return n?o.createElement(u,r(r({ref:t},d),{},{components:n})):o.createElement(u,r({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=b;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const l={sidebar_position:20},r="Combo Box",i={unversionedId:"controls/combo-box",id:"controls/combo-box",title:"Combo Box",description:"At a Glance",source:"@site/docs/controls/combo-box.md",sourceDirName:"controls",slug:"/controls/combo-box",permalink:"/docs/controls/combo-box",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/docs/controls/checkbox"},next:{title:"Date Edit Box",permalink:"/docs/controls/date-edit-box"}},m={},p=[{value:"At a Glance",id:"at-a-glance",level:3},{value:"Labeling",id:"labeling",level:3},{value:"Themes",id:"themes",level:3},{value:"Expanses",id:"expanses",level:3},{value:"Sample Program",id:"sample-program",level:3}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"combo-box"},"Combo Box"),(0,a.kt)("h3",{id:"at-a-glance"},"At a Glance"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parent Class"),(0,a.kt)("th",{parentName:"tr",align:null},"Interfaces"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#"},"AbstractDwclistControl")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},"HasReadOnly")),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},"HasFocus")),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},"HasTabTraversal")),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},"HasTextAlignment"))))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Methods"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox addItem(Object key, String item)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox addItems(Map<Object, String> items)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox close()"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox deselect()"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"Map<Object, String> getAllItems()"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"String getItem(Object key)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"String getItemAt(Integer idx)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"Integer getItemCount()"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"Integer getSelectedIndex()"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"SimpleEntry<Object, String> getSelectedItem()"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox insertItemAt(Object key, String item, Integer index)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox insertItemsAt(Map<Object, String> items, Integer index)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox open()"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox removeAllItems()"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox removeItemAt(Integer index)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox selectIndex(Integer index)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox setItems(Map<Object, String> values)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox setMaximumRowCount(Integer max)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox setTextAt(Integer idx, String text)")))))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Events"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox onClose(Consumer<ComboBoxCloseEvent> callback)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox onOpen(Consumer<ComboBoxOpenEvent> callback)"))),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox onSelect(Consumer<ComboBoxSelectEvent> callback)")))))))),(0,a.kt)("h3",{id:"labeling"},"Labeling"),(0,a.kt)("p",null,"Labels can be easily added above the component without the need to create a separate Label component above the control. "),(0,a.kt)("iframe",{loading:"lazy",src:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.comboboxdemos.ComboboxLabelDemo",style:{width:"100%",height:"100px"}}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"setAttribute()")," function to create a label. The attribute to be changed is ",(0,a.kt)("inlineCode",{parentName:"p"},"label"),", and the value should be the desired label text.  ",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.controls.combobox.ComboBox;\n\nComboBox exampleComboBox = new ComboBox();      //Creates a new ComboBox\nexampleComboBox.setAttribute("label", "Example combo box label!");     //Gives the combo box a label with the provided text\n')),(0,a.kt)("h3",{id:"themes"},"Themes"),(0,a.kt)("p",null,"DWCJ Combo Box components come with 14 themes built in for quick styling without the use of CSS.\nShown below are example boxes with each of the supported Themes applied: ",(0,a.kt)("br",null)),(0,a.kt)("iframe",{loading:"lazy",src:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.comboboxdemos.ComboboxThemeDemo",style:{width:"100%",height:"170px"}}),(0,a.kt)("br",null),"Listed below are the current supported theme options for the combo box control:",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Combo Box Themes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.DEFAULT")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.DANGER")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.GRAY")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.INFO")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.PRIMARY")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.SUCCESS")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.WARNING")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.OUTLINED_DEFAULT")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.OUTLINED_DANGER")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.OUTLINED_GRAY")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.OUTLINED_INFO")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.OUTLINED_PRIMARY")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.OUTLINED_SUCCESS")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Theme.OUTLINED_WARNING"))))))),(0,a.kt)("br",null),"Theming is supported by use of a built-in enum class. To apply a theme, execute code similar to the following: ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.controls.combobox.ComboBox;\n\nComboBox exampleComboBox = new ComboBox();      //Creates a new Combo Box with the text "example"\nexampleComboBox.setTheme(ComboBox.Theme.DEFAULT);      //Sets the box\'s theme to be the default theme.\n')),(0,a.kt)("h3",{id:"expanses"},"Expanses"),(0,a.kt)("p",null,"There are five Combo Box expanses that are supported in the DWCJ which allow for quick styling without using CSS.\nBelow are the various expanses supported this control: ",(0,a.kt)("br",null)),(0,a.kt)("iframe",{loading:"lazy",src:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.comboboxdemos.ComboboxExpanseDemo",style:{width:"100%",height:"120px"}}),(0,a.kt)("br",null),"Listed below are the current supported expanse options for the combo box control:",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"ComboBox Expanses"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.XSMALL")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.SMALL")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.MEDIUM")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.LARGE")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.XLARGE"))))))),(0,a.kt)("br",null),"Expanses are supported by use of a built-in enum class. To apply an expanse, execute code similar to the following: ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.controls.combobox.ComboBox;\n\nComboBox exampleComboBox = new ComboBox("Example");      //Creates a new ComboBox with the text "example"\nexampleComboBox.setExpanse(ComboBox.Expanse.MEDIUM);     //Sets the ComboBox\'s expanse to the medium size.\n')),(0,a.kt)("h3",{id:"sample-program"},"Sample Program"),(0,a.kt)("p",null,"The sample program below is a simple demonstration that will change the color of the\nsquare div in the center of the demonstration depending on the color chosen within\nthe box."),(0,a.kt)("iframe",{loading:"lazy",src:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.comboboxdemos.ComboboxDemo",style:{width:"100%",height:"250px"}}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.HashMap;\nimport java.util.Map;\n\nimport org.dwcj.App;\nimport org.dwcj.controls.panels.AppPanel;\nimport org.dwcj.controls.panels.Div;\nimport org.dwcj.controls.combobox.ComboBox;\nimport org.dwcj.controls.combobox.events.ComboBoxSelectEvent;\nimport org.dwcj.exceptions.DwcAppInitializeException;\n\npublic class ComboboxDemo extends App{\n    \n    ComboBox cb1;\n    Div d1;\n\n    @Override\n    public void run() throws DwcAppInitializeException {\n\n\n        AppPanel panel = new AppPanel();\n        panel.setStyle("display", "inline-grid");\n        panel.setStyle("grid-template-columns", "1fr 1fr");\n        panel.setStyle("padding", "10px");\n        panel.setStyle("gap", "50px");\n        panel.setStyle("height", "100%");\n\n        cb1 = new ComboBox();\n        d1 = new Div();\n\n        d1.setStyle("height", "50px").setStyle("width", "50px").setStyle("grid-column", "2").setStyle("background", "blue");\n        d1.setStyle("align-self", "center").setStyle("justify-self", "center");\n\n        Map<Object, String> data = new HashMap<>();\n        data.put("Random Data1", "Green");\n        data.put("Random Data2", "Blue");\n        data.put("Random Data3", "Red");\n        data.put("Random Data4", "Yellow");\n\n        cb1.setItems(data);\n\n        panel.add(cb1, d1);\n\n        cb1.setAttribute("label", "Choose a Color:").selectIndex(0).setStyle("grid-column", "1").setExpanse(ComboBox.Expanse.LARGE).setStyle("width", "250px");\n        cb1.onSelect(this::cbSelect);\n        \n\n    }\n\n    private void cbSelect(ComboBoxSelectEvent ev){\n        d1.setStyle("background", ev.getControl().getItemAt(ev.getControl().getSelectedIndex()).toLowerCase());\n    }\n\n}\n\n'))))}s.isMDXComponent=!0}}]);
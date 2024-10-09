"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5423],{1875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(4848),i=t(8453);const s={title:"ColumnsLayout"},a=void 0,l={id:"components/columns-layout",title:"ColumnsLayout",description:"The ColumnsLayout component in webforJ allows developers to create layouts using a flexible and responsive vertical layout. This layout provides dynamic columns that adjust based on the available width. This component simplifies the creation of multi-column layouts by automatically managing breakpoints and alignments.",source:"@site/docs/components/columns-layout.md",sourceDirName:"components",slug:"/components/columns-layout",permalink:"/docs/components/columns-layout",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/columns-layout.md",tags:[],version:"current",frontMatter:{title:"ColumnsLayout"},sidebar:"documentationSidebar",previous:{title:"CheckBox",permalink:"/docs/components/checkbox"},next:{title:"Dialog",permalink:"/docs/components/dialog"}},r={},c=[{value:"Basics",id:"basics",level:2},{value:"Breakpoints",id:"breakpoints",level:2},{value:"Understanding a <code>Breakpoint</code>",id:"understanding-a-breakpoint",level:3},{value:"Applying breakpoints",id:"applying-breakpoints",level:3},{value:"Column <code>Span</code> and spans per <code>Breakpoint</code>",id:"column-span-and-spans-per-breakpoint",level:2},{value:"Managing column spans",id:"managing-column-spans",level:3},{value:"Adjusting column spans with breakpoints",id:"adjusting-column-spans-with-breakpoints",level:3},{value:"Placing items within columns",id:"placing-items-within-columns",level:2},{value:"Basic column placement",id:"basic-column-placement",level:3},{value:"Adjusting placement per breakpoint",id:"adjusting-placement-per-breakpoint",level:3},{value:"Vertical and horizontal item alignments",id:"vertical-and-horizontal-item-alignments",level:2},{value:"Item spacing",id:"item-spacing",level:2},{value:"Horizontal and vertical layouts",id:"horizontal-and-vertical-layouts",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{ComponentDemo:t,DocChip:s,JavadocLink:a}=n;return t||u("ComponentDemo",!0),s||u("DocChip",!0),a||u("JavadocLink",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,o.jsx)(s,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-columns-layout",clickable:!1,iconName:"code"}),"\n",(0,o.jsx)(a,{type:"columnslayout",location:"com/webforj/component/layout/columnslayout/ColumnsLayout",top:"true"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ColumnsLayout"})," component in webforJ allows developers to create layouts using a flexible and responsive vertical layout. This layout provides dynamic columns that adjust based on the available width. This component simplifies the creation of multi-column layouts by automatically managing breakpoints and alignments."]}),"\n",(0,o.jsx)(n.admonition,{title:"Horizontal Layouts",type:"info",children:(0,o.jsxs)(n.p,{children:["This can be used in place of, or in combination with, the ",(0,o.jsx)(n.a,{href:"./flex_layouts",children:(0,o.jsx)(n.code,{children:"FlexLayout"})})," component - an equally powerful tool for horizontal layouts."]})}),"\n",(0,o.jsx)(n.h2,{id:"basics",children:"Basics"}),"\n",(0,o.jsxs)(n.p,{children:["When first instantiated, the ",(0,o.jsx)(n.code,{children:"ColumnsLayout"})," uses two columns to display items added to the layout. By default, it takes the full width of its parent elements and grows as needed to fit additional content. The display of added items can be further calibrated with the use of ",(0,o.jsx)(n.a,{href:"./columns-layout#breakpoints",children:(0,o.jsx)(n.code,{children:"Breakpoint"})})," and ",(0,o.jsx)(n.a,{href:"./columns-layout#vertical-and-horizontal-item-alignments",children:(0,o.jsx)(n.code,{children:"Alignment"})})," settings, which are discussed in the following sections in more detail."]}),"\n",(0,o.jsx)(t,{path:"https://demo.webforj.com/webapp/controlsamples/columnslayout?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/columnslayout/ColumnsLayoutView.java",height:"350px"}),"\n",(0,o.jsx)(n.h2,{id:"breakpoints",children:"Breakpoints"}),"\n",(0,o.jsxs)(n.p,{children:["At its core, the ",(0,o.jsx)(n.code,{children:"ColumnsLayout"})," is designed to provide a fluid, grid-like system that adapts to the width of its parent container. Unlike traditional fixed-grid systems, this layout allows developers to specify a number of columns at a given width, and dynamically calculates the number of displayed columns based on set ",(0,o.jsx)(n.code,{children:"Breakpoint"})," objects."]}),"\n",(0,o.jsxs)(n.p,{children:["This allows a ",(0,o.jsx)(n.code,{children:"ColumnsLayout"})," to smoothly adapt from a more constrained space on small screens to a wider area on larger screens, offering a responsive design to a developer without needing custom implementation."]}),"\n",(0,o.jsxs)(n.h3,{id:"understanding-a-breakpoint",children:["Understanding a ",(0,o.jsx)(n.code,{children:"Breakpoint"})]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"Breakpoint"})," can be specified using the ",(0,o.jsx)(n.code,{children:"Breakpoint"})," class, which takes three parameters:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Name (optional)"}),":\r\nNaming a breakpoint allows you to reference it in future configurations."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Minimum width"}),":\r\nEach breakpoint has a specific range that determines when its layout is applied. The minimum width is defined explicitly, and the next breakpoint determines the maximum width if it exists. You can use an integer to define the minimum width in pixels or use a ",(0,o.jsx)(n.code,{children:"String"})," to specify other units such as ",(0,o.jsx)(n.code,{children:"vw"}),", ",(0,o.jsx)(n.code,{children:"%"}),", or ",(0,o.jsx)(n.code,{children:"em"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Number of columns"}),":\r\nSpecify how many columns a breakpoint should have with this integer."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.mdxAdmonitionTitle,{children:[(0,o.jsx)(n.code,{children:"Breakpoint"})," evaluation"]}),(0,o.jsx)(n.p,{children:"Breakpoints are evaluated in ascending order of the width, meaning the layout will use the first matching breakpoint."})]}),"\n",(0,o.jsx)(n.h3,{id:"applying-breakpoints",children:"Applying breakpoints"}),"\n",(0,o.jsxs)(n.p,{children:["Breakpoints are applied to a ",(0,o.jsx)(n.code,{children:"ColumnsLayout"})," in one of two ways: during construction, or by using the ",(0,o.jsx)(n.code,{children:"addBreakpoint(Breakpoint)"})," method as shown below."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"ColumnsLayout layout = new ColumnsLayout()\r\n    // One column at widths >= 0px\r\n    .addBreakpoint(new Breakpoint(0, 1))\r\n    // Two columns at widths >= 600px\r\n    .addBreakpoint(new Breakpoint(600, 2))\r\n    // Four columns at widths >= 1200px\r\n    .addBreakpoint(new Breakpoint(1200, 4));  \n"})}),"\n",(0,o.jsxs)(n.p,{children:["The demonstration below shows an example of setting multiple breakpoints at construction, using breakpoints to configure the ",(0,o.jsx)(n.a,{href:"./columns-layout#spans",children:(0,o.jsx)(n.code,{children:"Span"})})," of a component, and demonstrates the resizing capabilities of the ",(0,o.jsx)(n.code,{children:"ColumnsLayout"})," when the app is resized:"]}),"\n",(0,o.jsx)(t,{path:"https://demo.webforj.com/webapp/controlsamples/columnslayoutbreakpoints?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/columnslayout/ColumnsLayoutBreakpointsView.java",height:"375px"}),"\n",(0,o.jsxs)(n.h2,{id:"column-span-and-spans-per-breakpoint",children:["Column ",(0,o.jsx)(n.code,{children:"Span"})," and spans per ",(0,o.jsx)(n.code,{children:"Breakpoint"})]}),"\n",(0,o.jsxs)(n.p,{children:["Column spans in ",(0,o.jsx)(n.code,{children:"ColumnsLayout"})," allow you to control how many columns an item occupies, giving you more control over the appearance of your layout at varying widths. This is especially useful when you need certain elements to take up more or less space depending on the screen size or design requirements."]}),"\n",(0,o.jsx)(n.h3,{id:"managing-column-spans",children:"Managing column spans"}),"\n",(0,o.jsxs)(n.p,{children:["By default, each item in the ",(0,o.jsx)(n.code,{children:"ColumnsLayout"})," takes up exactly one column. However, you can customize this behavior by setting the column span for individual items. A span specifies the number of columns an item should occupy."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'Button button = new Button("Click Me");\r\nlayout.addComponent(button);\r\n// Item spans two columns\r\nlayout.setSpan(button, 2);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the above example, the button occupies two columns instead of the default one. The ",(0,o.jsx)(n.code,{children:"setSpan()"})," method allows you to specify how many columns a component should span within the layout."]}),"\n",(0,o.jsx)(n.h3,{id:"adjusting-column-spans-with-breakpoints",children:"Adjusting column spans with breakpoints"}),"\n",(0,o.jsx)(n.p,{children:"You can also adjust column spans dynamically based on breakpoints. This feature is useful when you want an item to span different numbers of columns depending on the screen size. For instance, you may want an element to occupy a single column on mobile devices but span multiple columns on larger screens."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'TextField email = new TextField("Email");\r\n//...\r\nList.of(\r\n  new ColumnsLayout.Breakpoint("default", 0 , 1),\r\n  new ColumnsLayout.Breakpoint("small", "20em", 1),\r\n  new ColumnsLayout.Breakpoint("medium", "40em", 2),\r\n  new ColumnsLayout.Breakpoint("large", "60em", 3)\r\n)\r\n//...\r\n//email field will span two columns when medium breakpoint is active\r\ncolumnsLayout.setSpan(email, "medium", 2);\r\n//...\n'})}),"\n",(0,o.jsx)(n.p,{children:"This level of customization ensures that your layout remains responsive and appropriately structured across different devices."}),"\n",(0,o.jsx)(n.h2,{id:"placing-items-within-columns",children:"Placing items within columns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ColumnsLayout"})," provides the ability to place items in specific columns, giving more control over the arrangement of elements. You can manually specify where an item should appear within the layout, ensuring important components display as intended."]}),"\n",(0,o.jsx)(n.h3,{id:"basic-column-placement",children:"Basic column placement"}),"\n",(0,o.jsxs)(n.p,{children:["By default, items are placed in the next available column, filling from left to right. However, you can override this behavior and specify the exact column where an item should be placed. To place an item in a specific column, use the ",(0,o.jsx)(n.code,{children:"setColumn()"})," method. In this example, the button is placed in the second column of the layout, regardless of the order in which it was added relative to other components:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'Button button = new Button("Submit");\r\nlayout.addComponent(button);\r\n// Place the item in the second column\r\nlayout.setColumn(button, 2);  \n'})}),"\n",(0,o.jsx)(n.h3,{id:"adjusting-placement-per-breakpoint",children:"Adjusting placement per breakpoint"}),"\n",(0,o.jsx)(n.p,{children:"Just like with column spans, you use breakpoints to adjust the placement of items based on the screen size. This is useful for reordering or relocating elements in the layout as the viewport changes."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'TextField email = new TextField("Email");\r\n//...\r\nList.of(\r\n  new ColumnsLayout.Breakpoint("default", 0 , 1),\r\n  new ColumnsLayout.Breakpoint("small", "20em", 1),\r\n  new ColumnsLayout.Breakpoint("medium", "40em", 2),\r\n  new ColumnsLayout.Breakpoint("large", "60em", 3)\r\n)\r\n//...\r\n//email field will appear in the second column when medium breakpoint is active\r\ncolumnsLayout.setColumn(email, "medium", 2); \r\n//...\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the following demonstration, notice that when the ",(0,o.jsx)(n.code,{children:'"medium"'})," breakpoint is triggered, the ",(0,o.jsx)(n.code,{children:"email"})," field spans both columns, and the ",(0,o.jsx)(n.code,{children:"confirmPassword"})," field is placed into the first column, rather than its default placement in the second column:"]}),"\n",(0,o.jsx)(t,{path:"https://demo.webforj.com/webapp/controlsamples/columnslayoutspancolumn?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/columnslayout/ColumnsLayoutSpanColumnView.java",height:"350px"}),"\n",(0,o.jsx)(n.admonition,{title:"Avoid collisions",type:"tip",children:(0,o.jsx)(n.p,{children:"When multiple items are placed in a layout with differing spans and/or column assignments, ensure that the combined spans and placements of items in a row don\u2019t overlap. The layout attempts to gracefully manage spacing automatically, but careful design of spans and breakpoints prevents unintended display of items."})}),"\n",(0,o.jsx)(n.h2,{id:"vertical-and-horizontal-item-alignments",children:"Vertical and horizontal item alignments"}),"\n",(0,o.jsxs)(n.p,{children:["Each item in the ",(0,o.jsx)(n.code,{children:"ColumnsLayout"})," can be aligned both horizontally and vertically within its column, giving control over how content is positioned inside the layout."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Horizontal alignment"})," of an item is controlled using the ",(0,o.jsx)(n.code,{children:"setHorizontalAlignment()"})," method. This property determines how an item aligns within its column along the horizontal axis."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Vertical alignment"})," specifies how an item is positioned within its column along the vertical axis. This is useful when columns have varying heights and you want to control how items are vertically distributed."]}),"\n",(0,o.jsxs)(n.p,{children:["Available ",(0,o.jsx)(n.code,{children:"Alignment"})," options include:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"START"}),": Aligns the item to the left of the column (default)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CENTER"}),": Centers the item horizontally within the column."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"END"}),": Aligns the item to the right of the column."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"STRETCH"}),": Stretches the component to fill the layout"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"BASELINE"}),": Aligns based on the text or content inside the column, aligning items to the text baseline rather than other alignment options."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AUTO"}),": Auto alignment."]}),"\n"]}),"\n",(0,o.jsx)(t,{path:"https://demo.webforj.com/webapp/controlsamples/columnslayoutalignment?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/columnslayout/ColumnsLayoutAlignmentView.java",height:"350px"}),"\n",(0,o.jsxs)(n.p,{children:["In the demo above, the ",(0,o.jsx)(n.code,{children:"Submit"})," button has been given ",(0,o.jsx)(n.code,{children:"ColumnsLayout.Alignment.END"})," to ensure that it appears at the end, or in this case to the right, of its column."]}),"\n",(0,o.jsx)(n.h2,{id:"item-spacing",children:"Item spacing"}),"\n",(0,o.jsxs)(n.p,{children:["Controlling the space between columns in the ",(0,o.jsx)(n.code,{children:"ColumnsLayout"})," between columns (horizontal spacing) and between rows (vertical spacing) helps developers fine-tune the layout."]}),"\n",(0,o.jsxs)(n.p,{children:["To set the horizontal spacing of the layout, use the ",(0,o.jsx)(n.code,{children:"setHorizontalSpacing()"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// Set 20px space between columns\r\nlayout.setHorizontalSpacing(20);  \n"})}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, use the ",(0,o.jsx)(n.code,{children:"setVerticalSpacing()"})," method to configure the space between rows of the layout:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// Set 15px space between rows\r\nlayout.setVerticalSpacing(15);  \n"})}),"\n",(0,o.jsx)(n.admonition,{title:"CSS units",type:"tip",children:(0,o.jsxs)(n.p,{children:["You can use an integer to define the minimum width in pixels or use a ",(0,o.jsx)(n.code,{children:"String"})," to specify other units such as ",(0,o.jsx)(n.code,{children:"vw"}),", ",(0,o.jsx)(n.code,{children:"%"}),", or ",(0,o.jsx)(n.code,{children:"em"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"horizontal-and-vertical-layouts",children:"Horizontal and vertical layouts"}),"\n",(0,o.jsxs)(n.p,{children:["Building responsive and attractive layouts is possible using both the ",(0,o.jsx)(n.a,{href:"./flex_layouts",children:(0,o.jsx)(n.code,{children:"FlexLayout"})})," component and the ",(0,o.jsx)(n.code,{children:"ColumnsLayout"})," component, as well as a combination of the two. Below is a sample of the ",(0,o.jsx)(n.a,{href:"./flex_layouts#example-form",children:"form created in the FlexLayout"})," article, but using a ",(0,o.jsx)(n.code,{children:"ColumnLayout"})," scheme instead:"]}),"\n",(0,o.jsx)(t,{path:"https://demo.webforj.com/webapp/controlsamples/columnslayoutform?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/columnslayout/ColumnsLayoutFormView.java",height:"450px"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var o=t(6540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
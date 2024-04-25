"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5222],{6294:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=o(5893),i=o(1151),a=o(6957),r=o(3273);const s={title:"FlexLayout"},l=void 0,c={id:"components/flex_layouts",title:"FlexLayout",description:"webforJ provides developers with an efficient and intuitive way to layout their various applications and components - the Flex Layout. This toolset allows for items to be displayed either vertically or horizontally.",source:"@site/docs/components/flex_layouts.md",sourceDirName:"components",slug:"/components/flex_layouts",permalink:"/docs/components/flex_layouts",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/flex_layouts.md",tags:[],version:"current",frontMatter:{title:"FlexLayout"},sidebar:"documentationSidebar",previous:{title:"Icons",permalink:"/docs/components/dwc-icon"},next:{title:"Navigator",permalink:"/docs/components/navigator"}},h={},d=[{value:"Constructing a Flex Layout",id:"constructing-a-flex-layout",level:2},{value:"Flex Layout Properties",id:"flex-layout-properties",level:2},{value:"Container Properties",id:"container-properties",level:3},{value:"Direction",id:"direction",level:4},{value:"Positioning",id:"positioning",level:4},{value:"Wrapping",id:"wrapping",level:4},{value:"Spacing",id:"spacing",level:4},{value:"Flow",id:"flow",level:4},{value:"Container Builder",id:"container-builder",level:3},{value:"Item Properties",id:"item-properties",level:3},{value:"Order",id:"order",level:4},{value:"Self Alignment",id:"self-alignment",level:4},{value:"Flex Basis",id:"flex-basis",level:4},{value:"Flex Grow / Shrink",id:"flex-grow--shrink",level:4},{value:"Example Form",id:"example-form",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{type:"flexlayout",location:"com/webforj/component/layout/flexlayout/FlexLayout",top:"true"}),"\n",(0,n.jsx)(t.p,{children:"webforJ provides developers with an efficient and intuitive way to layout their various applications and components - the Flex Layout. This toolset allows for items to be displayed either vertically or horizontally."}),"\n",(0,n.jsx)(t.h2,{id:"constructing-a-flex-layout",children:"Constructing a Flex Layout"}),"\n",(0,n.jsx)(t.p,{children:"The FlexLayout class has three constructors and an additional construction utilizing a builder pattern:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"FlexLayout()"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"FlexLayout(AbstractComponent...)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"FlexLayout(FlexDirection, AbstractComponent...)"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Of note, the Flex Layout comes with a builder class to help streamline and simplify the creation of a layout. ",(0,n.jsx)(t.strong,{children:"It is recommended to use the builder to quickly and efficiently configure your layout"}),", as will be shown in examples below, though methods for the Layout class are also available to customize various attributes once the object is created."]}),"\n",(0,n.jsx)(t.p,{children:"This builder follows a builder pattern, and is intended to allow for full customization of desired attributes of the layout to avoid needing to set individual attributes later on."}),"\n",(0,n.jsx)(t.p,{children:"It is also possible to use the default in conjunction with the various setter methods available. The following snippet shows how to utilize the various constructors available for the FlexLayout class:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"//Creates a default FlexLayout\r\nFlexLayout defaultLayout = new FlexLayout();\r\n\r\n//Creates a default FlexLayout which one or more existing components\r\nFlexLayout layoutWithComponent = new FlexLayout(myButton);\r\n\r\n//Creates a FlexLayout which one or more existing components and has a specified direction\r\nFlexLayout layoutWithDirection = new FlexLayout(FlexDirection.COLUMN, myButton);\r\n\r\n//Creates a FlexLayout using the various methods available in the FlexLayoutBuilder\r\nFlexLayout layoutFromBuilder = FlexLayout.create()\r\n.horizontal()\r\n.build();\n"})}),"\n",(0,n.jsx)(t.h2,{id:"flex-layout-properties",children:"Flex Layout Properties"}),"\n",(0,n.jsx)(t.p,{children:"Flex layout's properties can be grouped into two categories: properties that apply to the items within a layout, and properties that apply to the layout itself. The flex layout, or the parent element, is a box/container that can contain one or more components. Everything inside a Flex Layout is called an item or child element. The Flex Layout provides some robust alignment capabilities, which can be achieved with the help of either container or item properties."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["webforJ's layout component follows the pattern of ",(0,n.jsx)(t.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",children:"CSS's flexbox layout"}),". However, these tools are made to be utilized fully in Java, and do not require the application of CSS outside of the Java API methods provided."]})}),"\n",(0,n.jsx)(t.h3,{id:"container-properties",children:"Container Properties"}),"\n",(0,n.jsx)(t.p,{children:"Container properties will apply to all of the components within a component and not the layout itself. They will not affect the orientation or placement of the parent - only the child components within."}),"\n",(0,n.jsx)(t.h4,{id:"direction",children:"Direction"}),"\n",(0,n.jsxs)(t.p,{children:["The Flex Layout will add components next to one another according to the direction chosen by the developer - either horizontal or vertical. When using he builder, utilize either the ",(0,n.jsx)(t.code,{children:"horizontal()"}),", ",(0,n.jsx)(t.code,{children:"horizontalReverse()"}),", ",(0,n.jsx)(t.code,{children:"vertical()"})," or ",(0,n.jsx)(t.code,{children:"verticalReverse()"})," methods when calling the ",(0,n.jsx)(t.code,{children:"create()"})," method on a ",(0,n.jsx)(t.code,{children:"FlexLayout"})," object to configure this layout as the object is created."]}),"\n",(0,n.jsxs)(t.p,{children:["Alternatively, use the ",(0,n.jsx)(t.code,{children:"setDirection()"})," method. The horizontal options are either ",(0,n.jsx)(t.code,{children:"FlexDirection.ROW"})," (left to right) or ",(0,n.jsx)(t.code,{children:"FlexDirection.ROW_REVERSE"})," (right to left), and the vertical options are either ",(0,n.jsx)(t.code,{children:"FlexDirection.COLUMN"})," (top to bottom) or ",(0,n.jsx)(t.code,{children:"FlexDirection.COLUMN_REVERSE"})," (bottom to top). This is done with the FlexLayout object, as opposed to the builder."]}),"\n",(0,n.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.container.Direction",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/container/Direction.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/flexstyles/container_styles.css",height:"275px"}),"\n",(0,n.jsx)(t.h4,{id:"positioning",children:"Positioning"}),"\n",(0,n.jsxs)(t.p,{children:["Components that are added horizontally can also be positioned both horizontally and vertically. Use the ",(0,n.jsx)(t.code,{children:"justify()"}),", ",(0,n.jsx)(t.code,{children:"align()"})," and ",(0,n.jsx)(t.code,{children:"contentAlign()"})," methods from the Flex Layout Builder to configure the positioning when creating a new Flex Layout."]}),"\n",(0,n.jsxs)(t.p,{children:["Alternatively, on the actual FlexLayout object you can use the ",(0,n.jsx)(t.code,{children:"setJustifyContent()"})," method to position items horizontally, and the ",(0,n.jsx)(t.code,{children:"setAlignment()"})," method to configure vertical positioning. To modify the area around components along the cross axis (y-axis for horizontal layouts), use the ",(0,n.jsx)(t.code,{children:"setAlignContent()"})," method."]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"setAlignment()"})," method components how items will display along the cross axis as a whole within the container, and is effective for single-line layouts."]}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"setAlignContent()"})," methods components the space around the cross axis, and will take effect only when a layout has multiple lines."]})]}),"\n",(0,n.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.container.Positioning",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/container/Positioning.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/flexstyles/container_styles.css",height:"375px"}),"\n",(0,n.jsx)(t.h4,{id:"wrapping",children:"Wrapping"}),"\n",(0,n.jsxs)(t.p,{children:["To further customize the Flex Layout component, you can specify the behavior of the flex layout when components that are added no longer fit within the display. To configure this using the builder, utilize the utilize the - ",(0,n.jsx)(t.code,{children:"nowrap()"})," (default), ",(0,n.jsx)(t.code,{children:"wrap()"})," and ",(0,n.jsx)(t.code,{children:"wrapReverse()"})," methods to configure wrapping."]}),"\n",(0,n.jsxs)(t.p,{children:["Alternatively, if your layout already exists, use the ",(0,n.jsx)(t.code,{children:"setWrap()"})," method to dictate how components will behave once they are no longer able to fit on a single line."]}),"\n",(0,n.jsx)(t.h4,{id:"spacing",children:"Spacing"}),"\n",(0,n.jsx)(t.p,{children:"In order to apply minimum spacing between items, you can set the gap property. It applies that spacing only between items not on the outer edges."}),"\n",(0,n.jsxs)(t.p,{children:["The gap property's behavior can be thought of as a minimum distance between - this property will only take effect if it is the largest calculated\r\nspace between items. If the space between items would otherwise be larger due to another calculated property, such as due to ",(0,n.jsx)(t.code,{children:"setAlignContent(FlexContentAlignment.SPACE_BETWEEN)"}),", then the gap property will be ignored."]}),"\n",(0,n.jsx)(t.h4,{id:"flow",children:"Flow"}),"\n",(0,n.jsxs)(t.p,{children:["Flex flow, which is a combination of both the direction and the wrap properties, can be set using the ",(0,n.jsx)(t.code,{children:"setFlow()"})," method on a Flex Layout object."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["To configure this property when creating the layout, use the proper directional and wrap methods. For example, to create a column wrap flow,\r\nuse the ",(0,n.jsx)(t.code,{children:".vertical().wrap()"})," combination."]})}),"\n",(0,n.jsx)(t.h3,{id:"container-builder",children:"Container Builder"}),"\n",(0,n.jsx)(t.p,{children:"The following demo allows you to build a container with the desired flex properties selected from the various menus. This tool can be used not only to create a visual example of the various methods, but also as a tool to create your own layouts with your desired properties. To use a layout you customize, simply copy the output code and add your desired elements for use in your program!"}),"\n",(0,n.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.container.ContainerDemo",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/container/ContainerDemo.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/flexstyles/container_styles.css",height:"600px"}),"\n",(0,n.jsx)(t.h3,{id:"item-properties",children:"Item Properties"}),"\n",(0,n.jsx)(t.p,{children:"Item properties will not affect any child elements within the Flex Layout, but rather the actual Layout itself. This is useful for styling a single Flex Layout element that is a child of a larger Flex Layout element independent of styles applying to all children."}),"\n",(0,n.jsx)(t.h4,{id:"order",children:"Order"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ItemOrder"}),' property determines how components are displayed within the Flex Layout, and when used on a Flex Layout will assign an item that layout\'s specific order number. This overrides the default "source order" that is built into each item (the order in which a component is added to its parent), and means that it will be shown before items with a higher order, and after items with a lower order.']}),"\n",(0,n.jsx)(t.p,{children:"This property accepts a unitless integer value that specifies the relative order of the flex item within the container. The lower the value, the earlier the item appears in the order. For example, an item with an order value of 1 will appear before an item with an order value of 2."}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"It's important to note that the order property only affects the visual order of the items within the container, not their actual position in the DOM. This means that screen readers and other assistive technologies will still read the items in the order they appear in the source code, not in the visual order."})}),"\n",(0,n.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.item.Order",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/item/Order.java",height:"200px"}),"\n",(0,n.jsx)(t.h4,{id:"self-alignment",children:"Self Alignment"}),"\n",(0,n.jsxs)(t.p,{children:["Flex Layout's self-alignment refers to how a single Flex Layout object is aligned within its parent flex container along the cross axis, which is perpendicular to the main axis. The cross axis alignment is controlled by the ",(0,n.jsx)(t.code,{children:"Alignment"})," property."]}),"\n",(0,n.jsxs)(t.p,{children:["The align-self property specifies the alignment of a single flex item along the cross axis, overriding the default alignment set by the ",(0,n.jsx)(t.code,{children:"AlignContent"})," property in a Flex Layout object. This allows you to align individual Flex Layout objects differently from the others in the container."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Self alignment uses the same values as content alignment"})}),"\n",(0,n.jsx)(t.p,{children:"This property is especially useful when you need to align a specific item differently from the other items in the container. See the sample below for an example of aligning a single item:"}),"\n",(0,n.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.item.SelfAlign",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/item/SelfAlign.java",height:"350px"}),"\n",(0,n.jsx)(t.h4,{id:"flex-basis",children:"Flex Basis"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Item Basis"})," is a property that is used in conjunction with Flex Layout's direction to set the initial size of a flex item before any remaining space is distributed."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Item Basis"})," property specifies the default size of a flex item along the main axis, which is either horizontal (for a Row direction) or vertical (for a Column direction). This property sets the width or height of a flex item depending on the value of the flex-direction property."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["By default, the ",(0,n.jsx)(t.code,{children:"Item Basis"})," property is set to auto, which means that the size of the item is determined by its content. However, you can also set a specific size for the item using various units such as pixels (px), ems (em), percentages (%), or any other CSS length unit."]})}),"\n",(0,n.jsxs)(t.p,{children:["For example, if you have a container with a total width of 500 pixels and three Flex Layout objects with ",(0,n.jsx)(t.code,{children:"Item Basis"})," values of 100px, 200px, and auto respectively, the first two items will be assigned their specified sizes, while the third item will expand to fill the remaining space."]}),"\n",(0,n.jsx)(t.h4,{id:"flex-grow--shrink",children:"Flex Grow / Shrink"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Item Grow"})," and ",(0,n.jsx)(t.code,{children:"Item Shrink"})," are two properties that work in conjunction with each other and with the ",(0,n.jsx)(t.code,{children:"Item Basis"})," property to determine how flex items grow or shrink to fill the available space within a Flex Layout object."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Item Grow"})," property specifies how much the flex item can grow relative to the other items in the container. It takes a unitless value that represents a proportion of the available space that should be allocated to the item. For example, if one item has a ",(0,n.jsx)(t.code,{children:"Item Grow"})," value of 1 and another has a value of 2, the second item will grow twice as much as the first item."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Item Shrink"})," property, on the other hand, specifies how much the flex item can shrink relative to the other items in the container. It also takes a unitless value that represents a proportion of the available space that should be allocated to the item. For example, if one item has a ",(0,n.jsx)(t.code,{children:"Item Shrink"})," value of 1 and another has a value of 2, the second item will shrink twice as much as the first item."]}),"\n",(0,n.jsxs)(t.p,{children:["When a container has more space than is needed to accommodate its contents, flex items with a ",(0,n.jsx)(t.code,{children:"Item Grow"})," value greater than 0 will expand to fill the available space. The amount of space each item gets is determined by the ratio of its ",(0,n.jsx)(t.code,{children:"Item Grow"})," value to the total ",(0,n.jsx)(t.code,{children:"Item Grow"})," value of all items in the container."]}),"\n",(0,n.jsxs)(t.p,{children:["Similarly, when a container does not have enough space to accommodate its contents, flex items with a ",(0,n.jsx)(t.code,{children:"Item Shrink"})," value greater than 0 will shrink to fit the available space. The amount of space each item gives up is determined by the ratio of its ",(0,n.jsx)(t.code,{children:"Item Shrink"})," value to the total ",(0,n.jsx)(t.code,{children:"Item Shrink"})," value of all items in the container."]}),"\n",(0,n.jsx)(t.h2,{id:"example-form",children:"Example Form"}),"\n",(0,n.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.FlexDemo",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/FlexDemo.java",height:"500px"})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},6031:(e,t,o)=>{var n=o(4836);t.Z=void 0;var i=n(o(4938)),a=o(5893),r=(0,i.default)((0,a.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=r},2610:(e,t,o)=>{var n=o(4836);t.Z=void 0;var i=n(o(4938)),a=o(5893),r=(0,i.default)((0,a.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=r},5162:(e,t,o)=>{o.d(t,{Z:()=>r});o(7294);var n=o(6010);const i={tabItem:"tabItem_Ymn6"};var a=o(5893);function r(e){let{children:t,hidden:o,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,r),hidden:o,children:t})}},4866:(e,t,o)=>{o.d(t,{Z:()=>A});var n=o(7294),i=o(6010),a=o(2466),r=o(6550),s=o(469),l=o(1980),c=o(7392),h=o(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:i}}=e;return{value:t,label:o,attributes:n,default:i}}))}(o);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function p(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const i=(0,r.k6)(),a=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,l._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function f(e){const{defaultValue:t,queryString:o=!1,groupId:i}=e,a=u(e),[r,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:o,groupId:i}),[f,x]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,h.Nk)(o);return[i,(0,n.useCallback)((e=>{o&&a.set(e)}),[o,a])]}({groupId:i}),b=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=o(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=o(5893);function v(e){let{className:t,block:o,selectedValue:n,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),h=e=>{const t=e.currentTarget,o=l.indexOf(t),i=s[o].value;i!==n&&(c(t),r(i))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;t=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;t=l[o]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},t),children:s.map((e=>{let{value:t,label:o,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:h,...a,className:(0,i.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:o??t},t)}))})}function w(e){let{lazy:t,children:o,selectedValue:i}=e;const a=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function A(e){const t=(0,x.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},6957:(e,t,o)=>{o.d(t,{Z:()=>v});var n=o(7294),i=o(917),a=o(5697),r=o.n(a),s=o(4866),l=o(5162),c=o(4673),h=o(1750);const d=o.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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",p="data:image/png;base64,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";var m=o(2949),f=o(2610),x=o(5944);function b(e){let{collapse:t,setCollapse:o}=e;b.propTypes={collapse:r().bool.isRequired,setCollapse:r().func.isRequired};const n=i.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,a=i.iv`
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    background-color: transparent;
    margin-right: 5px;
    margin-bottom: -50px !important;
  `,s=i.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,x.tZ)("div",{css:n,children:(0,x.tZ)("button",{css:a,onClick:()=>{o(!t)},children:t?(0,x.tZ)("img",{alt:"collapse_button",css:s,src:d,className:"icon-tabler-arrow-bar-up"}):(0,x.tZ)("img",{css:s,src:u,className:"icon-tabler-arrow-bar-down"})})})}function g(e){let{url:t}=e;const o=i.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    justify-self: flex-end;
    margin-top: -5px;
    margin-bottom: -20px;
    background-color: transparent;
    margin-right: 12px;
  `,n=i.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,x.tZ)("button",{css:o,onClick:()=>{window.open(t,"_blank")},children:(0,x.tZ)("img",{css:n,src:p})})}function v(e){let{path:t,javaC:o,javaE:a,urls:d,cssURL:u,javaHighlight:p,height:w,frame:y,tabs:A}=e;v.propTypes={path:r().string.isRequired,javaC:r().string,javaE:r().string,urls:r().arrayOf(r().string),cssURL:r().string,javaHighlight:r().string,height:r().string,frame:r().string,tabs:r().arrayOf(r().string)};const[j,F]=(0,n.useState)(""),[L,S]=(0,n.useState)(""),[C,D]=(0,n.useState)({}),[B,k]=(0,n.useState)(""),[Z,E]=(0,n.useState)(!(!o||!a)),[z,T]=(0,n.useState)(!1),[I,O]=(0,n.useState)({}),[N,M]=(0,n.useState)(!1),[V,G]=(0,n.useState)(0),[H,X]=(0,n.useState)(0),[J,R]=(0,n.useState)(25),[Y,P]=(0,n.useState)(25),[W,q]=(0,n.useState)(0),[U,K]=(0,n.useState)(!1),Q=(0,n.useRef)(null),_=(0,n.useRef)(null);function $(e,t,o){return(0,x.tZ)(h.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:o,children:e.code})}(0,n.useEffect)((()=>{a&&fetch(a).then((e=>e.text())).then((e=>{S(e);const t=new URL(a).pathname.split("/"),o=t[t.length-1];O((e=>({...e,javaFile:o})))})),o&&fetch(o).then((e=>e.text())).then((e=>{F(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{k(e);const t=new URL(u).pathname.split("/"),o=t[t.length-1];O((e=>({...e,cssFile:o})))})),d&&d.forEach((function(e){const t=new URL(e),o=t.pathname.split("/"),n=o[o.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){D((o=>({...o,[e]:{fileName:e,code:t}})))}(n,e)}))})),q(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{M(!1)},te=e=>{if(N){const t=e.clientX-V;H+t>W/3&&(Q.current.style.width=`${H+t}px`,_.current.style.right=(J-t<25?25:J-t)+"px",P(J-t<25?25:J-t))}},oe=i.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ne=i.iv`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ie=i.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${w||"100%"};
    pointer-events: ${N?"none":"auto"};
  `,ae=i.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${z&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,re=i.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,se=i.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==y?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==y?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
    }

    summary {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before {
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary);
      }
    }
    .margin-top--md {
      margin-top: 0px !important;
    }
    ul {
      margin: -4px 0px !important;
    }
  `,le=i.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=i.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,x.BX)("div",{css:oe,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=y?(0,x.BX)("div",{onMouseEnter:()=>{T(!0)},onMouseLeave:()=>T(!1),css:ne,children:[(0,x.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.I)().colorMode,css:ie,ref:Q,onMouseMove:te}),(0,x.tZ)("div",{css:ae,ref:_,children:(0,x.tZ)(g,{url:t})}),(0,x.tZ)("div",{css:re,onMouseDown:e=>{e.preventDefault(),M(!0),G(e.clientX),X(Q.current?Q.current.offsetWidth:0),R(Y)},children:(0,x.tZ)(f.Z,{})})]}):null,(0,x.BX)(c.Z,{css:se,summary:(0,x.tZ)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[o&&a?(0,x.tZ)(b,{collapse:Z,setCollapse:E}):null,u?(0,x.BX)(s.Z,{css:le,children:[(0,x.tZ)(l.Z,{value:A?A[0]:"Java",label:A?A[0]:I.javaFile,default:!0,children:(0,x.tZ)(h.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:Z?j:L})}),Object.keys(C).map(((e,t)=>(0,x.tZ)(l.Z,{value:e,label:e,children:$(C[e],ce,p)},"tab"+t))),(0,x.tZ)(l.Z,{value:A?A[1]:"CSS",label:A?A[1]:I.cssFile,children:(0,x.tZ)(h.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:B})})]}):(0,x.BX)(s.Z,{css:le,children:[(0,x.tZ)(l.Z,{value:A?A[0]:"Java",label:A?A[0]:I.javaFile,default:!0,children:(0,x.tZ)(h.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:Z?j:L})}),Object.keys(C).map(((e,t)=>(0,x.tZ)(l.Z,{value:e,label:e,children:$(C[e],ce,p)},"tab"+t)))]})]})]})}},3273:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(7294),i=o(917),a=o(8230),r=o(4387),s=o(6031);var l=o(5944);function c(e){let{type:t,location:o,top:c,children:h,code:d,suffix:u}=e;const[p,m]=(0,n.useState)("");(0,n.useEffect)((()=>{u||(u=""),m("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+o+".html"+u)}),[]);const f=i.iv`
    display: inline;

    ${c&&i.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,x=i.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:f,children:(0,l.tZ)(a.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(r.Z,{css:x,label:"Java API",component:"a",href:p,icon:(0,l.tZ)(s.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!d&&(0,l.tZ)("div",{css:f,children:(0,l.tZ)("a",{href:p,target:"_blank",children:h})}),"true"!==c&&d&&(0,l.tZ)("div",{css:f,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:p,target:"_blank",children:h})})})]})}},1415:(e,t,o)=>{o.d(t,{Z:()=>a});o(7294);var n=o(8397),i=o(5893);function a(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Z,{...e})})}}}]);
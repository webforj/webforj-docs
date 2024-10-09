"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[4091],{6245:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(4848),s=i(8453);const r={sidebar_position:4,title:"NumberField",slug:"numberfield"},o=void 0,a={id:"components/fields/number-field",title:"NumberField",description:"The NumberField component can be used to accept numerical input from the user. It ensures that only valid numeric values are entered and provides a convenient interface for inputting numbers.",source:"@site/docs/components/fields/number-field.md",sourceDirName:"components/fields",slug:"/components/fields/numberfield",permalink:"/docs/components/fields/numberfield",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/fields/number-field.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"NumberField",slug:"numberfield"},sidebar:"documentationSidebar",previous:{title:"DateTimeField",permalink:"/docs/components/fields/datetimefield"},next:{title:"PasswordField",permalink:"/docs/components/fields/passwordfield"}},l={},c=[{value:"Usages",id:"usages",level:3},{value:"Maximum and Minimum",id:"maximum-and-minimum",level:3},{value:"Granularity",id:"granularity",level:3},{value:"Placeholder Text",id:"placeholder-text",level:3},{value:"Best Practices",id:"best-practices",level:3}];function d(e){const n={admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components},{ComponentDemo:i,DocChip:r,JavadocLink:o,ParentLink:a}=n;return i||m("ComponentDemo",!0),r||m("DocChip",!0),o||m("JavadocLink",!0),a||m("ParentLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,t.jsx)(r,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-field",clickable:!1,iconName:"code"}),"\n",(0,t.jsx)(o,{type:"foundation",location:"com/webforj/component/field/NumberField",top:"true"}),"\n",(0,t.jsx)(a,{parent:"Field"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"NumberField"})," component can be used to accept numerical input from the user. It ensures that only valid numeric values are entered and provides a convenient interface for inputting numbers."]}),"\n",(0,t.jsx)(i,{path:"https://demo.webforj.com/webapp/controlsamples/numberfielddemo?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/fields/numberfield/NumberFieldDemoView.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/fieldstyles/date_field_styles.css"}),"\n",(0,t.jsx)(n.h3,{id:"usages",children:"Usages"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"NumberField"})," is best used in scenarios where capturing or manipulating numerical data is crucial to the user interface or application functionality. Here are some examples of when to use the ",(0,t.jsx)(n.code,{children:"NumberField"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Numeric Input Forms"}),": When designing forms that require numeric inputs, using a ",(0,t.jsx)(n.code,{children:"NumberField"})," simplifies the input process for users. This is particularly useful for applications that collect user data or require numerical values."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data Analysis and Calculations"}),": A ",(0,t.jsx)(n.code,{children:"NumberField"})," will be particularly valuable in applications that involve data analysis, calculations, or mathematical operations. They enable users to input or manipulate numeric values accurately."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Financial and Budgeting Applications"}),": Applications that involve financial calculations, budgeting, or tracking expenses often require precise numeric inputs. A ",(0,t.jsx)(n.code,{children:"NumberField"})," ensures accurate entry of financial figures."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Measurement and Unit Conversion"}),": In applications that deal with measurements or unit conversions, the ",(0,t.jsx)(n.code,{children:"NumberField"})," is ideal for inputting numerical values with units such as length, weight, or volume."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"maximum-and-minimum",children:"Maximum and Minimum"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"setMax()"})," and ",(0,t.jsx)(n.code,{children:"setMin()"})," methods to specify the acceptable time range. If the value entered into the component is outside of the specified value, the component fails constraint validation. Also, if there is already a maximum or minimum set, the value given to the other method must be lower or higher respectively."]}),"\n",(0,t.jsx)(n.h3,{id:"granularity",children:"Granularity"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"setStep"})," method to specify the granularity that the value must adhere to when using arrow keys to modify the value. This will increment or decrement the component's value by a certain step each time. This does not apply when a user enters a value directly, but only when interacting with the ",(0,t.jsx)(n.code,{children:"NumberField"})," using the arrow keys."]}),"\n",(0,t.jsx)(n.h3,{id:"placeholder-text",children:"Placeholder Text"}),"\n",(0,t.jsxs)(n.p,{children:["You can set placeholder text for the ",(0,t.jsx)(n.code,{children:"NumberField"})," using the ",(0,t.jsx)(n.code,{children:"setPlaceholder"})," method. The placeholder text is displayed when the field is empty, helping to prompt the user to enter appropriate input into the ",(0,t.jsx)(n.code,{children:"NumberField"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"If the numeric input relates to a specific unit of measurement or has a particular context, provide clear labeling or additional information to guide users and ensure accurate input."})}),"\n",(0,t.jsx)(n.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(n.p,{children:["To ensure a seamless integration and optimal user experience, consider the following best practices when using the ",(0,t.jsx)(n.code,{children:"NumberField"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Consider Accessibility"}),": Utilize the NumberField component with accessibility in mind, adhering to accessibility standards such as proper labeling, keyboard navigation support, and compatibility with assistive technologies. Ensure that users with disabilities can interact with the NumberField effectively."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Utilize Increment/Decrement Buttons"}),": If appropriate for your application, consider utilizing increment and decrement buttons with the NumberField. This allows users to adjust the numeric value by a specific increment or decrement with a single click."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Handle Minimum and Maximum Values"}),": If your application requires limiting the numeric input range, incorporate validation and visual cues to indicate the acceptable minimum and maximum values. Prevent users from entering values outside the defined range."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
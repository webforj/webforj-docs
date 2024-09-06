---
title: ColumnsLayout
---

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';

<DocChip tooltipText="This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" component="a" href="../glossary#shadow-dom" target="_blank" clickable={true} iconName="shadow" />

<DocChip tooltipText="The name of the web component that will render in the DOM." label="dwc-columns-layout" clickable={false} iconName='code'/>

<JavadocLink type="foundation" location="com/webforj/component/layout/columnslayout" top='true'/>

The `ColumnsLayout` class provides a responsive layout that accommodates various screen sizes. It's typically used for building forms that dynamically change the content's arrangement. Using column layouts allows you to create responsive forms by configuring the number of columns and the content arrangement based on the layout’s width.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.columnslayoutdemos.ColumnsLayoutDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/columnslayoutdemos/ColumnsLayoutDemo.java'
height="450px"
/>

:::info

For laying out menu options, use the [`TabbedPane`](../components/TabbedPane) class.

:::

## Configuring columns

By default, components within a `ColumnsLayout` are arranged into two columns. When the layout's width is smaller than 40em, it switches to a single-column arrangement. This behavior happens because there are default breakpoints named `"small"` and  `"medium"`.

```java
//Default breakpoints for the ColumnsLayout class 
List<Breakpoint> DEFAULT_BREAKPOINTS = List.of(
    new Breakpoint("small", "20em", 1),
    new Breakpoint("medium", "40em", 2)
);
```

Adding your own list of breakpoints lets you control the number of columns at any given width.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.columnslayoutdemos.ColumnsLayoutChangingColumns' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/columnslayoutdemos/ColumnsLayoutChangingColumns.java'
height="150px"
/>

## Breakpoints

Each `Breakpoint` determines the number of columns within a range. The `ColumnsLayout` is responsive to a provided `List` of breakpoints. You can add a `List` of breakpoints during the construction of a `ColumnsLayout`, or afterward with the `setBreakpoints` method.

There are three parts to a breakpoint:

1. **Name (optional)**:
Naming a breakpoint allows you to reference it in future configurations, thereby altering the layout of a specific component exclusively at this breakpoint.

2. **Minimum width**:
Each breakpoint has a specific range that determines when its layout is applied. The minimum width is defined explicitly, and the next breakpoint determines the maximum width if it exists. You can use an integer to define the minimum width in pixels or use a `String` to specify other units such as vw, %, or em.

3. **Number of columns**:
Specify how many columns a breakpoint should have with this integer.

## Column spans

Components insde a columns layout can extend across multiple columns by changing the span. One span represents the horizontal width of a single column in the layout.

For example, say you have three columns and two components. If you want a component to extend across two columns, you could achieve that with the following:

```java
//Setting a component to extend across two columns
List<Breakpoint> breaks = List.of(
  new Breakpoint(0,1)
  new Breakpoint(500,3)
);

ColumnsLayout columnsLayout = new ColumnsLayout(breaks, componentOne, componentTwo);
columnsLayout.setSpan(componentTwo, 2);
```

:::tip

For further customization, a span can be set at specific breakpoints by referencing a breakpoint's name in the `setSpan` method:

```java
columnsLayout.setSpan(componentTwo, "breakpointName", 2);
```

:::

## Placing items in specific columns

When you have components that need to remain in specific columns, such as the submit and cancel buttons in the [Example form](#example-form), you can assign a column for a component to always appear in a designated column. Assigning a column doesn't alter the column order. Instead, empty spans are created until the component reaches the specified column.

```java
//Setting components in specific columns 
List<Breakpoint> breaks = List.of(
  new Breakpoint(0,1)
  new Breakpoint(500,3)
);

ColumnsLayout columnsLayout = new ColumnsLayout(breaks, componentOne, componentTwo);
columnsLayout.setColumn(componentTwo, 3);
```

:::tip

Just like spans, column placement can be set at specific breakpoints by referencing the name of the breakpoint.

```java
columnsLayout.setColumn(componentTwo, "breakpointName", 3);
```

:::

## Vertical and horizontal alignment

Columns layout provides robust alignment options, allowing for a single component or all the components within a `ColumnsLayout` to be aligned with `setHorizontalAlignment` and `setVerticalAlignment`. Here are the alignment options:

* `AUTO`
* `BASELINE`
* `CENTER`
* `END`
* `START`
* `STRETCH`

## Items spacing
The spacing between components within a columns layout is made with `setVerticalSpacing`, `setHorizontalSpacing`, or both with `setSpacing`. Just like setting the minimum width for a breakpoint, you can use an integer to define the spacing in pixels or a `String` to specify other units such as vw, %, or em.

## Example form

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.columnslayoutdemos.ColumnsLayoutFormDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/columnslayoutdemos/ColumnsLayoutFormDemo.java'
height="500px"
/>

:::tip
Using the [`FlexLayout`](../components/flex_layouts) class, you can achieve a similar layout.
:::
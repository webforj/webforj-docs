---
title: ColumnsLayout
---

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';

The <JavadocLink type="foundation" location="com/webforj/component/layout/columnslayout" code='true'>ColumnsLayout</JavadocLink> component provides a responsive layout with dynamic columns based on the width of the layout. It adjusts the number of columns automatically according to the specified breakpoints.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.columnslayoutdemos.ColumnsLayoutDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/columnslayoutdemos/ColumnsLayoutDemo.java'
height="450px"
/>

## Configuring Columns

By default, components within a `ColumnsLayout` are arranged into two columns. When the layout's width is smaller than 40em, it switches to a single-column arrangement. This behavior happens because there is a default `Breakpoint` named `"medium"`.

```java
Breakpoint("medium", "40em", 2)
```

## Breakpoints

A `ColumnsLayout` is responsive to a provided `List` of breakpoints, which changes the number of columns based on the layout's width.
You can add a `List` of breakpoints during the construction of a `ColumnsLayout` component, or afterward with the `setBreakpoints` method.

There are three parts to a breakpoint:

1. **Name (optional)**:
Naming a breakpoint enables you to reference it in future configurations, thereby altering the layout of a specific component exclusively at this breakpoint.

2. **Minimum width**:
This value establishes the starting point of a range that encompasses a breakpoint's behavior.
When given an `int` value, this can be in pixels, or a `String` for other units like vw, %, or em.

3. **Number of columns**:
Each breakpoint needs to have a specified number of columns.

The example below arranges the components into three columns when the layout is at least 500 pixels wide. Otherwise, the components are arranged into a single column.

```java
List<Breakpoint> breaks = List.of(
  new Breakpoint(0,1)
  new Breakpoint(500,3)
);

ColumnsLayout columnsLayout = new ColumnsLayout(breaks, componentOne, componentTwo, componentThree);
```

## Column Spans

A span is the horizontal section of one column. Changing the span for a component is telling it to take up multiple sections in a column layout.

For example, say you have three columns and two components. If you want a component to take up two sections (spans), you could achieve that with the following:

```java
List<Breakpoint> breaks = List.of(
  new Breakpoint(0,1)
  new Breakpoint(500,3)
);

ColumnsLayout columnsLayout = new ColumnsLayout(breaks, componentOne, componentTwo);
columnsLayout.setSpan(componentTwo, 2);
```

Spans can be set for specific breakpoints by refrencing the breakpoint's name in the `setSpan` method.

```java
columnsLayout.setSpan(componentTwo, "breakpointName", 2);
```

## Placing Items in Specific Columns

It's possible to assign a column for a component so it'll always be in a designated column. Designating a column doesn't change the order of the columns, but instead leaves empty spans until the component is in the specified column.

```java
List<Breakpoint> breaks = List.of(
  new Breakpoint(0,1)
  new Breakpoint(500,3)
);

ColumnsLayout columnsLayout = new ColumnsLayout(breaks, componentOne, componentTwo);
columnsLayout.setColumn(componentTwo, 3);
```

Just like spans, column placement can be set at specific breakpoints by referencing the name of the breakpoint.

```java
columnsLayout.setColumn(componentTwo, "breakpointName", 3);
```

## Items Vertical and Horizontal Alignments

Set the alignment for a single component or all the components within a `ColumnsLayout` with `setHoriontalAlignment` and `setVerticalAlignment`. Here are the following constants for alignment options:

* `START`
* `CENTER`
* `END`
* `STRETCH`
* `BASELINE`
* `AUTO`

## Items spacing
The spacing between columns is made with `setVerticalSpacing`, `setHorizontalSpacing`, or both with `setSpacing`. Just like setting the minimum width for a breakpoint, these methods can be in pixels when given an `int` value or a `String` for other units like vw, %, or em. 

## Example Form

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.columnslayoutdemos.ColumnsLayoutFormDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/columnslayoutdemos/ColumnsLayoutFormDemo.java'
height="500px"
/>

:::tip
Using the [`FlexLayout`](../components/flex_layouts) class, you can achieve a similar layout.
:::
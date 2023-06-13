---
sidebar_position: 50 
title: Label
---

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';

<div style={{width: "100%" , display: "flex", justifyContent: "flex-end"}}>
<p style={{color: "gray"}} >API:&nbsp;</p>
<b><a href="https://javadoc.io/static/org.dwcj/dwcj-engine/0.15.0/org/dwcj/controls/label/Label.html" style={{justifySelf: "flex-end"}}> Java </a></b>
</div>

The Label class is a Java class in the `org.dwcj.component.label` package. It is used to create a label object. Here's an example of how to create a Label object:

```java
Label myLabel = new Label("Hello, world!");
```

## Constructors

The `Label` class has three constructors:

1. `Label()`: Creates an empty label.
2. `Label(String text)`: Creates a label with the specified text.
3. `Label(String text, boolean wrap)`: Creates a label with the specified text and sets whether or not the text should be wrapped.

Here's an example of how to create a Label object using each constructor:

```java
// Creates an empty label.
Label emptyLabel = new Label();

// Creates a label with the specified text.
Label textLabel = new Label("Hello, world!");

// Creates a label with the specified text and sets whether or not the text should be wrapped.
Label wrappedLabel = new Label("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", true);

```

## Properties

The label's text can be set either at creation using the parameterized constructor, or by utilizing the inherited `setText()` method. 

### HTML Injection

In addition to using the label as static text, it can also be used as an HTML tag within your code. Simply set the label's text to the desired HTML tag with the various attributes, class names, etc, and
the label will be replaced with the desired HTML element.

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.labeldemos.LabelDemo' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/labeldemos/LabelDemo.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Demo.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/text_styles.css' 
javaHighlight='{16-18}'
height="250px"
/>

### Line Wrapping

To set whether or not the text should be wrapped, use the setWrap method:

```java
myLabel.setWrap(false);
```

<br />

### Alignment

The `Label` class implements the TextAlignable interface, which allows you to set the text alignment of the label. The possible alignment values are Alignment.LEFT, Alignment.MIDDLE, and Alignment.RIGHT. To set the alignment, use the setTextAlignment method:

```java
myLabel.setTextAlignment(Alignment.MIDDLE);
```

<!-- <ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.labeldemos.LabelAlignment' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/labeldemos/LabelAlignment.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Alignment.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/alignment_styles.css' 
javaHighlight='{43-45}'
/> -->


## Events

The `Label` class provides methods to add and remove event listeners for the following events:

- `MouseEnterEvent`
- `MouseExitEvent`
- `RightMouseDownEvent`

To add an event listener, use the appropriate method:

```java
myLabel.addMouseEnterListener( e -> {
  //Executed when the event fires
});
```

Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the `on` prefix followed by the event, such as:

```java
myLabel.onMouseEnter( e -> {
    //Executed when the event fires
});
```

To remove an event listener, use the appropriate method:

```java
myLabel.removeMouseEnterListener(listener);
```

:::info
For a method to be removed via the appropriate removeListener method, the signature of the method must be saved. 
:::

## Example

Here is an example of how to use the `Label` class to create a simple UI component which allows the user to hover over the text to change the message:

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.labeldemos.LabelSample' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/labeldemos/LabelSample.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Sample.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/text_styles.css' 
javaHighlight='{43-45}'
/>

<br/>
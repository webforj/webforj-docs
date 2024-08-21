---
title: "Toast"
---
import DocChip from '@site/src/components/DocsTools/DocChip';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';

<DocChip tooltipText="This component renders with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" component="a" href="../glossary#shadow-dom" target="_blank" clickable={true} iconName="shadow" />
<DocChip tooltipText="The name of the web component that will render in the DOM." label="dwc-toast" clickable={false} iconName='code'/>

<!-- Todo: Is it necessary to mention the dwc-toast-group that the dwc-toast is nested under? -->

<!-- Todo: Where are the Javadocs for Toast? -->
<!-- <JavadocLink type="foundation" location="com/webforj/component/toast/Toast" top='true'/> -->

The webforJ `Toast` component creates a subtle [pop-up notification](https://en.wikipedia.org/wiki/Pop-up_notification). Toast notifications disappear after a set amount of time and don't require a user response. They are typically used to provide feedback about operations or to display system messages.

## Usage

The easiest way to generate a Toast notification is the `Toast.show()` method. This method creates a Toast, adds it to the application's Frame, and displays it. The example below uses the `show()` method to create a toast notification when the user presses a button:

<!-- <ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.toastdemos.ToastDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/webcomponents/toast/ToastDemo.java'
height='175px'
/> -->

<ComponentDemo 
path='http://localhost:55002/webapp/controlsamples?class=componentdemos.toastdemos.ToastDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/webcomponents/toast/ToastDemo.java'
height='175px'
/>


## Duration

Toast notifications hide automatically after a specified duration, which defaults to 3000 milliseconds. You can set the duration in milliseconds with the `setDuration()` method or by supplying a duration parameter to the constructor or the `show()` method. If the duration is negative, the toast won't hide automatically. You can hide a Toast before its duration time ellapses with the `close()` method.

<!-- Duration Example -->
```java
Toast toast = new Toast("Sample Notification");
toast.setDuration(5000);
toast.open();
```

## Placement

By default, Toast notifications appear at the bottom center of the screen. You can set the placement of a Toast notification with the `setPlacement` method using the `Toast.Placement` enum with one of the following values: `BOTTOM`, `BOTTOM_LEFT`, `BOTTOM_RIGHT`, `TOP`, `TOP_LEFT`, `TOP_RIGHT`.

<!-- Placement example -->
```java
Toast toast = new Toast("Sample Notification");
toast.setPlacement(Toast.Placement.TOP_LEFT);
toast.open();
```

## Stacking

When multiple Toast notifications are displayed at the same time, they will display in a stacked queue. Newer notifications appear closer to the placement edge, pushing older notifications farther away.

## Actions and interactivity

By default, Toast notifications don't require user interaction and disappear after a set amount of time. However, you can add interactivity to toasts to make them more useful than simple notifications. By adding different components, such as buttons or other interactive elements, you can transform a toast notification into a valuable channel of interaction.

<!-- Actions and Interactivity Example -->

## Styling

You can style Toast notifications with themes just like other webforJ components. You can either set the theme when you create the Toast or use the `setTheme` method.
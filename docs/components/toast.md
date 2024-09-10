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

A `Toast` notification is a subtle and unobtrusive [pop-up notification](https://en.wikipedia.org/wiki/Pop-up_notification) designed to provide users with real-time feedback and information. These notifications are typically used to inform users about operations such as successful actions, warnings, or errors without interrupting their workflow. `Toast` notifications typically disappear after a set amount of time and don't require a user response.

With webforJ's `Toast` component, you can easily implement these notifications to enhance user experience by providing relevant information in a familiar, non-intrusive, and seamless manner. 

## Creating a toast notification

WebforJ provides a quick and easy way to create a Toast component in a single line of code with the `Toast.show()` method, which creates a `Toast` component, adds it to the `Frame`, and displays it. You can pass parameters to the `show` method to configure the displayed `Toast`:

```java
Toast.show("Operation completed successfully!", Theme.SUCCESS);
```

If you want more fine-grained control over the component, you can also create a `Toast` with a standard constructor and use the `open()` method to display it.

<!-- <ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.toastdemos.ToastDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/webcomponents/toast/ToastDemo.java'
height='200px'
/> -->

<!-- Todo: replace with URL of published demo -->
<ComponentDemo 
path='http://localhost:55002/webapp/controlsamples?class=componentdemos.toastdemos.ToastDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/webcomponents/toast/ToastDemo.java'
height='200px'
/>

## Stacking

The `Toast` component can display multiple notifications simultaneously, stacking them vertically based on their placement. Newer notifications appear closer to the placement edge, pushing older notifications farther away. This ensures that users don't miss important information, even when there is a lot going on.

## Duration

You can configure `Toast` notifications to disappear after a set duration or persist on the screen until they are dismissed, depending on your needs. By default, a `Toast` closes automatically after 3000 milliseconds. You can customize the duration with the `setDuration()` method, or simply supply a duration parameter to the constructor or the `show()` method.

```java
Toast toast = new Toast("Sample Notification");
toast.setDuration(5000);
toast.open();
```

### Persistent toasts

You can create a persistent `Toast` by setting a negative duration. Persistent `Toast` notifications won't close automatically, which can be useful for critical alerts or in cases where some interaction or acknowledgement is required from the user.

:::caution
Be careful with persistent `Toast` notifications, and make sure to provide a way for the user to dismiss the notification. Use the `close()` method to hide the `Toast` once the user has acknowledged it or completed any required interaction.
:::

## Placement

With webforJ's `Toast` component, you can choose where the notification appears on the screen to suit your app's design and usability requirements. By default, `Toast` notifications appear at the bottom center of the screen. 

You can set the placement of a Toast notification with the `setPlacement` method using the `Toast.Placement` enum with one of the following values: `BOTTOM`, `BOTTOM_LEFT`, `BOTTOM_RIGHT`, `TOP`, `TOP_LEFT`, `TOP_RIGHT`.

```java
Toast toast = new Toast("Sample Notification");
toast.setPlacement(Toast.Placement.TOP_LEFT);
toast.open();
```
<!-- Todo: Replace with URL of published demo -->
<ComponentDemo 
path='http://localhost:55002/webapp/controlsamples?class=componentdemos.toastdemos.ToastPlacement' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/webcomponents/toast/ToastPlacement.java'
height='200px'
/>

By customizing the placement of your `Toast` notifications, you can ensure that users receive information in a way that is appropriate for any given app, screen layout, and context.

## Actions and interactivity

Although `Toast` notifications don't require user interaction by default, webforJ allows you to add buttons or other interactive elements to make them more useful than simple notifications. By adding this kind of interactivity, you can give users the ability to handle tasks and perform actions without navigating away from their current screen, transforming a `Toast` notification into a valuable channel of interaction and engagement. 

<!-- Actions and Interactivity Example -->

## Styling

You can style `Toast` notifications with themes just like other webforJ components, providing users with valuable context about the type of information being shown, and creating a consistent style throughout your app. You can either set the theme when you create the Toast or use the `setTheme()` method.

<!-- Todo: Replace with URL of published demo -->
<ComponentDemo 
path='http://localhost:55002/webapp/controlsamples?class=componentdemos.toastdemos.ToastTheme' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/webcomponents/toast/ToastTheme.java'
height='200px'
/>
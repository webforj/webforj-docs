---
sidebar_position: 2
title: Loading and BusyIndicator
---

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import EventTable from '@site/src/components/DocsTools/EventTable';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import Chip from '@mui/material/Chip';

<DocChip tooltipText="This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" component="a" href="../glossary#shadow-dom" target="_blank" clickable={true} iconName="shadow" />


<DocChip tooltipText="The name of the web component that will render in the DOM." label="dwc-spinner" clickable={false} iconName='code'/>


<JavadocLink type="spinner" location="com/webforj/component/spinner/Spinner" top='true'/>

The `Loading` and `BusyIndicator` components in webforJ are designed to display overlays that indicate the system is processing an operation, temporarily blocking user interaction until the task is completed. These components are essential for improving user experience, particularly in scenarios where operations like data loading, computations, or background tasks may take some time.

Both components provide visual cues to ensure that users are aware of ongoing processes, preventing them from interacting with the system prematurely. 

## Basics

Creating both `Loading` and `BusyIndicator` components in a webforJ application involves a straightforward process. These components are used to display an overlay, signaling to users that the system is busy or processing an action.

The simplest way to create a `Loading` component is by initializing it without any additional settings. By default, this will display a basic spinner over its parent content. However, you can also provide a message for more context.

Here's an example of creating a `Loading` component with a message:

<ComponentDemo 
path='http://localhost:8888/webapp/controlsamples/componentdemos/loadingbusydemos/LoadingDemo'  
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/spinnerdemos/LoadingDemo.java'
height = '300px'
/>

The `BusyIndicator` in webforJ displays as a simple spinner, making it easy to use without configuration. However, you can customize it by adding a message, adjusting the spinner's theme, or modifying visibility settings. This allows you to provide more context or style while maintaining a functional, out-of-the-box solution.

<ComponentDemo 
path='http://localhost:8888/webapp/controlsamples/componentdemos/loadingbusydemos/BusyDemo'  
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/spinnerdemos/BusyDemo.java'
height = '300px'
/>

In this example, the `BusyIndicator` prevents any user actions across the entire interface until the operation is completed.

## Backdrops

Both the `Loading` and `BusyIndicator` components in webforJ allow you to display a backdrop to block user interaction while a process is ongoing. By default, both components enable the backdrop, but you have the option to disable it if needed.


For the `Loading` component, the backdrop is visible by default. You can explicitly enable or disable it using the `setBackdropVisible()` method:

```java
Loading loading = new Loading();
loading.setBackdropVisible(false);  // Disables the backdrop
loading.open();
```


Similarly, the `BusyIndicator` also shows a backdrop by default. You can control the visibility of the backdrop using the `setBackdropVisible()` method, as shown below:

```java
BusyIndicator busyIndicator = getBusyIndicator();
busyIndicator.setBackdropVisible(false);  // Disables the backdrop
busyIndicator.open();
```

Even when the backdrop is disabled, the `Loading` and `BusyIndicator` components will continue to block user interaction to ensure the underlying process completes uninterrupted. The backdrop simply controls the visual overlay, not the interaction blocking behavior.

## Scoping

The `Loading` component in webforJ can be scoped to a specific parent container, such as a `Div`, ensuring that it only blocks user interaction within that element. By default, the `Loading` component is relative to its parent, meaning it will only overlay the parent component rather than the entire application.

To limit the `Loading` component to its parent, simply add the `Loading` component to the parent container. For example, if you're adding it to a `Div`, the loading overlay will only apply to that `Div`:

```java
Div parentDiv = new Div();  
Loading loading = new Loading();
parentDiv.add(loading);
loading.open();  // Loading will only block interaction within the parentDiv
```

## `Spinner`

For both the `Loading` and `BusyIndicator` components in webforJ, the `Spinner` is an integral part that visually signals to users that an operation is ongoing. The `Spinner` provides feedback that the system is processing in the background, allowing users to understand that their action has been registered.


By default, the `Loading` component includes a spinner that shows users that a background operation is in progress. You can also customize the spinner with different settings, such as its visibility, size, and direction.

To integrate a spinner within a `Loading` component:

```java
Loading loading = new Loading("Loading data...");
// Customize the spinner
loading.getSpinner().setExpanse(SpinnerExpanse.LARGE).setClockwise(false);
loading.open();
```


The `BusyIndicator` component also includes a spinner by default, but it comes with a wider range of customization options, allowing you to modify the appearance and behavior of the spinner to fit your application’s requirements. You can change the spinner’s theme, size (expanse), speed, and direction.

Here’s an example of how to customize the spinner for a `BusyIndicator`:

```java
BusyIndicator busyIndicator = getBusyIndicator();
// Customize the spinner with theme, expanse, and speed
busyIndicator.getSpinner()
    .setTheme(Theme.PRIMARY)
    .setExpanse(SpinnerExpanse.LARGE)
    .setSpeed(1500);  // Speed in milliseconds
busyIndicator.setText("Processing...");
busyIndicator.open();
```


### Hiding the `Spinner`

Both the `Loading` component and `BusyIndicator` in webforJ include a spinner by default, which indicates that an operation is in progress. However, you can choose to hide the spinner while keeping the overlay and any accompanying text visible.

To hide the spinner in either component, simply use the `setVisible(false)` method on the spinner instance.

Example for Hiding the Spinner in `Loading`:

```java
Loading loading = new Loading("Processing...");
loading.getSpinner().setVisible(false);  // Hides the spinner
loading.open();
```

Example for Hiding the Spinner in `BusyIndicator`:

```java
BusyIndicator busyIndicator = getBusyIndicator();
busyIndicator.setText("Submitting form...");
busyIndicator.getSpinner().setVisible(false);  // Hides the spinner
busyIndicator.open();
```

In both cases, the spinner will no longer be displayed, but the overlay (and any provided message) will remain visible, continuing to block user interaction until the process is complete.






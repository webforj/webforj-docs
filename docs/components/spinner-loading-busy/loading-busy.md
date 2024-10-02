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


<DocChip tooltipText="The name of the web component that will render in the DOM." label="dwc-loading" clickable={false} iconName='code'/>


<JavadocLink type="loading" location="com/webforj/component/spinner/Loading" top='true'/>

The `Loading` and `BusyIndicator` components in webforJ are designed to display overlays that indicate the system is processing an operation, temporarily blocking user interaction until the task is completed. These components are essential for improving user experience, particularly in scenarios where operations like data loading, computations, or background tasks may take some time.

Both components provide visual cues to ensure that users are aware of ongoing processes, preventing them from interacting with the system prematurely. 

## Basics

Creating both `Loading` and `BusyIndicator` components in a webforJ application is a straightforward process.

The simplest way to create a `Loading` component is by initializing it without any additional settings. By default, this will display a basic spinner over its parent content. However, you can also provide a message for more context.

Here's an example of creating a `Loading` component with a message:

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.loadingbusydemos.LoadingDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/loadingbusydemos/LoadingDemo.java'
height = '300px'
/>

The `BusyIndicator` in webforJ displays as a simple spinner, making it easy to use without configuration. However, you can customize it by adding a message, adjusting the spinner's theme, or modifying visibility settings. This allows you to provide more context or style while maintaining a functional, out-of-the-box solution.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.loadingbusydemos.BusyDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/loadingbusydemos/BusyDemo.java'
height = '300px'
/>

In this example, the `BusyIndicator` prevents any user actions across the entire interface until the operation is completed.

### Scoping

The `Loading` component in webforJ can be scoped to a specific parent container, such as a `Div`, ensuring that it only blocks user interaction within that element. By default, the `Loading` component is relative to its parent, meaning it will only overlay the parent component rather than the entire application.

To limit the `Loading` component to its parent, simply add the `Loading` component to the parent container. For example, if you're adding it to a `Div`, the loading overlay will only apply to that `Div`:

```java
Div parentDiv = new Div();  
Loading loading = new Loading();
parentDiv.add(loading);
loading.open();  // Loading will only block interaction within the parentDiv
```

#### Difference from `BusyIndicator`

The `BusyIndicator` is typically used for global operations, covering the entire application interface, while the `Loading` component allows for more targeted usage. The `Loading` component can be scoped to specific areas, disabling interaction only within its parent, whereas the `BusyIndicator` blocks the entire interface until the process is complete."

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
:::info Backdrop Disabling
Even when the backdrop is disabled, the `Loading` and `BusyIndicator` components will continue to block user interaction to ensure the underlying process completes uninterrupted. The backdrop simply controls the visual overlay, not the interaction blocking behavior.
:::


## `Spinner`

In both the `Loading` and `BusyIndicator` components in webforJ, the `Spinner` visually indicates that a background operation is in progress. webforJ offers the same customization options for the `Spinner` in both components, including setting its size, speed, direction, theme, and visibility.


You can customize the spinner within a `Loading` component with several options, such as changing its size, direction, speed, theme, and controlling its visibility:

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.loadingbusydemos.LoadingSpinnerDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/loadingbusydemos/LoadingSpinnerDemo.java'
height = '200px'
/>

Similarly, the `BusyIndicator` component allows you to customize the spinner with the same options:

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.loadingbusydemos.BusySpinnerDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/loadingbusydemos/BusySpinnerDemo.java'
height = '200px'
/>

## Use Cases

### `Loading`

- **Data Fetching**  
   When retrieving data from a server or API, the `Loading` component is used to overlay a specific section of the UI, such as a card or form, to inform users that the system is working in the background. This is ideal when you want to show progress on just one part of the screen without blocking the entire interface.

- **Content Loading in Cards/Sections**  
   The `Loading` component can be scoped to specific areas of a page, such as individual cards or containers. This is useful when you want to indicate that a particular section of the UI is still loading while allowing users to interact with other parts of the page.

- **Complex Form Submissions**  
   For longer form submissions where validation or processing takes time, the `Loading` component provides visual feedback to users, reassuring them that their input is being processed.

### `BusyIndicator`

- **Page-Wide Processing**  
   The `BusyIndicator` is well-suited for larger, page-wide operations, such as when a user initiates a task that affects the entire page, like uploading a file or processing data across multiple sections. It can inform users that the entire app is working, preventing further interaction until the process is complete.

- **Critical System Operations**  
   When performing system-critical tasks such as syncing data, applying system-wide updates, or processing sensitive information, the `BusyIndicator` gives clear visual feedback that a major operation is ongoing, allowing the user to wait until it’s completed.

- **Asynchronous Data Loads**  
   In scenarios where asynchronous data processing is involved (e.g., when calling multiple APIs or waiting for complex computations), the `BusyIndicator` component provides a more global indication that the system is occupied and users should wait before performing additional actions.

## Styling 

### Shadow Parts

These are the various parts of the [shadow DOM](../../glossary#shadow-dom) for the component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').Loading} table='parts' exclusions=''/>

### CSS Properties

These are the various CSS properties that are used in the component, with a short description of their use.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').Loading} exclusions='' table='properties'/>

### Reflected Attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.


<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').Loading} table="reflects"/>


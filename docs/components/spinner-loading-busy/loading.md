---
sidebar_position: 2
title: Loading
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

The `Loading` component in webforJ displays an overlay that indicates the system is processing an operation, temporarily blocking user interaction until the task completes. This component enhances user experience, particularly in scenarios where operations like data loading, computations, or background tasks may take some time.

## Basics

Creating a `Loading` component in a webforJ app is a straightforward process.

The simplest way to create a `Loading` component is by initializing it without any additional settings. By default, this displays a basic spinner over its parent content. However, you can also provide a message for more context.

Here's an example of creating a `Loading` component with a message:

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.loadingbusydemos.LoadingDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/loadingbusydemos/LoadingDemo.java'
height = '300px'
/>

## Scoping

The `Loading` component in webforJ can scope itself to a specific parent container, such as a `Div`, ensuring that it only blocks user interaction within that element. By default, the `Loading` component is relative to its parent, meaning it overlays the parent component rather than the entire app.

To limit the `Loading` component to its parent, simply add the `Loading` component to the parent container. For example, if you add it to a `Div`, the loading overlay applies only to that `Div`:

```java
Div parentDiv = new Div();  
Loading loading = new Loading();
parentDiv.add(loading);
loading.open();  // Loading will only block interaction within the parentDiv
```

## Backdrop

The `Loading` component in webforJ allows you to display a backdrop to block user interaction while a process is ongoing. By default, the component enables the backdrop, but you have the option to turn it off if needed.

For the `Loading` component, the backdrop is visible by default. You can explicitly enable or turn off it using the `setBackdropVisible()` method:

```java
Loading loading = new Loading();
loading.setBackdropVisible(false);  // Disables the backdrop
loading.open();
```
:::info Backdrop Off
Even when you turn off the backdrop, the `Loading` component continues to block user interaction to ensure the underlying process completes uninterrupted. The backdrop simply controls the visual overlay, not the interaction blocking behavior.
:::

## `Spinner`

The `Loading` component in webforJ includes a `Spinner` that visually indicates a background operation is in progress. You can customize this spinner with several options, including its size, speed, direction, theme, and visibility.

Here's an example of how you can customize the spinner within a `Loading` component:

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.loadingbusydemos.LoadingSpinnerDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/loadingbusydemos/LoadingSpinnerDemo.java'
height = '200px'
/>

You can use methods like `setSpinnerSize()`, `setSpinnerSpeed()`, `setSpinnerClockwise()`, `setSpinnerTheme()`, and `setSpinnerVisible()` to adjust these properties of the spinner within your `Loading` component.

## Use cases
- **Data Fetching**  
   When retrieving data from a server or API, the `Loading` component overlays a specific section of the UI, such as a card or form, to inform users that the system is working in the background. This is ideal when you want to show progress on just one part of the screen without blocking the entire interface.

- **Content Loading in Cards/Sections**  
   The `Loading` component can be scoped to specific areas of a page, such as individual cards or containers. This is useful when you want to indicate that a particular section of the UI is still loading while allowing users to interact with other parts of the page.

- **Complex Form Submissions**  
   For longer form submissions where validation or processing takes time, the `Loading` component provides visual feedback to users, reassuring them that their input is actively processing.

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
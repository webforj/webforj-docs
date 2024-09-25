---
title: Spinner
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

A `Spinner` component provides a visual indicator that something is being processed or loaded in the background. It is often used to indicate that data or content is being fetched or when a process takes time to complete. The spinner offers user feedback, signaling that the system is actively working.

## Creating a Spinner

To create a `Spinner`, you can specify the theme and size (expanse). The basic syntax involves creating a `Spinner` instance and defining its appearance and behavior through methods such as `setTheme()` and `setExpanse()`.

<ComponentDemo 
path='http://localhost:8888/webapp/controlsamples?class=componentdemos.spinnerdemos.SpinnerDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/spinnerdemos/SpinnerDemo.java'
height = '100px'
/>

## Managing Speed and Pausing

### Adjusting Speed

You can control how fast the `Spinner` rotates by adjusting its speed using the `setSpeed()` method. A lower value will make the `Spinner` rotate faster, while higher values will slow it down.

```java
spinner.setSpeed(500); // Rotates faster
```

### Pausing and Resuming

To pause and resume the `Spinner`, use the `setPaused()` method. This is useful in situations where you might want to temporarily stop the spinning animation.

```java
spinner.setPaused(true);  // Pause the spinner
spinner.setPaused(false); // Resume the spinner
```

By default, the `Spinner` will take 1000 milliseconds to complete one full rotation.

This example shows how to go about setting the speed and how to pause/resume the `Spinner`:

<ComponentDemo 
path='http://localhost:8888/webapp/controlsamples?class=componentdemos.spinnerdemos.SpinnerSpeedDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/spinnerdemos/SpinnerSpeedDemo.java'
height = '150px'
/>

## Spin Direction

The direction of the `Spinner` can be controlled to rotate **clockwise** or **counterclockwise**. You can specify this behavior using the `setClockwise()` method.

```java
spinner.setClockwise(false);  // Rotates counterclockwise
spinner.setClockwise(true);   // Rotates clockwise
```

This option can be used to visually indicate a special state or simply as a unique design choice.

<ComponentDemo 
path='http://localhost:8888/webapp/controlsamples?class=componentdemos.spinnerdemos.SpinnerDirectionDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/spinnerdemos/SpinnerDirectionDemo.java'
height = '150px'
/>

## Styling

### Themes

The `Spinner` component comes with several built-in themes that allow you to quickly apply styles without needing custom CSS. These themes change the visual appearance of the spinner, making it appropriate for different use cases and contexts. Using these predefined themes ensures consistency in styling throughout your application.

While spinners can be used in a variety of situations, here are some example use cases for the different themes:

- **Primary**: Ideal for emphasizing a loading state that is a key part of the user flow, such as while submitting a form or processing an important action.
  
- **Success**: Useful to represent successful background processes, such as when a form has been submitted and the application is performing the final steps of the process.
  
- **Danger**: Applicable for risky or high-stakes operations, like deleting important data or making irreversible changes, where a visual indicator of urgency or caution is required.
  
- **Warning**: Good for indicating a cautionary or less urgent process, such as when the user is waiting for data validation, but no immediate action is required.

- **Gray**: Works well for subtle background processes, such as low-priority or passive loading tasks, like when fetching supplemental data that doesn’t directly impact the user experience.
  
- **Info**: Suitable for loading scenarios where additional information or clarification is being provided to the user, such as displaying a spinner alongside a message that explains what is being processed.

These themes can be applied programmatically to the spinner, providing visual cues that align with the context and importance of the operation.

You can specify this behavior using the `setTheme()` method.

<ComponentDemo 
path='http://localhost:8888/webapp/controlsamples?class=componentdemos.spinnerdemos.SpinnerThemeDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/spinnerdemos/SpinnerThemeDemo.java'
height = '100px'
/>

### Expanses

The size of the spinner, known as **expanse**, can be adjusted to fit the visual space you need. The spinner supports various sizes including `Expanse.SMALL` , `Expanse.MEDIUM` , and `Expanse.LARGE`. 

<ComponentDemo 
path='http://localhost:8888/webapp/controlsamples?class=componentdemos.spinnerdemos.SpinnerExpanseDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/spinnerdemos/SpinnerExpanseDemo.java'
height = '100px'
/>

### Shadow Parts

These are the various parts of the [shadow DOM](../../glossary#shadow-dom) for the component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').Spinner} table='parts' exclusions=''/>

### CSS Properties

These are the various CSS properties that are used in the component, with a short description of their use.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').Spinner} exclusions='' table='properties'/>

### Reflected Attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.


<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').Spinner} table="reflects"/>


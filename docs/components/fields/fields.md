---
sidebar_position: 0
title: Field
---

import componentData from '@site/static/field_data.js'
import ComponentViewer from '@site/src/components/PageTools/ComponentViewer'

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';

<JavadocLink type="engine" location="org/dwcj/component/field/AbstractField"/>

The DWCJ supports seven different types of field components, each with various behaviors and implementations that suit various
needs. While each of these components have variations in their implementations, there are commonalities amongst all of the 
field classes that will be described here.

:::info
This section describes common functionality amongst various field components in the DWCJ, and is not itself a class that can be instantiated and used.
:::

<!-- <ComponentViewer componentData={componentData} /> -->

- [`ColorField`](/docs/components/fields/colorfield)
- [`DateField`](/docs/components/fields/datefield)
- [`DateTimeField`](/docs/components/fields/datetimefield)
- [`NumberField`](/docs/components/fields/numberfield)
- [`PasswordField`](/docs/components/fields/passwordfield)
- [`TextField`](/docs/components/fields/textfield)
- [`TimeField`](/docs/components/fields/timefield)

## Shared Field Properties 

### Autocomplete

Specifies the browser's behavior regarding automatic form filling and completion. The available options include OFF, ON, and specific values for different types of autocomplete data such as names, addresses, and email addresses. The complete list of Enum values can be found in the Javadoc.

### Label

A field label is a descriptive text or title that is associated with the field. It provides a brief explanation or prompt to help users understand the purpose or expected input for that particular field. Field labels are not only important for usability but also play a crucial role in accessibility, as they enable screen readers and assistive technologies to provide accurate information and facilitate keyboard navigation.

### Required

A field is required when the user must provide a value before submitting a form. This is mainly used in conjunction with `setLabel(String)` to provide a visual indication to users that the field is required. 

:::info
Field components contain built-in visual validation which notifies users if a required field is empty, or has had values removed.
:::

### Spellcheck

By calling the `setSpellCheck(true)` method, you can enable the spellcheck feature for a field. This means that when a user enters text into the field, the browser or user agent may check the spelling of the entered text for errors.


## Shared Events

:::caution Notice
All field components share the following methods to add and remove event listeners for the following events
:::

| Events | Description |
|:-:|-|
|`BlurEvent`| An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page. |
|`FocusEvent`| An event that is triggered when an element gains focus, opposite of a blur event. It occurs when the user interacts with an element, typically by clicking inside an input field or navigating to it using the keyboard's tab key, causing the element to become active and ready to receive user input. |
|`KeypressEvent`| An event that is triggered when one of "special keys" is pressed while the component has focus. These keys have specific codes, allowing for conditional logic to be implemented based on the key pressed.|
|`ModifyEvent`| An event that is triggered when an is changed or modified. It typically occurs any time a user changes an aspect of the component, such as each time a letter is input or removed from an input component.|
|`MouseEnterEvent`| An event that is triggered when the mouse cursor enters the boundaries of an element. It occurs when the user moves the mouse pointer over the specified element, indicating that the mouse has entered its area. |
|`MouseExitEvent`| An event that is triggered when the mouse cursor exits the boundaries of an element. It occurs when the user moves the mouse pointer out of the boundaries of the specified element, indicating that the mouse has exited its area. |
|`RightMouseDownEvent`| An event refers to an event that is triggered when the user presses the right mouse button while the cursor is over an element. It allows you to capture the specific action of the user's right mouse button being pressed down within the boundaries of the element. |

:::tip
Using the event payload that comes with various events to attain information reduces the number of round trips made when instead querying the component for the required information. 
:::

## Parts and CSS Properties

:::caution Notice
As all field components are built from a singular web component, they will all share the
following Shadow Parts and CSS Property values
:::


### Shadow Parts

These are the various parts of the shadow DOM for the component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').Field}  table='parts'/>

### CSS Properties

These are the various CSS properties that are used in the component, with a short description of their use.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').Field}  table='properties'/>

### Reflected Attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').Field} table="reflects"/>
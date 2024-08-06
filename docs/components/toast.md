---
title: "Toast"
---
import DocChip from '@site/src/components/DocsTools/DocChip';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';


<DocChip tooltipText="This component renders with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" component="a" href="../glossary#shadow-dom" target="_blank" clickable={true} iconName="shadow" />
<DocChip tooltipText="The name of the web component that will render in the DOM." label="dwc-button" clickable={false} iconName='code'/>

<JavadocLink type="foundation" location="com/webforj/component/toast/Toast" top='true'/>

The webforJ `Toast` component creates a subtle [pop-up notification](https://en.wikipedia.org/wiki/Pop-up_notification). Toast notifications don't require a user response, and disappear after a set amount of time. They are typically used to provide feedback about operations or to display system messages.

## Usages

- 

## Duration

You can set the duration of a Toast notification in milliseconds on creation or with the `setDuration` method. The default duration is 3000 milliseconds.

## Placement

You can set the placement of a Toast notification on creation or with the `setPlacement` method. Set the placement using one of the following enum values: `bottom`, `bottom-left`, `bottom-right`, `top`, `top-left`, `top-right`. The default placement is `bottom`.

<!-- Placement example -->

## Stacking

When multiple Toast notifications are displayed at the same time, they will stack. Newer notifications appear closer to the placement edge, pushing older notifications farther away.

## Actions and Interactivity

By default, Toast notifications do not require user interaction, and will disappear after a set amount of time. However, you can add interactivity to toasts to enhance their functionality.

## Styling

Toast notifications can be styled with themese just like other webforJ components.
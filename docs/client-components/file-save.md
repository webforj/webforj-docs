---
sidebar_position: 0
title: <dwc-file-save>
sidebar_class_name: sidebar--item__hidden
slug: file-save
description: A user guide article for the file-save
// pagination_prev: null
// pagination_next: null
---

import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import DocChip from '@site/src/components/DocsTools/DocChip';

<DocChip chip='shadow' />

<br />

:::info CLIENT COMPONENT
This section outlines styling information for the **`<dwc-file-save>`** component. This component is **client side only** - it cannot be instantiated on its own via the API, but may make up part of API components.
:::

### Shadow Parts
These are the various parts of the shadow DOM for the component, which will be required when styling via CSS is desired.
<TableBuilder tag='dwc-file-save' table="parts"/>



### Reflected Attributes

  The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.
  
  <TableBuilder tag='dwc-file-save' table="reflects"/>

### Dependencies

  This component relies on the following components - see the related article for more detailed styling information:
  
  <TableBuilder tag='dwc-file-save' table="dependencies"/>
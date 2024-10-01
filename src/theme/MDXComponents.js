import React from 'react';
// Import Components here and add to the export list to include in global scope

import MDXComponents from '@theme-original/MDXComponents';
import AppLayoutViewer from '@site/src/components/DocsTools/AppLayoutViewer';
import ComponentBasics from '@site/src/components/DocsTools/ComponentBasics';
import ComponentCard from '@site/src/components/DocsTools/ComponentCard';
import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import DocChip from '@site/src/components/DocsTools/DocChip';
import EventTable from '@site/src/components/DocsTools/EventTable';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import ParentLink from '@site/src/components/DocsTools/ParentLink';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import TabSwitcher from '@site/src/components/DocsTools/TabSwitcher';

export default {
  ...MDXComponents,
  AppLayoutViewer,
  ComponentBasics,
  ComponentCard,
  ComponentDemo,
  DocChip,
  EventTable,
  JavadocLink,
  ParentLink,
  TableBuilder,
  TabSwitcher,
};


/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import Admonition from '@theme/Admonition';

export default function ComponentBasics(){
  let url = "https://documentation.webforj.com/docs/ui/basics"

  return (
    <div>
      <Admonition type="info" title="Component Basics">
        <p>See <a href={url}>Component Basics</a> for general information on using webforJ components.</p>
      </Admonition>
    </div>
  )
}
declare module '*.svg' {
    import { FunctionalComponent } from 'react';
    import { JSXInternal } from '@emotion/react';
    const content: FunctionalComponent<JSXInternal.SVGAttributes>;
    export default content;
  }
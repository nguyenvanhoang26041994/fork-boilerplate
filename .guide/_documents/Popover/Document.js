import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import DefaultVisible from './demo/DefaultVisible';
import Placement from './demo/Placement';
import SemanticPlacement from './demo/SemanticPlacement';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ DefaultVisible } />
         <Codebox className="mb-1" Component={ Placement } />
         <Codebox className="mb-1" Component={ SemanticPlacement } />
      </div>
      <div className="pl-1" style={ { flexBasis: '200px' } }>
        <Anchor
          top={75}
          style={ {
            backgroundColor: 'var(--rc-color--300)',
            height: 'calc(100vh - 75px',
            borderRadius: '0.5rem',
          } }
        >
           <Anchor.Link key={`#${ Basic.href}` } title={ Basic.header } />
           <Anchor.Link key={`#${ DefaultVisible.href}` } title={ DefaultVisible.header } />
           <Anchor.Link key={`#${ Placement.href}` } title={ Placement.header } />
           <Anchor.Link key={`#${ SemanticPlacement.href}` } title={ SemanticPlacement.header } />
        </Anchor>
      </div>
    </div>
  );
};

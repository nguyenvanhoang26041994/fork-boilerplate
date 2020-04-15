import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import ClickOutside from './demo/ClickOutside';
import Closable from './demo/Closable';
import Pure from './demo/Pure';
import Width from './demo/Width';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ ClickOutside } />
         <Codebox className="mb-1" Component={ Closable } />
         <Codebox className="mb-1" Component={ Pure } />
         <Codebox className="mb-1" Component={ Width } />
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
           <Anchor.Link key={`#${ Basic.href}` } title={ Basic.anchorTitle } />
           <Anchor.Link key={`#${ ClickOutside.href}` } title={ ClickOutside.anchorTitle } />
           <Anchor.Link key={`#${ Closable.href}` } title={ Closable.anchorTitle } />
           <Anchor.Link key={`#${ Pure.href}` } title={ Pure.anchorTitle } />
           <Anchor.Link key={`#${ Width.href}` } title={ Width.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};

import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Auto from './demo/Auto';
import Basic from './demo/Basic';
import Focus from './demo/Focus';
import Loop from './demo/Loop';
import Multiple from './demo/Multiple';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Auto } />
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Focus } />
         <Codebox className="mb-1" Component={ Loop } />
         <Codebox className="mb-1" Component={ Multiple } />
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
           <Anchor.Link key={`#${ Auto.href}` } title={ Auto.anchorTitle } />
           <Anchor.Link key={`#${ Basic.href}` } title={ Basic.anchorTitle } />
           <Anchor.Link key={`#${ Focus.href}` } title={ Focus.anchorTitle } />
           <Anchor.Link key={`#${ Loop.href}` } title={ Loop.anchorTitle } />
           <Anchor.Link key={`#${ Multiple.href}` } title={ Multiple.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};

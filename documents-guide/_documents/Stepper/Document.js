import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Complex from './demo/Complex';
import Icon from './demo/Icon';
import Semantic from './demo/Semantic';
import Static from './demo/Static';
import Vertical from './demo/Vertical';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Complex } />
         <Codebox className="mb-1" Component={ Icon } />
         <Codebox className="mb-1" Component={ Semantic } />
         <Codebox className="mb-1" Component={ Static } />
         <Codebox className="mb-1" Component={ Vertical } />
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
           <Anchor.Link key={`#${ Complex.href}` } title={ Complex.header } />
           <Anchor.Link key={`#${ Icon.href}` } title={ Icon.header } />
           <Anchor.Link key={`#${ Semantic.href}` } title={ Semantic.header } />
           <Anchor.Link key={`#${ Static.href}` } title={ Static.header } />
           <Anchor.Link key={`#${ Vertical.href}` } title={ Vertical.header } />
        </Anchor>
      </div>
    </div>
  );
};

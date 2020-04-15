import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Disabled from './demo/Disabled';
import Fluid from './demo/Fluid';
import Icon from './demo/Icon';
import WithBadge from './demo/WithBadge';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Disabled } />
         <Codebox className="mb-1" Component={ Fluid } />
         <Codebox className="mb-1" Component={ Icon } />
         <Codebox className="mb-1" Component={ WithBadge } />
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
           <Anchor.Link key={`#${ Disabled.href}` } title={ Disabled.header } />
           <Anchor.Link key={`#${ Fluid.href}` } title={ Fluid.header } />
           <Anchor.Link key={`#${ Icon.href}` } title={ Icon.header } />
           <Anchor.Link key={`#${ WithBadge.href}` } title={ WithBadge.header } />
        </Anchor>
      </div>
    </div>
  );
};

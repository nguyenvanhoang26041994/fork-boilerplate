import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Icon from './demo/Icon';
import Max from './demo/Max';
import Size from './demo/Size';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Icon } />
         <Codebox className="mb-1" Component={ Max } />
         <Codebox className="mb-1" Component={ Size } />
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
           <Anchor.Link key={`#${ Icon.href}` } title={ Icon.header } />
           <Anchor.Link key={`#${ Max.href}` } title={ Max.header } />
           <Anchor.Link key={`#${ Size.href}` } title={ Size.header } />
        </Anchor>
      </div>
    </div>
  );
};

import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Static from './demo/Static';
import Top from './demo/Top';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Static } />
         <Codebox className="mb-1" Component={ Top } />
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
           <Anchor.Link key={`#${ Static.href}` } title={ Static.anchorTitle } />
           <Anchor.Link key={`#${ Top.href}` } title={ Top.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};

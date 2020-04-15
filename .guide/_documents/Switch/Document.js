import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Controlled from './demo/Controlled';
import UnControlled from './demo/UnControlled';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Controlled } />
         <Codebox className="mb-1" Component={ UnControlled } />
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
           <Anchor.Link key={`#${ Controlled.href}` } title={ Controlled.header } />
           <Anchor.Link key={`#${ UnControlled.href}` } title={ UnControlled.header } />
        </Anchor>
      </div>
    </div>
  );
};

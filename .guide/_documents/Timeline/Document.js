import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import CustomIcon from './demo/CustomIcon';
import Reverse from './demo/Reverse';
import Right from './demo/Right';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ CustomIcon } />
         <Codebox className="mb-1" Component={ Reverse } />
         <Codebox className="mb-1" Component={ Right } />
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
           <Anchor.Link key={`#${ CustomIcon.href}` } title={ CustomIcon.header } />
           <Anchor.Link key={`#${ Reverse.href}` } title={ Reverse.header } />
           <Anchor.Link key={`#${ Right.href}` } title={ Right.header } />
        </Anchor>
      </div>
    </div>
  );
};

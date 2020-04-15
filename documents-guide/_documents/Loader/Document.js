import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Dot from './demo/Dot';
import Spinner from './demo/Spinner';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Dot } />
         <Codebox className="mb-1" Component={ Spinner } />
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
           <Anchor.Link key={`#${ Dot.href}` } title={ Dot.header } />
           <Anchor.Link key={`#${ Spinner.href}` } title={ Spinner.header } />
        </Anchor>
      </div>
    </div>
  );
};

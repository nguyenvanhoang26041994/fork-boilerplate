import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import AllSkeleton from './demo/AllSkeleton';
import BasicSkeleton from './demo/BasicSkeleton';
import ComplexSkeleton from './demo/ComplexSkeleton';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ AllSkeleton } />
         <Codebox className="mb-1" Component={ BasicSkeleton } />
         <Codebox className="mb-1" Component={ ComplexSkeleton } />
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
           <Anchor.Link key={`#${ AllSkeleton.href}` } title={ AllSkeleton.header } />
           <Anchor.Link key={`#${ BasicSkeleton.href}` } title={ BasicSkeleton.header } />
           <Anchor.Link key={`#${ ComplexSkeleton.href}` } title={ ComplexSkeleton.header } />
        </Anchor>
      </div>
    </div>
  );
};

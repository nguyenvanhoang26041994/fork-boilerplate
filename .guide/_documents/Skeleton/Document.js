import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import AllSkeleton from './demo/AllSkeleton';
import CircleSkeleton from './demo/CircleSkeleton';
import ParagraphSkeleton from './demo/ParagraphSkeleton';
import RectSkeleton from './demo/RectSkeleton';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ AllSkeleton } />
         <Codebox className="mb-1" Component={ CircleSkeleton } />
         <Codebox className="mb-1" Component={ ParagraphSkeleton } />
         <Codebox className="mb-1" Component={ RectSkeleton } />
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
           <Anchor.Link key={`#${ AllSkeleton.href}` } title={ AllSkeleton.anchorTitle } />
           <Anchor.Link key={`#${ CircleSkeleton.href}` } title={ CircleSkeleton.anchorTitle } />
           <Anchor.Link key={`#${ ParagraphSkeleton.href}` } title={ ParagraphSkeleton.anchorTitle } />
           <Anchor.Link key={`#${ RectSkeleton.href}` } title={ RectSkeleton.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};

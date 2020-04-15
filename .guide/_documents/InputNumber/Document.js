import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Disabled from './demo/Disabled';
import MinAndMax from './demo/MinAndMax';
import Step from './demo/Step';
import WithRef from './demo/WithRef';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Disabled } />
         <Codebox className="mb-1" Component={ MinAndMax } />
         <Codebox className="mb-1" Component={ Step } />
         <Codebox className="mb-1" Component={ WithRef } />
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
           <Anchor.Link key={`#${ Basic.href}` } title={ Basic.anchorTitle } />
           <Anchor.Link key={`#${ Disabled.href}` } title={ Disabled.anchorTitle } />
           <Anchor.Link key={`#${ MinAndMax.href}` } title={ MinAndMax.anchorTitle } />
           <Anchor.Link key={`#${ Step.href}` } title={ Step.anchorTitle } />
           <Anchor.Link key={`#${ WithRef.href}` } title={ WithRef.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};

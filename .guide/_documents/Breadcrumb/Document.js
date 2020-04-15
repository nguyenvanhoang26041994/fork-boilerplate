import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Redirect from './demo/Redirect';
import WithIcon from './demo/WithIcon';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Redirect } />
         <Codebox className="mb-1" Component={ WithIcon } />
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
           <Anchor.Link key={`#${ Redirect.href}` } title={ Redirect.anchorTitle } />
           <Anchor.Link key={`#${ WithIcon.href}` } title={ WithIcon.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};

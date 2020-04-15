import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import LineBasic from './demo/LineBasic';
import NoText from './demo/NoText';
import Size from './demo/Size';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ LineBasic } />
         <Codebox className="mb-1" Component={ NoText } />
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
           <Anchor.Link key={`#${ Basic.href}` } title={ Basic.anchorTitle } />
           <Anchor.Link key={`#${ LineBasic.href}` } title={ LineBasic.anchorTitle } />
           <Anchor.Link key={`#${ NoText.href}` } title={ NoText.anchorTitle } />
           <Anchor.Link key={`#${ Size.href}` } title={ Size.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};

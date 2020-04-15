import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import DirectionTitle from './demo/DirectionTitle';
import Icon from './demo/Icon';
import Text from './demo/Text';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ DirectionTitle } />
         <Codebox className="mb-1" Component={ Icon } />
         <Codebox className="mb-1" Component={ Text } />
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
           <Anchor.Link key={`#${ DirectionTitle.href}` } title={ DirectionTitle.anchorTitle } />
           <Anchor.Link key={`#${ Icon.href}` } title={ Icon.anchorTitle } />
           <Anchor.Link key={`#${ Text.href}` } title={ Text.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};

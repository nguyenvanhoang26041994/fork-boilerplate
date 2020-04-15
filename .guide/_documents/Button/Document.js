import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Color from './demo/Color';
import FluidGroupButton from './demo/FluidGroupButton';
import GroupButton from './demo/GroupButton';
import Popular from './demo/Popular';
import Size from './demo/Size';
import WithBadge from './demo/WithBadge';
import WithIcon from './demo/WithIcon';
import WithLoader from './demo/WithLoader';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Color } />
         <Codebox className="mb-1" Component={ FluidGroupButton } />
         <Codebox className="mb-1" Component={ GroupButton } />
         <Codebox className="mb-1" Component={ Popular } />
         <Codebox className="mb-1" Component={ Size } />
         <Codebox className="mb-1" Component={ WithBadge } />
         <Codebox className="mb-1" Component={ WithIcon } />
         <Codebox className="mb-1" Component={ WithLoader } />
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
           <Anchor.Link key={`#${ Color.href}` } title={ Color.header } />
           <Anchor.Link key={`#${ FluidGroupButton.href}` } title={ FluidGroupButton.header } />
           <Anchor.Link key={`#${ GroupButton.href}` } title={ GroupButton.header } />
           <Anchor.Link key={`#${ Popular.href}` } title={ Popular.header } />
           <Anchor.Link key={`#${ Size.href}` } title={ Size.header } />
           <Anchor.Link key={`#${ WithBadge.href}` } title={ WithBadge.header } />
           <Anchor.Link key={`#${ WithIcon.href}` } title={ WithIcon.header } />
           <Anchor.Link key={`#${ WithLoader.href}` } title={ WithLoader.header } />
        </Anchor>
      </div>
    </div>
  );
};

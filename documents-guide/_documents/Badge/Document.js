import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import CountUpAnimation from './demo/CountUpAnimation';
import CustomColor from './demo/CustomColor';
import Dot from './demo/Dot';
import Icon from './demo/Icon';
import Invisible from './demo/Invisible';
import OverflowCount from './demo/OverflowCount';
import Overlap from './demo/Overlap';
import Placement from './demo/Placement';
import SemanticProps from './demo/SemanticProps';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ CountUpAnimation } />
         <Codebox className="mb-1" Component={ CustomColor } />
         <Codebox className="mb-1" Component={ Dot } />
         <Codebox className="mb-1" Component={ Icon } />
         <Codebox className="mb-1" Component={ Invisible } />
         <Codebox className="mb-1" Component={ OverflowCount } />
         <Codebox className="mb-1" Component={ Overlap } />
         <Codebox className="mb-1" Component={ Placement } />
         <Codebox className="mb-1" Component={ SemanticProps } />
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
           <Anchor.Link key={`#${ CountUpAnimation.href}` } title={ CountUpAnimation.header } />
           <Anchor.Link key={`#${ CustomColor.href}` } title={ CustomColor.header } />
           <Anchor.Link key={`#${ Dot.href}` } title={ Dot.header } />
           <Anchor.Link key={`#${ Icon.href}` } title={ Icon.header } />
           <Anchor.Link key={`#${ Invisible.href}` } title={ Invisible.header } />
           <Anchor.Link key={`#${ OverflowCount.href}` } title={ OverflowCount.header } />
           <Anchor.Link key={`#${ Overlap.href}` } title={ Overlap.header } />
           <Anchor.Link key={`#${ Placement.href}` } title={ Placement.header } />
           <Anchor.Link key={`#${ SemanticProps.href}` } title={ SemanticProps.header } />
        </Anchor>
      </div>
    </div>
  );
};

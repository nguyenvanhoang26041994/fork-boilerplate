import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Dot from './demo/Dot';
import Icon from './demo/Icon';
import Invisible from './demo/Invisible';
import OverflowCount from './demo/OverflowCount';
import CustomColor from './demo/CustomColor';
import CountUpAnimation from './demo/CountUpAnimation';
import Overlap from './demo/Overlap';
import Placement from './demo/Placement';
import SemanticProps from './demo/SemanticProps';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Dot } />
         <Codebox className="mb-1" Component={ Icon } />
         <Codebox className="mb-1" Component={ Invisible } />
         <Codebox className="mb-1" Component={ OverflowCount } />
         <Codebox className="mb-1" Component={ CustomColor } />
         <Codebox className="mb-1" Component={ CountUpAnimation } />
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
           <Anchor.Link key={`#${ Basic.href}` } title={ Basic.anchorTitle } />
           <Anchor.Link key={`#${ Dot.href}` } title={ Dot.anchorTitle } />
           <Anchor.Link key={`#${ Icon.href}` } title={ Icon.anchorTitle } />
           <Anchor.Link key={`#${ Invisible.href}` } title={ Invisible.anchorTitle } />
           <Anchor.Link key={`#${ OverflowCount.href}` } title={ OverflowCount.anchorTitle } />
           <Anchor.Link key={`#${ CustomColor.href}` } title={ CustomColor.anchorTitle } />
           <Anchor.Link key={`#${ CountUpAnimation.href}` } title={ CountUpAnimation.anchorTitle } />
           <Anchor.Link key={`#${ Overlap.href}` } title={ Overlap.anchorTitle } />
           <Anchor.Link key={`#${ Placement.href}` } title={ Placement.anchorTitle } />
           <Anchor.Link key={`#${ SemanticProps.href}` } title={ SemanticProps.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};

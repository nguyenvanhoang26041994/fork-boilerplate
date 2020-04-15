import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Header from './demo/Header';
import Paragraph from './demo/Paragraph';
import Span from './demo/Span';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Header } />
         <Codebox className="mb-1" Component={ Paragraph } />
         <Codebox className="mb-1" Component={ Span } />
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
           <Anchor.Link key={`#${ Header.href}` } title={ Header.anchorTitle } />
           <Anchor.Link key={`#${ Paragraph.href}` } title={ Paragraph.anchorTitle } />
           <Anchor.Link key={`#${ Span.href}` } title={ Span.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};

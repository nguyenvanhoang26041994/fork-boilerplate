import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Closable from './demo/Closable';
import Content from './demo/Content';
import Custom from './demo/Custom';
import Duration from './demo/Duration';
import Pure from './demo/Pure';
import Push from './demo/Push';
import Semantic from './demo/Semantic';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Closable } />
         <Codebox className="mb-1" Component={ Content } />
         <Codebox className="mb-1" Component={ Custom } />
         <Codebox className="mb-1" Component={ Duration } />
         <Codebox className="mb-1" Component={ Pure } />
         <Codebox className="mb-1" Component={ Push } />
         <Codebox className="mb-1" Component={ Semantic } />
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
           <Anchor.Link key={`#${ Closable.href}` } title={ Closable.header } />
           <Anchor.Link key={`#${ Content.href}` } title={ Content.header } />
           <Anchor.Link key={`#${ Custom.href}` } title={ Custom.header } />
           <Anchor.Link key={`#${ Duration.href}` } title={ Duration.header } />
           <Anchor.Link key={`#${ Pure.href}` } title={ Pure.header } />
           <Anchor.Link key={`#${ Push.href}` } title={ Push.header } />
           <Anchor.Link key={`#${ Semantic.href}` } title={ Semantic.header } />
        </Anchor>
      </div>
    </div>
  );
};

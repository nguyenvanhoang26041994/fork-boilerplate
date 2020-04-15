import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Custom from './demo/Custom';
import Duration from './demo/Duration';
import Pure from './demo/Pure';
import Push from './demo/Push';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Custom } />
         <Codebox className="mb-1" Component={ Duration } />
         <Codebox className="mb-1" Component={ Pure } />
         <Codebox className="mb-1" Component={ Push } />
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
           <Anchor.Link key={`#${ Custom.href}` } title={ Custom.header } />
           <Anchor.Link key={`#${ Duration.href}` } title={ Duration.header } />
           <Anchor.Link key={`#${ Pure.href}` } title={ Pure.header } />
           <Anchor.Link key={`#${ Push.href}` } title={ Push.header } />
        </Anchor>
      </div>
    </div>
  );
};

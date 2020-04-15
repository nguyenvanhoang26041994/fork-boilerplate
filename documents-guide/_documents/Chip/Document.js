import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Avatar from './demo/Avatar';
import Basic from './demo/Basic';
import Closable from './demo/Closable';
import Custom from './demo/Custom';
import Size from './demo/Size';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Avatar } />
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Closable } />
         <Codebox className="mb-1" Component={ Custom } />
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
           <Anchor.Link key={`#${ Avatar.href}` } title={ Avatar.header } />
           <Anchor.Link key={`#${ Basic.href}` } title={ Basic.header } />
           <Anchor.Link key={`#${ Closable.href}` } title={ Closable.header } />
           <Anchor.Link key={`#${ Custom.href}` } title={ Custom.header } />
           <Anchor.Link key={`#${ Size.href}` } title={ Size.header } />
        </Anchor>
      </div>
    </div>
  );
};

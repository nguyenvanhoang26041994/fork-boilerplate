import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import NoImage from './demo/NoImage';
import Size from './demo/Size';
import WithOnline from './demo/WithOnline';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ NoImage } />
         <Codebox className="mb-1" Component={ Size } />
         <Codebox className="mb-1" Component={ WithOnline } />
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
           <Anchor.Link key={`#${ NoImage.href}` } title={ NoImage.header } />
           <Anchor.Link key={`#${ Size.href}` } title={ Size.header } />
           <Anchor.Link key={`#${ WithOnline.href}` } title={ WithOnline.header } />
        </Anchor>
      </div>
    </div>
  );
};

import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Accordion from './demo/Accordion';
import Basic from './demo/Basic';
import Controlled from './demo/Controlled';
import Disabled from './demo/Disabled';
import Icon from './demo/Icon';
import OnChangeEvent from './demo/OnChangeEvent';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Accordion } />
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Controlled } />
         <Codebox className="mb-1" Component={ Disabled } />
         <Codebox className="mb-1" Component={ Icon } />
         <Codebox className="mb-1" Component={ OnChangeEvent } />
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
           <Anchor.Link key={`#${ Accordion.href}` } title={ Accordion.header } />
           <Anchor.Link key={`#${ Basic.href}` } title={ Basic.header } />
           <Anchor.Link key={`#${ Controlled.href}` } title={ Controlled.header } />
           <Anchor.Link key={`#${ Disabled.href}` } title={ Disabled.header } />
           <Anchor.Link key={`#${ Icon.href}` } title={ Icon.header } />
           <Anchor.Link key={`#${ OnChangeEvent.href}` } title={ OnChangeEvent.header } />
        </Anchor>
      </div>
    </div>
  );
};

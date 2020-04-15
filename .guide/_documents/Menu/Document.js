import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Controlled from './demo/Controlled';
import Disabled from './demo/Disabled';
import Group from './demo/Group';
import Icon from './demo/Icon';
import IconOnly from './demo/IconOnly';
import Multiple from './demo/Multiple';
import Sub from './demo/Sub';
import SubInGroup from './demo/SubInGroup';
import TitleWithIconOnly from './demo/TitleWithIconOnly';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Controlled } />
         <Codebox className="mb-1" Component={ Disabled } />
         <Codebox className="mb-1" Component={ Group } />
         <Codebox className="mb-1" Component={ Icon } />
         <Codebox className="mb-1" Component={ IconOnly } />
         <Codebox className="mb-1" Component={ Multiple } />
         <Codebox className="mb-1" Component={ Sub } />
         <Codebox className="mb-1" Component={ SubInGroup } />
         <Codebox className="mb-1" Component={ TitleWithIconOnly } />
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
           <Anchor.Link key={`#${ Controlled.href}` } title={ Controlled.anchorTitle } />
           <Anchor.Link key={`#${ Disabled.href}` } title={ Disabled.anchorTitle } />
           <Anchor.Link key={`#${ Group.href}` } title={ Group.anchorTitle } />
           <Anchor.Link key={`#${ Icon.href}` } title={ Icon.anchorTitle } />
           <Anchor.Link key={`#${ IconOnly.href}` } title={ IconOnly.anchorTitle } />
           <Anchor.Link key={`#${ Multiple.href}` } title={ Multiple.anchorTitle } />
           <Anchor.Link key={`#${ Sub.href}` } title={ Sub.anchorTitle } />
           <Anchor.Link key={`#${ SubInGroup.href}` } title={ SubInGroup.anchorTitle } />
           <Anchor.Link key={`#${ TitleWithIconOnly.href}` } title={ TitleWithIconOnly.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};

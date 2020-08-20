import React from 'react';
import Markdown from '@@/.guide/Markdown';
import { Anchor } from '@@/fork-ui/src/components/core';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Tabs/demo/Basic';
import Underline from '@@/.guide/_documents/Tabs/demo/Underline';
import Controlled from '@@/.guide/_documents/Tabs/demo/Controlled';
import Disabled from '@@/.guide/_documents/Tabs/demo/Disabled';
import Fluid from '@@/.guide/_documents/Tabs/demo/Fluid';
import Icon from '@@/.guide/_documents/Tabs/demo/Icon';
import WithBadge from '@@/.guide/_documents/Tabs/demo/WithBadge';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/3">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Disabled } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ WithBadge } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Underline } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Fluid } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Controlled } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Icon } />
        </div>
      </div>
    </div>
  );
};

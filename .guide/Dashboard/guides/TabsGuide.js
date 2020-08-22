import React from 'react';
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
      <div className="w-full" style={ { paddingBottom: '1px' } }>
        <Codebox Component={ Basic } />
      </div>
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Disabled } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ WithBadge } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Controlled } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Underline } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Fluid } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Icon } />
        </div>
      </div>
    </div>
  );
};

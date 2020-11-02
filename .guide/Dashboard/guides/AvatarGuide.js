import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Avatar/demo/Avatar';
import Size from '@@/.guide/_documents/Avatar/demo/Size';
import WithOnline from '@@/.guide/_documents/Avatar/demo/WithOnline';
import NoImage from '@@/.guide/_documents/Avatar/demo/NoImage';
import WithTooltip from '@@/.guide/_documents/Avatar/demo/WithTooltip';
import AvatarGroup from '@@/.guide/_documents/Avatar/demo/AvatarGroup';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Size } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ NoImage } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AvatarGroup } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ WithOnline } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ WithTooltip } />
        </div>
      </div>
    </div>
  );
};

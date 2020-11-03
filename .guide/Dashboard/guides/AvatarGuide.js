import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Avatar/demo/Avatar';
import Size from '@@/.guide/_documents/Avatar/demo/Size';
import WithOnline from '@@/.guide/_documents/Avatar/demo/WithOnline';
import Color from '@@/.guide/_documents/Avatar/demo/Color';
import AvatarGroup from '@@/.guide/_documents/Avatar/demo/AvatarGroup';
import AvatarCustom from '@@/.guide/_documents/Avatar/demo/AvatarCustom';

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
          <Codebox Component={ Color } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ WithOnline } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AvatarGroup } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AvatarCustom } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

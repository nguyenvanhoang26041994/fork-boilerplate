import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Chip from '@@/.guide/_documents/Chip/demo/Chip';
import Closable from '@@/.guide/_documents/Chip/demo/Closable';
import CustomColor from '@@/.guide/_documents/Chip/demo/CustomColor';
import CustomBehavior from '@@/.guide/_documents/Chip/demo/CustomBehavior';
import Size from '@@/.guide/_documents/Chip/demo/Size';
import WithAvatarAndSize from '@@/.guide/_documents/Chip/demo/WithAvatarAndSize';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Chip } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Closable } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Size } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ WithAvatarAndSize } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CustomColor } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CustomBehavior } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Skeleton from '@@/.guide/_documents/Skeleton/demo/Skeleton';
import Animated from '@@/.guide/_documents/Skeleton/demo/Animated';
import CustomColor from '@@/.guide/_documents/Skeleton/demo/CustomColor';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Skeleton } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Animated } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CustomColor } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

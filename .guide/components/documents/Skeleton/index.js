import React from 'react';
import Codebox from '../../Codebox';

import Skeleton from './Skeleton';
import Animated from './Animated';
import CustomColor from './CustomColor';

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

import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Badge/demo/Basic';
import OverflowCount from '@@/.guide/_documents/Badge/demo/OverflowCount';
import Custom from '@@/.guide/_documents/Badge/demo/Custom';
import Overlap from '@@/.guide/_documents/Badge/demo/Overlap';
import Placement from '@@/.guide/_documents/Badge/demo/Placement';
import Color from '@@/.guide/_documents/Badge/demo/Color';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Overlap } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Color } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ OverflowCount } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Placement } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Custom } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

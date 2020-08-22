import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Badge/demo/Basic';
import Invisible from '@@/.guide/_documents/Badge/demo/Invisible';
import OverflowCount from '@@/.guide/_documents/Badge/demo/OverflowCount';
import CustomColor from '@@/.guide/_documents/Badge/demo/CustomColor';
import CountUpAnimation from '@@/.guide/_documents/Badge/demo/CountUpAnimation';
import Overlap from '@@/.guide/_documents/Badge/demo/Overlap';
import Placement from '@@/.guide/_documents/Badge/demo/Placement';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/3">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } defaultShowCode />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ OverflowCount } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Invisible } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Overlap } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CustomColor } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CountUpAnimation } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Placement } />
        </div>
      </div>
    </div>
  );
};

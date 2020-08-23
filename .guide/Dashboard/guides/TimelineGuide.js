import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Timeline/demo/Basic';
import CustomIcon from '@@/.guide/_documents/Timeline/demo/CustomIcon';
import Reverse from '@@/.guide/_documents/Timeline/demo/Reverse';
import Right from '@@/.guide/_documents/Timeline/demo/Right';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Reverse } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CustomIcon } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Right } />
        </div>
      </div>
    </div>
  );
};

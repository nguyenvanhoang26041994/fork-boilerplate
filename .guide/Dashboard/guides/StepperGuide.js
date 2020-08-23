import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Stepper/demo/Basic';
import Complex from '@@/.guide/_documents/Stepper/demo/Complex';
import Icon from '@@/.guide/_documents/Stepper/demo/Icon';
import Vertical from '@@/.guide/_documents/Stepper/demo/Vertical';

export default () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full" style={ { paddingBottom: '1px' } }>
        <Codebox Component={ Complex } defaultShowCode />
      </div>
      <div className="flex w-full">
        <div className="flex flex-col w-1/2">
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ Icon } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ Basic } />
          </div>
        </div>
        <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ Vertical } />
          </div>
        </div>
      </div>
    </div>
  );
};

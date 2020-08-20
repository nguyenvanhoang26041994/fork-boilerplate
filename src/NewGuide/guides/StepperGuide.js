import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Stepper/demo/Basic';
import Complex from '@@/.guide/_documents/Stepper/demo/Complex';
import Icon from '@@/.guide/_documents/Stepper/demo/Icon';
import Semantic from '@@/.guide/_documents/Stepper/demo/Semantic';
import Static from '@@/.guide/_documents/Stepper/demo/Static';
import Vertical from '@@/.guide/_documents/Stepper/demo/Vertical';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/3">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Semantic } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Complex } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Static } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Icon } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Vertical } />
        </div>
      </div>
    </div>
  );
};

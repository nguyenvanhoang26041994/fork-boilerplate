import React from 'react';
import Codebox from '../../Codebox';

import Basic from './Basic';
import Complex from './Complex';
import Icon from './Icon';
import Vertical from './Vertical';

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

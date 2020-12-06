import React from 'react';
import Codebox from '../../Codebox';

import Tabs from './Tabs';
import ButtonGroup from './ButtonGroup';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Tabs } defaultShowCode />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ ButtonGroup } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

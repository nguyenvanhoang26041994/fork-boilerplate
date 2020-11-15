import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Tabs from '@@/.guide/_documents/Tabs/demo/Tabs';
import CustomStyle from '@@/.guide/_documents/Tabs/demo/Custom';
import ButtonGroup from '@@/.guide/_documents/Tabs/demo/ButtonGroup';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Tabs } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ ButtonGroup } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CustomStyle } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

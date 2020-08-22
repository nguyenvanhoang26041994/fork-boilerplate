import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Controlled from '@@/.guide/_documents/Switch/demo/Controlled';
import Loading from '@@/.guide/_documents/Switch/demo/Loading';
import UnControlled from '@@/.guide/_documents/Switch/demo/UnControlled';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/3">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Controlled } defaultShowCode />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Loading } defaultShowCode />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ UnControlled } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Switch/demo/Basic';
import Controlled from '@@/.guide/_documents/Switch/demo/Controlled';
import Loading from '@@/.guide/_documents/Switch/demo/Loading';
import UnControlled from '@@/.guide/_documents/Switch/demo/UnControlled';
import Disabled from '@@/.guide/_documents/Switch/demo/Disabled';
import Size from '@@/.guide/_documents/Switch/demo/Size';
import Custom from '@@/.guide/_documents/Switch/demo/Custom';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Controlled } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ UnControlled } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Disabled } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Loading } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Size } />
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

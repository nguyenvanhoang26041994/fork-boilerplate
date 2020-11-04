import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Loader from '@@/.guide/_documents/Loader/demo/Loader';
import Dot from '@@/.guide/_documents/Loader/demo/Dot';
import Spinner from '@@/.guide/_documents/Loader/demo/Spinner';
import Wave from '@@/.guide/_documents/Loader/demo/Wave';
import CustomColor from '@@/.guide/_documents/Loader/demo/CustomColor';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Loader } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Dot } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Spinner } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Wave } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CustomColor } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Dot from '@@/.guide/_documents/Loader/demo/Dot';
import Spinner from '@@/.guide/_documents/Loader/demo/Spinner';
import Wave from '@@/.guide/_documents/Loader/demo/Wave';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full" style={ { paddingBottom: '1px' } }>
        <Codebox Component={ Dot } defaultShowCode />
      </div>
      <div className="w-full flex" style={ { paddingBottom: '1px' } }>
        <div className="flex flex-col w-1/2">
          <div className="w-full">
            <Codebox Component={ Spinner } defaultShowCode />
          </div>
        </div>
        <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
          <div className="w-full">
            <Codebox Component={ Wave } defaultShowCode />
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Pagination/demo/Basic';
import Max from '@@/.guide/_documents/Pagination/demo/Max';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } defaultShowCode />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Max } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

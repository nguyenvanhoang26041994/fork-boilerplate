import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Radio/demo/Basic';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-full">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

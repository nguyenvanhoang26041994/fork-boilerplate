import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Auto from '@@/.guide/_documents/Carousel/demo/Auto';
import Basic from '@@/.guide/_documents/Carousel/demo/Basic';
import Loop from '@@/.guide/_documents/Carousel/demo/Loop';

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
          <Codebox Component={ Loop } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Auto } />
        </div>
      </div>
    </div>
  );
};

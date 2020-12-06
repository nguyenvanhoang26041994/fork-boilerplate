import React from 'react';
import Codebox from '../../Codebox';

import Basic from './Basic';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-full">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } defaultShowCode/>
        </div>
      </div>
    </div>
  );
};

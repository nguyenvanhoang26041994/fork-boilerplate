import React from 'react';
import Codebox from '../../Codebox';

import Basic from './Basic';
import Blur from './Blur';
import Lazy from './Lazy';
import BlurSyncLazy from './BlurSyncLazy';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ BlurSyncLazy } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Blur } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Lazy } />
        </div>
      </div>
    </div>
  );
};

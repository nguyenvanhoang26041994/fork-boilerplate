import React from 'react';
import Codebox from '@@/.guide/Codebox';

import AbsoluteSpeedDial from '@@/.guide/_documents/SpeedDial/demo/AbsoluteSpeedDial';
import Basic from '@@/.guide/_documents/SpeedDial/demo/Basic';
import HorizontalDirection from '@@/.guide/_documents/SpeedDial/demo/HorizontalDirection';
import Placement from '@@/.guide/_documents/SpeedDial/demo/Placement';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/3">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AbsoluteSpeedDial } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Placement } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ HorizontalDirection } />
        </div>
      </div>
    </div>
  );
};

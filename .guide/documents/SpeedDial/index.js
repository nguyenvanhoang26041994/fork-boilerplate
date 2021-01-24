import React from 'react';
import Codebox from '../../Codebox';

import AbsoluteSpeedDial from './AbsoluteSpeedDial';
import Basic from './Basic';
import HorizontalDirection from './HorizontalDirection';
import Placement from './Placement';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AbsoluteSpeedDial } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Placement } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ HorizontalDirection } />
        </div>
      </div>
    </div>
  );
};

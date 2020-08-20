import React from 'react';
import Codebox from '@@/.guide/Codebox';

import AbsolutePopover from '@@/.guide/_documents/Popover/demo/AbsolutePopover';
import Basic from '@@/.guide/_documents/Popover/demo/Basic';
import Placement from '@@/.guide/_documents/Popover/demo/Placement';
import DefaultVisible from '@@/.guide/_documents/Popover/demo/DefaultVisible';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/3">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AbsolutePopover } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ DefaultVisible } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Placement } />
        </div>
      </div>
    </div>
  );
};

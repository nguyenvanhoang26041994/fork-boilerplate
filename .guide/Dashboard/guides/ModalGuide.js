import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Modal/demo/Basic';
import ClickOutside from '@@/.guide/_documents/Modal/demo/ClickOutside';
import Closable from '@@/.guide/_documents/Modal/demo/Closable';
import Width from '@@/.guide/_documents/Modal/demo/Width';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/3">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Width } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ ClickOutside } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Closable } />
        </div>
      </div>
    </div>
  );
};

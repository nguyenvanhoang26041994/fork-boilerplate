import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Accordion from '@@/.guide/_documents/Collapse/demo/Accordion';
import Basic from '@@/.guide/_documents/Collapse/demo/Basic';
import Controlled from '@@/.guide/_documents/Collapse/demo/Controlled';
import Disabled from '@@/.guide/_documents/Collapse/demo/Disabled';
import Icon from '@@/.guide/_documents/Collapse/demo/Icon';
import OnChangeEvent from '@@/.guide/_documents/Collapse/demo/OnChangeEvent';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/3">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Accordion } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Disabled } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Icon } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Controlled } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ OnChangeEvent } />
        </div>
      </div>
    </div>
  );
};

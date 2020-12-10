import React from 'react';
import Codebox from '../../Codebox';

import Basic from './Basic';
import WithLoopHelper from './WithLoopHelper';
import Static from './Static';
import Icon from './Icon';
import Size from './Size';
import CustomColor from './CustomColor';
import CustomWithIcon from './CustomWithIcon';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } defaultShowCode/>
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ WithLoopHelper } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Static } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Icon } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Size } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CustomColor } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CustomWithIcon } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

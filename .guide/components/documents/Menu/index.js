import React from 'react';
import Codebox from '../../Codebox';

import Sub from './Sub';
import Basic from './Basic';
import Controlled from './Controlled';
import Disabled from './Disabled';
import Group from './Group';
import HiddenItems from './HiddenItems';
import Icon from './Icon';
import IconOnly from './IconOnly';
import Multiple from './Multiple';
import SubInGroup from './SubInGroup';
import TitleWithIconOnly from './TitleWithIconOnly';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/3">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Sub } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Disabled } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Icon } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ SubInGroup } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Group } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ IconOnly } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ TitleWithIconOnly } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Controlled } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ HiddenItems } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Multiple } />
        </div>
      </div>
    </div>
  );
};

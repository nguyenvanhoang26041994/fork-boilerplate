import React from 'react';
import Markdown from '@@/.guide/Markdown';
import { Anchor } from '@@/fork-ui/src/components/core';
import Codebox from '@@/.guide/Codebox';

import Sub from '@@/.guide/_documents/Menu/demo/Sub';
import Basic from '@@/.guide/_documents/Menu/demo/Basic';
import Controlled from '@@/.guide/_documents/Menu/demo/Controlled';
import Disabled from '@@/.guide/_documents/Menu/demo/Disabled';
import Group from '@@/.guide/_documents/Menu/demo/Group';
import HiddenItems from '@@/.guide/_documents/Menu/demo/HiddenItems';
import Icon from '@@/.guide/_documents/Menu/demo/Icon';
import IconOnly from '@@/.guide/_documents/Menu/demo/IconOnly';
import Multiple from '@@/.guide/_documents/Menu/demo/Multiple';
import SubInGroup from '@@/.guide/_documents/Menu/demo/SubInGroup';
import TitleWithIconOnly from '@@/.guide/_documents/Menu/demo/TitleWithIconOnly';

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

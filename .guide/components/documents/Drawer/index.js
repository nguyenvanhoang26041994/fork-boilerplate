import React from 'react';
import Codebox from '../../Codebox';

import Basic from './Basic';
import ClickOutside from './ClickOutside';
import Closable from './Closable';
import Placement from './Placement';
import Width from './Width';
import Refresh from './Refresh';
import Footer from './Footer';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/3">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Refresh } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Placement } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ ClickOutside } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Width } />
        </div>
      </div>
      <div className="flex flex-col w-1/3" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Closable } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Footer } />
        </div>
      </div>
    </div>
  );
};

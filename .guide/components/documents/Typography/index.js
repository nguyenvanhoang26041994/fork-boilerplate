import React from 'react';
import Codebox from '../../Codebox';

import Typography from './Typography';
import Header from './Header';
import Span from './Span';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Typography } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Header } defaultShowCode />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Span } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

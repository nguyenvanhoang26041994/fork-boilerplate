import React from 'react';
import Codebox from '../../Codebox';

import Loader from './Loader';
import Dot from './Dot';
import Spinner from './Spinner';
import Wave from './Wave';
import CustomColor from './CustomColor';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Loader } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Dot } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Spinner } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Wave } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CustomColor } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

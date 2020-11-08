import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Custom from '@@/.guide/_documents/Pagination/demo/Custom';
import Max from '@@/.guide/_documents/Pagination/demo/Max';
import Pagination from '@@/.guide/_documents/Pagination/demo/Pagination';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Pagination } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Max } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Custom } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

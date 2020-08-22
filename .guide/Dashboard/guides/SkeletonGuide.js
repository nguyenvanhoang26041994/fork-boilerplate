import React from 'react';
import Codebox from '@@/.guide/Codebox';

import AllSkeleton from '@@/.guide/_documents/Skeleton/demo/AllSkeleton';
import CircleSkeleton from '@@/.guide/_documents/Skeleton/demo/CircleSkeleton';
import ParagraphSkeleton from '@@/.guide/_documents/Skeleton/demo/ParagraphSkeleton';
import RectSkeleton from '@@/.guide/_documents/Skeleton/demo/RectSkeleton';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ AllSkeleton } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ ParagraphSkeleton } defaultShowCode />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ CircleSkeleton } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ RectSkeleton } defaultShowCode />
        </div>
      </div>
    </div>
  );
};

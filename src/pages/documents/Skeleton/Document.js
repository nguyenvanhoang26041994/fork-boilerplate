import React from 'react';
import Codebox from '../../../others-component/Codebox';

import SkeletonStatic from './_demo/SkeletonStatic';
import SkeletonActive from './_demo/SkeletonActive';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" header="SKELETON ACTIVE" href="#">
          <SkeletonActive />
        </Codebox>
      </div>
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" header="SKELETON STATIC" href="#">
          <SkeletonStatic />
        </Codebox>
      </div>
    </div>
  );
};


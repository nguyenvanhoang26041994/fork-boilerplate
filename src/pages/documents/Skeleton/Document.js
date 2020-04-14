import React from 'react';
import Codebox from '../../../others-component/Codebox';

import AllSkeleton from './_demo/AllSkeleton';
import BasicSkeleton from './_demo/BasicSkeleton';
import ComplexSkeleton from './_demo/ComplexSkeleton';

export default () => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={BasicSkeleton} />
        <Codebox className="mb-2" Component={ComplexSkeleton} />
      </div>
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={AllSkeleton} />
      </div>
    </div>
  );
};


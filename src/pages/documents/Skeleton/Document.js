import React from 'react';
import Codebox from '../../../others-component/Codebox';

import AllSkeleton from './_demo/AllSkeleton';

export default () => {
  return (
    <div className="flex w-full">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={AllSkeleton} />
      </div>
    </div>
  );
};


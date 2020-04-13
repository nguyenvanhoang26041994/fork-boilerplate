import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Dot from './_demo/Dot';
import Spinner from './_demo/Spinner';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Dot} />
      </div>
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Spinner} />
      </div>
    </div>
  );
};


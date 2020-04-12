import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Dot from './_demo/Dot';
import Linear from './_demo/Linear';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Dot} />
      </div>
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Linear} />
      </div>
    </div>
  );
};


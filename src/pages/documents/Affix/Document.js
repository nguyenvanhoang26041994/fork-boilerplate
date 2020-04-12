import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Top from './_demo/Top';
import Bottom from './_demo/Bottom';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Top} />
      </div>
      <div className="w-1/2">
        <Codebox className="mb-2" Component={Bottom} />
      </div>
    </div>
  );
};


import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './demo/Basic';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="SLIDER" href="slider-basic" code={Basic.code}>
          <Basic />
        </Codebox>
      </div>
      <div className="w-2/3">
      </div>
    </div>
  );
};


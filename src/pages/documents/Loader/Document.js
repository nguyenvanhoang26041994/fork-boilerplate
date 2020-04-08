import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Dot from './demo/Dot';
import Linear from './demo/Linear';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" header="DOT" href="#" code={Dot.code}>
          <Dot />
        </Codebox>
      </div>
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" header="LINEAR" href="#" code={Linear.code}>
          <Linear />
        </Codebox>
      </div>
    </div>
  );
};


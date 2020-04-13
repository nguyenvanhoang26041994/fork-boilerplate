import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Dot from './demo/Dot';
import Spinner from './demo/Spinner';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" header="DOT" href="#" code={Dot.code}>
          <Dot />
        </Codebox>
      </div>
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" header="SPINNER" href="#" code={Spinner.code}>
          <Spinner />
        </Codebox>
      </div>
    </div>
  );
};


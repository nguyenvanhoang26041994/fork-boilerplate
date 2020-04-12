import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Top from './_demo/Top';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" header="BASIC" href="anchor-top" code={Top.code}>
          <Top />
        </Codebox>
      </div>
      <div className="w-1/2">
      </div>
    </div>
  );
};

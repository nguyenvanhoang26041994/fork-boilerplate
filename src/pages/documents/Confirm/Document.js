import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Pure from './_demo/Pure';
import Basic from './_demo/Basic';
import Push from './_demo/Push';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="PURE CONFIRM" href="confirm-pure" code={Pure.code}>
          <Pure />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="PUSH" href="confirm-push" code={Push.code}>
          <Push />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="BASIC" href="confirm-basic" code={Basic.code}>
          <Basic />
        </Codebox>
      </div>
    </div>
  );
};

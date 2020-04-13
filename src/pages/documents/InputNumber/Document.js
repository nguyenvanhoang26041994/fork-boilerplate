import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import WithRef from './_demo/WithRef';
import Disabled from './_demo/Disabled';
import MinAndMax from './_demo/MinAndMax';
import Step from './_demo/Step';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={WithRef} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={MinAndMax} />
        <Codebox className="mb-2" Component={Step} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={Disabled} />
      </div>
    </div>
  );
};


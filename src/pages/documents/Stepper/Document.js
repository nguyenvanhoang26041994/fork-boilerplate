import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Vertical from './_demo/Vertical';
import Static from './_demo/Static';
import Semantic from './_demo/Semantic';
import Complex from './_demo/Complex';
import IconDemo from './_demo/Icon';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={Vertical} />
        <Codebox className="mb-2" Component={IconDemo} />
      </div>
      <div className="w-1/2">
        <Codebox className="mb-2" Component={Complex} />
        <Codebox className="mb-2" Component={Static} />
        <Codebox className="mb-2" Component={Semantic} />
      </div>
    </div>
  );
};

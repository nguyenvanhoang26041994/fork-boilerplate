import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Controlled from './_demo/Controlled';
import WithRef from './_demo/WithRef';
import Disabled from './_demo/Disabled';
import NoEye from './_demo/NoEye';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={WithRef} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Controlled} />
        <Codebox className="mb-2" Component={NoEye} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={Disabled} />
      </div>
    </div>
  );
};


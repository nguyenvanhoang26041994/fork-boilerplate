import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import WithIcon from './_demo/WithIcon';
import Redirect from './_demo/Redirect';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Redirect} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={WithIcon} />
      </div>
    </div>
  );
};


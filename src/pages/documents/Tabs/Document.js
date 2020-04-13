import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Disabled from './_demo/Disabled';
import Fluid from './_demo/Fluid';
import IconDemo from './_demo/Icon';
import WithBadge from './_demo/WithBadge';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={IconDemo} />
        <Codebox className="mb-2" Component={WithBadge} />
      </div>
      <div className="w-1/2">
        <Codebox className="mb-2" Component={Fluid} />
        <Codebox className="mb-2" Component={Disabled} />
      </div>
    </div>
  );
};

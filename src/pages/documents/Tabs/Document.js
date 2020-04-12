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
        <Codebox className="mb-2" header="BASIC" href="tab-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="WITH ICON" href="tab-icon" code={IconDemo.code}>
          <IconDemo />
        </Codebox>
        <Codebox className="mb-2" header="WITH BADGE" href="tab-badge" code={WithBadge.code}>
          <WithBadge />
        </Codebox>
      </div>
      <div className="w-1/2">
        <Codebox className="mb-2" header="FLUID" href="tab-fluid" code={Fluid.code}>
          <Fluid />
        </Codebox>
        <Codebox className="mb-2" header="DISABLED" href="tab-disabled" code={Disabled.code}>
          <Disabled />
        </Codebox>
      </div>
    </div>
  );
};

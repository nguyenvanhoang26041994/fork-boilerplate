import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import IconDemo from './_demo/Icon';
import Group from './_demo/Group';
import Sub from './_demo/Sub';
import IconOnly from './_demo/IconOnly';
import Disabled from './_demo/Disabled';
import TitleWithIconOnly from './_demo/TitleWithIconOnly';
import Multiple from './_demo/Multiple';
import Controlled from './_demo/Controlled';
import SubInGroup from './_demo/SubInGroup';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={Controlled} />
        <Codebox className="mb-2" Component={Sub} />
        <Codebox className="mb-2" Component={Multiple} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Disabled} />
        <Codebox className="mb-2" Component={IconDemo} />
        <Codebox className="mb-2" Component={Group} />
        <Codebox className="mb-2" Component={SubInGroup} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={IconOnly} />
        <Codebox className="mb-2" Component={TitleWithIconOnly} />
      </div>
    </div>
  );
};


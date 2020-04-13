import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Disabled from './_demo/Disabled';
import Accordion from './_demo/Accordion';
import IconCustom from './_demo/Icon';
import Controlled from './_demo/Controlled';
import OnChangeEvent from './_demo/OnChangeEvent';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={Disabled} />
        <Codebox className="mb-2" Component={Controlled} />
      </div>
      <div className="w-1/2">
        <Codebox className="mb-2" Component={Accordion} />
        <Codebox className="mb-2" Component={IconCustom} />
        <Codebox className="mb-2" Component={OnChangeEvent} />
      </div>
    </div>
  );
};

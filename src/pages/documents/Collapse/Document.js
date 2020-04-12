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
        <Codebox className="mb-2" header="BASIC" href="collapse-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="DISABLED" href="collapse-disabled" code={Disabled.code}>
          <Disabled />
        </Codebox>
        <Codebox className="mb-2" header="CONTROLLED" href="collapse-controlled" code={Controlled.code}>
          <Controlled />
        </Codebox>
      </div>
      <div className="w-1/2">
        <Codebox className="mb-2" header="ACCORDION" href="collapse-accordion" code={Accordion.code}>
          <Accordion />
        </Codebox>
        <Codebox className="mb-2" header="WITH ICON" href="collapse-icon" code={IconCustom.code}>
          <IconCustom />
        </Codebox>
        <Codebox className="mb-2" header="ON PANELS CHANGE EVENT" href="collapse-change-event" code={OnChangeEvent.code}>
          <OnChangeEvent />
        </Codebox>
      </div>
    </div>
  );
};

import React from 'react';
import { Icon } from '@/components';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Reverse from './_demo/Reverse';
import Right from './_demo/Right';
import CustomIcon from './_demo/CustomIcon';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="timeline-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="RIGHT" href="timeline-right" code={Right.code}>
          <Right />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="CUSTOM ICON" href="timeline-custom-icon" code={CustomIcon.code}>
          <CustomIcon />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="REVERSE" href="timeline-reverse" code={Reverse.code}>
          <Reverse />
        </Codebox>
      </div>
    </div>
  );
};

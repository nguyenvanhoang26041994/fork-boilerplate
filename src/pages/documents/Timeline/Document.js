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
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={Right} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={CustomIcon} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={Reverse} />
      </div>
    </div>
  );
};

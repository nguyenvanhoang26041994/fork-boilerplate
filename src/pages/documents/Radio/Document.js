import React from 'react';
import { Icon } from '@/components';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
      </div>
      <div className="w-1/3">
      </div>
    </div>
  );
};

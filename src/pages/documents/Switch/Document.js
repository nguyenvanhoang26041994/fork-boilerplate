import React from 'react';
import { Icon } from '@/components';
import Codebox from '../../../others-component/Codebox';

import UnControlled from './_demo/UnControlled';
import Controlled from './_demo/Controlled';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={UnControlled} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={Controlled} />
      </div>
    </div>
  );
};

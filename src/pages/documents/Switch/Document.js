import React from 'react';
import { Icon } from '@/components';
import Codebox from '../../../others-component/Codebox';

import UnControlled from './demo/UnControlled';
import Controlled from './demo/Controlled';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="UNCONTROLLED" href="switch-uncontrolled" code={UnControlled.code} defaultExpanded>
          <UnControlled />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="CONTROLLED" href="switch-controlled" code={Controlled.code} defaultExpanded>
          <Controlled />
        </Codebox>
      </div>
    </div>
  );
};

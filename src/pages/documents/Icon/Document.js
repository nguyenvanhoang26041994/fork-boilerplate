import React from 'react';
import { Icon } from '@/components';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Color from './_demo/Color';
import Size from './_demo/Size';
import Collection from './_demo/Collection';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={Color} />
        <Codebox className="mb-2" Component={Size} />
      </div>
      <div className="w-2/3">
        <Codebox className="mb-2" Component={Collection} />
      </div>
    </div>
  );
};


import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Max from './_demo/Max';
import Size from './_demo/Size';
import IconDemo from './_demo/Icon';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={Size} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Max} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={IconDemo} />
      </div>
    </div>
  );
};


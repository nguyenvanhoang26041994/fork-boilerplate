import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Text from './_demo/Text';
import IconDemo from './_demo/Icon';
import DirectionTitle from './_demo/DirectionTitle';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={IconDemo} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Text} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={DirectionTitle} />
      </div>
    </div>
  );
};


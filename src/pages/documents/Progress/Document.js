import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import LineBasic from './_demo/LineBasic';
import Size from './_demo/Size';
import NoText from './_demo/NoText';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={Size} />
      </div>
      <div className="w-2/3">
        <Codebox className="mb-2" Component={LineBasic} />
        <Codebox className="mb-2" Component={NoText} />
      </div>
    </div>
  );
};


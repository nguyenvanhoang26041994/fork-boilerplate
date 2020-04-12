import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Required from './_demo/Required';
import Status from './_demo/Status';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Required} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={Status} />
      </div>
    </div>
  );
};

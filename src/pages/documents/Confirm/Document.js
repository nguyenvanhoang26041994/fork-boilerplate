import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Pure from './_demo/Pure';
import Basic from './_demo/Basic';
import Push from './_demo/Push';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Pure} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Push} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={Basic} />
      </div>
    </div>
  );
};

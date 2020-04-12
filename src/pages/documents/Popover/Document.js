import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Placement from './_demo/Placement';
import DefaultVisible from './_demo/DefaultVisible';
import SemanticPlacement from './_demo/SemanticPlacement';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={DefaultVisible} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Placement} />
        <Codebox className="mb-2" Component={SemanticPlacement} />
      </div>
      <div className="w-1/3">

      </div>
    </div>
  );
};


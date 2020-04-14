import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Auto from './_demo/Auto';
import Focus from './_demo/Focus';
import Loop from './_demo/Loop';
import Multiple from './_demo/Multiple';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={Focus} />
        <Codebox className="mb-2" Component={Loop} />
      </div>
      <div className="w-1/2">
        <Codebox className="mb-2" Component={Multiple} />
        <Codebox className="mb-2" Component={Auto} />
      </div>
    </div>
  );
};

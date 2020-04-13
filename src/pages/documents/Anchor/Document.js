import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Top from './_demo/Top';
import Static from './_demo/Static';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Top} />
      </div>
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Static} />
      </div>
    </div>
  );
};

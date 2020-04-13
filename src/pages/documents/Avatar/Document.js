import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Size from './_demo/Size';
import NoImage from './_demo/NoImage';
import WithOnline from './_demo/WithOnline';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={WithOnline} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={NoImage} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={Size} />
      </div>
    </div>
  );
};


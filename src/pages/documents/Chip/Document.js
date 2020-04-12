import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Closable from './_demo/Closable';
import Avatar from './_demo/Avatar';
import Size from './_demo/Size';
import Custom from './_demo/Custom';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={Avatar} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Closable} />
        <Codebox className="mb-2" Component={Size} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={Custom} />
      </div>
    </div>
  );
};


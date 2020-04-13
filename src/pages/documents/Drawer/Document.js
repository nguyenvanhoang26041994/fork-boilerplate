import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import ClickOutside from './_demo/ClickOutside';
import Placement from './_demo/Placement';
import Width from './_demo/Width';
import Closable from './_demo/Closable';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={Placement} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={ClickOutside} />
        <Codebox className="mb-2" Component={Width} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={Closable} />
      </div>
    </div>
  );
};

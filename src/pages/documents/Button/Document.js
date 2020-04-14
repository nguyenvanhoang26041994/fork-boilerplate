import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import GroupButton from './_demo/GroupButton';
import Color from './_demo/Color';
import Size from './_demo/Size';
import WithIcon from './_demo/WithIcon';
import WithBadge from './_demo/WithBadge';
import Popular from './_demo/Popular';
import FluidGroupButton from './_demo/FluidGroupButton';
import WithLoader from './_demo/WithLoader';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={Popular} />
        <Codebox className="mb-2" Component={GroupButton} />
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" Component={WithIcon} />
        <Codebox className="mb-2" Component={Color} />
        <Codebox className="mb-2" Component={WithBadge} />
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" Component={Size} />
        <Codebox className="mb-2" Component={FluidGroupButton} />
        <Codebox className="mb-2" Component={WithLoader} />
      </div>
    </div>
  );
};


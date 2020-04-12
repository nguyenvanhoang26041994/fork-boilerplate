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

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" {...Basic}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" {...Popular}>
          <Popular />
        </Codebox>
        <Codebox className="mb-2" {...GroupButton}>
          <GroupButton />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" {...WithIcon}>
          <WithIcon />
        </Codebox>
        <Codebox className="mb-2" {...Color}>
          <Color />
        </Codebox>
        <Codebox className="mb-2" {...WithBadge}>
          <WithBadge />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" {...Size}>
          <Size />
        </Codebox>
        <Codebox className="mb-2" {...FluidGroupButton}>
          <FluidGroupButton />
        </Codebox>
      </div>
    </div>
  );
};


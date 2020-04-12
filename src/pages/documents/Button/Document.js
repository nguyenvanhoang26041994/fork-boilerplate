import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './demo/Basic';
import GroupButton from './demo/GroupButton';
import Color from './demo/Color';
import Size from './demo/Size';
import WithIcon from './demo/WithIcon';
import WithBadge from './demo/WithBadge';
import Popular from './demo/Popular';
import FluidGroupButton from './demo/FluidGroupButton';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="button-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="POPULAR BUTTON" href="button-bg-color" code={Popular.code}>
          <Popular />
        </Codebox>
        <Codebox className="mb-2" header="GROUP BUTTON" href="button-group-button" code={GroupButton.code}>
          <GroupButton />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="WITH ICON" href="button-with-icon" code={WithIcon.code}>
          <WithIcon />
        </Codebox>
        <Codebox className="mb-2" header="COLOR" href="button-color" code={Color.code}>
          <Color />
        </Codebox>
        <Codebox className="mb-2" header="WITH BADGE" href="button-badge" code={WithBadge.code}>
          <WithBadge />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="SIZE" href="button-font-size" code={Size.code}>
          <Size />
        </Codebox>
        <Codebox className="mb-2" header="FLUID GROUP BUTTON" href="button-group-fluid" code={FluidGroupButton.code}>
          <FluidGroupButton />
        </Codebox>
      </div>
    </div>
  );
};


import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './demo/Basic';
import Placement from './demo/Placement';
import DefaultVisible from './demo/DefaultVisible';
import SemanticPlacement from './demo/SemanticPlacement';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="popover-basic" code={Basic.code} description={Basic.description}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="DEFAULT VISIBLE" href="popover-default-visible" code={DefaultVisible.code}>
          <DefaultVisible />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="PLACEMENT" href="popover-basic" code={Placement.code}>
          <Placement />
        </Codebox>
        <Codebox className="mb-2" header="SEMANTIC PLACEMENT" href="popover-semantic-placement" code={SemanticPlacement.code} description={SemanticPlacement.description}>
          <SemanticPlacement />
        </Codebox>
      </div>
      <div className="w-1/3">

      </div>
    </div>
  );
};


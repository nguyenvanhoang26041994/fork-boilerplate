import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Text from './_demo/Text';
import IconDemo from './_demo/Icon';
import DirectionTitle from './_demo/DirectionTitle';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="divider-basic" code={Basic.code} description={Basic.description}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="WITH ICON" href="divider-with-icon" code={IconDemo.code}>
          <IconDemo />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="TEXT" href="divider-text" code={Text.code}>
          <Text />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="DIRECTION OF TITLE" href="divider-direction" code={DirectionTitle.code}>
          <DirectionTitle />
        </Codebox>
      </div>
    </div>
  );
};


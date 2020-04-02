import React from 'react';
import { Icon } from 'rc-neumorphism';
import Codebox from '../../../others-component/Codebox';

import Basic from './demo/Basic';
import Color from './demo/Color';
import Size from './demo/Size';
import Collection from './demo/Collection';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="icon-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="COLOR" href="icon-color" code={Color.code}>
          <Color />
        </Codebox>
        <Codebox className="mb-2" header="SIZE" href="icon-size" code={Size.code}>
          <Size />
        </Codebox>
      </div>
      <div className="w-2/3">
        <Codebox className="mb-2" header="COLLECTION" href="icon-collection">
          <Collection />
        </Codebox>
      </div>
    </div>
  );
};


import React from 'react';
import cn from 'classnames';

import { Badge } from '@@/fork-ui/src/components/core';
import FancyBox from '@@/.guide/shared/FancyBox';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <FancyBox hidden className="m-5" />
        <Badge.Counter count={7} topLeft className="m-5">
          <FancyBox>TL</FancyBox>
        </Badge.Counter>
        <Badge.Counter count={7} top className="m-5">
          <FancyBox>T</FancyBox>
        </Badge.Counter>
        <Badge.Counter count={7} topRight className="m-5">
          <FancyBox>TR</FancyBox>
        </Badge.Counter>
        <FancyBox hidden className="m-5" />
      </div>

      <div className="flex">
        <Badge.Counter count={7} leftTop className="m-5">
          <FancyBox>LT</FancyBox>
        </Badge.Counter>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge.Counter count={7} placement="right-top" className="m-5">
          <FancyBox>RT</FancyBox>
        </Badge.Counter>
      </div>

      <div className="flex">
        <Badge.Counter count={7} left className="m-5">
          <FancyBox>L</FancyBox>
        </Badge.Counter>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge.Counter count={7} right className="m-5">
          <FancyBox>R</FancyBox>
        </Badge.Counter>
      </div>

      <div className="flex">
        <Badge.Counter count={7} leftBottom className="m-5">
          <FancyBox>LB</FancyBox>
        </Badge.Counter>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge.Counter count={7} rightBottom className="m-5">
          <FancyBox>RB</FancyBox>
        </Badge.Counter>
      </div>

      <div className="flex">
        <FancyBox hidden className="m-5" />
        <Badge.Counter count={7} bottomLeft className="m-5">
          <FancyBox>BL</FancyBox>
        </Badge.Counter>
        <Badge.Counter count={7} bottom className="m-5">
          <FancyBox>B</FancyBox>
        </Badge.Counter>
        <Badge.Counter count={7} bottomRight className="m-5">
          <FancyBox>BR</FancyBox>
        </Badge.Counter>
        <FancyBox hidden className="m-5" />
      </div>
    </div>
  );
};

export default Demo;

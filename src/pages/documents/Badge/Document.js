import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Placement from './_demo/Placement';
import Overlap from './_demo/Overlap';
import Dot from './_demo/Dot';
import CountUpAnimation from './_demo/CountUpAnimation';
import CustomColor from './_demo/CustomColor';
import OverflowCount from './_demo/OverflowCount';
import Invisible from './_demo/Invisible';
import SemanticProps from './_demo/SemanticProps';
import IconBadge from './_demo/Icon';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="badge-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="ICON BADGE" href="badge-icon" code={IconBadge.code}>
          <IconBadge />
        </Codebox>
        <Codebox className="mb-2" header="CUSTOM COLOR" href="badge-color" code={CustomColor.code}>
          <CustomColor />
        </Codebox>
        <Codebox className="mb-2" header="DOT" href="badge-animation" code={Dot.code}>
          <Dot />
        </Codebox>
        <Codebox className="mb-2" header="Overflow Count" href="badge-overflow" code={OverflowCount.code}>
          <OverflowCount />
        </Codebox>
        <Codebox className="mb-2" header="INVISIBLE" href="badge-invisible" code={Invisible.code}>
          <Invisible />
        </Codebox>
        <Codebox className="mb-2" header="COUNT UP ANIMATION" href="badge-dot" code={CountUpAnimation.code}>
          <CountUpAnimation />
        </Codebox>
      </div>
      <div className="w-2/3">
        <Codebox className="mb-2" header="PLACEMENT" href="badge-placement" code={Placement.code}>
          <Placement />
        </Codebox>
        <Codebox className="mb-2" header="OVERLAP" href="badge-overlap" code={Overlap.code}>
          <Overlap />
        </Codebox>
        <Codebox className="mb-2" header="SEMANTIC PLACEMENT" href="badge-semantic" code={SemanticProps.code} description={SemanticProps.description}>
          <SemanticProps />
        </Codebox>
      </div>
    </div>
  );
};


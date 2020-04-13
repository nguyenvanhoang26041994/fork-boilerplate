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
        <Codebox className="mb-2" Component={Basic} />
        <Codebox className="mb-2" Component={IconBadge} />
        <Codebox className="mb-2" Component={CustomColor} />
        <Codebox className="mb-2" Component={Dot} />
        <Codebox className="mb-2" Component={OverflowCount} />
        <Codebox className="mb-2" Component={Invisible} />
        <Codebox className="mb-2" Component={CountUpAnimation} />
      </div>
      <div className="w-2/3">
        <Codebox className="mb-2" Component={Placement} />
        <Codebox className="mb-2" Component={Overlap} />
        <Codebox className="mb-2" Component={SemanticProps} />
      </div>
    </div>
  );
};


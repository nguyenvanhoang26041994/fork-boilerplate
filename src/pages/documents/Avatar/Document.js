import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Size from './_demo/Size';
import NoImage from './_demo/NoImage';
import WithOnline from './_demo/WithOnline';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="avatar-basic" code={Basic.code} description={Basic.description}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="ONLINE" href="avatar-online" code={WithOnline.code}>
          <WithOnline />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="WITHOUT AVATAR" href="avatar-no-image" code={NoImage.code}>
          <NoImage />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="SIZE" href="avatar-size" code={Size.code}>
          <Size />
        </Codebox>
      </div>
    </div>
  );
};


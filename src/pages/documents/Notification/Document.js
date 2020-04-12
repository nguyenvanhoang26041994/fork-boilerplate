import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Pure from './_demo/Pure';
import Basic from './_demo/Basic';
import Push from './_demo/Push';
import Duration from './_demo/Duration';
import Custom from './_demo/Custom';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="PURE NOTIFICATION" href="notification-pure" code={Pure.code}>
          <Pure />
        </Codebox>
        <Codebox className="mb-2" header="BASIC" href="notification-basic" code={Basic.code}>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="PUSH" href="notification-push" code={Push.code}>
          <Push />
        </Codebox>
        <Codebox className="mb-2" header="CUSTOM CLOSE BEHAVIOR" href="notification-custom" code={Custom.code}>
          <Custom />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="AUTO CLOSE" href="notification-duration" code={Duration.code}>
          <Duration />
        </Codebox>
      </div>
    </div>
  );
};

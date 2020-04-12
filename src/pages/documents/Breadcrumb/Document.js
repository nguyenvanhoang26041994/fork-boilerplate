import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import WithIcon from './_demo/WithIcon';
import Redirect from './_demo/Redirect';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="breadcrumd-basic" code={Basic.code} defaultExpanded>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="WITH REDIRECT" href="breadcrumd-with-redirect" code={Redirect.code} defaultExpanded>
          <Redirect />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="WITH ICON" href="breadcrumd-with-icon" code={WithIcon.code} defaultExpanded>
          <WithIcon />
        </Codebox>
      </div>
    </div>
  );
};


import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import ClickOutside from './_demo/ClickOutside';
import Width from './_demo/Width';
import Closable from './_demo/Closable';
import Pure from './_demo/Pure';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="PURE MODAL" href="modal-pure" code={Pure.code}>
          <Pure />
        </Codebox>
        <Codebox className="mb-2" header="BASIC" href="modal-basic" code={Basic.code}>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="CLOSE CLICK OUTSIDE" href="modal-click-outside" code={ClickOutside.code}>
          <ClickOutside />
        </Codebox>
        <Codebox className="mb-2" header="WIDTH" href="modal-width" code={Width.code}>
          <Width />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="CLOSABLE" href="modal-closable" code={Closable.code}>
          <Closable />
        </Codebox>
      </div>
    </div>
  );
};

import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Header from './_demo/Header';
import Span from './_demo/Span';
import Paragraph from './_demo/Paragraph';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Header} />
        <Codebox className="mb-2" Component={Span} />
      </div>
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" Component={Paragraph} />
      </div>
    </div>
  );
};

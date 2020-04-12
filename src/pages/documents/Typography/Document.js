import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Header from './_demo/Header';
import Span from './_demo/Span';
import Paragraph from './_demo/Paragraph';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" header="HEADER" href="typography-header" code={Header.code}>
          <Header />
        </Codebox>
        <Codebox className="mb-2" header="SPAN" href="typography-span" code={Span.code}>
          <Span />
        </Codebox>
      </div>
      <div className="w-1/2 pr-2">
        <Codebox header="PARAGRAPH" href="typography-paragraph" code={Paragraph.code}>
          <Paragraph />
        </Codebox>
      </div>
    </div>
  );
};


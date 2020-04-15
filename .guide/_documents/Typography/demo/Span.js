import React from 'react';
import { Typo } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <Typo>Typo Span</Typo>
        <Typo underline>
          Typo Underline
        </Typo>
        <Typo disabled>
          Typo Disabled
        </Typo>
        <Typo through>
          Typo Line-Through
        </Typo>
        <Typo strong>
          Typo Strong
        </Typo>
        <Typo italic>
          Typo Italic
        </Typo>
        <Typo color="#d800ff">
          Typo Color
        </Typo>
      </div>
    </div>
  );
};

export default Demo;
Demo.header = 'Span';
Demo.href = 'typography-span';

Demo.code = `import React from 'react';
import { Typo } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <Typo>Typo Span</Typo>
        <Typo underline>
          Typo Underline
        </Typo>
        <Typo disabled>
          Typo Disabled
        </Typo>
        <Typo through>
          Typo Line-Through
        </Typo>
        <Typo strong>
          Typo Strong
        </Typo>
        <Typo italic>
          Typo Italic
        </Typo>
        <Typo color="#d800ff">
          Typo Color
        </Typo>
      </div>
    </div>
  );
};

export default Demo;
`;

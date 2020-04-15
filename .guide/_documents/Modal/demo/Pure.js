import React from 'react';
import { PureModal } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <PureModal title="Confirm Title">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </PureModal>
  );
};

export default Demo;
Demo.header = 'PURE';
Demo.anchorTitle = 'Pure';
Demo.href = 'modal-pure';

Demo.code = `import React from 'react';
import { PureModal } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <PureModal title="Confirm Title">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </PureModal>
  );
};

export default Demo;
`;

import React from 'react';
import { PureModal } from '@/components';

const Demo = () => {
  return (
    <PureModal title="Confirm Title">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </PureModal>
  );
};

export default Demo;

Demo.header = 'PURE';
Demo.href = 'modal-pure';
Demo.code = `import React from 'react';
import { PureModal } from '@/components';

const Demo = () => {
  return (
    <PureModal title="Confirm Title">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </PureModal>
  );
};

export default Demo;
`;

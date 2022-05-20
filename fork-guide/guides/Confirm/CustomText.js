import React from 'react';
import { Wrapper, DemoContentV2 } from '@fork-guide/components';
import { Popconfirm, Button } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Popconfirm overlay={<DemoContentV2 />} noText="Cancel" yesText="Confirm">
        <Button color="primary">Click me</Button>
      </Popconfirm>
    </Wrapper>
  );
};

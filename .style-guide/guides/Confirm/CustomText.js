import React from 'react';
import { Wrapper, DemoContentV2 } from '@style-guide/components';
import { Popconfirm, Button } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Popconfirm overlay={<DemoContentV2 />} noText="Cancel" yesText="Confirm">
        <Button color="primary">Click me</Button>
      </Popconfirm>
    </Wrapper>
  );
};

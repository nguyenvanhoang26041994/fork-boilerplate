import React from 'react';
import { Wrapper, DemoContentV2 } from '@fork-guide/components';
import { Popconfirm, Button } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Popconfirm overlay={<DemoContentV2 />}>
        <Button color="primary">Click me</Button>
      </Popconfirm>
    </Wrapper>
  );
};

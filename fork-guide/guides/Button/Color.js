import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Button } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Button>Basic</Button>
      <Button color="primary">Primary</Button>
      <Button color="danger">Danger</Button>
      <Button color="transparent">Transparent</Button>
    </Wrapper>
  );
};

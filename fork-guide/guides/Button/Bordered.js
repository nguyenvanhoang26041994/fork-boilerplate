import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Button } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Button border="solid">Normal</Button>
      <Button border="solid" color="primary">Primary</Button>
      <Button border="dashed" color="danger">Danger</Button>
      <Button border="dashed" color="transparent">Transparent</Button>
    </Wrapper>
  );
};

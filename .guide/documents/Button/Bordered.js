import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Button } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Button border="dashed">Normal</Button>
      <Button border="solid" color="primary">Primary</Button>
      <Button border="dashed" color="danger">Danger</Button>
      <Button border="dashed" color="transparent">Transparent</Button>
    </Wrapper>
  );
};

export default Demo;

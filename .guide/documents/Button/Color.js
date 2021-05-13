import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Button } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Button>Basic</Button>
      <Button color="primary">Primary</Button>
      <Button color="danger">Danger</Button>
      <Button color="transparent">Transparent</Button>
    </Wrapper>
  );
};

export default Demo;

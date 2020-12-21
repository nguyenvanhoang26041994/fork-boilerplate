import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Button } from '@fork-ui/components/core';

const Demo = () => (
  <Wrapper>
    <Button>Basic</Button>
    <Button rounded>Rounded</Button>
    <Button disabled>Disabled</Button>
  </Wrapper>
);

export default Demo;

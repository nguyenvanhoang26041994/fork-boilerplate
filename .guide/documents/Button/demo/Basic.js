import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Button } from '@@/fork-ui/src/components/core';

const Demo = () => (
  <Wrapper>
    <Button>Basic</Button>
    <Button primary>Primary</Button>
    <Button rounded>Rounded</Button>
    <Button transparent>Transparent</Button>
  </Wrapper>
);

export default Demo;

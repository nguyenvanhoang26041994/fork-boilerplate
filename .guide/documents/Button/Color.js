import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Button } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Button>Basic</Button>
      <Button primary>Primary</Button>
      <Button danger>Danger</Button>
      <Button transparent>Transparent</Button>
    </Wrapper>
  );
};

export default Demo;

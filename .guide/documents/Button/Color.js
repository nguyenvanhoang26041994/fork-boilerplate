import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Button } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Button primary>Primary</Button>
      <Button danger>Danger</Button>
      <Button success>Success</Button>
    </Wrapper>
  );
};

export default Demo;

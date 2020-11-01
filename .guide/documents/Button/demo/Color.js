import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Button } from '@@/fork-ui/src/components/core';

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

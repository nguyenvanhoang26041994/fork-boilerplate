import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Button } from '@@/fork-ui/src/components/core';
import { Cast } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
    <Wrapper>
      <Button disabled>Basic</Button>
      <Button disabled primary>Primary</Button>
      <Button disabled success>Success</Button>
      <Button disabled danger>Danger</Button>
      <Button disabled circle icon={<Cast />} />
    </Wrapper>
  );
};

export default Demo;

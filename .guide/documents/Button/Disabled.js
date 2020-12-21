import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Button } from '@fork-ui/components/core';
import { Cast } from '@fork-ui/components/icons';

const Demo = () => {
  return (
    <Wrapper>
      <Button disabled>Basic</Button>
      <Button disabled primary>Primary</Button>
      <Button disabled danger>Danger</Button>
      <Button disabled circle icon={<Cast />} />
    </Wrapper>
  );
};

export default Demo;

import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button } from '@fork-ui/core';
import { Cast } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <Button disabled>Basic</Button>
      <Button disabled color="primary">Primary</Button>
      <Button disabled color="danger">Danger</Button>
      <Button disabled shape="circle" icon={<Cast />} />
    </Wrapper>
  );
};

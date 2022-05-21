import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Button } from 'fork-design';
import { Cast } from 'fork-design/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <Button border="solid" disabled>Basic</Button>
      <Button disabled border="dashed" color="primary">Primary</Button>
      <Button disabled color="primary">Primary</Button>
      <Button disabled color="danger">Danger</Button>
      <Button disabled rounded icon={<Cast />} />
    </Wrapper>
  );
};

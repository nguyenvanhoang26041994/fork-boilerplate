import React from 'react';
import { Button, Flex } from 'fork-design';

export default () => {
  return (
    <Flex sx={{ gap: 10 }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Flex>
  );
};

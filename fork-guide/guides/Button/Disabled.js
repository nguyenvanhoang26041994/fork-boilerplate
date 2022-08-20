import React from 'react';
import { Button, Flex } from 'fork-design';

export default () => {
  return (
    <Flex direction="col" sx={{ gap: 10}}>
      <Flex sx={{ gap: 10 }}>
        <Button disabled color="primary">Primary</Button>
        <Button disabled color="secondary">Secondary</Button>
        <Button disabled color="success">Success</Button>
        <Button disabled color="error">Error</Button>
      </Flex>
      <Flex sx={{ gap: 10 }}>
        <Button disabled color="primary" variant="outlined">Outlined</Button>
        <Button disabled color="primary" variant="dashed">Dashed</Button>
      </Flex>
      <Flex sx={{ gap: 10 }}>
        <Button disabled color="error" variant="outlined">Outlined</Button>
        <Button disabled color="error" variant="dashed">Dashed</Button>
      </Flex>
      <Flex sx={{ gap: 10 }}>
        <Button disabled color="success" variant="outlined">Outlined</Button>
        <Button disabled color="success" variant="dashed">Dashed</Button>
      </Flex>
    </Flex>
  );
};

import React from 'react';
import { Button, Flex } from 'fork-design';

export default () => {
  return (
    <Flex direction="col" sx={{ gap: 10 }}>
      <Flex sx={{ gap: 10 }}>
        <Button color="primary">Primary</Button>
        <Button color="success">Success</Button>
        <Button color="error">Error</Button>
        <Button color="secondary">Secondary</Button>
      </Flex>
      <Flex sx={{ gap: 10 }}>
        <Button color="primary" variant="outlined">Primary</Button>
        <Button color="success" variant="outlined">Success</Button>
        <Button color="error" variant="outlined">Error</Button>
      </Flex>
      <Flex sx={{ gap: 10 }}>
        <Button color="primary" variant="dashed">Primary</Button>
        <Button color="success" variant="dashed">Success</Button>
        <Button color="error" variant="dashed">Error</Button>
      </Flex>
    </Flex>
  );
};

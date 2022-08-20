import React from 'react';
import { Button, Flex } from 'fork-design';

export default () => {
  return (
    <Flex sx={{ gap: 10 }}>
      <Button variant="contained" upercase>Contained</Button>
      <Button variant="outlined" rounded color="success">Outline</Button>
      <Button variant="dashed" color="error">Dashed</Button>
      <Button variant="text">Text</Button>
    </Flex>
  );
};

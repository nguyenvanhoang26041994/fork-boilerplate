import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Checkbox } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Checkbox color="pink" defaultChecked />
      <Checkbox color="var(--red-6)" defaultChecked />
      <Checkbox color="var(--green-6)" defaultChecked />
      <Checkbox color="#ff5722" defaultChecked />
      <Checkbox color="#ff5722" disabled defaultChecked />
    </Wrapper>
  );
};

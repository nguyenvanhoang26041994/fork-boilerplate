import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Switch } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Switch color="var(--green)" defaultChecked />
      <Switch color="red" defaultChecked />
      <Switch color="#ff5722" loading defaultChecked />
    </Wrapper>
  );
};

export default Demo;

import React  from 'react';
import Wrapper from '../../shared/Wrapper';
import { Chip } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Chip>Slack</Chip>
      <Chip rounded>VS Code</Chip>
    </Wrapper>
  );
};

export default Demo;

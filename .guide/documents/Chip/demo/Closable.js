import React  from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Chip } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Chip closable>
        Slack
      </Chip>
      <Chip rounded closable>
        VS Code
      </Chip>
    </Wrapper>
  );
};

export default Demo;

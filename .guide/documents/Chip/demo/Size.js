import React  from 'react';
import styled from 'styled-components';

import { Chip } from '@/rc-neumorphism/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Chip
        size="1.5rem"
        label="Sơn Lê"
      />
      <Chip
        size="18px"
        label="Owner"
      />
    </Wrapper>
  );
};

export default Demo;

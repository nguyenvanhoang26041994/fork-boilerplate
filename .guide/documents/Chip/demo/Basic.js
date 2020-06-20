import React  from 'react';
import styled from 'styled-components';

import { Chip } from '@/fork-ui/core';

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
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
      <Chip
        label="Owner"
        onClick={() => console.log('Owner')}
      />
    </Wrapper>
  );
};

export default Demo;

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
        color="#0089e4"
        textColor="#ffffff"
        label="Hoàng Nguyễn"
      />
      <Chip
        textColor="#ffffff"
        color="#ec4c1c"
        label="Sơn Lê"
      />
      <Chip
        color="teal"
        textColor="aqua"
        label="Owner"
      />
    </Wrapper>
  );
};

export default Demo;

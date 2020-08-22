import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@@/fork-ui/src/components/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Avatar name="H" />
      <Avatar
        name="H"
        color="orange"
      />
      <Avatar
        name="H"
        color="#19b39d"
      />
      <Avatar name="H" square />
    </Wrapper>
  );
};

export default Demo;

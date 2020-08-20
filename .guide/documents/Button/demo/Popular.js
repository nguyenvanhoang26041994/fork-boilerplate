import React from 'react';
import styled from 'styled-components';
import { Button } from '@@/fork-ui/src/components/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Button primary>PRIMARY</Button>
      <Button danger>DANGER</Button>
      <Button glassed>GLASSED</Button>
      <Button transparent>TRANSPARENT</Button>
    </Wrapper>
  );
};

export default Demo;

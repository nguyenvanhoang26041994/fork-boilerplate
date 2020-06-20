import React from 'react';
import styled from 'styled-components';
import { Switch } from '@/fork-ui/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch />
    </Wrapper>
  );
};

export default Demo;

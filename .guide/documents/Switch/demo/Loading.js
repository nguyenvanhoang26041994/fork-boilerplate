import React from 'react';
import styled from 'styled-components';
import { Switch } from '@/rc-neumorphism/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Switch loading />
      <Switch loading defaultChecked />
    </Wrapper>
  );
};

export default Demo;

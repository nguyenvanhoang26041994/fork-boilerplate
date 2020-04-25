import React from 'react';
import styled from 'styled-components';

import { Button, ButtonGroup } from '@/rc-neumorphism/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 1rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <ButtonGroup>
        <Button icon="power" />
        <Button icon="message" />
        <Button icon="bell" />
      </ButtonGroup>
      <ButtonGroup primary>
        <Button icon="power" />
        <Button icon="message" />
        <Button icon="bell" />
      </ButtonGroup>
      <ButtonGroup glassed>
        <Button icon="power" />
        <Button icon="message" />
        <Button icon="bell" />
      </ButtonGroup>
    </Wrapper>
  );
};

export default Demo;

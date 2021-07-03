import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Button } from '@fork-ui/core';
import { Copy, Notification } from '@fork-ui/icons/lazy';

const GradientButton = styled(Button)`
  border-color: transparent;
  background-size: 200% auto;
  transition: 0.5s;
  color: var(--white);

  &:hover,
  &:focus {
    border-color: transparent;
    background-position: right center;
  }
`;

const BlueGradientButton = styled(GradientButton)`
  background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%);
`;
const RedGradientButton = styled(GradientButton)`
  background-image: linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%);
`;
const OrangeGradientButton = styled(GradientButton)`
  background-image: linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%);
`;

export default () => {
  return (
    <Wrapper>
      <BlueGradientButton rounded icon={<Notification />} />
      <RedGradientButton icon={<Copy />} />
      <OrangeGradientButton>HOVER ME</OrangeGradientButton>
    </Wrapper>
  );
};

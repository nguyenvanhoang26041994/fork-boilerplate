import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../shared/Wrapper';
import { Button } from '@fork-ui/components/core';

const SuccessButton = styled(Button)`
  background-color: var(--green);
  border-color: var(--green);
  color: #fff;

  &.fbtn-solid,
  &.fbtn-dashed {
    background-color: transparent;
    color: var(--green);
  }

  &:hover,
  &:focus {
    background-color: var(--green-hover);
    border-color: var(--green-hover);
    color: #fff;
  }
`;

const GradientButton = styled(Button)`
  background-color: #F09819;
  background-image: linear-gradient(to right, #F09819 0%, #EDDE5D  51%, #F09819  100%);
  color: #fff;
  transition: 0.5s;
  background-size: 200% auto;

  &:hover,
  &:focus {
    color: #fff;
    background-position: right center;
  }
`;

const Demo = () => (
  <Wrapper>
    <SuccessButton border="solid">Solid</SuccessButton>
    <SuccessButton border="dashed">Dashed</SuccessButton>
    <GradientButton>Gradient</GradientButton>
  </Wrapper>
);

export default Demo;

import React from 'react';
import styled from 'styled-components';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Button } from '@@/fork-ui/src/components/core';

const PrimaryBorderedButton = styled(Button)`
  color: var(--primary);
  border-color: currentColor;
  background-color: transparent;

  &:hover,
  &:focus {
    color: var(--primary);
  }
`;

const PrimaryDashedButton = styled(PrimaryBorderedButton)`
  border-style: dashed;
`;

const DangerBorderedButton = styled(Button)`
  color: var(--red);
  border-color: currentColor;
  background-color: transparent;

  &:hover,
  &:focus {
    color: var(--red);
    background-color: rgba(78, 4, 4, 0.4);
  }
`;

const DangerDashedButton = styled(DangerBorderedButton)`
  border-style: dashed;
`;

const SuccessBorderedButton = styled(Button)`
  color: var(--green);
  border-color: currentColor;
  background-color: transparent;

  &:hover,
  &:focus {
    color: var(--green);
    background-color: rgba(19, 88, 21, 0.4);
  }
`;

const SuccessDashedButton = styled(SuccessBorderedButton)`
  border-style: dashed;
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
    <PrimaryBorderedButton>Bordered</PrimaryBorderedButton>
    <PrimaryDashedButton>Dashed</PrimaryDashedButton>
    <DangerBorderedButton>Danger</DangerBorderedButton>
    <DangerDashedButton>Danger</DangerDashedButton>
    <SuccessBorderedButton>Success</SuccessBorderedButton>
    <SuccessDashedButton>Success</SuccessDashedButton>
    <GradientButton>Gradient</GradientButton>
  </Wrapper>
);

export default Demo;

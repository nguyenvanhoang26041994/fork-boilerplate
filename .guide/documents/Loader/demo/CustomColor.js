import React from 'react';
import styled, { keyframes } from 'styled-components';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Loader } from '@@/fork-ui/src/components/core';

const MixedColor = styled(Loader.Dots)`
  .floader-dot-1 {
    background-color: var(--primary);
  }
  .floader-dot-2 {
    background-color: var(--red);
  }
  .floader-dot-3 {
    background-color: var(--green);
  }
`;

const rainbow = keyframes`
  from {
    background-color: var(--primary);
    transform: scale(1.25);
  }
  to {
    background-color: var(--green);
    transform: scale(.75);
  }
`;

const RainbowLoader = styled(Loader.Dots)`
  &.floader-dots-buble .floader-dot {
    animation-name: ${rainbow};
  }
`;
// NOTE ___CSS_0___ is ${rainbow}, this bug from lib we use to demo code

const Demo = () => {
  return (
    <Wrapper span="2em">
      <MixedColor />
      <RainbowLoader />
    </Wrapper>
  );
};

export default Demo;

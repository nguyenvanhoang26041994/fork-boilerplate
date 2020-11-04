import React from 'react';
import styled, { keyframes } from 'styled-components';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Loader } from '@@/fork-ui/src/components/core';

const MixedColor = styled(Loader.Dots)`
  .floader-dot-1 {
    color: var(--primary);
  }
  .floader-dot-2 {
    color: var(--red);
  }
  .floader-dot-3 {
    color: var(--green);
  }
`;

const rainbow = keyframes`
  from {
    color: var(--primary);
    transform: scale(1.25);
  }
  to {
    color: var(--green);
    transform: scale(.75);
  }
`;

const RainbowLoader = styled(Loader.Dots)`
  &.floader-dots-buble .floader-dot {
    animation-name: ${rainbow};
  }
`;
// NOTE ___CSS_0___ is ${rainbow}, this bug from lib we use to demo code

const waverainbow = keyframes`
  0%, 100% {
    color: var(--red);
    transform: initial;
  }

  45% {
    color: purple;
    transform: translateY(-20px);
  }
`;

const WaveRainbowLoader = styled(Loader.Dots)`
  &.floader-dots-wave .floader-dot {
    animation-name: ${waverainbow};
  }
`;
// NOTE ___CSS_0___ is ${waverainbow}, this bug from lib we use to demo code

const spinnerainbow = keyframes`
  0% {
    color: var(--primary);
    transform: rotate(0);
  }
  50% {
    color: var(--red);
  }
  100% {
    color: var(--green);
    transform: rotate(360deg);
  }
`;

const SpinnerRainbowLoader = styled(Loader.Spinner)`
  animation-name: ${spinnerainbow};
`;
// NOTE ___CSS_0___ is ${spinnerainbow}, this bug from lib we use to demo code

const Demo = () => {
  return (
    <Wrapper span="2em">
      <MixedColor size="2em" />
      <RainbowLoader size="2em" />
      <WaveRainbowLoader wave size="2em" />
      <SpinnerRainbowLoader size="2em" />
    </Wrapper>
  );
};

export default Demo;

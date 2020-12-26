import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Skeleton, Flex } from '@fork-ui/components/core';

const customize = keyframes`
  0% {
    background-color: var(--primary);
  }
  100% {
    background-color: #fff;
  }
`;

const StyledSkeleton = styled(Skeleton)`
  background-color: var(--primary);

  &.fskele-animated {
    animation-name: ${customize};
  }
`;

// ___CSS_0___ is ${customize}, this bug belong the lib we use to demo code
const Demo = () => {
  return (
    <Flex col style={{ padding: '0.5 1.5rem' }} span="full">
      <Flex items="center">
        <StyledSkeleton circle size="2rem" animated />
        <Flex col className="ml-2 flex-1">
          <StyledSkeleton p w="70%" animated />
          <StyledSkeleton p w="20%" animated />
        </Flex>
      </Flex>
      <StyledSkeleton rect w="100%" h="200px" animated />
    </Flex>
  );
};

export default Demo;

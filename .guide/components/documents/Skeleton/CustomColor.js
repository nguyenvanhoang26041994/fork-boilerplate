import React  from 'react';
import styled, { keyframes } from 'styled-components';
import { Skeleton, Flex } from '@fork-ui/components/core';

const customize = keyframes`
  0% {
    background-color: var(--primary);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StyledSkeleton = styled(Skeleton)`
  &.fskele-animated {
    animation-name: ${customize};
  }
`;
// ___CSS_0___ is ${customize}, this bug belong the lib we use to demo code
const Demo = () => {
  return (
    <Flex col style={{ padding: '0.5 1.5rem' }} span="full">
      <Flex items="center">
        <StyledSkeleton circle size="2rem" />
        <Flex col className="ml-2 flex-1">
          <StyledSkeleton p w="70%" />
          <StyledSkeleton p w="20%" />
        </Flex>
      </Flex>
      <StyledSkeleton rect w="100%" h="200px" />
    </Flex>
  );
};

export default Demo;

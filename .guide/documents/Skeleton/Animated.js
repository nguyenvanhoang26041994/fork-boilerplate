import React  from 'react';
import { Skeleton, Flex } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Flex col style={{ padding: '0.5 1.5rem' }} span="full">
      <Flex items="center">
        <Skeleton circle size="2rem" animated={false} />
        <Flex col className="ml-2 flex-1">
          <Skeleton p w="70%" animated={false} />
          <Skeleton p w="20%" animated={false} />
        </Flex>
      </Flex>
      <Skeleton rect w="100%" h="200px" animated={false} />
    </Flex>
  );
};

export default Demo;

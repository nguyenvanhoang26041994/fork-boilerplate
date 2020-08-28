import React from 'react';
import { Flex, Skeleton } from '@@/fork-ui/src/components/core';

const DemoContent = () => {
  return (
    <Flex col style={{ padding: '0.5 1.5rem', minWidth: '600px' }} span="full">
      <Flex items="center">
        <Skeleton circle size="2rem" />
        <Flex col className="ml-2 flex-1">
          <Skeleton p  w="70%" />
          <Skeleton p  w="20%" />
        </Flex>
      </Flex>
      <Skeleton rect w="100%" h="100px" />
    </Flex>
  );
};

export default DemoContent;

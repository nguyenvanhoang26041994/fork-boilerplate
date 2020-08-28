import React  from 'react';
import { Progress, Flex } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Flex items="center">
      <Progress.Circle percent={0.67} r={30} className="mr-3" />
      <Progress.Circle percent={0.67} r={45} className="mr-3" />
      <Progress.Circle percent={0.87} r={60} />
    </Flex>
  );
};

export default Demo;

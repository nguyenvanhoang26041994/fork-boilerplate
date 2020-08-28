import React  from 'react';
import { Progress, Flex } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Flex col span="full">
      <Progress.Linear percent={0.69} />
    </Flex>
  );
};

export default Demo;

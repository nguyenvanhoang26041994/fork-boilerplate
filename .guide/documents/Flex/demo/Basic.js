import React from 'react';
import { Flex } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Flex col span="full">
      <Flex
        style={{
          backgroundColor: 'var(--primary--500)',
          height: '5rem',
        }}
      />
      <Flex row>
        <Flex
          span="1/3"
          style={{
            backgroundColor: 'var(--primary--400)',
            height: '5rem',
          }}
        />
        <Flex
          span="2/3"
          style={{
            backgroundColor: 'var(--primary--600)',
            height: '5rem',
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Demo;

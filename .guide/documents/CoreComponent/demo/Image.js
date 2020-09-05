import React from 'react';
import { Image, Flex } from '@@/fork-ui/src/components/core';

const Demo = () => (
  <Flex col span="full">
    <Flex>
      <Flex span="1/3">
        <Image
          lazyload
          src="/static/pexels-charles-1851164.jpg"
          alt="lazyload image"
          w="100%"
          h="300px"
        />
      </Flex>
      <Flex span="1/3">
        <Image
          lazyload
          src="/static/pexels-sergio-souza-3198032.jpg"
          alt="lazyload image"
          w="100%"
          h="300px"
        />
      </Flex>
      <Flex span="1/3">
        <Image
          lazyload
          src="/static/pexels-freestocksorg-688961.jpg"
          alt="lazyload image"
          w="100%"
          h="300px"
        />
      </Flex>
    </Flex>
    <Flex>
      <Image
        blur
        lazyload
        src="/static/pexels-freestocksorg-133069.jpg"
        alt="lazyload image"
        w="100%"
        h="400px"
      />
    </Flex>
  </Flex>
);

export default Demo;

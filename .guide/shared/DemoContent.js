import React, { useState, useEffect } from 'react';
import { Flex, Badge, Avatar, Skeleton } from '@@/fork-ui/src/components/core';

const Loren = () => (
  <div className="w-full">
    <Flex col style={{ padding: '0.5 1.5rem' }} className="w-full">
      <Flex items="center" className="mb-5">
        <Badge
          count={1}
          dot
          overlap
          color="#0df316"
          bottomRight
        >
          <Avatar name="H" size="1.5rem" />
        </Badge>
        <Flex col className="ml-2 flex-1">
          <Skeleton p  w="70%" />
          <Skeleton p  w="20%" />
        </Flex>
      </Flex>
      <Skeleton rect w="100%" h="200px" />
    </Flex>
  </div>
);

const DemoContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <Flex col style={{ padding: '0.5 1.5rem' }} className="w-full">
        <Flex items="center">
          <Skeleton circle size="2rem" />
          <Flex col className="ml-2 flex-1">
            <Skeleton p  w="70%" />
            <Skeleton p  w="20%" />
          </Flex>
        </Flex>
        <Skeleton rect w="100%" h="200px" />
      </Flex>
    )
  }

  return <Loren />;
};

export default DemoContent;
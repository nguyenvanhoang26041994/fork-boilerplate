import React, { useState, useEffect } from 'react';
import { Flex, Badge, Avatar, Skeleton, Rater } from '@fork-ui/components/core';

const Loren = ({ avatarName }) => (
  <div className="w-full">
    <Flex col style={{ padding: '0.5 1.5rem' }} className="w-full">
      <Flex items="center" className="mb-5">
        <Badge.Dot
          overlap
          color="#0df316"
          bottomRight
        >
          <Avatar size="1.5rem">{avatarName}</Avatar>
        </Badge.Dot>
        <Flex col className="ml-2 flex-1">
          <Skeleton p  w="70%" animated={false} />
          <Rater>
            <Rater.Star isLight />
            <Rater.Star isLight />
            <Rater.Star isLight />
            <Rater.Star />
            <Rater.Star />
          </Rater>
        </Flex>
      </Flex>
      <Skeleton rect w="100%" h="300px" animated={false} />
    </Flex>
  </div>
);

const DemoContent = ({ avatarName }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <Flex col style={{ padding: '0.5 1.5rem', minWidth: '500px' }} span="full">
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

  return <Loren avatarName={avatarName} />;
};

DemoContent.defaultProps = {
  avatarName: 'OP'
};

export default DemoContent;

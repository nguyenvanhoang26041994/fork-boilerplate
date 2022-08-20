import React from 'react';
import { Flex, Skeleton } from 'fork-design';

const DemoContent = () => {
  return (
    <Flex direction="col" className="flex-1 fskele-animated" style={{ minWidth: '400px' }}>
      <Skeleton shape="p" w="70%" />
      <Skeleton shape="p" w="40%" />
      <Flex direction="row" w="full">
        <Skeleton shape="rect" w="200px" h="100px" />
        <Flex direction="col" w="full" className="pl-3">
          <Skeleton shape="p" w="70%" />
          <Skeleton shape="p" w="40%" />
          <Skeleton shape="p" w="50%" />
          <Skeleton shape="p" w="30%" />
        </Flex>
      </Flex>
      
    </Flex>
  );
};

DemoContent.defaultProps = {
  avatarName: 'OP'
};

export default DemoContent;

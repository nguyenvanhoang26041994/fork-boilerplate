import React from 'react';
import { Divider, Flex } from '@@/fork-ui/src/components/core';
import { Power, Copy } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
    <Flex col span="full">
      <Divider dashed />
      <Divider dashed left title={<Power />} />
      <Divider dashed right title={<Copy />} />
      <Divider
        dashed
        right
        title={(
          <span>
            <Copy className="mr-3" />
            RIGHT TITLE
          </span>
        )}
      />
      <Divider dashed title={<Power />} />
    </Flex>
  );
};

export default Demo;

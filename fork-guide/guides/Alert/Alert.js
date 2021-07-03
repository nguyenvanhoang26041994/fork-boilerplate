import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { PureAlert, Flex, Skeleton } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper col span="20px">
      <PureAlert type="info" className="w-full" style={{ boxShadow: 'var(--popover-box-shadow)' }}>
        <PureAlert.Header>
          INFO
          <PureAlert.Closer />
        </PureAlert.Header>
        <PureAlert.Body className="pb-5">
          <Flex col className="flex-1 fskele-animated" style={{ minWidth: '400px' }}>
            <Skeleton shape="p" w="70%" />
            <Skeleton shape="p" w="40%" />
          </Flex>
        </PureAlert.Body>
      </PureAlert>
    </Wrapper>
  );
};

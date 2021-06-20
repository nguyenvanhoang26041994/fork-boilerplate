import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button, Badge } from '@fork-ui/core';
import { Bell, Inbox } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper span="20px">
      <Badge.Counter count={2}>
        <Button icon={<Bell />} />
      </Badge.Counter>
      <Badge.Counter overlap count={9}>
        <Button rounded icon={<Inbox />} />
      </Badge.Counter>
    </Wrapper>
  );
};

import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Button, Badge } from 'fork-design';
import { Bell, Inbox } from 'fork-design/icons/lazy';

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

import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { PureNotification } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <PureNotification header="Notification">
        Hello world
      </PureNotification>
    </Wrapper>
  );
};

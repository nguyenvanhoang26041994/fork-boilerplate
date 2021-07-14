import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Alert, Loader } from '@fork-ui/core';
import { Trash, Check } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper col span="20px">
      <Alert closable={false}>
        Just simle infomation for you!
        <span className="falert-closer" style={{ height: 32 }}>
          <Loader.Spinner />
        </span>
      </Alert>
      <Alert color="danger">
        Something went wrong!
      </Alert>
      <Alert color="warning" closable={false}>
        Just wanna warning you!
        <Alert.Closer icon={<Trash />} />
      </Alert>
      <Alert color="success" closable={false}>
        You data save success!
        <span className="falert-closer" style={{ height: 32 }}>
          <Check color="var(--green-6)" />
        </span>
      </Alert>
    </Wrapper>
  );
};

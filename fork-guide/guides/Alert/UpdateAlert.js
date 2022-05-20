import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Alert, Button, Loader } from 'fork-design';
import { Check } from '@fork-ui/icons/lazy';

const ref = {
  current: null,
};
const pushAlert = () => {
  clearTimeout(ref.current);
  Alert.ref.push(({ doClose }) => {
    return (
      <Alert
        className="mx-2 my-1"
        onClose={doClose}
        closable={false}
      >
        We are still in progress
        <span className="falert-closer" style={{ height: 32 }}>
          <Loader.Spinner />
        </span>
      </Alert>
    );
  }, {
    id: 'demo-id',
  });

  ref.current = setTimeout(() => {
    Alert.ref.push(({ doClose }) => {
      return (
        <Alert
          className="mx-2 my-1"
          onClose={doClose}
          closable={false}
        >
          All is done. Thank you!
          <span className="falert-closer" style={{ height: 32 }}>
            <Check color="var(--green-6)" />
          </span>
        </Alert>
      );
    }, {
      id: 'demo-id',
      autoClose: 2000,
    });
  }, 3000);
};

export default () => {
  return (
    <Wrapper>
      <Button color="primary" onClick={() => pushAlert()}>Click Me</Button>
    </Wrapper>
  );
};

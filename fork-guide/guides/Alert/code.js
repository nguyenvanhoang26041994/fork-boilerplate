export const Alert = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Alert, Loader } from 'fork-design';
import { Trash, Check } from 'fork-design/icons/lazy';

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
`,
  demoName: 'Alert',
}

export const PushAlert = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Alert, Button, ButtonGroup } from 'fork-design';

const pushAlert = (placement) => {
  Alert.ref.push(({ doClose }) => {
    return (
      <Alert className="mx-2 my-1" onClose={doClose}>Just simle infomation for you!</Alert>
    );
  }, {
    placement,
  })
};

export default () => {
  return (
    <Wrapper>
      <Button color="primary" onClick={() => pushAlert('top-center')}>Click Me</Button>
      <Button onClick={Alert.ref.closeAll}>Close All</Button>
      <ButtonGroup>
        <Button onClick={() => pushAlert('bottom-right')}>Bottom Right</Button>
        <Button onClick={() => pushAlert('top-left')}>Top Left</Button>
        <Button onClick={() => pushAlert('top-right')}>Top Right</Button>
        <Button onClick={() => pushAlert('bottom-center')}>Bottom Center</Button>
        <Button onClick={() => pushAlert('bottom-left')}>Bottom Left</Button>
      </ButtonGroup>
    </Wrapper>
  );
};
`,
  demoName: 'Push Alert',
}

export const UpdateAlert = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Alert, Button, Loader } from 'fork-design';
import { Check } from 'fork-design/icons/lazy';

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
`,
  demoName: 'Update Alert',
}


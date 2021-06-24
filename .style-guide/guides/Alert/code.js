export const Alert = {
  code: `import React from 'react';
import { Wrapper, DemoContentV2 } from '@style-guide/components';
import { PureAlert } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper col span="20px">
      <PureAlert type="info" style={{ boxShadow: 'var(--popover-box-shadow)' }}>
        <PureAlert.Header>
          INFO
          <PureAlert.Closer />
        </PureAlert.Header>
        <PureAlert.Body>
          <DemoContentV2 />
        </PureAlert.Body>
      </PureAlert>
      <PureAlert type="success" style={{ boxShadow: 'var(--popover-box-shadow)' }}>
        <PureAlert.Header>
          SUCCESS
          <PureAlert.Closer />
        </PureAlert.Header>
        <PureAlert.Body>
          <DemoContentV2 />
        </PureAlert.Body>
      </PureAlert>
      <PureAlert type="warning" style={{ boxShadow: 'var(--popover-box-shadow)' }}>
        <PureAlert.Header>
          WARNING
          <PureAlert.Closer />
        </PureAlert.Header>
        <PureAlert.Body>
          <DemoContentV2 />
        </PureAlert.Body>
      </PureAlert>
      <PureAlert type="error" style={{ boxShadow: 'var(--popover-box-shadow)' }}>
        <PureAlert.Header>
          ERROR
          <PureAlert.Closer />
        </PureAlert.Header>
        <PureAlert.Body>
          <DemoContentV2 />
        </PureAlert.Body>
      </PureAlert>
    </Wrapper>
  );
};
`,
  demoName: 'Alert',
}


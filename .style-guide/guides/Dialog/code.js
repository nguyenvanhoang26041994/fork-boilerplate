export const Dialog = {
  code: `import React from 'react';
import { DemoContent } from '@style-guide/components';
import { Dialog, Button } from '@fork-ui/core';
import { Send } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Dialog className="w-full" style={{ boxShadow: 'var(--overlay--shadow)' }}>
      <Dialog.Header>
        <span>HEADER</span>
        <Dialog.Closer />
      </Dialog.Header>
      <Dialog.Body>
        <DemoContent />
      </Dialog.Body>
      <Dialog.Footer>
        <Button color="danger">
          DECLINE
        </Button>
        <Button color="primary">
          ACCEPT
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
`,
  demoName: 'Dialog',
}


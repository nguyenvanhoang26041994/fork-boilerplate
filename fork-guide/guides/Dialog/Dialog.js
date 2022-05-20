import React from 'react';
import { DemoContent } from '@fork-guide/components';
import { Dialog, Button } from 'fork-design';
import { Send } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Dialog className="w-full" style={{ boxShadow: 'var(--popover-box-shadow)' }}>
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

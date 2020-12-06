import React from 'react';
import { Button, Dialog } from '@fork-ui/components/core';
import { Send } from '@fork-ui/components/icons';
import DemoContent from '../../shared/DemoContent';

const Demo = () => {
  return (
    <Dialog class="w-full" style={{ boxShadow: 'var(--overlay--shadow)' }}>
      <Dialog.Header refreshable>DIALOG HEADER</Dialog.Header>
      <Dialog.Body><DemoContent /></Dialog.Body>
      <Dialog.Footer>
        <Button>
          <Send/>OK
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};

export default Demo;

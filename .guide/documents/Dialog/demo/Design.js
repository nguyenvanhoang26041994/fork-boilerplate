import React from 'react';
import { Button, Dialog } from '@@/fork-ui/src/components/core';
import { Send } from '@@/fork-ui/src/components/icons';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  return (
    <Dialog class="w-full" style={{ boxShadow: 'var(--overlay--shadow)' }}>
      <Dialog.Header>DIALOG HEADER</Dialog.Header>
      <Dialog.Body><DemoContent /></Dialog.Body>
      <Dialog.Footer>
        <Button outlined primary>
          <Send/>OK
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};

export default Demo;

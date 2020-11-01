import React from 'react';
import { Button, Dialog } from '@@/fork-ui/src/components/core';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  return (
    <Dialog className="w-full" style={{ boxShadow: 'var(--overlay--shadow)' }}>
      <Dialog.Header freshable>DIALOG HEADER</Dialog.Header>
      <Dialog.Body>
        <DemoContent />
      </Dialog.Body>
      <Dialog.Footer>
        <Button>Save</Button>
      </Dialog.Footer>
    </Dialog>
  );
};

export default Demo;

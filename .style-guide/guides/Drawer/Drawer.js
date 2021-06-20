import React from 'react';
import { DemoContent } from '@style-guide/components';
import { Drawer, Button } from '@fork-ui/core';

export default () => {
  const { isOpen, doOpen, doClose } = Drawer.useDrawer(false);

  return (
    <React.Fragment>
      <Drawer isOpen={isOpen} w="800px">
        <Drawer.Header>
          HEADER
          <Drawer.Closer onClick={doClose} />
        </Drawer.Header>
        <Drawer.Body>
          <DemoContent />
        </Drawer.Body>
        <Drawer.Footer className="justify-center">
          <Button onClick={doClose} border="solid">CANCEL</Button>
          <Button onClick={doClose} color="primary" border="solid">OK</Button>
        </Drawer.Footer>
      </Drawer>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};

import React, { useState, useCallback } from 'react';
import { Button, Drawer } from '@fork-ui/components/core';
import DemoContent from '../../shared/DemoContent';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Drawer
        open={open}
        onClose={onClose}
        className="w-1/2"
      >
        <Drawer.Header refreshable>DRAWER TITLE</Drawer.Header>
        <Drawer.Body>
          <DemoContent />
          <DemoContent />
        </Drawer.Body>
      </Drawer>
      <Button onClick={onOpen}>Open Drawer</Button>
    </div>
  );
};

export default Demo;

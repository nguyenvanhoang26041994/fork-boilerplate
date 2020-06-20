import React, { useState, useCallback } from 'react';
import { Button, Modal } from '@/fork-ui/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Modal open={open} onClose={onClose} canOutsideClickClose>
        <Modal.Header>Modal Title</Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Modal.Body>
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
    </div>
  );
};

export default Demo;

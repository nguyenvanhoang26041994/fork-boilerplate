import React, { useState, useCallback } from 'react';
import { Button, Drawer, Modal } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';
import DemoContent from '../../shared/DemoContent';

const Demo = () => {
  const [openDrawer, setOpenDrawer] = useState();
  const [openModal, setOpenModal] = useState();
  const [openConfirm, setOpenConfirm] = useState();

  const onCloseDrawer = useCallback(() => setOpenDrawer(false), []);
  const onOpenDrawer = useCallback(() => setOpenDrawer(true), []);

  const onCloseModal = useCallback(() => setOpenModal(false), []);
  const onOpenModal = useCallback(() => setOpenModal(true), []);

  const onCloseConfirm = useCallback(() => setOpenConfirm(false), []);
  const onOpenConfirm = useCallback(() => setOpenConfirm(true), []);

  return (
    <div className="flex">
      <Drawer
        canOutsideClickClose
        open={openDrawer}
        onClose={onCloseDrawer}
        className="w-1/2"
      >
        <Drawer.Header refreshable>DRAWER TITLE</Drawer.Header>
        <Drawer.Body>
          <DemoContent />
          <DemoContent />
          <DemoContent />
          <DemoContent />
        </Drawer.Body>
        <Drawer.Footer>
          <Button>Save</Button>
        </Drawer.Footer>
      </Drawer>

      <Modal
        canOutsideClickClose
        open={openModal}
        onClose={onCloseModal}
        className="w-1/2"
      >
        <Modal.Header refreshable>Modal TITLE</Modal.Header>
        <Modal.Body>
          <DemoContent />
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal>

      <Wrapper>
        <Button onClick={onOpenDrawer}>Open Drawer</Button>
        <Button onClick={onOpenModal}>Open Modal</Button>
        <Button onClick={onOpenConfirm}>Open Confirm</Button>
      </Wrapper>
    </div>
  );
};

export default Demo;

import React, { useState, useCallback } from 'react';
import {
  SpeedDial,
  Button,
  Popover,
  Tooltip,
  Drawer,
  Modal,
  Confirm,
} from '@@/fork-ui/src/components/core';
import {
  CloudDownload,
  Coin,
  ColorSwatch,
  Plus,
  Dots,
} from '@@/fork-ui/src/components/icons';
import Wrapper from '@@/.guide/shared/Wrapper';
import DemoContent2 from '@@/.guide/shared/DemoContent2';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const onCloseDrawer = useCallback(() => setOpenDrawer(false), []);
  const onOpenDrawer = useCallback(() => setOpenDrawer(true), []);
  const onCloseModal = useCallback(() => setOpenModal(false), []);
  const onOpenModal = useCallback(() => setOpenModal(true), []);
  const onCloseConfirm = useCallback(() => setOpenConfirm(false), []);
  const onOpenConfirm = useCallback(() => setOpenConfirm(true), []);

  return (
    <Wrapper>
      <Drawer
        canOutsideClickClose
        open={openDrawer}
        onClose={onCloseDrawer}
        className="w-1/2"
      >
        <Drawer.Header freshable>DRAWER TITLE</Drawer.Header>
        <Drawer.Body>
          <DemoContent />
          <DemoContent />
        </Drawer.Body>
        <Drawer.Footer>
          <Button>Save</Button>
        </Drawer.Footer>
      </Drawer>
      <Button onClick={onOpenDrawer}>Open Drawer</Button>

      <Modal
        canOutsideClickClose
        open={openModal}
        onClose={onCloseModal}
        className="w-1/2"
      >
        <Modal.Header freshable>MODAL TITLE</Modal.Header>
        <Modal.Body>
          <DemoContent />
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={onOpenModal}>Open Modal</Button>

      <Confirm
        open={openConfirm}
        onClose={onCloseConfirm}
        title="CONFIRM TITLE"
      >
        <DemoContent2 />
      </Confirm>
      <Button onClick={onOpenConfirm}>Open Confirm</Button>
      <Button>Push Alert</Button>
      <Button>Push Notification</Button>
      <Tooltip title="Tooltip message!">
        <Button>Hover Me!</Button>
      </Tooltip>
      <Popover overlay={(
        <div className="p-5">
          <DemoContent2 />
        </div>
      )}>
        <Button>Click Me!</Button>
      </Popover>
      <Button>Click Me!</Button>
      <SpeedDial right overlay={
        <React.Fragment>
          <SpeedDial.Button icon={<CloudDownload />} />
          <SpeedDial.Button icon={<Coin />} />
          <SpeedDial.Button icon={<ColorSwatch />} />
          <SpeedDial.Button icon={<Plus />} />
        </React.Fragment>
      }>
        <Button style={{ width: '3em' }} icon={<Dots />} />
      </SpeedDial>
    </Wrapper>
  );
}

export default Demo;

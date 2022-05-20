import React from 'react';
import { DemoContent } from '@fork-guide/components';
import { Modal, Button } from 'fork-design';
import { Minus } from '@fork-ui/icons/lazy';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} style={{ width: '700px' }}>
        <Modal.Header>
          TITLE
          <Modal.Closer icon={<Minus />} onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose}>CANCEL</Button>
          <Button onClick={doClose} color="primary">OK</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};

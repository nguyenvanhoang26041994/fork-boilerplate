import React from 'react';
import { DemoContent } from '@fork-guide/components';
import { Modal, Button } from 'fork-design';
import { Minus, Refresh } from 'fork-design/icons/lazy';

export default () => {
  const { isOpen, doOpen, doClose, doRefresh, isOpenFresh } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} style={{ width: '700px' }}>
        <Modal.Header>
          TITLE
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 'auto',
            margin: '8px',
          }}>
            <Button color="transparent" rounded icon={<Refresh />} onClick={doRefresh} className="mr-1" />
            <Button color="transparent" rounded icon={<Minus />} onClick={doClose} />
          </div>
        </Modal.Header>
        <Modal.Body>
          {isOpenFresh && <DemoContent />}
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

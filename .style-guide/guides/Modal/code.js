export const Modal = {
  code: `import React from 'react';
import { DemoContent } from '@style-guide/components';
import { Modal, Button } from '@fork-ui/core';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} w="700px">
        <Modal.Header>
          TITLE
          <Modal.Closer onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose} color="danger" border="solid">CANCEL</Button>
          <Button onClick={doClose} color="primary" border="solid">OK</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Modal',
}


export const Centered = {
  code: ``,
  demoName: 'Centered',
}

export const MarginView = {
  code: ``,
  demoName: 'Margin View',
}

export const Width = {
  code: ``,
  demoName: 'Width',
}

import React from 'react';
import { Button, Modal, useModal } from '@fork-ui/components/core';
import { X } from '@fork-ui/components/icons';

import VerticalStepper from '../Stepper/Vertical';

const Demo = () => {
  const [{ open, show, hide }] = useModal(false);

  return (
    <div className="flex">
      <Modal open={open} centered>
        <Modal.Header>
          <Modal.HeaderTitle>MODAL HEADER TITLE</Modal.HeaderTitle>
          <Modal.HeaderSupportButtons>
            <Button circle transparent icon={<X />} onClick={hide} />
          </Modal.HeaderSupportButtons>
        </Modal.Header>
        <Modal.Body>
          <VerticalStepper />
        </Modal.Body>
        <Modal.Footer>
          <Button primary onClick={hide} className="mr-2">
            Next
          </Button>
          <Button onClick={hide}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={show}>Open Modal</Button>
    </div>
  );
};

export default Demo;

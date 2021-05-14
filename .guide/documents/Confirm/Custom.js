import React from 'react';
import { Button, Modal, Typo, useModal } from '@fork-ui/components/core';
import QuestionMark from '@fork-ui/components/icons/all/QuestionMark';
import X from '@fork-ui/components/icons/all/X';

const Demo = () => {
  const [{ open, show, hide }] = useModal(false);

  return (
    <div className="flex">
      <Modal open={open} style={{ minWidth: 500 }}>
        <Modal.Header>
          <Modal.HeaderTitle>CONFIRM TITLE</Modal.HeaderTitle>
          <Modal.HeaderButtons>
            <Button
              transparent
              circle
              icon={<X />}
              onClick={hide}
            />
          </Modal.HeaderButtons>
        </Modal.Header>
        <Modal.Body className="flex items-center">
          <QuestionMark size="10em" stroke="2" color="var(--primary)" />
          <div>
            <Typo h2>Hey handsome!</Typo>
            <Typo>Keep in mind, Confirm is Modal, as alway should be.</Typo>
            <Typo>Are you sure you want to continue this decision?.</Typo>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button primary onClick={hide} className="mr-2">
            Yes, i keep my decision
          </Button>
          <Button onClick={hide}>
            No, i don't
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={show}>Open Confirm</Button>
    </div>
  );
};

export default Demo;

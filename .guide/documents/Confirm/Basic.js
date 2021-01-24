import React from 'react';
import {
  Button,
  Confirm,
  Typo,
  useModal
} from '@fork-ui/components/core';

const Demo = () => {
  const [{ open, show, hide }] = useModal(false);

  return (
    <div className="flex">
      <Confirm
        open={open}
        onClose={hide}
        onCancel={hide}
        onOk={hide}
        title="CONFIRM TITLE"
        style={{
          minWidth: 400,
        }}
      >
        <Typo h2>Hey handsome!</Typo>
        <Typo>Keep in mind, Confirm is Modal, as alway should be.</Typo>
        <Typo>Are you sure you want to continue this decision?.</Typo>
      </Confirm>
      <Button onClick={show}>
        Open Confirm
      </Button>
    </div>
  );
};

export default Demo;

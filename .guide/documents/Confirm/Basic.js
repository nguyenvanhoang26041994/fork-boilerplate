import React from 'react';
import { Button, Confirm, useModal } from '@fork-ui/components/core';

import IconStepper from '../Stepper/Icon';

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
      >
        <IconStepper />
      </Confirm>
      <Button onClick={show}>Open Confirm</Button>
    </div>
  );
};

export default Demo;

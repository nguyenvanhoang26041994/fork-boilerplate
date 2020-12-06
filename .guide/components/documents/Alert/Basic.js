import React, { useState, useCallback } from 'react';
import { Button, Alert } from '@fork-ui/components/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Alert
        warning
        open={open}
        onClose={onClose}
        title="Warning Title"
      />
      <Button onClick={onOpen}>Open Alert</Button>
    </div>
  );
};

export default Demo;

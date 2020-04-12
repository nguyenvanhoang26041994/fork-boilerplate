import React, { useState, useCallback } from 'react';
import { Button, Alert } from '@/components';

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

Demo.header = 'BASIC';
Demo.href = 'alert-basic';
Demo.code = `import React, { useState, useCallback } from 'react';
import { Button, Alert } from '@/components';

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
`;

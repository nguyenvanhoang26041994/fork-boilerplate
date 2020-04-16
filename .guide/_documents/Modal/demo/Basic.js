import React, { useState, useCallback } from 'react';
import { Button, Modal } from '@/rc-neumorphism/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Modal open={open} onClose={onClose} title="Modal Title">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
    </div>
  );
};

export default Demo;
Demo.header = 'BASIC';
Demo.anchorTitle = 'Basic';
Demo.href = 'modal-basic';

Demo.code = `import React, { useState, useCallback } from 'react';
import { Button, Modal } from 'rc-neumorphism/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Modal open={open} onClose={onClose} title="Modal Title">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
    </div>
  );
};

export default Demo;
`;

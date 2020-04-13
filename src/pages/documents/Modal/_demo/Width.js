import React, { useState, useCallback } from 'react';
import { Button, Modal } from '@/components';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Modal
        open={open}
        onClose={onClose}
        title="Modal Title"
        className="w-1/2"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
    </div>
  );
};

export default Demo;

Demo.header = 'WIDTH';
Demo.href = 'modal-width';
Demo.code = `import React, { useState, useCallback } from 'react';
import { Button, Modal } from '@/components';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Modal
        open={open}
        onClose={onClose}
        title="Modal Title"
        className="w-1/2"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
    </div>
  );
};

export default Demo;
`;

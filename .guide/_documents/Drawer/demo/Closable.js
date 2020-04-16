import React, { useState, useCallback } from 'react';
import { Button, Drawer } from '@/rc-neumorphism/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Drawer
        open={open}
        onClose={onClose}
        title="Drawer Title"
        className="w-1/3"
        closable={false}
      >
        <Button onClick={onClose}>Close</Button>
      </Drawer>
      <Button onClick={onOpen}>Open Drawer</Button>
    </div>
  );
};

export default Demo;
Demo.header = 'CLOSABLE';
Demo.anchorTitle = 'Closable';
Demo.href = 'drawer-closable';

Demo.code = `import React, { useState, useCallback } from 'react';
import { Button, Drawer } from 'rc-neumorphism/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Drawer
        open={open}
        onClose={onClose}
        title="Drawer Title"
        className="w-1/3"
        closable={false}
      >
        <Button onClick={onClose}>Close</Button>
      </Drawer>
      <Button onClick={onOpen}>Open Drawer</Button>
    </div>
  );
};

export default Demo;
`;

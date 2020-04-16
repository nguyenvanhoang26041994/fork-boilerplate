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
        className="w-1/2"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Drawer>
      <Button onClick={onOpen}>Open Drawer</Button>
    </div>
  );
};

export default Demo;
Demo.header = 'WIDTH';
Demo.anchorTitle = 'Width';
Demo.href = 'drawer-width';

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
        className="w-1/2"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Drawer>
      <Button onClick={onOpen}>Open Drawer</Button>
    </div>
  );
};

export default Demo;
`;

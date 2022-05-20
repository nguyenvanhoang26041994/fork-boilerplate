export const Drawer = {
  code: `import React from 'react';
import { DemoContent } from '@fork-guide/components';
import { Drawer, Button } from 'fork-design';

export default () => {
  const { isOpen, doOpen, doClose } = Drawer.useDrawer(false);

  return (
    <React.Fragment>
      <Drawer isOpen={isOpen} w="800px">
        <Drawer.Header>
          HEADER
          <Drawer.Closer onClick={doClose} />
        </Drawer.Header>
        <Drawer.Body>
          <DemoContent />
        </Drawer.Body>
        <Drawer.Footer className="justify-center">
          <Button onClick={doClose}>CANCEL</Button>
          <Button onClick={doClose} color="primary">OK</Button>
        </Drawer.Footer>
      </Drawer>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Drawer',
}

export const Placement = {
  code: `import React from 'react';
import { DemoContent } from '@fork-guide/components';
import { Drawer, Button } from 'fork-design';

export default () => {
  const { isOpen, doOpen, doClose } = Drawer.useDrawer(false);

  return (
    <React.Fragment>
      <Drawer isOpen={isOpen} w="800px" placement="left">
        <Drawer.Header>
          HEADER
          <Drawer.Closer onClick={doClose} />
        </Drawer.Header>
        <Drawer.Body>
          <DemoContent />
        </Drawer.Body>
        <Drawer.Footer className="justify-center">
          <Button onClick={doClose}>CANCEL</Button>
          <Button onClick={doClose} color="primary">OK</Button>
        </Drawer.Footer>
      </Drawer>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Placement',
}


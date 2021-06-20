export const Centered = {
  code: `import React from 'react';
import { DemoContent } from '@style-guide/components';
import { Modal, Button } from '@fork-ui/core';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} w="700px" centered>
        <Modal.Header>
          TITLE
          <Modal.Closer onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose} border="solid">CANCEL</Button>
          <Button onClick={doClose} color="primary" border="solid">OK</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Centered',
}

export const MarginView = {
  code: `import React from 'react';
import { DemoContent } from '@style-guide/components';
import { Modal, Button } from '@fork-ui/core';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} w="700px" style={{ top: 3 }}>
        <Modal.Header>
          TITLE
          <Modal.Closer onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose} border="solid">CANCEL</Button>
          <Button onClick={doClose} color="primary" border="solid">OK</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Margin View',
}

export const Modal = {
  code: `import React from 'react';
import { DemoContent } from '@style-guide/components';
import { Modal, Button } from '@fork-ui/core';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} w="700px">
        <Modal.Header>
          TITLE
          <Modal.Closer onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose} border="solid">CANCEL</Button>
          <Button onClick={doClose} color="primary" border="solid">OK</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Modal',
}

export const Width = {
  code: `import React from 'react';
import { DemoContent } from '@style-guide/components';
import { Modal, Button } from '@fork-ui/core';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} w="700px">
        <Modal.Header>
          TITLE
          <Modal.Closer onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose} border="solid">CANCEL</Button>
          <Button onClick={doClose} color="primary" border="solid">OK</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Width',
}


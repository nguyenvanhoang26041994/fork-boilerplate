export const Centered = {
  code: `import React from 'react';
import { DemoContent } from '@fork-guide/components';
import { Modal, Button } from '@fork-ui/core';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} style={{ width: '700px' }} centered>
        <Modal.Header>
          TITLE
          <Modal.Closer onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose}>CANCEL</Button>
          <Button onClick={doClose} color="primary">OK</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Centered',
}

export const ClickOutSide = {
  code: `import React from 'react';
import { DemoContent } from '@fork-guide/components';
import { Modal, Button } from '@fork-ui/core';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} style={{ width: '700px' }} onOutsideClick={doClose}>
        <Modal.Header>
          TITLE
          <Modal.Closer onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose}>CANCEL</Button>
          <Button onClick={doClose} color="primary">OK</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Click Out Side',
}

export const CustomCloseIcon = {
  code: `import React from 'react';
import { DemoContent } from '@fork-guide/components';
import { Modal, Button } from '@fork-ui/core';
import { Minus } from '@fork-ui/icons/lazy';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} style={{ width: '700px' }}>
        <Modal.Header>
          TITLE
          <Modal.Closer icon={<Minus />} onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose}>CANCEL</Button>
          <Button onClick={doClose} color="primary">OK</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Custom Close Icon',
}

export const CustomHeader = {
  code: `import React from 'react';
import { DemoContent } from '@fork-guide/components';
import { Modal, Button } from '@fork-ui/core';
import { Minus, Refresh } from '@fork-ui/icons/lazy';

export default () => {
  const { isOpen, doOpen, doClose, doRefresh, isOpenFresh } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} style={{ width: '700px' }}>
        <Modal.Header>
          TITLE
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 'auto',
            margin: '8px',
          }}>
            <Button color="transparent" rounded icon={<Refresh />} onClick={doRefresh} className="mr-1" />
            <Button color="transparent" rounded icon={<Minus />} onClick={doClose} />
          </div>
        </Modal.Header>
        <Modal.Body>
          {isOpenFresh && <DemoContent />}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose}>CANCEL</Button>
          <Button onClick={doClose} color="primary">OK</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Custom Header',
}

export const MarginView = {
  code: `import React from 'react';
import { DemoContent } from '@fork-guide/components';
import { Modal, Button } from '@fork-ui/core';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} style={{ width: 700, top: 3 }}>
        <Modal.Header>
          TITLE
          <Modal.Closer onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose}>CANCEL</Button>
          <Button onClick={doClose} color="primary">OK</Button>
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
import { DemoContent } from '@fork-guide/components';
import { Modal, Button } from '@fork-ui/core';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} style={{ width: '700px' }}>
        <Modal.Header>
          TITLE
          <Modal.Closer onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose}>CANCEL</Button>
          <Button onClick={doClose} color="primary">OK</Button>
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
import { DemoContent } from '@fork-guide/components';
import { Modal, Button } from '@fork-ui/core';

export default () => {
  const { isOpen, doOpen, doClose } = Modal.useModal(false);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} style={{ width: '700px' }}>
        <Modal.Header>
          TITLE
          <Modal.Closer onClick={doClose} />
        </Modal.Header>
        <Modal.Body>
          <DemoContent />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={doClose}>CANCEL</Button>
          <Button onClick={doClose} color="primary">OK</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={doOpen}>Open Modal</Button>
    </React.Fragment>
  );
};
`,
  demoName: 'Width',
}


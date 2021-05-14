import React from 'react';
import {
  Button,
  Drawer,
  useModal,
} from '@fork-ui/components/core';
import X from '@fork-ui/components/icons/all/X';

import DemoContent from '../../shared/DemoContent';

const Demo = () => {
  const [{ open, show, hide }] = useModal(false);

  return (
    <div className="flex">
      <Drawer open={open} style={{ minWidth: 900 }}>
        <Drawer.Header>
          <Drawer.HeaderTitle>DRAWER TITLE</Drawer.HeaderTitle>
          <Drawer.HeaderButtons>
            <Button transparent circle icon={<X />} onClick={hide} />
          </Drawer.HeaderButtons>
        </Drawer.Header>
        <Drawer.Body>
          <DemoContent />
          <DemoContent />
        </Drawer.Body>
        <Drawer.Footer>
          <Button primary onClick={hide} className="mr-2">OK</Button>
          <Button onClick={hide}>Cancle</Button>
        </Drawer.Footer>
      </Drawer>
      <Button onClick={show}>Open Drawer</Button>
    </div>
  );
};

export default Demo;

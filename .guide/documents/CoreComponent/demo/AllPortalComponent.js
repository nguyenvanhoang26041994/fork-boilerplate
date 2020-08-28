import React from 'react';
import {
  SpeedDial,
  Button,
  Popover,
  Tooltip,
} from "@@/fork-ui/src/components/core";
import {
  CloudDownload,
  Coin,
  ColorSwatch,
  Plus,
  Dots,
} from '@@/fork-ui/src/components/icons';
import Wrapper from '@@/.guide/shared/Wrapper';
import DemoContent from '@@/.guide/shared/DemoContent2';

const Demo = () => {
  return (
    <Wrapper>
      <Button>Open Drawer</Button>
      <Button>Open Modal</Button>
      <Button>Open Confirm</Button>
      <Button>Push Alert</Button>
      <Button>Push Notification</Button>
      <Tooltip title="Tooltip message!">
        <Button>Hover Me!</Button>
      </Tooltip>
      <Popover overlay={(
        <div className="p-5">
          <DemoContent />
        </div>
      )}>
        <Button>Click Me!</Button>
      </Popover>
      <Button>Click Me!</Button>
      <SpeedDial right overlay={
        <React.Fragment>
          <SpeedDial.Button icon={<CloudDownload />} />
          <SpeedDial.Button icon={<Coin />} />
          <SpeedDial.Button icon={<ColorSwatch />} />
          <SpeedDial.Button icon={<Plus />} />
        </React.Fragment>
      }>
        <Button style={{ width: '3em' }} icon={<Dots />} />
      </SpeedDial>
    </Wrapper>
  );
}

export default Demo;

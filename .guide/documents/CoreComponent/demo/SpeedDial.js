import React from "react";
import { SpeedDial, Button } from "@@/fork-ui/src/components/core";
import {
  CloudDownload,
  Coin,
  ColorSwatch,
  Plus,
  Dots,
} from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
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
  );
};

export default Demo;

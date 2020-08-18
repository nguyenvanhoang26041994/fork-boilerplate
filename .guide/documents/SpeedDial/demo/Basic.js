import React from "react";
import { SpeedDial, Button } from "@/fork-ui/core";
import { CloudDownload, Coin, ColorSwatch } from '@@/fork-ui/src/components/Icon';

const Demo = () => {
  return (
    <div
      className="flex w-full flex-col"
      style={{
        height: '300px',
      }}
    >
      <SpeedDial right overlay={
        <React.Fragment>
          <SpeedDial.Button disabled onClick={() => console.log('Hi')} icon={<CloudDownload />} />
          <SpeedDial.Button primary onClick={() => console.log('Hello')} icon={<Coin />} />
          <SpeedDial.Button onClick={() => console.log('Chào')} icon={<ColorSwatch />} />
        </React.Fragment>
      }>
        <Button style={{ width: '3em' }} icon={<Plus />} />
      </SpeedDial>
    </div>
  );
};

export default Demo;

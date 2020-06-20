import React from "react";
import { SpeedDial, Button } from "@/fork-ui/core";

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
          <SpeedDial.Button disabled onClick={() => console.log('Hi')} icon="cloud-download" />
          <SpeedDial.Button primary onClick={() => console.log('Hello')} icon="coin" />
          <SpeedDial.Button onClick={() => console.log('Chào')} icon="color-swatch" />
        </React.Fragment>
      }>
        <Button style={{ width: '3em' }} icon="plus" />
      </SpeedDial>
    </div>
  );
};

export default Demo;

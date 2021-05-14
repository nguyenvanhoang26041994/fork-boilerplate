import React from 'react';
import { SpeedDial, Button } from '@fork-ui/components/core';
import Plus from '@fork-ui/components/icons/all/Plus';
import CloudDownload from '@fork-ui/components/icons/all/CloudDownload';
import Coin from '@fork-ui/components/icons/all/Coin';
import ColorSwatch from '@fork-ui/components/icons/all/ColorSwatch';

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

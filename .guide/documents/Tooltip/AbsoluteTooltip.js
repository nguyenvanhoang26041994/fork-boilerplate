import React from 'react';
import { Button, Tooltip } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip absolute topStart title="top-start">
          <Button style={{ width: '3em' }} className="m-2">TL</Button>
        </Tooltip>
        <Tooltip absolute top title="top">
          <Button style={{ width: '3em' }} className="m-2">T</Button>
        </Tooltip>
        <Tooltip absolute topEnd title="top-end">
          <Button style={{ width: '3em' }} className="m-2">TR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <Tooltip absolute leftStart title="left-start">
          <Button style={{ width: '3em' }} className="m-2">LT</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip absolute rightStart title="right-start">
          <Button style={{ width: '3em' }} className="m-2">RT</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip absolute left title="left">
          <Button style={{ width: '3em' }} className="m-2">L</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip absolute right title="right">
          <Button style={{ width: '3em' }} className="m-2">R</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip absolute leftEnd title="left-end">
          <Button style={{ width: '3em' }} className="m-2">LB</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip absolute rightEnd title="right-end">
          <Button style={{ width: '3em' }} className="m-2">RB</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip absolute bottomStart title="bottom-start">
          <Button style={{ width: '3em' }} className="m-2">BL</Button>
        </Tooltip>
        <Tooltip absolute bottom title="bottom">
          <Button style={{ width: '3em' }} className="m-2">B</Button>
        </Tooltip>
        <Tooltip absolute bottomEnd title="bottom-end">
          <Button style={{ width: '3em' }} className="m-2">BR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};

export default Demo;

import React from 'react';
import { Tooltip, Button } from '@fork-ui/core';

export default () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip topStart title="top-start">
          <Button style={{ width: '3em' }} className="m-2">TL</Button>
        </Tooltip>
        <Tooltip top title="top">
          <Button style={{ width: '3em' }} className="m-2">T</Button>
        </Tooltip>
        <Tooltip topEnd title="top-end">
          <Button style={{ width: '3em' }} className="m-2">TR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <Tooltip leftStart title="left-start">
          <Button style={{ width: '3em' }} className="m-2">LT</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip rightStart title="right-start">
          <Button style={{ width: '3em' }} className="m-2">RT</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip left title="left">
          <Button style={{ width: '3em' }} className="m-2">L</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip right title="right">
          <Button style={{ width: '3em' }} className="m-2">R</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip leftEnd title="left-end">
          <Button style={{ width: '3em' }} className="m-2">LB</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip rightEnd title="right-end">
          <Button style={{ width: '3em' }} className="m-2">RB</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip bottomStart title="bottom-start">
          <Button style={{ width: '3em' }} className="m-2">BL</Button>
        </Tooltip>
        <Tooltip bottom title="bottom">
          <Button style={{ width: '3em' }} className="m-2">B</Button>
        </Tooltip>
        <Tooltip bottomEnd title="bottom-end">
          <Button style={{ width: '3em' }} className="m-2">BR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};

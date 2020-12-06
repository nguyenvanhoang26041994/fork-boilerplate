import React from 'react';
import { Button, Tooltip } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip absolute topLeft title="top-left" className="m-2">
          <Button style={{ width: '3em' }}>TL</Button>
        </Tooltip>
        <Tooltip absolute top title="top" className="m-2">
          <Button style={{ width: '3em' }}>T</Button>
        </Tooltip>
        <Tooltip absolute topRight title="top-right" className="m-2">
          <Button style={{ width: '3em' }}>TR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <Tooltip absolute leftTop title="left-top"  className="m-2">
          <Button style={{ width: '3em' }}>LT</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip absolute rightTop title="right-top" className="m-2">
          <Button style={{ width: '3em' }}>RT</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip absolute left title="left" className="m-2">
          <Button style={{ width: '3em' }}>L</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip absolute right title="right" className="m-2">
          <Button style={{ width: '3em' }}>R</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip absolute leftBottom title="left-bottom" className="m-2">
          <Button style={{ width: '3em' }}>LB</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip absolute rightBottom title="right-bottom" className="m-2">
          <Button style={{ width: '3em' }}>RB</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip absolute bottomLeft title="bottom-left" className="m-2">
          <Button style={{ width: '3em' }}>BL</Button>
        </Tooltip>
        <Tooltip absolute bottom title="bottom" className="m-2">
          <Button style={{ width: '3em' }}>B</Button>
        </Tooltip>
        <Tooltip absolute bottomRight title="bottom-right" className="m-2">
          <Button style={{ width: '3em' }}>BR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};

export default Demo;

import React from 'react';
import { Popconfirm, Button } from '@fork-ui/core';
import { DemoContentV2 } from '@style-guide/components';

export default () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popconfirm placement="top-start" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">TL</Button>
        </Popconfirm>
        <Popconfirm placement="top" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">T</Button>
        </Popconfirm>
        <Popconfirm placement="top-end" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">TR</Button>
        </Popconfirm>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <Popconfirm placement="left-start" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">LT</Button>
        </Popconfirm>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popconfirm placement="right-start" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">RT</Button>
        </Popconfirm>
      </div>

      <div className="flex">
        <Popconfirm placement="left" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">L</Button>
        </Popconfirm>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popconfirm placement="right" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">R</Button>
        </Popconfirm>
      </div>

      <div className="flex">
        <Popconfirm placement="left-end" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">LB</Button>
        </Popconfirm>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popconfirm placement="right-end" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">RB</Button>
        </Popconfirm>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popconfirm placement="bottom-start" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">BL</Button>
        </Popconfirm>
        <Popconfirm placement="bottom" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">B</Button>
        </Popconfirm>
        <Popconfirm placement="bottom-end" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">BR</Button>
        </Popconfirm>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};

import React from 'react';
import { Popover, Button } from 'fork-design';
import { DemoContentV2 } from '@fork-guide/components';

export default () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover placement="top-start" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">TL</Button>
        </Popover>
        <Popover placement="top" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">T</Button>
        </Popover>
        <Popover placement="top-end" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">TR</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <Popover placement="left-start" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">LT</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover placement="right-start" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">RT</Button>
        </Popover>
      </div>

      <div className="flex">
        <Popover placement="left" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">L</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover placement="right" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">R</Button>
        </Popover>
      </div>

      <div className="flex">
        <Popover placement="left-end" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">LB</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover placement="right-end" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">RB</Button>
        </Popover>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover placement="bottom-start" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">BL</Button>
        </Popover>
        <Popover placement="bottom" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">B</Button>
        </Popover>
        <Popover placement="bottom-end" overlay={<DemoContentV2 />}>
          <Button style={{ width: '3em' }} className="m-2">BR</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};

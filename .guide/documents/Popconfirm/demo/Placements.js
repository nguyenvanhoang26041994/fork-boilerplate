import React from 'react';
import { Popconfirm, Button } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Popconfirm topLeft title="top-left" className="m-2">
          <Button style={{ width: "3em" }}>TL</Button>
        </Popconfirm>
        <Popconfirm top title="top" className="m-2">
          <Button style={{ width: "3em" }}>T</Button>
        </Popconfirm>
        <Popconfirm topRight title="top-right" className="m-2">
          <Button style={{ width: "3em" }}>TR</Button>
        </Popconfirm>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
      </div>

      <div className="flex">
        <Popconfirm leftTop title="left-top" className="m-2">
          <Button style={{ width: "3em" }}>LT</Button>
        </Popconfirm>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Popconfirm rightTop title="right-top" className="m-2">
          <Button style={{ width: "3em" }}>RT</Button>
        </Popconfirm>
      </div>

      <div className="flex">
        <Popconfirm left title="left" className="m-2">
          <Button style={{ width: "3em" }}>L</Button>
        </Popconfirm>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Popconfirm right title="right" className="m-2">
          <Button style={{ width: "3em" }}>R</Button>
        </Popconfirm>
      </div>

      <div className="flex">
        <Popconfirm leftBottom title="left-bottom" className="m-2">
          <Button style={{ width: "3em" }}>LB</Button>
        </Popconfirm>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Popconfirm rightBottom title="right-bottom" className="m-2">
          <Button style={{ width: "3em" }}>RB</Button>
        </Popconfirm>
      </div>

      <div className="flex">
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Popconfirm bottomLeft title="bottom-left" className="m-2">
          <Button style={{ width: "3em" }}>BL</Button>
        </Popconfirm>
        <Popconfirm bottom title="bottom" className="m-2">
          <Button style={{ width: "3em" }}>B</Button>
        </Popconfirm>
        <Popconfirm bottomRight title="bottom-right" className="m-2">
          <Button style={{ width: "3em" }}>BR</Button>
        </Popconfirm>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
      </div>
    </div>
  );
};

export default Demo;

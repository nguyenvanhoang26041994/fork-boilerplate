import React from 'react';
import { Popconfirm, Button } from '@/fork-ui/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Popconfirm absolute topLeft title="top-left">
          <Button className="m-2" style={{ width: "3em" }}>TL</Button>
        </Popconfirm>
        <Popconfirm absolute top title="top">
          <Button className="m-2" style={{ width: "3em" }}>T</Button>
        </Popconfirm>
        <Popconfirm absolute topRight title="top-right">
          <Button className="m-2" style={{ width: "3em" }}>TR</Button>
        </Popconfirm>
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
      </div>

      <div className="flex">
        <Popconfirm absolute leftTop title="left-top">
          <Button className="m-2" style={{ width: "3em" }}>LT</Button>
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
        <Popconfirm absolute rightTop title="right-top">
          <Button className="m-2" style={{ width: "3em" }}>RT</Button>
        </Popconfirm>
      </div>

      <div className="flex">
        <Popconfirm absolute left title="left">
          <Button className="m-2" style={{ width: "3em" }}>L</Button>
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
        <Popconfirm absolute right title="right">
          <Button className="m-2" style={{ width: "3em" }}>R</Button>
        </Popconfirm>
      </div>

      <div className="flex">
        <Popconfirm absolute leftBottom title="left-bottom">
          <Button className="m-2" style={{ width: "3em" }}>LB</Button>
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
        <Popconfirm absolute rightBottom title="right-bottom">
          <Button className="m-2" style={{ width: "3em" }}>RB</Button>
        </Popconfirm>
      </div>

      <div className="flex">
        <Button
          disabled
          className="m-2"
          style={{ width: "3em", visibility: "hidden" }}
        ></Button>
        <Popconfirm absolute bottomLeft title="bottom-left">
          <Button className="m-2" style={{ width: "3em" }}>BL</Button>
        </Popconfirm>
        <Popconfirm absolute bottom title="bottom">
          <Button className="m-2" style={{ width: "3em" }}>B</Button>
        </Popconfirm>
        <Popconfirm absolute bottomRight title="bottom-right">
          <Button className="m-2" style={{ width: "3em" }}>BR</Button>
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

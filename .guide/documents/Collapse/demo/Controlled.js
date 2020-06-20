import React, { useState, useCallback } from 'react';
import { Collapse, Divider } from '@/fork-ui/core';

const Description = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: '10rem' }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
  );
};

const Demo = () => {
  const [activeKeys, setActiveKeys] = useState([]);
  const onPanelClick = useCallback(key => setActiveKeys([key]));
  const onActiveKeysChange = useCallback(keys => console.log(keys), []);

  return (
    <div className="flex flex-col w-full">
      <Collapse activeKeys={activeKeys} onActiveKeysChange={onActiveKeysChange}>
        <Collapse.Item
          title="Collapse One"
          key="panel-1"
          onClick={() => onPanelClick('panel-1')}
        >
          <Description />
        </Collapse.Item>
        <Collapse.Item
          title="Collapse Two"
          key="panel-2"
          onClick={() => onPanelClick('panel-2')}
        >
          <Description />
        </Collapse.Item>
        <Collapse.Item
          title="Collapse Three"
          key="panel-3"
          onClick={() => onPanelClick('panel-3')}
        >
          <Description />
        </Collapse.Item>
      </Collapse>
      <Divider dashed title="OTHER WAY BUT MORE SHORT" />
      <Collapse
        activePanels={activeKeys}
        onPanelClick={onPanelClick}
        onActiveKeysChange={onActiveKeysChange}
        className="mt-10"
      >
        <Collapse.Item title="Collapse One" key="panel-1">
          <Description />
        </Collapse.Item>
        <Collapse.Item title="Collapse Two" key="panel-2">
          <Description />
        </Collapse.Item>
        <Collapse.Item title="Collapse Three" key="panel-3">
          <Description />
        </Collapse.Item>
      </Collapse>
    </div>
  );
};

export default Demo;

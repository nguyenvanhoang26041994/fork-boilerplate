import React from 'react';
import { Tooltip } from '@@/fork-ui/src/components/core';
import * as list from '@@/fork-ui/src/components/icons';

const IconBox = ({ Icon, name }) => {
  return (
    <Tooltip title={name}>
      <div
        style={{ width: '3rem', height: '3rem'}}
        className="flex items-center justify-center"
      >
        <Icon />
      </div>
    </Tooltip>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        {Object.keys(list).map(name => (
          <IconBox name={name} Icon={list[name]} key={name} />
        ))}
      </div>
    </div>
  );
};

export default Demo;

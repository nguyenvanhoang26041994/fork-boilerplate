import React from 'react';
import { Icon, Tooltip } from '@/rc-neumorphism/core';
import list from '@@/rc-neumorphism/src/components/Icon/svg';

const IconBox = ({ name }) => {
  return (
    <Tooltip title={name}>
      <div
        style={{ width: '3rem', height: '3rem'}}
        className="flex itemx-center justify-center"
      >
        <Icon name={name} />
      </div>
    </Tooltip>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        {Object.keys(list).map(key => (
          <IconBox name={key} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Demo;

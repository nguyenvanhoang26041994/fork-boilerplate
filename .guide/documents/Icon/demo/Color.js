import React from 'react';
import { Activity, Alarm, Adjustments } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
    <div className="flex">
      <Activity className="mr-5" color="blueviolet" />
      <Alarm className="mr-5" color="red" />
      <Adjustments className="mr-5" color="#00ffe9" />
    </div>
  );
};

export default Demo;

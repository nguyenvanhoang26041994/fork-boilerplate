import React from 'react';
import { Activity, Alarm, Adjustments } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
    <div className="flex">
      <Activity className="mr-5" />
      <Alarm className="mr-5" />
      <Adjustments className="mr-5" />
    </div>
  );
};

export default Demo;

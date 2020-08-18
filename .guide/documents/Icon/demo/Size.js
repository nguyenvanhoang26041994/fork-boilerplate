import React from 'react';
import { Alarm } from '@@/fork-ui/src/components/Icon';

const Demo = () => {
  return (
    <div className="flex">
      <Alarm className="mr-5" size="1rem" />
      <Alarm className="mr-5" size="1.5rem" />
      <Alarm className="mr-5" size="30px" />
    </div>
  );
};

export default Demo;

import React from 'react';
import { PureNotification } from '@@/fork-ui/src/components/core';
import DemoContent2 from '@@/.guide/shared/DemoContent2';

const Demo = () => {
  return (
    <PureNotification
      title="Notification"
      className="w-full"
      style={{ boxShadow: 'var(--overlay--shadow)' }}
    >
      <DemoContent2 />
    </PureNotification>
  );
};

export default Demo;

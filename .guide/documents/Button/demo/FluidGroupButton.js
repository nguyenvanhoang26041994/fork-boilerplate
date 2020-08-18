import React from 'react';
import { Button, ButtonGroup } from '@/fork-ui/core';
import { Power, Message, Bell } from '@@/fork-ui/src/components/Icon';

const Demo = () => {
  return (
    <ButtonGroup fluid>
      <Button icon={<Power />} />
      <Button icon={<Message />} />
      <Button icon={<Bell />} />
    </ButtonGroup>
  );
};

export default Demo;

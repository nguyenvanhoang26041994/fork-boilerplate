import React from 'react';
import { Button, ButtonGroup } from '@fork-ui/components/core';
import { Power, Message, Bell } from '@fork-ui/components/icons';

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

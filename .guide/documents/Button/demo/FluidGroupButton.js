import React from 'react';
import { Button, ButtonGroup } from '@@/fork-ui/src/components/core';
import { Power, Message, Bell } from '@@/fork-ui/src/components/icons';

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

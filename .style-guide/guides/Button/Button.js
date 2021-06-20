import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button, ButtonGroup } from '@fork-ui/core';
import { Power, Message, Bell } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper className="mb-5">
      <Button>Basic</Button>
      <Button loading shape="circle" icon={<Power />} />
      <Button shape="rounded" color="primary">Primary</Button>
      <Button border="dashed" color="danger">Danger</Button>
      <Button shape="circle" icon={<Power />} />
      <ButtonGroup>
        <Button color="primary" icon={<Power />} />
        <Button color="primary" icon={<Message />} />
        <Button color="primary" icon={<Bell />} />
      </ButtonGroup>
    </Wrapper>
  );
};

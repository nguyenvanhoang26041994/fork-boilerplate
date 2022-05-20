import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Button, ButtonGroup } from 'fork-design';
import { Power, Message, Bell } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper className="mb-5">
      <Button>Basic</Button>
      <Button loading rounded icon={<Power />} />
      <Button rounded color="primary">Primary</Button>
      <Button border="dashed" color="danger">Danger</Button>
      <Button rounded icon={<Power />} />
      <ButtonGroup>
        <Button color="primary" icon={<Power />} />
        <Button color="primary" icon={<Message />} />
        <Button color="primary" icon={<Bell />} />
      </ButtonGroup>
    </Wrapper>
  );
};

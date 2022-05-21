import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Button, ButtonGroup } from 'fork-design';
import { Power, Message, Bell } from 'fork-design/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <ButtonGroup>
        <Button icon={<Power />} />
        <Button icon={<Message />} />
        <Button icon={<Bell />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button color="primary" icon={<Power />} />
        <Button color="primary" icon={<Message />} />
        <Button color="primary" icon={<Bell />} />
      </ButtonGroup>
      <ButtonGroup color="danger">
        <Button color="primary" icon={<Power />} />
        <Button color="danger" icon={<Message />} />
        <Button icon={<Bell />} />
      </ButtonGroup>
    </Wrapper>
  );
};

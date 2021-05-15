import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Button, ButtonGroup } from '@fork-ui/components/core';
import Power from '@fork-ui/components/icons/all/Power';
import Message from '@fork-ui/components/icons/all/Message';
import Bell from '@fork-ui/components/icons/all/Bell';

const Demo = () => (
  <Wrapper className="mb-5">
    <Button>Basic</Button>
    <Button color="primary">Primary</Button>
    <Button shape="rounded" color="primary">Primary</Button>
    <Button color="danger">Danger</Button>
    <Button shape="circle" icon={<Power />} />
    <ButtonGroup>
      <Button color="primary" icon={<Power />} />
      <Button color="primary" icon={<Message />} />
      <Button color="primary" icon={<Bell />} />
    </ButtonGroup>
  </Wrapper>
);

export default Demo;

import React from 'react';
import styled from 'styled-components';
import { Button } from '@@/fork-ui/src/components/core';
import { Cast, Camera, Inbox } from '@@/fork-ui/src/components/icons';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Button size="0.85rem">0.85rem</Button>
      <Button size="1.5em">1.5em</Button>
      <Button size="25px">25px</Button>
      <Button size="25px" circle icon={<Cast />} />
      <Button size="25px" circle icon={<Camera />} />
      <Button size="25px" circle icon={<Inbox />} />
    </Wrapper>
  );
};

export default Demo;

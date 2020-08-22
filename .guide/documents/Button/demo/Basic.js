import React from 'react';
import styled from 'styled-components';
import { Button } from '@@/fork-ui/src/components/core';
import { Cast, Calendar, Camera, Inbox } from '@@/fork-ui/src/components/icons';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => (
  <Wrapper>
    <Button>Basic</Button>
    <Button rounded>Rounded</Button>
    <Button circle icon={<Cast />} />
    <Button circle glassed icon={<Camera />} />
    <Button circle primary outlined icon={<Inbox />} />
    <Button circle transparent icon={<Calendar />} />
  </Wrapper>
);

export default Demo;

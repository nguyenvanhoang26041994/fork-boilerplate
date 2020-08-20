import React from 'react';
import styled from 'styled-components';
import { Button, Badge } from '@@/fork-ui/src/components/core';
import { Inbox, Bell } from '@@/fork-ui/src/components/icons';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 2rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Badge count={2}>
        <Button icon={<Bell />} />
      </Badge>
      <Badge overlap count={9}>
        <Button circle icon={<Inbox />} />
      </Badge>
    </Wrapper>
  );
};

export default Demo;

import React from 'react';
import styled from 'styled-components';

import { Button, ButtonGroup } from '@@/fork-ui/src/components/core';
import { Power, Message, Bell } from '@@/fork-ui/src/components/icons';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 1rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <ButtonGroup>
        <Button icon={<Power />} />
        <Button icon={<Message />} />
        <Button icon={<Bell />} />
      </ButtonGroup>
      <ButtonGroup primary>
        <Button icon={<Power />} />
        <Button icon={<Message />} />
        <Button icon={<Bell />} />
      </ButtonGroup>
      <ButtonGroup glassed>
        <Button icon={<Power />} />
        <Button icon={<Message />} />
        <Button icon={<Bell />} />
      </ButtonGroup>
    </Wrapper>
  );
};

export default Demo;

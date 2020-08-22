import React from 'react';
import styled from 'styled-components';
import { Avatar, Tooltip, Badge } from '@@/fork-ui/src/components/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Tooltip title="Hoàng Nguyễn">
        <Avatar name="H" />
      </Tooltip>
      <Tooltip title="H">
        <Badge count={1} dot color="#0df316" overlap bottomRight>
          <Avatar name="H" />
        </Badge>
      </Tooltip>
    </Wrapper>
  );
};

export default Demo;

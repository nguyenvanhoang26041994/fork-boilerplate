import React from 'react';
import styled from 'styled-components';
import { Avatar, Badge } from '@@/fork-ui/src/components/core';

const avatarLink = 'https://i.pinimg.com/originals/ce/53/c5/ce53c5bcd350ba856e5c53c343376fb2.jpg';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Badge count={1} dot color="#0df316" overlap bottomRight>
        <Avatar src={avatarLink} name="H" />
      </Badge>
      <Badge count={1} dot color="#0df316" bottomRight>
        <Avatar src={avatarLink} square name="H" />
      </Badge>
      <Badge count={1} dot color="#0df316" overlap bottomRight>
        <Avatar name="H" />
      </Badge>
    </Wrapper>
  );
};

export default Demo;

import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@@/fork-ui/src/components/core';

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
      <Avatar
        size="0.85rem"
        src={avatarLink}
        name="H"
      />
      <Avatar
        size="2rem"
        src={avatarLink}
        name="H"
      />
      <Avatar
        size="40px"
        src={avatarLink}
        name="H"
      />
    </Wrapper>
  );
};

export default Demo;

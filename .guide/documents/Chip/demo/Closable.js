import React  from 'react';
import styled from 'styled-components';

import { Chip, Avatar } from '@/fork-ui/core';

const avatarLink = '';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Chip
        closable={false}
        avatar={<Avatar src={avatarLink} name="Hoàng Nguyễn" />}
        label="Hoàng Nguyễn"
      />
      <Chip
        closable={false}
        label="Sơn Lê"
      />
    </Wrapper>
  );
};

export default Demo;

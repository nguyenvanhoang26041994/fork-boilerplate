import React  from 'react';
import styled from 'styled-components';

import { Chip, Avatar } from '@/fork-ui/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const avatarLink = '';

const Demo = () => {
  return (
    <Wrapper>
      <Chip
        avatar={<Avatar src={avatarLink} name="Hoàng Nguyễn" />}
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        avatar={<Avatar name="Sơn Lê" />}
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
    </Wrapper>
  );
};

export default Demo;

import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@style-guide/components';

const FancyBoxColored = styled.div`
  border-radius: 3px;
  width: 80px;
  height: 80px;
  background-color: ${props => props.color};
`;

export default () => {
  return (
    <Wrapper>
      <FancyBoxColored color="var(--primary)" />
      <FancyBoxColored color="var(--red)" />
      <FancyBoxColored color="var(--green)" />
      <FancyBoxColored color="var(--skeleton-color)" />
      <FancyBoxColored color="var(--btn-bg)" />
    </Wrapper>
  );
};

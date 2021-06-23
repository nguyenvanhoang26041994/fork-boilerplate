import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@style-guide/components';

const ColorItem = styled.li`
  background-color: ${props => props.color};
  color: ${props => props.textColor};
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
`;
const ColorList = styled.ul`
  display: flex;

  ${ColorItem} {
    margin-right: 5px;
  }
`;

export default () => {
  return (
    <Wrapper>
      {/* <ColorList>
        <ColorItem color="var(--dark-gray-1)" textColor="#fff" />
        <ColorItem color="var(--dark-gray-2)" textColor="#fff" />
        <ColorItem color="var(--dark-gray-3)" textColor="#fff" />
        <ColorItem color="var(--dark-gray-4)" textColor="#fff" />
        <ColorItem color="var(--dark-gray-5)" textColor="#fff" />
      </ColorList>
      <ColorList>
        <ColorItem color="var(--gray-1)" textColor="#000" />
        <ColorItem color="var(--gray-2)" textColor="#000" />
        <ColorItem color="var(--gray-3)" textColor="#000" />
        <ColorItem color="var(--gray-4)" textColor="#000" />
        <ColorItem color="var(--gray-5)" textColor="#000" />
      </ColorList>
      <ColorList>
        <ColorItem color="var(--light-gray-1)" textColor="#000" />
        <ColorItem color="var(--light-gray-2)" textColor="#000" />
        <ColorItem color="var(--light-gray-3)" textColor="#000" />
        <ColorItem color="var(--light-gray-4)" textColor="#000" />
        <ColorItem color="var(--light-gray-5)" textColor="#000" />
      </ColorList> */}
    </Wrapper>
  );
};

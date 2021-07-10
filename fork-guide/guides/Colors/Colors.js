import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import copyToClipboard from '@fork-ui/utils/copyToClipboard';

import GrayColors from './GrayColors';

const ColorItem = styled.li`
  background-color: ${props => props.color};
  color: ${props => props.textColor};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ColorList = styled.ul`
  width: 130px;
  ${ColorItem} {
    margin-bottom: 1px;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Wrapper>
        <ColorList>
          {/* <ColorItem color="var(--blue-1)" onClick={() => copyToClipboard('--blue-1')} textColor="#000" />
          <ColorItem color="var(--blue-2)" onClick={() => copyToClipboard('--blue-2')} textColor="#000" />
          <ColorItem color="var(--blue-3)" onClick={() => copyToClipboard('--blue-3')} textColor="#000" />
          <ColorItem color="var(--blue-4)" onClick={() => copyToClipboard('--blue-4')} textColor="#000" />
          <ColorItem color="var(--blue-5)" onClick={() => copyToClipboard('--blue-5')} textColor="#000" /> */}
          <ColorItem color="var(--blue-6)" onClick={() => copyToClipboard('--blue-6')} textColor="#fff" />
          {/* <ColorItem color="var(--blue-7)" onClick={() => copyToClipboard('--blue-7')} textColor="#fff" />
          <ColorItem color="var(--blue-8)" onClick={() => copyToClipboard('--blue-8')} textColor="#fff" />
          <ColorItem color="var(--blue-9)" onClick={() => copyToClipboard('--blue-9')} textColor="#fff" />
          <ColorItem color="var(--blue-10)" onClick={() => copyToClipboard('--blue-10')} textColor="#fff" /> */}
        </ColorList>
        <ColorList>
          {/* <ColorItem color="var(--green-1)" onClick={() => copyToClipboard('--green-1')} textColor="#000" />
          <ColorItem color="var(--green-2)" onClick={() => copyToClipboard('--green-2')} textColor="#000" />
          <ColorItem color="var(--green-3)" onClick={() => copyToClipboard('--green-3')} textColor="#000" />
          <ColorItem color="var(--green-4)" onClick={() => copyToClipboard('--green-4')} textColor="#000" />
          <ColorItem color="var(--green-5)" onClick={() => copyToClipboard('--green-5')} textColor="#000" /> */}
          <ColorItem color="var(--green-6)" onClick={() => copyToClipboard('--green-6')} textColor="#fff" />
          {/* <ColorItem color="var(--green-7)" onClick={() => copyToClipboard('--green-7')} textColor="#fff" />
          <ColorItem color="var(--green-8)" onClick={() => copyToClipboard('--green-8')} textColor="#fff" />
          <ColorItem color="var(--green-9)" onClick={() => copyToClipboard('--green-9')} textColor="#fff" />
          <ColorItem color="var(--green-10)" onClick={() => copyToClipboard('--green-10')} textColor="#fff" /> */}
        </ColorList>
        <ColorList>
          {/* <ColorItem color="var(--orange-1)" onClick={() => copyToClipboard('--orange-1')} textColor="#000" />
          <ColorItem color="var(--orange-2)" onClick={() => copyToClipboard('--orange-2')} textColor="#000" />
          <ColorItem color="var(--orange-3)" onClick={() => copyToClipboard('--orange-3')} textColor="#000" />
          <ColorItem color="var(--orange-4)" onClick={() => copyToClipboard('--orange-4')} textColor="#000" />
          <ColorItem color="var(--orange-5)" onClick={() => copyToClipboard('--orange-5')} textColor="#000" /> */}
          <ColorItem color="var(--orange-6)" onClick={() => copyToClipboard('--orange-6')} textColor="#fff" />
          {/* <ColorItem color="var(--orange-7)" onClick={() => copyToClipboard('--orange-7')} textColor="#fff" />
          <ColorItem color="var(--orange-8)" onClick={() => copyToClipboard('--orange-8')} textColor="#fff" />
          <ColorItem color="var(--orange-9)" onClick={() => copyToClipboard('--orange-9')} textColor="#fff" />
          <ColorItem color="var(--orange-10)" onClick={() => copyToClipboard('--orange-10')} textColor="#fff" /> */}
        </ColorList>
        <ColorList>
          {/* <ColorItem color="var(--red-1)" onClick={() => copyToClipboard('--red-1')} textColor="#000" />
          <ColorItem color="var(--red-2)" onClick={() => copyToClipboard('--red-2')} textColor="#000" />
          <ColorItem color="var(--red-3)" onClick={() => copyToClipboard('--red-3')} textColor="#000" />
          <ColorItem color="var(--red-4)" onClick={() => copyToClipboard('--red-4')} textColor="#000" />
          <ColorItem color="var(--red-5)" onClick={() => copyToClipboard('--red-5')} textColor="#000" /> */}
          <ColorItem color="var(--red-6)" onClick={() => copyToClipboard('--red-6')} textColor="#fff" />
          {/* <ColorItem color="var(--red-7)" onClick={() => copyToClipboard('--red-7')} textColor="#fff" />
          <ColorItem color="var(--red-8)" onClick={() => copyToClipboard('--red-8')} textColor="#fff" />
          <ColorItem color="var(--red-9)" onClick={() => copyToClipboard('--red-9')} textColor="#fff" />
          <ColorItem color="var(--red-10)" onClick={() => copyToClipboard('--red-10')} textColor="#fff" /> */}
        </ColorList>
      </Wrapper>
      <Wrapper>
        <GrayColors />
      </Wrapper>
    </Wrapper>
  );
};

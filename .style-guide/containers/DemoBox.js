import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { ButtonGroup, Button } from '@fork-ui/core';
import { Braces } from '@fork-ui/icons/lazy';
import CodeDrawerContext from '@style-guide/contexts/CodeDrawer';

const DemoBoxWrapper = styled.div`
  width: 100%;
  background-color: var(--bg);

  .show-when-codebox-hover {
    opacity: 0;
    transition: opacity 0.25s;
  }
  &:hover {
    .show-when-codebox-hover {
      opacity: 1;
    }
  }
`;

const DemoBoxHeader = styled.h2`
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

const Demo = styled.div`
  padding: 18px;
  min-height: 200px;
`;

const DemoBox = ({ children, name, code }) => {
  const { doOpen } = CodeDrawerContext.useContext();

  return (
    <DemoBoxWrapper>
      <DemoBoxHeader>
        {name}
        <ButtonGroup className="show-when-codebox-hover">
          <Button
            color="transparent"
            icon={<Braces />}
            onClick={() => doOpen(code, name)}
          />
        </ButtonGroup>
      </DemoBoxHeader>
      <Demo>
        {children}
      </Demo>
    </DemoBoxWrapper>
  );
};

export default DemoBox;

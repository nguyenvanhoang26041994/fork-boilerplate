import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { ButtonGroup, Button } from '@fork-ui/core';
import { Braces } from '@fork-ui/icons/lazy';
import CodeDrawerContext from '@style-guide/containers/CodeDrawer/CodeDrawer.Context';

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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const DemoBox = ({ children, name, code }) => {
  const { doOpen } = useContext(CodeDrawerContext);

  const doOpenCodeDrawer = useCallback(() => {
    doOpen(code, name);
  }, [doOpen]);

  return (
    <DemoBoxWrapper>
      <DemoBoxHeader>
        {name}
        <ButtonGroup className="show-when-codebox-hover">
          <Button
            color="transparent"
            icon={<Braces />}
            onClick={doOpenCodeDrawer}
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

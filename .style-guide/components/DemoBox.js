import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Animated, ButtonGroup, Button } from '@fork-ui/core';
import { ThumbUp, Message2, Braces } from '@fork-ui/icons/lazy';

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

const CodeMarkdownWrapper = styled.div`
  > pre {
    margin: 0 !important;
    border-radius: 0 !important;
    background-color: var(--bg) !important;
    padding: 1em !important;
    .token,
    .token.arrow {
      background-color: transparent !important;
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

const DemoBox = ({ children, name, code, defaultShowCode }) => {
  const [showCode, setShowCode] = useState(defaultShowCode);
  const toggleShowCode = useCallback(() => setShowCode(prev => !prev), [setShowCode]);

  return (
    <DemoBoxWrapper>
      <DemoBoxHeader>
        {name}
        <ButtonGroup className="show-when-codebox-hover">
          <Button transparent icon={<ThumbUp />} />
          <Button transparent icon={<Message2 />} />
          <Button
            transparent
            icon={<Braces />}
            onClick={toggleShowCode}
            style={{
              color: showCode ? 'var(--primary)' : null,
            }}
          />
        </ButtonGroup>
      </DemoBoxHeader>
      <Demo>
        {children}
      </Demo>
      <Animated.Expand isOpen={showCode}>
        <CodeMarkdownWrapper className="code-box-code">
          <SyntaxHighlighter language="jsx" style={coy}>
            {code}
          </SyntaxHighlighter>
        </CodeMarkdownWrapper>
      </Animated.Expand>
    </DemoBoxWrapper>
  );
};

export default DemoBox;

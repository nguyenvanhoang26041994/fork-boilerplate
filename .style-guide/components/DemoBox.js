import React from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DemoBoxWrapper = styled.div``;
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

const DemoBox = ({ children, name, code }) => {
  return (
    <DemoBoxWrapper>
      <span>{name}</span>
      {children}
      <CodeMarkdownWrapper>
        <SyntaxHighlighter language="jsx" style={coy}>
          {code}
        </SyntaxHighlighter>
      </CodeMarkdownWrapper>
    </DemoBoxWrapper>
  );
};

export default DemoBox;

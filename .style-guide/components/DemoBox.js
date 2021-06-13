import React, { useMemo, } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

const CodeBlock = ({ language, children }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={coy}
    >
      {children}
    </SyntaxHighlighter>
  );
};

const CodeMarkdown = ({ children }) => {
  const source = useMemo(() => `\`\`\`jsx\n${children}\n\`\`\``, [children]);

  return (
    <CodeMarkdownWrapper className="code-box-code">
      <ReactMarkdown
        components={CodeBlock}
      >
        {source}
      </ReactMarkdown>
    </CodeMarkdownWrapper>
  );
};

const DemoBox = ({ children, name, code }) => {
  return (
    <DemoBoxWrapper>
      <span>{name}</span>
      {children}
      <CodeMarkdown>
        {code}
      </CodeMarkdown>
    </DemoBoxWrapper>
  );
};

export default DemoBox;

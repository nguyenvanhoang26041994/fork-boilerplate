import React from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Drawer } from '@fork-ui/core';
import DarkMode from '@contexts/DarkMode';
import CodeDrawerContext from '@style-guide/contexts/CodeDrawer';

const CodeMarkdownWrapper = styled.div`
  width: 100%;
  overflow-y: auto;

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

const CodeDrawer = () => {
  const { isOpen, doClose, code } = CodeDrawerContext.useContext();
  const { isDark } = DarkMode.useContext();

  return (
    <Drawer isOpen={isOpen} style={{ minWidth: 900 }}>
      <Drawer.Header>
        <Drawer.Closer onClick={doClose} />
      </Drawer.Header>
      <Drawer.Body>
        {code && (
          <CodeMarkdownWrapper className="code-box-code">
            <SyntaxHighlighter language="jsx" style={isDark ? okaidia : coy}>
              {code}
            </SyntaxHighlighter>
          </CodeMarkdownWrapper>
        )}
      </Drawer.Body>
    </Drawer>
  );
};

export default CodeDrawer;

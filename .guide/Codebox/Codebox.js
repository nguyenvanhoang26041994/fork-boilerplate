import React, { useMemo, useContext, useState, useCallback } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Animated } from '@@/fork-ui/src/components/core';
import { Code, DotsVertical } from '@@/fork-ui/src/components/icons';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import AppContext from '@/AppContext';

const CodeBlock = ({ language, value }) => {
  const { isDark } = useContext(AppContext);

  return (
    <SyntaxHighlighter
      language={language}
      style={isDark ? okaidia : coy}
    >
      {value}
    </SyntaxHighlighter>
  );
};

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

const CodeMarkdown = ({ show, children }) => {
  const source = useMemo(() => `\`\`\`jsx\n${children}\n\`\`\``, [children]);

  return (
    <Animated.Expand isExpanded={show}>
      <CodeMarkdownWrapper className="code-box-code">
        <ReactMarkdown
          source={source}
          renderers={{ code: CodeBlock }}
        />
      </CodeMarkdownWrapper>
    </Animated.Expand>
  );
};

const CodeboxWrapper = styled.div`
  width: 100%;
  background-color: var(--bg);

  .__code {
    opacity: 0;
    transition: opacity 0.25s;
  }

  &:hover {
    .__code {
      opacity: 1;
    }
  }
`;

const CodeboxHeader = styled.h2`
  font-size: 1em;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CodeboxDemo = styled.div`
    display: flex;
    padding: 1rem 1rem 4rem 1rem;
`;

const Codebox = ({ className, defaultShowCode, Component, ...otherProps }) => {
  const [showCode, setShowCode] = useState(defaultShowCode);
  const toggleShowCode = useCallback(() => setShowCode(prev => !prev), [setShowCode]);

  return (
    <CodeboxWrapper className={className} id={Component.href} {...otherProps}>
      <CodeboxHeader>
        {Component.header}
        <div>
          <Code
            className="__code"
            glassed
            onClick={toggleShowCode}
          />
        </div>
      </CodeboxHeader>
      <CodeboxDemo>
        <Component />
      </CodeboxDemo>
      <CodeMarkdown show={showCode}>
        {Component.code}
      </CodeMarkdown>
    </CodeboxWrapper>
  );
};
Codebox.defaultProps = {
  defaultShowCode: false,
}
export default Codebox;

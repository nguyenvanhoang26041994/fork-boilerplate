import React, { useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Animated, ButtonGroup, Button } from '@fork-ui/components/core';
import { Braces, ThumbUp, Message2 } from '@fork-ui/components/icons';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, value, isDark }) => {
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

const CodeMarkdown = ({ show, isDark, children }) => {
  const source = useMemo(() => `\`\`\`jsx\n${children}\n\`\`\``, [children]);

  return (
    <Animated.Expand isExpanded={show}>
      <CodeMarkdownWrapper className="code-box-code">
        <ReactMarkdown
          source={source}
          renderers={{ code: props => <CodeBlock {...props} isDark={isDark} /> }}
        />
      </CodeMarkdownWrapper>
    </Animated.Expand>
  );
};

const CodeboxWrapper = styled.div`
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

const ButtonGroupStyled = styled(ButtonGroup)`
`;

const Codebox = ({ className, defaultShowCode, Component, isDark, ...otherProps }) => {
  const [showCode, setShowCode] = useState(defaultShowCode);
  const toggleShowCode = useCallback(() => setShowCode(prev => !prev), [setShowCode]);

  return (
    <CodeboxWrapper className={className} id={Component.href} {...otherProps}>
      <CodeboxHeader>
        {Component.header}
        <ButtonGroupStyled className="show-when-codebox-hover" color="ghost">
          <Button
            icon={<ThumbUp />}
          />
          <Button
            icon={<Message2 />}
          />
          <Button
            icon={<Braces />}
            onClick={toggleShowCode}
            style={{
              color: showCode ? 'var(--primary)' : null,
            }}
          />
        </ButtonGroupStyled>
      </CodeboxHeader>
      <CodeboxDemo>
        <Component />
      </CodeboxDemo>
      <CodeMarkdown show={showCode} isDark={isDark}>
        {Component.code}
      </CodeMarkdown>
    </CodeboxWrapper>
  );
};
Codebox.defaultProps = {
  defaultShowCode: false,
}
export default Codebox;

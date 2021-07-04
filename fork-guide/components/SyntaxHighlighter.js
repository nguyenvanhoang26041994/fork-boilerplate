import React from 'react';
import styled from 'styled-components';
import { Prism } from 'react-syntax-highlighter';
import { coy, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ConfigPropsTool from '@fork-guide/components/ConfigPropsTool';
import DarkMode from '@contexts/DarkMode';

const SyntaxHighlighterStyled = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  background-color: var(--bg);

  > pre {
    margin: 0 !important;
    border-radius: 0 !important;
    background-color: transparent !important;
    padding: 1em !important;
    .token,
    .token.arrow {
      background-color: transparent !important;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SyntaxHighlighter = ({ code, className, style }) => {
  const { isDark } = DarkMode.useContext();

  if (!code) {
    return null;
  }

  return (
    <Wrapper>
      {/* <ConfigPropsTool /> */}
      <SyntaxHighlighterStyled className={className} style={style}>
        <Prism language="jsx" style={isDark ? okaidia : coy} wrapLongLines showLineNumbers>
          {code}
        </Prism>
      </SyntaxHighlighterStyled>
    </Wrapper>
  );
};

export default SyntaxHighlighter;

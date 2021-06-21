import React from 'react';
import styled from 'styled-components';
import { Prism } from 'react-syntax-highlighter';
import { coy, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import DarkMode from '@contexts/DarkMode';

const SyntaxHighlighterStyled = styled.div`
  width: 100%;
  overflow-y: auto;

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

const SyntaxHighlighter = ({ code, className }) => {
  const { isDark } = DarkMode.useContext();

  if (!code) {
    return null;
  }

  return (
    <SyntaxHighlighterStyled className={className}>
      <Prism language="jsx" style={isDark ? okaidia : coy}>
        {code}
      </Prism>
    </SyntaxHighlighterStyled>
  );
};

export default SyntaxHighlighter;

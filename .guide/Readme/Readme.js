import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

import AppContext from '@/AppContext';

require('./Readme.scss');

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

const Readme = ({ README }) => {
  return (
    <div className="guide-readme">
      <ReactMarkdown
        source={README}
        renderers={{ code: CodeBlock }}
      />
    </div>
  );
};

export default Readme;

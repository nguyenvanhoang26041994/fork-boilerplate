import React, { useMemo } from 'react';
import cn from 'classnames';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

require('./Codebox.scss');

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={okaidia}
    >
      {value}
    </SyntaxHighlighter>
  );
};

const CodeMarkdown = ({ children }) => {
  const source = useMemo(() => `\`\`\`jsx\n${children}\n\`\`\``, [children]);

  return (
    <div className="code-box-code">
      <ReactMarkdown
        source={source}
        renderers={{ code: CodeBlock }}
      />
    </div>
  );
};

const Codebox = ({ className, Component }) => {
  return (
    <div className={cn('code-box', className)} id={Component.href}>
      <h2 className="code-box-header">{Component.header}</h2>
      <div className="code-box-demo">
        <Component />
      </div>
      <CodeMarkdown>
        {Component.code}
      </CodeMarkdown>
    </div>
  );
};

export default Codebox;

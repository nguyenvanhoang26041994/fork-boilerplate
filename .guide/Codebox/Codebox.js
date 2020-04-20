import React, { useMemo, useContext } from 'react';
import cn from 'classnames';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import AppContext from '@/AppContext';

require('./Codebox.scss');

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

const DescriptionMarkdown = ({ children }) => {
  return (
    <div className="code-box-description">
      <ReactMarkdown
        source={children}
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
      <DescriptionMarkdown>
        {Component.markdown}
      </DescriptionMarkdown>
      <CodeMarkdown>
        {Component.code}
      </CodeMarkdown>
    </div>
  );
};

export default Codebox;

import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { Icon, Divider } from '@/components';

require('./Codebox.scss');

const Codebox = ({ defaultExpanded, className, Component }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const toggleExpanded = useCallback(() => setExpanded(prev => !prev), []);

  return (
    <div className={cn('code-box', className)} id={Component.href}>
      <h2 className="code-box-header">{Component.header}</h2>
      <div className="code-box-demo">
        <Component />
      </div>
      <div className={cn('code-box-description', { '--hidden': !Component.description })}>
        <Divider dashed />
        <pre>
          {Component.description}
        </pre>
      </div>
      <div className={cn('code-box-guide', { '--expanded': expanded, '--hidden': !Component.code })}>
        <Divider
          dashed
          transparent={!expanded}
          right
          title={(
            <span onClick={toggleExpanded} className="code-box-collapse-code-header">
              <Icon name="caret-down" /> Code
            </span>
          )}
        />
        <pre className="code-box-code">
          {Component.code}
        </pre>
      </div>
    </div>
  );
};

export default Codebox;

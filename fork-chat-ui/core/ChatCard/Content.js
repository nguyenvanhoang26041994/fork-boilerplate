import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import PropType from 'prop-types';

const Content = ({ className, children }) => {
  return (
    <div className={cn('fchat-card__content', className)}>
      {children}
    </div>
  );
};

export default Content;

import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import PropType from 'prop-types';

const Name = ({ className, isHighlight, children }) => {
  return (
    <div className={cn('fchat-card__name', { 'fchat-card__name--highlight': isHighlight }, className)}>
      {children}
    </div>
  );
};

export default Name;

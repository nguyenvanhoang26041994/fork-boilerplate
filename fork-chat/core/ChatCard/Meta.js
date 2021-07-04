import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import PropType from 'prop-types';

const Meta = ({ className, children }) => {
  return (
    <div className={cn('fchat-card__meta', className)}>
      {children}
    </div>
  );
};

export default Meta;

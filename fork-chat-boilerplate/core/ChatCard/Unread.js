import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import PropType from 'prop-types';

const Unread = ({ className, children }) => {
  return (
    <div className={cn('fchat-card__unread', className)}>
      {children}
    </div>
  );
};

export default Unread;

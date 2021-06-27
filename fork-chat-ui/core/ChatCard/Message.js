import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import PropType from 'prop-types';

const Message = ({ className, children }) => {
  return (
    <div className={cn('fchat-card__message', className)}>
      {children}
    </div>
  );
};

export default Message;

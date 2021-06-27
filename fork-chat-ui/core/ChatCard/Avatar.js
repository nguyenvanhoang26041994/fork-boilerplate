import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import PropType from 'prop-types';

const Avatar = ({ className, children }) => {
  return (
    <div className={cn('fchat-card__avatar', className)}>
      {children}
    </div>
  );
};

export default Avatar;

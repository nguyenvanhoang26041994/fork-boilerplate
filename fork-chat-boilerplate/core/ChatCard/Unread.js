import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import PropType from 'prop-types';
import BadgeCounter from '@fork-ui/core/Badge/Counter'

const Unread = ({ className, count }) => {
  return (
    <BadgeCounter count={count} className={cn('fchat-card__unread', className)} overflow={99} />
  );
};

export default Unread;

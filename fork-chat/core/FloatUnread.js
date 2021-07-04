import React from 'react';
import cn from 'classnames';
import { Badge, Button } from '@fork-ui/core';
import ChevronDown from '@fork-ui/icons/ChevronDown';

const FloatUnread = ({ className, count, onClick }) => {
  return (
    <Badge.Counter
      count={count}
      overlap
      placement="top-end"
      className={cn('ffloat-unread', className)}
    >
      <Button rounded icon={<ChevronDown />} onClick={onClick} />
    </Badge.Counter>
  );
};

export default FloatUnread;

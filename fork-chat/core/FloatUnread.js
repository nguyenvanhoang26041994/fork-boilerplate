import React from 'react';
import cn from 'classnames';
import { Badge, Button } from 'fork-design';
import ChevronDown from 'fork-design/icons/ChevronDown';

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

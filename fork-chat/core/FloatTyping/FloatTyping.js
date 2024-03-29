import React from 'react';
import cn from 'classnames';
import { AvatarGroup, Loader } from 'fork-design';

const FloatTyping = ({ className, children, ...otherProps }) => {
  return (
    <div className={cn('ffloat-typing', className)} {...otherProps}>
      <AvatarGroup>
        {children}
      </AvatarGroup>
      <Loader.Dots className="ml-3" size="5px" color="var(--primary)" />
    </div>
  );
};

export default FloatTyping;

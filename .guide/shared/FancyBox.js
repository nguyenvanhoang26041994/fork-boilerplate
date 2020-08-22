import React from 'react';
import cn from 'classnames';

const FancyBox = ({
  size = '50px',
  circle,
  style,
  children,
  hidden,
  className,
}) => (
  <div
    className={cn(
      'flex items-center justify-center',
      className,
    )}
    style={{
      height: size,
      width: size,
      visibility: hidden ? 'hidden' : null,
      borderRadius: circle ? '100rem' : '0.5rem',
      backgroundColor: 'var(--secondary-bg)',
      ...style
    }}
  >
    {children}
  </div>
);

export default FancyBox;

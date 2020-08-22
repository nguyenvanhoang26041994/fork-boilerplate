import React from 'react';
import cn from 'classnames';

import { Badge } from '@@/fork-ui/src/components/core';

const FancyBox = ({
  size = '50px',
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
      borderRadius: '100rem',
      backgroundColor: 'var(--secondary-bg)',
      ...style
    }}
  >
    {children}
  </div>
);

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <FancyBox hidden className="m-5" />
        <Badge count={7} overlap topLeft className="m-5">
          <FancyBox>TL</FancyBox>
        </Badge>
        <Badge count={7} overlap top className="m-5">
          <FancyBox>T</FancyBox>
        </Badge>
        <Badge count={7} overlap topRight className="m-5">
          <FancyBox>TR</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
      </div>

      <div className="flex">
        <Badge count={7} overlap leftTop className="m-5">
          <FancyBox>LT</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} placement="right-top" className="m-5">
          <FancyBox>RT</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <Badge count={7} overlap left className="m-5">
          <FancyBox>L</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} overlap right className="m-5">
          <FancyBox>R</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <Badge count={7} overlap leftBottom className="m-5">
          <FancyBox>LB</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} overlap rightBottom className="m-5">
          <FancyBox>RB</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <FancyBox hidden className="m-5" />
        <Badge count={7} overlap bottomLeft className="m-5">
          <FancyBox>BL</FancyBox>
        </Badge>
        <Badge count={7} overlap bottom className="m-5">
          <FancyBox>B</FancyBox>
        </Badge>
        <Badge count={7} overlap bottomRight className="m-5">
          <FancyBox>BR</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
      </div>
    </div>
  );
};

export default Demo;

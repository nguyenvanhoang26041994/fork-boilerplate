import React from 'react';
import { Badge } from '@@/fork-ui/src/components/core';
import { Message, Check } from '@@/fork-ui/src/components/icons';

const FancyBox = ({ size, circle }) => (
  <div
    style={{
      height: size,
      width: size,
      backgroundColor: 'var(--secondary-bg)',
      borderRadius: circle ? '100rem' : '0.5rem',
    }}
  />
);

const Demo = () => {
  return (
    <div className="flex">
      <Badge icon={<Message />} className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge
        icon={<Check />}
        className="mr-5">
        <FancyBox size="50px"
      />
      </Badge>
      <Badge
        overlap
        bottomRight
        color="#0df316"
        icon={<Check />}
        bottomRight
      >
        <FancyBox size="50px" circle />
      </Badge>
    </div>
  );
};

export default Demo;

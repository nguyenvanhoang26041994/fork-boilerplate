import React, { useState } from 'react';
import { Badge, Switch } from '@/fork-ui/core';

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
  const [invisible, setInvisible] = useState(true);

  return (
    <div>
      <Badge count={999} invisible={invisible}>
        <FancyBox size="50px" />
      </Badge>
      <Switch
        className="mt-10"
        checked={invisible}
        onChange={e => setInvisible(e.target.checked)}
      />
    </div>
  );
};

export default Demo;

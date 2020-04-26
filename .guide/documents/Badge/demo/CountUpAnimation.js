import React, { useState, useEffect } from 'react';
import { Badge } from '@/rc-neumorphism/core';

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
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(prev => prev + 1), 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex">
      <Badge count={count}>
        <FancyBox size="50px" />
      </Badge>
    </div>
  );
};

export default Demo;

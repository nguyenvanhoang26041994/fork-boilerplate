import React from 'react';
import { Skeleton } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Skeleton circle />
      <Skeleton circle size="3rem" />
    </div>
  );
};

export default Demo;
Demo.header = 'CIRCLE SKELETON';
Demo.anchorTitle = 'Circle skeleton';
Demo.href = 'skeleton-circle-skeleton';

Demo.code = `import React from 'react';
import { Skeleton } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Skeleton circle />
      <Skeleton circle size="3rem" />
    </div>
  );
};

export default Demo;
`;

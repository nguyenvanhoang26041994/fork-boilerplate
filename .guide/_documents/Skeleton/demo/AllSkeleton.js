import React  from 'react';
import { Skeleton } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Skeleton circle />
      <Skeleton rect />
      <Skeleton rect w="70%" />
      <Skeleton rect h="10rem" />
      <Skeleton circle size="3rem" />
      <Skeleton p w="90%" />
    </div>
  );
};

export default Demo;
Demo.header = 'ALL SKELETON';
Demo.anchorTitle = 'All skeleton';
Demo.href = 'skeleton-all-skeleton';

Demo.code = `import React  from 'react';
import { Skeleton } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Skeleton circle />
      <Skeleton rect />
      <Skeleton rect w="70%" />
      <Skeleton rect h="10rem" />
      <Skeleton circle size="3rem" />
      <Skeleton p w="90%" />
    </div>
  );
};

export default Demo;
`;

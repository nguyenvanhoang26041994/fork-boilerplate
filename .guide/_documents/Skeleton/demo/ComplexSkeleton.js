import React from 'react';
import { Skeleton } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <Skeleton circle className="mb-2" />
      <Skeleton rect className="mb-2" />
      <Skeleton rect w="50%" className="mb-2" />
      <Skeleton rect w="70%" className="mb-2" />
    </div>
  );
};

export default Demo;
Demo.header = 'Complex Skeleton';
Demo.href = 'skeleton-complex-skeleton';

Demo.code = `import React from 'react';
import { Skeleton } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <Skeleton circle className="mb-2" />
      <Skeleton rect className="mb-2" />
      <Skeleton rect w="50%" className="mb-2" />
      <Skeleton rect w="70%" className="mb-2" />
    </div>
  );
};

export default Demo;
`;

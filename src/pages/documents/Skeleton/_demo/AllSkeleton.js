import React  from 'react';
import { Skeleton } from '@/components';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <Skeleton circle className="mb-2" />
      <Skeleton rect className="mb-2" />
      <Skeleton rect w="50%" className="mb-2" />
      <Skeleton rect w="70%" className="mb-2" />
      <Skeleton rect h="10rem" className="mb-2" />
      <Skeleton circle size="3rem" className="mb-2" />
      <Skeleton p w="50%" />
      <Skeleton p w="20%" />
      <Skeleton p w="10%" />
      <Skeleton p w="50%" />
      <Skeleton p w="70%" />
      <Skeleton p w="40%" />
      <Skeleton p w="70%" />
      <Skeleton p w="90%" />
    </div>
  );
};

export default Demo;

Demo.header = 'ALLSKELETON';
Demo.href = 'skeleton-allskeleton';
Demo.code = `import React  from 'react';
import { Skeleton } from '@/components';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <Skeleton circle className="mb-2" />
      <Skeleton rect className="mb-2" />
      <Skeleton rect w="50%" className="mb-2" />
      <Skeleton rect w="70%" className="mb-2" />
      <Skeleton rect h="10rem" className="mb-2" />
      <Skeleton circle size="3rem" className="mb-2" />
      <Skeleton p w="50%" />
      <Skeleton p w="20%" />
      <Skeleton p w="10%" />
      <Skeleton p w="50%" />
      <Skeleton p w="70%" />
      <Skeleton p w="40%" />
      <Skeleton p w="70%" />
      <Skeleton p w="90%" />
    </div>
  );
};

export default Demo;
`;

import React  from 'react';
import { Skeleton } from '@/components';

const Demo = () => {
  return (
    <div
      className="flex flex-col w-full"
      style={{
        height: '300px',
      }}
    >
      <div className="flex">
        <Skeleton active />
      </div>
    </div>
  );
};

Demo.code = `

`;

export default Demo;

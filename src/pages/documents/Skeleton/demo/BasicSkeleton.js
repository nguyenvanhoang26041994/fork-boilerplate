import React from 'react';
import { Skeleton } from '@/components';

const BasicLayout = () => (
  <>
    <Skeleton p w='70%' />
    <Skeleton p w='40%' />
    <Skeleton p w='70%' />
    <Skeleton p w='90%' />
  </>
);

const Demo = () => {
  return <div className="flex flex-col w-full items-start">{BasicLayout()}</div>;
};

export default Demo;

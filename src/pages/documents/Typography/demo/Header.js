import React from 'react';
import { Typo } from '@/components';

const Demo = () => {
  return (
    <div
      className="flex w-full"
      style={{
        height: '200px'
      }}
    >
      <div className="w-full">
        <Typo h1>h1. Neumorphism Pro</Typo>
        <Typo h2>h2. Neumorphism Pro</Typo>
        <Typo h3>h3. Neumorphism Pro</Typo>
        <Typo h4>h4. Neumorphism Pro</Typo>
      </div>
    </div>
  );
};

export default Demo;

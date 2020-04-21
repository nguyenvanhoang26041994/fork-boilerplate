import React from 'react';
import { Flex } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div
      className='flex w-full flex-col'
      style={{
        height: 200
      }}
    >
      <Flex margin={2}>
        <div className="w-full h-12" style={{ backgroundColor: '#1d8dd8' }} />
      </Flex>
      <Flex margin={2}>
        <Flex span="1/2"><div className="w-full h-12" style={{ backgroundColor: '#1d8dd8' }} /></Flex>
        <Flex span="1/2"><div className="w-full h-12" style={{ backgroundColor: '#0099ff33' }} /></Flex>
      </Flex>
      <Flex margin={2}>
        <Flex span="1/3"><div className="w-full h-12" style={{ backgroundColor: '#1d8dd8' }} /></Flex>
        <Flex span="1/3"><div className="w-full h-12" style={{ backgroundColor: '#0099ff33' }} /></Flex>
        <Flex span="1/3"><div className="w-full h-12" style={{ backgroundColor: '#1d8dd8' }} /></Flex>
      </Flex>
      <Flex margin={2}>
        <Flex span="1/4"><div className="w-full h-12" style={{ backgroundColor: '#1d8dd8' }} /></Flex>
        <Flex span="1/4"><div className="w-full h-12" style={{ backgroundColor: '#0099ff33' }} /></Flex>
        <Flex span="1/4"><div className="w-full h-12" style={{ backgroundColor: '#1d8dd8' }} /></Flex>
        <Flex span="1/4"><div className="w-full h-12" style={{ backgroundColor: '#0099ff33' }} /></Flex>
      </Flex>
    </div>
  );
};

export default Demo;

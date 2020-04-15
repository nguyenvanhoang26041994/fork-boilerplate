import React from 'react';
import { Button, Badge } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
   <Badge count={2}>
    <Button icon="bell" />
   </Badge>
  );
};

export default Demo;

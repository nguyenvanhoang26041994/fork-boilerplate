import React from 'react';
import { Textarea } from '@/components';

const Demo = () => {
  return (
    <Textarea
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;

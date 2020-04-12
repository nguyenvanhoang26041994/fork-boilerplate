import React from 'react';
import { Button, Badge } from '@/components';

const Demo = () => {
  return (
   <Badge count={2}>
    <Button icon="bell" />
   </Badge>
  );
};

Demo.code = `
import React from 'react';
import { Button } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Button glassed>GLASSED</Button>
    </div>
  );
};
`;

export default Demo;

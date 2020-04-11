import React from 'react';
import { Button } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Button glassed>GLASSED</Button>
    </div>
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

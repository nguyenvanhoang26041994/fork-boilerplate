import React from 'react';
import { Icon } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="desktop" fontSize="1rem" />
      <Icon className="mr-5" name="desktop" fontSize="1.5rem" />
      <Icon className="mr-5" name="desktop" fontSize="30px" />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Icon } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="desktop" fontSize="1rem" />
      <Icon className="mr-5" name="desktop" fontSize="1.5rem" />
      <Icon className="mr-5" name="desktop" fontSize="30px" />
    </div>
  );
};
`;

export default Demo;

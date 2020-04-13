import React from 'react';
import { Badge } from '@/components';

const FancyBox = ({ size }) => (
  <div
    className="neumorphism--500"
    style={{ height: size, width: size }}
  />
);

const Demo = () => {
  return (
    <div className="flex">
      <Badge count={7} className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge count={999} overflowCount={99}>
        <FancyBox size="50px" />
      </Badge>
    </div>
  );
};

export default Demo;

Demo.header = 'OVERFLOWCOUNT';
Demo.href = 'badge-overflowcount';
Demo.code = `import React from 'react';
import { Badge } from '@/components';

const FancyBox = ({ size }) => (
  <div
    className="neumorphism--500"
    style={{ height: size, width: size }}
  />
);

const Demo = () => {
  return (
    <div className="flex">
      <Badge count={7} className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge count={999} overflowCount={99}>
        <FancyBox size="50px" />
      </Badge>
    </div>
  );
};

export default Demo;
`;

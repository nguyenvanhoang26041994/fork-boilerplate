import React from 'react';
import { Badge, Icon } from '@/components';

const FancyBox = ({ size, circle }) => (
  <div
    className="neumorphism--500"
    style={{
      height: size,
      width: size,
      borderRadius: circle ? '100rem' : '0.5rem',
    }}
  />
);

const Demo = () => {
  return (
    <div className="flex">
      <Badge icon="message" className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge
        icon={<Icon name="check" />}
        className="mr-5">
        <FancyBox size="50px"
      />
      </Badge>
      <Badge
        overlap
        bottomRight
        color="#0df316"
        icon={<Icon name="check" />}
        bottomRight
      >
        <FancyBox size="50px" circle />
      </Badge>
    </div>
  );
};

export default Demo;

Demo.header = 'ICON';
Demo.href = 'badge-icon';
Demo.code = `import React from 'react';
import { Badge, Icon } from '@/components';

const FancyBox = ({ size, circle }) => (
  <div
    className="neumorphism--500"
    style={{
      height: size,
      width: size,
      borderRadius: circle ? '100rem' : '0.5rem',
    }}
  />
);

const Demo = () => {
  return (
    <div className="flex">
      <Badge icon="message" className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge
        icon={<Icon name="check" />}
        className="mr-5">
        <FancyBox size="50px"
      />
      </Badge>
      <Badge
        overlap
        bottomRight
        color="#0df316"
        icon={<Icon name="check" />}
        bottomRight
      >
        <FancyBox size="50px" circle />
      </Badge>
    </div>
  );
};

export default Demo;
`;

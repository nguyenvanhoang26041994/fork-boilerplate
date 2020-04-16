import React from 'react';
import { Icon } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="alarm" size="1rem" />
      <Icon className="mr-5" name="alarm" size="1.5rem" />
      <Icon className="mr-5" name="alarm" size="30px" />
    </div>
  );
};

export default Demo;
Demo.header = 'SIZE';
Demo.anchorTitle = 'Size';
Demo.href = 'icon-size';

Demo.code = `import React from 'react';
import { Icon } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="alarm" size="1rem" />
      <Icon className="mr-5" name="alarm" size="1.5rem" />
      <Icon className="mr-5" name="alarm" size="30px" />
    </div>
  );
};

export default Demo;
`;

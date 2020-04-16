import React from 'react';
import { Icon } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="activity" color="blueviolet" />
      <Icon className="mr-5" name="alarm" color="red" />
      <Icon className="mr-5" name="adjustments" color="#00ffe9" />
    </div>
  );
};

export default Demo;
Demo.header = 'COLOR';
Demo.anchorTitle = 'Color';
Demo.href = 'icon-color';

Demo.code = `import React from 'react';
import { Icon } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="activity" color="blueviolet" />
      <Icon className="mr-5" name="alarm" color="red" />
      <Icon className="mr-5" name="adjustments" color="#00ffe9" />
    </div>
  );
};

export default Demo;
`;

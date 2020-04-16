import React  from 'react';
import { Progress } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex items-center">
      <Progress.Circle percent={0.27} r={30} className="mr-3" />
      <Progress.Circle percent={0.77} r={60} className="mr-3" />
    </div>
  );
};

export default Demo;
Demo.header = 'SIZE';
Demo.anchorTitle = 'Size';
Demo.href = 'progress-size';

Demo.code = `import React  from 'react';
import { Progress } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex items-center">
      <Progress.Circle percent={0.27} r={30} className="mr-3" />
      <Progress.Circle percent={0.77} r={60} className="mr-3" />
    </div>
  );
};

export default Demo;
`;

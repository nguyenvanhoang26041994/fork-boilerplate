import React from 'react';
import { Icon } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="activity" />
      <Icon className="mr-5" name="alarm" />
      <Icon className="mr-5" name="adjustments" />
    </div>
  );
};

export default Demo;

Demo.header = 'BASIC';
Demo.href = 'icon-basic';
Demo.code = `import React from 'react';
import { Icon } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="activity" />
      <Icon className="mr-5" name="alarm" />
      <Icon className="mr-5" name="adjustments" />
    </div>
  );
};

export default Demo;
`;

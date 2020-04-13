import React from 'react';
import { Checkbox } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Checkbox className="mr-5" />
      <Checkbox defaultChecked className="mr-5" />
      <Checkbox disabled className="mr-5" />
      <Checkbox disabled defaultChecked className="mr-5" />
    </div>
  );
};

export default Demo;

Demo.header = 'UNCONTROLLED';
Demo.href = 'checkbox-uncontrolled';
Demo.code = `import React from 'react';
import { Checkbox } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Checkbox className="mr-5" />
      <Checkbox defaultChecked className="mr-5" />
      <Checkbox disabled className="mr-5" />
      <Checkbox disabled defaultChecked className="mr-5" />
    </div>
  );
};

export default Demo;
`;
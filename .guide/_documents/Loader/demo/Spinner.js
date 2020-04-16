import React from 'react';
import { Loader } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Loader.Spinner className="mr-10" />
      <Loader.Spinner color="red" className="mr-10" />
      <Loader.Spinner size="2rem" />
    </div>
  );
};

export default Demo;
Demo.header = 'SPINNER';
Demo.anchorTitle = 'Spinner';
Demo.href = 'loader-spinner';

Demo.code = `import React from 'react';
import { Loader } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Loader.Spinner className="mr-10" />
      <Loader.Spinner color="red" className="mr-10" />
      <Loader.Spinner size="2rem" />
    </div>
  );
};

export default Demo;
`;

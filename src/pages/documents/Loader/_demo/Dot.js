import React from 'react';
import { Loader } from '@/components';

const { Dot } = Loader;

const Demo = () => {
  return (
    <div
      className="flex w-full"
      style={{
        height: '100px'
      }}
    >
      <div className="flex-1">
        <Dot small />
      </div>
      <div className="flex-1">
        <Dot />
      </div>
      <div className="flex-1">
        <Dot large />
      </div>
    </div>
  );
};

export default Demo;

Demo.header = 'DOT';
Demo.href = 'loader-dot';
Demo.code = `import React from 'react';
import { Loader } from '@/components';

const { Dot } = Loader;

const Demo = () => {
  return (
    <div
      className="flex w-full"
      style={{
        height: '100px'
      }}
    >
      <div className="flex-1">
        <Dot small />
      </div>
      <div className="flex-1">
        <Dot />
      </div>
      <div className="flex-1">
        <Dot large />
      </div>
    </div>
  );
};

export default Demo;
`;

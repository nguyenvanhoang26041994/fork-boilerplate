import React from 'react';
import { Loader } from '@/components';

const Demo = () => {
  return (
    <div
      className="flex w-full"
      style={{
        height: '100px'
      }}
    >
      <div className="flex-1">
        <Loader.Dot color="red" />
      </div>
      <div className="flex-1">
        <Loader.Dot className="your-custom" />
      </div>
      <div className="flex-1">
        <Loader.Dot size="2rem" />
      </div>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Loader } from '@/components';

export default () => {
  return (
   <>
    <Loader.Dot color="red" />
    <Loader.Dot className="your-custom" />
    <Loader.Dot size="2rem" />
   </> 
  );
}
`;

export default Demo;

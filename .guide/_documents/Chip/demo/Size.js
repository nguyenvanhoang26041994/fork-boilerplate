import React  from 'react';
import { Chip } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Chip
        fontSize="0.9rem"
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        fontSize="1.5rem"
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
      <Chip
        fontSize="25px"
        className="mr-2"
        label="Owner"
        onClick={() => console.log('Owner')}
      />
    </div>
  );
};

export default Demo;
Demo.header = 'SIZE';
Demo.anchorTitle = 'Size';
Demo.href = 'chip-size';

Demo.code = `import React  from 'react';
import { Chip } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Chip
        fontSize="0.9rem"
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        fontSize="1.5rem"
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
      <Chip
        fontSize="25px"
        className="mr-2"
        label="Owner"
        onClick={() => console.log('Owner')}
      />
    </div>
  );
};

export default Demo;
`;

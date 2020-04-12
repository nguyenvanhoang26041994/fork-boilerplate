import React  from 'react';
import { Chip } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Chip
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
      <Chip
        className="mr-2"
        label="Owner"
        onClick={() => console.log('Owner')}
      />
    </div>
  );
};

export default Demo;

Demo.header = 'BASIC';
Demo.href = 'chip-basic';
Demo.code = `import React  from 'react';
import { Chip } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Chip
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
      <Chip
        className="mr-2"
        label="Owner"
        onClick={() => console.log('Owner')}
      />
    </div>
  );
};

export default Demo;
`;

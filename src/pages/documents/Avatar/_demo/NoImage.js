import React from 'react';
import { Avatar } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Avatar name="Hoàng Nguyễn" className="mr-3" />
      <Avatar
        name="Hoàng Nguyễn"
        className="mr-3"
        color="orange"
      />
      <Avatar
        name="Hoàng Nguyễn"
        className="mr-3"
        color="#19b39d"
      />
      <Avatar name="Hoàng Nguyễn" square />
    </div>
  );
};

export default Demo;

Demo.header = 'NOIMAGE';
Demo.href = 'avatar-noimage';
Demo.code = `import React from 'react';
import { Avatar } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Avatar name="Hoàng Nguyễn" className="mr-3" />
      <Avatar
        name="Hoàng Nguyễn"
        className="mr-3"
        color="orange"
      />
      <Avatar
        name="Hoàng Nguyễn"
        className="mr-3"
        color="#19b39d"
      />
      <Avatar name="Hoàng Nguyễn" square />
    </div>
  );
};

export default Demo;
`;

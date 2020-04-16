import React  from 'react';
import { Chip, Avatar } from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  return (
    <div className="flex">
      <Chip
        avatar={<Avatar src={avatarLink} name="Hoàng Nguyễn" />}
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        avatar={<Avatar name="Sơn Lê" />}
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
    </div>
  );
};

export default Demo;
Demo.header = 'AVATAR';
Demo.anchorTitle = 'Avatar';
Demo.href = 'chip-avatar';

Demo.code = `import React  from 'react';
import { Chip, Avatar } from 'rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  return (
    <div className="flex">
      <Chip
        avatar={<Avatar src={avatarLink} name="Hoàng Nguyễn" />}
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        avatar={<Avatar name="Sơn Lê" />}
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
    </div>
  );
};

export default Demo;
`;

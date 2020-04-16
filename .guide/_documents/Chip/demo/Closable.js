import React  from 'react';
import { Chip, Avatar } from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  return (
    <div className="flex">
      <Chip
        closable
        avatar={<Avatar src={avatarLink} name="Hoàng Nguyễn" />}
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
        onRemove={() => console.log('Remove Hoàng Nguyễn')}
      />
      <Chip
        closable
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
        onRemove={() => console.log('Remove Sơn Lê')}
      />
    </div>
  );
};

export default Demo;
Demo.header = 'CLOSABLE';
Demo.anchorTitle = 'Closable';
Demo.href = 'chip-closable';

Demo.code = `import React  from 'react';
import { Chip, Avatar } from 'rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  return (
    <div className="flex">
      <Chip
        closable
        avatar={<Avatar src={avatarLink} name="Hoàng Nguyễn" />}
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
        onRemove={() => console.log('Remove Hoàng Nguyễn')}
      />
      <Chip
        closable
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
        onRemove={() => console.log('Remove Sơn Lê')}
      />
    </div>
  );
};

export default Demo;
`;

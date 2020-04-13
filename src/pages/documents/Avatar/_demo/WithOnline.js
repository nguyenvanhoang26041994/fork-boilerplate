import React from 'react';
import { Avatar, Badge } from '@/components';

const avatarLink = 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=4HRhr-vve64AX_Kw3w6&_nc_ht=scontent-hkg3-1.xx&_nc_tp=6&oh=8241a9f1e3a6c8c4494c6534a693a342&oe=5EA4BE84';

const Demo = () => {
  return (
    <Badge dot color="#0df316" overlap bottomRight>
      <Avatar
        src={avatarLink}
        name="Hoàng Nguyễn"
      />
    </Badge>
  );
};

export default Demo;

Demo.header = 'WITH ONLINE';
Demo.href = 'avatar-with-online';
Demo.code = `import React from 'react';
import { Avatar, Badge } from '@/components';

const avatarLink = 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=4HRhr-vve64AX_Kw3w6&_nc_ht=scontent-hkg3-1.xx&_nc_tp=6&oh=8241a9f1e3a6c8c4494c6534a693a342&oe=5EA4BE84';

const Demo = () => {
  return (
    <Badge dot color="#0df316" overlap bottomRight>
      <Avatar
        src={avatarLink}
        name="Hoàng Nguyễn"
      />
    </Badge>
  );
};

export default Demo;
`;

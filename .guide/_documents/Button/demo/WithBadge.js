import React from 'react';
import { Button, Badge } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
   <Badge count={2}>
    <Button icon="bell" />
   </Badge>
  );
};

export default Demo;
Demo.header = 'WITH BADGE';
Demo.anchorTitle = 'With badge';
Demo.href = 'button-with-badge';

Demo.code = `import React from 'react';
import { Button, Badge } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
   <Badge count={2}>
    <Button icon="bell" />
   </Badge>
  );
};

export default Demo;
`;

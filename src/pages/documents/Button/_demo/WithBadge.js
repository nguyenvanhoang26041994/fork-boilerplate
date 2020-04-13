import React from 'react';
import { Button, Badge } from '@/components';

const Demo = () => {
  return (
   <Badge count={2}>
    <Button icon="bell" />
   </Badge>
  );
};

export default Demo;

Demo.header = 'WITH BADGE';
Demo.href = 'button-with-badge';
Demo.code = `import React from 'react';
import { Button, Badge } from '@/components';

const Demo = () => {
  return (
   <Badge count={2}>
    <Button icon="bell" />
   </Badge>
  );
};

export default Demo;
`;

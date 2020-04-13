import React from 'react';
import { Button, ButtonGroup } from '@/components';

const Demo = () => {
  return (
    <ButtonGroup className="mr-2" fluid>
      <Button icon="power" />
      <Button icon="message" />
      <Button icon="bell" />
    </ButtonGroup>
  );
};

export default Demo;

Demo.header = 'FLUIDGROUPBUTTON';
Demo.href = 'button-fluidgroupbutton';
Demo.code = `import React from 'react';
import { Button, ButtonGroup } from '@/components';

const Demo = () => {
  return (
    <ButtonGroup className="mr-2" fluid>
      <Button icon="power" />
      <Button icon="message" />
      <Button icon="bell" />
    </ButtonGroup>
  );
};

export default Demo;
`;

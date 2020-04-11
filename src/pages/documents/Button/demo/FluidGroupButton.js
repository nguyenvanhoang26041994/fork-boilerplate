import React from 'react';
import { Button, ButtonGroup } from '@/components';

const Demo = () => {
  return (
    <ButtonGroup className="mr-2" fluid>
      <Button icon="power-off" />
      <Button icon="comments" />
      <Button icon="bell" />
    </ButtonGroup>
  );
};

Demo.code = `
import React from 'react';
import { Button, ButtonGroup } from '@/components';

const Demo = () => {
  return (
    <ButtonGroup className="mr-2">
      <Button icon="power-off" />
      <Button icon="comments" />
      <Button icon="bell" />
    </ButtonGroup>
  );
};
`;

export default Demo;

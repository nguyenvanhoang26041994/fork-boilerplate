import React from 'react';
import { Button, ButtonGroup } from '@/components';

const Demo = () => {
  return (
    <div>
      <ButtonGroup className="mb-2">
        <Button icon="power" />
        <Button icon="message" />
        <Button icon="bell" />
      </ButtonGroup>
      <ButtonGroup className="mb-2" primary>
        <Button icon="power" />
        <Button icon="message" />
        <Button icon="bell" />
      </ButtonGroup>
      <ButtonGroup className="mb-2" danger>
        <Button icon="power" />
        <Button icon="message" />
        <Button icon="bell" />
      </ButtonGroup>
      <ButtonGroup className="mb-2" glassed>
        <Button icon="power" />
        <Button icon="message" />
        <Button icon="bell" />
      </ButtonGroup>
      <ButtonGroup className="mb-2" color="purple">
        <Button icon="power" />
        <Button icon="message" />
        <Button icon="bell" />
      </ButtonGroup>
      <ButtonGroup className="mb-2" size="1.25rem">
        <Button icon="power" />
        <Button icon="message" />
        <Button icon="bell" />
      </ButtonGroup>
    </div>
  );
};

export default Demo;

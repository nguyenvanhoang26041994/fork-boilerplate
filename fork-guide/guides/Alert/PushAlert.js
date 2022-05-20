import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Alert, Button, ButtonGroup } from 'fork-design';

const pushAlert = (placement) => {
  Alert.ref.push(({ doClose }) => {
    return (
      <Alert className="mx-2 my-1" onClose={doClose}>Just simle infomation for you!</Alert>
    );
  }, {
    placement,
  })
};

export default () => {
  return (
    <Wrapper>
      <Button color="primary" onClick={() => pushAlert('top-center')}>Click Me</Button>
      <Button onClick={Alert.ref.closeAll}>Close All</Button>
      <ButtonGroup>
        <Button onClick={() => pushAlert('bottom-right')}>Bottom Right</Button>
        <Button onClick={() => pushAlert('top-left')}>Top Left</Button>
        <Button onClick={() => pushAlert('top-right')}>Top Right</Button>
        <Button onClick={() => pushAlert('bottom-center')}>Bottom Center</Button>
        <Button onClick={() => pushAlert('bottom-left')}>Bottom Left</Button>
      </ButtonGroup>
    </Wrapper>
  );
};

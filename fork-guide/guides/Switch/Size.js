import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Switch } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch defaultChecked size={35} />
      <Switch defaultChecked size={50}/>
    </Wrapper>
  );
};

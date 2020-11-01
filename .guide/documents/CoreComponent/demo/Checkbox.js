import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Checkbox, Radio } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Radio name="same" />
      <Radio name="same" defaultChecked />
      <Radio disabled />
      <Radio disabled defaultChecked className="mr-10" />
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox disabled defaultChecked className="mr-10"/>
    </Wrapper>
  );
};

export default Demo;

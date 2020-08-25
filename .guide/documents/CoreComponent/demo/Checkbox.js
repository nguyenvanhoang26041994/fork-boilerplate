import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import {
  Switch,
  Checkbox,
  Radio,
} from '@@/fork-ui/src/components/core';

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
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <Switch disabled defaultChecked />
      <Switch loading />
      <Switch loading defaultChecked />
    </Wrapper>
  );
};

export default Demo;

import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Button } from '@@/fork-ui/src/components/core';
import { Cast } from '@@/fork-ui/src/components/icons';

const Demo = () => (
  <Wrapper>
    <Button>Basic</Button>
    <Button primary>Primary</Button>
    <Button circle icon={<Cast />} />
  </Wrapper>
);

export default Demo;

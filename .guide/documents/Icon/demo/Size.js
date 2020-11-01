import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Alarm } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
    <Wrapper>
      <Alarm size="1rem" />
      <Alarm size="1.5rem" />
      <Alarm size="30px" />
    </Wrapper>
  );
};

export default Demo;

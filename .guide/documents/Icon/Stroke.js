import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Alarm } from '@fork-ui/components/icons';

const Demo = () => {
  return (
    <Wrapper>
      <Alarm size="2rem" />
      <Alarm stroke="1.5" size="2rem" />
      <Alarm stroke="2" size="2rem" />
    </Wrapper>
  );
};

export default Demo;

import React from 'react';
import Wrapper from '../../shared/Wrapper';
import Alarm from '@fork-ui/components/icons/all/Alarm';

const Demo = () => {
  return (
    <Wrapper style={{ fontSize: '2rem' }}>
      <Alarm />
      <Alarm stroke="1.5" />
      <Alarm stroke="2" />
    </Wrapper>
  );
};

export default Demo;

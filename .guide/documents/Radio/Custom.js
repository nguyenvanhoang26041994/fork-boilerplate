import React from 'react';
import styled from 'styled-components';
import { Radio } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';


const PinkRadio = styled(Radio)`
  color: pink;
`;

const DangerRadio = styled(Radio)`
  color: var(--red);
`;

const SuccessRadio = styled(Radio)`
  color: var(--green);
`;

const Demo = () => {
  return (
    <Wrapper>
      <PinkRadio name="custom" value="value-1" defaultChecked />
      <DangerRadio name="custom" value="value-2" />
      <SuccessRadio name="custom" value="value-3" />
    </Wrapper>
  );
};

export default Demo;

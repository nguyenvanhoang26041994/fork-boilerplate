import React from 'react';
import styled from 'styled-components';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Checkbox } from '@@/fork-ui/src/components/core';

const PinkCheckbox = styled(Checkbox)`
  color: pink;
`;

const DangerCheckbox = styled(Checkbox)`
  color: var(--red);
`;

const SuccessCheckbox = styled(Checkbox)`
  color: var(--green);
`;

const Demo = () => {
  return (
    <Wrapper>
      <PinkCheckbox defaultChecked />
      <DangerCheckbox defaultChecked />
      <SuccessCheckbox defaultChecked />
    </Wrapper>
  );
};

export default Demo;

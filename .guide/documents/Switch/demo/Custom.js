import React from 'react';
import styled from 'styled-components';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Switch } from '@@/fork-ui/src/components/core';

const SuccessSwitch = styled(Switch)`
  color: var(--green);
`;

const DangerSwitch = styled(Switch)`
  color: var(--red);
`;

const PurpleSwitch = styled(Switch)`
  color: purple;
`;

const MinialSwitch = styled(Switch)`
  width: 36px;
  .fswitch-lever {
    margin: 0;
  }

  .fswitch-mark {
    height: 50%;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <SuccessSwitch defaultChecked />
      <DangerSwitch defaultChecked />
      <PurpleSwitch loading defaultChecked />
      <MinialSwitch defaultChecked />
    </Wrapper>
  );
};

export default Demo;

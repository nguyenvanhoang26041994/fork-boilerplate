import React from 'react';
import styled from 'styled-components';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Switch } from '@@/fork-ui/src/components/core';

const SuccessSwitch = styled(Switch)`
  color: var(--green);

  .fswitch-input {
    &:checked,
    &:disabled:checked {
      + .fswitch-fake {
        color: var(--green);
        background-color: currentColor;
      }
    }
  }
`;

const DangerSwitch = styled(Switch)`
  color: var(--red);

  .fswitch-input {
    &:checked,
    &:disabled:checked {
      + .fswitch-fake {
        color: var(--red);
        background-color: currentColor;
      }
    }
  }
`;

const PurpleSwitch = styled(Switch)`
  color: purple;

  .fswitch-input {
    &:checked,
    &:disabled:checked {
      + .fswitch-fake {
        color: purple;
        background-color: currentColor;
      }
    }
  }
`;

const MinialSwitch = styled(Switch)`
  .fswitch-mark {
    margin: 0;
  }

  .fswitch-fake {
    height: 50%;
  }

  .fswitch-input:checked {
    + .fswitch-fake {
        .fswitch-mark {
          transform: translateX(1.77em);
        }
      }
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

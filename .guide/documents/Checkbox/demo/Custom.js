import React from 'react';
import styled from 'styled-components';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Checkbox } from '@@/fork-ui/src/components/core';

const PinkCheckbox = styled(Checkbox)`
  .fcbox-input {
    &:hover {
      + .fcbox-mark {
        color: pink;
      }
    }

    &:checked,
    &:disabled:checked {
      + .fcbox-mark {
        color: pink;
      }
    }
  }
`;

const DangerCheckbox = styled(Checkbox)`
  .fcbox-input {
    &:hover {
      + .fcbox-mark {
        color: var(--red);
      }
    }

    &:checked,
    &:disabled:checked {
      + .fcbox-mark {
        color: var(--red);
      }
    }
  }
`;

const SuccessCheckbox = styled(Checkbox)`
  .fcbox-input {
    &:hover {
      + .fcbox-mark {
        color: var(--green);
      }
    }

    &:checked,
    &:disabled:checked {
      + .fcbox-mark {
        color: var(--green);
      }
    }
  }
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

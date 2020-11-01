import React from 'react';
import styled from 'styled-components';
import { Radio } from '@@/fork-ui/src/components/core';
import Wrapper from '@@/.guide/shared/Wrapper';


const PinkRadio = styled(Radio)`
  .fradio-input {
    &:hover {
      + .fradio-mark {
        color: pink;
      }
    }

    &:checked,
    &:disabled:checked {
      + .fradio-mark {
        color: pink;
      }
    }
  }
`;

const DangerRadio = styled(Radio)`
  .fradio-input {
    &:hover {
      + .fradio-mark {
        color: var(--red);
      }
    }

    &:checked,
    &:disabled:checked {
      + .fradio-mark {
        color: var(--red);
      }
    }
  }
`;

const SuccessRadio = styled(Radio)`
  .fradio-input {
    &:hover {
      + .fradio-mark {
        color: var(--green);
      }
    }

    &:checked,
    &:disabled:checked {
      + .fradio-mark {
        color: var(--green);
      }
    }
  }
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

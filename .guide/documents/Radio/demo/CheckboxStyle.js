import React from 'react';
import styled from 'styled-components';

import { Radio, RadioGroup } from '@@/fork-ui/src/components/core';
import Wrapper from '@@/.guide/shared/Wrapper';

const StyledRadio = styled(Radio)`
  .fradio-mark {
    border-radius: var(--border-radius);

    &::before {
      content: '\\2713';
    }
  }
`;

// Note: content: '\\\\2713' in real code, not '\\2713' as display;

const Demo = () => {
  const [props] = RadioGroup.useRadioGroup('value-1');
  // const [{ value, onChange }] = RadioGroup.useRadioGroup('value-1');

  return (
    <Wrapper>
      <RadioGroup {...props}>
        <StyledRadio value="value-1" />
        <StyledRadio value="value-2" />
      </RadioGroup>
    </Wrapper>
  );
};

export default Demo;

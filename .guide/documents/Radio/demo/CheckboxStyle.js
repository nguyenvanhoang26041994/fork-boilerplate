import React from 'react';
import styled from 'styled-components';

import { Radio } from '@@/fork-ui/src/components/core';
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
  const [props] = Radio.Group.useRadioGroup('value-1');
  // const [{ value, onChange }] = Radio.Group.useRadioGroup('value-1');

  return (
    <Wrapper>
      <Radio.Group {...props}>
        <StyledRadio value="value-1" />
        <StyledRadio value="value-2" />
      </Radio.Group>
    </Wrapper>
  );
};

export default Demo;

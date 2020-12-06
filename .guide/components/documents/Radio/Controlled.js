import React from 'react';
import { Radio, RadioGroup } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';


const Demo = () => {
  const [props] = RadioGroup.useRadioGroup('value-1');
  // const [{ value, onChange }] = RadioGroup.useRadioGroup('value-1');

  return (
    <Wrapper>
      <RadioGroup {...props}>
        <Radio value="value-1" />
        <Radio value="value-2" />
      </RadioGroup>
    </Wrapper>
  );
};

export default Demo;

import React from 'react';
import { Radio, useRadioGroup } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';


const Demo = () => {
  const [{ value, onChange }] = useRadioGroup('value-2');

  return (
    <Wrapper>
      <Radio
        value="value-1"
        checked={'value-1' === value}
        onChange={onChange}
      />
      <Radio
        value="value-2"
        checked={'value-2' === value}
        onChange={onChange}
      />
      <Radio
        value="value-3"
        checked={'value-3' === value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default Demo;

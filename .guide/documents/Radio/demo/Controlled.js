import React, { useState, useCallback } from 'react';
import { Radio } from '@@/fork-ui/src/components/core';
import Wrapper from '@@/.guide/shared/Wrapper';

const Demo = () => {

  const [props] = Radio.Group.useRadioGroup('value-1');
  // const [{ value, onChange }] = Radio.Group.useRadioGroup('value-1');

  return (
    <Wrapper>
      <Radio.Group {...props}>
        <Radio value="value-1" />
        <Radio value="value-2" />
      </Radio.Group>
    </Wrapper>
  );
};

export default Demo;

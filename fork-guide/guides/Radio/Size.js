import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Radio } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Radio name="size" value="value-1" defaultChecked />
      <Radio name="size" value="value-2" size={20} />
      <Radio name="size" value="value-3" size={30} />
    </Wrapper>
  );
};

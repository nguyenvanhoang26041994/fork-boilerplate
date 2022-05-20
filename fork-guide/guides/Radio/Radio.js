import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Radio } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Radio name="basic" value="value-1" defaultChecked />
      <Radio name="basic" value="value-2" />
      <Radio name="basic2" value="value-3" disabled defaultChecked />
      <Radio name="basic2" value="value-4" disabled />
    </Wrapper>
  );
};

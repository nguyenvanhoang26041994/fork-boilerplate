import React, { useState } from 'react';
import styled from 'styled-components';

import { Radio } from '@@/fork-ui/src/components/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  const [value, setValue] = useState();

  return (
    <Wrapper>
      <Radio
        name="same"
        value="value-1"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        name="same"
        value="value-2"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        name="same"
        value="value-3"
        disabled
        onChange={e => setValue(e.target.value)}
      />
    </Wrapper>
  );
};

export default Demo;

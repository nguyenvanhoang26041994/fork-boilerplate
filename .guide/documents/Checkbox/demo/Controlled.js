import React, { useState } from 'react';
import styled from 'styled-components';

import { Checkbox } from '@/fork-ui/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Wrapper>
      <Checkbox
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <Checkbox
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
    </Wrapper>
  );
};

export default Demo;

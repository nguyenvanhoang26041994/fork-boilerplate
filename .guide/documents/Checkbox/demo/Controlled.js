import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Checkbox } from '@@/fork-ui/src/components/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  const [checked, setChecked] = useState(false);
  const onChange = useCallback(e => setChecked(e.target.checked), setChecked);

  return (
    <Wrapper>
      <Checkbox checked={checked} onChange={onChange} />
      <Checkbox checked={checked} onChange={onChange} />
    </Wrapper>
  );
};

export default Demo;

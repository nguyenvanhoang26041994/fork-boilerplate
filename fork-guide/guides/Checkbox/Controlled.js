import React, { useState, useCallback } from 'react';
import { Wrapper } from '@fork-guide/components';
import { Checkbox } from '@fork-ui/core';

export default () => {
  const [checked, setChecked] = useState(false);
  const onChange = useCallback(e => setChecked(e.target.checked), setChecked);

  return (
    <Wrapper>
      <Checkbox checked={checked} onChange={onChange} />
      <Checkbox checked={checked} onChange={onChange} />
    </Wrapper>
  );
};

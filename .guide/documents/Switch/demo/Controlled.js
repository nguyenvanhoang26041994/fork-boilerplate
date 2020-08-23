import React, { useState, useCallback } from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Switch } from '@@/fork-ui/src/components/core';

const Demo = () => {
  const [checked, setChecked] = useState(false);
  const onChange = useCallback(e => setChecked(e.target.checked));

  return (
    <Wrapper>
      <Switch checked={checked} onChange={onChange} />
      <Switch checked={checked} onChange={onChange} />
    </Wrapper>
  );
};

export default Demo;

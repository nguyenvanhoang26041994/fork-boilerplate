import React, { useState, useCallback } from 'react';
import { Password } from '@fork-ui/components/core';

const Demo = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => setValue(e.target.value), []);

  return (
    <Password
      placeholder="The placeholder"
      value={value}
      onChange={onChange}
    />
  );
};

export default Demo;

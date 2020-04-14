import React, { useState, useCallback } from 'react';
import { Textbox } from '@/components';

const Demo = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => setValue(e.target.value), []);

  return (
    <Textbox
      placeholder="The placeholder"
      value={value}
      onChange={onChange}
    />
  );
};

export default Demo;

import React, { useState, useCallback } from 'react';
import { Password } from '@/components';

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

Demo.header = 'CONTROLLED';
Demo.href = 'password-controlled';
Demo.code = `import React, { useState, useCallback } from 'react';
import { Password } from '@/components';

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
`;

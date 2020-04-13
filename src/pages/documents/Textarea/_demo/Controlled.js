import React, { useState, useCallback } from 'react';
import { Textarea } from '@/components';

const Demo = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => setValue(e.target.value), []);

  return (
    <Textarea
      placeholder="The placeholder"
      value={value}
      onChange={onChange}
    />
  );
};

export default Demo;

Demo.header = 'CONTROLLED';
Demo.href = 'textarea-controlled';
Demo.code = `import React, { useState, useCallback } from 'react';
import { Textarea } from '@/components';

const Demo = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => setValue(e.target.value), []);

  return (
    <Textarea
      placeholder="The placeholder"
      value={value}
      onChange={onChange}
    />
  );
};

export default Demo;
`;

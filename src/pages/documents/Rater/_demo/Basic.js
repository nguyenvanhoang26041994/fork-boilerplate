import React, { useState, useCallback } from 'react';
import { Rater } from '@/components';

const Demo = () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      star={star}
      onChange={onChange}
    />
  );
};

export default Demo;

Demo.header = 'BASIC';
Demo.href = 'rater-basic';
Demo.code = `import React, { useState, useCallback } from 'react';
import { Rater } from '@/components';

const Demo = () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      star={star}
      onChange={onChange}
    />
  );
};

export default Demo;
`;

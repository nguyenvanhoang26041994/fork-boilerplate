import React, { useState, useCallback } from 'react';
import { Rater } from '@/rc-neumorphism/core';

const Demo = () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      star={star}
      max={10}
      onChange={onChange}
    />
  );
};

export default Demo;
Demo.header = 'MAX';
Demo.anchorTitle = 'Max';
Demo.href = 'rater-max';

Demo.code = `import React, { useState, useCallback } from 'react';
import { Rater } from 'rc-neumorphism/core';

const Demo = () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      star={star}
      max={10}
      onChange={onChange}
    />
  );
};

export default Demo;
`;

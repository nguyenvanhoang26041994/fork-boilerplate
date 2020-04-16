import React, { useState, useCallback } from 'react';
import { Rater } from '@/rc-neumorphism/core';

const Demo = () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      star={star}
      fontSize="2rem"
      onChange={onChange}
    />
  );
};

export default Demo;
Demo.header = 'SIZE';
Demo.anchorTitle = 'Size';
Demo.href = 'rater-size';

Demo.code = `import React, { useState, useCallback } from 'react';
import { Rater } from 'rc-neumorphism/core';

const Demo = () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      star={star}
      fontSize="2rem"
      onChange={onChange}
    />
  );
};

export default Demo;
`;

import React, { useState, useCallback } from 'react';
import { Rater } from '@/components';

const Demo = () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      icon="heart"
      star={star}
      onChange={onChange}
    />
  );
};

export default Demo;

Demo.header = 'ICON';
Demo.href = 'rater-icon';
Demo.code = `import React, { useState, useCallback } from 'react';
import { Rater } from '@/components';

const Demo = () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      icon="heart"
      star={star}
      onChange={onChange}
    />
  );
};

export default Demo;
`;

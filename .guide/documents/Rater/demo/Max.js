import React, { useState, useCallback } from 'react';
import { Rater } from '@@/fork-ui/src/components/core';

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

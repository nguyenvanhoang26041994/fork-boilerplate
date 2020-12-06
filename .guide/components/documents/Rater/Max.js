import React, { useState, useCallback } from 'react';
import { Rater } from '@fork-ui/components/core';

const Demo = () => {
  const [star, setStar] = useState(6);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      size="2em"
      star={star}
      max={10}
      onChange={onChange}
    />
  );
};

export default Demo;

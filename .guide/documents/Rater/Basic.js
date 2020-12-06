import React, { useState, useCallback } from 'react';
import { Rater } from '@fork-ui/components/core';

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

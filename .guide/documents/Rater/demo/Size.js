import React, { useState, useCallback } from 'react';
import { Rater } from '@@/fork-ui/src/components/core';

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

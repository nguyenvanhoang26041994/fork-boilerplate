import React, { useState, useCallback } from 'react';
import { Rater } from '@fork-ui/components/core';
import { Heart } from '@fork-ui/components/icons';

const Demo = () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      icon={<Heart />}
      star={star}
      onChange={onChange}
    />
  );
};

export default Demo;

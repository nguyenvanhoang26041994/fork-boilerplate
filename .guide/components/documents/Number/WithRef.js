import React, { useCallback, useRef } from 'react';
import { Number } from '@fork-ui/components/core';

const Demo = () => {
  const ref = useRef();

  const onChange = useCallback(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <Number
      ref={ref}
      placeholder="The placeholder"
      onChange={onChange}
    />
  );
};

export default Demo;

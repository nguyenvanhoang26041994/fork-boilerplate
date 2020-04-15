import React, { useCallback, useRef } from 'react';
import { Textarea } from '@/rc-neumorphism/core';

const Demo = () => {
  const ref = useRef();

  const onChange = useCallback(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <Textarea
      ref={ref}
      placeholder="The placeholder"
      onChange={onChange}
    />
  );
};

export default Demo;
Demo.header = 'With Ref';
Demo.href = 'textarea-with-ref';

Demo.code = `import React, { useCallback, useRef } from 'react';
import { Textarea } from '@/rc-neumorphism/core';

const Demo = () => {
  const ref = useRef();

  const onChange = useCallback(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <Textarea
      ref={ref}
      placeholder="The placeholder"
      onChange={onChange}
    />
  );
};

export default Demo;
`;

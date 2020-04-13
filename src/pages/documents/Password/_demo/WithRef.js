import React, { useCallback, useRef } from 'react';
import { Password } from '@/components';

const Demo = () => {
  const ref = useRef();

  const onChange = useCallback(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <Password
      ref={ref}
      placeholder="The placeholder"
      onChange={onChange}
    />
  );
};

export default Demo;

Demo.header = 'WITH REF';
Demo.href = 'password-with-ref';
Demo.code = `import React, { useCallback, useRef } from 'react';
import { Password } from '@/components';

const Demo = () => {
  const ref = useRef();

  const onChange = useCallback(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <Password
      ref={ref}
      placeholder="The placeholder"
      onChange={onChange}
    />
  );
};

export default Demo;
`;

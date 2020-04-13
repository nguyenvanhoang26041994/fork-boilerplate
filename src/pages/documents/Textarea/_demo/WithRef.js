import React, { useCallback, useRef } from 'react';
import { Textarea } from '@/components';

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

Demo.header = 'WITHREF';
Demo.href = 'textarea-withref';
Demo.code = `import React, { useCallback, useRef } from 'react';
import { Textarea } from '@/components';

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

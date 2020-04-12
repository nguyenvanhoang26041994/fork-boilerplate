import React, { useCallback } from 'react';
import { Form } from '@/components';

const Demo = () => {
  const onChange = useCallback((e) => {
    console.log(e.target);
  }, []);

  return (
    <Form className="w-full">
      <Form.Textbox
        error="Should not empty"
        label="Account"
        placeholder="Your account"
        name="account"
        onChange={onChange}
      />
      <Form.Password
        defaultValue="123456789"
        success="Look good!"
        label="Password"
        placeholder="Your password"
        name="password"
        onChange={onChange}
      />
    </Form>
  );
};

export default Demo;

Demo.header = 'STATUS';
Demo.href = 'form-status';
Demo.code = `import React, { useCallback } from 'react';
import { Form } from '@/components';

const Demo = () => {
  const onChange = useCallback((e) => {
    console.log(e.target);
  }, []);

  return (
    <Form className="w-full">
      <Form.Textbox
        error="Should not empty"
        label="Account"
        placeholder="Your account"
        name="account"
        onChange={onChange}
      />
      <Form.Password
        defaultValue="123456789"
        success="Look good!"
        label="Password"
        placeholder="Your password"
        name="password"
        onChange={onChange}
      />
    </Form>
  );
};

export default Demo;
`;

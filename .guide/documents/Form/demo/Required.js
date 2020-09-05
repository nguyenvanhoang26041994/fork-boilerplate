import React, { useCallback } from 'react';
import { Form, Select } from '@@/fork-ui/src/components/core';
import { Message, Power, Copy } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  const onChange = useCallback((e) => {
    console.log(e.target);
  }, []);

  return (
    <Form className="w-full">
      <Form.Textbox
        required
        label="Account"
        placeholder="Your account"
        name="account"
        onChange={onChange}
      />
      <Form.Password
        required
        label="Password"
        placeholder="Your password"
        name="password"
        onChange={onChange}
      />
      <Form.Select
        required
        label="Sex"
        placeholder="Your gender"
        name="password"
        onChange={onChange}
      >
        <Select.Option
          key="male"
          title="Male"
          icon={<Message />}
        />
        <Select.Option
          key="female"
          title="Female"
          icon={<Power />}
        />
        <Select.Option
          key="other"
          title="Other"
          icon={<Copy />}
        />
      </Form.Select>
      <Form.Number
        required
        label="Age"
        placeholder="Your age"
        name="age"
        onChange={onChange}
      />
      <Form.Textarea
        required
        label="Comment"
        placeholder="Comment here"
        name="message"
        onChange={onChange}
      />
    </Form>
  );
};

export default Demo;

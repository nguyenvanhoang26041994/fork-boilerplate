import React, { useCallback, useState, useEffect } from 'react';
import { Box, Form, Button, Select, Skeleton } from '@/rc-neumorphism/core';

const formSkeleton = (
  <div className="w-full">
    <Skeleton rect w="10%" />
    <Skeleton rect h="2rem" />
    <Skeleton rect w="10%" />
    <Skeleton rect h="2rem" />
    <Skeleton rect w="10%" />
    <Skeleton rect h="2rem" />
    <Skeleton rect w="10%" />
    <Skeleton rect h="2rem" />
    <Skeleton rect w="10%" />
    <Skeleton rect h="10rem" />
    <Skeleton rect w="10%" />
  </div>
);

const Demo = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(e => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setLoading(true);

    const time = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(time);
  }, []);

  return (
    <Box loading={loading} skeleton={formSkeleton}>
      <Form className="w-full">
        <Form.Textbox
          label="Account"
          placeholder="Your account"
          name="account"
        />
        <Form.Password
          label="Password"
          placeholder="Your password"
          name="password"
        />
        <Form.Select
          label="Sex"
          placeholder="Your gender"
          name="password"
        >
          <Select.Option key="male" title="Male" icon="message" />
          <Select.Option key="female" title="Female" icon="power" />
          <Select.Option key="other" title="Other" icon="copy" />
        </Form.Select>
        <Form.InputNumber
          label="Age"
          placeholder="Your age"
          name="age"
        />
        <Form.Textarea
          label="Comment"
          placeholder="Comment here"
          name="message"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Box>
  );
};

export default Demo;

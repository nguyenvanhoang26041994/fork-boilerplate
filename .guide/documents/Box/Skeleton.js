import React, { useCallback, useState, useEffect } from 'react';
import { Box, Form, Button, Skeleton } from '@fork-ui/components/core';

const formSkeleton = (
  <div className="w-full">
    <Skeleton p w="10%" />
    <Skeleton rect h="3rem" />
    <Skeleton p w="20%" />
    <Skeleton rect h="3rem" />
    <Skeleton rect w="5rem" h="2.5rem" />
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
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Box>
  );
};

export default Demo;

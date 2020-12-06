import React, { useCallback, useState, useEffect } from 'react';
import { Box, Form, Button } from '@fork-ui/components/core';

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
    <Box loading={loading}>
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

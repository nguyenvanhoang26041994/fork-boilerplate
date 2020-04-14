import React, { useState, useCallback } from 'react';
import { Button, Loader } from '@/components';

const Demo = () => {
  const [loading, setLoading] = useState(false);

  const handleLoading = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="flex">
      <Button disabled={loading} className="mr-2" onClick={handleLoading}>
        {loading ? <Loader.Spinner className="mr-2" /> : ''}
        <span>Click Me</span>
      </Button>
      <Button className="mr-2" size="1.25rem">
        <span>Loading big</span>
        <Loader.Spinner className="ml-2" />
      </Button>
    </div>
  );
};

export default Demo;

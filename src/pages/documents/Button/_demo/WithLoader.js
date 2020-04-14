import React, { useState, useCallback } from 'react';
import { Button } from '@/components';

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
      <Button loading={loading} className="mr-2" onClick={handleLoading}>
        <span>Click Me</span>
      </Button>
      <Button loading className="mr-2" size="1.25rem">
        <span>Loading big</span>
      </Button>
    </div>
  );
};

export default Demo;

Demo.header = 'WITH LOADER';
Demo.href = 'button-with-loader';
Demo.code = `import React, { useState, useCallback } from 'react';
import { Button } from '@/components';

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
      <Button loading={loading} className="mr-2" onClick={handleLoading}>
        <span>Click Me</span>
      </Button>
      <Button loading className="mr-2" size="1.25rem">
        <span>Loading big</span>
      </Button>
    </div>
  );
};

export default Demo;
`;

import React, { useCallback } from 'react';
import { Button, helper } from '@/components';

const Demo = () => {
  const onOpen = useCallback(() => {
    helper.pushAlert({
      success: true,
      title: 'Success Title',
      duration: 0,
    })
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Push Alert</Button>
    </div>
  );
};

export default Demo;

Demo.header = 'PUSH';
Demo.href = 'alert-push';
Demo.code = `import React, { useCallback } from 'react';
import { Button, helper } from '@/components';

const Demo = () => {
  const onOpen = useCallback(() => {
    helper.pushAlert({
      success: true,
      title: 'Success Title',
      duration: 0,
    })
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Push Alert</Button>
    </div>
  );
};

export default Demo;
`;

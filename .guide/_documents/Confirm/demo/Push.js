import React, { useCallback } from 'react';
import { Button, helper } from '@/rc-neumorphism/core';

const Demo = () => {
  const onOpen = useCallback(() => {
    helper.pushConfirm({
      title: 'Confirm Title',
      onOk: () => console.log('OK'),
      onCancel: () => console.log('CANCEL'),
      children: 'What is Lorem Ipsum?',
    })
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Open Confirm</Button>
    </div>
  );
};

export default Demo;
Demo.header = 'PUSH';
Demo.anchorTitle = 'Push';
Demo.href = 'confirm-push';

Demo.code = `import React, { useCallback } from 'react';
import { Button, helper } from '@/rc-neumorphism/core';

const Demo = () => {
  const onOpen = useCallback(() => {
    helper.pushConfirm({
      title: 'Confirm Title',
      onOk: () => console.log('OK'),
      onCancel: () => console.log('CANCEL'),
      children: 'What is Lorem Ipsum?',
    })
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Open Confirm</Button>
    </div>
  );
};

export default Demo;
`;

import React, { useCallback } from 'react';
import { PureConfirm } from '@fork-ui/components/core';

const Demo = () => {
  const onCancel = useCallback(() => console.log('CANCEL'), []);
  const onOk = useCallback(() => console.log('OK'), []);

  return (
    <PureConfirm
      onCancel={onCancel}
      onOk={onOk}
      title="Confirm Title"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </PureConfirm>
  );
};

export default Demo;

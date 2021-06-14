import React from 'react';
import { ColumnWrapper } from '@style-guide/components';
import { Textarea, Textbox, Password } from '@fork-ui/core';

export default () => {
  return (
    <ColumnWrapper>
      <Textarea />
      <Textbox />
      <Password defaultValue="123456" />
    </ColumnWrapper>
  );
};

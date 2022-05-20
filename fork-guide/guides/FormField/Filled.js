import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { FormField } from 'fork-design';

export default () => {
  return (
    <Wrapper col span="10px">
      <FormField filled>
        <FormField.Label>Your Account</FormField.Label>
        <FormField.Textbox placeholder="Aa" />
      </FormField>
      <FormField filled>
        <FormField.Label>Your Password</FormField.Label>
        <FormField.Password placeholder="Aa" />
      </FormField>
      <FormField filled>
        <FormField.Label>Note</FormField.Label>
        <FormField.Textarea placeholder="Aa" />
      </FormField>
    </Wrapper>
  );
};

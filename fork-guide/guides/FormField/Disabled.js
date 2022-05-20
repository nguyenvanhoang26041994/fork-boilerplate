import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { FormField } from 'fork-design';

export default () => {
  return (
    <Wrapper col span="10px">
      <FormField>
        <FormField.Label>Your Account</FormField.Label>
        <FormField.Textbox disabled placeholder="Aa" />
      </FormField>
      <FormField>
        <FormField.Label>Your Password</FormField.Label>
        <FormField.Password disabled placeholder="Aa" />
      </FormField>
      <FormField>
        <FormField.Label>Note</FormField.Label>
        <FormField.Textarea disabled placeholder="Aa" />
      </FormField>
      <FormField filled>
        <FormField.Label>Your Account</FormField.Label>
        <FormField.Textbox disabled placeholder="Aa" />
      </FormField>
      <FormField filled>
        <FormField.Label>Your Password</FormField.Label>
        <FormField.Password disabled placeholder="Aa" />
      </FormField>
      <FormField filled>
        <FormField.Label>Note</FormField.Label>
        <FormField.Textarea disabled placeholder="Aa" />
      </FormField>
    </Wrapper>
  );
};

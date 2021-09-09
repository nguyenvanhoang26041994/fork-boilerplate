import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { FormField, Textbox, Textarea, Password, Select, MultiSelect } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper col span="10px">
      <FormField>
        <FormField.Label>Your Account</FormField.Label>
        <Textbox placeholder="Aa" />
      </FormField>
      <FormField>
        <FormField.Label>Your Password</FormField.Label>
        <Password placeholder="Aa" />
      </FormField>
      <FormField>
        <FormField.Label>Your Option</FormField.Label>
        <Select defaultValue="2">
          <Select.Option value="1">Option One</Select.Option>
          <Select.Option value="2">Option Two</Select.Option>
          <Select.Option value="3">Option Three</Select.Option>
        </Select>
      </FormField>
      <FormField>
        <FormField.Label>Your Option</FormField.Label>
        <MultiSelect defaultValue={['1', '2']}>
          <MultiSelect.Option value="1">Option One</MultiSelect.Option>
          <MultiSelect.Option value="2">Option Two</MultiSelect.Option>
          <MultiSelect.Option value="3">Option Three</MultiSelect.Option>
        </MultiSelect>
      </FormField>
      <FormField>
        <FormField.Label>Note</FormField.Label>
        <Textarea placeholder="Aa" />
      </FormField>
    </Wrapper>
  );
};

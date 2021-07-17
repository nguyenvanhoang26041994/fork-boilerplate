import React from 'react';
import { Select } from '@fork-ui/select';

const options = [
  {
    key: 'vn',
    text: 'Vietnam',
    currency: 'VND'
  },
  {
    key: 'us',
    text: 'United State',
    currency: 'USD'
  },
  {
    key: 'uk',
    text: 'United Kingdom',
    currency: 'GBP'
  },
];

export default () => {
  return (
    <Select defaultValue="us">
      {options.map((option) => (
        <Select.Option key={option.key} value={option.key}>
          {option.text}
        </Select.Option>
      ))}
    </Select>
  );
};

import React, { useState } from 'react';
import { Wrapper } from '@fork-guide/components';
import { Select } from '@fork-ui/core';

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
  const [value, setValue] = useState('us');
  return (
    <Wrapper span="20px">
      <div className="w-1/2">
        <Select value={value} setValue={setValue}>
          {options.map((option) => (
            <Select.Option key={option.key} value={option.key}>
              {option.text}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className="w-1/2">
        <Select
          value={value}
          setValue={setValue}
        >
          {options.map((option) => (
            <Select.Option key={option.key} value={option.key}>
              {option.text}
            </Select.Option>
          ))}
        </Select>
      </div>
    </Wrapper>
  );
};

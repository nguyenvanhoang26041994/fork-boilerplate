import React, { useRef, useEffect } from 'react';
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
  const ref = useRef();
  const onChanged = () => {
    console.log(ref.current, ref.current.value);
  };

  return (
    <Select defaultValue="us" ref={ref} onChanged={onChanged}>
      {options.map((option) => (
        <Select.Option key={option.key} value={option.key}>
          {option.text}
        </Select.Option>
      ))}
    </Select>
  );
};

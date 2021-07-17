import React, { useCallback, useState } from 'react';
import { Wrapper } from '@fork-guide/components';
import { Select } from '@fork-ui/select';
import { find } from 'lodash';

const options = [
  {
    key: 'vn',
    name: 'Vietname',
    currency: 'VND'
  },
  {
    key: 'us',
    name: 'United State',
    currency: 'USD'
  },
  {
    key: 'uk',
    name: 'United Kingdom',
    currency: 'GBP'
  },
];

export default () => {
  const [selectedOption, setSelectedOption] = useState(() => Select.getDefaultSelected('us', options));

  // Controlled Select Component by using selectedOption and setSelectedOption
  return (
    <Wrapper span="10px">
      <div className="w-1/2">
        <Select selectedOption={selectedOption} setSelectedOption={setSelectedOption}>
          {options.map((option) => (
            <Select.Option
              key={option.key}
              value={option}
              disabled={option.key === 'disabled' }
            >
              {option.name}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className="w-1/2">
        <Select selectedOption={selectedOption} setSelectedOption={setSelectedOption}>
          {options.map((option) => (
            <Select.Option
              key={option.key}
              value={option}
            >
              {option.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </Wrapper>
  );
};

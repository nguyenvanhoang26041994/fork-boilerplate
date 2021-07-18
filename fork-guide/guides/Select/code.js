export const ControlledSelect = {
  code: `import React, { useState } from 'react';
import { Wrapper } from '@fork-guide/components';
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
`,
  demoName: 'Controlled Select',
}

export const Custom = {
  code: `import React from 'react';
import styled from 'styled-components';
import { Avatar, Badge } from '@fork-ui/core';
import { Select } from '@fork-ui/select';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';
const options = [
  {
    id: 'hoang-nguyen',
    name: 'Hoang Nguyen',
    jobTitle: 'Frontend Developer',
    color: 'var(--primary)',
    avatar: avatarLink,
  },
  {
    id: 'son-le',
    name: 'Son Le',
    jobTitle: 'Fullstack Developer',
    color: 'var(--red-6)',
    avatar: avatarLink2,
  },
  {
    id: 'son-nguyen',
    name: 'Son Nguyen',
    jobTitle: 'Mobile Developer',
    color: 'var(--green-6)',
    avatar: avatarLink3,
  },
  {
    id: 'alex-jonhson',
    name: 'Alex Jonhson',
    jobTitle: 'UI/UX Designer',
    color: 'var(--green-6)',
    avatar: avatarLink,
  },
];

const StyledOption = styled(Select.Option)\`
  padding-top: 8px;
  padding-bottom: 8px;
\`;
export default () => {
  return (
    <Select
      defaultValue="hoang-nguyen"
      render={(props, selectedOption) => (
        <Select.Single {...props}>
          <Badge.Dot overlap placement="bottom-end" color={selectedOption.data.color}>
            <Avatar size={24} src={selectedOption.data.avatar} />
          </Badge.Dot>
          <div className="flex flex-col items-start ml-3">
            <b>{selectedOption.data.name} - {selectedOption.data.jobTitle}</b>
          </div>
        </Select.Single>
      )}
    >
      {options.map((option) => (
        <StyledOption
          key={option.id}
          value={option.id}
          data={option}
        >
          <Badge.Dot overlap placement="bottom-end" color={option.color}>
            <Avatar src={option.avatar} />
          </Badge.Dot>
          <div className="flex flex-col items-start ml-3">
            <b>{option.name}</b>
            <i>{option.jobTitle}</i>
          </div>
        </StyledOption>
      ))}
    </Select>
  );
};
`,
  demoName: 'Custom',
}

export const Seachable = {
  code: `import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Avatar, Badge } from '@fork-ui/core';
import { Select } from '@fork-ui/select';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';
const options = [
  {
    id: 'hoang-nguyen',
    name: 'Hoang Nguyen',
    jobTitle: 'Frontend Developer',
    color: 'var(--primary)',
    avatar: avatarLink,
  },
  {
    id: 'son-le',
    name: 'Son Le',
    jobTitle: 'Fullstack Developer',
    color: 'var(--red-6)',
    avatar: avatarLink2,
  },
  {
    id: 'son-nguyen',
    name: 'Son Nguyen',
    jobTitle: 'Mobile Developer',
    color: 'var(--green-6)',
    avatar: avatarLink3,
  },
  {
    id: 'alex-jonhson',
    name: 'Alex Jonhson',
    jobTitle: 'UI/UX Designer',
    color: 'var(--green-6)',
    avatar: avatarLink,
  },
];

const StyledOption = styled(Select.Option)\`
  padding-top: 8px;
  padding-bottom: 8px;
\`;
export default () => {
  return (
    <Wrapper span="10px">
      <div className="w-1/2">
        <Select
          renderSearchbox
          defaultValue="son-nguyen"
        >
          {options.map((option) => (
            <Select.Option
              key={option.id}
              value={option.id}
            >
              {option.name}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className="w-1/2">
        <Select
          defaultValue="son-nguyen"
          render={(props, selectedOption) => (
            <Select.Single {...props}>
              <Badge.Dot overlap placement="bottom-end" color={selectedOption.data.color}>
                <Avatar size={24} src={selectedOption.data.avatar} />
              </Badge.Dot>
              <div className="flex flex-col items-start ml-3">
                <b>{selectedOption.data.name} - {selectedOption.data.jobTitle}</b>
              </div>
            </Select.Single>
          )}
          renderSearchbox={(props) => (
            <Select.Searchbox
              {...props}
              placeholder="Type your user name..."
            />
          )}
          optionFilter={(props, { searchRegex }) => {
            return searchRegex && searchRegex.test(props.data.name);
          }}
        >
          {options.map((option) => (
            <StyledOption
              key={option.id}
              value={option.id}
              data={option}
            >
              <Badge.Dot overlap placement="bottom-end" color={option.color}>
                <Avatar src={option.avatar} />
              </Badge.Dot>
              <div className="flex flex-col items-start ml-3">
                <b>{option.name}</b>
                <i>{option.jobTitle}</i>
              </div>
            </StyledOption>
          ))}
        </Select>
      </div>
    </Wrapper>
  );
};
`,
  demoName: 'Seachable',
}

export const Select = {
  code: `import React from 'react';
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
`,
  demoName: 'Select',
}

